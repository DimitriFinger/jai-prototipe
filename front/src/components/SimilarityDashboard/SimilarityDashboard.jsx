import React, { useState, useEffect } from 'react'
import { getIdList } from '../../services/api';
import ImagesCarousel from '../ImagesCarousel/ImagesCarousel';

const SimilarityDashboard = () => {

    const [idList, setIdList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [loadingError, setLoadingError] = useState(false);

    const loadIds = async () => {
        try {
            const response = await getIdList();
            setIdList(response.data);
            console.log(idList.data);
            setLoading(false);
        } catch (err) {
            setLoadingError(true);
            console.log(err);
        }
    }

    useEffect(() => {
        (async () => await loadIds())();
    }, []);

    if (loading) {
        return (
            <h1>Carregando...</h1>
        )
    }

    if (loadingError) {
        return (
            <h1>Erro ao carregar os dados.</h1>
        )
    }


    return (
        <div>
            <div className="content-wrapper">
                <div className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1 className="m-0">Similarity</h1>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                                    <li className="breadcrumb-item active">Similarity</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>

                <section className="content">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12 col-sm-6 col-md-3">
                                <div className="info-box">
                                    <span className="info-box-icon bg-info elevation-1"><i className="fas fa-cog" /></span>
                                    <div className="info-box-content">
                                        <span className="info-box-text">CPU Traffic</span>
                                        <span className="info-box-number">
                                            10
                                            <small>%</small>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-md-3">
                                <div className="info-box mb-3">
                                    <span className="info-box-icon bg-danger elevation-1"><i className="fas fa-thumbs-up" /></span>
                                    <div className="info-box-content">
                                        <span className="info-box-text">Likes</span>
                                        <span className="info-box-number">41,410</span>
                                    </div>
                                </div>
                            </div>
                            <div className="clearfix hidden-md-up" />
                            <div className="col-12 col-sm-6 col-md-3">
                                <div className="info-box mb-3">
                                    <span className="info-box-icon bg-success elevation-1"><i className="fas fa-shopping-cart" /></span>
                                    <div className="info-box-content">
                                        <span className="info-box-text">Sales</span>
                                        <span className="info-box-number">760</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-md-3">
                                <div className="info-box mb-3">
                                    <span className="info-box-icon bg-warning elevation-1"><i className="fas fa-users" /></span>
                                    <div className="info-box-content">
                                        <span className="info-box-text">New Members</span>
                                        <span className="info-box-number">2,000</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h5 className="card-title">Similarity search</h5>
                                    </div>
                                    <div className="card-body">
                                        <ImagesCarousel idList={idList} />
                                    </div>
                                    <div className="card-footer">
                                        Card footer
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
            </div>
            <aside className="control-sidebar control-sidebar-dark">
            </aside>
        </div>
    )
}

export default SimilarityDashboard