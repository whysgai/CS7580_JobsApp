import { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Tooltip } from "bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortAmountDown } from "@fortawesome/free-solid-svg-icons";
import { ONBOARDINGS } from "../data/data";
import { sortBySaves, setOnboarding } from "../redux/actions";

const SortButton = () => {
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();
    const [tooltipOpen, toggleTooltip] = useState(false);
    const tooltipRef = useRef();

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

    // Sort the jobs and update user variable for tooltip
    const sortJobs = () => {
        dispatch(sortBySaves());
        if (!user.onboarding.sorted) {
            dispatch(setOnboarding(ONBOARDINGS.SORTED));
        }        
    };

    return (
        <button className="btn btn-primary sort-button" onClick={() => sortJobs()}
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
            Sort By Popularity&nbsp;
            <FontAwesomeIcon icon={faSortAmountDown} aria-hidden="true" />
        </button>
    );
}

export default SortButton;