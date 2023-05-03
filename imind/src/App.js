import './App.css';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { AllRoutes } from './components/AllRoutes';

function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
