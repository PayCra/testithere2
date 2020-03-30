import React from 'react';

function App() {

    let Mypeople = class {
        constructor(person1, person2) {
            this.person1 = person1;
            this.person2 = person2;
        }

        whoarethey = function () {
            return (`${this.person1} is great, but ${this.person2} is not.`);
        }

    };

    let hah = new Mypeople("Kasia","Marek");

    console.log(hah.whoarethey());


    return (
        <div>
            BluBlu
        </div>
    )

}

export default App;
