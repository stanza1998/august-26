import react from "react"
import { useNavigate } from "react-router-dom"
import "../Footer/footer.scss"


export const Footer = () => {
    const navigate = useNavigate()

    const login = () => {
        window.scrollTo(0, 0)
        navigate("/login")
    }



    return (
        <div className="footer " style={{ background: "#d4a74f" }}>

            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />


            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />


            <footer className="padding_4x">
                <div className="flex">

                    <section className="flex-content padding_1x">
                        <h3 style={{ color: "#184e2b" }}>For You</h3>
                        <a style={{ color: "#184e2b", fontWeight: "700" }} href="#">Careers</a>
                        <a style={{ color: "#184e2b", fontWeight: "700" }} href="#">Procurment</a>

                    </section>
                    <section className="flex-content padding_1x">
                        <h3 style={{ color: "#184e2b" }}>SERVICES</h3>
                        <a style={{ color: "#184e2b", fontWeight: "700" }} href="#">Construction</a>
                        <a style={{ color: "#184e2b", fontWeight: "700" }} href="#">Manufacturing</a>
                        <a style={{ color: "#184e2b", fontWeight: "700" }} href="#">Sustainanbility</a>
                        <a style={{ color: "#184e2b", fontWeight: "700" }} href="#">Leasing</a>
                        <a style={{ color: "#184e2b", fontWeight: "700" }} href="#">Management</a>
                    </section>
                    <section className="flex-content padding_1x">
                        <h3 style={{ color: "#184e2b" }}>PROJECTS</h3>
                        <a style={{ color: "#184e2b", fontWeight: "700" }} href="#">Havana, Khomas</a>
                        <a style={{ color: "#184e2b", fontWeight: "700" }} href="#">Ongwediva Hostel</a>
                        <a style={{ color: "#184e2b", fontWeight: "700" }} href="#">Ongwendiva School</a>
                    </section>
                    <section className="flex-content padding_1x">
                        <h3 style={{ color: "#184e2b" }}>Contact</h3>
                        <p style={{ color: "#184e2b", fontWeight: "700" }}>info@august26ubm.com</p>
                        <p style={{ color: "#184e2b", fontWeight: "700" }}>Tel +264 61 243 325</p>
                        <p style={{ color: "#184e2b", fontWeight: "700" }}>info@august26ubm.com</p>
                    </section>
                </div>
                <div className="flex">
                    <section className="flex-content padding_1x">
                        <p style={{ color: "#184e2b", fontWeight: "700" }}>Copyright ©2023 All rights reserved || august 26 construction</p>
                    </section>
                    <section className="flex-content padding_1x">
                        <a style={{ color: "white" }} href="#"><i className="fa fa-facebook"></i></a>
                        <a style={{ color: "white" }} href="#"><i className="fa fa-twitter"></i></a>
                        <a style={{ color: "white" }} href="#"><i className="fa fa-dribbble"></i></a>
                        <a style={{ color: "white" }} href="#"><i className="fa fa-linkedin"></i></a>
                    </section>
                </div>
            </footer>
        </div>
    )
}