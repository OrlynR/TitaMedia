import React from 'react';
import {Box} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {ViewStream,AppsOutlined} from '@material-ui/icons';


const useStyles = makeStyles((theme) => ({
    centerIconContainer: {
        display:'flex',
        flexFlow: 'row nowrap',
        justifyContent:'center',
        alignItems:'center',
        marginTop:theme.spacing(2),
        marginBottom:theme.spacing(2),
        '& .MuiSvgIcon-root': {
            color:'#fc758c',
        }
    },
}));

const CenterIconContainer=()=> {
    const classes= useStyles()
    return (
        <Box component='div' className={classes.centerIconContainer}>
             <AppsOutlined fontSize='small'/>
            <ViewStream fontSize='small'/>
           
        </Box>
    );
}

export default CenterIconContainer;
