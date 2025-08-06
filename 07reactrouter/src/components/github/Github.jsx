import React, { useEffect, useState } from 'react'

function Github() {
  const [data,setData] = useState([])
  useEffect(()=>{
    fetch("https://api.github.com/users/hiteshchoudhary")
    .then((res)=> res.json())
    .then(result => {setData(result)
      console.log(data.followers);
      
    })
  },[])
  return (
    <div className='text-center text-3xl p-5 bg-gray-600 text-white'>
      Github Followers: {data.followers}
    <img src={data.avatar_url} alt='git pictur'/>
    </div>
  )
}

export default Github
