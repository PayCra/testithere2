import React from 'react';
// import "./App.css";

let firstAnimal = prompt('Animal, please:').toLowerCase()
let secondAnimal = prompt('Another animal, please:').toLowerCase()
let thirdAnimal = prompt('Last animal, please:').toLowerCase()

let AnArray = ['a', 'e', 'i', 'o', 'u', 'y']

const checkForVowel = (character, vowel) => character === vowel;

let isAVowel;

const ArticleAn = (character) => {
    isAVowel = false;
    for (let i = 0; i < AnArray.length; i++) {
        if (checkForVowel(character, AnArray[i])) {
            isAVowel = true;
        }
    }
}

const Article = () => {
    if (isAVowel===true) {
        return 'an'
    } else {
        return 'a'
    }
}

function App() {
    return (
        <>
            <div>When you're at your best, you are like {ArticleAn(firstAnimal[0])}{Article()} {firstAnimal}.</div>
            <div>People perceive you as similar to {ArticleAn(secondAnimal[0])}{Article()} {secondAnimal}.</div>
            <div>{ArticleAn(thirdAnimal[0])}{'A' + Article().slice(1)} {thirdAnimal} is who you really are.</div>
        </>
    )
}

export default App;
