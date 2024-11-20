export type InputProps = {
  bootstrapClass?: string;
  testId?: string;
  name: string;
  type: 'text' | 'password' | 'email' | 'number';
  placeholder: string;
  label?: string | null;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  value: string,
  required?: boolean,
  passwordVisible?: boolean | null,
  ChangePasswordVisibility?: () => void,
};

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
