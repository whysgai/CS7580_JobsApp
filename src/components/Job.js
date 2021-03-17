import { useSelector, useDispatch } from "react-redux";
import { toggleSaved } from "../redux/actions";

const Job = (props) => {

    const user = useSelector(state => state.user);

    const dispatch = useDispatch();

    return (
        <div>
            <p>{props.job.title}</p>
            <p>Job ID: {props.job.id}</p>
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
            
            <p>{props.job.company}</p>
            <p>{props.job.description}</p>        
        </div>
    );
};

export default Job;