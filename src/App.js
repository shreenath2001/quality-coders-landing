import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import Home from './components/Home';
import About from './components/About';
import Courses from './components/Courses';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Profile from './components/Profile';
import Admin from './components/Admin';
import Login from './components/Login';
import { AuthProvider, useAuth } from './contexts/AuthContext';

const lightTheme = {
  body: '#ffffff',
  text: '#1a237e',
  primary: '#1a237e',
  secondary: '#283593',
  accent: '#ffb300',
  background: '#f5f5f5',
  cardBg: '#ffffff',
  border: 'rgba(26, 35, 126, 0.2)',
  shadow: 'rgba(0, 0, 0, 0.1)',
  scrollbarTrack: 'rgba(26, 35, 126, 0.05)',
  scrollbarThumb: 'rgba(26, 35, 126, 0.3)',
  scrollbarThumbHover: 'rgba(26, 35, 126, 0.5)'
};

const darkTheme = {
  body: '#121212',
  text: '#ffffff',
  primary: '#7986cb',
  secondary: '#9fa8da',
  accent: '#ffd54f',
  background: '#1e1e1e',
  cardBg: '#2d2d2d',
  border: 'rgba(255, 255, 255, 0.1)',
  shadow: 'rgba(0, 0, 0, 0.3)',
  scrollbarTrack: 'rgba(255, 255, 255, 0.05)',
  scrollbarThumb: 'rgba(255, 255, 255, 0.2)',
  scrollbarThumbHover: 'rgba(255, 255, 255, 0.3)'
};

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Segoe UI', 'Roboto', 'Arial', sans-serif;
    background-color: ${props => props.theme.body};
    color: ${props => props.theme.text};
    min-height: 100vh;
    transition: all 0.3s ease;
  }

  ::-webkit-scrollbar {
    width: 10px;
    background: ${props => props.theme.scrollbarTrack};
  }

  ::-webkit-scrollbar-track {
    background: ${props => props.theme.scrollbarTrack};
    border-radius: 5px;
  }

  ::-webkit-scrollbar-thumb {
    background: ${props => props.theme.scrollbarThumb};
    border-radius: 5px;
    border: 2px solid ${props => props.theme.scrollbarTrack};
    transition: all 0.3s ease;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${props => props.theme.scrollbarThumbHover};
  }

  * {
    scrollbar-width: thin;
    scrollbar-color: ${props => props.theme.scrollbarThumb} ${props => props.theme.scrollbarTrack};
  }
`;

const MainWrapper = styled.div`
  padding-top: 80px;
  min-height: 100vh;
`;

const Nav = styled.nav`
  background: ${props => props.theme.cardBg};
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 4px ${props => props.theme.shadow};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  transition: all 0.3s ease;
`;

const Logo = styled(Link)`
  color: #ffb300;
  font-size: 2rem;
  font-weight: 800;
  letter-spacing: 1px;
  text-decoration: none;
  text-shadow: 0 2px 8px rgba(26,35,126,0.10);
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1.5rem;
`;

const NavLink = styled(Link)`
  color: ${props => props.theme.text};
  text-decoration: none;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  transition: all 0.2s ease;

  &:hover {
    background: ${props => props.theme.border};
  }
`;

const AdminRoute = ({ children }) => {
  const isAdmin = localStorage.getItem('isAdmin') === 'true';
  return isAdmin ? children : <Navigate to="/" />;
};

const ThemeToggle = styled.button`
  background: none;
  border: none;
  color: ${props => props.theme.text};
  cursor: pointer;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  margin-left: 1rem;
  border-radius: 50%;
  width: 40px;
  height: 40px;

  &:hover {
    background: ${props => props.theme.border};
    transform: rotate(15deg);
  }

  svg {
    width: 24px;
    height: 24px;
    transition: all 0.3s ease;
  }
`;

const NavActions = styled.div`
  display: flex;
  gap: 1.5rem;
`;

const ProfileLink = styled(Link)`
  color: ${props => props.theme.text};
  text-decoration: none;
  font-weight: 500;
  margin-right: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  transition: all 0.2s ease;

  &:hover {
    background: ${props => props.theme.border};
  }
`;

const LogoutButton = styled.button`
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;
  font-weight: 500;
`;

const LoginButton = styled(Link)`
  background: #ffb300;
  color: #1a237e;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 30px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: #fff;
    color: #1a237e;
  }
`;

const RegisterButton = styled(Link)`
  background: #ffb300;
  color: #1a237e;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 30px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: #fff;
    color: #1a237e;
  }
`;

const AppContent = () => {
  const [theme, setTheme] = useState('light');
  const { user, logout } = useAuth();

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle />
      <Router>
        <Nav>
          <Logo to="/">Quality Coders</Logo>
          <NavLinks>
            <NavLink to="/#about" onClick={() => scrollToSection('about')}>About</NavLink>
            <NavLink to="/#courses" onClick={() => scrollToSection('courses')}>Courses</NavLink>
            <NavLink to="/#testimonials" onClick={() => scrollToSection('testimonials')}>Testimonials</NavLink>
            <NavLink to="/#contact" onClick={() => scrollToSection('contact')}>Contact</NavLink>
          </NavLinks>
          <NavActions>
            <ThemeToggle onClick={toggleTheme} aria-label="Toggle theme">
              {theme === 'light' ? (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-.46-.04-.92-.1-1.36-.98 1.37-2.58 2.26-4.4 2.26-2.98 0-5.4-2.42-5.4-5.4 0-1.81.89-3.42 2.26-4.4-.44-.06-.9-.1-1.36-.1z"/>
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0 .39-.39.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0 .39-.39.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41.39.39 1.03.39 1.41 0l1.06-1.06zM7.05 18.36c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41.39.39 1.03.39 1.41 0l1.06-1.06z"/>
                </svg>
              )}
            </ThemeToggle>
            {user ? (
              <>
                <ProfileLink to="/profile">Profile</ProfileLink>
                <LogoutButton onClick={logout}>Logout</LogoutButton>
              </>
            ) : (
              <>
                <LoginButton to="/login">Login</LoginButton>
                <RegisterButton to="/register">Register</RegisterButton>
              </>
            )}
          </NavActions>
        </Nav>
        <MainWrapper>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/login" element={<Login />} />
            <Route 
              path="/admin" 
              element={
                <AdminRoute>
                  <Admin />
                </AdminRoute>
              } 
            />
          </Routes>
        </MainWrapper>
      </Router>
    </ThemeProvider>
  );
};

const App = () => {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
};

export default App;
