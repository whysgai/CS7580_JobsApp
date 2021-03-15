import {useSelector} from "react-redux";
import Login from "../components/Login";
import OnboardingSlides from "../components/OnboardingSlides";
import {LOGIN_STATE} from "../redux/storeConstants";
import '../styles/App.css';

function App() {
    const loginState = useSelector(state => state.loginState);
    const user = useSelector(state => state.user);

    return (
        <div className="App">
            {
                loginState !== LOGIN_STATE.LOGGED_IN ?
                    <Login />
                    :
                    <>{
                        !user.onboarding.intro ?
                            <OnboardingSlides />
                            :
                            <div>
                                {console.log("Logged in!", user)}
                                <p>Logged in!</p>
                            </div>
                    }</>
                    
            }
  
        </div>
  );
}

export default App;
