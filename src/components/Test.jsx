import React, { useState } from 'react'

const Test = () => {
  const [user, setUser] = useState({
    name: 'lsk',
    age: 33,
  })
  const increaceAge = () => {
    setUser((prev) => ({
      ...prev,
      age: 31,
    }))
  }
  console.log("user: ", user)
  return (
    <button
      onClick={increaceAge}
    >
      index
    </button>
  )
}

export default Test