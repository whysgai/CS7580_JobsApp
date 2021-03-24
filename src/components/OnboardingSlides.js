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
                <div id="carouselExampleDark" className="carousel carousel-dark" data-bs-ride="true">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item" data-bs-interval="false">
                            <div className="slide">
                                <img src="..." className="d-block w-100" alt="..."/>
                                {/* <div className="carousel-caption d-none d-md-block"> */}
                                <div className="carousel-caption">
                                    <h5>Save for later</h5>
                                    <p>Save interesting postings for later review.</p>
                                </div>
                             </div>                            
                        </div>
                        <div className="carousel-item" data-bs-interval="false">
                            <div className="slide">
                                <img src="..." className="d-block w-100" alt="..."/>
                                <div className="carousel-caption">
                                    <h5>Look for langugage</h5>
                                    <p>Postings are tagged with relevant promgramming languages: filter by one or several.</p>
                                </div>
                             </div>                            
                        </div>
                        <div className="carousel-item active" data-bs-interval="false">
                            <div className="slide">
                                <img src="..." className="d-block w-100" alt="..."/>
                                <div className="carousel-caption">
                                    <h5>Welcome to JOBZ</h5>
                                    <p>View job postings from companies around the internet.</p>
                                </div>
                            </div>                            
                        </div>
                    </div>
                    {
                        slideCount > 0 ?
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark"  data-bs-slide="prev" onClick={() => advance(false)}>
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
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
                <button className="btn btn-secondary skip-done" onClick={() => dispatch(setOnboarding(ONBOARDINGS.INTRO))}>{!slidesDone ? "Skip" : "Done"}</button>
            </div>
        </div>
    )
};

export default OnboardingSlides;