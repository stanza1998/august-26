import react from "react"
import { motion } from "framer-motion"
import "../Contact/Contact.scss"

export const Contact = () => {
    return (
        <div className="contact">
            <motion.div className="landingPage"
                initial={{ x: "-100vw" }}
                animate={{ x: 0 }}
                transition={{ type: 'spring', duration: 1, bounce: 0.2 }}
                style={{ padding: "3rem" }}
            >
                <section className="wrapper m-3 p-5 d-none d-lg-block">
                    <h5 className="text-white">BUILDING NAMIBIA</h5>
                    <div className="display-2 w-50 sub-heading d-none d-lg-block">
                        CONTACT US
                    </div>
                </section>
                <section className="wrapper d-block d-lg-none">
                    <h5 className="text-white">Contributing to building Namiba</h5>

                    <div className="display-5  sub-heading d-block d-lg-none">
                        CONTACT US
                    </div>
                </section>
            </motion.div>
            <section className="bg-white">
                <div className="row p-1">
                    <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12" style={{ textTransform: "uppercase" }}>
                        <h2>Our Address</h2>
                        <div className="responsive-map">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2822.7806761080233!2d-93.29138368446431!3d44.96844997909819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52b32b6ee2c87c91%3A0xc20dff2748d2bd92!2sWalker+Art+Center!5e0!3m2!1sen!2sus!4v1514524647889" width="600" height="450" frameBorder="0" style={{border:"0" }} allowFullScreen></iframe>
                        </div>
                    </div>
                    <div className="col-lg-8 col-md-6 col-sm-12 col-xs-12 p-2" style={{ textTransform: "uppercase" }}>
                        <h2 className="mb-3">Send Us a message</h2>
                        <div className="">
                            <div className="" style={{ background: "#d4a74f" }}>
                                <div className="row p-4">
                                    <div className="col-lg-7 col-md-8 col-sm-12 col-xs-12 " style={{ textTransform: "uppercase", }}>
                                        <p className="uk-margin">Name</p>
                                        <input style={{ height: "50px" }} type="text" placeholder="Enter your name" className="uk-input" />
                                        <p className="uk-margin">Email</p>
                                        <input style={{ height: "50px" }} type="text" className="uk-input" placeholder="Enter your email" />
                                        <p className="uk-margin">Message</p>
                                        <textarea name="" id="" style={{ height: "7rem" }} className="uk-input" placeholder="Enter your message" ></textarea>
                                    </div>
                                    <div className="col-lg-4 col-md-4 p-5 col-xs-12">
                                        <button style={{ width: "100%", background: "#DC4B4F", color: "white", padding: "10px", border: "none", marginTop: "-14rem", borderRadius: "8px" }}>SUBMIT</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}