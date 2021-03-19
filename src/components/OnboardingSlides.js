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
        <div className="container">
            <div className="card card-body">
                <p>Slide Count: {slideCount}</p>

            
                <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="false">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active" data-bs-interval="false">
                            <img src="..." class="d-block w-100" alt="..."/>
                            <div class="carousel-caption d-none d-md-block">
                                <h5>First slide label</h5>
                                <p>Some representative placeholder content for the first slide.</p>
                            </div>
                        </div>
                        <div class="carousel-item" data-bs-interval="false">
                            <img src="..." class="d-block w-100" alt="..."/>
                            <div class="carousel-caption d-none d-md-block">
                                <h5>Second slide label</h5>
                                <p>Some representative placeholder content for the second slide.</p>
                            </div>
                        </div>
                        <div class="carousel-item" data-bs-interval="false">
                            <img src="..." class="d-block w-100" alt="..."/>
                            <div class="carousel-caption d-none d-md-block">
                                <h5>Third slide label</h5>
                                <p>Some representative placeholder content for the third slide.</p>
                            </div>
                        </div>
                    </div>
                    {
                        slideCount > 0 ?
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark"  data-bs-slide="prev" onClick={() => advance(false)}>
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            :
                            <></>
                    }
                    {
                        slideCount < 2 ?
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark"  data-bs-slide="next" onClick={() => advance(true)}>
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                            :
                            <></>
                    }
                </div>
                <button onClick={() => dispatch(setOnboarding(ONBOARDINGS.INTRO))}>{!slidesDone ? "Skip" : "Done"}</button>
            </div>
        </div>
    )
};

export default OnboardingSlides;