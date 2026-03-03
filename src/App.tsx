import { useEffect } from 'react'
import './App.css'
import bottleImg from './assets/images/bottle.png'
import { useApiStore } from './stores/api.store.js'

function App() {
  const { get, loading, error } = useApiStore()

  useEffect(() => {
    const loadUsers = async () => {
      try {
        const usersResponse = await get('/users')
        console.log('Users:', usersResponse)
      } catch (requestError) {
        console.error('Failed to load users:', requestError)
      }
    }

    loadUsers()
  }, [get])

  return (
    <>
      <div className="main">
        <header>
          <a href="/">
            <img src={bottleImg} alt="logo" />
          </a>
            <span>mlecni put</span>
          <div className="right-side">

          </div>
        </header>
          <h1 className="text-3xl font-bold underline">
            Dobro dosli!!!
          </h1>
          {loading && <p>Loading users...</p>}
          {Boolean(error) && <p>Failed to load users.</p>}
          <footer>
            <span>
              Copyright 2026
            </span>
          </footer>
      </div>
    </>
  )
}

export default App

