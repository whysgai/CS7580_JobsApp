import { useSelector, useDispatch } from "react-redux";
import { ONBOARDINGS } from "../data/data";
import { readJobs, logout, setOnboarding } from "../redux/actions";


const Navbar = () => {

    const user = useSelector(state => state.user); 
    const dispatch = useDispatch();

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <span className="navbar-brand" >JOBZ</span>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <span className="navbar-text">{user.username}</span>
                        <a className={`nav-link ${user.saved.length < 1 ? "disabled" : ""}`} href="#"
                            onClick={() => dispatch(readJobs(null))}
                            aria-disabled={user.saved.length < 1}
                        >
                            My Saved Jobs: {user.saved.length}
                        </a>
                        {
                            user.onboarding.intro ?
                                <a className="nav-link" href="#" onClick={() => dispatch(setOnboarding(ONBOARDINGS.INTRO))}>
                                    Tutorial
                                </a>
                                :
                                <></>
                        }
                        <a className="nav-link" href="#" onClick={() => dispatch(logout())}>
                            Logout
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;