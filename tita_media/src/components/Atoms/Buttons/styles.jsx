import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  menuButton: {
    fontSize:'13px',
    borderRadius:'0px',
    fontFamily:'MontserratRegular',
    fontWeight:500,
    '& .MuiButton-label': {
      color: theme.palette.secondary.dark,
      textTransform:'none'
    },
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
      '& .MuiButton-label': {
        color: theme.palette.secondary.main
      },
    },
  },
  showButton: {
    marginTop:theme.spacing(2),
    marginBottom:theme.spacing(2),
    fontFamily:'MontserratRegular',
    fontWeight:400,
    borderRadius:'0px',
    backgroundColor: theme.palette.primary.dark,
    '& .MuiButton-label': {
      color: theme.palette.secondary.main,
      textTransform:'none',
      fontSize:'12px'
    
    },
    '& span':{
      marginBottom:'0px !important'
    },
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiButton-label': {
        color: theme.palette.secondary.main
      },
    },
  },
  viewButton: {
    fontFamily:'MontserratRegular',
    fontWeight:400,
    borderRadius:'0px',
    backgroundColor: theme.palette.secondary.main,
    '& .MuiButton-label': {
      color: theme.palette.primary.main,
      textTransform:'none',
      fontSize:'12px'    
    },
    '& span':{
      marginBottom:'0px !important'
    },
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
      '& .MuiButton-label': {
        color: theme.palette.secondary.main
      },
    },
  },
  
}))

export default useStyles
