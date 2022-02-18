import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home"
import About from "./About"
import {BrowserRouter as Router, Route, Routes, HashRouter} from "react-router-dom";

function App(){
    return (
        <div>


                <Router>
                    <Header/>
                    <HashRouter>
                        <Route path="/the-gallery/" element={<Home />}></Route>
                        <Route path="/the-gallery/about" element={<About />}></Route>
                    </HashRouter>
                </Router>
                
                <Footer />
        </div>
    );
}

export default App;