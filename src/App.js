import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Modelspage from './Pages/Modelspage';
import Euro from './Pages/ModelPages/Euro';
import American from './Pages/ModelPages/American';
import Japan from "./Pages/ModelPages/Japan";
import Homepage from './Pages/Homepage';
import Historypage from './Pages/Historypage';
import ContactSupportpage from './Pages/ContactSupportpage';
import Services from './Pages/Services';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="models" element={<Modelspage />} />
        <Route path="models/euro" element={<Euro />} />
        <Route path="models/american" element={<American />} />
        <Route path="models/japanense" element={<Japan />} />
        <Route path="history" element={<Historypage />} />
        <Route path="contact" element={<ContactSupportpage />} />
        <Route path="services" element={<Services />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
