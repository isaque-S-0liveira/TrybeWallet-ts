export type InputProps = {
  bootstrapClass?: string;
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
