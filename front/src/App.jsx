import './App.css';
import Header from './components/Header/Header';
import SideMenu from './components/SideMenu/SideMenu';
import Footer from './components/Footer/Footer';
import AppRoutes from './config/routes';

function App() {
    return (
        <div className="wrapper">
            {/* Loading logo */}
            <div className="preloader flex-column justify-content-center align-items-center">
                <img className="animation__wobble" src="dist/img/AdminLTELogo.png" alt="AdminLTELogo" height={60} width={60} />
            </div>

            <Header />
            <SideMenu />
            <AppRoutes />
            <Footer />
        </div >
    );
}

export default App;
