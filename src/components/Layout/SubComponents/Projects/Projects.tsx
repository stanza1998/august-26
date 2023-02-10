import react, { useEffect } from "react"
import { motion } from "framer-motion"
import { Skills } from "./Skills"
import "../Projects/project.scss"
import line1 from "../../../assets/projects/Line1.png"
import line2 from "../../../assets/projects/Line2.png"
import img1 from "../../../assets/projects/Windhoek/1.png"
import img2 from "../../../assets/projects/Windhoek/2.png"
import img3 from "../../../assets/projects/Windhoek/3.png"
import img4 from "../../../assets/projects/Windhoek/4.png"
import img5 from "../../../assets/projects/Windhoek/5.png"
import img6 from "../../../assets/projects/Windhoek/6.png"
import img7 from "../../../assets/projects/Eluwa/img7.png"
import img8 from "../../../assets/projects/Eluwa/img8.png"
import img9 from "../../../assets/projects/Eluwa/img9.png"
import img10 from "../../../assets/projects/Eluwa/img10.png"
import img11 from "../../../assets/projects/Eluwa/img11.png"
import img12 from "../../../assets/projects/Eluwa/img12.png"
import img13 from "../../../assets/projects/Ondjandjo/img13.png"
import img14 from "../../../assets/projects/Ondjandjo/img14.png"
import img15 from "../../../assets/projects/Ondjandjo/img15.png"
import img16 from "../../../assets/projects/Ondjandjo/img16.png"
import img17 from "../../../assets/projects/Ondjandjo/img17.png"
import img18 from "../../../assets/projects/Ondjandjo/img18.png"
import "aos/dist/aos.css"
import AOS from "aos"
import { useNavigate } from "react-router-dom"

export const Project = () => {

    const navigate = useNavigate();

    const toWindhoek = () => {
        window.scrollTo(0, 0)
        navigate("/windhoek")
    }
    const toEluwa = () => {
        window.scrollTo(0, 0)
        navigate("/eluwa")
    }
    const toOshana = () => {
        window.scrollTo(0, 0)
        navigate("/oshana")
    }

    useEffect(() => {
        AOS.init({ duration: 1000 })
    }, []);

    return (
        <div className="projects" >
            <motion.div className="landingPage"
                initial={{ x: "-100vw" }}
                animate={{ x: 0 }}
                transition={{ type: 'spring', duration: 1, bounce: 0.2 }}
                style={{ padding: "3rem" }}
            >
                <section className="wrapper m-3 p-5 d-none d-lg-block">
                    <h5 className="text-white" style={{ textTransform: "uppercase" }}>Contributing to building Namiba</h5>
                    <div className="display-5 w-50 sub-heading d-none d-lg-block">
                        FEATURED PROJECTS
                    </div>
                </section>
                <section className="wrapper d-block d-lg-none">
                    <h5 className="text-white" style={{ textTransform: "uppercase" }}>Contributing to building Namiba</h5>

                    <div className="display-5  sub-heading d-block d-lg-none">
                        FEATURED PROJECTS
                    </div>
                </section>
            </motion.div>
            <div className="uk-section bg-white">

                {/* <div className="row p-5 py-5">
                    <div className="d-none d-lg-block border-line"></div>
                    <div onClick={toWindhoek} className="header-container col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <img className="img" src={img2} alt="" style={{ width: "100%" }} />
                    </div>
                    <div onClick={toEluwa} className="col-lg-6 ol-lg-6 col-md-6 col-sm-12 col-xs-12 img-container">
                        <img className="img" src={img10} alt="" style={{ width: "100%" }} />
                    </div>
                    <div className="d-none d-lg-block border-line"></div>

                    <div onClick={toOshana} className="header-container col-lg-6 col-md-6 col-sm-12 col-xs-12 mt-1">
                        <img className="img" src={img18} alt="" style={{ width: "100%" }} />
                    </div>
                </div> */}

                <div className="cards">
                    <div className="scroll">
                        <div className="container one">
                            <div className="grid-cards">
                                <div className="card">
                                    <img src={img2} alt="img-1" title="card image" />
                                    <div className="card-body">
                                        <h3 className="title-card">
                                            HAVANA, KHOMAS, WINDHOEK
                                        </h3>
                                    </div>
                                    <div className="card-footer">
                                        <a onClick={toWindhoek} href="#">View Project</a>
                                    </div>
                                </div>
                                <div className="card">
                                    <img src={img10} alt="img-2" title="card image" />
                                    <div className="card-body">
                                        <h3 className="title-card">
                                            ONGWEDIVA, OSHANA, (ELUWA)
                                        </h3>
                                    </div>
                                    <div className="card-footer">
                                        <a onClick={toEluwa} href="#">View Project</a>
                                    </div>
                                </div>
                                <div className="card">
                                    <img src={img18} alt="img-3" title="card image" />
                                    <div className="card-body">
                                        <h3 className="title-card">
                                            ONGWEDIVA, OSHANA (oNDJANDJO)
                                        </h3>
                                    </div>
                                    <div className="card-footer">
                                        <a onClick={toOshana} href="#">View Project</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div >
    )
}


{/* 
            <div className="cards">
             

                <section className="Hakana d-block d-lg-none" style={{ marginTop: "10rem", background: "white" }}>
                    <div data-aos="fade-up" className="p-5" style={{ marginBottom: "0", background: "#d4a74f", color: "#17532c" }} >
                        <h2 className="text-center" style={{ color: "#17532c" }}>HAVANA, KHOMAS, WINDHOEK</h2>
                        <img className="img-fluid w-100" src={line1} alt="" />
                    </div>
                    <div className="row w-100 text-center">
                        <div className="col-12 details">
                            <div data-aos="fade-up" className="project-info mb-4">
                                <h5 className="" style={{ fontSize: "14px", color: "#17532c" }} >PROJECT SCOPE</h5>
                                <h3 className="" style={{ color: "#17532c" }}>Construction of Havana Senior Secondary School</h3>
                            </div>
                            <div data-aos="fade-up" className="project-info mb-4">
                                <h5 className="" style={{ fontSize: "14px", color: "#17532c" }}>CLIENT</h5>
                                <h3 className="" style={{ color: "#17532c" }}>Ministry of Education, Arts and Culture</h3>
                            </div>
                            <div data-aos="fade-up" className="project-info mb-4">
                                <h5 className="" style={{ fontSize: "14px", color: "#17532c" }}>STATUS</h5>
                                <h3 className="" style={{ color: "#17532c" }}>Completed -November 2022</h3>
                            </div>
                            <div data-aos="fade-up" className="project-info mb-4">
                                <h5 className="" style={{ fontSize: "14px", color: "#17532c" }}>ARCHITECT/DESIGNER</h5>
                                <h3 className="" style={{ color: "#17532c" }}>Manda Bakkes Architects</h3>
                            </div>
                            <div data-aos="fade-up" className="project-info mb-4">
                                <h5 className="" style={{ fontSize: "14px", color: "#17532c" }}>APPROX, PROJECT VALUE</h5>
                                <h3 className="" style={{ color: "#17532c" }}>17 000 000,00</h3>
                            </div>
                        </div>
                    </div>
                    <div className="gallery-image">
                        <div data-aos="flip-left" className="img-box">
                            <img src={img1} alt="" />
                            <div className="transparent-box">
                                <div className="caption">
                                    <p>Library</p>
                                    <p className="opacity-low">Architect Design</p>
                                </div>
                            </div>
                        </div>
                        <div data-aos="flip-left" className="img-box">
                            <img src={img2} alt="" />
                            <div className="transparent-box">
                                <div className="caption">
                                    <p>Night Sky</p>
                                    <p className="opacity-low">Cinematic</p>
                                </div>
                            </div>
                        </div>
                        <div data-aos="flip-left" className="img-box">
                            <img src={img3} alt="" />
                            <div className="transparent-box">
                                <div className="caption">
                                    <p>Tea Talk</p>
                                    <p className="opacity-low">Composite</p>
                                </div>
                            </div>
                        </div>
                        <div data-aos="flip-left" className="img-box">
                            <img src={img4} alt="" />
                            <div className="transparent-box">
                                <div className="caption">
                                    <p>Road</p>
                                    <p className="opacity-low">Landscape</p>
                                </div>
                            </div>
                        </div>
                        <div data-aos="flip-left" className="img-box">
                            <img src={img5} alt="" />
                            <div className="transparent-box">
                                <div className="caption">
                                    <p>Sea</p>
                                    <p className="opacity-low">Cityscape</p>
                                </div>
                            </div>
                        </div>
                        <div data-aos="flip-left" className="img-box">
                            <img src={img6} alt="" />
                            <div className="transparent-box">
                                <div className="caption">
                                    <p>Vintage</p>
                                    <p className="opacity-low">Cinematic</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="Hakana">
                    <div data-aos="fade-up" className="p-5" style={{ marginBottom: "0", background: "#d4a74f", color: "#17532c" }} >
                        <h2 className="text-center" style={{ color: "#17532c" }}>ONGWEDIVA, OSHANA (ELUWA)</h2>
                        <img className="img-fluid w-100" src={line1} alt="" />
                    </div>
                    <div className="row w-100 text-center">
                        <div className="col-10 details">
                            <div data-aos="fade-up" className="project-info mb-4">
                                <h5 className="" style={{ fontSize: "14px", color: "#17532c" }} >PROJECT SCOPE</h5>
                                <h3 className="" style={{ color: "#17532c" }}>Construction of Classrooms and Hostel facilities at Eluwa Resource School</h3>
                            </div>
                            <div data-aos="fade-up" className="project-info mb-4">
                                <h5 className="" style={{ fontSize: "14px", color: "#17532c" }}>CLIENT</h5>
                                <h3 className="" style={{ color: "#17532c" }}>Ministry of Education, Arts and Culture</h3>
                            </div>
                            <div data-aos="fade-up" className="project-info mb-4">
                                <h5 className="" style={{ fontSize: "14px", color: "#17532c" }}>STATUS</h5>
                                <h3 className="" style={{ color: "#17532c" }}>Completed -November 2022</h3>
                            </div>
                            <div data-aos="fade-up" className="project-info mb-4">
                                <h5 className="" style={{ fontSize: "14px", color: "#17532c" }}>ARCHITECT/DESIGNER</h5>
                                <h3 className="" style={{ color: "#17532c" }}>Toivo Nuugulu Architects</h3>
                            </div>
                            <div data-aos="fade-up" className="project-info mb-4">
                                <h5 className="" style={{ fontSize: "14px", color: "#17532c" }}>APPROX, PROJECT VALUE</h5>
                                <h3 className="" style={{ color: "#17532c" }}>14 800 000,00</h3>
                            </div>
                        </div>
                    </div>
                    <div className="gallery-image">
                        <div data-aos="flip-left" className="img-box">
                            <img src={img7} alt="" />
                            <div className="transparent-box">
                                <div className="caption">
                                    <p>Library</p>
                                    <p className="opacity-low">Architect Design</p>
                                </div>
                            </div>
                        </div>
                        <div data-aos="flip-left" className="img-box">
                            <img src={img8} alt="" />
                            <div className="transparent-box">
                                <div className="caption">
                                    <p>Night Sky</p>
                                    <p className="opacity-low">Cinematic</p>
                                </div>
                            </div>
                        </div>
                        <div data-aos="flip-left" className="img-box">
                            <img src={img9} alt="" />
                            <div className="transparent-box">
                                <div className="caption">
                                    <p>Tea Talk</p>
                                    <p className="opacity-low">Composite</p>
                                </div>
                            </div>
                        </div>
                        <div data-aos="flip-left" className="img-box">
                            <img src={img10} alt="" />
                            <div className="transparent-box">
                                <div className="caption">
                                    <p>Road</p>
                                    <p className="opacity-low">Landscape</p>
                                </div>
                            </div>
                        </div>
                        <div data-aos="flip-left" className="img-box">
                            <img src={img11} alt="" />
                            <div className="transparent-box">
                                <div className="caption">
                                    <p>Sea</p>
                                    <p className="opacity-low">Cityscape</p>
                                </div>
                            </div>
                        </div>
                        <div data-aos="flip-left" className="img-box">
                            <img src={img12} alt="" />
                            <div className="transparent-box">
                                <div className="caption">
                                    <p>Vintage</p>
                                    <p className="opacity-low">Cinematic</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="Hakana">
                    <div data-aos="fade-up" className="p-5" style={{ marginBottom: "0", background: "#d4a74f", color: "#17532c" }} >
                        <h2 className="text-center" style={{ color: "#17532c" }}>ONGWEDIVA, OSHANA (ONDJANDJO)</h2>
                        <img className="img-fluid w-100" src={line1} alt="" />
                    </div>
                    <div className="row w-100 text-center">
                        <div className="col-10 details">
                            <div data-aos="fade-up" className="project-info mb-4">
                                <h5 className="" style={{ fontSize: "14px", color: "#17532c" }} >PROJECT SCOPE</h5>
                                <h3 className="" style={{ color: "#17532c" }}>Construction of Ondjandjo Community Hostel</h3>
                            </div>
                            <div data-aos="fade-up" className="project-info mb-4">
                                <h5 className="" style={{ fontSize: "14px", color: "#17532c" }}>CLIENT</h5>
                                <h3 className="" style={{ color: "#17532c" }}>Ministry of Education, Arts and Culture</h3>
                            </div>
                            <div data-aos="fade-up" className="project-info mb-4">
                                <h5 className="" style={{ fontSize: "14px", color: "#17532c" }}>STATUS</h5>
                                <h3 className="" style={{ color: "#17532c" }}>Completed -November 2022</h3>
                            </div>
                            <div data-aos="fade-up" className="project-info mb-4">
                                <h5 className="" style={{ fontSize: "14px", color: "#17532c" }}>ARCHITECT/DESIGNER</h5>
                                <h3 className="" style={{ color: "#17532c" }}>Manda Bakkes Architects</h3>
                            </div>
                            <div data-aos="fade-up" className="project-info mb-4">
                                <h5 className="" style={{ fontSize: "14px", color: "#17532c" }}>APPROX, PROJECT VALUE</h5>
                                <h3 className="" style={{ color: "#17532c" }}>8 900 00,00</h3>
                            </div>
                        </div>
                    </div>
                    <div className="gallery-image">
                        <div data-aos="flip-left" className="img-box">
                            <img src={img13} alt="" />
                            <div data-aos="flip-left" className="transparent-box">
                                <div className="caption">
                                    <p>Library</p>
                                    <p className="opacity-low">Architect Design</p>
                                </div>
                            </div>
                        </div>
                        <div data-aos="flip-left" className="img-box">
                            <img src={img14} alt="" />
                            <div className="transparent-box">
                                <div className="caption">
                                    <p>Night Sky</p>
                                    <p className="opacity-low">Cinematic</p>
                                </div>
                            </div>
                        </div>
                        <div data-aos="flip-left" className="img-box">
                            <img src={img15} alt="" />
                            <div className="transparent-box">
                                <div className="caption">
                                    <p>Tea Talk</p>
                                    <p className="opacity-low">Composite</p>
                                </div>
                            </div>
                        </div>
                        <div data-aos="flip-left" className="img-box">
                            <img src={img16} alt="" />
                            <div className="transparent-box">
                                <div className="caption">
                                    <p>Road</p>
                                    <p className="opacity-low">Landscape</p>
                                </div>
                            </div>
                        </div>
                        <div data-aos="flip-left" className="img-box">
                            <img src={img17} alt="" />
                            <div className="transparent-box">
                                <div className="caption">
                                    <p>Sea</p>
                                    <p className="opacity-low">Cityscape</p>
                                </div>
                            </div>
                        </div>
                        <div data-aos="flip-left" className="img-box">
                            <img src={img18} alt="" />
                            <div className="transparent-box">
                                <div className="caption">
                                    <p>Vintage</p>
                                    <p className="opacity-low">Cinematic</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div> */}
