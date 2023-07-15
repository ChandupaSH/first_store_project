import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export const User = () => {
    const [data, setdata] = useState({})
    const {id} = useParams()

    useEffect(() => {
      const getdata = async () => {
        const response = await fetch (`https://jsonplaceholder.typicode.com/posts/${id}`)
        const data = await response.json()
        if (data) {
          setdata(data)
        }
      }
      getdata()

      return() => {
        getdata()
      }

    }, [id])
    

  return (
    <div>
      {data? (<div>
        <h2>{data.title}</h2>
        <p>{data.body}</p>
      </div>) : null}

      <Link to='/contact' >Back</Link>
      {/* when use link, dosee not refresh the page */}
      {/* when use derect routes, then refresh the page */}
    </div>
  )
}




