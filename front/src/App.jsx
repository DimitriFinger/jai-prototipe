import './App.css';
import Header from './components/Header/Header';
import SideMenu from './components/SideMenu/SideMenu';
import Dashboard from './components/Dashboard/Dashboard';
import Footer from './components/Footer/Footer';

function App() {
    return (
        <div className="wrapper">
            {/* Loading logo */}
            <div className="preloader flex-column justify-content-center align-items-center">
                <img className="animation__wobble" src="dist/img/AdminLTELogo.png" alt="AdminLTELogo" height={60} width={60} />
            </div>

            <Header />
            <SideMenu />
            <Dashboard />
            <Footer />
        </div >
    );
}

export default App;
