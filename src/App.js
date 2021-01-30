import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Counter from './Components/Counter/Counter';
import Footer from './Components/Footer/Footer';
import ContactUs from './Components/ContactUs/ContactUs';
import SignInPage from './Components/SignInPage/SignInPage';
import TrainerRegister from './Components/TrainerRegister/TrainerRegister.js';
import TraineeRegister from './Components/TraineeRegister/TraineeRegister.js';
import About from './Components/AboutUs/About';
import Home from './Components/Home/Home';
import TrainerCardList from './Components/TrainersCards/TrainerCardList';
import PackageList from './Components/PackageCards/PackageList';

function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Counter/>
      <PackageList/>
      <TrainerCardList/>
      <About/>
      <ContactUs/>
      <SignInPage />
      <TrainerRegister />
      <TraineeRegister />
      <Footer/>
    </div>
  );
}

export default App;
