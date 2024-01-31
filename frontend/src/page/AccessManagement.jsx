import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

const AccessManagement = ({ userInfo, handleLogout }) => {

    return (
        <div className='container-scroller'>
            {/* Header */}
            <Header userInfo={userInfo} handleLogout={handleLogout} />
            <div className="container-fluid page-body-wrapper">
                {/* Sidebar */}
                <Sidebar/>
                <div className="main-panel">
                    <div className="content-wrapper">
                        <div className="row">
                            <div className="col-md-12 grid-margin">
                                <div className="row">
                                    <div className="col-12 col-xl-8 mb-4 mb-xl-0">
                                        <h3 className="font-weight-bold">User Access Management</h3>
                                        <p className="font-weight">Manage user access in this account. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4 grid-margin stretch-card">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="row" style={{textAlign:'center', marginTop:'10px'}}>
                                            <div className="col-12 col-xl-12 mb-4 mb-xl-0">
                                                <i className="mdi mdi-account-multiple-plus" style={{fontSize:'40px', color:'#FF42AC'}}></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 grid-margin stretch-card">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="row" style={{ marginTop:'10px'}}>
                                                    <div className="col-8 col-xl-8">
                                                        <h5 className="font-weight">vivek</h5>
                                                        <p><span style={{color:'blue'}}>Operation</span></p>
                                                    </div>
                                                    <div className="col-4 col-xl-4" style={{textAlign:'center'}}>
                                                        <button type="button" className="btn btn-outline-info btn-sm" id="dropdownMenuIconButton3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                            <i className="mdi mdi-dots-vertical"></i>
                                                        </button>
                                                        <div className="dropdown-menu" aria-labelledby="dropdownMenuIconButton3">
                                                            <button className="dropdown-item" ><i className="mdi mdi-pencil btn-icon-prepend"></i> Edit</button>
                                                            <button className="dropdown-item"><i className="mdi mdi-file"></i> Clone</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 grid-margin stretch-card">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="row"  style={{ marginTop:'10px'}}>
                                                    <div className="col-8 col-xl-8">
                                                        <h5 className="font-weight">Pandi</h5>
                                                        <p><span style={{color:'blue'}}>Operation</span></p>
                                                    </div>
                                                    <div className="col-4 col-xl-4" style={{textAlign:'center'}}>
                                                        <button type="button" className="btn btn-outline-info btn-sm" id="dropdownMenuIconButton3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                            <i className="mdi mdi-dots-vertical"></i>
                                                        </button>
                                                        <div className="dropdown-menu" aria-labelledby="dropdownMenuIconButton3">
                                                            <button className="dropdown-item" ><i className="mdi mdi-pencil btn-icon-prepend"></i> Edit</button>
                                                            <button className="dropdown-item"><i className="mdi mdi-file"></i> Clone</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 grid-margin stretch-card">
                                <div className="card">
                                    <div className="card-body">
                                       <div className="row">
                                            <div className="col-md-12">
                                                <div className="row"  style={{ marginTop:'10px'}}>
                                                    <div className="col-12 col-xl-8">
                                                        <h5 className="font-weight">Pandi</h5>
                                                        <p><span style={{color:'#FF42AC'}}>Master Admin</span></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 grid-margin stretch-card">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="row"  style={{ marginTop:'10px'}}>
                                                    <div className="col-8 col-xl-8">
                                                        <h5 className="font-weight">Vivek</h5>
                                                        <p><span style={{color:'green'}}>Admin</span></p>
                                                    </div>
                                                    <div className="col-4 col-xl-4" style={{textAlign:'center'}}>
                                                        <button type="button" className="btn btn-outline-info btn-sm" id="dropdownMenuIconButton3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                            <i className="mdi mdi-dots-vertical"></i>
                                                        </button>
                                                        <div className="dropdown-menu" aria-labelledby="dropdownMenuIconButton3">
                                                            <button className="dropdown-item" ><i className="mdi mdi-pencil btn-icon-prepend"></i> Edit</button>
                                                            <button className="dropdown-item"><i className="mdi mdi-file"></i> Clone</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 grid-margin stretch-card">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="row"  style={{ marginTop:'10px'}}>
                                                    <div className="col-8 col-xl-8">
                                                        <h5 className="font-weight">Kesavan</h5>
                                                        <p><span style={{color:'green'}}>Admin</span></p>
                                                    </div>
                                                    <div className="col-4 col-xl-4" style={{textAlign:'center'}}>
                                                        <button type="button" className="btn btn-outline-info btn-sm" id="dropdownMenuIconButton3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                            <i className="mdi mdi-dots-vertical"></i>
                                                        </button>
                                                        <div className="dropdown-menu" aria-labelledby="dropdownMenuIconButton3">
                                                            <button className="dropdown-item" ><i className="mdi mdi-pencil btn-icon-prepend"></i> Edit</button>
                                                            <button className="dropdown-item"><i className="mdi mdi-file"></i> Clone</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Footer */}
                    <Footer />
                </div>         
            </div>    
        </div>
    )
}   
                 
export default AccessManagement