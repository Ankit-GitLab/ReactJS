import React from 'react';

const App = () => {

  const pageScrolling = (elem) => {
    if (elem > 0) {
      console.log('seedha scrolling........');
    } else {
      console.log('ulta scrolling.........');
    }
  };

  return (
    <div>
      <div>
        <button onClick={function () {
          console.log('hello guys');
        }}>
          Click here
        </button>

        <input
          onChange={function (elem) {
            console.log(elem.target.value);
          }}
          type="text"
          placeholder="Enter name"
        />

        <div
          onMouseMove={(elem) => {
            console.log(elem.clientX);
          }}
          className="box"
        ></div>
      </div>

      <div
        onWheel={(elem) => {
          pageScrolling(elem.deltaY);
        }}
      >
        <div className="page1"></div>
        <div className="page2"></div>
        <div className="page3"></div>
      </div>
    </div>
  );
};

export default App;