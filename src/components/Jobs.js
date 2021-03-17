import { useSelector, useDispatch } from "react-redux";
import { LANGUAGES } from "../data/data";
import { readJobs } from "../redux/actions";
import Job from "../components/Job"


const Jobs = () => {

    const jobs = useSelector(state => state.jobs);

    const dispatch = useDispatch();

    return (
        <div>
            <p>Lookit all these jobbz! <button onClick={() => dispatch(readJobs(LANGUAGES.ALL, null))}>All</button></p>
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