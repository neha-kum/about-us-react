import React from 'react'
import Logo from '../assets/hero-img.png'
import '../index.css'
import IMG1 from "../assets/details-1.png"
import IMG2 from "../assets/details-2.png"
import IMG3 from "../assets/details-3.png"
import { motion, useInView } from "framer-motion";
import { textVariant } from '../framer'
import { useRef } from 'react'






const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  return (
    <about>
      <section id="hero" className="d-flex align-items-center">

        <motion.div className="container " variants={textVariant}
          initial="hidden"
          whileInView="show">
          <div className="about">
            <div className="about" data-aos="fade-up">
              <div>
                <h1 className="tracking-wide">About Us</h1>
                <h2>Your signature is all it takes to save a life.</h2>
                <h3 className="font-bold text-2xl">WE CAN WE WILL.</h3>
              </div>
            </div>
            <div className="" data-aos="fade-up">
              <img src={Logo} className="img-fluid" alt="" />
            </div>
          </div>
        </motion.div>

      </section>


      <main id="main">


        <section id="features" className="features px-20">
          <div className="container">

            <div className="section-title transform translate-y-full opacity-0 animate-slide-up">
              <h2 className="font-bold text-6xl">The 3 Pillars of Yi</h2>
              <p>Yi's mission to strengthen the future of India gives a stage and voice to the country's next generation of changemakers. It aims to instill in young minds the power of leadership, enhance the youth entrepreneurial ecosystem and create youth-led changes to build the nation.</p>
              <p>The robust framework of Yi and its vision is built on three significant pillars:</p>
            </div>


          </div>
        </section>


        <section id="details" className="details px-20">
          <div className="container" >

            <div className="row content flex flex-row justify-between items-start" >
              <div ref={ref}>
                <div style={{
                  transform: isInView ? "none" : "translateX(-200px)",
                  opacity: isInView ? 1 : 0,
                  transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                }} className="img-box" data-aos="fade-right">
                  <img src={IMG1} className="img-fluid" alt="" style={{ height: 400, width: 500 }} />
                </div>
              </div>

              <div className="w-4/5" data-aos="fade-up">
                <motion.div
                  variants={textVariant}
                  initial="hidden"
                  whileInView="show"
                >
                  <h3 className="mb-4">Youth Leadership</h3>
                  <p className="italic leading-relaxed tracking-wide">
                    The first pillar of Yi believes that leaders aren't born; they are made. It calls upon the students of India to recognize the leader in them through various leadership skill development programs, personal development programs and nation-building activities.
                  </p>
                </motion.div>
              </div>
            </div>

            <div class="row content flex flex-row-reverse justify-between items-start" >
              <div class="col-md-8 pt-5 order-2 order-md-1 w-2/3" data-aos="fade-up">
                <motion.div
                  variants={textVariant}
                  initial="hidden"
                  whileInView="show"
                >
                  <h3 className="mb-4">Nation Building</h3>
                  <p className="italic leading-relaxed tracking-wide">
                    The youth carry the baton of building an India that is self-sufficient, informed and on the path to development. The second pillar of Yi aims to give wings to the transformative power of India's youth through various verticals that delve into present-day issues.
                  </p>
                </motion.div>
              </div >
              <div ref={ref}>
                <div style={{
                  transform: isInView ? "none" : "translateX(+200px)",
                  opacity: isInView ? 1 : 0,
                  transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                }} classNam="img-box" data-aos="fade-left">
                  <img src={IMG2} class="img-fluid" alt="" style={{ height: 400, width: 400 }} />
                </div>
              </div>
            </div>

            <div class="row content flex flex-row justify-between items-center" >
              <div ref={ref}>
                <div style={{
                  transform: isInView ? "none" : "translateX(-200px)",
                  opacity: isInView ? 1 : 0,
                  transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                }} className="img-box" data-aos="fade-right">
                  <img src={IMG3} class="img-fluid" alt="" />

                </div>
              </div>

              <div className="w-4/5" data-aos="fade-up">

                <motion.div
                   className="container"
                   variants={textVariant}
                  initial="hidden"
                  whileInView="show"
                >

                  <h3 className="mb-4">Thought Leadership</h3>
                  <p className="italic leading-relaxed tracking-wide">The third pillar of Yi aims to nudge the innate leader in today's youth to give rise to a better India of tomorrow. It informs, engages and empowers the youth of India through a contributive movement of constructive action, collaborative reasoning and collective voice.</p>

                </motion.div>
              </div>
            </div>



          </div>
        </section>
      </main>

      

    </about>
  )
}

export default About