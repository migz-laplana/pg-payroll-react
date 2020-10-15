import { makeStyles, Typography } from '@material-ui/core';
import React from 'react'

function PageTitle(props) {
    const { title } = props;

    const useStyles = makeStyles((theme) => ({

        pageTitle: {
            marginBottom: theme.spacing(6),
            marginTop: theme.spacing(5),
        }
    }));
    const classes = useStyles();


    return (
        <div>
            <Typography className={classes.pageTitle} gutterBottom variant="h4" align="center">
                {title}
            </Typography>
        </div>
    )
}

export default PageTitle
