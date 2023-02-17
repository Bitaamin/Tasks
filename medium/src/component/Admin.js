import React, { useState, useEffect } from 'react';
import { BarChart } from './BarChart';

export default function Admin() {
   const [data, setData] = useState([]);
   // const [loading, setData] = useState();
   // const [data, setData] = useState();

   useEffect(() => {
      fetch("http://192.168.1.50:4040/news")
         .then((response) => response.json())
         .then((dt) => {
            console.log(dt.news);
            setData(dt.news);
         })
   }, [])



   return (
      <div>
         <div className="navbar bg-dark flex-nowrap">
            <a href="#" className="col-md-3 navbar-brand text-light">
               Company Name
            </a>
            <input type="text" className="w-100 form-control bg-dark border-0" />
            <div className="nav text-nowrap">
               <span className="text-light"> Log Out </span>
            </div>
         </div>
         <div className='container-fluid'>
            <div className='row'>
               <div className='col-md-3'>
                  <div className='nav bg-light flex-column'>
                     <div className='nav-item'>
                        <a className='nav-link'>Dashboard</a>
                     </div>
                     <div className='nav-item'>
                        <a className='nav-link'>News</a>
                     </div>
                     <div className='nav-item'>
                        <a className='nav-link'>Users</a>
                     </div>
                  </div>
               </div>
               <div className='col-md-9'>
                  <div className='row my-4'>
                     <div className='col-md-4'>
                        <div className='card p-3'>
                           <h4 className='card-title text-warning'>Users</h4>
                           <div className='d-flex justify-content-between align-items-center'>
                              <i className='bi bi-people' style={{ fontSize: "40px" }}></i>
                              <h3>4500</h3>
                           </div>
                        </div>
                     </div>
                     <div className='col-md-4'>
                        <div className='card p-3'>
                           <h4 className='card-title text-warning'>News</h4>
                           <div className='d-flex justify-content-between align-items-center'>
                              <i className='bi bi-newspaper' style={{ fontSize: "40px" }}></i>
                              <h3>4500</h3>
                           </div>
                        </div>
                     </div>
                     <div className='col-md-4'>
                        <div className='card p-3'>
                           <h4 className='card-title text-warning'>Category</h4>
                           <div className='d-flex justify-content-between align-items-center'>
                              <i className='bi bi-list-nested' style={{ fontSize: "40px" }}></i>
                              <h3>4500</h3>
                           </div>
                        </div>
                     </div>
                     <div className='row'>
                        <BarChart />
                        <div className='table-responsive'>
                           <table className='table'>
                              <thead>
                                 <tr>
                                    <th>#</th>
                                    <th>Title</th>

                                    <th>Category</th>
                                    <th>isTrending</th>
                                 </tr>
                              </thead>
                              <tbody>
                                 {
                                    data.map(({ _id, title, isTrending, body, category }, index) => {
                                       return (
                                          <tr key={index}>
                                             <td>{index + 1}</td>
                                             <td>{title}</td>
                                             <td>{category}</td>
                                             {console.log(isTrending)}
                                             <td>{isTrending ? <span className='badge bg-success'>Yes</span> : <span className='badge bg-danger'>No</span>
                                             }
                                             </td>
                                          </tr>
                                       )
                                    })
                                 }
                              </tbody>
                           </table>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}
