/**
 * Necesito un metodo que permita sumar dos numeros
 */

import Calculator from './../index';

describe('Calculator', () => {

    describe('sum method', () => {

        it('should get the result of the sum of two numbers correctly', () => {
            // Arrange
            const calculator = new Calculator();
            const value1 = 10;
            const value2 = 30;
            const expectedValue = 40;

            // Act
            const result = calculator.sum(value1, value2);

            // Assert
            expect(result).toBe(expectedValue);
        })

        it('should get the result of the sum of five numbers', () => {
            // Arrange
            const calculator = new Calculator();
            const value1 = 5;
            const value2 = 25;
            const value3 = 60;
            const value4 = 100;
            const value5 = 1800;
            const expectedValue = 1990;

            // Act
            const result = calculator.sum(value1, value2, value3, value4, value5);

            // Assert
            expect(result).toBe(expectedValue)
            expect(result).toEqual(expect.any(Number))

        })

        it.skip('should return an error when sending a string parameter', () => {
            // Arrange
            const calculator = new Calculator();
            const value1 = 10;
            const value2 = 'jhdiehjdiehide';

            // Assert
            expect(() => {
                calculator.sum(value1, value2);
            }).toThrow('The parameters received are not numbers')

        })

        it('should return an error when sending a string parameter', () => {
            // Arrange
            const calculator = new Calculator();
            const value1 = 10;
            const value2 = 'jhdiehjdiehide';
            function sumNumbers () {
                calculator.sum(value1, value2);
            }

            // Assert
            expect(sumNumbers).toThrow()
            /* expect(() => {
                calculator.sum(value1, value2);
            }).toThrow('The parameters received are not numbers') */

        })
    })

    describe('division method', () => {

        it('should get the result of the division of two numbers correctly', () => {
            // Arrange
            const calculator = new Calculator();
            const dividend = 10;
            const divisor = 20;
            const expectedValue = 0.5;

            // Act
            const result = calculator.division(dividend, divisor);

            // Assert
            expect(result).toBe(expectedValue);
        })
    })

})
