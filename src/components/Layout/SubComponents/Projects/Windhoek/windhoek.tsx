import react, { useEffect, useState } from "react"
import { Footer } from "../../../Footer/footer"
import { Header } from "../../../Header/Header"
import { Navbar } from "../../../Navbar/navbar"
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import line1 from "../../../../assets/projects/Line1.png"
import line2 from "../../../../assets/projects/Line2.png"
import img1 from "../../../../assets/projects/Windhoek/1.png"
import img2 from "../../../../assets/projects/Windhoek/2.png"
import img3 from "../../../../assets/projects/Windhoek/3.png"
import img4 from "../../../../assets/projects/Windhoek/4.png"
import img5 from "../../../../assets/projects/Windhoek/5.png"
import img6 from "../../../../assets/projects/Windhoek/6.png"
import background from "../../../../assets/projects/Windhoek/background.png"
import "../project.scss"
import "./windhoek.scss"
import AOS from "aos"
import "../../../../ScrollTop/scroll.scss"


export const Windhoek = () => {

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

        <div >
            <div className="main">
                <div className="scroll">

                    {showTopBtn && (
                        <KeyboardDoubleArrowUpIcon
                            className="icon-position icon-style"
                            onClick={goToTop}
                        />
                    )}{" "}
                </div>
                <div className="" style={myStyle} >
                    <div>
                        <Header />
                        <Navbar />
                    </div>
                </div>
                <div className="" style={{ marginTop: "0rem" }} >
                    <section className="Hakana">
                        <div
                            data-aos="fade-up"
                            className="" style={{ marginBottom: "0", padding: "2rem", background: "#d4a74f", color: "#17532c" }} >
                            <h2 className="text-center" style={{ color: "#17532c" }}>HAVANA, KHOMAS, WINDHOEK</h2>
                            <img className="img-fluid w-100" src={line1} alt="" />
                        </div>
                        <div className="row bg-white w-100 text-center">
                            <div className="col-10 details" style={{ width: "100%" }}>
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
                    </section>
                    <div className="windhoek">
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
        </div>
    )
}

