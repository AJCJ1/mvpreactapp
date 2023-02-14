import Navbar from "./components/Navbar";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-main">
      <header>
        <nav>
          <Navbar />
        </nav>
        <section className="homepage-banner-container">
          <video
            alt="A brown Horse looking around"
            className="homepage-banner-video"
            autoPlay="autoplay"
            loop="loop"
            muted="muted"
            src="https://imagestoragemvp.s3.eu-west-2.amazonaws.com/horseLooking.mp4"
          ></video>
          <div className="home-banner-text">
            <h1>Maddie Veterinary Physiotherapy</h1>
            <h2>
              Specialist Equine and Canine Rehabilitation from Veterinary
              Physiotherapy Expert.
            </h2>
          </div>
        </section>
      </header>
      <main>
        <section className="physio-banner">
          <div className="grey-backer-right">
            <img
              alt="Rider patting her horse"
              src="https://imagestoragemvp.s3.eu-west-2.amazonaws.com/horse-pat.jpeg"
            ></img>
          </div>
          <h2>What is Veterinary Physio?</h2>
          <Link to={"/about/physio"} className="button-large">
            <span>Learn More</span>
          </Link>
          <div className="blue-backer-left">
            <p>
              Veterinary Physiotherapy is the assessment and treatment of
              animals to improve function and performance of the body.Issues
              that can be targeted through physiotherapy include musculoskeletal
              conditions and injuries, osteoarthritis, and other health related
              conditions.
            </p>
          </div>
        </section>
        <section className="home-how-it-works">
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
                Animals often hide their pain and discomfort. By using
                physiotherapy, these issues can be addressed before they become
                problematic.
              </p>
            </li>
          </ul>
          <img
            alt="A horse receiving ECT therapy"
            src="https://imagestoragemvp.s3.eu-west-2.amazonaws.com/horse-convulsion-therapy.webp"
          ></img>
          <img
            alt="A poorly dog in his bed receiving ECT Therapy"
            src="https://imagestoragemvp.s3.eu-west-2.amazonaws.com/Dog-bed.webp"
          ></img>
          <ul className="list">
            <li className="list-item">
              <p>
                On finding the cause of pain, a veterinary physiotherapist will
                treat it and any secondary symptoms.
              </p>
            </li>
            <li className="list-item">
              <p>
                A post treatment and remedial exercise plan will be created, to
                further address all issues and ensure a proper recovery.
              </p>
            </li>
            <li className="list-item">
              <p>
                Our objective is to improve an animals health and well-being by
                reducing pain, limiting injury impact, and improve joint range
                of motion.
              </p>
            </li>
          </ul>
        </section>

        <article className="recent-blog-posts">
          <h2>Check out a Blog Post</h2>
          <Link to={"/blog/1"} className="blog-post">
            <img
              alt="A horse walking over poles"
              src="https://imagestoragemvp.s3.eu-west-2.amazonaws.com/horse-poles.webp"
            />
            <header>
              <h4>Perfect Pole Work - A Fun Exercise for You and Your Horse</h4>
              <p>Jan 26, 2022</p>
            </header>
            <p>
              Cavaletti poles are a useful training tool due to their role in
              making joints more supple and improving the individuals stamina
              and...
            </p>
          </Link>
        </article>

        <figure className="lightbox-container">
          <div className="lightbox">
            <img
              alt="Dog sat on a sofa"
              src="https://imagestoragemvp.s3.eu-west-2.amazonaws.com/dog-sofa.jpeg"
            />
            <img
              alt="White Horse riding in an arena"
              src="https://imagestoragemvp.s3.eu-west-2.amazonaws.com/horse-white-arena.jpeg"
            />
            <img
              alt="A grumpy looking cat sitting"
              src="https://imagestoragemvp.s3.eu-west-2.amazonaws.com/cat-sitting.webp"
            />
            <img
              alt="A dog sat on a sofa"
              src="https://imagestoragemvp.s3.eu-west-2.amazonaws.com/dog-sofa-2.jpeg"
            />
            <img
              alt="Many dogs sat on a sofa"
              src="https://imagestoragemvp.s3.eu-west-2.amazonaws.com/dogs-sofa.webp"
            />
            <img
              alt="Maddie holding a guinea pig"
              src="https://imagestoragemvp.s3.eu-west-2.amazonaws.com/guinea-pig-maddie.webp"
            />
            <img
              alt="A horse riding in an arena"
              src="https://imagestoragemvp.s3.eu-west-2.amazonaws.com/horse-arena-sand.jpeg"
            />
          </div>
        </figure>
      </main>
    </div>
  );
};

export default Home;
