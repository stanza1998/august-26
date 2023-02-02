import react from "react"
import { motion } from "framer-motion"

export const Login = () => {
    return (
        <div className="login">
            <div>
                <motion.div className="landingPage"
                    initial={{ x: "-100vw" }}
                    animate={{ x: 0 }}
                    transition={{ type: 'spring', duration: 1, bounce: 0.2 }}
                    style={{ padding: "3rem" }}
                >
                    <section className="wrapper">
                        <h5 className="text-white text-center" style={{ textTransform: "uppercase" }}>Admin login</h5>
                        <div className="center">
                            <form>
                                <div className="uk-margin">
                                    <div className="uk-inline w-100">
                                        <span className="uk-form-icon" uk-icon="icon: user"></span>
                                        <input className="uk-input" type="text" aria-label="Not clickable icon" style={{ background: "transparent", fontSize: "20px", color: "white" }} />
                                    </div>
                                </div>
                                <div className="uk-margin">
                                    <div className="uk-inline w-100">
                                        <span className="uk-form-icon uk-form-icon-flip" uk-icon="icon: lock"></span>
                                        <input className="uk-input" type="text" aria-label="Not clickable icon" style={{ background: "transparent", fontSize: "20px", color: "white" }} />
                                    </div>
                                </div>
                                <button className="uk-button uk-margin p-1 w-100" style={{ background: "#17532c" }}>login</button>
                            </form>
                        </div>
                    </section>

                </motion.div>
            </div>
        </div>
    )
}