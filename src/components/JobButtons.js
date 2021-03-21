import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { LANGUAGES } from "../data/data";
import { sortBySaves, readJobs } from "../redux/actions";

const JobButtons = () => {

    // If searching for multiple languages, store here?
    const [selectedLanguages, setSelectedLanguages] = useState([]);

    const dispatch = useDispatch();

    useEffect(() => {
        // Refactor to allow searching for multiple jobs at once?
    }, [selectedLanguages]);

    return (
        <div>
            {/* <button onClick={() => dispatch(readJobs(LANGUAGES.ALL, null))}>All</button> */}
            {/* {Object.keys(LANGUAGES).forEach((lang, index) => {console.log(lang)})} */}
            <div className="btn-group" role="group">
                {
                    Object.keys(LANGUAGES).map((lang, index) =>
                        <>
                            <label key={index} className="btn btn-outline-primary" autocomplete="off"
                                htmlFor={`languageRadio${index-1}`}
                            >
                                {LANGUAGES[lang]}                                
                            </label>
                            <input type="radio" name="languageSelection" 
                                className="btn-check" id={`languageRadio${index}`} 
                                onChange={() => dispatch(readJobs(LANGUAGES[lang]))}
                            />
                        </>
                    )
                }
            </div>
            {/* <button onClick={() => dispatch(readJobs(null))}>My Saved Jobs</button> */}
            <button onClick={() => dispatch(sortBySaves())}>Sort By Popularity</button>
        </div>
    );
};

export default JobButtons;