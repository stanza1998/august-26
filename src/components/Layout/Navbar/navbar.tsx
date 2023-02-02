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
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';
import CallEndRoundedIcon from '@mui/icons-material/CallEndRounded';
import InventoryRoundedIcon from '@mui/icons-material/InventoryRounded';

type Anchor = 'right';


export const Navbar = () => {

    const navigate = useNavigate();

    const home = () => {
        navigate("/")
    }
    const services = () => {
        navigate("/services")
    }
    const projects = () => {
        navigate("/projects")
    }
    const procurement = () => {
        navigate("/procurement")
    }
    const vacancies = () => {
        navigate("/vacancies")
    }
    const team = () => {
        navigate("/teams")
    }
    const contact = () => {
        navigate("/contact-us")
    }
    const login = () => {
        navigate("/login")
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
            <List style={{ margin: "2rem", marginTop: "6rem" }}>
                <ListItem disablePadding>
                    <ListItemButton onClick={home}>
                        <ListItemIcon>
                            {/* <InboxIcon /> */}
                        </ListItemIcon>
                        <ListItemText primary="Home" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton onClick={services}>
                        <ListItemIcon>
                            {/* <InboxIcon /> */}
                        </ListItemIcon>
                        <ListItemText primary="Services" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton onClick={projects}>
                        <ListItemIcon>
                            {/* <InboxIcon /> */}
                        </ListItemIcon>
                        <ListItemText primary="Projects" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton onClick={procurement}>
                        <ListItemIcon>
                            {/* <InboxIcon /> */}
                        </ListItemIcon>
                        <ListItemText primary="Procurement" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton onClick={vacancies}>
                        <ListItemIcon>
                            {/* <InboxIcon /> */}
                        </ListItemIcon>
                        <ListItemText primary="Vacancies" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton onClick={team}>
                        <ListItemIcon>
                            {/* <InboxIcon /> */}
                        </ListItemIcon>
                        <ListItemText primary="Our Team" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton onClick={contact}>
                        <ListItemIcon>
                            {/* <InboxIcon /> */}
                        </ListItemIcon>
                        <ListItemText primary="Contact" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton onClick={home}>
                        <ListItemIcon>
                            {/* <InboxIcon /> */}
                        </ListItemIcon>
                        <ListItemText primary="Login" />
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    );


    return (
        <>
            <div style={{ borderTop: "solid white 1px", borderBottom: "solid white 1px", color: "black", marginTop: "2rem" }} className="uk-visible@m navigation" uk-sticky="start: 200; animation: uk-animation-slide-top; sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; cls-inactive: uk-navbar-transparent uk-light" >
                <nav className="uk-navbar-container uk-margin uk-navbar-transparent " uk-navbar="mode: click">
                    <div className="uk-navbar-center center">
                        <ul className="uk-navbar-nav uk-text-lighter" style={{ marginLeft: "rem" }}>
                            <li onClick={home} className=""><a style={{ fontWeight: "600", fontSize: "12px" }} href="#"> <HomeRoundedIcon /> Home</a></li>
                            <li onClick={services}><a style={{ fontWeight: "600", fontSize: "12px" }} href="#"> <DesignServicesRoundedIcon /> Services</a></li>
                            <li onClick={projects}><a style={{ fontWeight: "600", fontSize: "12px" }} href="#"> <AccountTreeRoundedIcon /> Projects</a></li>
                            <li onClick={procurement}><a style={{ fontWeight: "600", fontSize: "12px" }} href="#"> <InventoryRoundedIcon /> Procurement</a></li>
                            <li onClick={vacancies}><a style={{ fontWeight: "600", fontSize: "12px" }} href="#"> <TipsAndUpdatesRoundedIcon /> Careers</a></li>
                            <li onClick={team}><a style={{ fontWeight: "600", fontSize: "12px" }} href="#"> <GroupsRoundedIcon /> Our Team</a></li>
                            <li onClick={contact}><a style={{ fontWeight: "600", fontSize: "12px" }} href="#"> <CallEndRoundedIcon />Contact</a></li>
                        </ul>
                        <div className="uk-navbar-right">
                            <ul className="uk-navbar-nav">
                                <li style={{ marginLeft: "6rem" }} className="#">
                                    <a href="#">
                                        <button onClick={login} style={{ fontSize: "14px" }} className="loginBtn">Login</button>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
            <div className="uk-hidden@m" uk-sticky="start: 200; animation: uk-animation-slide-top; sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; cls-inactive: uk-navbar-transparent uk-dark" style={{ color: "black" }}>
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
                                    {list(anchor)}
                                </Drawer>
                            </React.Fragment>
                        ))}
                    </div>
                </nav>
            </div>
            <div>
            </div>


        </>
    )
}