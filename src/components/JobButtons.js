import { useDispatch } from "react-redux";
import { LANGUAGES } from "../data/data";
import { sortBySaves, readJobs } from "../redux/actions";

const JobButtons = () => {

    const dispatch = useDispatch();

    return (
        <div>
            {/* <button onClick={() => dispatch(readJobs(LANGUAGES.ALL, null))}>All</button> */}
            {/* {Object.keys(LANGUAGES).forEach((lang, index) => {console.log(lang)})} */}
            {
                Object.keys(LANGUAGES).map((lang, index) =>
                    <button key={index} onClick={() => dispatch(readJobs(LANGUAGES[lang]))}>{LANGUAGES[lang]}</button>
                )
            }
            <button onClick={() => dispatch(readJobs(null))}>My Saved Jobs</button>
            <button onClick={() => dispatch(sortBySaves())}>Sort By Popularity</button>
        </div>
    );
};

export default JobButtons;