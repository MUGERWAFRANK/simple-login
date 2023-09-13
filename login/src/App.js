import logo from './logo.svg';
import './style.css';
import LoginForm from './component/LoginForm';

function App() {
  return (
    <div className="App">
       <h1 style={{color:'blue',textAlign:'center'}}>Simple Login Form</h1>
       <LoginForm/>
    </div>
  );
}

export default App;
