import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
//const currDate=new Date().toLocaleDateString();
//const currTime= new Date().toLocaleTimeString();
const img1="https://picsum.photos/200/300/?blur=2";
const img2="https://picsum.photos/250/300.jpg";
const img3= "https://picsum.photos/id/237/250/300";
ReactDOM.render(
<>
<h1  className=" me">Hello,Everyone..</h1>
{/* <p> Current Date is {currDate}</p>
<p> Current time is {currTime}</p> */}
<div className="image">
<img src={img1}alt="randomimage"/>
<img src={img2}alt="randomimage"/>
<img src={img3}alt="randomimage"/>
</div>
<div className="my">
<p>I hope all are doing good...
<br/> Love you all haha...Hope to you see soon everyone.</p>
</div>
 </>,
document.getElementById("root"));
