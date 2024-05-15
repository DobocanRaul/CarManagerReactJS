import { PieChart } from "@mui/x-charts/PieChart";
import BackButton from "../components/HomeButton";
import NotLoggedInFunction from "../functions/NotLoggedInFunction";
import { useContext } from "react";
import GlobalContext from "../GlobalContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
function ChartPage() {
    const globalData=useContext(GlobalContext);
    const token=globalData.token;
    const navigate = useNavigate();
    if(NotLoggedInFunction(token)==false)
      {
        useEffect(() => {
          navigate(`/login`);
        }, []);
      }
    const carsByYears={};
    const list=globalData.carlist;
    list.forEach((car)=>{
        if(carsByYears[car.model]){
            carsByYears[car.model]++;
        }
        else{
            carsByYears[car.model]=1;
        }
    });
    console.log(carsByYears);
    const seriesData=[];
    for(const car in carsByYears){
        seriesData.push({value:carsByYears[car],label:car});
    }
  return (
    <div style={{overflow:"hidden"}}>
      <h1>Number of cars by model year</h1>
      <div >
      <PieChart
  series={[
    {
      arcLabel: (item) => `(${item.value})`,
      data: seriesData,
      
    },
  ]}
  width={400}
  height={400}
/>
</div>
    <BackButton/>
    
    </div>
  );
}

export default ChartPage; 