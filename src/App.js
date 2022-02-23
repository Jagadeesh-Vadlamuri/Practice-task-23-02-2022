import logo from './logo.svg';
import './App.css';
import './RouterComponents/HeaderPage.css';
import './RouterComponents/HomePage.css';
import './RouterComponents/Footer.css';
import HeaderPage from './RouterComponents/HeaderPage';
import HomePage from './RouterComponents/HomePage';
import Footer from './RouterComponents/Footer';

function App() {
  return (
    <div className="App">
      <HeaderPage />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
