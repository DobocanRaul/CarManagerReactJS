import HomeButton from '../components/HomeButton.jsx';
import NotLoggedInFunction from '../functions/NotLoggedInFunction.jsx';

function NoPage(){
    const globalData=useContext(GlobalContext);
    const token=globalData.token;
    const navigate = useNavigate();
    if(NotLoggedInFunction(token)==false)
      {
        useEffect(() => {
          navigate(`/login`);
        }, []);
      }
    return (
        <div>
            <h1>404</h1>
            <p>Page not found</p>
            <HomeButton/>
        </div>
    );
}

export default NoPage;