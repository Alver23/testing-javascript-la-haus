export default class Calculator {
    sum(...values) { // [10, 30]
        return values.reduce((accumulator, currentValue) => {
            const value = parseInt(currentValue);
            if (isNaN(value)) {
                throw new Error('The parameters received are not numbers')
            }
            return accumulator + currentValue
        }, 0)
    }

    sub(numb1, numb2) {
        return numb1 - numb2
    }

    mult(numb1, numb2) {
        return numb1 * numb2
    }

    sub2(...values) {
        return values.reduce((accumulator, currentValue) => {
            const value = parseInt(currentValue);
            if (isNaN(value)) {
                throw new Error('The received parameter is not a number')
            }
            return accumulator - currentValue
        }, values[0])
    }

  
}

