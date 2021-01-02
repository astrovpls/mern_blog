import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { login } from '../../store/thunks'
import { useDispatch } from 'react-redux'
import Style from './Login.module.css'

const Login = () => {
  let history = useHistory()
  const dispatch = useDispatch()
  const [loginForm, setLoginForm] = useState({
    email: '',
    password: '',
  })

  const handleInputChange = event => {
    const { name, value } = event.target
    setLoginForm({ ...loginForm, [name]: value })
  }

  const onSubmit = async event => {
    event.preventDefault()
    dispatch(login(loginForm))
      // console.log(loginForm)
      // await axios
      //   .post('http://localhost:4000/api/user/login', loginForm)
      //   .then(resp => sessionStorage.setItem('token', resp.data.token))
      //   .catch(console.log)
      // if (sessionStorage.token) {
      //   history.push('/')
      // }
  }

  return (
    <div className={Style.login}>
      <form onSubmit={onSubmit}>
        <h2>Login</h2>
        <input
          placeholder="Email"
          type="email"
          required
          name="email"
          value={loginForm.email}
          onChange={handleInputChange}
        />
        <input
          placeholder="Password"
          type="password"
          required
          name="password"
          value={loginForm.password}
          onChange={handleInputChange}
        />
        <button type="submit">access</button>
      </form>
    </div>
  )
}

export default Login
