import React, { useState } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

const PricingManagement = ({ userInfo, handleLogout }) => {
    const [showBaseRates, setShowBaseRates] = useState(true);
    const [showDiscounts, setShowDiscounts] = useState(false);
    const [showSurcharges, setShowSurcharges] = useState(false);
    const [activeButton, setActiveButton] = useState('');

    const toggleBaseRates = () => {
        setShowBaseRates(true);
        setShowDiscounts(false);
        setShowSurcharges(false);
        setActiveButton('');
    };
  
    const toggleDiscounts = () => {
        setShowBaseRates(false);
        setShowDiscounts(true);
        setShowSurcharges(false);
        setActiveButton('discounts');
    };
  
    const toggleSurcharges = () => {
        setShowBaseRates(false);
        setShowDiscounts(false);
        setShowSurcharges(true);
        setActiveButton('surcharges');
    };

    // Base Rates edit start 
    const [showbaseRatesForm, setShowbaseRatesForm] = useState(false);

    const baseRates = () => {
        setShowbaseRatesForm(prevState => !prevState); // Toggles the form visibility
    };
    const closebaseRatesModal = () => {
        setShowbaseRatesForm(false); // Close the form
    };
    const modalbaseRatesStyle = {
        display: showbaseRatesForm ? 'block' : 'none',
    }

    // Base Rates Clone start 
    const [showbaseRatesCloneForm, setShowbaseRatesCloneForm] = useState(false);

    const baseRatesClone = () => {
        setShowbaseRatesCloneForm(prevState => !prevState); // Toggles the form visibility
    };
    const closebaseRatesCloneModal = () => {
        setShowbaseRatesCloneForm(false); // Close the form
    };
    const modalbaseRatesCloneStyle = {
        display: showbaseRatesCloneForm ? 'block' : 'none',
    }

    // Discount edit start 
    const [showDiscountForm, setShowDiscountForm] = useState(false);

    const discount = () => {
        setShowDiscountForm(prevState => !prevState); // Toggles the form visibility
    };
    const closeDiscountModal = () => {
        setShowDiscountForm(false); // Close the form
    };
    const modalDiscountStyle = {
        display: showDiscountForm ? 'block' : 'none',
    }

    // Discount Clone start 
    const [showDiscountCloneForm, setShowDiscountCloneForm] = useState(false);

    const discountClone = () => {
        setShowDiscountCloneForm(prevState => !prevState); // Toggles the form visibility
    };
    const closeDiscountCloneModal = () => {
        setShowDiscountCloneForm(false); // Close the form
    };
    const modalDiscountCloneStyle = {
        display: showDiscountCloneForm ? 'block' : 'none',
    }

    // Discount edit start 
    const [showSurchargesForm, setShowSurchargesForm] = useState(false);

    const surcharges = () => {
        setShowSurchargesForm(prevState => !prevState); // Toggles the form visibility
    };
    const closeSurchargesModal = () => {
        setShowSurchargesForm(false); // Close the form
    };
    const modalSurchargesStyle = {
        display: showSurchargesForm ? 'block' : 'none',
    }

    // Discount Clone start 
    const [showSurchargesCloneForm, setShowSurchargesCloneForm] = useState(false);

    const surchargesClone = () => {
        setShowSurchargesCloneForm(prevState => !prevState); // Toggles the form visibility
    };
    const closeSurchargesCloneModal = () => {
        setShowSurchargesCloneForm(false); // Close the form
    };
    const modalSurchargesCloneStyle = {
        display: showSurchargesCloneForm ? 'block' : 'none',
    }
 
    return (
        <div className='container-scroller'>
            {/* Header */}
            <Header userInfo={userInfo} handleLogout={handleLogout}/>
            <div className="container-fluid page-body-wrapper">
                {/* Sidebar */}
                <Sidebar/>
                <div className="main-panel">
                    <div className="content-wrapper">
                        <div className="row">
                            <div className="col-md-12 grid-margin">
                                <div className="row">
                                    <div className="col-12 col-xl-8 mb-4 mb-xl-0">
                                        <h3 className="font-weight-bold">Pricing Management</h3>
                                        <p className="font-weight">Manage rate cards from here.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 grid-margin stretch-card">
                                <div className="template-demo">
                                    <button type="button" className={`btn btn-inverse-info btn-fw ${activeButton !== 'discounts' && activeButton !== 'surcharges' ? 'active' : ''}`} onClick={toggleBaseRates}>Base Rates</button>
                                    <button type="button" className={`btn btn-inverse-info btn-fw ${activeButton === 'discounts' ? 'active' : ''}`} onClick={toggleDiscounts}>Discounts</button>
                                    <button type="button" className={`btn btn-inverse-info btn-fw ${activeButton === 'surcharges' ? 'active' : ''}`} onClick={toggleSurcharges}>Surcharges</button>
                                </div>
                            </div>
                            {/* Box for Base Rates */}
                            {showBaseRates && (
                                <div className="col-md-4 grid-margin stretch-card">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className="row">
                                                        <div className="col-8 col-xl-8">
                                                            <h5 className="font-weight">BASE PRICE</h5>
                                                        </div>
                                                        <div className="col-4 col-xl-4" style={{textAlign:'center'}}>
                                                            <button type="button" className="btn btn-outline-info btn-sm" id="dropdownMenuIconButton3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                <i className="mdi mdi-dots-vertical"></i>
                                                            </button>
                                                            <div className="dropdown-menu" aria-labelledby="dropdownMenuIconButton3" style={{}}>
                                                                <button className="dropdown-item" onClick={baseRates}><i className="mdi mdi-pencil btn-icon-prepend"></i> Edit</button>
                                                                <button className="dropdown-item" onClick={baseRatesClone}><i className="mdi mdi-file"></i> Clone</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <hr/> 
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="row">
                                                        <div className="col-8 col-xl-8">
                                                            <h5 className="font-weight">Energy based rate</h5>
                                                            <p className="font-weight">Price / Kilowatt Hour</p>
                                                        </div>
                                                        <div className="col-4 col-xl-4" style={{textAlign:'center'}}>
                                                            <span style={{color:'green', fontSize:'25px'}}><i className="mdi mdi-currency-inr btn-icon-prepend"></i>22.1</span><span style={{color:'red'}}>/KwH</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <hr/> 
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="row">
                                                        <div className="col-8 col-xl-8">
                                                            <h5 className="font-weight">Time-of-Use rate</h5>
                                                            <p className="font-weight">Price / Hour Occupancy</p>
                                                        </div>
                                                        <div className="col-4 col-xl-4" style={{textAlign:'center'}}>
                                                            <span style={{color:'blue', fontSize:'25px',}}><i className="mdi mdi-currency-inr btn-icon-prepend"></i>1.2</span><span style={{color:'red'}}>/Min</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {/* Edit Base Rates start */}
                            <div className="modalStyle" style={modalbaseRatesStyle}>
                                <div className="modalContentStyle" style={{ maxHeight: '680px', overflowY: 'auto' }}>
                                    <span onClick={closebaseRatesModal} style={{ float: 'right', cursor: 'pointer', fontSize:'30px' }}>&times;</span>
                                    <div className="card-body">
                                        <div className="card-title" style={{fontSize:'25px'}}>Edit surcharge <span style={{color:'red'}}>BASE PRICE</span></div>
                                        <div className="table-responsive pt-3">
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text" style={{color:'black', width:'125px'}}>Name</span>
                                                </div>
                                                <input type="text" className="form-control" />
                                            </div>
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text" style={{color:'black'}}>Rate for <span style={{color:'green'}}>&nbsp; Energy consumption </span> &nbsp;in <span style={{color:'red'}}> &nbsp;/KwH</span></span>
                                                </div>
                                                <input type="text" className="form-control" />
                                            </div>
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text" style={{color:'black'}}>Rate for <span style={{color:'green'}}> &nbsp;Space Occupancy </span> &nbsp;in <span style={{color:'red'}}>&nbsp;<i className="mdi mdi-currency-inr btn-icon-prepend"></i>/Min</span></span>
                                                </div>
                                                <input type="text" className="form-control" />
                                            </div>
                                        </div>
                                        <button type="submit" className="btn btn-primary mr-2" style={{marginTop:'10px'}}>Update</button>
                                        <button className="btn btn-danger" onClick={closebaseRatesModal} style={{marginTop:'10px'}}>Cancel</button>
                                    </div>
                                </div>
                            </div>
                            {/* Edit Base Rates start */}
                            {/* Clone Base Rates start */}
                            <div className="modalStyle" style={modalbaseRatesCloneStyle}>
                                <div className="modalContentStyle" style={{ maxHeight: '680px', overflowY: 'auto' }}>
                                    <span onClick={closebaseRatesCloneModal} style={{ float: 'right', cursor: 'pointer', fontSize:'30px' }}>&times;</span>
                                    <div className="card-body">
                                        <div className="card-title" style={{fontSize:'25px'}}>Clone surcharge <span style={{color:'red'}}>BASE PRICE</span></div>
                                        <div className="table-responsive pt-3">
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text" style={{color:'black', width:'125px'}}>Name</span>
                                                </div>
                                                <input type="text" className="form-control" />
                                            </div>
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text" style={{color:'black'}}>Rate for <span style={{color:'green'}}>&nbsp; Energy consumption </span> &nbsp;in <span style={{color:'red'}}> &nbsp;/KwH</span></span>
                                                </div>
                                                <input type="text" className="form-control" />
                                            </div>
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text" style={{color:'black'}}>Rate for <span style={{color:'green'}}> &nbsp;Space Occupancy </span> &nbsp;in <span style={{color:'red'}}>&nbsp;<i className="mdi mdi-currency-inr btn-icon-prepend"></i>/Min</span></span>
                                                </div>
                                                <input type="text" className="form-control" />
                                            </div>
                                        </div>
                                        <button type="submit" className="btn btn-primary mr-2" style={{marginTop:'10px'}}>Update</button>
                                        <button className="btn btn-danger" onClick={closebaseRatesCloneModal} style={{marginTop:'10px'}}>Cancel</button>
                                    </div>
                                </div>
                            </div>
                            {/* Clone Base Rates start */}

                            {/* Box for Discounts */}
                            {showDiscounts && (
                                <div className="col-md-4 grid-margin stretch-card">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className="row">
                                                        <div className="col-8 col-xl-8">
                                                            <h5 className="font-weight">WEEKEND'S</h5>
                                                        </div>
                                                        <div className="col-4 col-xl-4" style={{textAlign:'center'}}>
                                                            <button type="button" className="btn btn-outline-info btn-sm" id="dropdownMenuIconButton3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                <i className="mdi mdi-dots-vertical"></i>
                                                            </button>
                                                            <div className="dropdown-menu" aria-labelledby="dropdownMenuIconButton3" style={{}}>
                                                                <button className="dropdown-item" onClick={discount}><i className="mdi mdi-pencil btn-icon-prepend"></i> Edit</button>
                                                                <button className="dropdown-item" onClick={discountClone}><i className="mdi mdi-file"></i> Clone</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <hr/> 
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="row">
                                                        <div className="col-8 col-xl-8">
                                                            <h5 className="font-weight">Energy based rate</h5>
                                                            <p className="font-weight">Price / Kilowatt Hour</p>
                                                        </div>
                                                        <div className="col-4 col-xl-4" style={{textAlign:'center'}}>
                                                            <span style={{color:'green', fontSize:'25px',}}>10</span><span style={{color:'red'}}> %</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <hr/> 
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="row">
                                                        <div className="col-8 col-xl-8">
                                                            <h5 className="font-weight">Time-of-Use rate</h5>
                                                            <p className="font-weight">Price / Hour Occupancy</p>
                                                        </div>
                                                        <div className="col-4 col-xl-4" style={{textAlign:'center'}}>
                                                            <span style={{color:'blue', fontSize:'25px',}}>1</span><span style={{color:'red'}}> %</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {/* Edit Discount start */}
                            <div className="modalStyle" style={modalDiscountStyle}>
                                <div className="modalContentStyle" style={{ maxHeight: '680px', overflowY: 'auto' }}>
                                    <span onClick={closeDiscountModal} style={{ float: 'right', cursor: 'pointer', fontSize:'30px' }}>&times;</span>
                                    <div className="card-body">
                                        <div className="card-title" style={{fontSize:'25px'}}>Edit discount code<span style={{color:'red'}}> WEEKEND'S</span></div>
                                        <div className="table-responsive pt-3">
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text" style={{color:'black', width:'125px'}}>Name</span>
                                                </div>
                                                <input type="text" className="form-control" />
                                            </div>
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text" style={{color:'black'}}>Rate for <span style={{color:'green'}}>&nbsp; Energy consumption </span> &nbsp;in <span style={{color:'red'}}> &nbsp;/KwH</span></span>
                                                </div>
                                                <input type="text" className="form-control" />
                                            </div>
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                     <span className="input-group-text" style={{color:'black'}}>Rate for <span style={{color:'green'}}> &nbsp;Space Occupancy </span> &nbsp;in <span style={{color:'red'}}>&nbsp;<i className="mdi mdi-currency-inr btn-icon-prepend"></i>/Min</span></span>
                                                </div>
                                                <input type="text" className="form-control"/>
                                            </div>
                                        </div>
                                        <button type="submit" className="btn btn-primary mr-2" style={{marginTop:'10px'}}>Update</button>
                                        <button className="btn btn-danger" onClick={closeDiscountModal} style={{marginTop:'10px'}}>Cancel</button>
                                    </div>
                                </div>
                            </div>
                            {/* Edit Discount start */}
                            {/* Clone Discount start */}
                            <div className="modalStyle" style={modalDiscountCloneStyle}>
                                <div className="modalContentStyle" style={{ maxHeight: '680px', overflowY: 'auto' }}>
                                    <span onClick={closeDiscountCloneModal} style={{ float: 'right', cursor: 'pointer', fontSize:'30px' }}>&times;</span>
                                    <div className="card-body">
                                        <div className="card-title" style={{fontSize:'25px'}}>Clone discount code<span style={{color:'red'}}> WEEKEND'S</span></div>
                                        <div className="table-responsive pt-3">
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text" style={{color:'black', width:'125px'}}>Name</span>
                                                </div>
                                                <input type="text" className="form-control" />
                                            </div> 
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text" style={{color:'black'}}>Rate for <span style={{color:'green'}}>&nbsp; Energy consumption </span> &nbsp;in <span style={{color:'red'}}> &nbsp;/KwH</span></span>
                                                </div>
                                                <input type="text" className="form-control" />
                                            </div>
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                     <span className="input-group-text" style={{color:'black'}}>Rate for <span style={{color:'green'}}> &nbsp;Space Occupancy </span> &nbsp;in <span style={{color:'red'}}>&nbsp;<i className="mdi mdi-currency-inr btn-icon-prepend"></i>/Min</span></span>
                                                </div>
                                                <input type="text" className="form-control"/>
                                            </div>
                                        </div>
                                        <button type="submit" className="btn btn-primary mr-2" style={{marginTop:'10px'}}>Update</button>
                                        <button className="btn btn-danger" onClick={closeDiscountCloneModal} style={{marginTop:'10px'}}>Cancel</button>
                                    </div>
                                </div>
                            </div>
                            {/* Clone Discount start */}

                            {/* Box for Surcharges */}
                            {showSurcharges && (
                                <div className="col-md-4 grid-margin stretch-card">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className="row">
                                                        <div className="col-8 col-xl-8">
                                                            <h5 className="font-weight">MORNING</h5>
                                                        </div>
                                                        <div className="col-4 col-xl-4" style={{textAlign:'center'}}>
                                                            <button type="button" className="btn btn-outline-info btn-sm" id="dropdownMenuIconButton3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                <i className="mdi mdi-dots-vertical"></i>
                                                            </button>
                                                            <div className="dropdown-menu" aria-labelledby="dropdownMenuIconButton3" style={{}}>
                                                                <button className="dropdown-item" onClick={surcharges}><i className="mdi mdi-pencil btn-icon-prepend"></i> Edit</button>
                                                                <button className="dropdown-item" onClick={surchargesClone}><i className="mdi mdi-file"></i> Clone</button>
                                                                <button className="dropdown-item"><i className="mdi mdi-delete-forever btn-icon-prepend"></i> Delete</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <hr/> 
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="row">
                                                        <div className="col-8 col-xl-8">
                                                            <h5 className="font-weight">Energy based rate</h5>
                                                            <p className="font-weight">Price / Kilowatt Hour</p>
                                                        </div>
                                                        <div className="col-4 col-xl-4" style={{textAlign:'center'}}>
                                                            <span style={{color:'green', fontSize:'25px',}}>5</span><span style={{color:'red'}}> %</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <hr/> 
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="row">
                                                        <div className="col-8 col-xl-8">
                                                            <h5 className="font-weight">Time-of-Use rate</h5>
                                                            <p className="font-weight">Price / Hour Occupancy</p>
                                                        </div>
                                                        <div className="col-4 col-xl-4" style={{textAlign:'center'}}>
                                                            <span style={{color:'blue', fontSize:'25px',}}>5</span><span style={{color:'red'}}> %</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <hr/> 
                                                </div>
                                                <div className="col-12 col-xl-12 mb-4 mb-xl-0 table" style={{textAlign:'center'}}>
                                                    <div className="font-weight">Start Time : <span style={{color:'red'}}>01:02 PM</span> </div>
                                                    <div className="font-weight">End Time : <span style={{color:'red'}}>03:02 PM</span></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {/* Edit Surcharges start */}
                            <div className="modalStyle" style={modalSurchargesStyle}>
                                <div className="modalContentStyle" style={{ maxHeight: '680px', overflowY: 'auto' }}>
                                    <span onClick={closeSurchargesModal} style={{ float: 'right', cursor: 'pointer', fontSize:'30px' }}>&times;</span>
                                    <div className="card-body">
                                        <div className="card-title" style={{fontSize:'25px'}}>Edit Surcharges<span style={{color:'red'}}> MORNING</span></div>
                                        <div className="table-responsive pt-3">
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text" style={{color:'black', width:'125px'}}>Name</span>
                                                </div>
                                                <input type="text" className="form-control" />
                                            </div>
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text" style={{color:'black'}}>Rate for <span style={{color:'green'}}>&nbsp; Energy consumption </span> &nbsp;in <span style={{color:'red'}}> &nbsp;/KwH</span></span>
                                                </div>
                                                <input type="text" className="form-control" />
                                            </div>
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text" style={{color:'black'}}>Rate for <span style={{color:'green'}}> &nbsp;Space Occupancy </span> &nbsp;in <span style={{color:'red'}}>&nbsp;<i className="mdi mdi-currency-inr btn-icon-prepend"></i>/Min</span></span>
                                                </div>
                                                <input type="text" className="form-control"/>
                                            </div>
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text" style={{color:'black', width:'125px'}}>Start Time</span>
                                                </div>
                                                <input type="time" className="form-control" />
                                            </div>
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text" style={{color:'black', width:'125px'}}>End Time</span>
                                                </div> 
                                                <input type="time" className="form-control" />
                                            </div>
                                        </div>
                                        <button type="submit" className="btn btn-primary mr-2" style={{marginTop:'10px'}}>Update</button>
                                        <button className="btn btn-danger" onClick={closeSurchargesModal} style={{marginTop:'10px'}}>Cancel</button>
                                    </div>
                                </div>
                            </div>
                            {/* Edit Surcharges start */}
                            {/* Clone Surcharges start */}
                            <div className="modalStyle" style={modalSurchargesCloneStyle}>
                                <div className="modalContentStyle" style={{ maxHeight: '680px', overflowY: 'auto' }}>
                                    <span onClick={closeSurchargesCloneModal} style={{ float: 'right', cursor: 'pointer', fontSize:'30px' }}>&times;</span>
                                    <div className="card-body">
                                        <div className="card-title" style={{fontSize:'25px'}}>Clone Surcharges<span style={{color:'red'}}> MORNING</span></div>
                                        <div className="table-responsive pt-3">
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text" style={{color:'black', width:'125px'}}>Name</span>
                                                </div>
                                                <input type="text" className="form-control" />
                                            </div>
                                            <div className="input-group">
                                                 <div className="input-group-prepend">
                                                    <span className="input-group-text" style={{color:'black'}}>Rate for <span style={{color:'green'}}>&nbsp; Energy consumption </span> &nbsp;in <span style={{color:'red'}}> &nbsp;/KwH</span></span>
                                                </div>
                                                <input type="text" className="form-control" />
                                            </div>
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text" style={{color:'black'}}>Rate for <span style={{color:'green'}}> &nbsp;Space Occupancy </span> &nbsp;in <span style={{color:'red'}}>&nbsp;<i className="mdi mdi-currency-inr btn-icon-prepend"></i>/Min</span></span>
                                                </div>
                                                <input type="text" className="form-control"/>
                                            </div>
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text" style={{color:'black', width:'125px'}}>Start Time</span>
                                                </div>
                                                <input type="time" className="form-control" />
                                            </div>
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text" style={{color:'black', width:'125px'}}>End Time</span>
                                                </div> 
                                                <input type="time" className="form-control" />
                                            </div>
                                        </div>
                                        <button type="submit" className="btn btn-primary mr-2" style={{marginTop:'10px'}}>Update</button>
                                        <button className="btn btn-danger" onClick={closeSurchargesCloneModal} style={{marginTop:'10px'}}>Cancel</button>
                                    </div>
                                </div>
                            </div>
                            {/* Clone Surcharges start */}
                        </div>
                    </div>
                    {/* Footer */}
                    <Footer/>
                </div>         
            </div>    
        </div>
    );
};

export default PricingManagement;
