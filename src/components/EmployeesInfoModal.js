import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, TextField, Typography } from '@material-ui/core';
import { useCollection } from '@nandorojo/swr-firestore';
import React, { useState } from 'react'


function EmployeesInfoModal(props) {
    const { selectedEmpValues, type, handleClose, modalOpen } = props;

    const { data, add } = useCollection('employees')

    const addEmployee = () => {
        // calling this will automatically update your global cache & Firestore
        add({
            fName: newEmpValues[0],
            mName: newEmpValues[1],
            lName: newEmpValues[2],
            position: newEmpValues[3],
            attendanceType: newEmpValues[4],
        })
        handleClose();
    }

    const [newEmpValues, setNewEmpValues] = useState([
        "",
        "",
        "",
        "",
        "",
    ])

    const [employeeFields] = useState([
        "First Name",
        "Middle Name",
        "Last Name",
        "Position",
        "Attendance Type",
    ])

    const handleFormInput = (e) => {
        const { id, value } = e.target;
        const newVer = newEmpValues;
        newVer.splice(id, 1, value);
        setNewEmpValues(newVer);
        console.log(newEmpValues);
    }

    return (
        <div>
            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={modalOpen}>

                <DialogTitle id="customized-dialog-title" value={"Employee Details"}>
                    {type === "update" ?
                        `${selectedEmpValues[2]}, ${selectedEmpValues[1]} ${selectedEmpValues[0]}`
                        :
                        "New Employee"
                    }
                </DialogTitle>

                <DialogContent dividers>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Typography align="center">Employee Details</Typography>
                        </Grid>

                        {
                            type === "update" ?
                                selectedEmpValues?.map((value, index) => (
                                    <Grid item xs={4}>
                                        <TextField
                                            id={index}
                                            label={employeeFields[index]}
                                            defaultValue={value}
                                            variant="outlined"
                                        />
                                    </Grid>
                                ))
                                :
                                employeeFields?.map((_, index) => (
                                    <Grid item xs={4}>
                                        <TextField
                                            id={index}
                                            label={employeeFields[index]}
                                            variant="outlined"
                                            onChange={handleFormInput}
                                        />
                                    </Grid>
                                ))
                        }

                    </Grid>


                </DialogContent>

                <DialogActions>
                    {type === "add" ?
                        <Button color="primary" onClick={addEmployee}>
                            Add Employee
                        </Button>
                        :
                        <Button color="primary">
                            Save Changes
                        </Button>
                    }
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default EmployeesInfoModal
