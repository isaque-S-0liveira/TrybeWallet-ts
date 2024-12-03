import { screen } from '@testing-library/react';

export default function getWalletFormElements() {
  return {
    currencyInput: screen.getByTestId('currency-input') as HTMLSelectElement,
    valueInput: screen.getByTestId('value-input') as HTMLInputElement,
    descriptionInput: screen.getByTestId('description-input') as HTMLInputElement,
    paymentMethodInput: screen.getByTestId('method-input') as HTMLSelectElement,
    tagInput: screen.getByTestId('tag-input') as HTMLSelectElement,
    addExpenseButton: screen.getByTestId('add-expense-button') as HTMLButtonElement,
  };
}
