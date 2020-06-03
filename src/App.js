import React from 'react';

const picturesOfJiLi = [
    "纪李/jili0.jpeg",
    "纪李/jili1.jpg",
    "纪李/jili2.jpg",
    "纪李/jili3.jpg",
    "纪李/jili4.jpg"];

let myNumber = Math.floor(Math.random() * 5);

console.log(myNumber);

class App extends React.Component {

    state = {
        link: picturesOfJiLi[myNumber]
    };

    handleClick = () => {
        myNumber = (myNumber + 1 + Math.floor(Math.random()*100) % 4) % 5;
            this.setState({link: picturesOfJiLi[myNumber]})
        };

    render() {
    return (
        <div>
            Click on the picture to shuffle Ji Li pics:
            <div>
            <img src={this.state.link} alt={"unable to load Ji Li"} onClick={this.handleClick}/>
            </div>
        </div>
    )
}
}

export default App;
