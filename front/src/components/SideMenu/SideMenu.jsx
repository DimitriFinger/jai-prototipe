import React from 'react';
import logo_jai from '../../assets/images/logo_jai.JPG';

const SideMenu = () => {
    return (
        <div>
            <aside className="main-sidebar sidebar-dark-primary elevation-4">
                <a className="brand-link" href="foo">
                    <img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{ opacity: '.8' }} />
                    <span className="brand-text font-weight-light">AdminLTE 3</span>
                </a>
                <div className="sidebar">
                    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                        <div className="image">
                            <img src={logo_jai} className="img-circle elevation-2" alt="User logo" />
                        </div>
                        <div className="info">
                            <a className="d-block" href="/#">Username</a>
                        </div>
                    </div>
                    <div className="form-inline">
                        <div className="input-group" data-widget="sidebar-search">
                            <input className="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search" />
                            <div className="input-group-append">
                                <button className="btn btn-sidebar">
                                    <i className="fas fa-search fa-fw" />
                                </button>
                            </div>
                        </div>
                    </div>
                    <nav className="mt-2">
                        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">


                            <li className="nav-header">JAI SERVICES</li>
                            <li className="nav-item">
                                <a href="/similarity" className="nav-link">
                                    <i className="nav-icon fas fa-search" />
                                    <p>
                                        Similarity search
                                    </p>
                                </a>
                            </li>

                        </ul>
                    </nav>
                </div>
            </aside>
        </div>
    )
}

export default SideMenu