import './App.css';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Router from './Router/Router';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Login/> */}
        {/* <Register/> */}
        <Router/>
      </header>
    </div>
  );
}

export default App;
