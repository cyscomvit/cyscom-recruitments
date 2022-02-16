import { Layout } from "antd";
import { List, Card } from "antd";
const { Header, Content, Footer } = Layout;
import Login from "./Login";
import { useContext } from "react";
import AppContext from "../context/state";
import styles from "../styles/home/home.module.css";
import Link from "next/link";
import Dev from "../static/webdev.jpg";
import Image from "next/image";
export default function HomePage() {
  const value = useContext(AppContext);

  const departments =
    [{ name: "Technical", about: "Responsible for vulnaribility project tools and techniques, Solving CTFS, Writing blogs about latest vulnerabilities, etc." },
    { name: "Development", about: "Responsible for developing and maintaining the website, maintaining the database, etc." },
    { name: "Design", about: "Responsible for designing infographics etc." },
    {
      name: "Operations", about: "Responsible for maintaining social media , managing the chapter etc."
    }];
  return (
    <>
      <section className={styles.homeWrapper} style={{ background: 'url(/static/bg.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className={styles.homeContainer}>
          <p className={styles.heading}>CYSCOM VITC</p>
          <p className={styles.heading} style={{ marginTop: '0px' }}>Recruitments</p>
          <p className={styles.subheading}>2022-2023</p>
          <div className={styles.buttonWrapper}>
            <Link href='/form'>
              <div className={styles.button1}>Register</div>
            </Link>
            <a href="#info"><div className={styles.button2}>Read More</div></a>
          </div>
        </div>
      </section>

      <section className={styles.departments} id="info">
        <h1 className={styles.departmentsH1}>Choose your department</h1>
        <p className={styles.departmentsSub}>Whether you're more of a coder, graphics designer, or even an organizer, we have departments for each skill</p>
        <div className={styles.departmentsContainer}>
          <div className={styles.dept}>
            <h3>Development Team</h3>
            <p>Interested in web and android development? Join the Development team to hone your dev skills and work on real applications!</p>
          </div>
          <div className={styles.dept}>
            <h3>Technical Team</h3>
            <p>Want to delve deeper into the world of cyber-security? The Technical Team specifically deals with cyber sec and how to deal with attacks!</p>
          </div>
          <div className={styles.dept}>
            <h3>Design Team</h3>
            <p>Want to create inspiring and captivating posts, brochures and reels? Join the The Graphics Department to unleash your imagination!</p>
          </div>
          <div className={styles.dept}>
            <h3>Operations and Social Media Team</h3>
            <p>Be part of the chapter's Operations Team and work together to post social media content and organize various events throughout the year!</p>
          </div>
        </div>
      </section>

      <section className={styles.info} >
        <h1 className={styles.infoH1}>Why join CYSCOM?</h1>
        <div className={styles.infoContainer}>
          <div className={styles.infoCard}>
            <div className={styles.infoCardImage}>
              <div className={styles.infoIcon}><i className="fas fa-users"></i></div>
              <p className={styles.infoText}>Get to be a part of the biggest and VITCC's only Cyber Security Student
                Chapter!</p>
            </div>
          </div>
          <div className={styles.infoCard}>
            <div className={styles.infoCardImage}>
              <div className={styles.infoIcon}><i className="fas fa-project-diagram"></i></div>
              <p className={styles.infoText}>Work on real time projects, learn effective collaboration and how to organize events!</p>
            </div>
          </div>
          <div className={styles.infoCard}>
            <div className={styles.infoCardImage}>
              <div className={styles.infoIcon}><i className="fas fa-laptop-code"></i></div>
              <p className={styles.infoText}>Learn new and exciting technologies and tech stacks through webinars, online sessions and more!</p>
            </div>
          </div>
          <div className={styles.infoCard}>
            <div className={styles.infoCardImage}>
              <div className={styles.infoIcon}><i className="fas fa-bug"></i></div>
              <p className={styles.infoText}>Dive into the evolving world of cyber-security and learn about the best security practices!</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.howto}>
        <h1>How to apply</h1>
        <ol>
          <li><Link href='/form'><a>Login here using your VIT Email Address.</a></Link></li>
          <li>Fill the form with some basic details.</li>
          <li>Choose your preferred interview slot and department. The available dates are 26/02 and 27/02. Make sure you fill the form on or before the 24th!</li>
          <li>Attend the interview in the given time slot on discord. Good luck!</li>
        </ol>
      </section>

    </>
  );
}
