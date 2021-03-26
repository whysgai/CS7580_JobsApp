import { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { LANGUAGES, ONBOARDINGS } from "../data/data";
import { readJobs, setOnboarding } from "../redux/actions";
import SortButton from "./SortButton";

const JobButtons = () => {
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();
    const [selectedLanguages, setSelectedLanguages] = useState([]);    

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
            if (selectedLanguages.includes(language)) {
                langs = selectedLanguages.filter(lang => lang !== language);
            } else {
                for (let sl of selectedLanguages) {
                    langs.push(sl);
                }
                langs.push(language);
            }
            setSelectedLanguages(langs);
        }
        if (!user.onboarding.searched) {
            dispatch(setOnboarding(ONBOARDINGS.SEARCHED));
        }
    };

    const all = () => {
        updateSelectedJobs("All");
        let boxes = document.getElementsByClassName("btn-check");
        for (let box of boxes) {
           box.checked = false;
        }
    }

    return (
        <div className="job-buttons">
            <div className="btn-group filter-buttons" role="group" aria-label="Basic checkbox toggle button group"> 
                {
                    Object.keys(LANGUAGES).map((lang, index) =>
                        <>    
                            <input type="checkbox" name="languageSelection" 
                                className="btn-check" id={`languageCheck${index}`} 
                                onChange={() => updateSelectedJobs(LANGUAGES[lang])}
                            />                          
                            <label key={index} className="btn btn-outline-primary" autoComplete="off"
                                htmlFor={`languageCheck${index}`}
                            >
                                {LANGUAGES[lang]}       
                            </label>
                              
                        </>
                    )
                }
                <button className="btn btn-outline-primary" onClick={() => all()}>
                    All
                    {/* <input type="checkbox" name="languageSelection" 
                        className="btn-check" id="languageRadioAll" 
                        onChange={() => updateSelectedJobs("All")}
                    />
                    <label className="btn btn-outline-primary" autoComplete="off"
                        htmlFor="languageRadioAll"
                    >
                        All                        
                    </label> */}
                </button>
            </div>
            <span>
                <SortButton />
            </span>
            
        </div>
    );
};

export default JobButtons;