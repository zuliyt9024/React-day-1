
// https://jsonplaceholder.typicode.com/users
import axios from 'axios'


import React, { useEffect, useState } from 'react'

function UserData() {


    const [data,setData]=useState([])
    // const []=useState();
  const fetchUser=async()=>{ 

    try {
        const res= await axios.get("https://jsonplaceholder.typicode.com/users")
        // const data=res.data
        setData(res.data)
        console.log(res.data)

        
    } catch (error) {
       console.log("fetch api error:",error) ;
    }
}


useEffect(()=>{
    fetchUser()
},[])


  return (
    <div>
   <ul>
    {data.map((item)=>{
      return (
        <li key={item.id}>
            <h3> {item.username}</h3>
              <p> {item.email}</p>
                <p> {item.phone}</p>
        </li>
      )
    })}
   </ul>

    </div>
  )
}

export default UserData
