import { useDispatch } from "react-redux";
import { ONBOARDINGS } from "../data/data";
import { setOnboarding } from "../redux/actions";

const OnboardingSlides = () => {

    const dispatch = useDispatch();

    return (
        <div>
            <p>Welcome, first time user!</p>
            <button onClick={() => dispatch(setOnboarding(ONBOARDINGS.INTRO))}>Done</button>
        </div>
    )
};

export default OnboardingSlides;