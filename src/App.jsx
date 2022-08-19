

import React from 'react';
import Card  from "./Card";
import Sdata from "./Sdata";



const App = () => (
  <>
  <h1 className="heading_style">List of top 5 Coding Platform</h1>
  {
    Sdata.map((val,index)=>{
    console.log(index);
    return(
    <Card  
    key={val.id}
    imgsrc={val.imgscr}
    title={val.title}
    sname={val.sname}
    link={val.link}
  />
  );
  })}
  </>
)

export default App;
 


