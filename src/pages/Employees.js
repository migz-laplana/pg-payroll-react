import {
    Box,
    Button, CircularProgress, Container, Dialog, DialogActions,
    Grid, makeStyles, Paper, Table, TableBody, TableCell, TableContainer,
    TableHead, TableRow, Typography
} from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import DeleteIcon from '@material-ui/icons/Delete';
import { useCollection } from '@nandorojo/swr-firestore';
import React, { useState } from 'react'
import EmployeesDelete from '../components/EmployeesDelete';
import EmployeesInfoModal from '../components/EmployeesInfoModal';
import PageTitle from '../components/PageTitle';


function Employees() {

    // const [employees, setEmployees] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [modalType, setModalType] = useState("");
    const [selectedEmpValues, setSelectedEmpValues] = useState([]);

    //getting all Employees from Firestore:
    const { data, error } = useCollection(`employees`, { listen: true });


    const showEmpDetails = (indexFromRow) => {
        // find the selected employee
        const [targetEmployee] = data?.filter((_, index) => (
            index === indexFromRow
        ));
        // deconstruct employee's fields
        const {
            fName,
            mName,
            lName,
            position,
            attendanceType,
        } = targetEmployee;
        // add values into an array
        let empFields = [
            fName,
            mName,
            lName,
            position,
            attendanceType,
        ]
        setSelectedEmpValues(empFields);
        setModalType("update");
        setModalOpen(true);
    }

    const handleClose = () => {
        setModalType("");
        setModalOpen(false);
    }

    const addEmployee = () => {
        setModalType("add");
        setModalOpen(true);
    }

    const deleteEmployee = () => {
        setModalType("delete");
        setModalOpen(true);
    }

    // ---------------STYLES-------------------------
    const useStyles = makeStyles((theme) => ({
        mainMenu: {
            padding: theme.spacing(4)
        },
        mainContainer: {
            marginTop: theme.spacing(5),
        },
        pageTitle: {
            marginBottom: theme.spacing(6)
        },
        buttonsArea: {
            padding: theme.spacing(4),
            marginTop: theme.spacing(1)
        },
        tblHeading: {
            fontWeight: 600,
        }
    }));
    const classes = useStyles();



    return (
        <div className="employees">
            <PageTitle title="Employees List" />
            <Container maxWidth="md">
                {/* --------------------------------THE MAIN TABLE----------------------------------- */}
                <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="simple table">
                        <TableHead>
                            <TableRow >
                                <TableCell className={classes.tblHeading}>Name</TableCell>
                                <TableCell className={classes.tblHeading} align="right">Position</TableCell>
                                <TableCell className={classes.tblHeading} align="right">Attendance Type</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data?.map((employee, index) => (
                                <TableRow hover onClick={() => showEmpDetails(index)}>
                                    <TableCell component="th" scope="row">
                                        {employee.lName}, {employee.fName} {employee.mName}
                                    </TableCell>
                                    <TableCell align="right">{employee.position}</TableCell>
                                    <TableCell align="right">{employee.attendanceType}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                    {/* handling for loading of data */}
                    {!data &&
                        <Box p={3}>
                            <Grid container justify="center">
                                <CircularProgress />
                            </Grid>
                        </Box>
                    }
                    {/* handling for data load failure */}
                    {(error || data?.length === 0) &&
                        <Box p={3}>
                            <Grid container justify="center">
                                <Typography variant="subtitle1">Failed to load</Typography>
                            </Grid>
                        </Box>
                    }
                </TableContainer>


                {/* -------------------BUTTONS AREA---------------- */}
                <Grid className={classes.buttonsArea} container justify="center" spacing={3}>
                    <Grid item xs={4}>
                        <Button variant="contained" color="primary" fullWidth onClick={addEmployee} startIcon={<AddCircleIcon />}>
                            Add Employee
                         </Button>
                    </Grid>
                    <Grid item xs={4}>
                        <Button variant="outlined" color="default" fullWidth onClick={deleteEmployee} startIcon={<DeleteIcon />}  >
                            Delete Employee
                         </Button>
                    </Grid>
                </Grid>



                {/* ----------------------EMPLOYEE MODAL-------------------- */}



                {modalType === "delete" ?
                    <EmployeesDelete
                        allEmployees={data}
                        handleClose={handleClose}
                        modalOpen={modalOpen}
                    />
                    :
                    <EmployeesInfoModal
                        selectedEmpValues={selectedEmpValues}
                        type={modalType}
                        handleClose={handleClose}
                        modalOpen={modalOpen}
                    />
                }




            </Container>
        </div>
    )
}

export default Employees
