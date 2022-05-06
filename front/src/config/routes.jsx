import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Routes
} from 'react-router-dom';
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