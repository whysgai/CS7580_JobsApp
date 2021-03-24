import { useSelector } from "react-redux";
import JobButtons from "../components/JobButtons";
import Job from "../components/Job";



const Jobs = () => {

    const jobs = useSelector(state => state.jobs);   
    const user = useSelector(state => state.user); 

    return (
        <div className="container container-height">
            {console.log("User:", user)}
            {console.log("Jobs:", jobs)}
            <div className="card bg-light jobs">
                <div className="card-header buttons">
                    <JobButtons />
                </div>
                <div className="card-body">
                    <div className="accordion accordion-flush" id="jobsAccordion">
                        {
                            jobs !== [] ?
                                jobs.map((job, index) => 
                                    <Job key={index} job={job}/>
                                )
                                :
                                <p>No jobs</p>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Jobs;