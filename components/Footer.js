import React from 'react';
import styles from "../styles/global/global.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <p>OWASP VITCC</p>
            <div classNam={styles.smContainer}>
                <div className={styles.footerLink}><a href="https://instagram.com/owaspvit/"><i class="fab fa-instagram" ></i></a></div>
                <div className={styles.footerLink}><a href="https://www.linkedin.com/company/owasp-vit-student-chapter/"><i class="fab fa-linkedin-in" ></i></a></div>
                <div className={styles.footerLink}><a href="https://github.com/owaspvit/"><i class="fab fa-github" ></i></a></div>
                <div className={styles.footerLink}><a href="https://medium.owaspvit.com/"><i class="fab fa-medium-m" ></i></a></div>
            </div>
            <p className={styles.admin}>Switch to Admin Mode</p>
        </footer>
    )
}