import { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Tooltip } from "bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortAmountDown } from "@fortawesome/free-solid-svg-icons";
import { LANGUAGES, ONBOARDINGS } from "../data/data";
import { sortBySaves, readJobs, setOnboarding } from "../redux/actions";

const JobButtons = () => {
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();
    const [selectedLanguages, setSelectedLanguages] = useState([]);    
    const [tooltipOpen, toggleTooltip] = useState(false);
    const tooltipRef = useRef();

    // Fetch jobs when the selectedLanguages are updated
    useEffect(() => {
        console.log("New selected languages", selectedLanguages);
        dispatch(readJobs(selectedLanguages));
    }, [selectedLanguages]);

    // Tooltip useEffect
    useEffect(() => {
        let tooltip = tooltipRef.current;
        let bsTooltip = Tooltip.getInstance(tooltip)
        if (!bsTooltip) {
            bsTooltip = new Tooltip(tooltip);
        }
        else {
            if (user.onboarding.sorted) {
                bsTooltip.hide();
            } else {
                tooltipOpen ? bsTooltip.show() : bsTooltip.hide();
            }
        }
    });

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
    };

    // Sort the jobs and update user variable for tooltip
    const sortJobs = () => {
        dispatch(sortBySaves());
        if (!user.onboarding.sorted) {
            dispatch(setOnboarding(ONBOARDINGS.SORTED));
        }        
    };

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
            <button className="btn btn-primary" onClick={() => sortJobs()}
                ref={tooltipRef}
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                data-bs-trigger="manual"
                title="Sort viewed tasks by how frequently they are saved."
                onPointerEnter={() => toggleTooltip(true)}
                onFocus={() => toggleTooltip(true)}
                onPointerOut={() => toggleTooltip(false)}
                onBlur={() => toggleTooltip(false)}
            >
                Sort By Popularity <FontAwesomeIcon icon={faSortAmountDown} aria-hidden="true" />
            </button>
        </>
    );
};

export default JobButtons;