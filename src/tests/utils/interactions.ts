import { UserEvent } from '@testing-library/user-event';
import { ExpenseType } from '../../types/ActionsTypes';

export async function fillAndSubmitExpenseForm(
  user: UserEvent,
  elements: any,
  expense: ExpenseType,
) {
  const {
    valueInput,
    descriptionInput,
    currencyInput,
    tagInput,
    paymentMethodInput,
    submitButton } = elements;

  await user.clear(valueInput);
  await user.clear(descriptionInput);

  await user.type(valueInput, expense.value);
  await user.type(descriptionInput, expense.description);
  await user.selectOptions(currencyInput, expense.currency);
  await user.selectOptions(tagInput, expense.tag);
  await user.selectOptions(paymentMethodInput, expense.method);
  await user.click(submitButton);
}
