import React from 'react';
import {Box} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    masonryLayoutImage:{
        display:'block',
        width:'100%'
    }
}));

const MasonryLayout=(props)=> {
    const classes= useStyles()
    return (
        <Box component='div' style={{columns:props.columnCount, columnGap:0, width:'50%'}}>
            {
                props.imgUrl.map((item,i)=>{
                    return <img src={item} alt="detailImg" key={i} className={classes.masonryLayoutImage} style={{padding:props.gap/2}} />
                })
            }
        </Box>
    );
}

export default MasonryLayout;
