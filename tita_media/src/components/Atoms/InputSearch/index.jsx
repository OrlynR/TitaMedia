  
import React from 'react';

//MATERIAL-UI
import { makeStyles } from '@material-ui/core/styles';
import {Search} from '@material-ui/icons';
import {Box,InputBase} from '@material-ui/core';

const useStyle = makeStyles((theme) => ({
    root: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor:theme.palette.secondary.main,
        color:theme.palette.secondary.dark,
        marginLeft: 0,
        width: '100%',
        '&:hover': {
            color:theme.palette.primary.main,
            backgroundColor: theme.palette.secondary.dark,
        },
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
        '@media (max-width: 768px)':{
            display:'none'
        }
    },
    icon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '& .MuiSvgIcon-root': {
            color: theme.palette.primary.main
        }
    },
    inputRoot: {
        color: 'inherit',
    },
    inputSearch: {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    }
}));

const InputSearch = ()=>{
    const classes = useStyle()
    return(
        <Box component='div' className={classes.root}>
            <Box component='div' className={classes.icon}>
                <Search color="#fc758c"/>
            </Box>
            <InputBase
                classes={{
                    root: classes.inputRoot,
                    input: classes.inputSearch
                }}
                inputProps={{ "aria-label": "search" }}
            />
        </Box>

    )
}

export default InputSearch