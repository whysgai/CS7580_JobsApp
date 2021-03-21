import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortAmountDown } from "@fortawesome/free-solid-svg-icons";
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
        <>
            {/* <button onClick={() => dispatch(readJobs(LANGUAGES.ALL, null))}>All</button> */}
            {/* {Object.keys(LANGUAGES).forEach((lang, index) => {console.log(lang)})} */}
            <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                {
                    Object.keys(LANGUAGES).map((lang, index) =>
                        <div key={index} className="btn btn-outline-primary">
                            
                            <label className="" autoComplete="off"
                                htmlFor={`languageRadio${index}`}
                                // key={index} className="btn btn-outline-primary"
                            >
                                {LANGUAGES[lang]}   
                                                         
                            </label>
                            <input type="radio" name="languageSelection" 
                                className="btn-check" id={`languageRadio${index}`} 
                                onChange={() => dispatch(readJobs(LANGUAGES[lang]))}
                            />    
                        </div>
                    )
                }
            </div>
            {/* <button onClick={() => dispatch(readJobs(null))}>My Saved Jobs</button> */}
            <button className="btn btn-primary" onClick={() => dispatch(sortBySaves())}>
                Sort By Popularity <FontAwesomeIcon icon={faSortAmountDown} aria-hidden="true" />
            </button>
        </>
    );
};

export default JobButtons;