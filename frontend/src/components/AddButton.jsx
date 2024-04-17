import {useNavigate} from "react-router-dom";

function AddButton() {
    const navigate = useNavigate();
    return (
        <div style={{display:"flex",flexDirection:"column", gap:"5px"}}>
        <button onClick={() => navigate(`/add`)} style={{width:"140px", height:"100px"}}> Add car</button>
        <button onClick={() => navigate(`/addmotor`)} style={{width:"140px", height:"100px"}}> Add motor</button>
        </div>
    );
}

export default AddButton;