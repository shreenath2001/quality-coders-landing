import React from 'react';
import styled from 'styled-components';

const courses = [
  {
    title: 'Python Programming',
    desc: 'Beginner to advanced Python with projects.',
    price: '₹4,999',
    img: 'https://source.unsplash.com/400x250/?python,code',
  },
  {
    title: 'Java Programming',
    desc: 'Comprehensive Java course for all levels.',
    price: '₹4,999',
    img: 'https://source.unsplash.com/400x250/?java,code',
  },
  {
    title: 'Full Stack Web Development',
    desc: 'Frontend & backend with real-world projects.',
    price: '₹9,999',
    img: 'https://source.unsplash.com/400x250/?web,development',
  },
  {
    title: 'Generative AI',
    desc: 'Learn Gen AI concepts and build AI apps.',
    price: '₹7,999',
    img: 'https://source.unsplash.com/400x250/?artificial,intelligence',
  },
  {
    title: 'Data Structures & Algorithms',
    desc: 'Master DSA for coding interviews.',
    price: '₹5,999',
    img: 'https://source.unsplash.com/400x250/?algorithm,data',
  },
  {
    title: 'Aptitude & Reasoning',
    desc: 'Sharpen your aptitude and reasoning skills.',
    price: '₹2,999',
    img: 'https://source.unsplash.com/400x250/?aptitude,reasoning',
  },
  {
    title: 'Pre-Placement Training',
    desc: 'Get job-ready with our placement training.',
    price: '₹3,999',
    img: 'https://source.unsplash.com/400x250/?placement,training',
  },
];

const Section = styled.section`
  max-width: 1200px;
  margin: 3rem auto;
  padding: 2rem 1rem;
`;
const Title = styled.h2`
  color: #1a237e;
  margin-bottom: 2rem;
  text-align: center;
  font-size: 2.5rem;
  font-weight: 800;
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
`;
const Card = styled.div`
  background: #fff;
  border-radius: 20px;
  box-shadow: 0 4px 24px rgba(26,35,126,0.10);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s, box-shadow 0.2s;
  &:hover {
    transform: translateY(-8px) scale(1.03);
    box-shadow: 0 8px 32px rgba(26,35,126,0.18);
  }
`;
const Img = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;
const CardBody = styled.div`
  padding: 1.5rem;
  flex: 1;
`;
const CourseTitle = styled.h3`
  margin: 0 0 0.5rem 0;
  color: #1a237e;
  font-size: 1.4rem;
  font-weight: 700;
`;
const Desc = styled.p`
  color: #444;
  margin-bottom: 1rem;
  font-size: 1.05rem;
`;
const Price = styled.div`
  font-weight: bold;
  color: #ffb300;
  font-size: 1.2rem;
  margin-top: 0.5rem;
`;

const Courses = () => (
  <Section>
    <Title>Courses Offered</Title>
    <Grid>
      {courses.map((course, idx) => (
        <Card key={idx}>
          <Img src={course.img} alt={course.title} />
          <CardBody>
            <CourseTitle>{course.title}</CourseTitle>
            <Desc>{course.desc}</Desc>
            <Price>{course.price}</Price>
          </CardBody>
        </Card>
      ))}
    </Grid>
  </Section>
);

export default Courses; 