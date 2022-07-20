import React from 'react'
import './main.css';
import './bootstrap.min.css';
import './jquery-nestable.css';
import './bootstrap-datepicker.min.css';
import { useEffect, useState } from 'react';
import axios from '../Axios/axios';
import Navbar from '../Navbar/Navbar';
export const Task = () => {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
      async function fetchData() {
          const response = await axios.get('/tasks', { new: true });
          setTasks(response.data);
          return response;
      }
      fetchData();
  }, []);
  return (
    <div id="main_content" style = {{width: '100%'}}>
      <div className="page">
        <div className="section-body">
          <div className="container-fluid">
          <div className="tab-content taskboard">
            <div className="tab-pane fade show active" id="TaskBoard-list" role="tabpanel">
              <div className="row">
                <div className="col-md-12">
                  <div className="table-responsive">
                    <table className="table table-hover table-vcenter mb-0 table_custom spacing8 text-nowrap">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Task</th>
                          <th>Team</th>
                          <th>Duration</th>
                          <th>Action</th>
                          <th className="w200"></th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          tasks.map((task,index) => {
                            return (
                                  <tr>
                                    <td>{++index}</td>
                                    <td>
                                        <h6 className="mb-0">{task.name}</h6>
                                        <span>{tasks.description}</span>
                                    </td>
                                    <td>
                                      <h6 className="mb-0">{task.team}</h6>
                                    </td>
                                    <td>
                                        <div className="text-info">Start: 3 Jun 2019</div>
                                        <div className="text-pink">End: 15 Jun 2019</div>
                                    </td>
                                    <td>
                                        <span className="tag tag-blue">{task.priority}</span>
                                    </td>
                                    <td>
                                      <div className="clearfix">
                                        <div className="float-left"><strong>0%</strong></div>
                                        <div className="float-right"><small className="text-muted">Progress</small></div>
                                      </div>
                                      <div className="progress progress-xs">
                                        <div className="progress-bar bg-azure" role="progressbar" aria-valuenow="40"
                                            aria-valuemin="0" aria-valuemax="100" style={{width:"0%"}}></div>
                                      </div>
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
      </div>
    </div>
)
}
export default Task;