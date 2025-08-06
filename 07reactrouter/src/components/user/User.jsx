import React from 'react'
import { useParams } from 'react-router-dom'
function User() {
    const {userId} = useParams()
  return (
    <div className='text-center text-3xl p-5'>
      <h1>User :{userId}</h1>
    </div>
  )
}

export default User
