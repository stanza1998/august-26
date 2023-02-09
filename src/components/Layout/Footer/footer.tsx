import react from "react"
import { useNavigate } from "react-router-dom"
import "../Footer/footer.scss"


export const Footer = () => {
    const navigate = useNavigate()

    const login = () => {
        window.scrollTo(0,0)
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
                        <h3>For You</h3>
                        <a href="#">Careers</a>
                        <a href="#">Procurment</a>

                    </section>
                    <section className="flex-content padding_1x">
                        <h3>SERVICES</h3>
                        <a href="#">Construction</a>
                        <a href="#">Manufacturing</a>
                        <a href="#">Sustainanbility</a>
                        <a href="#">Leasing</a>
                        <a href="#">Management</a>
                    </section>
                    <section className="flex-content padding_1x">
                        <h3>PROJECTS</h3>
                        <a href="#">Havana, Khomas</a>
                        <a href="#">Ongwediva Hostel</a>
                        <a href="#">Ongwendiva School</a>
                    </section>
                    <section className="flex-content padding_1x">
                        <h3>SUBSCRIBE</h3>
                        <p>Subscribe to with your email to get latest updates</p>
                        <fieldset className="fixed_flex">
                            <input style={{ color: "black" }} type="email" name="newsletter" placeholder="Your Email Address" />
                            <button  className="btn btn_2">Subscribe</button>
                        </fieldset>
                    <button onClick={login} className="uk-margin btn btn-success w-100">Login</button>
                    </section>
                </div>
                <div className="flex">
                    <section className="flex-content padding_1x">
                        <p>Copyright ©2023 All rights reserved || august 26 construction</p>
                    </section>
                    <section className="flex-content padding_1x">
                        <a href="#"><i className="fa fa-facebook"></i></a>
                        <a href="#"><i className="fa fa-twitter"></i></a>
                        <a href="#"><i className="fa fa-dribbble"></i></a>
                        <a href="#"><i className="fa fa-linkedin"></i></a>
                    </section>
                </div>
            </footer>
        </div>
    )
}