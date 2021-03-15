import {useSelector} from "react-redux";


const Jobs = () => {

    const jobs = useSelector(state => state.jobs);

    return (
        <div>
            <p>Lookit all these jobbz! <button>All</button></p>
            {console.log("Jobs:", jobs)}


        </div>
    );
}

export default Jobs;