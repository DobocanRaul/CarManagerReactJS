import {useNavigate} from "react-router-dom";

function AddButton() {
    const navigate = useNavigate();
    return (
        <button onClick={() => navigate(`/add`)} style={{width:"140px", height:"100px"}}> Add car</button>
    );
}

export default AddButton;