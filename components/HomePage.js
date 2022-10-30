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

  const departments = [
    { name: "Development (Web-Dev and Projects)", about: "Works on the main chapter website, all event websites, and any other website required for projects, etc." },
    { name: "CTF", about: "Explores the various domains of cybersecurity such as reverse engineering, wep app exploitation etc." },
    { name: "Design", about: "Designs visually appealing posts and graphics for all social media handles, including news, blogs, infographics, reels, logos, etc." },
    { name: "Event Management", about: "Focuses on the minute details and arrangements required to organise any event, brining out a person's management skills as well as their creative, social, out of the box and efficient mindset/persona."},
    { name: "Content", about: "Handles all the content CYSCOM puts out to the public which includes blogs, infographics,news and much more."},
    { name: "Social Media", about: "Content posting and marketing. from spreading the message of cyscom through various platforms, coming up with, and catching up to the right trends at the right time."},
    { name: "Sponsorship and Finance", about: "Handles all the money matters and finances of the club. Also known as the “bank of CYSCOM”. This department plays one of the key roles in any event that the club conducts. and Finance"},


  ];

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
        <p className={styles.departmentsSub}>Whether you're more of a coder, graphics designer, writer or an organizer, we have departments for each skill</p>
        <p className={styles.departmentsSub}>You can join and help in multiple departments, but you must choose one primary department.</p>
        <div className={styles.departmentsContainer}>
          <div className={styles.dept}>
            <h3>Development (Web-Dev and Projects)</h3>
              <p>Works on the main chapter website, all event websites, and any other website required for projects, etc.</p>
              <p>Develops non web-dev projects, and web apps for the chapter or anyone else to use.</p>
          </div>
          <div className={styles.dept}>
          <h3>CTF</h3>
              <p>Explores the various domains of cybersecurity such as reverse engineering, web app exploitation etc.</p>
              <p>Solves CTF's and participates as a team in competition held by other colleges and organisations.</p>
          </div>
          <div className={styles.dept}>
          <h3>Design</h3>
              <p>Designs visually appealing posts and graphics for all social media handles, including news, blogs, infographics, reels, logos, etc.</p>
              <p>Helping other departments visualise ideas. Example: Designing elements for websites</p>
          </div>
          <div className={styles.dept}>
          <h3>Event Management</h3>
              <p>Focuses on the minute details and arrangements required to organise any event, brining out a person's management skills as well as their creative, social, out of the box and efficient mindset/persona.</p>
          </div>
          <div className={styles.dept}>
          <h3>Content</h3>
              <p>Handles all the content CYSCOM puts out to the public which includes blogs, infographics,news and much more.</p>
              <p>Plays an important role in spreading awareness about Cybersecurity, Teaching Technical Concepts to the public and finding creative ways to do the same.</p>
          </div>
          <div className={styles.dept}>
          <h3>Social Media</h3>
              <p>Takes care of all the postings on social media, and marketing events online. Responsible for spreading the message of CYSCOM through various platform, this department connects the backend of our chapter to the entire world.</p>
              <p>'Masters of time', coming up with, and catching up to the right trends at the right time,helping link the backend of the chapter to the entire world.</p>
          </div>
          <div className={styles.dept}>
          <h3>Sponsorship and Finance</h3>
              <p>Handles all the money matters and finances of the chapter. Also known as the “Bank of CYSCOM”. This department plays one of the key roles in any event that the chapter conducts.</p>
              <p>Our responsibilities also includes bringing in good and valuable sponsorships</p>
          </div>
        </div>
      </section>

      <section className={styles.info} >
        <h1 className={styles.infoH1}>Why join CYSCOM?</h1>
        <div className={styles.infoContainer}>
          <div className={styles.infoCard}>
            <div className={styles.infoCardImage}>
              <div className={styles.infoIcon}><i className="fas fa-users"></i></div>
              <p className={styles.infoText}>Get to be a part of the biggest cyber security student group in VIT Chennai!</p>
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
          <li>Choose your preferred interview slot and department. The available dates are 05-11-2022 and 06-11-2022. Make sure you fill the form on or before the 3rd!</li>
          <li>If you are selected, attend the interview in the given time slot on campus. The place and timings will be confirmed on Whatsapp. Good luck!</li>
        </ol>
      </section>

    </>
  );
}
