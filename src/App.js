import React from 'react';
import "./App.css";

let Array = [];
let Array2= [];

for (let i=0;i<=10;i++) {
    Array.push(<div>{"/".repeat(i) + "\\".repeat(i)}</div>)
}

for (let j=10;j===0;j--) {
    Array2.push(<div>{"\\".repeat(j) + "/".repeat(j)}</div>)
}

function App () {
    return (
        <div className="center">{Array}{Array2}</div>
    )
};

export default App;
