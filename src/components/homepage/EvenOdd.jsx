import React from 'react'

const EvenOdd = () => {
    function OddEven(arr) {

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] % 2 === 0) {
                console.log(arr[i] + "even");
            } else if (arr[i] % 2 !== 0) {
                console.log(arr[i] + "odd");
            }
        }


    }
    const numbers = [9, 11, 12, 13, 14, 15, 18];
    OddEven(numbers);

    return (
        <div> Find Odd and Even Array=[9,11,12,13,14,15,18]</div>
    )
}

export default EvenOdd