var faker = require("faker");
const mysql = require("mysql2");
const fs = require("fs");
const { type } = require("os");
var list = [];
var isValid = false;

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "mppdb",
});

function addCarToList() {
  const entity = {
    id: faker.datatype.uuid(),
    name: faker.vehicle.manufacturer(),
    model: faker.datatype.number({ min: 1990, max: 2024 }),
    color: faker.vehicle.color(),
    price: faker.datatype.number({ min: 10000, max: 100000 }),
  };
  list.push(entity);
  writeToJson();
  console.log(list);
}

async function verifyToken(token) {
  const result = await db
    .promise()
    .query("SELECT token FROM User WHERE token=?", [token])
    .then(([rows, fields]) => {
      return rows;
    });
  return result;
}

const getCarList = (req, res) => {
  const query = "SELECT * FROM Cars";
  db.query(query, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json(result);
    }
  });
};

const getCarById = (req, res) => {
  const id = req.params.id;
  const query = "SELECT * FROM Cars WHERE id=?";
  db.query(query, [id], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log(result);
      res.json(result);
    }
  });
};

const addCar = (req, res) => {
  const newCar = req.body[0];
  const token = req.body[1];
  verifyToken(token).then((result) => {
    if (result.length > 0) {
      if (result[0].token === token) {
        const query =
          "Insert into Cars (id,name,model,color,price,motorId) values(?,?,?,?,?,?)";
        db.query(
          query,
          [
            newCar.id,
            newCar.name,
            newCar.model,
            newCar.color,
            newCar.price,
            newCar.motorId,
          ],
          (err, result) => {
            if (err) {
              console.log(err);
            } else {
              console.log(result);
              res.json(newCar);
            }
          }
        );
      } else {
        res.json("Invalid token");
      }
    } else {
      res.json("Invalid token");
    }
  });
};


const updateCar = (req, res) => {
  const passedCar = req.body[0];
  const token = req.body[1];
    verifyToken(token).then((result) => {
        if (result.length > 0) {
        if (result[0].token === token) {
            const query =
            "UPDATE Cars SET name=?,model=?,color=?,price=?,motorId=? WHERE id=?";
            db.query(
            query,
            [
                passedCar.name,
                passedCar.model,
                passedCar.color,
                passedCar.price,
                passedCar.motorId,
                passedCar.id,
            ],
            (err, result) => {
                if (err) {
                console.log(err);
                } else {
                console.log(result);
                res.json(passedCar);
                }
            }
            );
        } else {
            res.json("Invalid token");
        }
        } else {
        res.json("Invalid token");
        }
    });
  
};


const deleteCar = (req, res) => {
  const id = req.params.id;
  const token=req.params.token;
    verifyToken(token).then((result) => {
        if (result.length > 0) {
        if (result[0].token === token) {
            const query = "DELETE FROM Cars WHERE id=?";
            db.query(query, [id], (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.json(result);
            }
            });
        } else {
            res.json("Invalid token");
        }
        } else {
        res.json("Invalid token");
        }
    });
};

const deleteCars = (req, res) => {
  const ids = req.body;
  const query = "DELETE FROM Cars WHERE id=?";
  ids.forEach((id) => {
    db.query(query, [id], (err, result) => {
      if (err) {
        console.log(err);
      }
    });
  });
};const addCars = (req, res) => {
  const cars = req.body;
  //Verify if car already exists or if the car has all the required fields
  const query = "Insert into Cars (id,name,model,color,price,motorId) values ?";
  cars.forEach((car) => {
    db.query(
      query,
      [car.id, car.name, car.model, car.color, car.price, car.motorId],
      (err, result) => {
        if (err) {
          console.log(err);
        }
      }
    );
  });
};
const updateCars = (req, res) => {
  const cars = req.body;
  const query =
    "UPDATE Cars SET name=?,model=?,color=?,price=?,motorId=? WHERE id=?";
  cars.forEach((car) => {
    db.query(
      query,
      [car.name, car.model, car.color, car.price, car.motorId, car.id],
      (err, result) => {
        if (err) {
          console.log(err);
        }
      }
    );
  });
};

module.exports = {
  addCarToList,
  getCarList,
  getCarById,
  addCar,
  updateCar,
  deleteCar,
  addCars,
  updateCars,
  deleteCars,
};
