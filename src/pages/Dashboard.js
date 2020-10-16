import { Container, Divider, Grid, Paper, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import list from "../images/list.png";
import payrollcopy from "../images/payrollcopy.jpg";
import record from "../images/record.png";
// import { db } from './firebase'
import "fontsource-roboto";
import PageTitle from "../components/PageTitle";
import Header from "../components/Header";

function Dashboard() {
    //----------STATE VARIABLES
    const [employees, setEmployees] = useState([]);

    //----------EFFECTS
    useEffect(() => {
        // const getDbData = async () => {
        //     try {
        //         let queryData = await db
        //             .collection("employees")
        //             .get()
        //         setEmployees(queryData.docs.map(doc => (
        //             doc.data()
        //         )))
        //     } catch (error) {
        //         alert(error);
        //     }
        // }
        // getDbData();
    }, []);

    console.log(employees);

    //-------STYLES
    const useStyles = makeStyles((theme) => ({
        mainMenu: {
            padding: theme.spacing(4),
        },
        mainContainer: {
            marginTop: theme.spacing(5),
        },
        homeText: {
            marginBottom: theme.spacing(6),
        },
        image: {
            width: "157px",
            height: "157px",
        },
        mainDivider: {
            margin: theme.spacing(4),
            color: "lightgrey",
        },
    }));
    const classes = useStyles();

    return (
        <div className="dashboard">
            <PageTitle title="Dashboard" />
            <Container maxWidth="lg">
                <Paper className={classes.mainMenu} elevation={3}>
                    <Typography variant="h3" align="center" gutterBottom>
                        Welcome, Powergear!
                    </Typography>
                    <Typography variant="h5" align="center" gutterBottom>
                        Admin
                    </Typography>
                    <Divider variant="middle" className={classes.mainDivider} />
                    <Grid container spacing={5}>
                        <Grid item xs={4} container justify="center">
                            <a href="/employees">
                                <img
                                    className={classes.image}
                                    src={list}
                                    alt=""
                                />
                            </a>
                        </Grid>
                        <Grid item xs={4} container justify="center">
                            <a href="/attendance">
                                <img
                                    className={classes.image}
                                    src={record}
                                    alt=""
                                />
                            </a>
                        </Grid>
                        <Grid item xs={4} container justify="center">
                            <a href="/payslip">
                                <img
                                    className={classes.image}
                                    src={payrollcopy}
                                    alt=""
                                />
                            </a>
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
        </div>
    );
}

export default Dashboard;
