import logo from '../assets/img/logo.svg';
import '../assets/css/App.css';

function About() {
  return (
    <div className="App">
      <header className="App-header" style="margin-top: 100000px !important;">
        <img src={logo} className="App-logo" alt="logo" />
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
        </a>
      </header>
    </div>
  );
}
export default About;




