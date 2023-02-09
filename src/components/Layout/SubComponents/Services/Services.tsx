import react, { useEffect } from "react"
import { motion } from "framer-motion"
import construction from "../../../assets/Services/construction.jpg"
import management from "../../../assets/Services/management.jpg"
import manufacturing from "../../../assets/Services/manufacturing.jpg"
import energy from "../../../assets/Services/energy.jpg"
import hire from "../../../assets/Services/hire.jpg"
import hanger from "../../../assets/Services/hanger.svg"
import hangerPorject from "../../../assets/Services/project.svg"
import plant from "../../../assets/Services/plant.svg"
import energy1 from "../../../assets/Services/energy.svg"
import supply from "../../../assets/Services/supply.svg"
import image1 from "../../../assets/Services/image1.jpg"
import image2 from "../../../assets/Services/image2.jpg"
import image3 from "../../../assets/Services/image3.jpg"
import image4 from "../../../assets/Services/image4.jpg"
import image5 from "../../../assets/Services/image5.jpg"
import image6 from "../../../assets/Services/image6.jpg"
import image7 from "../../../assets/Services/image7.png"


import "../Services/Service.scss"
import AOS from "aos"

export const Services = () => {

    useEffect(() => {
        AOS.init({ duration: 3000, once: false, easing: "ease" })
    }, []);
    return (
        <div className="services">
            <motion.div className="landingPage"
                initial={{ x: "-100vw" }}
                animate={{ x: 0 }}
                transition={{ type: 'spring', duration: 1, bounce: 0.2 }}
                style={{ padding: "3rem" }}
            >
                <section className="wrapper m-5 p-5 d-none d-lg-block">
                    <h5 className="text-white" style={{ textTransform: "uppercase" }}>Contributing to building Namiba</h5>
                    <div className="display-1 w-50 sub-heading d-none d-lg-block">
                        SERVICES
                    </div>

                </section>
                <section className="wrapper d-block d-lg-none">
                    <h5 className="text-white" style={{ textTransform: "uppercase" }}>Contributing to building Namiba</h5>

                    <div className="display-3  sub-heading d-block d-lg-none">
                        SERVICES
                    </div>
                </section>
            </motion.div>


            <div className="uk-section bg-white">
                <div className="row p-5">
                    <div className="d-none d-lg-block border-line"></div>
                    <div className="header-container col-lg-6 col-md-6 col-sm-12 col-xs-12 py-5">
                        <h3 className="header text-lg-right text-sm-left">
                            We handle all construction duties ranging from
                        </h3>
                        <br />
                        <ul className="text-dark list">
                            <li>Residental home building and renovation</li>
                            <li>Heavy industrial construction</li>
                            <li>Commercial and institutional construction</li>
                            <li>Engineering construction</li>
                        </ul>
                    </div>
                    <div className="col-lg-6 ol-lg-6 col-md-6 col-sm-12 col-xs-12 img-container">
                        <img className="img" src={image3} alt="" />
                    </div>
                </div>
                <div className="row p-5">
                    <div className="d-none d-lg-block border-line"></div>
                    <div className="header-container col-lg-6 col-md-6 col-sm-12 col-xs-12 py-5">
                        <h3 className="header text-lg-right text-sm-left">
                            We provide planning, coordination, budgeting and supervision of construction projects. These involves; Estimating and negotiating project costs Formulating of budget Developing of schedule and work timetables
                        </h3>
                        <br />
                        <ul className="text-dark list">
                            <li>Etimating and negotiating projects costs</li>
                            <li>Formulating of budget</li>
                            <li>Developing of schedule and work timetables</li>
                        </ul>
                    </div>
                    <div className="col-lg-6 ol-lg-6 col-md-6 col-sm-12 col-xs-12 img-container">
                        <img className="img" src={image1} alt="" />
                    </div>
                </div>
                <div className="row p-5">
                    <div className="d-none d-lg-block border-line"></div>
                    <div className="header-container col-lg-8 col-md-6 col-sm-12 col-xs-12 py-5">
                        <img className="img" src={image2} alt="" style={{ marginTop: "-3rem", height: "500px", width: "90%" }} />
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 img-container">
                        <img className="img" src={image5} alt="" style={{ height: "500px", width: "100%" }} />
                    </div>
                </div>
                <div className="row p-5">
                    <div className="d-none d-lg-block border-line"></div>
                    <div className="header-container col-lg-12 col-md-12 col-sm-12 col-xs-12 py-5">
                        <img className="img" src={image7} alt="" style={{ marginTop: "-3rem", height: "700px", width: "100%" }} />
                    </div>
                </div>
                <div className="row p-5">
                    <div className="d-none d-lg-block border-line"></div>
                    <div className="header-container col-lg-6 col-md-6 col-sm-12 col-xs-12 py-5">
                        <h4 className="header text-lg-right text-sm-left">
                            We deal with construction and maintenance of the physical and naturally built environment, including public works such as roads, bridges, canals, dams, airports, sewerage systems, pipelines, structural components of buildings, and railways.
                        </h4>

                    </div>
                    <div className="col-lg-6 ol-lg-6 col-md-6 col-sm-12 col-xs-12 img-container">
                        <img className="img" src={image4} alt="" style={{ width: "100%", height: "900px" }} />
                    </div>
                </div>
                <div className="row p-5">
                    <div className="d-none d-lg-block border-line"></div>
                </div>
            </div>
        </div >
    )
}


{/* <section >
                <div className="d-none d-lg-block">
                    <div className="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin" data-uk-grid >
                        <div
                            data-aos="zoom-in-up"
                            className="uk-flex-last@s uk-card-media-left uk-cover-container p-5 mt-3">
                            <div className="uk-overflow-hidden">
                                <img src={image1} width="1800" height="1200" alt="Example image" className="uk-animation-reverse uk-transform-origin-top-right" data-uk-scrollspy="cls: uk-animation-kenburns; repeat: true" />
                            </div>
                        </div>
                        <div data-aos="zoom-in-up" className="text">
                            <div className="uk-card-body p-5 d-none d-lg-block">
                                <img className="d-none d-lg-block" data-aos="flip-left" style={{ marginBottom: "-5rem", marginTop: "0rem" }} src={hanger} alt="" />
                                <h3 className="uk-card-title">We handle all construction duties ranging from</h3>
                                <ul>
                                    <li>Residental home building and renovation</li>
                                    <li>Heavy industrial construction</li>
                                    <li>Commercial and institutional construction</li>
                                    <li>Engineering construction</li>
                                </ul>
                            </div>
                        </div>
                        <div data-aos="zoom-in-up"
                            className="uk-card-body m-4 d-block d-lg-none">
                            <h3 className="uk-card-title">We handle all construction duties ranging from</h3>
                            <ul>
                                <li>Residental home building and renovation</li>
                                <li>Heavy industrial construction</li>
                                <li>Commercial and institutional construction</li>
                                <li>Engineering construction</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="d-block d-lg-none">
                    <div className="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin" data-uk-grid>
                        <div
                            data-aos="zoom-in-up"
                            className="uk-flex-last@s uk-card-media-left uk-cover-container p-5">
                            <div className="uk-overflow-hidden">
                                <img src={image1} width="1800" height="1200" alt="Example image" className="uk-animation-reverse uk-transform-origin-top-right" data-uk-scrollspy="cls: uk-animation-kenburns; repeat: true" />
                            </div>
                        </div>
                        <div data-aos="zoom-in-up" className="text">
                            <div className="uk-card-body p-5 d-none d-lg-block">
                                <h3 className="uk-card-title">We handle all construction duties ranging from</h3>
                                <ul>
                                    <li>Residental home building and renovation</li>
                                    <li>Heavy industrial construction</li>
                                    <li>Commercial and institutional construction</li>
                                    <li>Engineering construction</li>
                                </ul>
                            </div>
                        </div>
                        <div data-aos="zoom-in-up" className="uk-card-body m-4 d-block d-lg-none">
                            <h3 className="uk-card-title">We handle all construction duties ranging from</h3>
                            <ul>
                                <li>Residental home building and renovation</li>
                                <li>Heavy industrial construction</li>
                                <li>Commercial and institutional construction</li>
                                <li>Engineering construction</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section> */}

{/* <section>
                <div className="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s " data-uk-grid style={{ zIndex: "-1" }}>
                    <div data-aos="zoom-in-up" className="uk-flex-first@s uk-card-media-left uk-cover-container p-5">
                        <div className="uk-overflow-hidden">
                            <img src={image2} width="1800" height="1200" alt="Example image" className="uk-animation-reverse uk-transform-origin-top-right" data-uk-scrollspy="cls: uk-animation-kenburns; repeat: true" />
                        </div>
                    </div>
                    <div data-aos="zoom-in-up" className="text" style={{ zIndex: "-1" }}>
                        <div className="uk-card-body p-5 d-none d-lg-block">
                            <img className="d-none d-lg-block" data-aos="flip-right" style={{ marginTop: "-2rem", marginBottom: "-9em" }} src={hangerPorject} alt="" />
                            <h3 className="uk-card-title">We provide planning, coordination, budgeting and supervision of construction projects. These involves</h3>
                            <ul>
                                <li>Estimating and negotiating projects cost</li>
                                <li>Formulation of budget</li>
                                <li>Developing of schedule and work timetables</li>
                            </ul>
                        </div>
                    </div>
                    <div data-aos="zoom-in-up" className="uk-card-body m-4 d-block d-lg-none">
                        <h3 className="uk-card-title">We provide planning, coordination, budgeting and supervision of construction projects. These involves</h3>
                        <ul>
                            <li>Estimating and negotiating projects cost</li>
                            <li>Formulation of budget</li>
                            <li>Developing of schedule and work timetables</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section >
                <div className="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s " data-uk-grid style={{ zIndex: "-1" }}>
                    <div data-aos="zoom-in-up" className="uk-flex-last@s uk-card-media-left uk-cover-container p-5">
                        <div className="uk-overflow-hidden">
                            <img src={image3} width="1800" height="1200" alt="Example image" className="uk-animation-reverse uk-transform-origin-top-right" data-uk-scrollspy="cls: uk-animation-kenburns; repeat: true" />
                        </div>
                    </div>
                    <div data-aos="zoom-in-up" className="text">
                        <div className="uk-card-body p-5 d-none d-lg-block">
                            <img className="d-none d-lg-block" data-aos="flip-left" style={{ marginBottom: "-9rem", marginTop: "0rem" }} src={plant} alt="" />
                            <h3 className="uk-card-title ">Plant and equipment hire</h3>
                            <ul>
                                <li>Estimating and negotiating projects cost</li>
                                <li>Formulation of budget</li>
                                <li>Developing of schedule and work timetables</li>
                            </ul>
                        </div>
                    </div>
                    <div data-aos="zoom-in-up" className="uk-card-body p-5 d-block d-lg-none">
                        <h3 className="uk-card-title ">Plant and equipment hire</h3>
                        <ul>
                            <li>Estimating and negotiating projects cost</li>
                            <li>Formulation of budget</li>
                            <li>Developing of schedule and work timetables</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section>
                <div className="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s " data-uk-grid style={{ zIndex: "-1" }}>
                    <div data-aos="zoom-in-up" className="uk-flex-first@s uk-card-media-left uk-cover-container p-5">
                        <div className="uk-overflow-hidden">

                            <img src={image4} width="1800" height="1200" alt="Example image" className="uk-animation-reverse uk-transform-origin-top-right" data-uk-scrollspy="cls: uk-animation-kenburns; repeat: true" />
                        </div>
                    </div>
                    <div data-aos="zoom-in-up" className="text">
                        <div className="uk-card-body p-5 d-none d-lg-block">
                            <img className="d-none d-lg-block" data-aos="flip-right" style={{ marginTop: "0rem", marginBottom: "0em" }} src={energy1} alt="" />
                            <ul>
                                <li>Estimating and negotiating projects cost</li>
                                <li>Formulation of budget</li>
                                <li>Developing of schedule and work timetables</li>
                            </ul>
                        </div>
                    </div>
                    <div data-aos="zoom-in-up" className="uk-card-body m-4 d-block d-lg-none">
                        <h3 className="uk-card-title">Renewable Energy</h3>
                        <ul>
                            <li>Estimating and negotiating projects cost</li>
                            <li>Formulation of budget</li>
                            <li>Developing of schedule and work timetables</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section>
                <div className="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s " data-uk-grid style={{ zIndex: "-1" }}>
                    <div data-aos="zoom-in-up" className="uk-flex-last@s uk-card-media-left uk-cover-container p-5">
                        <div className="uk-overflow-hidden">
                            <img src={image5} width="1800" height="1200" alt="Example image" className="uk-animation-reverse uk-transform-origin-top-right" data-uk-scrollspy="cls: uk-animation-kenburns; repeat: true" />
                        </div>
                    </div>
                    <div data-aos="zoom-in-up" className="text">
                        <div className="uk-card-body p-5 d-none d-lg-block">
                            <img className="d-none d-lg-block" data-aos="flip-left" style={{ marginBottom: "-9rem", marginTop: "0rem" }} src={supply} alt="" />
                            <h3 className="uk-card-title">We deal with construction and maintenance of the physical and naturally built enviroment
                                , including public works such as roads, bridges, canals, dams, airpots, sewerage systems, pipelines, structural components of buildings, and railways.</h3>
                        </div>
                    </div>
                    <div data-aos="zoom-in-up" className="uk-card-body p-5 d-block d-lg-none">
                        <h3 className="text-center">We deal with construction and maintenance of the physical and naturally built enviroment
                            , including public works such as roads, bridges, canals, dams, airpots, sewerage systems, pipelines, structural components of buildings, and railways.</h3>
                    </div>
                </div>
            </section> */}