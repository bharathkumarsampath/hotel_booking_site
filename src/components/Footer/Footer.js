import React from 'react'
import classes from './Footer.module.css'

const footer = (props) => (
      <div className={classes.footer}>
          <p className={classes.footerChild}>ABOUT</p>
          <p className={classes.footerChild}>COMMUNITY</p>
          <p className={classes.footerChild}>HOST</p>
          <p className={classes.footerChild}>SUPPORT</p>
      </div>
)

export default footer;