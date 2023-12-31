import React, {useState} from 'react';
import { useSpring, animated } from 'react-spring';
import './About.css';
import { AiFillPushpin } from "react-icons/ai";

const About = () => {

  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 800 },
  });


  return (
    <animated.div style={fadeIn} className="about-container">
      <section className="about-section">
        <h3><AiFillPushpin /> Theory of Impact</h3>
        <p>
          "If we deliver Nutrient-Dense Vegetable Bundles tailored to combat specific deficiencies and implement flexible payment solutions with integrated mobile technology, then small-scale farmers can improve their dietary intake and afford these nutrient-rich vegetables without financial strain. This leads to a reduction in malnutrition prevalence and improved economic stability in their communities."     
          Our approach involves thorough research and collaboration with nutritionists to identify prevalent deficiencies in local communities. By tailoring our vegetable bundles to address these specific nutritional gaps, we aim to provide targeted solutions that have a lasting impact on the health and well-being of small-scale farmers.
          Additionally, our commitment to implementing flexible payment solutions, coupled with the integration of cutting-edge mobile technology, ensures accessibility for farmers, enabling them to afford nutrient-dense vegetables without imposing financial burdens.
        </p>
      </section>

      <section className="about-section">
        <h3><AiFillPushpin /> Behavior Map</h3>
        <p>
          Describes the actions of farmers in the process.
          The behavior map serves as a detailed blueprint of the actions undertaken by farmers throughout the entire process — from the initial introduction of our nutrient-dense vegetable bundles to the ongoing integration of these products into their daily lives. By closely observing and understanding farmer behavior, we can continually refine our approach to better align with their needs and challenges.
          Through continuous engagement and feedback loops, we adapt our strategies to ensure that the behavior map remains a dynamic tool for informing our interventions and creating meaningful, sustainable changes in farmer practices.
        </p>
      </section>

      <section className="about-section">
        <h3><AiFillPushpin /> Drivers</h3>
        <p>
          Describes the actions of the organization in response to farmer behavior.
          The drivers section outlines the strategic actions taken by our organization in direct response to the observed behaviors of the farmers we serve. Whether it involves introducing new initiatives to address specific challenges or refining existing programs based on feedback, our organizational actions are dynamic and tailored to create positive outcomes for both farmers and their communities.
          We believe in the importance of proactive engagement, where our organization serves as a catalyst for positive change by responding swiftly and effectively to the evolving needs and behaviors of the farming communities.
        </p>
      </section>

      <section className="about-section">
        <h3><AiFillPushpin /> Model</h3>
        <p>
          Lists the headlines describing how the organization operates.
          Our operational model is characterized by a holistic and community-driven approach. We collaborate with local farmers, health professionals, and technology experts to create a sustainable ecosystem that addresses the multifaceted challenges faced by rural communities in Tanzania.
          Leveraging cutting-edge technology for payment solutions and nutritional assessments, our model ensures efficiency, adaptability, and the delivery of impactful interventions. By prioritizing collaboration and innovation, HERVeg.05 aims to set a standard for effective and sustainable social enterprise operations.
        </p>
      </section>
    </animated.div>
  );
};

export default About;
