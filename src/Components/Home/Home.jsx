import React from "react"
import "./Home.css"
import hero from "../pic/vikrant1.jpg"
import resume from '../pic/vikrantresume.pdf'
import{BsGithub} from"react-icons/bs"
import { Typewriter } from "react-simple-typewriter"

const Home = () => {
  return (
    <>
      <section className='hero' id='home'>
        <div className='container f_flex top'>
          <div className='left top'>
            <h3>WELCOME TO MY Page</h3>
            <h1>
              Hi, I’m <span>Vikrant Prajapati</span>
            </h1>
            <h2>
              <span>
                <Typewriter words={[" FULL STACK WEB DEVELOPER.", " FULL STACK WEB DEVELOPER.","FULL STACK WEB DEVELOPER."]} loop cursor cursorStyle='|' typeSpeed={70} deleteSpeed={50} delaySpeed={100} />
              </span>
            </h2>

            <p>An aspiring Creative ,Talented ,Observing ,Quick learner,Team Player  Full -Stack Web Developer from Masai School.Who can work in interdisciplinary Teams having the skill set of web page application Using Frontend and backend. Looking for a job Opportunity in Product and technology  Organization that would help to showcase not only my skill set it helps me to grow my career. </p>

            <div className='hero_btn d_flex'>
              <div className='col_1'>
                <h4>FIND WITH ME</h4>
                <div className='button'>
                  <a href="https://github.com/stormyvikrant" className='btn_shadow1'>
                    <BsGithub/>
                  </a>
                  
                  <a href="https://www.linkedin.com/in/vikrant-prajapati-5888011ab/" className='btn_shadow1'>
                      <i className='fab fa-linkedin'></i>
                    </a>
                </div>
              </div>
               <div className='col_1'>
                <h4> GET  RESUME</h4>
                <a  href={resume} className='btn_shadow12'>
                  Get Resume
                </a>
                {/* <button className='btn_shadow'>
                  <img src={skill2} alt='' />
                </button>
                <button className='btn_shadow'>
                  <img src={skill3} alt='' />
                </button> */}
              </div> 
            </div>
          </div>
          <div className='right'>
            <div className='right_img'>
              <img src={hero} alt='' />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home