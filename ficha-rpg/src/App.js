import './ascents/styles/reset.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScreenBase from './modules/base/screens';
import Ability from './modules/base/components/ability';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<ScreenBase/>}/>
          <Route path='/component' element={<Ability/>}/>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
