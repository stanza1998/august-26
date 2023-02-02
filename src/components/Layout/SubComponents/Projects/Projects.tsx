import react from "react"
import { motion } from "framer-motion"
import { Skills } from "./Skills"
import "../Projects/project.scss"
import line1 from "../../../assets/projects/Line1.png"
import line2 from "../../../assets/projects/Line2.png"


export const Project = () => {
    return (
        <div className="projects"

        >
            <motion.div className="landingPage"
                initial={{ x: "-100vw" }}
                animate={{ x: 0 }}
                transition={{ type: 'spring', duration: 1, bounce: 0.2 }}
                style={{ padding: "3rem" }}
            >
                <section className="wrapper m-3 p-5 d-none d-lg-block">
                    <h5 className="text-white" style={{textTransform:"uppercase"}}>Contributing to building Namiba</h5>
                    <div className="display-5 w-50 sub-heading d-none d-lg-block">
                        FEATURED PROJECTS
                    </div>
                </section>
                <section className="wrapper d-block d-lg-none">
                    <h5 className="text-white" style={{textTransform:"uppercase"}}>Contributing to building Namiba</h5>

                    <div className="display-5  sub-heading d-block d-lg-none">
                        FEATURED PROJECTS
                    </div>
                </section>
            </motion.div>
            <div className="cards">
                <section className="Hakana d-none d-lg-block">
                    <div className="p-5" style={{ marginBottom: "0", background: "#d4a74f", color: "#17532c" }} >
                        <h2 className="text-center" style={{ color: "#17532c" }}>HAVANA, KHOMAS, WINDHOEK</h2>
                        <img className="img-fluid" src={line1} alt="" />
                    </div>
                    <div className="row">
                        <div className="col-10 details">
                            <div className="project-info mb-4">
                                <h5 className="" style={{ fontSize: "14px", color: "#17532c" }} >PROJECT SCOPE</h5>
                                <h3 className="" style={{ color: "#17532c" }}>Construction of Havana Senior Secondary School</h3>
                            </div>
                            <div className="project-info mb-4">
                                <h5 className="" style={{ fontSize: "14px", color: "#17532c" }}>CLIENT</h5>
                                <h3 className="" style={{ color: "#17532c" }}>Ministry of Education, Arts and Culture</h3>
                            </div>
                            <div className="project-info mb-4">
                                <h5 className="" style={{ fontSize: "14px", color: "#17532c" }}>STATUS</h5>
                                <h3 className="" style={{ color: "#17532c" }}>Completed -November 2022</h3>
                            </div>
                            <div className="project-info mb-4">
                                <h5 className="" style={{ fontSize: "14px", color: "#17532c" }}>ARCHITECT/DESIGNER</h5>
                                <h3 className="" style={{ color: "#17532c" }}>Manda Bakkes Architects</h3>
                            </div>
                            <div className="project-info mb-4">
                                <h5 className="" style={{ fontSize: "14px", color: "#17532c" }}>APPROX, PROJECT VALUE</h5>
                                <h3 className="" style={{ color: "#17532c" }}>17 000 000,00</h3>
                            </div>
                        </div>
                    </div>
                    <div className="gallery-image">
                        <div className="img-box">
                            <img src="https://picsum.photos/350/250?image=444" alt="" />
                            <div className="transparent-box">
                                <div className="caption">
                                    <p>Library</p>
                                    <p className="opacity-low">Architect Design</p>
                                </div>
                            </div>
                        </div>
                        <div className="img-box">
                            <img src="https://picsum.photos/350/250/?image=232" alt="" />
                            <div className="transparent-box">
                                <div className="caption">
                                    <p>Night Sky</p>
                                    <p className="opacity-low">Cinematic</p>
                                </div>
                            </div>
                        </div>
                        <div className="img-box">
                            <img src="https://picsum.photos/350/250/?image=431" alt="" />
                            <div className="transparent-box">
                                <div className="caption">
                                    <p>Tea Talk</p>
                                    <p className="opacity-low">Composite</p>
                                </div>
                            </div>
                        </div>
                        <div className="img-box">
                            <img src="https://picsum.photos/350/250?image=474" alt="" />
                            <div className="transparent-box">
                                <div className="caption">
                                    <p>Road</p>
                                    <p className="opacity-low">Landscape</p>
                                </div>
                            </div>
                        </div>
                        <div className="img-box">
                            <img src="https://picsum.photos/350/250?image=344" alt="" />
                            <div className="transparent-box">
                                <div className="caption">
                                    <p>Sea</p>
                                    <p className="opacity-low">Cityscape</p>
                                </div>
                            </div>
                        </div>
                        <div className="img-box">
                            <img src="https://picsum.photos/350/250?image=494" alt="" />
                            <div className="transparent-box">
                                <div className="caption">
                                    <p>Vintage</p>
                                    <p className="opacity-low">Cinematic</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="Hakana d-block d-lg-none" style={{ marginTop: "10rem", background: "white" }}>
                    <div className="p-5" style={{ marginBottom: "0", background: "#d4a74f", color: "#17532c" }} >
                        <h2 className="text-center" style={{ color: "#17532c" }}>HAVANA, KHOMAS, WINDHOEK</h2>
                        <img className="img-fluid" src={line1} alt="" />
                    </div>
                    <div className="row">
                        <div className="col-12 details">
                            <div className="project-info mb-4">
                                <h5 className="" style={{ fontSize: "14px", color: "#17532c" }} >PROJECT SCOPE</h5>
                                <h3 className="" style={{ color: "#17532c" }}>Construction of Havana Senior Secondary School</h3>
                            </div>
                            <div className="project-info mb-4">
                                <h5 className="" style={{ fontSize: "14px", color: "#17532c" }}>CLIENT</h5>
                                <h3 className="" style={{ color: "#17532c" }}>Ministry of Education, Arts and Culture</h3>
                            </div>
                            <div className="project-info mb-4">
                                <h5 className="" style={{ fontSize: "14px", color: "#17532c" }}>STATUS</h5>
                                <h3 className="" style={{ color: "#17532c" }}>Completed -November 2022</h3>
                            </div>
                            <div className="project-info mb-4">
                                <h5 className="" style={{ fontSize: "14px", color: "#17532c" }}>ARCHITECT/DESIGNER</h5>
                                <h3 className="" style={{ color: "#17532c" }}>Manda Bakkes Architects</h3>
                            </div>
                            <div className="project-info mb-4">
                                <h5 className="" style={{ fontSize: "14px", color: "#17532c" }}>APPROX, PROJECT VALUE</h5>
                                <h3 className="" style={{ color: "#17532c" }}>17 000 000,00</h3>
                            </div>
                        </div>
                    </div>
                    <div className="gallery-image">
                        <div className="img-box">
                            <img src="https://picsum.photos/350/250?image=444" alt="" />
                            <div className="transparent-box">
                                <div className="caption">
                                    <p>Library</p>
                                    <p className="opacity-low">Architect Design</p>
                                </div>
                            </div>
                        </div>
                        <div className="img-box">
                            <img src="https://picsum.photos/350/250/?image=232" alt="" />
                            <div className="transparent-box">
                                <div className="caption">
                                    <p>Night Sky</p>
                                    <p className="opacity-low">Cinematic</p>
                                </div>
                            </div>
                        </div>
                        <div className="img-box">
                            <img src="https://picsum.photos/350/250/?image=431" alt="" />
                            <div className="transparent-box">
                                <div className="caption">
                                    <p>Tea Talk</p>
                                    <p className="opacity-low">Composite</p>
                                </div>
                            </div>
                        </div>
                        <div className="img-box">
                            <img src="https://picsum.photos/350/250?image=474" alt="" />
                            <div className="transparent-box">
                                <div className="caption">
                                    <p>Road</p>
                                    <p className="opacity-low">Landscape</p>
                                </div>
                            </div>
                        </div>
                        <div className="img-box">
                            <img src="https://picsum.photos/350/250?image=344" alt="" />
                            <div className="transparent-box">
                                <div className="caption">
                                    <p>Sea</p>
                                    <p className="opacity-low">Cityscape</p>
                                </div>
                            </div>
                        </div>
                        <div className="img-box">
                            <img src="https://picsum.photos/350/250?image=494" alt="" />
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
                    <div className="p-5" style={{ marginBottom: "0", background: "#d4a74f", color: "#17532c" }} >
                        <h2 className="text-center" style={{ color: "#17532c" }}>ONGWEDIVA, OSHANA (ELUWA)</h2>
                        <img className="img-fluid" src={line1} alt="" />
                    </div>
                    <div className="row">
                        <div className="col-10 details">
                            <div className="project-info mb-4">
                                <h5 className="" style={{ fontSize: "14px", color: "#17532c" }} >PROJECT SCOPE</h5>
                                <h3 className="" style={{ color: "#17532c" }}>Construction of Classrooms and Hostel facilities at Eluwa Resource School</h3>
                            </div>
                            <div className="project-info mb-4">
                                <h5 className="" style={{ fontSize: "14px", color: "#17532c" }}>CLIENT</h5>
                                <h3 className="" style={{ color: "#17532c" }}>Ministry of Education, Arts and Culture</h3>
                            </div>
                            <div className="project-info mb-4">
                                <h5 className="" style={{ fontSize: "14px", color: "#17532c" }}>STATUS</h5>
                                <h3 className="" style={{ color: "#17532c" }}>Completed -November 2022</h3>
                            </div>
                            <div className="project-info mb-4">
                                <h5 className="" style={{ fontSize: "14px", color: "#17532c" }}>ARCHITECT/DESIGNER</h5>
                                <h3 className="" style={{ color: "#17532c" }}>Toivo Nuugulu Architects</h3>
                            </div>
                            <div className="project-info mb-4">
                                <h5 className="" style={{ fontSize: "14px", color: "#17532c" }}>APPROX, PROJECT VALUE</h5>
                                <h3 className="" style={{ color: "#17532c" }}>14 800 000,00</h3>
                            </div>
                        </div>
                    </div>
                    <div className="gallery-image">
                        <div className="img-box">
                            <img src="https://picsum.photos/350/250?image=444" alt="" />
                            <div className="transparent-box">
                                <div className="caption">
                                    <p>Library</p>
                                    <p className="opacity-low">Architect Design</p>
                                </div>
                            </div>
                        </div>
                        <div className="img-box">
                            <img src="https://picsum.photos/350/250/?image=232" alt="" />
                            <div className="transparent-box">
                                <div className="caption">
                                    <p>Night Sky</p>
                                    <p className="opacity-low">Cinematic</p>
                                </div>
                            </div>
                        </div>
                        <div className="img-box">
                            <img src="https://picsum.photos/350/250/?image=431" alt="" />
                            <div className="transparent-box">
                                <div className="caption">
                                    <p>Tea Talk</p>
                                    <p className="opacity-low">Composite</p>
                                </div>
                            </div>
                        </div>
                        <div className="img-box">
                            <img src="https://picsum.photos/350/250?image=474" alt="" />
                            <div className="transparent-box">
                                <div className="caption">
                                    <p>Road</p>
                                    <p className="opacity-low">Landscape</p>
                                </div>
                            </div>
                        </div>
                        <div className="img-box">
                            <img src="https://picsum.photos/350/250?image=344" alt="" />
                            <div className="transparent-box">
                                <div className="caption">
                                    <p>Sea</p>
                                    <p className="opacity-low">Cityscape</p>
                                </div>
                            </div>
                        </div>
                        <div className="img-box">
                            <img src="https://picsum.photos/350/250?image=494" alt="" />
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
                    <div className="p-5" style={{ marginBottom: "0", background: "#d4a74f", color: "#17532c" }} >
                        <h2 className="text-center" style={{ color: "#17532c" }}>ONGWEDIVA, OSHANA (oNDJANDJO)</h2>
                        <img className="img-fluid" src={line1} alt="" />
                    </div>
                    <div className="row">
                        <div className="col-10 details">
                            <div className="project-info mb-4">
                                <h5 className="" style={{ fontSize: "14px", color: "#17532c" }} >PROJECT SCOPE</h5>
                                <h3 className="" style={{ color: "#17532c" }}>Construction of Ondjandjo Community Hostel</h3>
                            </div>
                            <div className="project-info mb-4">
                                <h5 className="" style={{ fontSize: "14px", color: "#17532c" }}>CLIENT</h5>
                                <h3 className="" style={{ color: "#17532c" }}>Ministry of Education, Arts and Culture</h3>
                            </div>
                            <div className="project-info mb-4">
                                <h5 className="" style={{ fontSize: "14px", color: "#17532c" }}>STATUS</h5>
                                <h3 className="" style={{ color: "#17532c" }}>Completed -November 2022</h3>
                            </div>
                            <div className="project-info mb-4">
                                <h5 className="" style={{ fontSize: "14px", color: "#17532c" }}>ARCHITECT/DESIGNER</h5>
                                <h3 className="" style={{ color: "#17532c" }}>Manda Bakkes Architects</h3>
                            </div>
                            <div className="project-info mb-4">
                                <h5 className="" style={{ fontSize: "14px", color: "#17532c" }}>APPROX, PROJECT VALUE</h5>
                                <h3 className="" style={{ color: "#17532c" }}>8 900 00,00</h3>
                            </div>
                        </div>
                    </div>
                    <div className="gallery-image">
                        <div className="img-box">
                            <img src="https://picsum.photos/350/250?image=444" alt="" />
                            <div className="transparent-box">
                                <div className="caption">
                                    <p>Library</p>
                                    <p className="opacity-low">Architect Design</p>
                                </div>
                            </div>
                        </div>
                        <div className="img-box">
                            <img src="https://picsum.photos/350/250/?image=232" alt="" />
                            <div className="transparent-box">
                                <div className="caption">
                                    <p>Night Sky</p>
                                    <p className="opacity-low">Cinematic</p>
                                </div>
                            </div>
                        </div>
                        <div className="img-box">
                            <img src="https://picsum.photos/350/250/?image=431" alt="" />
                            <div className="transparent-box">
                                <div className="caption">
                                    <p>Tea Talk</p>
                                    <p className="opacity-low">Composite</p>
                                </div>
                            </div>
                        </div>
                        <div className="img-box">
                            <img src="https://picsum.photos/350/250?image=474" alt="" />
                            <div className="transparent-box">
                                <div className="caption">
                                    <p>Road</p>
                                    <p className="opacity-low">Landscape</p>
                                </div>
                            </div>
                        </div>
                        <div className="img-box">
                            <img src="https://picsum.photos/350/250?image=344" alt="" />
                            <div className="transparent-box">
                                <div className="caption">
                                    <p>Sea</p>
                                    <p className="opacity-low">Cityscape</p>
                                </div>
                            </div>
                        </div>
                        <div className="img-box">
                            <img src="https://picsum.photos/350/250?image=494" alt="" />
                            <div className="transparent-box">
                                <div className="caption">
                                    <p>Vintage</p>
                                    <p className="opacity-low">Cinematic</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>

        </div>
    )
}