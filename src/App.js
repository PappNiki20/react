
import './App.css';
import TicTacToe from './pages/TickTackToeApp';
import Lighton from './pages/LightonApp';
import Jatekok from './pages/Jatekok';
import NoPage from './pages/noPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './pages/Layout';
function App() {
  return (
    <div className="App">
      <header className="App-header">
       
      </header>
      <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Jatekok />} />
                        <Route path="tictactoe" element={<TicTacToe />} />
                        <Route path="ligthon" element={<Lighton />} />
                        <Route path="*" element={<NoPage />} />
                    </Route>
                </Routes>
            </BrowserRouter>

      </div>
  );
}

export default App;
