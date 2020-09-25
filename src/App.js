import React from 'react';
// import "./App.css";

let firstAnimal = prompt('Animal, please (only letters):').toLowerCase()
let secondAnimal = prompt('Another animal, please (only letters):').toLowerCase()
let thirdAnimal = prompt('Last animal, please (only letters):').toLowerCase()

let illegalCharacter = () => {
    if
};



let vowels = ['a', 'e', 'i', 'o', 'u', 'y']

const isCharacterAVowel = (character) => {
    return !! vowels.find((vowel) => character === vowel)
}

const Article = (character) => {
    if (isCharacterAVowel(character)) {
        return 'an'
    } else {
        return 'a'
    }
}

function App() {
    return (
        <>
            <div>When you're at your best, you are like {Article(firstAnimal[0])} {firstAnimal}.</div>
            <div>People perceive you as similar to {Article(secondAnimal[0])}  {secondAnimal}.</div>
            <div>{Article(thirdAnimal[0]).slice(0,1).toUpperCase() + Article(thirdAnimal[0]).slice(1)} {thirdAnimal} is who you really are.</div>
        </>
    )
}

export default App;
