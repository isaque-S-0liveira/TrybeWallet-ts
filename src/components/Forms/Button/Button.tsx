import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { ButtonProps } from '../../../types/FormsTypes';
import './Button.css';

function Button({
  testId,
  type,
  children,
  bootstrapClass = 'col-12',
  disabled = { value: false, reason: '' },
  onClick = () => {},
}: ButtonProps) {
  return (
    <OverlayTrigger
      placement="bottom"
      overlay={
        disabled.value ? (
          <Tooltip
            className="custom-tooltip"
            id="button-tooltip"
          >
            {disabled.reason}
          </Tooltip>
        ) : <span />
      }
    >
      <div className={ `button-container ${bootstrapClass}` }>
        <button
          data-testid={ testId }
          type={ type }
          className="btn btn-primary"
          onClick={ onClick }
          disabled={ disabled.value }
        >
          {children}
        </button>
      </div>
    </OverlayTrigger>
  );
}

export default Button;
