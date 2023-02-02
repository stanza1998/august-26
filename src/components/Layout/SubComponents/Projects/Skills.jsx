import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import "../Projects/skills.css"
import image from "../../../assets/logo/construction.png"

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section className="skill" id="skills">
            <div className="container d-none d-lg-block" style={{marginTop:"-80px"}}>
                <div className="row">
                    <div className="col-12">
                        <div className="skill-bx wow zoomIn">
                            <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                                <div className="item">
                                    <img src={image} alt="Image" />
                                    <h5>Project Name</h5>
                                </div>
                                <div className="item">
                                    <img src={image} alt="Image" />
                                    <h5>Brand Identity</h5>
                                </div>
                                <div className="item">
                                    <img src={image} alt="Image" />
                                    <h5>Logo Design</h5>
                                </div>
                                <div className="item">
                                    <img src={image} alt="Image" />
                                    <h5>Project Name</h5>
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container d-block d-lg-none">
                <div className="row">
                    <div className="col-12">
                        <div className="skill-bx wow zoomIn">
                            <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                                <div className="item">
                                    <img src={image} alt="Image" />
                                    <h5 className="text-white">Project Name</h5>
                                </div>
                                <div className="item">
                                    <img src={image} alt="Image" />

                                </div>
                                <div className="item">
                                    <img src={image} alt="Image" />
                                    <h5 className="text-white">Project Name</h5>
                                </div>
                                <div className="item">
                                    <img src={image} alt="Image" />
                                    <h5 className="text-white">Project Name</h5>
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
            {/* <img className="background-image-left" src={colorSharp} alt="Image" /> */}
        </section>
    )
}
