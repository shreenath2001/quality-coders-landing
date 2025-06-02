import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 20px;
  width: 90%;
  max-width: 400px;
  box-shadow: 0 4px 24px rgba(26,35,126,0.15);
`;

const Title = styled.h2`
  color: #1a237e;
  margin-bottom: 1.5rem;
  text-align: center;
  font-size: 1.8rem;
  font-weight: 800;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
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

const ToggleButton = styled.button`
  background: none;
  border: none;
  color: #1a237e;
  cursor: pointer;
  font-size: 0.9rem;
  margin-top: 1rem;
  text-decoration: underline;
  &:hover {
    color: #283593;
  }
`;

const Error = styled.div`
  color: #d32f2f;
  text-align: center;
  margin-top: 1rem;
  font-size: 0.9rem;
`;

const BackButton = styled(Link)`
  color: #1a237e;
  text-decoration: none;
  font-weight: bold;
  margin-top: 1rem;
  text-align: center;
  &:hover {
    text-decoration: underline;
  }
`;

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (isLogin) {
      // Login logic
      if (formData.username && formData.password) {
        const userData = {
          username: formData.username,
          name: formData.username,
          email: `${formData.username}@example.com`,
          joinDate: new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' }),
          enrolledCourses: ['Python Programming', 'Full Stack Web Development'],
          progress: {
            completed: 2,
            inProgress: 1,
            total: 3
          }
        };
        login(userData);
        navigate('/');
      } else {
        setError('Please fill in all fields');
      }
    } else {
      // Signup logic
      if (formData.name && formData.username && formData.email && formData.password) {
        const userData = {
          name: formData.name,
          username: formData.username,
          email: formData.email,
          joinDate: new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' }),
          enrolledCourses: [],
          progress: {
            completed: 0,
            inProgress: 0,
            total: 0
          }
        };
        login(userData);
        navigate('/');
      } else {
        setError('Please fill in all fields');
      }
    }
  };

  return (
    <Container>
      <ModalContent>
        <Title>{isLogin ? 'Login' : 'Sign Up'}</Title>
        <Form onSubmit={handleSubmit}>
          {!isLogin && (
            <Input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
            />
          )}
          <Input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
          />
          {!isLogin && (
            <Input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
          )}
          <Input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
          <Button type="submit">{isLogin ? 'Login' : 'Sign Up'}</Button>
          {error && <Error>{error}</Error>}
        </Form>
        <ToggleButton type="button" onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? "Don't have an account? Sign Up" : 'Already have an account? Login'}
        </ToggleButton>
        <BackButton to="/">← Back to Home</BackButton>
      </ModalContent>
    </Container>
  );
};

export default Login; 