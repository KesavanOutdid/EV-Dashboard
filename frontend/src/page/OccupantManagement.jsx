import React, { useState } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import * as XLSX from 'xlsx';

const OccupantManagement = ({ userInfo, handleLogout }) => {

    //  Edit Info box start
    const [showForm, setShowForm] = useState(false);

    const toggleForm = () => {
        setShowForm(prevState => !prevState); // Toggles the form visibility
    };

    const closeModal = () => {
        setShowForm(false); // Close the form
    };
    const modalStyle = {
        display: showForm ? 'block' : 'none',
    }
    // Edit Info box end

    // RFIDs Info box start
    const [showFormRFIDs, setShowFormRFIDs] = useState(false);

    const toggleFormRFIDs = () => {
        setShowFormRFIDs(prevState => !prevState); // Toggles the form visibility
    };

    const closeModalRFIDs = () => {
        setShowFormRFIDs(false); // Close the form
    };
    const modalStyleRFIDs = {
        display: showFormRFIDs ? 'block' : 'none',
    }
    // Edit Info box end
    
    // Upload csv
    function handleFileUpload(files) {
        // Use the 'files' parameter to access the selected file(s)
        // For instance, to log the selected file names:
        for (let i = 0; i < files.length; i++) {
            alert("Selected file:", files[i].name);
            // console.log("Selected file:", files[i].name);
            // You can perform other operations with the file(s) here
        }
    }

    // Download file
    function downloadPDF() {
        // Replace 'your_pdf_path' with the path to your PDF file
        const pdfUrl = 'images/PlasticBox.pdf'; // Example: Replace with your PDF's path
        
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.download = 'your_pdf_file.pdf'; // Example: Replace with your PDF's name
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    // Excel
    function downloadExcel() {
        const data = [
            // Your data here, for example:
            ['Name', 'Age'],
            ['Kesavan', 25],
            ['Vivek', 27],
            ['Pandi', 27],
        ];
      
        const ws = XLSX.utils.aoa_to_sheet(data);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
        
        const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
        const blob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
        
        const fileName = 'data.xlsx'; // Replace with your desired file name
      
        // Create a download link and trigger the download
        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = fileName;
        link.click();
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
                                        <h3 className="font-weight-bold">Occupant Management</h3>
                                        <p className="font-weight">Manage occupant of a parking space, allocate charger's, and set up RFID card. </p>
                                    </div>
                                    <div className="col-12 col-xl-4">
                                        <div className="justify-content-end d-flex">
                                            <div>
                                                <label htmlFor="fileInput" className="btn btn-info btn-icon-text">
                                                    <i className="ti-upload btn-icon-prepend"></i>
                                                    Upload CSV
                                                </label>
                                                <input type="file" id="fileInput" style={{ display: 'none' }} onChange={(e) => handleFileUpload(e.target.files)}/>
                                            </div> &nbsp;&nbsp;
                                            <div>
                                                <label className="btn btn-success btn-icon-text" onClick={downloadPDF}>
                                                    <i className="ti-download btn-icon-prepend"></i>
                                                    Download Template
                                                </label>
                                            </div>
                                            {/* <button type="file" className="btn btn-info btn-icon-text"><i className="ti-upload btn-icon-prepend"></i>Upload CSV</button> &nbsp;&nbsp; */}
                                            {/* <button type="button" className="btn btn-success btn-icon-text"><i className="ti-download btn-icon-prepend"></i>Download Template</button> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 grid-margin stretch-card">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-md-12 grid-margin">
                                                <div className="row">
                                                    <div className="col-4 col-xl-8">
                                                        <h6 className="card-title" style={{paddingTop:'10px'}}>List Of Occupant</h6>  
                                                    </div>
                                                    <div className="col-8 col-xl-4">
                                                        <div className="input-group">
                                                            <div className="input-group-prepend hover-cursor" id="navbar-search-icon">
                                                                <span className="input-group-text" id="search">
                                                                <i className="icon-search"></i>
                                                                </span>
                                                            </div>
                                                            <input type="text" className="form-control" placeholder="Search now" aria-label="search" aria-describedby="search" autoComplete="off"/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="table-responsive">
                                            <table className="table table-striped">
                                                <thead style={{textAlign:'center'}}>
                                                    <tr> 
                                                        <th>Sl.No</th>
                                                        <th>Occupant ID</th>
                                                        <th>User</th>
                                                        <th>Quota</th>
                                                        <th>Access To Email</th>
                                                        <th>Assigned Chargers</th>
                                                        <th>Configured RFID</th>
                                                        <th>Operation</th>
                                                    </tr>
                                                </thead>
                                                <tbody style={{textAlign:'center'}}>
                                                    <tr>
                                                        <td>1</td>
                                                        <td>B202</td>
                                                        <td> 
                                                            <h6 style={{color:'green'}}>Resident Name 01</h6>
                                                            <h6 style={{color:'red'}}>9856024581</h6>
                                                        </td>
                                                        <td>
                                                            <h6><span style={{color:'red'}}>0/</span><span style={{color:'green'}}>100</span></h6>
                                                        </td>
                                                        <td>
                                                            <h6 className="divStyleOccpant">mail4satya</h6><br></br>
                                                        </td>
                                                        <td>
                                                            <h6 className="divStyleTwoOccpant">39060600919</h6><br></br>
                                                        </td> 
                                                        <td>
                                                            <h6 className="divStyleThreeOccpant">C387C828|19 Mar 2023</h6><br></br>
                                                        </td>
                                                        <td>
                                                            <button type="button" className=" btn btn-outline-success btn-icon-text" onClick={toggleForm} style={{marginBottom:'10px', marginRight:'10px'}}><i className="mdi mdi-pencil btn-icon-prepend"></i>Edit Info</button>
                                                            <button type="button" className="btn btn-outline-danger btn-icon-text" style={{marginBottom:'10px', marginRight:'10px'}}><i className="mdi mdi-delete-forever btn-icon-prepend"></i>Delete</button><br></br>
                                                            {/* Edit Info box start */}
                                                            <div className="modalStyle" style={modalStyle}>
                                                                <div className="modalContentStyle" style={{ maxHeight: '650px', overflowY: 'auto' }}>
                                                                    <span onClick={closeModal} style={{ float: 'right', cursor: 'pointer', fontSize:'30px' }}>&times;</span>
                                                                    <div className="card">
                                                                        <div className="card-body">
                                                                            <h4 className="card-title">Edit Occupant details of : <span style={{color:'red'}}>B202</span></h4>
                                                                            <div className="table-responsive pt-3">
                                                                                <div className="input-group">
                                                                                    <div className="input-group-prepend">
                                                                                        <span className="input-group-text" style={{color:'black', width:'125px'}}>Hardware ID</span>
                                                                                    </div>
                                                                                    <input type="text" className="form-control input-group-text" style={{color:'black'}} defaultValue="B202"/>
                                                                                </div>
                                                                                <div className="input-group">
                                                                                    <div className="input-group-prepend">
                                                                                        <span className="input-group-text" style={{color:'black', width:'125px'}}>Occupant Name</span>
                                                                                    </div>
                                                                                    <input type="text" className="form-control" />
                                                                                </div>
                                                                                <div className="input-group">
                                                                                    <div className="input-group-prepend">
                                                                                        <span className="input-group-text" style={{color:'black', width:'125px'}}>Phone</span>
                                                                                    </div>
                                                                                    <input type="text" className="form-control" />
                                                                                </div>
                                                                                <div className="input-group">
                                                                                    <div className="input-group-prepend">
                                                                                        <span className="input-group-text" style={{color:'black', width:'125px'}}>Allocate Quota</span>
                                                                                    </div>
                                                                                    <input type="text" className="form-control" />
                                                                                </div>
                                                                                <div className="input-group">
                                                                                    <div className="input-group-prepend">
                                                                                        <span className="input-group-text" style={{color:'black', width:'125px'}}>User ID</span>
                                                                                    </div>
                                                                                    <input type="text" className="form-control" />
                                                                                </div>
                                                                                <div className="input-group">
                                                                                    <div className="input-group-prepend">
                                                                                        <span className="input-group-text" style={{color:'black', width:'125px'}}>Chargers</span>
                                                                                    </div>
                                                                                    <input type="text" className="form-control" />
                                                                                </div>
                                                                                <div className="input-group">
                                                                                    <div className="input-group-prepend">
                                                                                        <span className="input-group-text" style={{color:'black', width:'125px'}}>RFIDs</span>
                                                                                    </div>
                                                                                    <input type="text" className="form-control"/>
                                                                                    <span className="input-group-text mdi mdi-signal-variant"  onClick={toggleFormRFIDs} style={{color:'black', width:'15px'}}></span>
                                                                                </div>
                                                                            </div>
                                                                            <button type="submit" className="btn btn-primary mr-2"style={{marginTop:'10px'}}>Update Information</button>
                                                                            <button className="btn btn-danger" onClick={closeModal} style={{marginTop:'10px'}}>Cancel</button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            {/* Edit Info box end */}
                                                            {/* RFIDs Info box start */}
                                                            <div className="modalStyle" style={modalStyleRFIDs}>
                                                                <div className="modalContentStyle" style={{ maxHeight: '650px', overflowY: 'auto' }}>
                                                                    <span onClick={closeModalRFIDs} style={{ float: 'right', cursor: 'pointer', fontSize:'30px' }}>&times;</span>
                                                                    <div className="card">
                                                                        <div className="card-body">
                                                                            <h4 className="card-title">Update RFID card info for : <span style={{color:'red'}}>B202</span></h4>
                                                                            <div className="table-responsive pt-3">
                                                                                <div className="input-group">
                                                                                    <div className="input-group-prepend">
                                                                                        <span className="input-group-text" style={{color:'black', width:'125px'}}>C387C828</span>
                                                                                    </div>
                                                                                    <input type="date" className="form-control" />
                                                                                </div>
                                                                            </div>
                                                                            <button type="submit" className="btn btn-primary mr-2"style={{marginTop:'10px'}}>Save</button>
                                                                            <button className="btn btn-danger" onClick={closeModalRFIDs} style={{marginTop:'10px'}}>Cancel</button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            {/* RFIDs Info box end */}
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>2</td>
                                                        <td>B203</td>
                                                        <td> 
                                                            <h6 style={{color:'green'}}>Resident Name 01</h6>
                                                            <h6 style={{color:'red'}}>9856024581</h6>
                                                        </td>
                                                        <td>
                                                            <h6><span style={{color:'red'}}>0/</span><span style={{color:'green'}}>100</span></h6>
                                                        </td>
                                                        <td>
                                                            <h6 className="divStyleOccpant">residentEmail01</h6><br></br>
                                                        </td>
                                                        <td>
                                                            <h6 className="divStyleTwoOccpant">ODT63434</h6><br></br>
                                                        </td> 
                                                        <td>
                                                            <h6 className="divStyleThreeOccpant">ABVC1234|19 Mar 2023</h6><br></br>
                                                            <h6 className="divStyleThreeOccpant">ABVC1235|19 Mar 2023</h6><br></br>

                                                        </td>
                                                        <td>
                                                            <button type="button" className=" btn btn-outline-success btn-icon-text" onClick={toggleForm} style={{marginBottom:'10px', marginRight:'10px'}}><i className="mdi mdi-pencil btn-icon-prepend"></i>Edit Info</button>
                                                            <button type="button" className="btn btn-outline-danger btn-icon-text" style={{marginBottom:'10px', marginRight:'10px'}}><i className="mdi mdi-delete-forever btn-icon-prepend"></i>Delete</button><br></br>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>3</td>
                                                        <td>B201</td>
                                                        <td> 
                                                            <h6 style={{color:'green'}}>Resident Name 01</h6>
                                                            <h6 style={{color:'red'}}>9856024581</h6>
                                                        </td>
                                                        <td>
                                                            <h6><span style={{color:'red'}}>0/</span><span style={{color:'green'}}>100</span></h6>
                                                        </td>
                                                        <td>
                                                            <h6 className="divStyleOccpant">residentEmail03</h6><br></br>
                                                        </td>
                                                        <td>
                                                            <h6 className="divStyleTwoOccpant">ODT63434</h6><br></br>
                                                        </td> 
                                                        <td>
                                                            <h6 className="divStyleThreeOccpant">ABVC1236|19 Mar 2023</h6><br></br>
                                                        </td>
                                                        <td>
                                                            <button type="button" className=" btn btn-outline-success btn-icon-text" onClick={toggleForm} style={{marginBottom:'10px', marginRight:'10px'}}><i className="mdi mdi-pencil btn-icon-prepend"></i>Edit Info</button>
                                                            <button type="button" className="btn btn-outline-danger btn-icon-text" style={{marginBottom:'10px', marginRight:'10px'}}><i className="mdi mdi-delete-forever btn-icon-prepend"></i>Delete</button><br></br>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <button type="button" style={{padding:'10px'}} className='btn btn-link' onClick={downloadExcel}>Excel</button>
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
  );
};

export default OccupantManagement
