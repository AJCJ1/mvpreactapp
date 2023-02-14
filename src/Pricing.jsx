import React from "react";
import Navbar from "./components/Navbar";

const Pricing = () => {
  return (
    <main className="pricing-container">
    <header className="pricing-header">
      <nav>
        <Navbar />
      </nav>
      <div class="pricing-block">
        <h1>Price List</h1>
        <p>Veterinary Physiotherapy can be applied to all animals so if
          you have a pet that you think would benefit from physiotherapy,
          but is not listed below, please feel free to enquire about
          prices and availability.
        </p>
        <img alt="A large dog sat in front of a pond"
             src="https://imagestoragemvp.s3.eu-west-2.amazonaws.com/big-dog.webp">
        </img>
      </div>
    </header>
    <section className="pricing-main-section">
      <h2>Canine</h2>
      <div className="pricing-animal-container">
        <div class="pricing-item-container">
          <h3>Initial Consultation</h3>
          <p>
            The initial consultation with Maddie following a Veterinary referral.
            This consultation will include taking a full history, a thorough
            assessment of the animals posture, gait analysis and palpation
            assessment. Treatment will target the full body, focusing on areas
            of weakness/discomfort and exercises can be prescribed to further
            enhance your pet's recovery.
          </p>
          <h4>£50</h4>
        </div>
        <div class="pricing-item-container">
          <h3>Follow Up Consultation</h3>
          <p>
            These sessions will follow on from your initial consultation.
            Your pet's progress will be monitored and treatment will be
            adjusted accordingly.
          </p>
          <p>
            I will use a range of techniques including manual therapies,
            electrotherapies, range of motion, remedial exercises and other
            modalities to promote the healing and strengthening of each individual.
          </p>
          <h4>£45</h4>
        </div>
      </div>
      <h2>Equine</h2>
      <div className="pricing-animal-container">
        <div class="pricing-item-container">
          <h3>Initial Consultation</h3>
          <p>
            The initial consultation with Maddie following a Veterinary referral.
            This consultation will include taking a full history, a thorough
            assessment of the animals posture, gait analysis and palpation
            assessment. Treatment will target the full body, focusing on areas
            of weakness/discomfort and exercises can be prescribed to further
            enhance your pet's recovery.
          </p>
          <h4>£50</h4>
        </div>
        <div class="pricing-item-container">
          <h3>Follow Up Consultation</h3>
          <p>
            These sessions will follow on from your initial consultation.
            Your pet's progress will be monitored and treatment will be
            adjusted accordingly.
          </p>
          <p>
            I will use a range of techniques including manual therapies,
            electrotherapies, range of motion, remedial exercises and other
            modalities to promote the healing and strengthening of each individual.
          </p>
          <h4>£45</h4>
        </div>
      </div>
    </section>
  </main>
  );
};

export default Pricing;
