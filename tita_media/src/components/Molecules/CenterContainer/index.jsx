import React from 'react';
import {Box} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
//Components
import TMButton from '../../Atoms/Buttons'

const useStyles = makeStyles((theme) => ({
    containerCenter: {
        display:'flex',
        flexFlow: 'column nowrap',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:theme.palette.primary.main,
        height:'80vh',
        '& p':{
            color:theme.palette.secondary.main,
            fontSize:theme.spacing(5),
            fontFamily:'Questrial',
            marginBottom:theme.spacing(2),
        },
        '& span':{
            color:theme.palette.secondary.main,
            fontSize:theme.spacing(2),
            fontFamily:'Questrial',
            marginBottom:theme.spacing(1)
        },
        '@media (max-width: 768px)':{
            padding: theme.spacing(4)
        }
    },
}));

const CenterContainer=()=> {
    const classes= useStyles()
    return (
        <Box component='div' className={classes.containerCenter}>
            <p>EXPLORE BEYOND HORIZON</p>
            <span>Magna mundi referrentur quo, no rebum dignissim qui.
                Per quodsi accousata id, agam labores.
            </span>
            <TMButton viewButton>View our work</TMButton>
        </Box>
    );
}

export default CenterContainer;
