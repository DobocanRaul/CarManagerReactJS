import {useNavigate} from "react-router-dom";

function BackButton() {
    const navigate = useNavigate();
    return (
        <button onClick={() => navigate(`/`)}>Home</button>
    );
}

export default BackButton;