import {useSelector} from "react-redux";
import Login from "../components/Login";
import Navbar from "../components/Navbar";
import OnboardingSlides from "../components/OnboardingSlides";
import Jobs from "../components/Jobs";
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
                    <>
                        <Navbar />
                        {
                            !user.onboarding.intro ?
                                <OnboardingSlides />
                                :
                                <>

                                    <Jobs />
                                </>
                                
                        }
                    </>
                    
            }
  
        </div>
  );
}

export default App;
