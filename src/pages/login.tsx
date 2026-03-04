import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
// @ts-expect-error - JS module without types
import { useAuthContext } from '../hooks/useAuthContext.js'
import '../App.scss'
import { login, loginMail, loginPassword, welcomeMessage } from '../assets/variables.js'
import MInput from '../components/m-input'

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
    <div className="login">
      <form onSubmit={handleSubmit}
        className="login-form bg-darkest-grey
          max-w-[600px] h-screen w-full p-[60px] ml-auto
          flex flex-col justify-center relative right-0 z-10"
      >
        <h2 className="login-title mb-[30px]">{login}</h2>
        <h4 className="login-subtitle mb-[25px]">{welcomeMessage}</h4>
          <MInput
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={loginMail}
            required
          />
          <MInput
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder={loginPassword}
            required
          />

        {error && <p className="text-red">{error}</p>}
      </form>
    </div>
  )
}

export default Login
