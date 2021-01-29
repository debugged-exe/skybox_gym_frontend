import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Counter from './Components/Counter/Counter';
import Footer from './Components/Footer/Footer';
import ContactUs from './Components/ContactUs/ContactUs';
import SignInPage from './Components/SignInPage/SignInPage';
import TrainerRegister from './Components/TrainerRegister/TrainerRegister.js';
import TraineeRegister from './Components/TraineeRegister/TraineeRegister.js';

function App() {
  return (
    <div>
      <Navbar/>
      <Counter/>
      <ContactUs/>
      <SignInPage />
      <TrainerRegister />
      <TraineeRegister />
      <Footer/>
    </div>
  );
}

export default App;
