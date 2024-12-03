export type InputProps = {
  id: string;
  bootstrapClass?: string;
  testId?: string;
  name: string;
  type: 'text' | 'password' | 'email' | 'number';
  placeholder?: string;
  label?: string | null;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  value: string | number,
  required?: boolean,
  passwordVisible?: boolean | null,
  autoComplete?: string;
};

interface SelectOption {
  value: string;
}

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  testId?: string;
  bootstrapClass?: string;
  options: SelectOption[];
  label?: string;
}

export type ButtonProps = {
  testId?: string;
  children: React.ReactNode;
  onClick?: () => void;
  bootstrapClass?: string;
  disabled?: {
    value: boolean;
    reason: string;
  };
  type: 'button' | 'submit' | 'reset';
};
