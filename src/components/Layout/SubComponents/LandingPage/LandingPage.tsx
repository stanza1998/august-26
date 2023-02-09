import react, { useEffect } from "react"
import "../LandingPage/landing.scss"
import { motion } from "framer-motion"
import arrow from "../../../assets/LandingPage/about-us-line.svg"
import ab from "../../../assets/LandingPage/ab.png"
import vector from "../../../assets/logo/Vector.png"
import vector1 from "../../../assets/logo/vector1.png"
import { useInView } from "react-intersection-observer"
import { useAnimation } from "framer-motion"
import AOS from "aos"
import "aos/dist/aos.css"
import action from "../../../assets/logo/action.png"
import action1 from "../../../assets/logo/action1.png"
import { Slider } from "./slieder"
import image1 from "../../../assets/LandingPage/image1.jpg"
import image2 from "../../../assets/LandingPage/image2.jpg"
import image3 from "../../../assets/LandingPage/image3.jpg"
import border from "../../../assets/LandingPage/borderLine.svg"
import line01 from "../../../assets/LandingPage/Line01.png"
import whatWeDo from "../../../assets/LandingPage/What we do.png"
import whoWeAre from "../../../assets/LandingPage/Who we are.png"
import s from "../../../assets/LandingPage/svg.svg"
import whoWeWantToBe from "../../../assets/LandingPage/Who we want to be.png"
import vector2 from "../../../assets/LandingPage/Vector 2.png"
import { useNavigate } from "react-router-dom"




export const Landing = () => {


    const { ref, inView } = useInView();
    const animation = useAnimation();
    const navigate = useNavigate();

    const toServices = () => {
        navigate("/services")
    }
    const toProjects = () => {
        navigate("/projects")
    }

    useEffect(() => {
        AOS.init({ duration: 1000 })
    }, []);

    useEffect(() => {
        if (inView) {
            animation.start({
                x: 0,
                transition: {
                    type: "spring", duration: 1, bounce: 0.3
                }
            });
        }
        if (!inView) {
            animation.start({ x: "-100vw" })
        }

    }, [inView]);

    return (

        <div className="landingPage" >
            <motion.div
                style={{ padding: "2rem", background: "transparent" }}
                initial={{ x: "-100vw" }}
                animate={{ x: 0 }}
                transition={{ type: 'spring', duration: 1, bounce: 0.2 }}
            >
                <section className="wrapper m-5" >
                    <div className="row">
                        <div className="col-10">
                            <div className="display-5 heading d-none d-lg-block header">BUILDING NAMIBIA</div>
                            <div className="display-5 w-50 sub-heading d-none d-lg-block sub-heading">
                                Construction for Excellence & Sustinability
                            </div>
                        </div>
                        <div className="col-2 d-none d-lg-block head">
                            <div style={{ display: "flex" }} className="">
                                <ul >
                                    <ol>
                                        <img style={{ width: "2rem" }} src={arrow} className="" />
                                    </ol>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="display-2 heading d-block d-lg-none header">BUILDING NAMIBIA</div>
                <div className="display-1 text-start  sub-heading d-block d-lg-none building">
                    Construction for Excellence and Sustinability
                </div>
                <div className="center d-block d-lg-none w-100">
                    <button className="w-100 p-3 btn mt-2 ">
                        Careers
                    </button>
                </div>
            </motion.div>
            <div className=" text-white p-3" style={{ backgroundColor: "#D4A74F", marginTop: "-2rem" }}>

                <div
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    className="lead  p-5 building paragraph text-center">
                    August Twenty Six Construction (Pty) Ltd is a Subsidiary of August 26 Holding Company Pty Ltd which is 100% government owned company incorporated under the Companies Act 2004. The Ministry of Defence (MOD) is the shareholding Ministry on behalf of the government of the Republic of Namibia.
                </div>

                <div
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    className="m-4"
                >
                    <div className="row">
                        <div className="col-10">
                            <h5 onClick={toServices} className=" services " style={{ marginLeft: "3rem", color: "#17532c", cursor: "pointer" }}>View Our Services</h5>
                            <div style={{ marginLeft: "3rem", marginTop: "9px", width: "11%", borderTop: "solid 4px #17532c", color: "#d4a74f" }}>------------------------</div>
                        </div>
                        <div className="col-2 about" style={{ marginBottom: "-2rem" }}>
                            <img className="d-none d-lg-block about-line" src={line01} alt="" />
                            <img className="who-are-we d-none d-lg-block" src={whoWeAre} alt="" />
                        </div>
                    </div>
                </div>

            </div>

            <section className="p-5" style={{ backgroundColor: "white", width: "100%", marginTop: "0rem", marginBottom: "5rem" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-sm-6 col-lg-6 p-3">
                            <div className="box">
                                <div
                                    data-aos="fade-up"
                                    data-aos-duration="1000"
                                    className="display-5 p-3 text-dark header" style={{ fontSize: "3rem" }}>
                                    Protecting our Recources  <strong style={{ color: "red" }}> starting today. </strong>
                                </div>
                                <p
                                    data-aos="fade-up"
                                    data-aos-duration="1000"
                                    className="lead p-3 text-dark sub-heading" >
                                    We have extended our portfolio to venture in Renewable Energy.
                                </p>
                                <h5
                                    data-aos="fade-up"
                                    data-aos-duration="1000"
                                    onClick={toProjects} className=" services" style={{ marginLeft: "1rem", color: "red", cursor: "pointer" }}>View Our Projects</h5>
                                <div
                                    className="d-none d-lg-block"
                                    data-aos="fade-up"
                                    data-aos-duration="1000"
                                    style={{ marginLeft: "1rem", marginTop: "9px", width: "11%", borderTop: "solid 4px red", color: "white" }}>------------------------
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-lg-6 d-none d-lg-block">
                            <div
                                data-aos="zoom-in-up"
                                className="box">

                            </div>
                        </div>
                    </div>
                </div>
                <div className="protect">
                    <img data-aos="fade-up" data-aos-duration="1000" className="d-none d-lg-block protect-img" src={s} alt="" />
                </div>
            </section>
            <section className="d-none d-lg-block p-3 vision" style={{ backgroundColor: "#D4A74F" }}>
                <div className="who-we-want-to-be">
                    <img data-aos="fade-up"
                        className="line"
                        data-aos-duration="1000" src={line01} alt=""
                    />
                    <img
                        data-aos="fade-up"
                        data-aos-duration="1000"
                        className="we"
                        src={whoWeWantToBe} alt="" />
                </div>
                <div className="row mission-vision">
                    <div className="col-10" style={{ marginTop: "-7rem" }}>
                        <div className="">
                            <div
                                data-aos="fade-up"
                                data-aos-duration="1000"
                                className="display-5 header" style={{ fontSize: "5rem", fontWeight: "900", color: "#184E2B", marginLeft: "3rem" }}>
                                Mission
                            </div>
                            <p
                                data-aos="fade-up"
                                data-aos-duration="1000"
                                className="lead p-5 text-white paragraph" style={{ fontSize: "28px", width: "65%" }}>
                                To provide innovative and sustainable solutions in Construction and Renewable Energy
                            </p>
                        </div>
                    </div>
                    <div className="col-2 mv">

                    </div>
                    <div className="col-2">

                    </div>
                    <div className="col-10 mv" style={{ marginTop: "-20rem" }}>
                        <div className="box">
                            <div
                                data-aos="fade-up"
                                data-aos-duration="1000"
                                className="display-5 text-end header" style={{ fontSize: "5rem", fontWeight: "900", color: "#184E2B" }}>
                                Vision
                            </div>
                            <p
                                data-aos="fade-up"
                                data-aos-duration="1000"
                                className="lead p-3 text-end text-white paragraph" style={{ fontSize: "28px", width: "" }}>
                                <div className="row">
                                    <div className="col-6">

                                    </div>
                                    <div className="col-6">
                                        “To be a recognised leader in the construction and renewable energy sectors in Namibia.”

                                    </div>
                                </div>

                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="p-5 d-block d-lg-none" style={{ backgroundColor: "#D4A74F", width: "100%", marginTop: "25rem" }}>
                <div className="container">
                    <div className="row">

                        <div className="col-xs-12 col-sm-6">
                            <div className="box">
                                <div
                                    data-aos="fade-up"
                                    data-aos-duration="1000"
                                    className="display-5 p-3 text-center" style={{ fontWeight: "600", color: "#184E2B", fontSize: "48px", }}>
                                    Mission
                                </div>
                                <p
                                    data-aos="fade-up"
                                    data-aos-duration="1000"
                                    className="lead p-3 text-white text-center" style={{ fontSize: "28px", }}>
                                    "To provide innovative and sustainable solutions in Construction and Renewable Energy"
                                </p>
                            </div>
                        </div>

                        <div className="col-xs-12 col-sm-6">
                            <div className="box">
                                <div
                                    data-aos="fade-up"
                                    data-aos-duration="1000"
                                    className="display-5 p-3 text-center" style={{ fontWeight: "600", color: "#184E2B", fontSize: "48px", }}>
                                    Vision
                                </div>
                                <p
                                    data-aos="fade-up"
                                    data-aos-duration="1000"
                                    className="lead p-3 text-white text-center" style={{ fontSize: "28px", }}>
                                    “To be a recognised leader in the construction and renewable energy sectors in Namibia.”
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <section className="p-5">
                <img data-aos="fade-up" data-aos-duration="1000" src={border} style={{ marginBottom: "-12rem" }} alt="" />
                <h2
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    className="text-center header">Construction</h2>
                <h5
                    onClick={toServices}
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    className="services text-center sub-heading" style={{ marginBottom: "2rem", color: "red", fontSize: "12px", cursor: "pointer" }}>View Our Services</h5>
                <div
                    data-aos="fade-up"
                    data-aos-duration="3000"
                    className="slider d-none d-lg-block">
                    <Slider />
                </div>

                <div
                    data-aos="fade-up"
                    data-aos-duration="3000"
                    className="d-block d-lg-none">
                    <div className="uk-position-relative uk-visible-toggle uk-light" data-uk-slider>

                        <ul className="uk-slider-items uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-4@m">
                            <li>
                                <img src={action} width="400" height="600" alt="" />
                                <div className="uk-position-center uk-panel"><h1>1</h1></div>
                            </li>
                            <li>
                                <img src={action} width="400" height="600" alt="" />
                                <div className="uk-position-center uk-panel"><h1>2</h1></div>
                            </li>
                            <li>
                                <img src={action} width="400" height="600" alt="" />
                                <div className="uk-position-center uk-panel"><h1>3</h1></div>
                            </li>
                            <li>
                                <img src={action} width="400" height="600" alt="" />
                                <div className="uk-position-center uk-panel"><h1>4</h1></div>
                            </li>
                            <li>
                                <img src={action} width="400" height="600" alt="" />
                                <div className="uk-position-center uk-panel"><h1>5</h1></div>
                            </li>
                            <li>
                                <img src={action} width="400" height="600" alt="" />
                                <div className="uk-position-center uk-panel"><h1>6</h1></div>
                            </li>
                            <li>
                                <img src={action} width="400" height="600" alt="" />
                                <div className="uk-position-center uk-panel"><h1>7</h1></div>
                            </li>
                            <li>
                                <img src={action} width="400" height="600" alt="" />
                                <div className="uk-position-center uk-panel"><h1>8</h1></div>
                            </li>
                            <li>
                                <img src={action} width="400" height="600" alt="" />
                                <div className="uk-position-center uk-panel"><h1>9</h1></div>
                            </li>
                            <li>
                                <img src={action} width="400" height="600" alt="" />
                                <div className="uk-position-center uk-panel"><h1>10</h1></div>
                            </li>
                        </ul>

                        <a className="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slider-item="previous"></a>
                        <a className="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slider-item="next"></a>

                    </div>
                </div>
                <img
                    style={{ width: "100%" }}
                    data-aos="fade-up"
                    data-aos-duration="1000" src={vector1} alt="" />
            </section>
        </div>
    )
}