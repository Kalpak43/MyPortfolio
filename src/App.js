import './App.css';
import Footer from './components/Footer';
import Main from './components/Main';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App h-screen flex flex-col bg-black text-gray-200">
      <Main/>
      <Footer/>
    </div>
  )
}

export default App;
