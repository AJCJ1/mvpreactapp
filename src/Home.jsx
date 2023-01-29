import React from 'react'
import Navbar from './components/Navbar'
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <div className="home-main">
      <Navbar />
        <div className="homepage-banner">
          <video className="homepage-banner-video" autoPlay="autoplay" loop="loop" muted="muted" src="/assets/horseLooking-0207b2f773763bbf0849807622196d80ad8a56f8c7062bb78527404631a70a16.mp4"></video>
          <div className="home-banner-text">
            <h2>Maddie Veterinary Physiotherapy</h2>
            <h3>Specialist Equine and Canine Rehabilitation from Veterinary Physiotherapy Expert.</h3>
          </div>
        </div>
        <div className="physio-banner">
          <div className="grey-backer-right">
            <img alt="Image of a rider patting her horse" src="https://imagestoragemvp.s3.eu-west-2.amazonaws.com/horse-poles.webp"></img>
          </div>
          <h2>What is Veterinary Physio?</h2>
          <Link to={"/about/physio"} className="button-large">
            <p>Learn More</p>
          </Link>
          <div className="blue-backer-left">
            <p>
              Veterinary Physiotherapy is the assessment and treatment of animals
              to improve function and performance of the body.Issues that can be targeted
              through physiotherapy include musculoskeletal conditions and injuries,
              osteoarthritis, and other health related conditions.
            </p>
          </div>
        </div>
        <div className="home-how-it-works">
          <h2>How Does it Work?</h2>
          <ul className="list">
            <li className="list-item">
              <p>
                Veterinary physiotherapy is a holistic approach to animal care,
                using the animals anatomical makeup to help them recover.
              </p>
            </li>
            <li className="list-item">
              <p>
                Its a modern and approved method of assisting injury
                rehabilitation, and helping to maintain your animal.
              </p>
            </li>
            <li className="list-item">
              <p>
                Animals often hide their pain and discomfort.
                By using physiotherapy, these issues can be addressed
                before they become problematic.
              </p>
            </li>
          </ul>
        <img alt="Image of a horse receiving therapy" src="/assets/horse-convulsion-therapy-fcab295d9345604083858b55ebb7f229441788e8704dfda57c5c7f3501abf0d1.webp"></img>
        <img alt="Image of a poorly dog in his bed" src="/assets/dog-bed-0e54610141c4fabc8df26f1db2db601d7904933a7ede6d695de4f6d237deb731.webp"></img>
          <ul className="list">
            <li className="list-item">
              <p>
                On finding the cause of pain, a veterinary physiotherapist
                will treat it and any secondary symptoms.
              </p>
            </li>
            <li className="list-item">
              <p>
                A post treatment and remedial exercise plan will be created,
                to further address all issues and ensure a proper recovery.
              </p>
            </li>
            <li className="list-item">
              <p>
                Our objective is to improve an animals health and well-being by
                reducing pain, limiting injury impact, and improve joint
                range of motion.
              </p>
            </li>
          </ul>
        </div>

        <div className="recent-blog-posts">
          <h2>Most Recent Blog</h2>
          <Link to={'/blog'} className="blog-post">
            <img alt="image of a horse walking over poles" src="/assets/horse-poles-fe57ecd7d1d61211b9140f54f58324a4f2ace74dc8b52d46001eb9c7c60fb36c.webp"/>
            <h4>Perfect Pole Work - A Fun Exercise for You and Your Horse</h4>
            <p>Jan 26, 2022</p>
            <p>
              Cavaletti poles are a useful training tool due to their role in making joints
              more supple and improving the individuals stamina and...
            </p>
          </Link>
        </div>

        <div className="lightbox-container">
          <div className="lightbox">
            <img src="/assets/dog-sofa-6b6a3a5d929187ed808276ac0266d86dc7c6b8b92d6ac1b12b67297ccae0425a.jpg"/>
            <img src="/assets/horse-white-arena-e1cc80c02d07e3973ac12a4d7bb3599c8d195e11fb8cfa73ffeaf917e4ab3def.jpg"/>
            <img src="/assets/cat-sitting-de4f03d35501331c1d7855f3439881086903dee80c4b288cd3a8e73eef9839a1.webp"/>
            <img src="/assets/dog-sofa-2-12f4dfd7a87e98f22a2468393beff0d4fe2e7ca14b2acf2260342926d7046027.jpg"/>
            <img src="/assets/dogs-sofa-6c9915a61a7b4d49e2792cfb6d8c2f2455cffa53e3de3cbbe40dac0db29a5b2f.webp"/>
            <img src="/assets/guinea-pig-maddie-67dc486513e5dae919dd2b509a7a0c0e8f99cb679f04467a2723d0c31ec8e8af.webp"/>
            <img src="/assets/horse-arena-sand-c897e07aec453dd879fcb58e020a4adc2bf8cf1b2b303e94c26891cb1ebca59e.jpg"/>
          </div>
        </div>
    </div>
  )
}

export default Home
