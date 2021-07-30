import React from 'react';
import {Box} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MasonryLayout from '../MasonryLayout'
//Components
import TMButton from '../../Atoms/Buttons'
//Components
import img1 from '../../../assets/images/img1.jpg'
import img2 from '../../../assets/images/img2.jpg'
import img3 from '../../../assets/images/img3.jpg'
import img4 from '../../../assets/images/img4.jpg'
import img5 from '../../../assets/images/img5.jpg'
import img6 from '../../../assets/images/img6.jpg'
import img7 from '../../../assets/images/img7.jpg'
import img8 from '../../../assets/images/img8.jpg'
import img9 from '../../../assets/images/img9.jpg'
import img10 from '../../../assets/images/img10.jpg'
import img11 from '../../../assets/images/img11.jpg'
import img12 from '../../../assets/images/img12.jpg'

const useStyles = makeStyles((theme) => ({
    masonryContainer: {
        display:'flex',
        flexFlow: 'column',
        justifyContent:'center',
        alignItems:'center'
    },
}));

const MasonryContainer=()=> {
    const classes= useStyles()

    const imgUrl=[
        img1,
        img2,
        img3,
        img4,
        img5,
        img6,
        img7,
        img8,
        img9,
        img10,
        img11,
        img12
    ]
    return (
        <Box component='div' className={classes.masonryContainer}>
            <MasonryLayout imgUrl={imgUrl} columnCount="3" gap="5"></MasonryLayout>
            <TMButton showButton>Show Me More</TMButton>
        </Box>
    );
}

export default MasonryContainer;
