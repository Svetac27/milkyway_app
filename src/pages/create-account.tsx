import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import MInput from '../components/m-input'
import { createAccount, enterYourName, enterYourSurname, enterYourPhone, enterYourPassword, enterYourEmail, confirmYourPassword, backToLogin } from '../assets/variables.js'

function CreateAccount() {
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  return (
    <div className="forgot-password">
      <form className="login-form">
        <h2 className="login-title mb-[30px]">{createAccount}</h2>
        <div className="inputs flex flex-col gap-[20px]">
          <div className="two-row">
            <MInput
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={enterYourName}
                required
            />
            <MInput
                type="text"
                value={surname}
                onChange={(e) => setSurname(e.target.value)}
                placeholder={enterYourSurname}
                required
            />
          </div>
          <MInput
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={enterYourEmail}
              required
          />
          <MInput
              type="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder={enterYourPhone}
              required
          />
          <div className="two-row">
            <MInput
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder={enterYourPassword}
                required
            />
            <MInput
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder={confirmYourPassword}
                required
            />
          </div>
        </div>
        <div className="buttons mt-[20px]">
          <button type="button" className="btn text-btn mt-[10px]" onClick={() => navigate('/login')}>{backToLogin}</button>
          <button type="submit" className="btn main-btn mt-[20px]">{createAccount}</button>
        </div>
      </form>
    </div>
  )
}

export default CreateAccount;