import React from 'react'

const Table = () => {
    function table(number) {
        for (let i = 1; i <= 10; i++) {
            console.log(number + "*" + i + "=" + number * i);
        }
    }
    table(5)
    return (
        <div>
    
        </div>
    )
}

export default Table