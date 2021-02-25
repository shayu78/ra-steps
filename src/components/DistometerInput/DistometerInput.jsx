import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function DistometerInput(props) {
  const { value, onHandleSubmit } = props;
  const [form, setForm] = useState(value);

  React.useEffect(() => {
    setForm(value);
  }, [value]);

  const onSubmit = (event) => {
    event.preventDefault();
    onHandleSubmit(form);
  }

  const onInputChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form className="form" onSubmit={onSubmit}>
      <div className="form__input__container">
        <label htmlFor="date">Дата (ДД.ММ.ГГ)</label>
        <input className="form__input" type="date" value={form.date} name="date"
          id="date" readOnly={form.id ? "readonly" : null} required onChange={onInputChange} />
      </div>
      <div className="form__input__container">
        <label htmlFor="distance">Пройдено (км)</label>
        <input className="form__input" type="number" value={form.distance} name="distance"
          id="distance" step="0.001" min="0.001" required onChange={onInputChange} />
      </div>
      <button className="form__button">OK</button>
    </form>
  );
}

DistometerInput.propTypes = {
  value: PropTypes.object.isRequired,
  onHandleSubmit: PropTypes.func.isRequired,
};
