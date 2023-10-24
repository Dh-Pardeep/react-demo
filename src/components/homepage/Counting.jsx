import React from 'react'

const Counting = () => {

    function CountingOne(Start, last) {
        if (Start <= last) {
            document.write(Start + " ");
            CountingOne(Start + 1, last);
        }
    }
    CountingOne(1, 100);
    return (
        <div>Counting 1 To 100  console</div>
    )
}

export default Counting