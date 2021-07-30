import React ,{useState} from 'react';
import {Box,Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Menu} from '@material-ui/icons';

//Components
import TMButton from '../../Atoms/Buttons'

const useStyles = makeStyles((theme) => ({
    root: {
        display:'flex',
        flexFlow: 'row nowrap',
        justifyContent:'space-between',
        alignItems:'center',
        '@media (max-width: 768px)':{
            flexFlow: 'column nowrap',
            backgroundColor:theme.palette.secondary.main,
            position: 'fixed',
            transform:  props => props.transform,
            top: '78px',
            right: 0,
            width: '200px',
            paddingTop:theme.spacing(1),
            transition: 'transform 0.3s ease-in-out',
            '& button':{
                marginBottom:theme.spacing(1)
            }
        }
    },
    menu:{
        display:'none',
        '@media (max-width: 768px)':{
           display:'block',
           '& span':{
               '& .MuiSvgIcon-root':{
                   color:theme.palette.primary.main,
               }
           }
        }

    }
}));

const ContainerButtons = ()=>{
    const [open, setOpen] = useState(false)
    const props = { transform: open ? 'translateX(0)' : 'translateX(100%)'  };
    const classes = useStyles(props);
    return(
        <>
        <Button open={open} onClick={() => setOpen(!open)} className={classes.menu} >
            <Menu color="#fc758c"/>
        </Button>
        <Box component="div" className={classes.root}>
            <TMButton menuButton>All</TMButton>
            <TMButton menuButton>Branding</TMButton>
            <TMButton menuButton>Web</TMButton>
            <TMButton menuButton>Photography</TMButton>
            <TMButton menuButton>App</TMButton>
        </Box>
        </>
    )
    
}
export default ContainerButtons