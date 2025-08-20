
// React is used implicitly by JSX
import { ThemeProvider } from './contexts/ThemeContext';
import Layout from './components/Layout/Layout';
import AccountPage from './components/AccountPage';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <Layout>
        <AccountPage />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
