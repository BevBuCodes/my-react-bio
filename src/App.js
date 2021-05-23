import logo from './logo.svg';
import './App.css';
import AboutMe from './components/AboutMe';
import AboutMeClass from './components/AboutMeClass';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      <AboutMe name="Beverly"/> 
      <AboutMeClass /> 
        
      </header>
    </div>
  );
}

export default App;
