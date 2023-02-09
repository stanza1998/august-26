import react from "react"
import { motion } from "framer-motion"
import "../Vacancies/Vacancies.scss"

export const Vacancies = () => {
    return (
        <div className="vacancies">
            <motion.div className="landingPage"
                initial={{ x: "-100vw" }}
                animate={{ x: 0 }}
                transition={{ type: 'spring', duration: 1, bounce: 0.2 }}
                style={{ padding: "3rem" }}
            >
                <section className="wrapper m-3 p-5 d-none d-lg-block">
                    <h5 className="text-white" style={{ textTransform: "uppercase" }}>Building Namibia with us</h5>
                    <div className="display-1 w-50 sub-heading d-none d-lg-block">
                        CAREERS
                    </div>
                </section>
                <section className="wrapper d-block d-lg-none">
                    <h5 className="text-white" style={{ textTransform: "uppercase" }}> building namibai with us</h5>

                    <div className="display-3  sub-heading d-block d-lg-none">
                        CAREERS
                    </div>
                </section>
            </motion.div>
            <div className="bg-white" style={{ padding: "8rem" }}>
                <h1 className="">Available Vacancies</h1>
                <p className="text-danger ">No  available Vancancies at the moment</p>
            </div>


            <section className="p-5 d-none d-lg-block" style={{ background: "#d4a74f" }}>
                <div className="form">
                    <h2 className="text-center" style={{ color: "#17532c" }}> REGISTER YOUT EMAIL </h2>
                    <p className="m-3 text-center">Register your email for the latest updates on our vacancies and other related information</p>
                    <div >
                        <input style={{ background: "transparent", height: "50px", borderRadius: "8px", color: "white", width: "100%" }} type="email" className="uk-input" />
                        <br />
                        <div className="form">
                            <button style={{ width: "100%", background: "#DC4B4F", color: "white", padding: "10px", border: "none", marginTop: "10px", borderRadius: "8px" }}>Submit</button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="p-5 d-block d-lg-none" style={{ background: "#d4a74f" }}>
                <div className="">
                    <h2 className="text-center" style={{ color: "#17532c" }}> REGISTER YOUT EMAIL </h2>
                    <p className="m-3 text-center">Register your email for the latest updates on our vacancies and other related information</p>
                    <div >
                        <input style={{ background: "transparent", height: "50px", borderRadius: "8px", color: "white", width: "100%" }} type="email" className="uk-input" />
                        <br />
                        <div className="form">
                            <button style={{ width: "100%", background: "#DC4B4F", color: "white", padding: "10px", border: "none", marginTop: "10px", borderRadius: "8px" }}>Submit</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}