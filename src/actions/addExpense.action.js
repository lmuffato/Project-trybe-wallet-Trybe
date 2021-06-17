import { ADD_EXPENSE } from '../common/def';

const menosUm = -1;
let id = menosUm;

function uniqueId() {
  id += 1;
  return id;
}

export default function addExpense({
  currency,
  description,
  method,
  value,
  tag,
  exchangeRates,
}) {
  return {
    type: ADD_EXPENSE,
    payload: {
      id: uniqueId(),
      currency,
      description,
      method,
      value,
      tag,
      exchangeRates,
    },
  };
}
