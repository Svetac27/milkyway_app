import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
// @ts-expect-error - JS module without types
import { useAuthContext } from '../hooks/useAuthContext.js'
import '../App.scss'
import { login, loginMail, loginPassword, welcomeMessage } from '../assets/variables.js'

function Login() {
  const navigate = useNavigate()
  const { login: loginUser } = useAuthContext()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    try {
      await loginUser(email, password)
      navigate('/index')
    } catch (err) {
      setError('Invalid email or password')
      console.error(err)
    }
  }

  return (
    <div className="main">
      <form onSubmit={handleSubmit}
        className="login-form bg-dark-background
          max-w-[600px] h-screen w-full p-[60px] ml-auto
          flex flex-col justify-center relative right-0 z-10"
      >
        <h2>{login}</h2>
        <h4>{welcomeMessage}</h4>
        <div>
          <label className="block text-text-light mb-2">{loginMail}</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full px-4 py-2 rounded border border-gray-300"
            required
          />
        </div>

        <div>
          <label className="block text-text-light mb-2">{loginPassword}</label>
          <input
        type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            className="w-full px-4 py-2 rounded border border-gray-300"
            required
          />
        </div>

        {error && <p className="text-red-500 text-sm">{error}</p>}

        {/* <button
          type="submit"
          disabled={loading}
          className="w-full bg-primary text-white py-2 rounded font-bold hover:bg-blue-600 disabled:opacity-50"
        >
          {loading ? 'Logging in...' : 'Login'}
        </button> */}
      </form>
    </div>
  )
}

export default Login
