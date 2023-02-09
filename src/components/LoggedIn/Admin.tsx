import { signOut } from "firebase/auth";
import { observer } from "mobx-react-lite"
import react from "react"
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebaseConfig";
import { useAppContext } from "../Context";
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import SettingsIcon from '@mui/icons-material/Settings';
import logo from "../assets/logo/logo1.png"
import TipsAndUpdatesRoundedIcon from '@mui/icons-material/TipsAndUpdatesRounded';
import InventoryRoundedIcon from '@mui/icons-material/InventoryRounded';
import EmailIcon from '@mui/icons-material/Email';
import "./Admin.scss"
import { Button } from "@mui/material";
import { AdminRouting } from "../../App";


const drawerWidth = 190;




export const AdminDashboard = observer(() => {
    const { store } = useAppContext();
    const user = store.auth.meJson;
    const navigate = useNavigate()


    const toProcurement = () => {
        navigate("procurement")
    }
    const toVacancies = () => {
        navigate("vacancies")
    }
    const toSubscribers = () => {
        navigate("subscribers")
    }
    const toSettings = () => {
        navigate("settings")
    }
    const toDashboard = () => {
        navigate("")
    }


    return (
        <div className="admin">
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar style={{ background: "white", marginBottom:"30rem" }} sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                    <div className="toolbar">
                        <img style={{ height: "80px", marginLeft: "2rem" }} src={logo} alt="" />
                        <div className="btn">
                            <div className="display-5" style={{ fontSize: "14px", marginTop: "0.6rem", fontWeight: 200, marginRight: "2rem", textTransform: "uppercase" }}>
                                {user?.fullName}
                            </div>
                            <Button style={{ background: "green" }} variant="contained">
                                <Link style={{ textDecoration: "none", color: "white" }} onClick={() => { signOut(auth); store.auth.logOut(); }} to="/login">
                                    Logout
                                </Link>
                            </Button>
                        </div>
                    </div>
                </AppBar>
                <Drawer
                    variant="permanent"
                    sx={{
                        width: drawerWidth,
                        flexShrink: 0,
                        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
                    }}
                >
                    <Toolbar />
                    <Box style={{ marginTop: "0.9rem" }} sx={{ overflow: 'auto' }}>
                        <List>
                            <Divider />
                            <ListItem disablePadding>
                                <ListItemButton onClick={toDashboard} className="listbtn">
                                    <ListItemIcon>
                                        <InboxIcon style={{ color: "#17532d" }} />
                                    </ListItemIcon>
                                    <ListItemText className="text" primary="Dashboard" />
                                </ListItemButton>
                            </ListItem>
                            <Divider />
                            <ListItem disablePadding>
                                <ListItemButton onClick={toProcurement} className="listbtn">
                                    <ListItemIcon>
                                        <InventoryRoundedIcon style={{ color: "#17532d" }} />
                                    </ListItemIcon>
                                    <ListItemText primary="Procurement" />
                                </ListItemButton>
                            </ListItem>
                            <Divider />
                            <ListItem disablePadding>
                                <ListItemButton onClick={toVacancies} className="listbtn">
                                    <ListItemIcon>
                                        <TipsAndUpdatesRoundedIcon style={{ color: "#17532d" }} />
                                    </ListItemIcon>
                                    <ListItemText primary="Vacancies" />
                                </ListItemButton>
                            </ListItem>
                            <Divider />
                            <ListItem disablePadding>
                                <ListItemButton onClick={toSubscribers} className="listbtn">
                                    <ListItemIcon>
                                        <EmailIcon style={{ color: "#17532d" }} />
                                    </ListItemIcon>
                                    <ListItemText primary="Subscribers" />
                                </ListItemButton>
                            </ListItem>
                            <Divider />
                            <ListItem disablePadding>
                                <ListItemButton onClick={toSettings} className="listbtn">
                                    <ListItemIcon>
                                        <SettingsIcon style={{ color: "#17532d" }} />
                                    </ListItemIcon>
                                    <ListItemText primary="Settings" />
                                </ListItemButton>
                            </ListItem>
                            <Divider />
                        </List>


                    </Box>
                </Drawer>
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <Toolbar />
                    <AdminRouting />

                </Box>
            </Box>
            {/* Admin dashboard
            {user?.fullName}
 */}
        </div>
    )
})