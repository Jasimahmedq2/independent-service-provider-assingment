import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './page/Home/About/About';
import Featuers from './page/Home/Features/Featuers';
import Home from './page/Home/Home/Home';
import Questions from './page/Home/Questions/Questions';
import Header from './page/Shared/Header/Header';
import NotFoud from './page/Shared/NotFound/NotFoud';

function App() {
  return (
    <div>
      <Header></Header>
    <Routes>
      
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/features' element={<Featuers></Featuers>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/questions' element={<Questions></Questions>}></Route>
        <Route path='*' element={<NotFoud></NotFoud>}></Route>






      </Routes>
        
    </div>
  );
}

export default App;
