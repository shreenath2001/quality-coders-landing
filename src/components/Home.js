import React from 'react';
import styled, { createGlobalStyle, keyframes } from 'styled-components';
import About from './About';
import Courses from './Courses';
import Testimonials from './Testimonials';
import Contact from './Contact';
import { Link } from 'react-router-dom';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slide = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
`;

const RunningText = styled.div`
  position: fixed;
  top: 64px;
  left: 0;
  right: 0;
  background: ${props => props.theme.primary};
  padding: 0.8rem 0;
  overflow: hidden;
  z-index: 999;
  box-shadow: 0 2px 8px ${props => props.theme.shadow};
  backdrop-filter: blur(8px);
  border-top: 1px solid ${props => props.theme.border};
  border-bottom: 1px solid ${props => props.theme.border};
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, 
      transparent 0%, 
      ${props => props.theme.border} 20%, 
      ${props => props.theme.border} 80%, 
      transparent 100%
    );
  }
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, 
      transparent 0%, 
      ${props => props.theme.border} 20%, 
      ${props => props.theme.border} 80%, 
      transparent 100%
    );
  }
`;

const RunningTextWrapper = styled.div`
  display: flex;
  animation: ${slide} 30s linear infinite;
  white-space: nowrap;
  width: max-content;
  padding: 0 1rem;
`;

const RunningTextItem = styled.span`
  display: inline-block;
  margin-right: 4rem;
  font-size: 1.1rem;
  font-weight: 500;
  color: #ffffff;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  opacity: 0.9;
  transition: all 0.3s ease;
  padding: 0.2rem 0;

  &:hover {
    opacity: 1;
    transform: translateY(-1px);
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  }
`;

const Hero = styled.div`
  background: linear-gradient(135deg, ${props => props.theme.primary} 0%, ${props => props.theme.secondary} 100%);
  color: ${props => props.theme.text};
  padding: 6rem 2rem;
  text-align: center;
  position: relative;
  overflow: hidden;
  margin-top: 0;
`;

const Title = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  font-weight: 800;
  animation: ${fadeIn} 1s ease-out;
  text-shadow: 0 2px 4px rgba(0,0,0,0.2);
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  opacity: 0.9;
  animation: ${fadeIn} 1s ease-out 0.3s backwards;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

const CTAButton = styled.button`
  background: ${props => props.theme.accent};
  color: ${props => props.theme.primary};
  border: none;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  font-weight: bold;
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.3s;
  animation: ${fadeIn} 1s ease-out 0.6s backwards;
  box-shadow: 0 4px 15px ${props => props.theme.shadow};
  
  &:hover {
    background: ${props => props.theme.accent};
    transform: translateY(-2px);
    box-shadow: 0 6px 20px ${props => props.theme.shadow};
  }
`;

const Section = styled.section`
  padding: 4rem 2rem;
  text-align: center;
  background: ${props => props.theme.background};
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: ${props => props.theme.primary};
  margin-bottom: 2rem;
  font-weight: 800;
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const FeatureCard = styled.div`
  background: ${props => props.theme.cardBg};
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 4px 15px ${props => props.theme.shadow};
  transition: transform 0.3s;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const FeatureTitle = styled.h3`
  color: ${props => props.theme.primary};
  margin-bottom: 1rem;
  font-size: 1.5rem;
`;

const FeatureDescription = styled.p`
  color: ${props => props.theme.text};
  line-height: 1.6;
`;

const GlobalStyle = createGlobalStyle`
  /* Custom Scrollbar Styling */
  ::-webkit-scrollbar {
    width: 10px;
    background: rgba(26, 35, 126, 0.05);
  }

  ::-webkit-scrollbar-track {
    background: rgba(26, 35, 126, 0.05);
    border-radius: 5px;
  }

  ::-webkit-scrollbar-thumb {
    background: rgba(26, 35, 126, 0.3);
    border-radius: 5px;
    border: 2px solid rgba(26, 35, 126, 0.05);
    transition: all 0.3s ease;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: rgba(26, 35, 126, 0.5);
  }

  /* For Firefox */
  * {
    scrollbar-width: thin;
    scrollbar-color: rgba(26, 35, 126, 0.3) rgba(26, 35, 126, 0.05);
  }
`;

const NavLink = styled(Link)`
  color: ${props => props.theme.text};
  text-decoration: none;
  font-weight: 500;
  &:hover {
    color: ${props => props.theme.accent};
  }
`;

const ProfileLink = styled(Link)`
  color: ${props => props.theme.text};
  text-decoration: none;
  font-weight: 500;
  &:hover {
    color: ${props => props.theme.accent};
  }
`;

const LogoutButton = styled.button`
  background: none;
  border: none;
  color: ${props => props.theme.text};
  cursor: pointer;
  font-weight: 500;
  &:hover {
    color: ${props => props.theme.accent};
  }
`;

const Home = () => {
  const scrollToCourses = () => {
    const element = document.getElementById('courses');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const runningTextItems = [
    "🚀 Launch Your Tech Career with Industry-Ready Skills",
    "💼 Get Placed in Top Companies with Our Placement Training",
    "🎯 Master Real-World Projects with Expert Mentorship",
    "📈 Build Production-Ready Applications from Day One",
    "🌟 Join 1000+ Successfully Placed Students",
    "💡 Learn from Industry Experts with Years of Experience"
  ];

  // Create a duplicated array for seamless looping
  const duplicatedItems = [...runningTextItems, ...runningTextItems];

  return (
    <>
      <GlobalStyle />
      <RunningText>
        <RunningTextWrapper>
          {duplicatedItems.map((text, index) => (
            <RunningTextItem key={index}>{text}</RunningTextItem>
          ))}
        </RunningTextWrapper>
      </RunningText>

      <Hero>
        <Title>Quality Coders</Title>
        <Subtitle>
          Your Gateway to Tech Excellence: Expert-Led Training in Python, Java, Full Stack, Gen AI, DSA, Aptitude & Reasoning, and Pre-Placement Training.
        </Subtitle>
        <CTAButton onClick={scrollToCourses}>View Courses</CTAButton>
      </Hero>

      <Section>
        <SectionTitle>Why Choose Quality Coders?</SectionTitle>
        <FeatureGrid>
          <FeatureCard>
            <FeatureTitle>Expert Instructors</FeatureTitle>
            <FeatureDescription>
              Learn from industry professionals with years of real-world experience.
            </FeatureDescription>
          </FeatureCard>
          <FeatureCard>
            <FeatureTitle>Project-Based Learning</FeatureTitle>
            <FeatureDescription>
              Build real projects that showcase your skills to potential employers.
            </FeatureDescription>
          </FeatureCard>
          <FeatureCard>
            <FeatureTitle>Placement Support</FeatureTitle>
            <FeatureDescription>
              Get dedicated placement assistance and interview preparation.
            </FeatureDescription>
          </FeatureCard>
          <FeatureCard>
            <FeatureTitle>Flexible Learning</FeatureTitle>
            <FeatureDescription>
              Study at your own pace with 24/7 access to course materials.
            </FeatureDescription>
          </FeatureCard>
        </FeatureGrid>
      </Section>

      <div id="about">
        <About />
      </div>

      <div id="courses">
        <Courses />
      </div>

      <div id="testimonials">
        <Testimonials />
      </div>

      <div id="contact">
        <Contact />
      </div>
    </>
  );
};

export default Home; 