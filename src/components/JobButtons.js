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
        console.log("New selected languages", selectedLanguages);
        dispatch(readJobs(selectedLanguages));
    }, [selectedLanguages]);

    const updateSelectedJobs = (language) => {
        if (language === "All") {
            setSelectedLanguages([]);
        } else {
            let langs = [];
            for (let sl of selectedLanguages) {
                langs.push(sl);
            }
            langs.push(language);
            setSelectedLanguages(langs);
        }
    }

    return (
        <>
            {/* <button onClick={() => dispatch(readJobs(LANGUAGES.ALL, null))}>All</button> */}
            {/* {Object.keys(LANGUAGES).forEach((lang, index) => {console.log(lang)})} */}
            <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                <div className="btn btn-outline-primary">
                    <label className="" autoComplete="off"
                        htmlFor="languageRadioAll"
                        // key={index} className="btn btn-outline-primary"
                    >
                        All   
                                                    
                    </label>
                    <input type="checkbox" name="languageSelection" 
                        className="btn-check" id="languageRadioAll" 
                        onChange={() => updateSelectedJobs("All")}
                    />
                </div>  
                {
                    Object.keys(LANGUAGES).map((lang, index) =>
                        <div key={index} className="btn btn-outline-primary">
                            
                            <label className="" autoComplete="off"
                                htmlFor={`languageRadio${index}`}
                                // key={index} className="btn btn-outline-primary"
                            >
                                {LANGUAGES[lang]}   
                                                         
                            </label>
                            <input type="checkbox" name="languageSelection" 
                                className="btn-check" id={`languageRadio${index}`} 
                                onChange={() => updateSelectedJobs(LANGUAGES[lang])}
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