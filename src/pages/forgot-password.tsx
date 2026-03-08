import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import MInput from '../components/m-input'
import { forgotPassword, enterYourEmail, sendResetLink, backToLogin } from '../assets/variables.js'

function ForgotPassword() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')

  return (
    <div className="forgot-password">
      <form className="login-form">
        <h2 className="login-title mb-[30px]">{forgotPassword}</h2>
        <MInput
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={enterYourEmail}
            required
        />
        <div className="buttons mt-[20px]">
          <button type="button" className="btn text-btn mt-[10px]" onClick={() => navigate('/login')}>{backToLogin}</button>
          <button type="submit" className="btn main-btn mt-[20px]">{sendResetLink}</button>
        </div>
      </form>
    </div>
  )
}

export default ForgotPassword;