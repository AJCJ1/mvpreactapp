import React from "react";

import Navbar from "./components/Navbar";

const Physio = () => {
  return (
    <div className="physio-about">
      <Navbar />
      <h1>What is Veterinary Physiotherapy?</h1>
      <h3>What does a veterinary physio do? A detailed overview.</h3>
      <p>
        Veterinary Physiotherapy is the assessment and treatment of animals to
        improve function and performance of the body. Issues that can be
        targeted through physiotherapy include musculoskeletal conditions and
        injuries, osteoarthritis, and other health related conditions. MVP works
        alongside Vets to accurately find issues/weaknesses that your pet has to
        design the most effective treatment plan that will return them to normal
        function.
      </p>
      <img
        className="side-image"
        alt="Rider on horseback looking away"
        src="https://imagestoragemvp.s3.eu-west-2.amazonaws.com/SJ-pony.jpeg"
      ></img>
      <img
        className="side-image"
        alt="back of a saddle"
        src="https://imagestoragemvp.s3.eu-west-2.amazonaws.com/saddle-back.jpeg"
      ></img>
      <p>
        Veterinary physiotherapy is a holistic approach combined with the
        anatomical knowledge of each animal to provide an alternative treatment
        for rehabilitation or maintenance. Animals hide their pain and
        discomfort but by using physiotherapy to assess this, issues can be
        addressed before they become problematic. Once locating the initial
        cause of pain, a veterinary physiotherapist will treat the issue and any
        secondary symptoms and devise a treatment and remedial exercise plan to
        further address all issues and meet the individual’s needs. The main aim
        is always to improve an animal’s health and wellbeing by reducing pain,
        limiting injury impact, promoting healing to accelerate the return to
        normal function and to improve joint range of motion.
      </p>
      <p>
        This science-based profession incorporates techniques such as myofascial
        release, massage, range of motion, stretching, electrotherapies to help
        animals for both short- and long-term recovery. MVP also works with
        animal athletes to reduce injury risk whilst enhancing performance to
        benefit competing or working animals. This approach with a sound
        knowledge base and clinical reasoning is always used in order to
        determine the most effective and successful solution.
      </p>
      <img
        className="side-image"
        alt="Rider behind a jump"
        src="https://imagestoragemvp.s3.eu-west-2.amazonaws.com/arena-riding.jpeg"
      ></img>
    </div>
  );
};

export default Physio;
