import React, { useState, useEffect,  useRef } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import axios from 'axios';
import Chart from 'chart.js/auto';
const Dashboard = ({ userInfo, handleLogout }) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [filteredData] = useState([]);
    const [posts, setPosts] = useState([]);

    const chartRef = useRef(null);
    //  console.log(data, 'total data');
    // Get table data
    useEffect(() => {
        // Define the API URL based on the event detail
        const url = `http://192.168.1.70:9090/GetAllChargerDetails`;
        axios.get(url).then((res) => {
            // console.log('Data fetched successfully:', res.data);
            setData(res.data); // Assuming the data you need is inside the 'data' property
            setLoading(false);
        })
           .catch((err) => {
            console.error('Error fetching data:', err);
            setError('Error fetching data. Please try again.');
            setLoading(false);
          });
    }, []);

    // Faulty data onclick show box data
    const [isBoxVisible, setIsBoxVisible] = useState(false);
    const toggleBoxVisibility = () => {
      setIsBoxVisible(!isBoxVisible);
    };

    // Timestamp data 
    function formatTimestamp(originalTimestamp) {
        const date = new Date(originalTimestamp);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const seconds = String(date.getSeconds()).padStart(2, '0');
        const formattedDate = `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
        return formattedDate;
    }

    // Search data 
    const handleSearchInputChange = (e) => {
        const inputValue = e.target.value.toUpperCase();
        // Filter the data array based on the input value (converted to uppercase)
        const filteredData = data.filter((item) =>
          item.ChargerID.toString().toUpperCase().includes(inputValue)
        );
        // Update the search state with the filtered results
        setPosts(filteredData); // Set posts to the filteredData
      };

    // Update table data 'data', and 'filteredData' 
    useEffect(() => {
        switch (data) {
        case 'filteredData':
            setPosts(filteredData);
            break;
        default:
            setPosts(data);
            break;
        }
    }, [data, filteredData]);
  
    // Online, Offline and Faulty charger lengths 
    const onlineStatus = 'Charging'; // Define the status for online chargers
    const offlineStatuses = [' ', 'pending', 'Available']; // Define other statuses for offline chargers
    const faultyStatus = 'Faulted'; // Define other statuses for faulty chargers
    
    const onlineChargers = data.filter((charger) => charger && charger.status && charger.status.trim() === onlineStatus);
    const offlineChargers = data.filter((charger) => charger && charger.status && offlineStatuses.includes(charger.status.trim()));
    const faultyChargers = data.filter((charger) => charger && charger.status && charger.status.trim() === faultyStatus);
    
    // Total, Online, Offline, and Faulted progressbar with data length
    const totalChargers = data.length + onlineChargers.length + offlineChargers.length + faultyChargers.length;

    const totalPercentage = (data.length / totalChargers) * 100;
    const onlinePercentage = (onlineChargers.length / totalChargers) * 100;
    const offlinePercentage = (offlineChargers.length / totalChargers) * 100;
    const faultyPercentage = (faultyChargers.length / totalChargers) * 100;
    
    // Chart data 
    useEffect(() => {
        const xValues = ['Total', 'Online', 'Offline']; // Adjusted order of labels
        const yValues = [
          data.length,
          onlineChargers.length,
          offlineChargers.length
        ];
        const barColors = [
          "#4B46AC",
          "#57B657",
          "#FF4747"
        ];
    
        if (chartRef.current) {
          chartRef.current.destroy();
        }
    
        const ctx = document.getElementById('myChart');
        chartRef.current = new Chart(ctx, {
          type: 'doughnut',
          data: {
            labels: xValues,
            datasets: [{
              backgroundColor: barColors,
              data: yValues
            }]
          },
          options: {
            plugins: {
              title: {
                display: true,
              }
            }
          }
        });
    
        return () => {
          if (chartRef.current) {
            chartRef.current.destroy();
          }
        };
      }, [data, onlineChargers.length, offlineChargers.length]);
    
      const fetchDataAndUpdateChart = () => {
        setData([...Array(20)]);
      };
    
      useEffect(() => {
        fetchDataAndUpdateChart();
      }, []);

    return (
        <div className='container-scroller'>
            {/* Header */}
            {/* <Header/> */}
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
                                        <h3 className="font-weight-bold">Welcome to <span style={{color:'#4B49AC'}}>{userInfo.email}</span>,</h3>
                                        <h4 className="font-weight-bold">Charger's Dashboard</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 grid-margin stretch-card">
                                <div className="card tale-bg">
                                    <div className="card-people mt-auto">
                                        <img src="images/dashboard/ev_bg_image-2.png" alt="people" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 grid-margin transparent">
                                <div className="row">
                                    <div className="col-md-6 mb-4 stretch-card transparent">
                                        <div className="card card-tale">
                                            <div className="card-body">
                                                <h4 className="mb-4">Todays Chargers</h4>
                                                <h3 className="fs-30 mb-2">{data.length} Charger's</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-4 stretch-card transparent">
                                        <div className="card card-dark-blue">
                                            <div className="card-body">
                                                <p className="mb-4">Total Bookings</p>
                                                <p className="fs-30 mb-2">61344</p>
                                                <p>22.00% (30 days)</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 mb-4 mb-lg-0 stretch-card transparent">
                                        <div className="card card-light-blue">
                                            <div className="card-body">
                                                <p className="mb-4">Number of Meetings</p>
                                                <p className="fs-30 mb-2">34040</p>
                                                <p>2.00% (30 days)</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 stretch-card transparent">
                                        <div className="card card-light-danger">
                                            <div className="card-body">
                                                <p className="mb-4">Number of Clients</p>
                                                <p className="fs-30 mb-2">47033</p>
                                                <p>0.22% (30 days)</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 grid-margin stretch-card">
                                <div className="card position-relative">
                                    <div className="card-body">
                                        <div id="detailedReports" className="carousel slide detailed-report-carousel position-static pt-2" data-ride="carousel">
                                            <div className="carousel-inner">
                                                <div className="carousel-item active">
                                                    <div className="row">
                                                        <div className="col-md-12 col-xl-3 d-flex flex-column justify-content-start">
                                                            <div className="ml-xl-4 mt-3">
                                                                <p className="card-title">Reports</p>
                                                                <h1 className="text-primary">1000</h1>
                                                                <h3 className="font-weight-500 mb-xl-4 text-primary">Charged cycles</h3>
                                                                <p className="mb-2 mb-xl-0">This achievement underscores the durability of our chargers, ensuring sustained functionality. It also reflects our commitment to providing a reliable and long-lasting charging infrastructure for electric vehicles.</p>
                                                            </div>  
                                                        </div>
                                                        <div className="col-md-12 col-xl-9">
                                                            <div className="row">
                                                                <div className="col-md-6 border-right">
                                                                    <div className="table-responsive mb-3 mb-md-0 mt-3">
                                                                        <table className="table table-borderless report-table">
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td className="text-muted"><h5>Total</h5>Chargers installed</td>
                                                                                    <td className="w-100 px-0">
                                                                                        <div className="progress progress-md mx-4">
                                                                                            <div className="progress-bar bg-primary" role="progressbar" style={{width:`${totalPercentage}%`}}></div>
                                                                                        </div>
                                                                                    </td>
                                                                                    <td><h5 className="font-weight-bold mb-0">{data.length}</h5></td>
                                                                                </tr>
                                                                                <tr>
                                                                                <td className="text-muted"><h5>Private</h5>Total Chargers</td>
                                                                                    <td className="w-100 px-0">
                                                                                        <div className="progress progress-md mx-4">
                                                                                            <div className="progress-bar bg-info" role="progressbar" style={{width:'30%'}}></div>
                                                                                        </div>
                                                                                    </td>
                                                                                    <td><h5 className="font-weight-bold mb-0">583</h5></td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td className="text-muted"><h5>Public</h5>Total Chargers</td>
                                                                                    <td className="w-100 px-0">
                                                                                        <div className="progress progress-md mx-4">
                                                                                            <div className="progress-bar bg-pink" role="progressbar"  style={{width:'95%', backgroundColor:'#ff59eb'}}></div>
                                                                                        </div>
                                                                                    </td>
                                                                                    <td><h5 className="font-weight-bold mb-0">924</h5></td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td className="text-muted"><h5>Online</h5>Currently Charging</td>
                                                                                    <td className="w-100 px-0">
                                                                                        <div className="progress progress-md mx-4">
                                                                                            <div className="progress-bar bg-success" role="progressbar"  style={{width:`${onlinePercentage}%`}}></div>
                                                                                        </div>
                                                                                    </td>
                                                                                    <td><h5 className="font-weight-bold mb-0">{onlineChargers.length}</h5></td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td className="text-muted"><h5>Offline</h5>Not live</td>
                                                                                    <td className="w-100 px-0">
                                                                                        <div className="progress progress-md mx-4">
                                                                                            <div className="progress-bar bg-danger" role="progressbar"  style={{width:`${offlinePercentage}%`}}></div>
                                                                                        </div>
                                                                                    </td>
                                                                                    <td><h5 className="font-weight-bold mb-0">{offlineChargers.length}</h5></td>
                                                                                </tr>
                                                                                <tr onClick={toggleBoxVisibility} className="custom-hover">
                                                                                    <td className="text-muted"><h5>Faulty</h5>Not live</td>
                                                                                    <td className="w-100 px-0">
                                                                                        <div className="progress progress-md mx-4">
                                                                                            <div className="progress-bar bg-warning" role="progressbar"  style={{width:`${faultyPercentage}%`}}></div>
                                                                                        </div>
                                                                                    </td>
                                                                                    <td><h5 className="font-weight-bold mb-0">{faultyChargers.length}</h5></td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6 mt-3">
                                                                    <div className="report-chart">
                                                                        <div style={{ width: '70%', height: '70%', margin: 'auto', textAlign: 'center' }}>
                                                                            <canvas id="myChart" />
                                                                        </div>  
                                                                    </div>
                                                                    {/* <div>
                                                                        <div className="report-chart">
                                                                            <div className="d-flex justify-content-between mx-4 mx-xl-5 mt-3">
                                                                                <div className="d-flex align-items-center">
                                                                                    <div className="mr-3" style={{width:'20px', height:'20px', borderRadius:'50%', backgroundColor:' #4B49AC'}}></div>
                                                                                        <p className="mb-0">Total</p>
                                                                                </div>
                                                                                        <p className="mb-0">{data.length}</p>
                                                                                </div>
                                                                            <div className="d-flex justify-content-between mx-4 mx-xl-5 mt-3">
                                                                                <div className="d-flex align-items-center">
                                                                                    <div className="mr-3" style={{width:'20px', height:'20px', borderRadius:'50%', backgroundColor:' #57B657'}}></div>
                                                                                    <p className="mb-0">Online </p>
                                                                                </div>
                                                                                        <p className="mb-0">{onlineChargers.length}</p>
                                                                            </div>
                                                                            <div className="d-flex justify-content-between mx-4 mx-xl-5 mt-3">
                                                                                <div className="d-flex align-items-center">
                                                                                    <div className="mr-3" style={{width:'20px', height:'20px', borderRadius:'50%', backgroundColor:' #FF4747'}}></div>
                                                                                    <p className="mb-0">Offline</p>
                                                                                </div>
                                                                                <p className="mb-0">{offlineChargers.length}</p>
                                                                            </div>
                                                                        </div>
                                                                    </div> */}
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
                        </div>
                        {isBoxVisible && (
                            <div className="row">
                                {faultyChargers.map((charger, index) => (
                                <div key={index} className="col-md-3 mb-4 stretch-card transparent">
                                    <div className="card card-tale">
                                        <div className="card-body" style={{backgroundImage:'url("images/dashboard/hand-holding-ev.png")', backgroundSize: "cover", backgroundRepeat: "no-repeat"}}>
                                            <div style={{padding:'10px',borderRadius:'10px' ,color:'black'}}>
                                                <h4>CHARGER :  {charger.ChargerID}</h4>
                                                <h5>{formatTimestamp(charger.timestamp)}</h5>
                                            </div>
                                                <hr></hr>
                                            <div style={{padding:'10px',borderRadius:'10px' ,background:'#000000ab'}}>
                                                <h5>Connector : <span>{charger.connector}</span></h5>
                                                <h5>Error : <span style={{color:'red'}}>{charger.errorCode}</span></h5>
                                                <h5>Status: <span style={{color:'yellow'}}>{charger.status}</span></h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                  ))}
                            </div>  
                        )}
                        <div className="row">
                            <div className="col-lg-12 grid-margin stretch-card">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-md-12 grid-margin">
                                                <div className="row">
                                                    <div className="col-4 col-xl-8">
                                                        <h4 className="card-title" style={{paddingTop:'10px'}}>List Of Chargers</h4>  
                                                    </div>
                                                    <div className="col-8 col-xl-4">
                                                        <div className="input-group">
                                                            <div className="input-group-prepend hover-cursor" id="navbar-search-icon">
                                                                <span className="input-group-text" id="search">
                                                                <i className="icon-search"></i>
                                                                </span>
                                                            </div>
                                                            <input type="text" className="form-control" placeholder="Search now" aria-label="search" aria-describedby="search" autoComplete="off" onChange={handleSearchInputChange}/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="table-responsive" style={{ maxHeight: '300px', overflowY: 'auto' }}>
                                            <table className="table table-striped">
                                                <thead style={{textAlign:'center'}}>
                                                    <tr> 
                                                       <th>Sl.No</th>
                                                        <th>Type</th>
                                                        <th>Capacities</th>
                                                        <th>Charger ID</th>
                                                        <th>Date / Time</th>
                                                        <th>Tag ID</th>
                                                        <th>Connector</th>
                                                        <th>Error</th>
                                                        <th>Status</th>
                                                    </tr>
                                                </thead>
                                                <tbody style={{textAlign:'center'}}>
                                                    {loading ? (
                                                        <tr>
                                                        <td colSpan="9" style={{ marginTop: '50px', textAlign: 'center' }}>Loading...</td>
                                                        </tr>
                                                    ) : error ? (
                                                        <tr>
                                                        <td colSpan="9" style={{ marginTop: '50px', textAlign: 'center' }}>Error: {error}</td>
                                                        </tr>
                                                    ) : (
                                                        Array.isArray(posts) && posts.length > 0 ? (
                                                            posts.map((dataItem, index) => (
                                                            <tr key={index}>
                                                            <td>{index + 1}</td>
                                                            <td>{dataItem.type}</td>
                                                            {/* <td>{dataItem.capacity}</td> */}
                                                            <td className="py-1">
                                                                <img src={`images/dashboard/${dataItem.capacity}kw.png`} alt="img" />
                                                            </td>                                                            
                                                            <td>{dataItem.ChargerID}</td>
                                                            <td>{dataItem.timestamp ? (
                                                                <span>{formatTimestamp(dataItem.timestamp)}</span>
                                                                ) : (
                                                                <span>-</span>
                                                                )}
                                                            </td>
                                                            <td>{dataItem.ChargerTagID}</td>
                                                            <td>{dataItem.connector}</td>
                                                            <td>{dataItem.errorCode ? (
                                                                 <span>{dataItem.errorCode}</span>
                                                                 ) : (
                                                                 <span>-</span>
                                                            )}</td>
                                                            <td>{dataItem.status ? (
                                                                 <span>{dataItem.status}</span>
                                                                 ) : (
                                                                 <span>-</span>
                                                            )}</td>
                                                            </tr>
                                                        ))
                                                        ) : (
                                                        <tr>
                                                            <td colSpan="9" style={{ marginTop: '50px', textAlign: 'center' }}>No devices found.</td>
                                                        </tr>
                                                        )
                                                    )}
                                                </tbody>
                                            </table>
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
                // http://198.168.1.24:4214
export default Dashboard