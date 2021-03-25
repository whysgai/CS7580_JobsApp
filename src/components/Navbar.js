import { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Tooltip } from "bootstrap";
import { ONBOARDINGS } from "../data/data";
import { readJobs, logout, setOnboarding } from "../redux/actions";


const Navbar = () => {

    const user = useSelector(state => state.user); 
    const dispatch = useDispatch();
    const [tooltipOpen, toggleTooltip] = useState(false);
    const tooltipRef = useRef();

    // Tooltip useEffect
    useEffect(() => {
        let tooltip = tooltipRef.current;
        let bsTooltip = Tooltip.getInstance(tooltip)
        if (!bsTooltip) {
            bsTooltip = new Tooltip(tooltip);
        }
        else {
            if (user.onboarding.seen) {
                bsTooltip.hide();
            } else {
                tooltipOpen ? bsTooltip.show() : bsTooltip.hide();
            }
        }
    });

    const viewSaved = () => {
        dispatch(readJobs(null));
        if (!user.onboarding.seen) {
            dispatch(setOnboarding(ONBOARDINGS.SEEN));
        }
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container container-fluid nav-container">
                <span className="navbar-brand logo" >JOBZ</span>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ">
                        <span className="navbar-text">{user.username}</span>
                        <a className={`nav-link ${user.saved.length < 1 ? "disabled" : ""}`} href="#"
                            onClick={() => viewSaved()}
                            aria-disabled={user.saved.length < 1}
                            ref={tooltipRef}
                            data-bs-toggle="tooltip"
                            data-bs-placement="bottom"
                            data-bs-trigger="manual"
                            title="View your saved jobs here."
                            onPointerEnter={() => toggleTooltip(true)}
                            onFocus={() => toggleTooltip(true)}
                            onPointerOut={() => toggleTooltip(false)}
                            onBlur={() => toggleTooltip(false)}
                        >
                            My Saved Jobs:&nbsp;
                            {user.saved.length}
                        </a>
                        {
                            user.onboarding.intro ?
                                <a className="nav-link" href="#" onClick={() => dispatch(setOnboarding(ONBOARDINGS.INTRO, false))}>
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