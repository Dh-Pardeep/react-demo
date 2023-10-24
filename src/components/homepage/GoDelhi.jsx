import React from 'react'

const GoDelhi = () => {
    function abc(string) {
        let v = 0;
        let c = 0;
        let Value = string.trim();
        const vowels = ["a", "e", "i", "o", "u"]; 
        for (let i = 0; i < Value.length; i++) {
          if (vowels.includes(Value[i].toLowerCase())) { 
            v++;
          } else if (Value[i].match(/[a-z]/i)) {
            c++;
          }
        }
      
        console.log("Vowels: " + v);
        console.log("Consonants: " + c);
      }
      
      
      abc("Palvi go to Delhi ");
    return (
        <div>
            <p> Find how many vowels and Consonants are present in  string = '' Palvi go to Delhi "</p>
        </div>
    )
}

export default GoDelhi