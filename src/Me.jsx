import React from "react";
import Navbar from "./components/Navbar";

const Me = () => {
  return (
    <main className="about-me-container">
      <header>
        <Navbar />
        <h2>More About Me</h2>
      </header>
      <section className="physio-about-main-section">
        <div class="about-main-block">
          <h3>Maddie Wigley</h3>
          <p>
            My name is Maddie Wigley and I graduated from Harper Adams
            University in 2022. I studied BSc Veterinary Physiotherapy and
            completed a degree of 4 years including a placement year within the
            equine and canine industries. I have always loved animals,
            especially dogs, but I have recently caught the horse bug which
            motivated me to gain experience with horses, particularly those
            competing but also with racehorses to improve my practical skills.
          </p>
          <img
            className="side-image"
            alt="A selfie of maddie with a brown horse"
            src="https://imagestoragemvp.s3.eu-west-2.amazonaws.com/maddie-wigley-selfie.webp"
          ></img>
        </div>
        <div class="about-main-block">
          <img
            className="side-image"
            alt="A small puppy at a vet"
            src="https://imagestoragemvp.s3.eu-west-2.amazonaws.com/cute-puppy-vet.jpeg"
          ></img>
          <h3>What I Do</h3>
          <p>
            Veterinary physiotherapy is a holistic approach combined with the
            anatomical knowledge of each animal to provide an alternative
            treatment for rehabilitation or maintenance. Animals hide their pain
            and discomfort but by using physiotherapy to assess this, issues can
            be addressed before they become problematic. Once locating the
            initial cause of pain, a veterinary physiotherapist will treat the
            issue and any secondary symptoms and devise a treatment and remedial
            exercise plan to further address all issues and meet the
            individual’s needs. The main aim is always to improve an animal’s
            health and wellbeing by reducing pain, limiting injury impact,
            promoting healing to accelerate the return to normal function and to
            improve joint range of motion.
          </p>
        </div>
        <div class="about-main-block">
          <h3>Experience</h3>
          <p>
            This science-based profession incorporates techniques such as
            myofascial release, massage, range of motion, stretching,
            electrotherapies to help animals for both short- and long-term
            recovery. MVP also works with animal athletes to reduce injury risk
            whilst enhancing performance to benefit competing or working
            animals. This approach with a sound knowledge base and clinical
            reasoning is always used in order to determine the most effective
            and successful solution.
          </p>
          <img
            className="side-image"
            alt="Maddie holding a small white dog with big paws"
            src="https://imagestoragemvp.s3.eu-west-2.amazonaws.com/maddie-wigley-with-pup.webp"
          ></img>
        </div>
      </section>
    </main>
  );
};

export default Me;
