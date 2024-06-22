import Cards from './components/Category';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <main>
          <Routes>
          <Route path="/" exact element={<Home />} />
            <Route path="/category/:name" element={<Cards />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
