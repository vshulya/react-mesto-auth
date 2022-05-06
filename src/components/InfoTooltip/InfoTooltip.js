import React from 'react';
import success from '../../images/Success.svg';
import fail from '../../images/Fail.svg';

function InfoTooltip({ isOpen, onClose, isSucceed }) {

  return (
    <section className={`pop-up ${isOpen && "pop-up_opened"}`} >
      <figure className="infoTooltip__container">
        <button onClick={onClose} type="button" className="pop-up__close button"></button>
        {isSucceed ? (
          <>
            <img src={success} alt="успех" className="infoTooltip__img" />
            <p className="infoTooltip__tip">Вы успешно<br />зарегистрировались!</p>
          </>
        ) : (
          <>
            <img src={fail} alt="ошибка" className="infoTooltip__img" />
            <p className="infoTooltip__tip">Что-то пошло не так!<br />Попробуйте ещё раз.</p>
          </>
        )}
      </figure>
    </ section>
  )

}

export default InfoTooltip;