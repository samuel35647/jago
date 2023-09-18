import React from "react";
import styles from './Printivo.module.css'




const NavBar = ()=>{
 return(
   <div classname={styles.container}>
  <div className={styles.navbarMain}>
 <ul className={styles.navbarHeader}>
   <li>
      <a className={styles.Navhref}href="#">
         Cost Calculator
      </a>
          </li>
   <li>
      <a className={styles.Navhref}href="#">
         Discover Stores
        </a>
        </li>
   <li>
      <a className={styles.Navhref}href="#">Track Orders</a>
      </li>
 </ul>
 
   <div className={styles.subNavbar}>
      <ul className={styles.subNavbarDetails}>
         <li>
            <a className={styles.Navhref}href="#">Need help?
            Call:
            <span className={styles.NavSpan}>
               +234090657848 +234980877670
               </span>
               </a>
         </li>

         <li>
            <img 
               src="" alt=""
               className={styles.NavImg} />
         </li>
     
         <li>
            <button className={styles.NigButton}>
               <img
                   src="bm/images/airplane.jpg" alt=""
                   className={styles.NavNig}/>
                   <small className={styles.Nigsmall}>Nigeria</small>
            </button>
         </li>

      </ul>
      </div>
  </div>
  </div>
 );
}
export default  NavBar