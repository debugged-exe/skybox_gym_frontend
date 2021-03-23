import './App.css';
import {Route, Switch, HashRouter} from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import HomePage from './Pages/HomePage/HomePage';
import SignInPage from './Pages/SignInPage/SignInPage';
import EnrollPage from './Pages/EnrollPage/EnrollPage';
import TrainerPage from './Pages/TrainerPage/TrainerPage';
import TraineePage from './Pages/TraineePage/TraineePage';
import AdminPage from './Pages/AdminPage/AdminPage';
import TrainerUpdateInfo from './Components/TrainerUpdateInfo/TrainerUpdateInfo';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function App() {

  useEffect (()=>{
    Aos.init({duration:2000})
  },[]);
  
  return (
      <HashRouter basename='/'>
      <Switch>
      <Route>
      <Navbar/>
      <Route exact path='/' component={HomePage}/>
      <Route exact path='/signin' component={SignInPage}/>
      <Route exact path='/enroll' component={EnrollPage}/>
      <Route exact path='/trainer' component={TrainerPage}/>
      <Route exact path='/trainee' component={TraineePage}/>
      <Route exact path='/admin' component={AdminPage}/>
      <Route exact path='/update-tr-info' component={TrainerUpdateInfo}/>
      <Footer/>
      </Route>
      </Switch>
      </HashRouter>
  );
}

export default App;
