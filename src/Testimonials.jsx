import React from "react";

import Navbar from "./components/Navbar";

const Testimonials = () => {
  return (
    <main className="testimonials-container">
      <header className="testimonials-header">
        <nav>
          <Navbar />
        </nav>
        <h1>Testimonials</h1>
        <h3>Reviews from recent clients.</h3>
      </header>
      <section className="testimonials-main-section">
        <p>
          "Can't say I was anything less than impressed. Had Maddie come and
          give my beloved horse an MOT and service (from an equine physio
          standpoint that is). She did a full appraisal of his overall physical
          condition, quickly and efficiently identified any sore or tight spots,
          and got to work on him.

          The appointment was just over an hour long and Maddie patiently and
          eloquently talked me through what she was doing.

          2 days afterwards I saddled up and his trot was more extended,
          he wanted to just GO, he was so much more supple and bright eyed.
          After the appointment i received a full written report on his
          condition too which i've never had before.

          Absolutely fantastic service would HIGHLY recommend!"
        </p>
        <img
          className="side-image"
          alt="Horse receiving ECT by Maddie"
          src="https://imagestoragemvp.s3.eu-west-2.amazonaws.com/horse-convulsion-2.webp"
        ></img>
        <img
          className="side-image"
          alt="Two horses in a field eating hay"
          src="https://imagestoragemvp.s3.eu-west-2.amazonaws.com/horses-field-hay.webp"
        ></img>
        <p>
          Veterinary physiotherapy is a holistic approach combined with the
          anatomical knowledge of each animal to provide an alternative
          treatment for rehabilitation or maintenance. Animals hide their pain
          and discomfort but by using physiotherapy to assess this, issues can
          be addressed before they become problematic. Once locating the initial
          cause of pain, a veterinary physiotherapist will treat the issue and
          any secondary symptoms and devise a treatment and remedial exercise
          plan to further address all issues and meet the individual’s needs.
          The main aim is always to improve an animal’s health and wellbeing by
          reducing pain, limiting injury impact, promoting healing to accelerate
          the return to normal function and to improve joint range of motion.
        </p>
        <p>
          This science-based profession incorporates techniques such as
          myofascial release, massage, range of motion, stretching,
          electrotherapies to help animals for both short- and long-term
          recovery. MVP also works with animal athletes to reduce injury risk
          whilst enhancing performance to benefit competing or working animals.
          This approach with a sound knowledge base and clinical reasoning is
          always used in order to determine the most effective and successful
          solution.
        </p>
        <img
          className="side-image"
          alt="A big dog laying his chin on a person's knees"
          src="https://imagestoragemvp.s3.eu-west-2.amazonaws.com/dog-inbetween-knees.webp"
        ></img>
      </section>
    </main>
  );
};

export default Testimonials;
