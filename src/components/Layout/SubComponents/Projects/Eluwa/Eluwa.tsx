import react, { useEffect, useState } from "react"
import { Footer } from "../../../Footer/footer"
import { Header } from "../../../Header/Header"
import { Navbar } from "../../../Navbar/navbar"
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import "../../../../ScrollTop/scroll.scss"
import line1 from "../../../../assets/projects/Line1.png"
import line2 from "../../../../assets/projects/Line2.png"
import img1 from "../../../../assets/projects/Eluwa/img7.png"
import img2 from "../../../../assets/projects/Eluwa/img8.png"
import img3 from "../../../../assets/projects/Eluwa/img9.png"
import img4 from "../../../../assets/projects/Eluwa/img10.png"
import img5 from "../../../../assets/projects/Eluwa/img11.png"
import img6 from "../../../../assets/projects/Eluwa/img12.png"
import background from "../../../../assets/projects/Eluwa/background.png"
import "../project.scss"
import "./eluwa.scss"
import AOS from "aos"


export const Eluwa = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, []);

    const myStyle = {
        backgroundImage: `url(${background})`,
        height: '110vh',
        marginTop: '-20px',
        fontSize: '50px',
        objecFit: "cover",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };

    const [showTopBtn, setShowTopBtn] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 400) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        });
    }, []);

    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (

        <div className="main">
            <div className="scroll">
                {showTopBtn && (
                    <KeyboardDoubleArrowUpIcon
                        className="icon-position icon-style"
                        onClick={goToTop}
                    />
                )}{" "}
            </div>
            <div style={myStyle} >
                {/* <div className="" style={{ backgroundColor: "#000", opacity: ".7", height:"100%" }}> */}
                <Header />
                <Navbar />
                {/* </div> */}
            </div>
            <div className="" style={{ marginTop: "0rem" }} >
                <section className="Hakana">
                    <div
                        data-aos="fade-up"
                        className="" style={{ marginBottom: "0", padding: "2rem", background: "#d4a74f", color: "#17532c" }} >
                        <h2 className="text-center" style={{ color: "#17532c" }}>ONGWEDIVA, OSHANA (ELUWA)</h2>
                        <img className="img-fluid w-100" src={line1} alt="" />
                    </div>
                    <div className="row bg-white w-100 text-center">
                        <div className="col-10 details" style={{ width: "100%" }}>
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
                </section>
                <div className="eluwa">
                    <div className="con" style={{ width: "100%" }}>
                        <div data-aos="zoom-in">
                            <img data-aos="zoom-in" src={img1} />
                        </div>

                        <div data-aos="zoom-in">
                            <img data-aos="zoom-in" src={img2} />
                        </div>

                        <div data-aos="zoom-in">
                            <img data-aos="zoom-in" src={img3} />
                        </div>

                        <div data-aos="zoom-in">
                            <img data-aos="zoom-in" src={img4} />
                        </div>

                        <div data-aos="zoom-in">
                            <img data-aos="zoom-in" src={img5} />
                        </div>

                        <div data-aos="zoom-in">
                            <img data-aos="zoom-in" src={img6} />
                        </div>

                    </div>
                </div>
            </div>
            <Footer />
        </div>

    )
}

