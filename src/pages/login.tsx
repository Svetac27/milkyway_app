import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
// @ts-expect-error - JS module without types
import { useAuthContext } from '../hooks/useAuthContext.js'
import '../App.scss'
import { createAccount, forgotPassword, login, loginMail, loginPassword, welcomeMessage } from '../assets/variables.js'
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
        className="login-form"
      >
        <h2 className="login-title mb-[30px]">{login}</h2>
        <h4 className="login-subtitle mb-[25px]">{welcomeMessage}</h4>
        <div className="login-inputs relative flex flex-col gap-[20px] pb-[30px]">
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
          {error && <p className="error-msg">{error}</p>}
        </div>
        <div className="buttons">
          <div className="account-buttons flex flex-col gap-[10px] items-start">
            <button
              type="button"
              className="btn text-btn"
              onClick={() => navigate('/create-account')}
            >
              {createAccount}
            </button>
            <button
              type="button"
              className="btn text-btn"
              onClick={() => navigate('/forgot-password')}
            >
              {forgotPassword}
            </button>
          </div>
          <button
            type="submit"
            className="btn main-btn w-[150px]"
          >
            {login}
          </button>
        </div>
      </form>
    </div>
  )
}

export default Login
