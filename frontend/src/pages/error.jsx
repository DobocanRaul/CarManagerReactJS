import HomeButton from '../components/HomeButton.jsx';
import NotLoggedInFunction from '../functions/NotLoggedInFunction.jsx';

function NoPage(){
    NotLoggedInFunction();
    return (
        <div>
            <h1>404</h1>
            <p>Page not found</p>
            <HomeButton/>
        </div>
    );
}

export default NoPage;