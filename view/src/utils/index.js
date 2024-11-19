// Fetches expenses for a given date
export const fetchExpenses = async (date) => {
  const selectDate = new Date(date).getTime() || new Date().getTime();
  const res = await fetch(`/api/expense/list/${selectDate}`);
  return res.json();
};

// Handles the response from the server
export const resHandler = async (res, status) => {
  if (res.status === status) {
    return null;
  }
  const data = await res.json();
  if (data && data.emptyFields) {
    return data.emptyFields;
  }
  return null;
};

// Creates a new expense
export const createExpense = async (data) => {
  const res = await fetch(`/api/expense/create`, {
    method: 'POST',
    body: data,
  });
  return resHandler(res, 201);
};

// Updates an existing expense
export const updateExpense = async (_id, data) => {
  const res = await fetch(`/api/expense/${_id}`, {
    method: 'PUT',
    body: data,
  });
  return resHandler(res, 200);
};

// Fetches a single expense by ID
export const fetchExpense = async (_id) => {
  const res = await fetch(`api/expense/${_id}`);
  return res.json();
};

// Deletes an expense by ID
export const deleteExpense = async (_id) =>
  fetch(`api/expense/${_id}`, {
    method: 'DELETE',
  });

// Sets form data from an object
export const formSetter = (data, form) => {
  Object.keys(form).forEach((key) => {
    data.set(key, form[key]);
  });
};

// Calculates expenses by category
export const expenseByCategory = (expenses) => {
  const categoryBreakdown = expenses.reduce((total, num) => {
    const curTotal = total;
    if (Object.keys(total).includes(num.category)) {
      curTotal[`${num.category}`] =
        Number(total[`${num.category}`]) + Number(num.price);
    } else {
      curTotal[`${num.category}`] = Number(num.price);
    }
    return curTotal;
  }, {});
  const data = Object.keys(categoryBreakdown).map((category) => ({
    x: category,
    y: categoryBreakdown[category],
  }));
  return data;
};
