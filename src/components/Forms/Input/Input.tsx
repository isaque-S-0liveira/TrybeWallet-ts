import { useState } from 'react';
import { InputProps } from '../../../types/FormsTypes';
import './Input.css';

function Input({
  id,
  testId,
  bootstrapClass = 'col-12',
  name,
  type,
  placeholder,
  label = null,
  onChange,
  value,
  required = false,
  autoComplete = 'off' }: InputProps) {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handlePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div
      className={ `
        text-nowrap
        ${bootstrapClass} 
        ${type === 'password' && 'input-password-wrapper'}
        ${label && 'd-sm-flex align-items-center'}
        ` }
    >
      { label && (
        <label className="me-2" htmlFor={ id }>
          {label}
          :
        </label>
      )}
      <input
        id={ id }
        data-testid={ testId }
        name={ name }
        type={ type === 'password' && passwordVisible ? 'text' : type }
        placeholder={ placeholder }
        value={ value }
        onChange={ onChange }
        className="form-control"
        required={ required }
        min={ type === 'number' ? '0' : undefined }
        autoComplete={ autoComplete }
        aria-label={ label || placeholder || name }
      />
      {type === 'password' && (
        <button
          onClick={ handlePasswordVisibility }
          type="button"
          className="bg-transparent border-0"
          aria-label={ passwordVisible ? 'Esconder senha' : 'Mostrar senha' }
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
