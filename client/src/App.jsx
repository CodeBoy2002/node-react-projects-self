import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [users, setUsers] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  useEffect(()=> {
    const fetchData = async()=> {
      try {
        const response = await fetch('http://localhost:3000/api/data')
        const jsonData = await response.json()
        console.log(jsonData);
        if(!response.ok) {
          setIsLoading(false)
          setIsError(true)
          return
        }
        setUsers(jsonData)
        setIsLoading(false)
      } catch (error) {
        console.log(error);
      }
    }

    fetchData()
  }, [])

  if(isLoading) {
    return (
      <h1>Loading...</h1>
    )
  }

  if(isError) {
    return (
      <h1>Error... 404 Not Found</h1>
    )
  }

  return (
    <div>
        <h3>Fetching Data Using Node and Display using React</h3>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {users.map((user)=> {
            const { id, title } = user
            return (
              <li key={id} style={{ marginBottom: '8px', fontSize: '16px' }}>
                {title}
              </li>
            )
          })}
        </ul>
    </div>
  )
}

export default App
