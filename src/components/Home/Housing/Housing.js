import React from 'react'
import classes from './Housing.module.css'
import housingOne from '../../../assets/Images/entireHomes.jpg'
import housingTwo from '../../../assets/Images/cabinAndCottages.jpg'
import housingThree from '../../../assets/Images/petsWelcome.jpg'
import housingFour from '../../../assets/Images/uniqueStays.jpg'

const housing = (props) => {
    const housingConsts = [
        {
            name:"Entire homes",
            img:housingOne
        },
        {
            name:"Cabin and cottages",
            img:housingTwo
        },
        {
            name:"Pets welcome",
            img:housingThree
        },
        {
            name:"Unique stays",
            img:housingFour
        }
    ]
    return(
        <>
        <p className={classes.title}>Live Anywhere</p>
        <div className={classes.HousingMain}>
            {
                housingConsts.map(housing => 
                    <div className={classes.Housing}>
                        <img src={housing.img} alt="bg" ></img>
                        <p className={classes.HousingName}>{housing.name}</p>
                    </div>
                )
            }
        </div>
        </>
    )
}

export default housing;
