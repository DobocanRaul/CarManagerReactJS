import { PieChart } from "@mui/x-charts/PieChart";
import BackButton from "../components/HomeButton";

function ChartPage({list}) {

    const carsByYears={};

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