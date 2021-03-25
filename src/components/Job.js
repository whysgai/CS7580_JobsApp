import { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Tooltip } from "bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckSquare } from "@fortawesome/free-solid-svg-icons";
import { faSquare } from "@fortawesome/free-regular-svg-icons";
import { ONBOARDINGS } from "../data/data";
import { toggleSaved, setOnboarding } from "../redux/actions";

const Job = (props) => {
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
            if (user.onboarding.saved) {
                bsTooltip.hide();
            } else {
                tooltipOpen ? bsTooltip.show() : bsTooltip.hide();
            }
        }
    });

    const payscale = (pay) => {
        let scale = "";
        for (let i = 0; i < pay; i++) {
            scale += "$";
        }
        return scale;
    };

    const saveJob = (val, id) => {
        console.log("Saving job. Id " + "  val " + val);
        dispatch(toggleSaved(val, id));
        if (!user.onboarding.saved) {
            dispatch(setOnboarding(ONBOARDINGS.SAVED, true));
        }
    };

    return (
        <div className="accordion-item">
            <div className="accordian-header" id={`jobHeading${props.job.id}`}>
                <button className="accordion-button job-header collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#jobCollapse${props.job.id}`} aria-expanded="false" aria-controls={`jobCollapse${props.job.id}`}>
                    <h3>Position: {props.job.title}</h3>
                </button>
            </div>
            <div id={`jobCollapse${props.job.id}`} className="accordion-collapse collapse" aria-labelledby={`jobHeading${props.job.id}`} data-bs-parent="#jobsAccordion">
                <div className="accordion-body">
                    <h4>Company: {props.job.company}</h4>
                    <p>{props.job.description}</p>
                    <div className="job-details">
                        <h5>Languages: {props.job.languages.map((language, index) => index > 0 ? "; " + language : language)}</h5> 
                        <h5>Salary:&nbsp; 
                            {
                                payscale(props.job.pay)
                            }                    
                        </h5>
                        <span className="save-button"
                            ref={tooltipRef}
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            data-bs-trigger="manual"
                            title="Save job postings to view later."
                            onPointerEnter={() => toggleTooltip(true)}
                            onFocus={() => toggleTooltip(true)}
                            onPointerOut={() => toggleTooltip(false)}
                            onBlur={() => toggleTooltip(false)}
                        >
                            {
                                user.saved.includes(props.job.id) ?
                                    <button
                                        className="btn btn-secondary save-button"
                                        onClick={() => saveJob(true, props.job.id)}
                                        //onClick={() => dispatch(toggleSaved(true, props.job.id))}
                                    >
                                        Saved&nbsp;
                                        <FontAwesomeIcon icon={faCheckSquare} aria-hidden="true" />
                                    </button>
                                    :
                                    <button
                                        className="btn btn-outline-secondary save-button" 
                                        onClick={() => saveJob(false, props.job.id)}
                                        //onClick={() => dispatch(toggleSaved(false, props.job.id))}
                                    >
                                        Save&nbsp;
                                        <FontAwesomeIcon icon={faSquare} aria-hidden="true" />
                                    </button>
                            }
                        </span>
                    </div>
                </div>
            </div>                   
        </div>
    );
};

export default Job;