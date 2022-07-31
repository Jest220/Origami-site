import './App.css';
import logo from "./img/bird-green2.png"
import Header from "./components/Header/Header";
import MainPage from "./components/MainPage/MainPage";
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <div className="App">
            <Header />
            <MainPage />
            <Footer />
        </div>
    );
}
export default App;
