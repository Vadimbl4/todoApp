import React, { useState } from 'react';
import CalculatorButton from './CalculatorButton';
import CalculatorMath from './CalculatorMath';

function Calculator() {
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '.'];
  let [mathItems, setMathItems] = useState([
    { id: 1, title: '+', active: true },
    { id: 2, title: '-', active: true },
    { id: 3, title: '*', active: true },
    { id: 4, title: '/', active: true },
    { id: 5, title: '=', active: true },
  ]);
  let [string, setString] = useState([]);

  function number(index) {
    string.includes('=')
      ? newString()
      : setString(string.concat([numbers[index]]));

    function newString() {
      setString([]);
      setString((prev) => prev.concat([numbers[index]]));
      // setMathItems(mathItems.map(item => {
      //   return item.active = true
      // }))
      //console.log(mathItems);
    }
  }

  function math(item) {

    
    

    item.active ?
      string.includes('=')
        ? newStringAfterEquals()
        : item.title !== '='
        ? mathItemWithSpaces()
        : result()
      : console.log(mathItems);

    function mathItemWithSpaces() {
      setString((prev) => prev.concat([' ']));
      setString((prev) => prev.concat([item.title]));
      setString((prev) => prev.concat([' ']));
      setMathItems(mathItems.map(item => {
        return item.active = false
      }))
      console.log(mathItems);
    }

    function newStringAfterEquals() {
      let afEq = string.join('').split('=');
      console.log(afEq);
      afEq.shift();
      setString(afEq);
      mathItemWithSpaces();
    }

    function result() {
      mathItemWithSpaces();
      setString((prev) =>
        prev.concat([Function('return ' + string.join(''))()])
      );
    }
  }

  return (
    <>
      <div className="wrapCalc">
        <div className="calcHead">{string.join('')}</div>
        <div className="calcBody">
          <div className="numbers">
            {numbers.map((value, index) => {
              return (
                <CalculatorButton
                  value={value}
                  key={value}
                  number={number}
                  index={index}
                />
              );
            })}
          </div>
          <div className="math">
            {mathItems.map((item, index) => {
              return (
                <CalculatorMath
                  item={item}
                  key={item.id}
                  math={math}
                  index={index}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Calculator;