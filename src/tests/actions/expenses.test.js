import { addExpense, editExpense, removeExpense } from '../../actions/expenses';


test('should setup remove expense',() => {
    const action = removeExpense({ id: '123abc'});
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id:'123abc'
    });
});
///if objects and arrays use toEqual else for no. , string, boolean use toBe

test('should setup edit expense',() => {
    const action = editExpense( '123abc', {notes: 'new updates'});
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id:'123abc',
        updates: {
            notes: 'new updates'
        }
    });
});

test('should setup add expense with provided values',() => {
    const expenseData = {
        description: 'Rent',
        amount: 109500,
        createdAt: 1000,
        note: 'This was last month rent'
    };
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    });
});

test('should setup add expense with default value',() => {
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description: '',
            amount: 0,
            createdAt: 0,
            note: ''
        }
    });
});