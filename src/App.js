import "./App.css";
import Home from "./Home";
import Header from "./Header";
import Footer from "./Footer";
import SearchPage from "./SearchPage";
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";
function App() {
  return (
    <div className="app">
      <Router>
        <Header />

        <Switch>
          <Route path="/search" element={<SearchPage />} />
          <Route path="/" element={<Home />} />
        </Switch>
        
        <Footer />
      </Router>
    </div>
  );
}

export default App;
