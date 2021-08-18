import logo from './logo.svg';
import './App.css';
import EmployeeDetailsComponent from './components/EmployeeDetails/EmployeeDetails';
import HeaderComponent from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
     <HeaderComponent></HeaderComponent>
     <EmployeeDetailsComponent></EmployeeDetailsComponent>
     <Footer></Footer>
    </div>
  );
}

{/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}

export default App;
