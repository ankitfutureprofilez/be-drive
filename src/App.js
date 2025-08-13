import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Main from './Home/Main';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <Router>
      <Toaster
        position="top-right"
        reverseOrder={false}
      />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </Router>
  );
}

export default App;
