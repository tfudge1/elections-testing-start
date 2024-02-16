import * as utils from './utils.js';

// Candidate

// Password
/*
Short1!
NoNumber!
NoSpecialCh4r
noc4pitals!
NOL0WER!
goodP4ssw0rd!
*/

/* added a line */
test('Password must have at least 8 char', () => {
    expect(utils.isValidPassword("Short1!")).toBe( false );
});

test('Password must have a number', () => {
    expect(utils.isValidPassword("NoNumber!")).toBe( false );
});

test('Password must have a special character', () => {
    expect(utils.isValidPassword("NoSpecialCh4r")).toBe( false );
});

test('Password must have a capital letter', () => {
    expect(utils.isValidPassword("noc4pitals!")).toBe( false );
});

test('Password must have a lower case letter', () => {
    expect(utils.isValidPassword("NOL0WER!")).toBe( false );
});

test('Password must pass all requirements', () => {
    expect(utils.isValidPassword("goodP4ssw0rd!")).toBe( true );
});