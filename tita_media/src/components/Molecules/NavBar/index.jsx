import React from 'react';
import {AppBar,Toolbar,Box} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

//IMAGE
import LogoImage from '../../../assets/images/logo.png'

//COMPONENTS
import ContainerButtons from '../ContainerButtons'
import InputSearch from '../../Atoms/InputSearch'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        '& .MuiAppBar-colorPrimary': {
            backgroundColor: theme.palette.secondary.main,
        },
        '& .MuiToolbar-regular':{
            display: 'flex',
            justifyContent: 'space-between',
            paddingTop:theme.spacing(3),
            paddingBottom:theme.spacing(1)
        },
        '& .MuiPaper-elevation4':{
            boxShadow:'none'
        }
    },
    container_buttons: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    },
    logoImage:{
        width:'10%',
        [theme.breakpoints.down('md')]: {
            width:'auto',
        },
    },
    menuList:{
        display:'none',
        [theme.breakpoints.down('md')]: {
            display:'block'
        },
    }
}));

const NavBar = ()=>{
    const classes = useStyles()
    return(
        <Box component="div" className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <img src={LogoImage}  alt="logo" className={classes.logoImage}/>
                    <Box component="div" className={classes.container_buttons}>
                        <ContainerButtons className={classes.container_buttons_buttons}/>
                        <InputSearch/>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>

    )
    
}
export default NavBar