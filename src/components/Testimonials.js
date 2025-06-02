import React from 'react';
import styled from 'styled-components';

const testimonials = [
  {
    name: 'Amit Sharma',
    quote: 'Quality Coders helped me crack my dream job! The DSA and Pre-Placement courses are top-notch.',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    name: 'Priya Singh',
    quote: 'The hands-on projects and expert mentors made learning Python and Full Stack so easy and fun.',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    name: 'Rahul Verma',
    quote: 'Gen AI course was a game changer for my career. Highly recommend Quality Coders!',
    avatar: 'https://randomuser.me/api/portraits/men/65.jpg',
  },
];

const Section = styled.section`
  max-width: 900px;
  margin: 3rem auto;
  padding: 2rem 1rem;
`;
const Title = styled.h2`
  color: #1a237e;
  margin-bottom: 2rem;
  text-align: center;
  font-size: 2.2rem;
  font-weight: 800;
`;
const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
`;
const Card = styled.div`
  background: #fff;
  border-radius: 20px;
  box-shadow: 0 4px 24px rgba(26,35,126,0.10);
  padding: 2rem 1.5rem;
  max-width: 320px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.2s, box-shadow 0.2s;
  &:hover {
    transform: translateY(-6px) scale(1.03);
    box-shadow: 0 8px 32px rgba(26,35,126,0.18);
  }
`;
const Avatar = styled.img`
  width: 72px;
  height: 72px;
  border-radius: 50%;
  margin-bottom: 1rem;
  border: 3px solid #ffb300;
  box-shadow: 0 2px 8px rgba(26,35,126,0.10);
`;
const Name = styled.h4`
  margin: 0.5rem 0 0.25rem 0;
  color: #1a237e;
  font-size: 1.1rem;
  font-weight: 700;
`;
const Quote = styled.p`
  color: #444;
  font-style: italic;
  text-align: center;
  font-size: 1.05rem;
`;

const Testimonials = () => (
  <Section>
    <Title>What Our Students Say</Title>
    <Grid>
      {testimonials.map((t, idx) => (
        <Card key={idx}>
          <Avatar src={t.avatar} alt={t.name} />
          <Name>{t.name}</Name>
          <Quote>"{t.quote}"</Quote>
        </Card>
      ))}
    </Grid>
  </Section>
);

export default Testimonials; 