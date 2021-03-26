import { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { LANGUAGES, ONBOARDINGS } from "../data/data";
import { readJobs, setOnboarding } from "../redux/actions";
import SortButton from "./SortButton";

const JobButtons = () => {
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();
    const [selectedLanguages, setSelectedLanguages] = useState([]);    
    // const [tooltipOpen, toggleTooltip] = useState(false);
    // const tooltipRef = useRef();

    // Fetch jobs when the selectedLanguages are updated
    useEffect(() => {
        console.log("New selected languages", selectedLanguages);
        dispatch(readJobs(selectedLanguages));
    }, [selectedLanguages]);

    // Add selected jobs to new array (deep copy) before fetching from server
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
        if (!user.onboarding.searched) {
            dispatch(setOnboarding(ONBOARDINGS.SEARCHED));
        }
    };

    return (
        <div className="job-buttons">
            {/* <button onClick={() => dispatch(readJobs(LANGUAGES.ALL, null))}>All</button> */}
            {/* {Object.keys(LANGUAGES).forEach((lang, index) => {console.log(lang)})} */}
            <div className="btn-group filter-buttons" role="group" aria-label="Basic checkbox toggle button group"> 
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
            </div>
            <SortButton />
        </div>
    );
};

export default JobButtons;