// import React and ReactDOM  libraries

import React from 'react';
import ReactDOM from 'react-dom';


const getbuttonText = () => {
    return "Submit"
}

// create a react component
const App = () => {
    return (
        <div>
            <label className="label" htmlFor="name">Enter name:</label>
            <input type="text" id="name" />
            <button style={{ backgroundColor: 'blue', color: 'white' }}>{getbuttonText()}</button>
        </div>
    );
};


// take the react component and show it on the screen

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);