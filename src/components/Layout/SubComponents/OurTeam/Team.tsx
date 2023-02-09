import react, { useEffect } from "react"
import { motion } from "framer-motion"
import beukes from "../../../assets/Team/beukes.png"
import nambahu from "../../../assets/Team/nambahu.png"
import kangandjela from "../../../assets/Team/kangandjela.png"
import ambo from "../../../assets/Team/ambo.png"
import shimuafeni from "../../../assets/Team/shimuafeni.png"
import tsuses from "../../../assets/Team/tsuses.png"
import endjala from "../../../assets/Team/endjala.png"
import "../OurTeam/Team.scss"
import AOS from "aos"
import "aos/dist/aos.css"


export const Team = () => {

    useEffect(() => {
        AOS.init({ duration: 1000 })
    }, []);

    return (
        <div className="team">
            <motion.div className="landingPage"
                initial={{ x: "-100vw" }}
                animate={{ x: 0 }}
                transition={{ type: 'spring', duration: 1, bounce: 0.2 }}
                style={{ padding: "3rem" }}
            >
                <section className="wrapper m-3 p-5 d-none d-lg-block">
                    <h5 className="text-white">BUILDING NAMIBIA TOGETHER</h5>
                    <div className="display-1 w-50 sub-heading d-none d-lg-block">
                        OUR TEAM
                    </div>
                </section>
                <section className="wrapper d-block d-lg-none">
                    <h5 className="text-white">BUILDING NAMIBIA TOGETHER</h5>
                    <div className="display-3  sub-heading d-block d-lg-none">
                        OUR TEAM
                    </div>
                </section>
            </motion.div>
            <section style={{ background: "#d4a74f", marginTop:"-3rem" }} className="p-5 d-none d-md-block">
                <div>
                    <div
                        data-aos="fade-up"
                        data-aos-duration="3000"
                        className="row">
                        <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12 mt-4">
                            <div style={{ borderRight: "solid white 3px", height: "100%" }}>
                                <h4 className="text-center text-white">MS LOTTY KANIME</h4>
                                <h5 className="text-center text-white mt-3" style={{ fontSize: "14px" }}>Manager - Admin</h5>
                                <h5 className="text-center text-white" style={{ fontSize: "14px" }}>HR & Finance</h5>
                                <p className="text-danger text-center">lkanime@august26unm.com</p>
                            </div>
                        </div>
                        <div
                            data-aos="fade-up"
                            data-aos-duration="3000"
                            className="col-lg-3 col-md-6 col-sm-12 col-xs-12 mt-4" >
                            <div style={{ borderRight: "solid white 3px", height: "100%" }}>
                                <h4 className="text-center text-white">MR E T HILUKILUAH</h4>
                                <h5 className="text-center text-white mt-3" style={{ fontSize: "14px" }}>General Manager</h5>
                                <p className="text-danger text-center ">thilukiluah@august26ubm.com</p>
                            </div>
                        </div>
                        <div
                            data-aos="fade-up"
                            data-aos-duration="3000"
                            className="col-lg-3 col-md-6 col-sm-12 col-xs-12 mt-4">
                            <div style={{ borderRight: "solid white 3px", height: "100%" }}>
                                <h4 className="text-center text-white">MS. MARTHA ENDJAJA</h4>
                                <h5 className="text-center text-white " style={{ fontSize: "14px" }}>Managing Director</h5>
                                <p className="text-danger text-center">mendjala@august26ubm.com</p>
                            </div>
                        </div>
                        <div
                            data-aos="fade-up"
                            data-aos-duration="3000"
                            className="col-lg-3 col-md-6 col-sm-12 col-xs-12 mt-4">
                            <div style={{ borderRight: "solid white 3px", height: "100%" }}>
                                <h4 className="text-center text-white">MRS L N KARISES</h4>
                                <h5 className="text-center text-white mt-3" style={{ fontSize: "14px" }}>Chairman Board Of Directors</h5>
                                <p className="text-danger text-center ">lkanime@august26unm.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            
            <section style={{ background: "#d4a74f" }} className="p-5 d-block d-md-none">
                <div>
                    <div
                        data-aos="fade-up"
                        data-aos-duration="3000"
                        className="row">
                        <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12" style={{ borderBottom: "solid white 2px" }}>
                            <div className="mt-3">
                                <h4 className="text-center text-white">MS LOTTY KANIME</h4>
                                <h5 className="text-center text-white mt-3" style={{ fontSize: "14px" }}>Manager - Admin</h5>
                                <h5 className="text-center text-white" style={{ fontSize: "14px" }}>HR & Finance</h5>
                                <p className="text-danger text-center mb-4">lkanime@august26unm.com</p>
                            </div>
                        </div>
                        <div
                            data-aos="fade-up"
                            data-aos-duration="3000"
                            className="col-lg-3 col-md-6 col-sm-12 col-xs-12" style={{ borderBottom: "solid white 2px" }}>
                            <div className="mt-3">
                                <h4 className="text-center text-white">MR E T HILUKILUAH</h4>
                                <h5 className="text-center text-white mt-3" style={{ fontSize: "14px" }}>General Manager</h5>
                                <p className="text-danger text-center mb-5">thilukiluah@august26ubm.com@au</p>
                            </div>
                        </div>
                        <div
                            data-aos="fade-up"
                            data-aos-duration="3000"
                            className="col-lg-3 col-md-6 col-sm-12 col-xs-12" style={{ borderBottom: "solid white 2px" }}>
                            <div className="mt-3">
                                <h4 className="text-center text-white">MS. MARTHA ENDJAJA</h4>
                                <h5 className="text-center text-white" style={{ fontSize: "14px" }}>Managing Director</h5>

                                <p className="text-danger text-center mb-5">mendjala@august26ubm.com</p>
                            </div>
                        </div>
                        <div
                            data-aos="fade-up"
                            data-aos-duration="3000"
                            className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                            <div className="mt-3">
                                <h4 className="text-center text-white">MRS L N KARISES</h4>
                                <h5 className="text-center text-white " style={{ fontSize: "14px" }}>Chairman Board Of Directors</h5>
                                <p className="text-danger text-center mb-5">lkanime@august26unm.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            <section className="p-5 bg-white">
                <div
                    data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine"
                    className="row">
                    <div
                        className="col-lg-6 ">
                        <div className="center">
                            <img className="img-responive" src={beukes} alt="" />
                        </div>
                    </div>
                    <div

                        className="col-lg-6 center" >
                        <h3 className="text-center">MR JA BEUKES</h3>
                        <h5 className="text-center">Non-Executive Director</h5>
                    </div>
                </div>
            </section>
            <section className="p-5" style={{ background: "#d4a74f" }}>
                <div
                    data-aos="fade-left"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine"
                    className="row">
                    <div
                        className="col-lg-6 uk-flex-last@s uk-card-media-right">
                        <div className="center">
                            <img src={nambahu} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-6 center" >
                        <h3 className="text-center">MS MN NAMBAHU</h3>
                        <h5 className="text-center">Secretary</h5>
                    </div>
                </div>
            </section>
            <section className="p-5 bg-white">
                <div
                    data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine"
                    className="row">
                    <div className="col-lg-6 ">
                        <div className="center">
                            <img className="img-responive" src={kangandjela} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-6 center" >
                        <h3 className="text-center">CAPT (N) KANGANDJELA</h3>
                        <h5 className="text-center">Deputy Chairperson</h5>
                    </div>
                </div>
            </section>
            <section className="p-5" style={{ background: "#d4a74f" }}>
                <div
                    data-aos="fade-left"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine"
                    className="row">
                    <div className="col-lg-6 uk-flex-last@s uk-card-media-right">
                        <div className="center">
                            <img src={ambo} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-6 center" >
                        <h3 className="text-center">MR KK IY AMBO</h3>
                        <h5 className="text-center">Non-Executive Director</h5>
                    </div>
                </div>
            </section>
            <section className="p-5 bg-white">
                <div
                    data-aos="fade-left"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine"
                    className="row">
                    <div className="col-lg-6 ">
                        <div className="center">
                            <img className="img-responive" src={shimuafeni} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-6 center" >
                        <h3 className="text-center">MR MSA SHIMUAFENI</h3>
                        <h5 className="text-center">Chairperson</h5>
                    </div>
                </div>
            </section>
            <section className="p-5" style={{ background: "#d4a74f" }}>
                <div
                    data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine"
                    className="row">
                    <div className="col-lg-6 uk-flex-last@s uk-card-media-right">
                        <div className="center">
                            <img src={tsuses} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-6 center" >
                        <h3 className="text-center">MRS AA TSUSES</h3>
                        <h5 className="text-center">Non-Executive Director</h5>
                    </div>
                </div>
            </section>
            <section
              
                className="p-5 bg-white">
                <div 
                  data-aos="fade-left"
                  data-aos-offset="300"
                  data-aos-easing="ease-in-sine"
                className="row">
                    <div className="col-lg-6 ">
                        <div className="center">
                            <img className="img-responive" src={endjala} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-6 center" >
                        <h3 className="text-center">COL. JMT ENDJAJA</h3>
                        <h5 className="text-center">Managing Director</h5>
                    </div>
                </div>
            </section>
        </div>
    )
}