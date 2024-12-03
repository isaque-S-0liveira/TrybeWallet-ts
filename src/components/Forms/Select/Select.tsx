import { SelectProps } from '../../../types/FormsTypes';

function Select(props: SelectProps) {
  const {
    id,
    options,
    name,
    value,
    onChange,
    testId,
    bootstrapClass,
    label,
    ...rest } = props;
  return (
    <div className={ ` d-sm-flex align-items-center text-nowrap ${bootstrapClass}` }>
      { label && (
        <label className="me-2" htmlFor={ id }>
          {label}
          :
        </label>
      )}
      <select
        id={ id }
        data-testid={ testId }
        aria-label={ name }
        defaultValue={ value }
        onChange={ onChange }
        name={ name }
        className="form-select"
        { ...rest }
      >
        {options.map((option) => (
          <option
            key={ option.value }
            value={ option.value }
          >
            {option.value}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;
