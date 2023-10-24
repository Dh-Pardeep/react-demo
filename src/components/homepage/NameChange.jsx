import React, { useState } from 'react';

function NameChange() {
    const [name, setName] = useState("palvi");
    const [nameChanged, setNameChanged] = useState(false);
    const handleNameChange = () => {
        if (nameChanged) {
            setName("neha");
        } else {
            const newName = "muskan";
            if (newName) {
                setName(newName);
            }
        }
        setNameChanged(!nameChanged);
    };
    return (

        <div>[ 'Muskan' , 'Neha' , 'palvi']
        Print the name in ascending order
            <button onClick={handleNameChange}>
                {name}
            </button>
        </div>
    );
}

export default NameChange;
