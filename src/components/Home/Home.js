import React from 'react'
import Destinations from '../../components/Home/Destinations/Destinations'
import './Home.css'
import BackgroundImage from '../../assets/Images/seo_hotels.jpg'
import Deals from '../../components/Home/BestDeals/BestDeals'
import Housing from '../../components/Home/Housing/Housing'
import Hosts from './Hosts/Hosts'
import Footer from '../Footer/Footer'
import HostingIcon from '../Icons/HostingIcon'
import ProfileIcon from '../Icons/ProfileIcon'
import Logout from '../Logout/Logout'
const home = (props) => {
    return(
        <div className="Home">
            <div className="HomeFirst">
                <p className="covidInfo">Get the latest on our COVID - 19 response</p>
                {/* <p className="hostSwitch">Switch to hosting</p> */}
                
                <ProfileIcon/>
                <HostingIcon/>
                <p className="placeStay">Places to stay</p>
                <img src={BackgroundImage} alt="bg" class="bg"></img>
                <div className="Navigation">
                    <div className="NavigationChild">
                        <p>Location</p>
                        <p>Where are you going?</p>
                    </div>
                    <div className="NavigationChild">
                        <p>Check in</p>
                        <p>Add dates</p>
                    </div>
                    <div className="NavigationChild">
                        <p>Check out</p>
                        <p>Add dates</p>
                    </div>
                    <div className="NavigationChildLast">
                        <p>Guests</p>
                        <p>Add guests</p>
                    </div>
                    <div className="circle">
                    <i className="fa fa-search"></i>
                    </div>
                </div>
                <div className="GoNearHead">
                    <h3 className="Go">Go</h3>
                    <h3 className="Near">Near</h3>
                    <div  className="ExploreText">
                        <p>Explore nearby stays</p>
                    </div>
                </div>
            </div>
            <Destinations/>
            <Deals/>
            <Housing/>
            <Hosts/>
            <Footer/>
            <Logout {...props}/>
        </div>
    )
}

export default home;
