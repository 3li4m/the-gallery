import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home"
import About from "./About"
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App(){
    return (
        <div>
            <Router>
                <Header/>
                <Routes>
                    <Route path="/home" element={<Home />}></Route>
                    <Route path="/About" element={<About />}></Route>
                </Routes>
            </Router>
            
            <Footer />
        </div>
    );
}

export default App;