import { useEffect, useState } from 'react';

function UserEmail({
  email: initialEmail,
  containerClass = '',
}: {
  email: string;
  containerClass?: string;
}) {
  const [email, setEmail] = useState<string>('');

  useEffect(() => {
    const storedEmail = localStorage.getItem('userEmail');
    if (storedEmail) {
      setEmail(storedEmail);
    } else {
      setEmail(initialEmail);
    }
  }, [initialEmail]);

  useEffect(() => {
    if (email) {
      localStorage.setItem('userEmail', email);
    }
  }, [email]);

  return (
    <div id="email-field-container" className={ `ms-1 icon-text ${containerClass}` }>
      <i className="bi bi-person-circle me-2" aria-hidden="true" />
      <span data-testid="email-field">{email}</span>
    </div>
  );
}

export default UserEmail;
