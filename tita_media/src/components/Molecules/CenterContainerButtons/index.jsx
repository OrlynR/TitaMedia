import React from 'react';
import {Box} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

//Components
import TMButton from '../../Atoms/Buttons'

const useStyles = makeStyles((theme) => ({
    rootContainer:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },
    root: {
        display:'flex',
        flexFlow: 'row wrap',
        justifyContent:'space-between',
        alignItems:'center',
        marginTop:theme.spacing(2),
        marginBottom:theme.spacing(2)
    }   
}));

const CenterContainerButtons = ()=>{
    const classes = useStyles();
    return(
        <>
        <Box component="div" className={classes.rootContainer}>
            <Box component="div" className={classes.root}>
                <TMButton menuButton>All</TMButton>
                <TMButton menuButton>Branding</TMButton>
                <TMButton menuButton>Web</TMButton>
                <TMButton menuButton>Photography</TMButton>
                <TMButton menuButton>App</TMButton>
            </Box>
        </Box>
        
        </>
    )
    
}
export default CenterContainerButtons