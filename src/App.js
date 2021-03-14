import {useSelector} from "react-redux";

import {LOGIN_STATE} from "../redux/storeConstants";

import './App.css';

function App() {
    const loginState = useSelector(state => state.loginState);

    return (
        <div className="App">
            {
                loginState !== LOGIN_STATE.LOGGED_IN ?
                    <></>
                    :
                    <></>
            }
  
        </div>
  );
}

export default App;
