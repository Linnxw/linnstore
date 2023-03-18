import {Routes,Route} from "react-router-dom"
import Invoice from "./Page/Invoice.js"
import './App.css';
import Home from "./Page/Home.js"
import Topup from "./Page/TopUp.js"
import Contact from "./Page/Contact.js"
function App() {
  return (
    <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path="/topup/:game" element={<Topup/>}/>
     <Route path="/invoice" element={<Invoice/>}/>
     <Route path="/contact" element={<Contact/>}/>
    </Routes>
  );
}

export default App;
