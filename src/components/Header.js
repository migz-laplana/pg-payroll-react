import {
    AppBar,
    Box,
    Button,
    Grid,
    makeStyles,
    Tab,
    Tabs,
    Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import MeetingRoomIcon from "@material-ui/icons/MeetingRoom";
import Dashboard from "../pages/Dashboard";
import Employees from "../pages/Employees";
import Attendance from "../pages/Attendance";
import Payslip from "../pages/Payslip";

function a11yProps(index) {
    return {
        id: `nav-tab-${index}`,
        "aria-controls": `nav-tabpanel-${index}`,
    };
}

function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`nav-tabpanel-${index}`}
            aria-labelledby={`nav-tab-${index}`}
            {...other}
        >
            {value === index && <Box>{children}</Box>}
        </div>
    );
}

const useStyles = makeStyles((theme) => ({
    appBar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbar: {
        flexWrap: "wrap",
    },
    brand: {
        // flexGrow: 1,
        margin: theme.spacing(1, 1.5),
        padding: theme.spacing(1, 4),
    },
    navbar__contents: {},
    alignedTabs: {
        position: "relative",
        top: "8px",
    },
    logout__button: {
        color: theme.palette.common.white,
        borderColor: theme.palette.common.white,
    },
}));

function Header(props) {
    const classes = useStyles();

    const { history } = props;
    let { pageName } = useParams(); //gets page name of url
    const pages = ["home", "employees", "attendance", "payslip"];
    let currentPage = pages.indexOf(pageName);

    const [currentPageNum, setPageNum] = useState(
        typeof pageName === "undefined" ? 0 : currentPage
    );

    const pageChange = (e, newPage) => {
        history.push(`${pages[newPage]}`); //pushes to a new page
        setPageNum(newPage); //sets new page for tab
    };

    return (
        <div className={classes.root}>
            <AppBar
                position="sticky"
                color="primary"
                className={classes.appBar}
            >
                {/* <Toolbar className={classes.toolbar}> */}

                <Grid container className={classes.navbar__contents}>
                    <Typography
                        variant="h6"
                        color="inherit"
                        noWrap
                        className={classes.brand}
                    >
                        POWERGEAR INC.
                    </Typography>
                    <Tabs
                        variant="fullWidth"
                        value={currentPageNum}
                        onChange={pageChange}
                        aria-label="nav tabs example"
                        classes={{ flexContainer: classes.alignedTabs }}
                    >
                        <Tab label="Home" {...a11yProps(0)} />
                        <Tab label="Employees" {...a11yProps(1)} />
                        <Tab label="Attendance" {...a11yProps(2)} />
                        <Tab label="Payslip" {...a11yProps(3)} />
                    </Tabs>
                    <Box ml="auto" mr={6} my="auto">
                        <Button
                            variant="outlined"
                            color="default"
                            classes={{ outlined: classes.logout__button }}
                            startIcon={<MeetingRoomIcon />}
                        >
                            Log Out
                        </Button>
                    </Box>
                </Grid>
            </AppBar>

            <TabPanel value={currentPageNum} index={0}>
                <Dashboard />
            </TabPanel>
            <TabPanel value={currentPageNum} index={1}>
                <Employees />
            </TabPanel>
            <TabPanel value={currentPageNum} index={2}>
                <Attendance />
            </TabPanel>
            <TabPanel value={currentPageNum} index={3}>
                <Payslip />
            </TabPanel>
        </div>
    );
}

export default Header;
