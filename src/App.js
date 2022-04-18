import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './page/Home/About/About';
import Home from './page/Home/Home/Home';
import Questions from './page/Home/Questions/Questions';
import Login from './page/Login/Login/Login';
import RequerAuth from './page/RequerAuth/RequerAuth';
import Header from './page/Shared/Header/Header';
import Registerd from './page/Login/Registerd/Registerd'
import Checkout from './page/Home/Checkout/Checkout'
import NotFoud from './page/Shared/NotFound/NotFoud';

function App() {
  return (
    <div>
      <Header></Header>
    <Routes>
      
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/questions' element={<Questions></Questions>}></Route>
        <Route path='/registerd' element={<Registerd></Registerd>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/requerauth' element={
          <RequerAuth>
            <Checkout></Checkout>
          </RequerAuth>
        }></Route>
        <Route path='*' element={<NotFoud></NotFoud>}></Route>

      </Routes>
        
    </div>
  );
}

export default App;
