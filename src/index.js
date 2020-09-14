import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


// function formatName(user) {
//   return user.firstName + " " + user.lastName
// }
// const user = {
//   firstName: "hendi",
//   lastName: "saputra"
// }
// const element = <h1>Hello, {formatName(user)}</h1>
// function getUser(user){
//   if (user) {
//     return <h1>Hallo, {formatName(user)}</h1>
//   }
//   return <h1>Hallo, Strange</h1>
// }
// function tick() {
//   const element = (
//     <div>
//       <h1>Hello World</h1>
//       <h2>It is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   );
// function Welcome(props){
//   return <h1>Hello, {props.name}</h1>
// }
// const element = <Welcome name="hendi"/>
ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);
// }
// setInterval(tick,1000)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
