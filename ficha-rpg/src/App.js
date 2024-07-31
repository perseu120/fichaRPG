import './ascents/styles/reset.css';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeaderImg from './modules/base/components/imgHeader';
import Input from './components/inputs';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HeaderImg/>}/>
          <Route path='/input' element={<Input/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
