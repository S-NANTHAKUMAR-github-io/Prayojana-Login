import React from 'react'
import './Navbar.css'
import logo from '../images/image1.ico'
import SeIcon from '../images/Icon.png'
import bellicon from '../images/bellicon.png'
import Avatar from '../images/Avatar.png'
import { Link, Route, Routes } from 'react-router-dom'
import Dashboard from '../CbCmp/Dashboard'
import InteractionPage from '../CbCmp/InteractionPage'
import TaskPage from '../CbCmp/TaskPage'
import Calander from '../CbCmp/Calander'
import Member from '../CbCmp/Member'
import Report from '../CbCmp/Report'
import Admin from '../CbCmp/Admin'
import Setup from '../CbCmp/Setup'



function Navbar() {
  return (
    <>
      <div>
        <div className='carebuddy-navbar'>
          <div className='frame'>
            <div className='Link-frame'>
              <div className='logo-frame'>
                {/* Prayojana logo */}
                <div className='logo'>
                  <img src={logo} alt='prayojana-logo' />
                </div>
              </div>
              {/* Dashboard link */}
              <div className='dashboard-outer'>
                <div className='dashboard-frame'>
                  <div className='dashboard-text'>
                    <Link to='/dashboard'><h5>Dashboard</h5></Link>
                    <div className='bottom-border1'></div>
                  </div>
                </div>
              </div>

              {/* Interaction link */}
              <div className='interaction-outer'>
                <div className='interaction-frame'>
                  <div className='interaction-text'>
                    <Link to='/interaction'><h5>Interaction</h5></Link>
                    <div className='bottom-border2'></div>
                  </div>
                </div>
              </div>

              {/* Task link */}
              <div className='task-outer'>
                <div className='task-frame'>
                  <div className='task-text'>
                    <Link to='/task'><h5>Tasks</h5></Link>
                    <div className='bottom-border3'></div>
                  </div>
                </div>
              </div>

              {/* Calander link */}
              <div className='calander-outer'>
                <div className='calander-frame'>
                  <div className='calander-text'>
                    <Link to='/calander'><h5>Calander</h5></Link>
                    <div className='bottom-border4'></div>
                  </div>
                </div>
              </div>

              {/* Members link */}
              <div className='member-outer'>
                <div className='member-frame'>
                  <div className='member-text'>
                    <Link to='/member'><h5>Members</h5></Link>
                    <div className='bottom-border5'></div>
                  </div>
                </div>
              </div>

              {/* Report link */}
              <div className='report-outer'>
                <div className='report-frame'>
                  <div className='report-text'>
                    <Link to='/report'><h5>Report</h5></Link>
                    <div className='bottom-border6'></div>
                  </div>
                </div>
              </div>

              {/* Admin link */}
              <div className='admin-outer'>
                <div className='admin-frame'>
                  <div className='admin-text'>
                    <Link to='/admin'><h5>Admin</h5></Link>
                    <div className='bottom-border7'></div>
                  </div>
                </div>
              </div>

              {/* Setup link */}
              <div className='setup-outer'>
                <div className='setup-frame'>
                  <div className='setup-text'>
                    <Link to='/setup'><h5>Setup</h5></Link>
                    <div className='bottom-border8'></div>
                  </div>
                </div>
              </div>

              {/* Search and Profile */}
              <div className='search-pf'>
                <div className='se-pf-content'>
                  <div className='se-area'>
                    <div className='se-field'>
                      <input type='search' placeholder='Search' />
                      <div className='se-icon-box'>
                        <div className='se-icon'>
                          {/* <img src={SeIcon} alt="search-icon" /> */}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Trailing content */}
                  <div className='trailing-content'>
                    <div className='outer-bell'>
                      <div className='inner-bell'>
                        <div className='bell'>
                        <img src={bellicon} alt='bellicon' />
                        </div>
                      </div>
                    </div>
                    {/* Avatar */}
                    <div className='avatar'>
                      <div className='avatar-pic'>
                        <img src={Avatar} alt='avatar' />
                      </div>
                    </div>
                  </div>
                </div>


              </div>




              {/* Divide line */}
              <div className='divide-line'></div>










            </div>  {/*LinkFrame-end */}



          </div>{/*frame-ending */}

          {/* End Line */}
          <div className='line'></div>


        </div>  {/*carebuddy-navbar-ending */}
      </div>

      {/* Routes */}

      <Routes>
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/interaction' element={<InteractionPage />} />
        <Route path='/task' element={<TaskPage />} />
        <Route path='/calander' element={<Calander />} />
        <Route path='member' element={<Member />} />
        <Route path='report' element={<Report />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/setup' element={<Setup />} />
      </Routes>
    </>
  )
}

export default Navbar