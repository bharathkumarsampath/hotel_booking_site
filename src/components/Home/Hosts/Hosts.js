import React from 'react'
import classes from './Hosts.module.css'
import hostOne from '../../../assets/Images/hostHome.jpg'
import hostTwo from '../../../assets/Images/hostOnlineExperience.jpg'
import hostThree from '../../../assets/Images/hostExperience.jpg'

const hosts = (props) => {
    const hostConsts = [
        {
            name:"Host your home",
            img:hostOne
        },
        {
            name:"Host an online Experience",
            img:hostTwo
        },
        {
            name:"Host an Experience",
            img:hostThree
        }
    ]
    return(
        <>
        <p className={classes.title}>Join Millions of hosts</p>
        <div className={classes.HostMain}>
            {
                hostConsts.map(host=> 
                    <div className={classes.Host}>
                        <img src={host.img} alt="bg" ></img>
                        <p className={classes.HostName}>{host.name}</p>
                    </div>
                )
            }
        </div>
        </>
    )
}

export default hosts;
