import Link from 'next/link';
import { useContext, useEffect, useState } from 'react';
import AppContext from '../context/state';
import styles from '../styles/global/global.module.css';
import Image from 'next/image';
import Script from 'next/script';
import logo from '../static/cyscom-logo.png';

export default function Navigation({ isAdmin }) {
  const value = useContext(AppContext);
  const [open, setOpen] = useState(false);

  const handleClick = (e) => {
    value.setPageState(e.key);
  };
  useEffect(() => {}, [value]);
  return (
    <>
      <nav className={styles.nav}>
        <Script
          src='https://kit.fontawesome.com/fc236c3dc0.js'
          crossorigin='anonymous'
        />
        <div className={styles.logo}>
          <Link href='/'>
            <a>
              <Image src={logo} width={70} height={60} alt='logo' />
            </a>
          </Link>
        </div>
        <ul className={styles.navOptions}>
          <li className={styles.navItem}>
            <Link href='/' style={{ color: '#fff' }}>
              <a className={styles.link}>Home</a>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href='/form' style={{ color: '#fff' }}>
              <a className={styles.link}>Register</a>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href='/interview' style={{ color: '#fff' }}>
              <a className={styles.link}>Interview</a>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href='/results' style={{ color: '#fff' }}>
              <a className={styles.link}>Results</a>
            </Link>
          </li>
          {isAdmin && (
            <>
              <li className={styles.navItem}>
                <Link href='/admin/forms' style={{ color: '#fff' }}>
                  <a className={styles.link}>Review Forms</a>
                </Link>
              </li>
              <li className={styles.navItem}>
                <Link href='/admin/publish' style={{ color: '#fff' }}>
                  <a className={styles.link}>Publish Results</a>
                </Link>
              </li>
            </>
          )}
        </ul>
        <div className={styles.burger}>
          <i
            className='fas fa-bars'
            onClick={() => setOpen(true)}
            style={{ color: '#fff' }}
          ></i>
        </div>
      </nav>
      {open && (
        <div className={styles.sidebarOverlay}>
          <div className={styles.sidebar}>
            <div className={styles.closeIcon}>
              <i className='fas fa-times' onClick={() => setOpen(false)}></i>
            </div>
            <div className={styles.sidebarColumn}>
              <Link href='/'>
                <a style={{ color: 'black' }} className={styles.link}>
                  Home
                </a>
              </Link>
              <Link href='/form'>
                <a style={{ color: 'black' }} className={styles.link}>
                  Register
                </a>
              </Link>
              <Link href='/interview'>
                <a style={{ color: 'black' }} className={styles.link}>
                  Interview
                </a>
              </Link>
              <Link href='/results'>
                <a style={{ color: 'black' }} className={styles.link}>
                  Results
                </a>
              </Link>
              {isAdmin && (
                <>
                  <Link href='/admin/forms'>
                    <a style={{ color: 'black' }} className={styles.link}>
                      Review Forms
                    </a>
                  </Link>
                  <Link href='/admin/publish'>
                    <a style={{ color: 'black' }} className={styles.link}>
                      Publish Results
                    </a>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
