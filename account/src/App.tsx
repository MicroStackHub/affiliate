
// React is used implicitly by JSX
import { ThemeProvider } from './contexts/ThemeContext';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import AccountPage from './components/AccountPage';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<AccountPage />} />
          <Route path="/dashboard" element={<AccountPage />} />
          <Route path="*" element={<AccountPage />} />
        </Routes>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
