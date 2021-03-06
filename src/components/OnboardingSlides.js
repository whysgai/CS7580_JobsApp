import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { ONBOARDINGS } from "../data/data";
import { setOnboarding } from "../redux/actions";

const OnboardingSlides = () => {
    const [slideCount, setSlideCount] = useState(0);
    const [slidesDone, setDone] = useState(false);

    const dispatch = useDispatch();

    useEffect(() => {
        if (!slidesDone && slideCount >= 2) {
            setDone(true);
        }
    }, [slideCount]);

    const advance = (adv) => {
        if (adv) {
            setSlideCount(slideCount + 1);
        } else {
            setSlideCount(slideCount - 1);
        }     
    }

    return (
        <div className="container container-height">
            <div className="card card-body slides">
                <div id="carouselExampleDark" className="carousel carousel-light" data-bs-ride="true">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item" data-bs-interval="false">
                            <div className="slide">
                                <img src={process.env.PUBLIC_URL + "/media/SaveForLater_iPad.png"} className="slide-img" alt="Save interesting postings for later review."/>
                                {/* <div className="carousel-caption d-none d-md-block"> */}
                                <div className="carousel-caption text-dark">
                                    <h5>Save for later</h5>
                                    <p>Save interesting postings for later review.</p>
                                </div>
                             </div>                            
                        </div>
                        <div className="carousel-item" data-bs-interval="false">
                            <div className="slide">
                                <img src={process.env.PUBLIC_URL + "/media/FilterLanguage_iPad.png"} className="slide-img" alt="Postings are tagged with relevant promgramming languages: filter by one or several."/>
                                <div className="carousel-caption text-dark">
                                    <h5>Look for langugage</h5>
                                    <p>Postings are tagged with relevant promgramming languages: filter by one or several.</p>
                                </div>
                             </div>                            
                        </div>
                        <div className="carousel-item active" data-bs-interval="false">
                            <div className="slide">
                                <img src={process.env.PUBLIC_URL + "/media/ViewList_iPad.png"} className="slide-img" alt="View job postings from companies around the internet."/>
                                <div className="carousel-caption text-dark">
                                    <h5>Welcome to JOBZ</h5>
                                    <p>View job postings from companies around the internet.</p>
                                </div>
                            </div>                            
                        </div>
                    </div>
                    {
                        slideCount > 0 ?
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark"  data-bs-slide="prev" onClick={() => advance(false)}>
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            :
                            <></>
                    }
                    {
                        slideCount < 2 ?
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark"  data-bs-slide="next" onClick={() => advance(true)}>
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                            :
                            <></>
                    }
                </div>
                <button className="btn btn-secondary skip-done" onClick={() => dispatch(setOnboarding(ONBOARDINGS.INTRO, true))}>{!slidesDone ? "Skip" : "Done"}</button>
            </div>
        </div>
    )
};

export default OnboardingSlides;