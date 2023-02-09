import react, { useEffect } from "react"
import "../Header/header.scss"
import logo from "../../assets/logo/logo1.png"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import AOS from "aos"

export const Header = () => {

    useEffect(() => {
        AOS.init({ duration: 1000 })
    }, []);

    return (
        <>
            <div style={{ background: "transparent" }} className="header p-1 d-none d-lg-block  text-center" >
                <div className="demo">

                    <div className="row">
                        <div
                            data-aos="fade-up"
                            data-aos-duration="3000"
                            className="col-4">
                            <div style={{ fontSize: "18px", marginTop: "80px" }} className="span">

                                <a data-aos="fade-up"
                                    data-aos-duration="3000" target="_blank" href="https://www.facebook.com/people/August-Twenty-Six-Construction/100065151486295/">
                                    <FacebookIcon className="icon-facebook" style={{ fontSize: "35px" }} />
                                </a>

                                <a data-aos="fade-up"
                                    data-aos-duration="3000" target="_blank" href="https://twitter.com/CatchTheRide/status/1562751979188695040">
                                    <TwitterIcon className="icon-twitter" style={{ fontSize: "35px", marginLeft: "30px" }} />
                                </a>
                                <a data-aos="fade-up"
                                    data-aos-duration="3000" target="_blank" href="https://www.linkedin.com/authwall?trk=gf&trkInfo=AQFzZpMNGQXWzAAAAYYm840IVsCJgXiA_VEGHG3-ohLInajsFrHzivbBRdJBLIfwae8G50wnUBv_KLw3oaySOjD8JD9ml0TV-WJS6wchrj5VzLIAXHwo5zciqdu9vBpMh7UiO48=&original_referer=https://www.google.com/&sessionRedirect=https%3A%2F%2Fna.linkedin.com%2Fcompany%2Faugust26manufacturing%3Ftrk%3Dsimilar-pagesF">
                                    <LinkedInIcon className="icon-linkedin" style={{ fontSize: "35px", marginLeft: "30px" }} />
                                </a>
                            </div>
                        </div>
                        <div className="col-4">
                            <div data-aos="fade-up"
                                data-aos-duration="3000"
                                className="display-5 text-white">
                                <img style={{ height: "30%", width: "30%" }} src={logo} alt="" />
                            </div>
                        </div>
                        <div
                            data-aos="fade-up"
                            data-aos-duration="3000"
                            className="col-4">
                            <div style={{ fontSize: "18px", marginTop: "80px" }} className="span">
                                <a data-aos="fade-up"
                                    style={{ textDecoration: "none", color: "white" }}
                                    data-aos-duration="3000" href="mailto:info@august26ubm.com">
                                    <MailOutlineIcon className="icon-linkedin" style={{ fontSize: "35px", marginLeft: "30px" }} /> info@august26ubm.com
                                </a>
                            </div>
                        </div>
                        {/* <div
                            data-aos="fade-up"
                            data-aos-duration="3000"
                            className="col-4">
                            <div className="span" style={{ marginTop: "70px" }}>
                                <div className="search-box">
                                    <form className="uk-search uk-search-default">
                                        <span className="uk-search-icon-flip" uk-search-icon></span>
                                        <input className="uk-search-input" type="search" placeholder="Search" aria-label="Search" />
                                    </form>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    )


}

