import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">
      <div className='section-div'>
      <section className="big-idea">
        <h2>Our Big Idea</h2>
        <p>
          At HERVeg.05, we are driven by a profound commitment to transform the lives of rural farmers in Tanzania.
          Our big idea revolves around the creation and distribution of nutrient-dense vegetable bundles, with a focus
          on addressing three crucial aspects: Nutrition, Income, and Empowerment.
        </p>
      </section>

      <section className="mission">
        <h2>Our Mission</h2>
        <p>
          Our mission is clear: to enhance the overall health and livelihoods of individuals by providing them with
          access to these empowering vegetable bundles. Through sustainable agricultural practices and community
          engagement, we aim to make a lasting impact on the well-being of the people we serve.
        </p>
      </section>

      <section className="outcome">
        <h2>Expected Outcome</h2>
        <p>
          By fostering empowerment, improving health, and contributing to economic growth, we envision a brighter and
          healthier future for the communities we work with. The ripple effects of our efforts extend beyond the
          vegetable bundles themselves, creating a positive cycle of progress and prosperity.
        </p>
      </section>
      </div>

      <Link to="/about"><button className="read-more">Read More</button></Link>
    </div>
  );
};

export default Home;
