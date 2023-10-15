import React, { useState } from "react";
const ReactInput = () => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const formSubmission = (event) => {
        event.preventDefault();
        setName("");
        setPassword("");
    };
    function nameOnchange(e) {
        setName(e.target.value);
    }
    return (
        <div>
            <form onSubmit={formSubmission}>
                <input type="email" value={name} onChange={nameOnchange} />
                <input value={password} type="password" onChange={(e) => setPassword(e.target.value)} />
                <input type="Submit" />
            </form>
        </div>
    );
};

export default ReactInput;