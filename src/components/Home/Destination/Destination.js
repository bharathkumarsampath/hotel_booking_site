import React from 'react'
import classes from './Destination.module.css'
const destination = (props) => {
    return(
        <div className={classes.Destination}>
            <img src={props.ImgUrl} alt="bg" ></img>
            <p className={classes.cityName}>{props.destinationName}</p>
        </div>
    )
}

export default destination;