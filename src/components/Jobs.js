import { useSelector } from "react-redux";
import JobButtons from "../components/JobButtons";
import Job from "../components/Job";



const Jobs = () => {

    const jobs = useSelector(state => state.jobs);    

    return (
        <div>
            <p>Lookit all these jobbz!</p>
            <JobButtons />
            {console.log("Jobs:", jobs)}
            {
                jobs !== [] ?
                    jobs.map((job, index) => 
                        <Job key={index} job={job}/>
                    )
                    :
                    <p>No jobs</p>
            }
        </div>
    );
}

export default Jobs;