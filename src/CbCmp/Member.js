import React, { useState, useEffect } from 'react'
import './Members.css'
import styles from './Members.module.css'

function Member() {


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


  useEffect(() => {
    async function countMember() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/');
        const data = await response.json();
        setCount(data.length);
        setData(data)
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
            <tbody className='cloumn-frame'>
              {
                records.map((item) => (
                  <tr key={item.id}>
                    <td className='name'><h5>{item.name}</h5></td>
                    <td className='contact'>
                      <span><h4>{item.phone}</h4></span><br/>
                      <span><h5>{item.email}</h5></span>
                    </td>
                    <td className='location'>
                      <h4>{item.address.street}{","}{item.address.city}</h4>
                    </td>
                    <td className='last-interaction'>{item.company.catchPhrase}</td>
                    <td className='task'>{item.company.bs}</td>
                  </tr>
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
    </div>
  )


  function perPage() {
    if (CurrentPage !== 1) {
      setCurrentPage(CurrentPage - 1)
    }
  }

  function changeCPage(name) {
    setCurrentPage(name)
  }

  function nextPage() {
    if (CurrentPage !== npages) {
      setCurrentPage(CurrentPage + 1)
    }
  }
}

export default Member