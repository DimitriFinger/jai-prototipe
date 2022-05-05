import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate
} from 'react-router-dom';

import Header from '../components/Header/Header';
import SideMenu from '../components/SideMenu/SideMenu';
import Footer from '../components/Footer/Footer';
import HomeDashboard from '../components/HomeDashboard/HomeDashboard';
import SimilarityDashboard from '../components/SimilarityDashboard/SimilarityDashboard';

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route exact path='/' element={<HomeDashboard />} />
                <Route exact path='/similarity' element={<SimilarityDashboard />} />
            </Routes>
        </Router>
    )
}

export default AppRoutes


// {/* Loading logo */}
// <div className="preloader flex-column justify-content-center align-items-center">
// <img className="animation__wobble" src="dist/img/AdminLTELogo.png" alt="AdminLTELogo" height={60} width={60} />
// </div>

// <Header />
// <SideMenu />
// <HomeDashboard />
// <Footer />