import { Box, Button, Checkbox, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControl, FormControlLabel, FormHelperText, MenuItem, TextField } from '@material-ui/core'
import React, { useState } from 'react'

function EmployeesDelete(props) {
    const { allEmployees, handleClose, modalOpen } = props;
    const [employee, setEmployee] = useState(null);

    const [formIsError, setFormIsError] = useState(true);
    const [isClicked, setIsClicked] = useState(false);

    const handleChange = (event) => {
        setEmployee(event.target.value);
    };

    const confirmDelete = () => {
        setIsClicked(true);
        (!formIsError && employee) && handleClose();
    }

    return (
        <div>
            <Dialog
                open={modalOpen}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                maxWidth="sm"
                fullWidth={true}
            >
                <DialogTitle id="alert-dialog-title">{"Delete an employee"}</DialogTitle>
                <DialogContent>


                    <Box mx="auto" my={4} width="75%">
                        <TextField
                            id="outlined-select-currency"
                            select
                            label="Select Employee"
                            value={employee}
                            onChange={handleChange}
                            // helperText="Please select your currency"
                            variant="outlined"
                            fullWidth
                            size="small"
                        >
                            {allEmployees?.map((employee, index) => (
                                <MenuItem key={index} value={index}>
                                    {`${employee.lName}, ${employee.fName} ${employee.mName}`}
                                </MenuItem>
                            ))}
                        </TextField>
                    </Box>
                    <FormControl required error={formIsError}>
                        <FormControlLabel
                            control={<Checkbox
                                value="allowExtraEmails"
                                color="primary"
                                onClick={(e) => { e.target.checked ? setFormIsError(false) : setFormIsError(true) }}
                            />}
                            label="I confirm to remove this employee from the system."
                        />
                        <FormHelperText>
                            {(formIsError && isClicked) ? "You can display an error" : null}

                        </FormHelperText>
                    </FormControl>

                    {/* <DialogContentText id="alert-dialog-description">
                        Let Google help apps determine location. This means sending anonymous location data to
                        Google, even when no apps are running.
                    </DialogContentText> */}

                </DialogContent>
                <DialogActions>
                    <Button onClick={confirmDelete} color="primary">
                        Confirm
                    </Button>
                    <Button onClick={handleClose} color="primary" autoFocus>
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default EmployeesDelete
