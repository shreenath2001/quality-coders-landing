import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  max-width: 900px;
  margin: 3rem auto;
  padding: 2.5rem 2rem;
  background: #fff;
  border-radius: 20px;
  box-shadow: 0 4px 24px rgba(26,35,126,0.10);
`;
const Title = styled.h2`
  color: #1a237e;
  margin-bottom: 1.5rem;
  font-size: 2.2rem;
  font-weight: 800;
`;
const Text = styled.p`
  font-size: 1.18rem;
  color: #333;
  line-height: 1.7;
`;

const About = () => (
  <Section>
    <Title>About Quality Coders</Title>
    <Text>
      Quality Coders is a premier coaching institute dedicated to empowering students and professionals with top-notch coding skills. Our mission is to make coding accessible, engaging, and career-oriented. With a focus on hands-on learning, real-world projects, and expert mentorship, we help you excel in Python, Java, Full Stack Web Development, Gen AI, DSA, Aptitude & Reasoning, and Pre-Placement Training. Join us to unlock your potential and become a Quality Coder!
    </Text>
  </Section>
);

export default About; 