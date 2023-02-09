import react, { useState } from "react"
import { motion } from "framer-motion"
import { useAppContext } from "../../../Context";
import { useLocation, useNavigate } from "react-router-dom";
import { log } from "console";
import { observer } from "mobx-react-lite";
import { Loader } from "../../../loader/loader";

export const Login = observer(() => {
    const { store, api } = useAppContext();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const user = store.user.currentUser
    const currentUser = store.auth.meJson;
    const loading = store.auth.loading;
    const error = store.auth.error;

    const navigate = useNavigate();
    const location = useLocation();

    const handleLogin = async (e: any) => {
        e.preventDefault();
        try {
            api.auth.signIn(email, password);
        } catch (error) {
        }


    };

    console.log("error 3");

    if (!!currentUser) {
        navigate("/a")
    }


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
                            <form onSubmit={handleLogin}>
                                <div className="uk-margin">
                                    <div className="uk-inline w-100">
                                        <span className="uk-form-icon" uk-icon="icon: user"></span>
                                        <input className="uk-input" type="email" aria-label="Not clickable icon" onChange={(e) => setEmail(e.target.value)} required style={{ background: "transparent", fontSize: "20px", color: "white" }} />
                                    </div>
                                </div>
                                <div className="uk-margin">
                                    <div className="uk-inline w-100">
                                        <span className="uk-form-icon uk-form-icon-flip" uk-icon="icon: lock"></span>
                                        <input className="uk-input" type="password" aria-label="Not clickable icon" onChange={(e) => setPassword(e.target.value)} required style={{ background: "transparent", fontSize: "20px", color: "white" }} />
                                    </div>
                                </div>
                                <button type="submit" className="uk-button uk-margin p-1 w-100" style={{ background: "#d4a74f" }}> {loading ? <><Loader /></> : <>Login</>} </button>
                            </form>
                        </div>
                    </section>
                </motion.div>
            </div>
        </div>
    )
})