import './App.css';
import {signinwithgoogle} from './Firebase';

function App() {
  return (
    <div className="App">
      <button onClick={signinwithgoogle}>Sign in with Google</button>
      <h1>{localStorage.getItem('name')}</h1>
      <h1>{localStorage.getItem('email')}</h1>
      <img src={localStorage.getItem("profilepic")} />
    </div>
  );
}

export default App;