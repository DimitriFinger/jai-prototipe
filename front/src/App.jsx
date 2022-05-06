import './App.css';
import Header from './components/Header/Header';
import SideMenu from './components/SideMenu/SideMenu';
import Footer from './components/Footer/Footer';
import AppRoutes from './config/routes';

function App() {
    return (
        <div className="wrapper">
            <Header />
            <SideMenu />
            <AppRoutes />
            {/* <Footer /> */}
        </div >
    );
}

export default App;
