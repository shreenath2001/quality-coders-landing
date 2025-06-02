import React, { useState } from 'react';
import styled from 'styled-components';

const Section = styled.section`
  max-width: 600px;
  margin: 3rem auto;
  padding: 2.5rem 2rem;
  background: #fff;
  border-radius: 20px;
  box-shadow: 0 4px 24px rgba(26,35,126,0.10);
`;
const Title = styled.h2`
  color: #1a237e;
  margin-bottom: 2rem;
  text-align: center;
  font-size: 2rem;
  font-weight: 800;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;
const Input = styled.input`
  padding: 0.85rem 1.1rem;
  border: 1px solid #ccc;
  border-radius: 10px;
  font-size: 1.05rem;
`;
const Textarea = styled.textarea`
  padding: 0.85rem 1.1rem;
  border: 1px solid #ccc;
  border-radius: 10px;
  font-size: 1.05rem;
  min-height: 100px;
`;
const Button = styled.button`
  background: #1a237e;
  color: #fff;
  border: none;
  padding: 0.85rem 2rem;
  border-radius: 30px;
  font-size: 1.15rem;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.2s, color 0.2s, transform 0.2s;
  &:hover {
    background: #ffb300;
    color: #1a237e;
    transform: translateY(-2px) scale(1.04);
  }
`;
const Success = styled.div`
  color: #388e3c;
  text-align: center;
  margin-top: 1rem;
  font-weight: 600;
`;

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
  };
  return (
    <Section>
      <Title>Contact Us</Title>
      <Form onSubmit={handleSubmit}>
        <Input type="text" placeholder="Your Name" required />
        <Input type="email" placeholder="Your Email" required />
        <Textarea placeholder="Your Message" required />
        <Button type="submit">Send Message</Button>
      </Form>
      {submitted && <Success>Thank you for contacting us! We'll get back to you soon.</Success>}
    </Section>
  );
};

export default Contact; 