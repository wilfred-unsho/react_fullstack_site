import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './App.css';
import NavBar from './NavBar';
import AboutPage from './pages/AboutPage';
import ArticleList from './pages/ArticleList';
import ArticlePage from './pages/ArticlePage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar/>
        <div id="page-body">
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/about" element={<AboutPage/>} exact />
            <Route path="/articles" element={<ArticleList/>} exact>
              <Route path=":name" element={<ArticlePage />} />
            </Route>
          </Routes>
        </div>
    </div>
    </Router>
  );
}

export default App;
