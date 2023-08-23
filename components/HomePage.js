import { Layout } from 'antd';
import { List, Card } from 'antd';
const { Header, Content, Footer } = Layout;
import Login from './Login';
import { useContext } from 'react';
import AppContext from '../context/state';
import styles from '../styles/home/home.module.css';
import Link from 'next/link';
import Dev from '../static/webdev.jpg';
import Image from 'next/image';
import React, { useRef } from 'react';

export default function HomePage() {
  const value = useContext(AppContext);

  const departments = [
    {
      name: 'Development (Web-Dev and Projects)',
      about:
        'Works on the main chapter website, all event websites, and any other website required for projects, etc.',
    },
    {
      name: 'CTF',
      about:
        'Explores the various domains of cybersecurity such as reverse engineering, wep app exploitation etc.',
    },
    {
      name: 'Design',
      about:
        'Designs visually appealing posts and graphics for all social media handles, including news, blogs, infographics, reels, logos, etc.',
    },
    {
      name: 'Event Management',
      about:
        "Focuses on the minute details and arrangements required to organise any event, brining out a person's management skills as well as their creative, social, out of the box and efficient mindset/persona.",
    },
    {
      name: 'Content',
      about:
        'Handles all the content CYSCOM puts out to the public which includes blogs, infographics,news and much more.',
    },
    {
      name: 'Social Media',
      about:
        'Content posting and marketing. from spreading the message of cyscom through various platforms, coming up with, and catching up to the right trends at the right time.',
    },
    {
      name: 'Sponsorship and Finance',
      about:
        'Handles all the money matters and finances of the club. Also known as the “bank of CYSCOM”. This department plays one of the key roles in any event that the club conducts. and Finance',
    },
  ];

  const scrollToInfoSection = () => {
    const infoSection = document.getElementById('info');
    if (infoSection) {
      infoSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <section
        className={styles.homeWrapper}
        style={{
          background: 'url(/static/bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className={styles.homeContainer}>
          <p className={styles.heading}>CYSCOM VITC</p>
          <p className={styles.heading} style={{ marginTop: '0px' }}>
            Recruitments
          </p>
          <p className={styles.subheading}>2023-2024</p>
          <div className={styles.buttonWrapper}>
            <Link href='/form'>
              <div className={styles.button1}>Register</div>
            </Link>
            <div className={styles.button2} onClick={scrollToInfoSection}>
              Read More
            </div>
          </div>
        </div>
      </section>

      <section className={styles.departments} id='info'>
        <h1 className={styles.departmentsH1}>Choose your department</h1>
        <p className={styles.departmentsSub}>
          Whether you're more of a developer, graphics designer, writer or an
          organizer, we have departments for all kinds of people!
        </p>
        <p className={styles.departmentsSub}>
          You can join and help in multiple departments, but you must choose one
          primary department.
        </p>
        <div className={styles.departmentsContainer}>
          <div className={styles.dept}>
            <h3>Development (Web-Dev and Open Source Projects)</h3>
            <p>
              Responsibilities encompass the management of the primary chapter
              website, subsidiary event websites, and any additional web
              platforms integral to projects.
            </p>
            <p>
              This role involves the creation of web development projects and
              applications for utilization within the chapter or by external
              parties.
            </p>
            <p>
              Candidate Requirements: Candidates who are interested in web-dev
              and have a basic knowledge of HTML, CSS and JS (optional) are
              welcome.
            </p>
          </div>
          <div className={styles.dept}>
            <h3>Technical (CTF and Projects)</h3>
            <p>
              Our skilled technical team enthusiastically engages in Capture The
              Flag (CTF) competitions and undertakes exciting security-oriented
              projects. This involves friendly challenges where our experts
              showcase their problem-solving abilities by solving puzzles and
              overcoming digital obstacles.
            </p>
            <p>
              Additionally, they're dedicated to crafting innovative projects
              that enhance the security of systems and data, making sure
              everything is well-guarded in our digital landscape.
            </p>
            <p>
              Candidate Requirements: Candidates who have a basic knowledge
              about CTF and cybersecurity are welcome.
            </p>
          </div>
          <div className={styles.dept}>
            <h3>Design</h3>
            <p>
              Crafts compelling visuals that capture the essence of our
              activities and events. We handle designs for our social media
              handles which includes news, blogs, infographics, reels, video
              editing etc.
            </p>
            <p>
              Apart from this, we also focus on designing the graphical elements
              for websites. Let's unleash our creative magic together.
            </p>
            <p>
              Candidate Requirements: Candidates who have a creative mind and
              are interested in designing are welcome.
            </p>
          </div>
          <div className={styles.dept}>
            <h3>Event Management</h3>
            <p>
              The Event Management Department at Cyscom, is the driving force
              behind our dynamic and engaging events. With meticulous
              coordination, the department orchestrates a diverse range of
              activities, catering to the interests of cybersecurity
              enthusiasts.
            </p>
            <p>
              The team adeptly manages finances, ensuring every penny is
              well-utilized for impactful experiences. Leveraging strategic
              partnerships, the department actively secures sponsors that share
              our commitment to fostering knowledge-sharing and networking
              opportunities.
            </p>
            <p>
              Candidate Requirements: Candidates who are interested in
              organising, managing and planning events are welcome.
            </p>
          </div>
          <div className={styles.dept}>
            <h3>Content</h3>
            <p>
              The Content Department at Cyscom shapes cybersecurity discourse by
              crafting insightful blogs, news updates, and engaging infographic
              posts. As writers we delve into trends, developments, and best
              practices, fostering an informed community.
            </p>
            <p>
              Plays an important role in spreading awareness about
              Cybersecurity, Teaching Technical Concepts to the public and
              finding creative ways to do the same.
            </p>
            <p>
              Candidate Requirements: Passionate technical and non-technical
              content writers who are interested in writing blogs, and content
              are welcome.
            </p>
          </div>
          <div className={styles.dept}>
            <h3>Social Media</h3>
            <p>
              Responsible for posting regularly about the latest updates in the
              field of Cybersecurity on our platforms and boosting our online
              presence with trendy captions and hashtags to accompany our weekly
              posts. In short, it is the department which connects the backend
              of the chapter to the outside world.
            </p>
            <p>
              Candidate Requirements: People who want to manage a active and
              vibrant chapter's online handles are welcome. Everyone interested
              can apply.
            </p>
          </div>
          {/* <div className={styles.dept}>
            <h3>Sponsorship and Finance</h3>
            <p>
              Handles all the money matters and finances of the chapter. Also
              known as the “Bank of CYSCOM”. This department plays one of the
              key roles in any event that the chapter conducts.
            </p>
            <p>
              Our responsibilities also includes bringing in good and valuable
              sponsorships
            </p>
            <p>Candidate Requirements: Interested Candidates are welcome.</p>
          </div> */}
        </div>
      </section>

      <section className={styles.info}>
        <h1 className={styles.infoH1}>Why join CYSCOM?</h1>
        <div className={styles.infoContainer}>
          <div className={styles.infoCard}>
            <div className={styles.infoCardImage}>
              <div className={styles.infoIcon}>
                <i className='fas fa-users'></i>
              </div>
              <p className={styles.infoText}>
                Get to be a part of the biggest cyber security student group in
                VIT Chennai!
              </p>
            </div>
          </div>
          <div className={styles.infoCard}>
            <div className={styles.infoCardImage}>
              <div className={styles.infoIcon}>
                <i className='fas fa-project-diagram'></i>
              </div>
              <p className={styles.infoText}>
                Work on real time projects, learn effective collaboration and
                how to organize events!
              </p>
            </div>
          </div>
          <div className={styles.infoCard}>
            <div className={styles.infoCardImage}>
              <div className={styles.infoIcon}>
                <i className='fas fa-laptop-code'></i>
              </div>
              <p className={styles.infoText}>
                Learn new and exciting technologies and tech stacks through
                webinars, online sessions and more!
              </p>
            </div>
          </div>
          <div className={styles.infoCard}>
            <div className={styles.infoCardImage}>
              <div className={styles.infoIcon}>
                <i className='fas fa-bug'></i>
              </div>
              <p className={styles.infoText}>
                Dive into the evolving world of cyber-security and learn about
                the best security practices!
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.howto}>
        <h1>How to apply</h1>
        <ol>
          <li>
            <Link href='/form'>
              <a>Login here using your VIT Email Address.</a>
            </Link>
          </li>
          <li>Fill the form with some basic details.</li>
          <li>
            Choose your preferred interview slot and department. The available
            dates are 27-08-2023 and 28-08-2023. Make sure you apply before
            26-08-2023 5:00 PM.
          </li>
          <li>
            The interview will be conducted on Google Meet. If you are selected,
            attend the interview in the given time slot. The WhatsApp group link
            for the selected applicants will be sent to your email or will be
            displayed on this recruitment portal if you are selected. Google
            Meet link will be sent in the WhatsApp group.
          </li>
        </ol>
      </section>
    </>
  );
}
