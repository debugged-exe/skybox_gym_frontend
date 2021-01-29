import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Counter from './Components/Counter/Counter';
import Footer from './Components/Footer/Footer';
import ContactUs from './Components/ContactUs/ContactUs';
import SignInPage from './Components/SignInPage/SignInPage';

function App() {
  return (
    <div>
      <Navbar/>
      <Counter/>
      <ContactUs/>
      <SignInPage />
      <Footer/>
    </div>
  );
}

export default App;
