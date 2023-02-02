import react from "react"
import { motion } from "framer-motion"
import construction from "../../../assets/logo/construction.png"
import "../Services/Service.scss"

export const Services = () => {
    return (
        <div className="services">
            <motion.div className="landingPage"
                initial={{ x: "-100vw" }}
                animate={{ x: 0 }}
                transition={{ type: 'spring', duration: 1, bounce: 0.2 }}
                style={{ padding: "3rem" }}
            >
                <section className="wrapper m-5 p-5 d-none d-lg-block">
                    <h5 className="text-white" style={{textTransform:"uppercase"}}>Contributing to building Namiba</h5>
                    <div className="display-1 w-50 sub-heading d-none d-lg-block">
                        SERVICES
                    </div>
                </section>
                <section className="wrapper d-block d-lg-none">
                    <h5 className="text-white" style={{textTransform:"uppercase"}}>Contributing to building Namiba</h5>

                    <div className="display-3  sub-heading d-block d-lg-none">
                        SERVICES
                    </div>
                </section>
            </motion.div>
            <div className="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin" data-uk-grid>
                <div className="uk-flex-last@s uk-card-media-left uk-cover-container p-5">
                    <div className="uk-overflow-hidden">
                        <img src={construction} width="1800" height="1200" alt="Example image" className="uk-animation-reverse uk-transform-origin-top-right" data-uk-scrollspy="cls: uk-animation-kenburns; repeat: true" />
                    </div>
                </div>
                <div className="text">
                    <div className="uk-card-body p-5 d-none d-lg-block">
                        <h3 className="uk-card-title">We handke all construction duties ranging from</h3>
                        <ul>
                            <li>Residental home building and renovation</li>
                            <li>Heavy industrial construction</li>
                            <li>Commercial and institutional construction</li>
                            <li>Engineering construction</li>
                        </ul>
                    </div>
                </div>
                <div className="uk-card-body m-4 d-block d-lg-none">
                    <h3 className="uk-card-title">We handke all construction duties ranging from</h3>
                    <ul>
                        <li>Residental home building and renovation</li>
                        <li>Heavy industrial construction</li>
                        <li>Commercial and institutional construction</li>
                        <li>Engineering construction</li>
                    </ul>
                </div>
            </div>

            <div className="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s " data-uk-grid>
                <div className="uk-flex-last@s uk-card-media-left uk-cover-container p-5">
                    <div className="uk-overflow-hidden">
                        <img src={construction} width="1800" height="1200" alt="Example image" className="uk-animation-reverse uk-transform-origin-top-right" data-uk-scrollspy="cls: uk-animation-kenburns; repeat: true" />
                    </div>
                </div>
                <div className="text">
                    <div className="uk-card-body p-5 d-none d-lg-block">
                        <h3 className="uk-card-title">We provide planning, coordination, budgeting and supervision of construction projects. These involves</h3>
                        <ul>
                            <li>Estimating and negotiating projects cost</li>
                            <li>Formulation of budget</li>
                            <li>Developing of schedule and work timetables</li>
                        </ul>
                    </div>
                </div>
                <div className="uk-card-body m-4 d-block d-lg-none">
                    <h3 className="uk-card-title">We provide planning, coordination, budgeting and supervision of construction projects. These involves</h3>
                    <ul>
                        <li>Estimating and negotiating projects cost</li>
                        <li>Formulation of budget</li>
                        <li>Developing of schedule and work timetables</li>
                    </ul>
                </div>
            </div>

            <div className="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s " data-uk-grid>
                <div className="uk-flex-last@s uk-card-media-left uk-cover-container p-5">
                    <div className="uk-overflow-hidden">
                        <img src={construction} width="1800" height="1200" alt="Example image" className="uk-animation-reverse uk-transform-origin-top-right" data-uk-scrollspy="cls: uk-animation-kenburns; repeat: true" />
                    </div>
                </div>
                <div className="text">
                    <div className="uk-card-body p-5 d-none d-lg-block">
                        <h3 className="uk-card-title ">Plant and equipment hire</h3>
                        <ul>
                            <li>Estimating and negotiating projects cost</li>
                            <li>Formulation of budget</li>
                            <li>Developing of schedule and work timetables</li>
                        </ul>
                    </div>
                </div>
                <div className="uk-card-body p-5 d-block d-lg-none">
                    <h3 className="uk-card-title ">Plant and equipment hire</h3>
                    <ul>
                        <li>Estimating and negotiating projects cost</li>
                        <li>Formulation of budget</li>
                        <li>Developing of schedule and work timetables</li>
                    </ul>
                </div>
            </div>

            <div className="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s " data-uk-grid>
                <div className="uk-flex-last@s uk-card-media-left uk-cover-container p-5">
                    <div className="uk-overflow-hidden">
                        <img src={construction} width="1800" height="1200" alt="Example image" className="uk-animation-reverse uk-transform-origin-top-right" data-uk-scrollspy="cls: uk-animation-kenburns; repeat: true" />
                    </div>
                </div>
                <div className="text">
                    <div className="uk-card-body p-5 d-none d-lg-block">
                        <h3 className="uk-card-title">Renewable Energy</h3>
                        <ul>
                            <li>Estimating and negotiating projects cost</li>
                            <li>Formulation of budget</li>
                            <li>Developing of schedule and work timetables</li>
                        </ul>
                    </div>
                </div>
                <div className="uk-card-body m-4 d-block d-lg-none">
                    <h3 className="uk-card-title">Renewable Energy</h3>
                    <ul>
                        <li>Estimating and negotiating projects cost</li>
                        <li>Formulation of budget</li>
                        <li>Developing of schedule and work timetables</li>
                    </ul>
                </div>
            </div>
            <div className="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s " data-uk-grid>
                <div className="uk-flex-last@s uk-card-media-left uk-cover-container p-5">
                    <div className="uk-overflow-hidden">
                        <img src={construction} width="1800" height="1200" alt="Example image" className="uk-animation-reverse uk-transform-origin-top-right" data-uk-scrollspy="cls: uk-animation-kenburns; repeat: true" />
                    </div>
                </div>
                <div className="text">
                    <div className="uk-card-body p-5 d-none d-lg-block">
                        <h3 className="uk-card-title">We deal with construction and maintenance of the physical and naturally built enviroment
                            , including public works such as roads, bridges, canals, dams, airpots, sewerage systems, pipelines, structural components of buildings, and railways.</h3>
                    </div>
                </div>
                <div className="uk-card-body p-5 d-block d-lg-none">
                    <h3 className="text-center">We deal with construction and maintenance of the physical and naturally built enviroment
                        , including public works such as roads, bridges, canals, dams, airpots, sewerage systems, pipelines, structural components of buildings, and railways.</h3>
                </div>
            </div>

        </div>
    )
}