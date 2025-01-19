/* eslint-disable max-len */
import { screen } from '@testing-library/react';

export function getWalletFormElements() {
  return {
    currencyInput: screen.getByTestId('currency-input') as HTMLSelectElement,
    valueInput: screen.getByTestId('value-input') as HTMLInputElement,
    descriptionInput: screen.getByTestId('description-input') as HTMLInputElement,
    paymentMethodInput: screen.getByTestId('method-input') as HTMLSelectElement,
    tagInput: screen.getByTestId('tag-input') as HTMLSelectElement,
    submitButton: screen.getByTestId('submit-button') as HTMLButtonElement,
  };
}
export function getEditDeleteButtonTableExpenseElement() {
  return {
    editExpenseButton: screen.getAllByTestId('edit-expense-table-button') as HTMLButtonElement[],
    deleteExpenseButton: screen.getAllByTestId('delete-expense-table-button') as HTMLButtonElement[],
  };
}
