import React from 'react';


const Login = (props) => {

  const [inputs, setInputs] = React.useState({
    email: '',
    password: ''
  })
  const [message, setMessage] = React.useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputs.email || !inputs.password) {
      return;
    }
    props.handleLogin(inputs.email, inputs.password)
      .catch(setMessage)
  }

  return (
    <section className="login">
      <div className="login__container">
        <h2 className="login__title">Вход</h2>
        <form onSubmit={handleSubmit} className="login__form">
          <fieldset className='login__fieldset'>
            <label className="login__field">
              <input
                type="email"
                value={inputs.email || ''}
                onChange={handleChange}
                placeholder="Email"
                id="email-input"
                name="email"
                className="login__input login__input_type_email"
                required />
              <span
                id="email-input-error"
                className="login__input-error">
              </span>
            </label>
            <label className="login__field">
              <input
                type="password"
                value={inputs.password || ''}
                onChange={handleChange}
                id="password-input"
                placeholder="Пароль"
                name="password"
                className="login__input login__input_type_password"
                minLength="2"
                maxLength="200"
                required />
              <span
                id="password-input-error"
                className="login__input-error">
              </span>
              <button type="submit" className="login__button button">Войти</button>
            </label>
          </fieldset>
        </form>
      </div>
      {message}
    </section >
  )
}


export default Login;