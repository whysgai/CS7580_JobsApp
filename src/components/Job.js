import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckSquare } from "@fortawesome/free-solid-svg-icons";
import { faSquare } from "@fortawesome/free-regular-svg-icons";

import { toggleSaved } from "../redux/actions";

const Job = (props) => {

    const user = useSelector(state => state.user);

    const dispatch = useDispatch();

    return (
        <div className="accordion-item">
            <div className="accordian-header" id={`jobHeading${props.job.id}`}>
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#jobCollapse${props.job.id}`} aria-expanded="false" aria-controls={`jobCollapse${props.job.id}`}>
                <span>{props.job.title}</span>
                <span>{props.job.company}</span>
                </button>
            </div>
            <div id={`jobCollapse${props.job.id}`} className="accordion-collapse collapse" aria-labelledby={`jobHeading${props.job.id}`} data-bs-parent="#jobsAccordion">
                <div className="accordion-body">
                    <p>Job ID: {props.job.id}</p>
                    <p>{props.job.description}</p> 
                    {
                        user.saved.includes(props.job.id) ?
                            <button
                                className="btn btn-secondary"
                                onClick={() => dispatch(toggleSaved(true, props.job.id))}
                            >
                                Saved <FontAwesomeIcon icon={faCheckSquare} aria-hidden="true" />
                            </button>
                            :
                            <button
                                className="btn btn-outline-secondary" 
                                onClick={() => dispatch(toggleSaved(false, props.job.id))}
                            >
                                Save <FontAwesomeIcon icon={faSquare} aria-hidden="true" />
                            </button>
                    }
                </div>
            </div>                   
        </div>
    );
};

export default Job;