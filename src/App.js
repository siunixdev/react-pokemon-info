import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import About from './About';

function App() {
  return (
    <Router>
      <div className="App">
        <h3 className='text-2xl'>Pokemon info</h3>
      </div>

      <Routes>
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
