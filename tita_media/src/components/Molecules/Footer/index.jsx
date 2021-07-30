import React,{useState} from 'react';
import {Box} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {BottomNavigation,BottomNavigationAction} from '@material-ui/core';
import {Facebook,Twitter,Instagram,LinkedIn,YouTube} from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    footerContainer: {
        display:'flex',
        flexFlow: 'column nowrap',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:theme.palette.secondary.main,
        paddingTop:theme.spacing(3),
        paddingBottom:theme.spacing(3),
        '& p':{
            color:theme.palette.secondary.dark,
            fontSize:'12px',
            fontFamily:'Questrial',
            marginBottom:theme.spacing(2),
            letterSpacing:'0.7px'
        },
        '& span':{
            color:theme.palette.primary.dark,
            fontSize:'12px',
            fontFamily:'Questrial',
            letterSpacing:'0.7px'
        }
    },
    navigationContainer:{
        '& .MuiBottomNavigationAction-root': {
            minWidth: '50px'
        },
        '& span':{
            color:theme.palette.secondary.dark
        },
        '& .MuiBottomNavigationAction-root.Mui-selected' : {
            color:theme.palette.secondary.dark
        }
    }
}));

const Footer =()=> {
    const classes= useStyles()
    const [value, setValue] = useState(0);
    return (
        <Box component='div' className={classes.footerContainer}>   
            <p>@ 2016 - <span>Sneak</span>  All Right Reserved</p>
            <BottomNavigation
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
            showLabels
            className={classes.navigationContainer}
            >
            <BottomNavigationAction  icon={<Facebook />} />
            <BottomNavigationAction  icon={<Twitter/>} />
            <BottomNavigationAction  icon={<Instagram/>} />
            <BottomNavigationAction  icon={<LinkedIn/>} />
            <BottomNavigationAction  icon={<YouTube />} />
            </BottomNavigation>
        </Box>
    );
}

export default Footer;
