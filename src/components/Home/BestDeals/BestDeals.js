import React from 'react'
import classes from './BestDeals.module.css'
import hotelOne from '../../../assets/Images/grandRoyalHotel2.jpg'
import hotelTwo from '../../../assets/Images/queenHotel.jpg'
import LocationIcon from '../../../components/Icons/LocationIcon'
import RatingIcon from '../../Icons/RatingIcon'

const bestDeals = (props) => {
    const bestDealsConsts = [
        {
            name:"Grand Royal Hotel",
            location:"Wembly,London",
            map:"2.0 km to city",
            rating:'4.5',
            cost:'180',
            img:hotelOne
        },
        {
            name:"Queen Hotel",
            location:"Wembly,London",
            map:"2.0 km to city",
            rating:'4.5',
            cost:'200',
            img:hotelTwo
        }
    ]
    return(
        <>
        <p className={classes.title}>Best Deals</p>
        <div className={classes.bestDeals}>
            {
                bestDealsConsts.map(deal => 
                <>
                    <img src={deal.img} alt="bg" ></img>
                </>
                )
            }
        </div>
        <div className={classes.bestDealDetails}>
        {
                bestDealsConsts.map(deal =>
                        <div className={classes.bestDealDetail}>
                            <p className={classes.dealName}>{deal.name}</p>
                            <p className={classes.location}> {deal.location}</p>
                            <div className={classes.map}>
                                <div className={classes.mapIcon}>
                                    <LocationIcon/>
                                </div>
                                <div className={classes.mapText}>
                                    {deal.map}
                                </div>
                            </div>
                            <p className={classes.rating}><RatingIcon/></p>
                            {/* <p className={classes.cost}>{deal.cost}</p> */}
                        </div> 
                    
                    )
            }
        </div>
        </>
    )
}

export default bestDeals;
