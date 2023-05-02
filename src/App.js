import './App.css';
import CbMember from './Components/CbMember';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Navbar from './Components/Navbar';
// import Login from './Login';
import Signin from './Components/Signin';
import Signup from './Components/Signup';
// import Navbar from './Components/Navbar';


function App() {
  return (
    <div className="App">
      <Router>
      {/* <Login/> */}
      {/* <Signin /> */}
      {/* <CbMember/> */}
      {/* <Navbar /> */}
      <Routes>
        <Route exact path='/' element={<Signin/>} />
        <Route exact path='/signup' element={<Signup/>} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
