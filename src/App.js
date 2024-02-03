import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Homepage from './components/pages/Home';
import EditPage from './components/pages/Edit';

function App() {
  return (
    <div className="App">
      <h1>Meme Generator</h1>
      <Routes>
        < Route path='/' element={<Homepage />}/>
        < Route path="/edit" element={<EditPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
