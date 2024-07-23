import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import React from "react";


function AMHome(): React.ReactElement {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.35,
        ease: [0.42, 0, 0.58, 1],
      }}
    >
      <section id="mobile-home">
        <div className="background-container-mobile" id="spice1">
          <div id="welcome-text-mobile">
            <h1 id="title-mobile">Asherah</h1>
            <h2 id="subtitle-mobile">Mediterranean Restaurant</h2>
          </div>
        </div>
        <div id="contact-hours-container">
          <span id="contact-mobile" className="welcome-span-mobile">
            <h2 className="bottom-title">Contact</h2>
            <span id="contact-span">
              <p>47 Green Lanes</p>
              <p>Unit 2, Willow House</p>
              <p>Haringey, N16 9BU</p>
              <p className="break">&nbsp;</p>
              <p>+ 44 ( 0) 207 603 32 41 </p>
              <a
                className="bottom-link"
                id="email-link"
                href="mailto:ash.asher.ashah@gmail.com"
              >
                <p id="email-text">ash.asher.ashah@gmail.com</p>
              </a>
              <p className="break">&nbsp;</p>
              <a className="bottom-link" id="reservation-make">
                {" "}
                <Link to="/reservations">
                  <p className="underline">
                    <em>make a reservation</em>
                  </p>
                </Link>
              </a>
            </span>
          </span>
          <span id="hours-mobile" className="welcome-span-mobile">
            <h2 className="bottom-title">Opening Hours</h2>
            <p>Tues-Sat</p>
            <p className="break">&nbsp;</p>
            <p className="lunch-dinner">
              <em>Lunch:</em>
              12:00—3:00pm
            </p>
            <p className="lunch-dinner">
              <em>Dinner:</em>
              6:00pm—10:00pm
            </p>
            <p className="break">&nbsp;</p>
            <p className="lunch-dinner">
              <span id="sunday">Sunday:</span> 12:00—6:00pm
            </p>
            <p className="break">&nbsp;</p>
            <p className="lunch-dinner">
              Monday:
              <em> Closed</em>
            </p>
          </span>
        </div>
        <div className="background-container-mobile" id="spice2"></div>
      </section>
    </motion.div>
  );
}

export default AMHome;
