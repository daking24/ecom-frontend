import "./Styles/components/App.scss";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";

function App() {
    return (
        <div className="App">
            <div className="container">
                <Navbar />
                {/* Pages Here */}
                <Home />
            </div>
        </div>
    );
}

export default App;
