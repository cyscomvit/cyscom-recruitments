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
          <a href="https://owaspvit.com" target="_blank"><Image src={logo} width={60} height={60} alt="logo" /></a>
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
        </ul>
        <div className={styles.burger}><i class="fas fa-bars" onClick={() => setOpen(true)}></i></div>
        {isAdmin ?
          <>
            <Menu.Item key="review" icon={<FormOutlined></FormOutlined>}>
              <Link href="/admin/forms">Review Forms</Link>
            </Menu.Item>
            <Menu.Item key="publish" icon={<CheckCircleOutlined></CheckCircleOutlined>}>
              <Link href="/admin/publish">Publish Results</Link>
            </Menu.Item>
          </>
          : null}
      </Menu>
      {open &&
        <div className={styles.sidebarOverlay}>
          <div className={styles.sidebar}>
            <div className={styles.closeIcon}>
              <i class="fas fa-times" onClick={() => setOpen(false)}></i>
            </div>
            <div className={styles.sidebarColumn}>
              <div className={styles.sidebarRow}>Home</div>
              <div className={styles.sidebarRow}>Register</div>
              <div className={styles.sidebarRow}>Interview</div>
            </div>
          </div>
        </div>
      }
    </>
  );
}