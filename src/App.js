import './App.css';
import './bootstrap.min.css';
import './custom.css';
import Header from './components/Header';
import Home from './pages/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Reciepe from "./pages/Reciepe";



function App() {
  return (
      <Router>
          <Header />
          <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/food/:Reciepe" element={<Reciepe />} />              
          </Routes>
      </Router>
  );
}

export default App;
