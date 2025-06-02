import React from 'react';
import styled from 'styled-components';
import { useAuth } from '../contexts/AuthContext';
import { Link } from 'react-router-dom';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const ProfileCard = styled.div`
  background: ${props => props.theme.cardBg};
  border-radius: 15px;
  padding: 2rem;
  box-shadow: ${props => props.theme.shadow};
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  color: ${props => props.theme.text};
  margin-bottom: 2rem;
  font-size: 2rem;
`;

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const InfoSection = styled.div`
  h2 {
    color: ${props => props.theme.text};
    margin-bottom: 1rem;
    font-size: 1.5rem;
  }
`;

const InfoItem = styled.div`
  margin-bottom: 1rem;
  
  label {
    color: ${props => props.theme.textSecondary};
    display: block;
    margin-bottom: 0.5rem;
  }
  
  span {
    color: ${props => props.theme.text};
    font-weight: 500;
  }
`;

const CourseList = styled.ul`
  list-style: none;
  padding: 0;
  
  li {
    color: ${props => props.theme.text};
    padding: 0.5rem 0;
    border-bottom: 1px solid ${props => props.theme.border};
    
    &:last-child {
      border-bottom: none;
    }
  }
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 8px;
  background: ${props => props.theme.border};
  border-radius: 4px;
  overflow: hidden;
  margin-top: 0.5rem;
`;

const Progress = styled.div`
  width: ${props => props.percentage}%;
  height: 100%;
  background: #1a237e;
  border-radius: 4px;
  transition: width 0.3s ease;
`;

const LoginPrompt = styled.div`
  text-align: center;
  padding: 2rem;
  
  h2 {
    color: ${props => props.theme.text};
    margin-bottom: 1rem;
  }
  
  p {
    color: ${props => props.theme.textSecondary};
    margin-bottom: 1.5rem;
  }
`;

const LoginButton = styled(Link)`
  display: inline-block;
  background: #1a237e;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 5px;
  text-decoration: none;
  font-weight: 500;
  transition: background 0.3s ease;
  
  &:hover {
    background: #283593;
  }
`;

const Profile = () => {
  const { user } = useAuth();

  if (!user) {
    return (
      <Container>
        <LoginPrompt>
          <h2>Please Log In</h2>
          <p>You need to be logged in to view your profile.</p>
          <LoginButton to="/login">Log In</LoginButton>
        </LoginPrompt>
      </Container>
    );
  }

  const progressPercentage = user.progress.total > 0 
    ? (user.progress.completed / user.progress.total) * 100 
    : 0;

  return (
    <Container>
      <ProfileCard>
        <Title>Profile</Title>
        <InfoGrid>
          <InfoSection>
            <h2>Personal Information</h2>
            <InfoItem>
              <label>Name</label>
              <span>{user.name}</span>
            </InfoItem>
            <InfoItem>
              <label>Username</label>
              <span>{user.username}</span>
            </InfoItem>
            <InfoItem>
              <label>Email</label>
              <span>{user.email}</span>
            </InfoItem>
            <InfoItem>
              <label>Member Since</label>
              <span>{user.joinDate}</span>
            </InfoItem>
          </InfoSection>

          <InfoSection>
            <h2>Course Progress</h2>
            <InfoItem>
              <label>Completed Courses</label>
              <span>{user.progress.completed}</span>
            </InfoItem>
            <InfoItem>
              <label>Courses in Progress</label>
              <span>{user.progress.inProgress}</span>
            </InfoItem>
            <InfoItem>
              <label>Total Courses</label>
              <span>{user.progress.total}</span>
            </InfoItem>
            <InfoItem>
              <label>Overall Progress</label>
              <ProgressBar>
                <Progress percentage={progressPercentage} />
              </ProgressBar>
            </InfoItem>
          </InfoSection>

          <InfoSection>
            <h2>Enrolled Courses</h2>
            <CourseList>
              {user.enrolledCourses.map((course, index) => (
                <li key={index}>{course}</li>
              ))}
            </CourseList>
          </InfoSection>
        </InfoGrid>
      </ProfileCard>
    </Container>
  );
};

export default Profile; 