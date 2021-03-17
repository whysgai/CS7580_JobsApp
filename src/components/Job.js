import {useSelector} from "react-redux";

const Job = (props) => {

    const user = useSelector(state => state.user);

    return (
        <div>
            <p>{props.job.title}</p>
            {
                user.saved.includes(props.job.id) ?
                    <span>Saved</span>
                    :
                    <button>Save</button>
            }
            
            <p>{props.job.company}</p>
            <p>{props.job.description}</p>        
        </div>
    );
};

export default Job;