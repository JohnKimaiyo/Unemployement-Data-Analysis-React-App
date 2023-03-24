import logo from './logo.svg';
import './App.css';
import Header from './Header/Header';
function App() {
  return (
    <div className="App">
     
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Unemployement Data Analysis
        </p>
      
      <Header/>
    </div>
  );
}

export default App;
