import { Layout } from "antd";
import { List, Card } from "antd";
const { Header, Content, Footer } = Layout;
import Login from "./Login";
import { useContext } from "react";
import AppContext from "../context/state";
export default function HomePage() {
  const value = useContext(AppContext);
  const handleLogin = (user) => {
    if(user){
    value.setIsLoggedIn(true);
    value.setFormState(1);
    value.setUser(user);
    }
  }
  const departments = 
    [{name : "Technical", about : "Responsible for vulnaribility project tools and techniques, Solving CTFS, Writing blogs about latest vulnerabilities, etc."},
    {name :"Development" , about : "Responsible for developing and maintaining the website, maintaining the database, etc."},
    {name : "Design"  ,about : "Responsible for designing infographics etc."},
    {name : "Operations" , about : "Responsible for maintaining social media , managing the chapter etc."
}];
  return (
    <Layout>
      <Header style={{height:"6rem",display: "flex" , justifyContent : "space-between"}}>
        <div style={{fontSize : "2rem" , marginTop:"0.6rem"}}>OWASP Recruitments</div>
        {
          value.state.user ? <div style={{fontSize:"1.5rem" , wordSpacing : "0.6rem" , marginTop : "0.6rem"}}>Welcome {value.state.user.email}</div> : <Login handleLogin={handleLogin}></Login>
        }
      </Header>
      <Content>
        <br></br>
        <h1>
          Attention all techies, The OWASP VIT Student Chapter is recruiting
          members from the 2nd and 3rd year now for 2022-2023!!!
        </h1>
        <br></br>
        <div>
          The OWASP VIT Student Chapter was formed in 2016 and ever since, its
          only aim has been to spread awareness about cybersecurity and teach
          people how to deploy countermeasures to deal with cyberattacks through
          our various blog posts, trending news, infographic posts, weekly CTFs
          that give a practical feel and regular events, amongst which the most
          notable are the Tetraflip 2020 hackathon, TOVC 1.0, and the WASPCON
          cybersecurity awareness workshop.
        </div>
        <br></br>
        <div>
          Get to be a part of the biggest and VITs only Cyber Security Student
          Chapter.The recruitment positions are open under the following
          departments:
        </div>
        <br></br>
        <List
          grid={{ gutter: 16, column: 4 }}
          dataSource={departments}
          renderItem={(item) => (
            <List.Item>
              <Card 
              style={{
                width: 300,
              }}
              title={item.name}>{item.about}</Card>
            </List.Item>
          )}
        />
        ,
      </Content>
      <div>
      Interested students can register themselves as mentioned in the following procedure:
Register with your details and interested department to work under, in the following link:
*Registration link*
And join our discord handle for further updates:
*Discord link*
Registrations close on : *closing date and time*

      </div>
      <Footer>
        <h1>Footer</h1>
      </Footer>
    </Layout>
  );
}
