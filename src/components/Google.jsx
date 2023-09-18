import React from 'react'
import styles from './Google.module.css'
import {FcAbout} from 'react-icons/fc'


const NavBar = ()=>{
   return(
   <div>
    <div className={styles.GOO}>
    <p className={styles.Google}>Google</p>
    <FcAbout/>
    </div>
    
   <div className={styles.Jagoinput}>
      <input className={styles.input}type="text"/>
   </div>
   
   <div>
      <ul className={styles.orderList}>
         <li className={styles.Item}>Google Search</li>
         <li className={styles.lucky}>Im feeling lucky</li>

      </ul>
   </div>


   </div>
   );













}
export default NavBar