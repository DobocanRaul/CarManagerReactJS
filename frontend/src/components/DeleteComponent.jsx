import React from "react";
import axios from "axios";

function deleteCar(carId) {
    axios.delete(`http://localhost:3000/cars/${carId}`).catch((error) => {
        console.log(error);
    }
    );
}
function DeleteComponent({list, setlist, carId, setShowDeleteComponent}) {
        return(
            <div>
            <button onClick={setShowDeleteComponent(false)}>Cancel</button>
            <button onClick={() => setlist(list.filter(car => car.id !== carId))}>Delete</button>
            </div>
        )
}

export default DeleteComponent;