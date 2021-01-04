import React from 'react'
import Destination from '../Destination/Destination'
import London from '../../../assets/Images/london.jpg';
import Italy from '../../../assets/Images/canal.jpg';
import Maldives from '../../../assets/Images/maldives.jpg';
import classes from './Destinations.module.css'
const destinations = (props) => {
    const destinations = [
        {
            city:'London',
            imgUrl: London
        },
        {
            city:'Italy',
            imgUrl: Italy
        },
        {
            city:'Maldives',
            imgUrl: Maldives
        }
    ]
    return(
        <>
        
        <p className={classes.PopularDestinations}>Popular Destinations</p>
        <div className={classes.Destinations}>
            {
                destinations.map(destination => {
                    return <Destination ImgUrl={destination.imgUrl} destinationName={destination.city}/>
                })
            }
        </div>
        </>
    )
}

export default destinations;