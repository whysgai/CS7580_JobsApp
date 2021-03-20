import { useSelector, useDispatch } from "react-redux";
import { toggleSaved } from "../redux/actions";

const Job = (props) => {

    const user = useSelector(state => state.user);

    const dispatch = useDispatch();

    return (
        <div className="accordion-item">
            <div className="accordian-header" id={`jobHeading${props.job.id}`}>
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#jobCollapse${props.job.id}`} aria-expanded="false" aria-controls={`jobCollapse${props.job.id}`}>
                <span>{props.job.title}</span>
                <span>{props.job.company}</span>
                {
                    user.saved.includes(props.job.id) ?
                        <button
                            onClick={() => dispatch(toggleSaved(true, props.job.id))}
                        >Saved</button>
                        :
                        <button 
                            onClick={() => dispatch(toggleSaved(false, props.job.id))}
                        >Save</button>
                }
                </button>
            </div>
            <div id={`jobCollapse${props.job.id}`} class="accordion-collapse collapse" aria-labelledby={`jobHeading${props.job.id}`} data-bs-parent="#jobsAccordion">
                <div className="accordion-body">
                    <p>Job ID: {props.job.id}</p>
                    <p>{props.job.description}</p> 
                </div>
            </div>                   
        </div>
    );
};

export default Job;