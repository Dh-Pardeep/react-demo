import React, { useState } from 'react'

const From = () => {
    const [inputone, setInputone] = useState({
        firstName: "",
        lastName: "",
        number: "",
        gender: "",

    })
    console.log(inputone, "inputone")
    return (
        <div>
            <p>
                Save data in one state and data has been shown under the form in table format
                (a.) first name
                (b.) last name
                (c.) Roll number
                (d.) radio ( male, female)
            </p>
            <form >
                <div>
                    <label htmlFor="FirstN"> First Name</label>
                    <input type="first" name='first' id='FirstN' placeholder='First Name' onChange={(e) => setInputone({ ...inputone, firstName: e.target.value })} />
                </div>
                <div>
                    <label htmlFor="LastN">Last Name</label>
                    <input type="last" name='last' id='LastN' placeholder='Last Name' onChange={(e) => setInputone({ ...inputone, lastName: e.target.value })} />
                </div>
                <div>
                    <label htmlFor="Number">Number</label>
                    <input type="number" name='number' id='Number' placeholder='Number' onChange={(e) => setInputone({ ...inputone, number: e.target.value })} />
                </div>
                <label htmlFor="Gender">Gender</label>
                <select name="Mygender" id="Gender" onChange={(e) => setInputone({ ...inputone, gender: e.target.value })}>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>
                <div>
                    <button >Submit Now</button>
                    <button >Reset Now</button>
                </div>
            </form >
        </div>
    )
}

export default From