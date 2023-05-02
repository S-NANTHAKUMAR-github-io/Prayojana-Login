import React, { useState, useEffect, useReducer } from 'react'
import './Members.css'
import styles from './Members.module.css'
import {Link,Route,Routes,Outlet} from 'react-router-dom'
import MemberProfile from '../MembersCmp/MemberProfile';

function Member() {

  // for color card
  const [Color, setColor] = useState([
    { id: 1, text: "harness real-time e-markets", color: "red" },
    { id: 2, text: "synergize scalable supply-chains", color: "blue" },
    { id: 3, text: "e-enable strategic applications", color: "yellow" }

  ]);


  // function for color card
  function getColor(text) {
    switch (text) {
      case "harness real-time e-markets":
        return "red";
      case "synergize scalable supply-chains":
        return "blue";
      case "e-enable strategic applications":
        return "yellow";
      default:
        return "black";
    }
  }


  //for fetching data
  const [Count, setCount] = useState(0)
  const [data, setData] = useState([])

  // for pagination

  const [CurrentPage, setCurrentPage] = useState(1)
  const recordsPerPage = 3;
  const lastIndex = CurrentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = data.slice(firstIndex, lastIndex)
  const npages = Math.ceil(data.length / recordsPerPage)
  const numbers = [...Array(npages + 1).keys()].slice(1)

//api fetching
  useEffect(() => {
    async function countMember() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/');
        const data = await response.json();
        setCount(data.length);
        setData(data);
        setColor(data);
      }
      catch (error) {
        console.error(error)
      }
    }

    countMember();
  }, [])

  return (
    <div>
      {/* Total outer frame */}
      <div className='CB-Frame'>
        {/* Member text */}
        <div className='Member-frame'>
          <h4>Members-<td>({(Count)})</td></h4>
        </div>

        {/* Filter icon */}
        <div>
          {/* Filter field will add soon.. */}
        </div>
        {/* MainContent */}
        <div className='Main-frame'>
          <div className='Rectangle-box'></div>
          <table className='table table-hover ' >
            <thead>
              <tr className='row-frame'>
                <th className='Name-frame'><div className='head-name'><h5>Name</h5></div></th>
                <th className='Contact-frame'><h5>Contact</h5></th>
                <th className='Location-frame'><h5>Location</h5></th>
                <th className='LastInteraction-frame'><h5>Last Interaction</h5></th>
                <th className='Task-frame'><h5>Tasks</h5></th>
              </tr>
            </thead>

            {/* for cloumn values */}
            <tbody className='cloumn-frame'>
              {
                records.map((item) => (
                  <tr key={item.id}>
                    <td className='name'><h5>{item.name}</h5></td>
                    <td className='contact'>
                      <span><h4>{item.phone}</h4></span><br />
                      <span><h5>{item.email}</h5></span>
                    </td>
                    <td className='location'>
                      <h4>{item.address.street}{","}{item.address.city}</h4>
                    </td>
                    <td className='last-interaction'><h5>{item.company.catchPhrase}</h5></td>
                    <td className={getColor(item.type)}><Link to='memberProfile'><h5>hello</h5></Link></td>
                  </tr>
                  
                ))
                
              }
              
              {
                Color.map((user) => (
                  <>
                    <tr >
                      <td key={user.name} className={getColor(user.text)}><h5>{user.zipcode}</h5></td>
                    </tr>
                  </>

                ))
              }


            </tbody>
          </table>
          <div className='footer-line'></div>
          <nav>
            <ul className='pagination'>
              <li className='page-item'>
                <a href='#' className='page-link' onClick={perPage}><span>{"<"}</span></a>
              </li>
              {
                numbers.map((n, i) => (
                  <li className={`page-item ${CurrentPage === n ? 'active' : ''}`} key={i} >
                    <a href='#' className='page-link' onClick={() => changeCPage(n)}>{n}</a>
                  </li>
                ))

              }
              <li className='page-item'>
                <a href='#' className='page-link'
                  onClick={nextPage}>{">"}</a>
              </li>
            </ul>
          </nav>





          <footer className='footer-outer'> <h5>Showing 1 to 3 of {Count} results</h5></footer>
        </div>





      </div>

      
      

      <Outlet/>

    </div>
   
  )


  function perPage() {
    if (CurrentPage !== 1) {
      setCurrentPage(CurrentPage - 1)
    }
  }

  function changeCPage(id) {
    setCurrentPage(id)
  }

  function nextPage() {
    if (CurrentPage !== npages) {
      setCurrentPage(CurrentPage + 1)
    }
  }
}

export default Member