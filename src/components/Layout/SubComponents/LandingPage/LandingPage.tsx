import react, { useEffect } from "react"
import "../LandingPage/landing.scss"
import { motion } from "framer-motion"
import arrow from "../../../assets/logo/arrow1.png"
import vector from "../../../assets/logo/Vector.png"
import vector1 from "../../../assets/logo/vector1.png"
import action from "../../../assets/logo/action.png"
import action1 from "../../../assets/logo/action1.png"
import { useInView } from "react-intersection-observer"
import { useAnimation } from "framer-motion"

export const Landing = () => {

    // {
    //     threshold: 0.2
    // }

    const { ref, inView } = useInView();
    const animation = useAnimation();

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
                        <div className="col-8">
                            <div className="display-5 heading d-none d-lg-block ">BUILDING NAMIBIA</div>
                            <div className="display-5 w-50 sub-heading d-none d-lg-block">
                                Construction for Excellence & Sustinability
                            </div>
                        </div>
                        <div className="col-4 d-none d-lg-block">
                            <div style={{ display: "flex" }} className="scrollDownBtn">
                                <ul >
                                    <ol>
                                        <img src={arrow} className="imgm2 drop" />
                                    </ol>

                                </ul>
                                <h5 className="about text-white">About us</h5>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="display-2 heading d-block d-lg-none">BUILDING NAMIBIA</div>
                <div className="display-1 text-start  sub-heading d-block d-lg-none">
                    Construction for Excellence and Sustinability
                </div>
                <div className="center d-block d-lg-none w-100">
                    <button className="w-100 p-3 btn mt-2 ">
                        Careers
                    </button>
                </div>
            </motion.div>

            <div className=" text-white" style={{ backgroundColor: "#D4A74F", marginTop: "-1rem" }}>
                <div ref={ref}>
                    <motion.div
                        animate={animation}
                        className="lead  p-5" >
                        August Twenty Six Construction (Pty) Ltd is a Subsidiary of August 26 Holding Company Pty Ltd which is 100% government owned company incorporated under the Companies Act 2004. The Ministry of Defence (MOD) is the shareholding Ministry on behalf of the government of the Republic of Namibia.
                    </motion.div>
                </div>
                <motion.div
                    animate={animation}
                >
                    <h5 className=" services" style={{ marginLeft: "3rem", color: "#17532c" }}>View Our Services</h5>
                    <div style={{ marginLeft: "3rem", marginTop: "9px", width: "11%", borderTop: "solid 4px #17532c", color: "#d4a74f" }}>------------------------</div>
                </motion.div>
            </div>

            <section ref={ref} className="p-5" style={{ backgroundColor: "white", width: "100%" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-sm-6 col-lg-6 p-3">
                            <div className="box">
                                <div className="display-5 p-3 text-dark" style={{ fontFamily: "a", fontSize: "3rem" }}>
                                    Protecting our Recources  <strong style={{ color: "red" }}> starting today. </strong>
                                </div>
                                <p className="lead p-3 text-dark" style={{ fontFamily: "a" }}>
                                    We have extended our portfolio to venture in Renewable Energy.
                                </p>
                                <h5 className=" services" style={{ marginLeft: "1rem", color: "red" }}>View Our Services</h5>
                                <div style={{ marginLeft: "1rem", marginTop: "9px", width: "11%", borderTop: "solid 4px red", color: "white" }}>------------------------</div>
                            </div>
                        </div>

                        <div className="col-xs-12 col-sm-6 col-lg-6 d-none d-lg-block">
                            <div className="box">
                                <img style={{ marginLeft: "7rem" }} src={vector} alt="" />
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <section className="p-5 d-none d-lg-block p-5" style={{ backgroundColor: "#D4A74F", width: "100%" }}>
                <div className="container">
                    <div className="row">

                        <div className="col-xs-12 col-sm-6 " style={{ fontFamily: "a" }}>
                            <div className="">
                                <div className="display-5" style={{ fontWeight: "600", color: "#184E2B", fontSize: "48px", fontFamily: "a" }}>
                                    Mission
                                </div>
                                <p className="lead p-3 text-white" style={{ fontSize: "28px", fontFamily: "a" }}>
                                    We have extended our portfolio to venture in Renewable Energy.
                                </p>
                            </div>
                        </div>

                        <div className="col-xs-12 col-sm-6" style={{ marginTop: "10rem" }}>
                            <div className="box">
                                <div className="display-5 text-end " style={{ fontWeight: "600", color: "#184E2B", fontSize: "48px", fontFamily: "a" }}>
                                    Vision
                                </div>
                                <p className="lead p-3 text-end text-white" style={{ fontSize: "28px", fontFamily: "a" }}>
                                    We have extended our portfolio to venture in Renewable Energy.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <section className="p-5 d-block d-lg-none" style={{ backgroundColor: "#D4A74F", width: "100%" }}>
                <div className="container">
                    <div className="row">

                        <div className="col-xs-12 col-sm-6">
                            <div className="box">
                                <div className="display-5 p-3 text-center" style={{ fontWeight: "600", color: "#184E2B", fontSize: "48px", fontFamily: "a" }}>
                                    Mission
                                </div>
                                <p className="lead p-3 text-white text-center" style={{ fontSize: "28px", fontFamily: "a" }}>
                                    We have extended our portfolio to venture in Renewable Energy.
                                </p>
                            </div>
                        </div>

                        <div className="col-xs-12 col-sm-6">
                            <div className="box">
                                <div className="display-5 p-3 text-center" style={{ fontWeight: "600", color: "#184E2B", fontSize: "48px", fontFamily: "a" }}>
                                    Vision
                                </div>
                                <p className="lead p-3 text-white text-center" style={{ fontSize: "28px", fontFamily: "a" }}>
                                    We have extended our portfolio to venture in Renewable Energy.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>


            <section className="p-5">
                <h2 className="text-center">Construction</h2>
                <h5 className="services text-center" style={{ marginBottom: "2rem", color: "red", fontSize: "12px" }}>View Our Services</h5>
                <div className="uk-position-relative uk-visible-toggle uk-light" data-uk-slider>
                    <ul className="uk-slider-items uk-child-width-1-2 uk-child-width-1-3@m uk-grid">
                        <li>
                            <div className="uk-panel">
                                <img src={action} width="400" height="600" alt="" />
                                <div className="uk-position-center uk-panel"><h1>1</h1></div>
                            </div>
                        </li>
                        <li>
                            <div className="uk-panel">
                                <img src={action1} width="400" height="600" alt="" />
                                <div className="uk-position-center uk-panel"><h1>4</h1></div>
                            </div>
                        </li>
                        <li>
                            <div className="uk-panel">
                                <img src={action} width="400" height="600" alt="" />
                                <div className="uk-position-center uk-panel"><h1>8</h1></div>
                            </div>
                        </li>
                        <li>
                            <div className="uk-panel">
                                <img src={action1} width="400" height="600" alt="" />
                            </div>
                        </li>
                    </ul>

                    <a className="uk-position-center-left uk-position-small uk-hidden-hover" href="#" data-uk-slidenav-previous data-uk-slider-item="previous"></a>
                    <a className="uk-position-center-right uk-position-small uk-hidden-hover" href="#" data-uk-slidenav-next datauk-slider-item="next"></a>
                </div>
                <img style={{ marginTop: "-2rem" }} src={vector1} alt="" />
            </section>



        </div>
    )
}