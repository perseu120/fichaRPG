import './ascents/styles/reset.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScreenBase from './modules/base/screens';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<ScreenBase/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
