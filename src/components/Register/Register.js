import React from 'react';
import { Link } from "react-router-dom";


const Register = (props) => {
  const [inputs, setInputs] = React.useState({
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    let { email, password } = inputs;
    // auth.register(email, password);
    props.handleRegister(email, password)
      .catch((err) => {
        setInputs(prev => ({
          ...prev,
          message: err
        }))
      });
  }

  return (
    <section className="register">
      <div className="register__container">
        <h2 className="register__title">Регистрация</h2>
        <form className="register__form" onSubmit={handleSubmit}>
          <fieldset className='register__fieldset'>
            <label className="register__field">
              <input
                type="email"
                value={inputs.email || ''}
                onChange={handleChange}
                placeholder="Email"
                id="email-input"
                name="email"
                className="register__input register__input_type_email"
                required />
              <span
                id="email-input-error"
                className="register__input-error">
              </span>
            </label>
            <label className="register__field">
              <input
                type="password"
                value={inputs.password || ''}
                onChange={handleChange}
                id="password-input"
                placeholder="Пароль"
                name="password"
                className="register__input register__input_type_password"
                minLength="2"
                maxLength="200"
                required />
              <span
                id="password-input-error"
                className="register__input-error">
              </span>
              <button type="submit" className="register__button button">Зарегистрироваться</button>
              <p className="register__hint">
                Уже зарегистрированы?{" "}
                <Link className="register__link link" to="/sign-in">
                  Войти
                </Link>
              </p>
            </label>
          </fieldset>
        </form>
      </div>
    </section >
  )
}

export default Register;