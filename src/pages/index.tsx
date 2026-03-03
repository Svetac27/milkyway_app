import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
// @ts-expect-error - JS module without types
import { useAuthContext } from '../hooks/useAuthContext.js'
import { useApiStore } from '../stores/api.store.js'
import bottleImg from '../assets/images/bottle.png'
import '../App.scss'

function Index() {
  const navigate = useNavigate()
  const { logout, user } = useAuthContext()
  const { get, loading, error, data } = useApiStore()

  useEffect(() => {
    const loadUsers = async () => {
      try {
        await get('/users')
      } catch (requestError) {
        console.error('Failed to load users:', requestError)
      }
    }

    loadUsers()
  }, [get])

  const handleLogout = (e: React.MouseEvent) => {
    e.preventDefault()
    logout()
    navigate('/login')
  }

  return (
    <>
      <div className="main">
        <header>
          <a href="/index">
            <img src={bottleImg} alt="logo" />
          </a>
          <span>mlecni put</span>
          <div className="right-side">
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Logout
            </button>
          </div>
        </header>

        <h1 className="text-3xl font-bold underline">Welcome {user?.name || 'User'}!</h1>

        {loading && <p>Loading users...</p>}
        {Boolean(error) && <p className="text-red-500">Failed to load users.</p>}
        {Boolean(data) && (
          <div>
            <p>Users loaded successfully!</p>
            <pre>{JSON.stringify(data, null, 2)}</pre>
          </div>
        )}

        <footer>
          <span>Copyright 2026</span>
        </footer>
      </div>
    </>
  )
}

export default Index