const square = require('./square');

test('square(1,4,1,4) should be return 1', () =>{
    expect(square(1,4,1,4)).toBe(1);
});
test('square(1,1,4,4) should be return 1', () =>{
    expect(square(1,1,4,4)).toBe(1);
});

test('square(1,4,4,1) should be return 1', () =>{
    expect(square(1,4,4,1)).toBe(1);
});

test('square(0,4,1,3) should be return -1', () =>{
    expect(square(0,4,1,3)).toBe(-1);
});

test('square(a,b,1,4) should be return -2', () =>{
    expect(square('a','b',1,4)).toBe(-2);
});