import React from 'react';
import styles from "../styles/global/global.module.css";

export default function Footer() {
    return (
        <footer style={{
            position: "relative",
            bottom: "0",
            width: "100%",
            height: "3.5rem"   
        }} className={styles.footer}>
            <p>CYSCOM VITC</p>
            <div className={styles.smContainer}>
                <div className={styles.footerLink}><a href="https://instagram.com/cyscomvit/"><i className="fab fa-instagram" ></i></a></div>
                <div className={styles.footerLink}><a href="https://www.linkedin.com/company/cyscomvit/"><i className="fab fa-linkedin-in" ></i></a></div>
                <div className={styles.footerLink}><a href="https://github.com/cyscomvit"><i className="fab fa-github" ></i></a></div>
                <div className={styles.footerLink}><a href="https://medium.cyscomvit.com/"><i className="fab fa-medium-m" ></i></a></div>
            </div>
        </footer>
    )
}
