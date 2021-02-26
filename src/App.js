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

function App() {
  return (
    <div>
      <HashRouter basename='/'>
      <Navbar/>
      <Switch>
      <Route exact path='/' component={HomePage}/>
      <Route exact path='/signin' component={SignInPage}/>
      <Route exact path='/enroll' component={EnrollPage}/>
      <Route exact path='/trainer' component={TrainerPage}/>
      <Route exact path='/trainee' component={TraineePage}/>
      <Route exact path='/admin' component={AdminPage}/>
      </Switch>
      <Footer/>
      </HashRouter>
    </div>
  );
}

export default App;
