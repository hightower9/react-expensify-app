const add = (a, b) => a+b;

const generateName = (name = 'Anonymous') => `Hello ${name}`;

test('should add two numbers', () => {
    const result = add(3, 4);
    expect(result).toBe(7);
});

test('Greetings',() => {
    const answer = generateName('Alister');
    expect(answer).toBe(`Hello Alister`);
});