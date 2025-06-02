import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  max-width: 1200px;
  margin: 2rem auto;
  padding: 2rem;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  color: #1a237e;
  font-size: 2rem;
  font-weight: 800;
`;

const BackButton = styled(Link)`
  background: #1a237e;
  color: #fff;
  padding: 0.75rem 1.5rem;
  border-radius: 30px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  &:hover {
    background: #283593;
    transform: translateY(-2px);
  }
`;

const Section = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 0 4px 24px rgba(26,35,126,0.10);
  margin-bottom: 2rem;
`;

const SectionTitle = styled.h2`
  color: #1a237e;
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  font-weight: 700;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
`;

const Card = styled.div`
  background: #f7f9fa;
  padding: 1.5rem;
  border-radius: 15px;
  box-shadow: 0 2px 8px rgba(26,35,126,0.05);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 500px;
`;

const Input = styled.input`
  padding: 0.85rem 1.1rem;
  border: 1px solid #ccc;
  border-radius: 10px;
  font-size: 1.05rem;
  &:focus {
    outline: none;
    border-color: #1a237e;
    box-shadow: 0 0 0 2px rgba(26,35,126,0.1);
  }
`;

const Select = styled.select`
  padding: 0.85rem 1.1rem;
  border: 1px solid #ccc;
  border-radius: 10px;
  font-size: 1.05rem;
  &:focus {
    outline: none;
    border-color: #1a237e;
    box-shadow: 0 0 0 2px rgba(26,35,126,0.1);
  }
`;

const Button = styled.button`
  background: #1a237e;
  color: white;
  border: none;
  padding: 0.85rem;
  border-radius: 10px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    background: #283593;
    transform: translateY(-2px);
  }
`;

const UserList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
`;

const UserCard = styled.div`
  background: #f7f9fa;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(26,35,126,0.05);
`;

const UserName = styled.div`
  font-weight: 600;
  color: #1a237e;
  margin-bottom: 0.5rem;
`;

const UserEmail = styled.div`
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
`;

const CourseList = styled.div`
  margin-top: 0.5rem;
  font-size: 0.9rem;
`;

const CourseItem = styled.div`
  color: #666;
  margin-bottom: 0.25rem;
`;

const Admin = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('');
  const [message, setMessage] = useState('');

  const courses = [
    'Python Programming',
    'Java Programming',
    'Full Stack Web Development',
    'Generative AI',
    'Data Structures & Algorithms',
    'Aptitude & Reasoning',
    'Pre-Placement Training'
  ];

  useEffect(() => {
    // Load users from localStorage
    const loadUsers = () => {
      const userData = localStorage.getItem('userData');
      if (userData) {
        setUsers([JSON.parse(userData)]);
      }
    };
    loadUsers();
  }, []);

  const handleAssignCourse = (e) => {
    e.preventDefault();
    if (!selectedUser || !selectedCourse) {
      setMessage('Please select both user and course');
      return;
    }

    const userData = JSON.parse(localStorage.getItem('userData'));
    if (userData) {
      const updatedUserData = {
        ...userData,
        enrolledCourses: [...new Set([...userData.enrolledCourses, selectedCourse])],
        progress: {
          ...userData.progress,
          total: userData.enrolledCourses.length + 1
        }
      };
      localStorage.setItem('userData', JSON.stringify(updatedUserData));
      setUsers([updatedUserData]);
      setMessage('Course assigned successfully!');
      setSelectedCourse('');
    }
  };

  return (
    <Container>
      <Header>
        <Title>Admin Dashboard</Title>
        <BackButton to="/">← Back to Home</BackButton>
      </Header>

      <Section>
        <SectionTitle>Assign Course to Student</SectionTitle>
        <Form onSubmit={handleAssignCourse}>
          <Select
            value={selectedUser}
            onChange={(e) => setSelectedUser(e.target.value)}
            required
          >
            <option value="">Select User</option>
            {users.map((user, index) => (
              <option key={index} value={user.username}>
                {user.name} ({user.username})
              </option>
            ))}
          </Select>

          <Select
            value={selectedCourse}
            onChange={(e) => setSelectedCourse(e.target.value)}
            required
          >
            <option value="">Select Course</option>
            {courses.map((course, index) => (
              <option key={index} value={course}>
                {course}
              </option>
            ))}
          </Select>

          <Button type="submit">Assign Course</Button>
          {message && <div style={{ color: message.includes('success') ? '#388e3c' : '#d32f2f' }}>{message}</div>}
        </Form>
      </Section>

      <Section>
        <SectionTitle>Registered Students</SectionTitle>
        <UserList>
          {users.map((user, index) => (
            <UserCard key={index}>
              <UserName>{user.name}</UserName>
              <UserEmail>{user.email}</UserEmail>
              <CourseList>
                <strong>Enrolled Courses:</strong>
                {user.enrolledCourses.map((course, idx) => (
                  <CourseItem key={idx}>• {course}</CourseItem>
                ))}
              </CourseList>
            </UserCard>
          ))}
        </UserList>
      </Section>
    </Container>
  );
};

export default Admin; 