import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Routes
} from 'react-router-dom';
import HomeDashboard from '../pages/HomePage/HomeDashboard';
import SimilarityDashboard from '../pages/SimilaritySearchPage/SimilarityDashboard';

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