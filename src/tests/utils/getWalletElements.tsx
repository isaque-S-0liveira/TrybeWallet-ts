/* eslint-disable max-len */
import { screen } from '@testing-library/react';

export function getWalletFormElements() {
  return {
    currencyInput: screen.getByTestId('currency-input') as HTMLSelectElement,
    valueInput: screen.getByTestId('value-input') as HTMLInputElement,
    descriptionInput: screen.getByTestId('description-input') as HTMLInputElement,
    paymentMethodInput: screen.getByTestId('method-input') as HTMLSelectElement,
    tagInput: screen.getByTestId('tag-input') as HTMLSelectElement,
    addExpenseButton: screen.getByText(/adicionar despesa/i),
  };
}

export function getEditTableExpenseElement() {
  return {
    editExpenseButton: screen.getAllByTestId('edit-expense-table-button') as HTMLButtonElement[],
  };
}

export function getEditFormExpenseElement() {
  return {
    editExpenseFormButton: screen.getByText(/editar despesa/i) as HTMLButtonElement,
  };
}
