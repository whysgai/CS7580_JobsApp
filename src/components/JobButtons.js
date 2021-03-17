import { useDispatch } from "react-redux";
import { LANGUAGES } from "../data/data";
import { readJobs } from "../redux/actions";

const JobButtons = () => {

    const dispatch = useDispatch();

    return (
        <div>
            {/* <button onClick={() => dispatch(readJobs(LANGUAGES.ALL, null))}>All</button> */}
            {Object.keys(LANGUAGES).forEach((lang, index) => {console.log(lang)})}
            {
                Object.keys(LANGUAGES).map((lang, index) =>
                    <button onClick={() => dispatch(readJobs(LANGUAGES[lang], null))}>{LANGUAGES[lang]}</button>
                )
            }
        </div>
    );
};

export default JobButtons;