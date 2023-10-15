import React, { useState } from 'react';

function NameChangeButton() {
    const [name, setName] = useState(true);
    const [nameChanged, setNameChanged] = useState(false);
    const handleNameChange = () => {
        if (nameChanged) {
            setName("John");
        } else {
            const newName = "pardeep";
            if (newName) {
                setName(newName);
            }
        }
        setNameChanged(!nameChanged);
    };
    return (

        <div>
            <button onClick={handleNameChange}>
                {name}
            </button>
        </div>
    );
}

export default NameChangeButton;



