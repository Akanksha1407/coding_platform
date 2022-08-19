import React from 'react';
import ReactDOM from 'react-dom';
import  "./index.css";
import App from "./App";

// use of ARRAY MAP & FAT ARROW function to reduce the lines of code

/*
function ncard(val){
  console.log(val);
  return(
    <Card  
    imgsrc={val.imgscr}
    title={val.title}
    sname={val.sname}
    link={val.link}
  />
  );
}
*/
/*
 //   1. It is the 1st method by using array to create card.

ReactDOM.render(
<>
<h1 className="heading_style">List of top 3 netflix series in 2022</h1>
  <Card  
    imgsrc={Sdata[0].imgscr}
    title={Sdata[0].title}
    sname={Sdata[0].sname}
    link={Sdata[0].link}
  />
  
  <Card  
    imgsrc={Sdata[1].imgscr}
    title={Sdata[1].title}
    sname={Sdata[1].sname}
    link={Sdata[1].link}
  />
  <Card  
    imgsrc={Sdata[2].imgscr}
    title={Sdata[2].title}
    sname={Sdata[2].sname}
    link={Sdata[2].link}
  />



</>,
document.getElementById('root')
);
*/

//Here, we'll use map method to create cards , it needs very less lines of code.
//2. It is the 2nd method to create cards by using array map method.

/*
ReactDOM.render(
  <>
  <h1 className="heading_style">List of top 3 netflix series in 2022</h1>
  {Sdata.map(ncard)}
  </>,
  document.getElementById('root')
)
*/

//OR

ReactDOM.render(<App/>, document.getElementById('root'));
