import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from "./navbar.module.css"
import logo from "../../Assets/logo.png"
import analytics from "../../Assets/analytics.png"
import blog from "../../Assets/blog.png"
import home from "../../Assets/home.png"
import people from "../../Assets/people.png"
import healthicon from "../../Assets/healthicon.png"
import data from "../../Assets/data.png"


function NavBar() {

  
  const [activeLink, setActiveLink] = useState("Dashboard"); 

  

  const handleLinkClick = (p) => {
    setActiveLink(p); 
  }

  const Navlinks = [
    {
     id: 1, img: home, p: "Dashboard" 
    },

    {
      id: 2, img: healthicon, p: "Health Records" 
     },

     {
      id: 3, img: blog, p: "Blogs" 
     },

     {
      id: 4, img: data, p: "Patient DataBase" 
     },

     {
      id: 5, img: people, p: "Hospital Management" 
     },

     {
      id: 6, img: analytics, p: "Analytics" 
     }
    ]

    const Navlinks2 = [
    {
      id: 7, img: people, p: "Setting" 
     },

     {
      id: 8, img: people, p: "Logout" 
     }
  ]

  return (
    <main className={styles.container}>
        <div className={styles.logo}>
          <img src={logo} alt='HMB Logo' />
        </div>

        <ul className={styles.ul}>
          {Navlinks.map(({id, img, p}) => (
            <li key={id} className={`${styles.li} ${activeLink === p ? styles.active : ''}`}>
              <Link to={p} className={styles.link}
              onClick={() => handleLinkClick(p)}>
             <img className={styles.img} src={img} alt='navlink' /> <span> {p} </span>
             </Link>
            </li>
          ))}

          {Navlinks2.map(({id, img, p}) => (
            <li key={id} className={`${styles.li2} ${activeLink === p ? styles.active : ''}`}>
              <Link to={p} className={styles.link}
              onClick={() => handleLinkClick(p)}>
             <img className={styles.img} src={img} alt='navlink' /> <span> {p} </span>
             </Link>
            </li>
          ))}
        </ul>
        </main>
  )
}

export default NavBar;