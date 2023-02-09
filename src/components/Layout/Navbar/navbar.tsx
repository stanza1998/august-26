import react from "react"
import { Link, NavLink, useNavigate } from "react-router-dom"
import "../Navbar/navbar.scss"
import HomeIcon from '@mui/icons-material';
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import DesignServicesRoundedIcon from '@mui/icons-material/DesignServicesRounded';
import AccountTreeRoundedIcon from '@mui/icons-material/AccountTreeRounded';
import TipsAndUpdatesRoundedIcon from '@mui/icons-material/TipsAndUpdatesRounded';
import InventoryRoundedIcon from '@mui/icons-material/InventoryRounded';
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';
import CallEndRoundedIcon from '@mui/icons-material/CallEndRounded';
import CloseIcon from '@mui/icons-material/Close';
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';
import logo from "../../assets/logo/logo1.png"
import "./navbar.scss"

type Anchor = 'right';


export const Navbar = () => {

    const navigate = useNavigate();

    const home = () => {
        window.scrollTo(0, 0)
        navigate("/")
    }
    const services = () => {
        window.scrollTo(0, 0)
        navigate("/services")
    }
    const projects = () => {
        window.scrollTo(0, 0)
        navigate("/projects")
    }
    const procurement = () => {
        window.scrollTo(0, 0)
        navigate("/procurement")
    }
    const vacancies = () => {
        window.scrollTo(0, 0)
        navigate("/vacancies")
    }
    const team = () => {
        window.scrollTo(0, 0)
        navigate("/teams")
    }
    const contact = () => {
        window.scrollTo(0, 0)
        navigate("/contact-us")
    }






    const [state, setState] = React.useState({

        right: false,
    });


    const toggleDrawer =
        (anchor: Anchor, open: boolean) =>
            (event: React.KeyboardEvent | React.MouseEvent) => {
                if (
                    event.type === 'keydown' &&
                    ((event as React.KeyboardEvent).key === 'Tab' ||
                        (event as React.KeyboardEvent).key === 'Shift')
                ) {
                    return;
                }

                setState({ ...state, [anchor]: open });
            };

    const list = (anchor: Anchor) => (
        <Box

            sx={{ width: 280 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}

        >
            <List style={{ margin: "1rem", marginTop: "6rem" }}>
                <ListItem disablePadding>
                    <ListItemButton onClick={home}>
                        <ListItemIcon>
                            <HomeRoundedIcon style={{ color: "#17532c" }} />
                        </ListItemIcon>
                        <ListItemText primary="Home" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton onClick={services}>
                        <ListItemIcon>
                            <DesignServicesRoundedIcon style={{ color: "#17532c" }} />
                        </ListItemIcon>
                        <ListItemText primary="Services" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton onClick={projects}>
                        <ListItemIcon>
                            <AccountTreeRoundedIcon style={{ color: "#17532c" }} />
                        </ListItemIcon>
                        <ListItemText primary="Projects" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton onClick={procurement}>
                        <ListItemIcon>
                            <InventoryRoundedIcon style={{ color: "#17532c" }} />
                        </ListItemIcon>
                        <ListItemText primary="Procurement" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton onClick={vacancies}>
                        <ListItemIcon>
                            <TipsAndUpdatesRoundedIcon style={{ color: "#17532c" }} />
                        </ListItemIcon>
                        <ListItemText primary="Vacancies" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton onClick={team}>
                        <ListItemIcon>
                            <GroupsRoundedIcon style={{ color: "#17532c" }} />
                        </ListItemIcon>
                        <ListItemText primary="Our Team" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton onClick={contact}>
                        <ListItemIcon>
                            <CallEndRoundedIcon style={{ color: "#17532c" }} />
                        </ListItemIcon>
                        <ListItemText primary="Contact" />
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    );


    return (
        <div className="navigation">
            <div style={{ borderTop: "solid white 1px", borderBottom: "solid white 1px", color: "black", marginTop: "2rem" }} className="uk-visible@m navigation" uk-sticky="start: 200; animation: uk-animation-slide-top; sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; cls-inactive: uk-navbar-transparent uk-light" >
                <nav className="uk-navbar-container uk-margin uk-navbar-transparent " uk-navbar="mode: click">
                    <div className="uk-navbar-center center">
                        <ul className="uk-navbar-nav uk-text-lighter" style={{ marginLeft: "rem", marginBottom:"0rem", marginTop:"0rem" }}>
                            <li  onClick={home} className=""><a style={{ fontWeight: "600", fontSize: "19px" }} href="#"> Home |</a></li>
                            <li onClick={services}><a style={{ fontWeight: "600", fontSize: "19px" }} href="#">  Services |</a></li>
                            <li onClick={projects}><a style={{ fontWeight: "600", fontSize: "19px" }} href="#"> Projects |</a></li>
                            <li onClick={procurement}><a style={{ fontWeight: "600", fontSize: "19px" }} href="#">  Procurement |</a></li>
                            <li onClick={vacancies}><a style={{ fontWeight: "600", fontSize: "19px" }} href="#">  Careers |</a></li>
                            <li onClick={team}><a style={{ fontWeight: "600", fontSize: "19px" }} href="#">  Our Team |</a></li>
                            <li onClick={contact}><a style={{ fontWeight: "600", fontSize: "19px" }} href="#">Contact |</a></li>
                        </ul>
                        <div className="uk-navbar-right">
                            <ul className="uk-navbar-nav">
                                <li style={{ marginLeft: "6rem" }} className="#">
                                    <a href="#">
                                        {/* <button onClick={login} style={{ fontSize: "14px" }} className="loginBtn">Login</button> */}
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
            <div className="uk-hidden@m " uk-sticky="start: 200; animation: uk-animation-slide-top; sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; cls-inactive: uk-navbar-transparent uk-dark" style={{ color: "black", width: "100%" }}>
                <nav className="uk-navbar-container uk-margin uk-navbar-transparent " uk-navbar="mode: click">
                    <div className="uk-navbar center">
                        {(['right'] as const).map((anchor) => (
                            <React.Fragment key={anchor}>
                                <Button onClick={toggleDrawer(anchor, true)}>
                                    <MenuIcon className="burger" style={{ color: "#d4a74f", fontSize: "3rem" }} />
                                </Button>

                                <Drawer
                                    anchor={anchor}
                                    open={state[anchor]}
                                    onClose={toggleDrawer(anchor, false)}
                                >
                                    <div className="container">
                                        <Button style={{ width: "20%" }} onClick={toggleDrawer(anchor, false)}>
                                            <CancelPresentationIcon style={{ color: "#17532c", fontSize: "38px" }} />
                                        </Button>
                                        <img style={{ height: "50px", marginLeft: "8.5rem" }} className="logo" src={logo} alt="" />
                                    </div>
                                    {list(anchor)}
                                </Drawer>
                            </React.Fragment>
                        ))}
                    </div>
                </nav>
            </div>
            <div>
            </div>


        </div>
    )
}