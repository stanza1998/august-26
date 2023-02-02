import react from "react"
import "../Header/header.scss"
import logo from "../../assets/logo/logo.png"
import facebook from "../../assets/social/facebook.png"
import twitter from "../../assets/social/twitter.png"
import linkedin from "../../assets/social/linkedin.png"

export const Header = () => {


    return (
        <>
            <div style={{ background: "transparent" }} className="header p-1 d-none d-lg-block  text-center" >
                <div className="demo">

                    <div className="row">
                        <div className="col-4">
                            <div style={{ fontSize: "18px", marginTop: "70px" }} className="span">
                            
                                    <a target="_blank" href="https://www.facebook.com/people/August-Twenty-Six-Construction/100065151486295/">
                                        <img style={{ height: "50px", cursor: "pointer" }} src={facebook} alt="" />
                                    </a>
                        
                                <a href="https://www.facebook.com/people/August-Twenty-Six-Construction/100065151486295/">
                                    <img style={{ height: "50px", marginLeft: "2rem", cursor: "pointer" }} src={twitter} alt="" />
                                </a>
                                <a href="https://www.facebook.com/people/August-Twenty-Six-Construction/100065151486295/">
                                    <img style={{ height: "50px", marginLeft: "2rem", cursor: "pointer" }} src={linkedin} alt="" />
                                </a>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="display-5 text-white">
                                <img style={{ height: "30%", width: "30%" }} src={logo} alt="" />
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="span" style={{ marginTop: "70px" }}>
                                <div className="search-box">
                                    <form className="uk-search uk-search-default">
                                        <span className="uk-search-icon-flip" uk-search-icon></span>
                                        <input className="uk-search-input" type="search" placeholder="Search" aria-label="Search" />
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )


}

