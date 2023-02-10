import { AnimatePresence } from "framer-motion"
import react from "react"
import { Routes, Route } from "react-router-dom"
import { Header } from "./Header/Header"
import { Navbar } from "./Navbar/navbar"
import { Landing } from "./SubComponents/LandingPage/LandingPage"
import { Team } from "./SubComponents/OurTeam/Team"
import { Procurement } from "./SubComponents/Procurement/Procurement"
import { Project } from "./SubComponents/Projects/Projects"
import { Services } from "./SubComponents/Services/Services"
import "../Layout/layout.scss"
import { Footer } from "./Footer/footer"
import VideoBg from "../../components/assets/videoBg.mp4"
import { Vacancies } from "./SubComponents/Vacancies/Vacancies"
import { Contact } from "./SubComponents/Contact/Contact"
import { Login } from "./SubComponents/Login/Login"
import ScrollToTop from "../ScrollTop/scrollToTop"

export const Layout = () => {
    return (
        <>


            <ScrollToTop />
            <div className="main">

                <video src={VideoBg} autoPlay loop muted />

                <div className="overlay"></div>
                <div className="content">
                    <Header />
                    <Navbar />
                    <Routing />
                    <Footer />
                </div>

            </div>

        </>
    )
}

const Routing = () => {


    return (
        <AnimatePresence>
            <Routes>
                <Route path='/' element={< Landing />}></Route>
                <Route path='/services' element={< Services />}></Route>
                <Route path='/projects' element={< Project />}></Route>
                <Route path='/procurement' element={< Procurement />}></Route>
                <Route path='/vacancies' element={< Vacancies />}></Route>
                <Route path='/contact-us' element={< Contact />}></Route>
                <Route path='/teams' element={< Team />}></Route>
                <Route path='/login' element={< Login />}></Route>
            </Routes>
        </AnimatePresence>
    )
}