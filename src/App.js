import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Counter from './Components/Counter/Counter';
import Footer from './Components/Footer/Footer';
import ContactUs from './Components/ContactUs/ContactUs';

function App() {
  return (
    <div>
      <Navbar/>
      <Counter/>
      <ContactUs/>
      <Footer/>
    </div>
  );
}

export default App;
