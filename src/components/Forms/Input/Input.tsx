import { useState } from 'react';
import { InputProps } from '../../../types/FormsTypes';
import './Input.css';

function Input({
  bootstrapClass = 'col-12',
  name,
  type,
  placeholder,
  label = null,
  onChange,
  value,
  required = false }: InputProps) {
  const [passwordVisible, setPasswordVisible] = useState(false);

  let inputType = type;
  if (type === 'password') {
    inputType = passwordVisible ? 'text' : 'password';
  }

  return (
    <div
      className={ `${bootstrapClass} ${
        type === 'password' && 'inputPasswordContainer'
      }` }
    >
      {label && <label className="input-label">{label}</label>}
      <input
        name={ name }
        type={ inputType }
        placeholder={ placeholder }
        value={ value }
        onChange={ onChange }
        className="form-control"
        required={ required }
      />
      {type === 'password' && (
        <button
          onClick={ () => setPasswordVisible(!passwordVisible) }
          type="button"
          className="bg-transparent border-0"
        >
          {passwordVisible ? (
            <i className="bi bi-eye" />
          ) : (
            <i className="bi bi-eye-slash" />
          )}
        </button>
      )}
    </div>
  );
}

export default Input;
