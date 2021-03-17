
const Job = (props) => {
    return (
        <div>
            <p>{props.job.title}</p>
            <p>{props.job.company}</p>
            <p>{props.job.description}</p>        
        </div>
    );
};

export default Job;