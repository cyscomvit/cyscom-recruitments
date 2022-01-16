import { Menu } from 'antd';
import { HomeFilled, FormOutlined, NotificationOutlined, SnippetsOutlined, CheckCircleOutlined, EditOutlined } from '@ant-design/icons';
import Link from 'next/link';
import { useContext, useEffect, useState } from 'react';
import AppContext from '../context/state';
import styles from "../styles/global/global.module.css";
import Image from 'next/image';
import Script from 'next/script';
import logo from "../static/owasp-logo.png";

export default function Navigation({ isAdmin }) {

  const value = useContext(AppContext);
  const [open, setOpen] = useState(false);

  const handleClick = e => {
    console.log(e.key)
    value.setPageState(e.key);
  };
  useEffect(() => {
    console.log(value.state.pageState)

  }, [value])
  return (
    <>
      <Menu onClick={handleClick} selectedKeys={[value.state.pageState]} mode="horizontal" className={styles.nav}>
        <Script src="https://kit.fontawesome.com/fc236c3dc0.js" crossorigin="anonymous" />
        <div className={styles.logo}>
          <a href="https://owaspvit.com" target="_blank" rel="noreferrer"><Image src={logo} width={60} height={60} alt="logo" /></a>
        </div>
        <ul className={styles.navOptions}>
          {/* <Menu.Item key="home" icon={<HomeFilled></HomeFilled>}>
          <Link href="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="form" icon={<EditOutlined></EditOutlined>} >
          <Link href="/form">Form</Link>
        </Menu.Item>
        <Menu.Item key="interview" icon={<SnippetsOutlined></SnippetsOutlined>}>
          <Link href="/interview">Interview</Link>
        </Menu.Item>
        <Menu.Item key="results" icon={<NotificationOutlined></NotificationOutlined>}>
          <Link href="/results">Results</Link>
        </Menu.Item> */}
          <li className={styles.navItem}><Link href='/' style={{ color: '#fff' }}><a className={styles.link}>Home</a></Link></li>
          <li className={styles.navItem}><Link href='/form' style={{ color: '#fff' }}><a className={styles.link}>Register</a></Link></li>
          <li className={styles.navItem}><Link href='/interview' style={{ color: '#fff' }}><a className={styles.link}>Interview</a></Link></li>
          <li className={styles.navItem}><Link href='/results' style={{ color: '#fff' }}><a className={styles.link}>Results</a></Link></li>
          {isAdmin && 
          <>
          <li className={styles.navItem}><Link href='/admin/forms' style={{ color: '#fff' }}><a className={styles.link}>Review Forms</a></Link></li>
          <li className={styles.navItem}><Link href='/admin/publish' style={{ color: '#fff' }}><a className={styles.link}>Publish Results</a></Link></li>
          </>
          }
        </ul>
        <div className={styles.burger}><i className="fas fa-bars" onClick={() => setOpen(true)}></i></div>
      </Menu>
      {open &&
        <div className={styles.sidebarOverlay}>
          <div className={styles.sidebar}>
            <div className={styles.closeIcon}>
              <i className="fas fa-times" onClick={() => setOpen(false)}></i>
            </div>
            <div className={styles.sidebarColumn}>
              <Link href='/'><a style={{color : "black"}} className={styles.link}>Home</a></Link>
              <Link href='/form'><a style={{color : "black"}} className={styles.link}>Register</a></Link>
              <Link href='/interview'><a style={{color : "black"}} className={styles.link}>Interview</a></Link>
              <Link href='/results'><a style={{color : "black"}} className={styles.link}>Results</a></Link>
              {isAdmin &&
              <>
              <Link href='/admin/forms'><a style={{color : "black"}} className={styles.link}>Review Forms</a></Link>
              <Link href='/admin/publish'><a style={{color : "black"}} className={styles.link}>Publish Results</a></Link>
              </>
              }
            </div>
          </div>
        </div>
      }
    </>
  );
}