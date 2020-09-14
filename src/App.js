import React from 'react';
// import logo from './logo.svg';
import './App.css';

function Wellcome(props){
  return <h1>Hello, {props.name}</h1>;
}

function Comment(props){
  return (
    <div className="Comment">
      <UserInfo user={props.author}/>
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Commnet-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}

function formatDate(date){
  return date.toLocaleDateString();
}

function UserInfo(props){
  return (
    <div className="UserInfo">
      <Avatar user={props.user}/>
      <div className="UserInfo-name">
        {props.user.name}
      </div>
    </div>
  )
}

function Avatar(props){
  return (
    <img className="Avatar"
    src={props.user.avatarUrl}
    alt={props.user.name}
    />
  )
}

const comment = {
  date: new Date(),
  text: "Salam kenal",
  author: {
    name: "david cat",
    avatarUrl: "https://placekitten.com/g/64/64"
  }
}

class Clock extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      date: new Date(),
      name: "hendi",
      isToggleOn: false
    };
    this.handleToggle = this.handleToggle.bind(this);
  }
  
  handleLink = (e)=>{
    e.preventDefault();
    console.log("the link was clicked");
  }
  
  handleToggle (){
    console.log(this.state.isToggleOn);
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }),()=>{console.log(this.state.isToggleOn)});
  }

  componentDidMount(){
    this.timerId = setInterval(()=>{
      this.tick();
    }, 1000);
  }

  componentWillUnmount(){
    clearInterval(this.timerId);
  }

  stopInterval= () => {
    clearInterval(this.timerId);
  }

  tick(){
    this.setState({
      date: new Date()
    })
  }

  changeName = () => {
    this.setState({name : "saputra"});
  }

  render(){
    return (
      <div>
        <h1>Hello World</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        <p>Ini nama saya {this.state.name}</p>
        <button onClick={this.changeName}>change name</button>
        <p>Ini nama saya {this.state.name}</p>
        <button onClick={this.stopInterval}>Stop Time</button>
        <p>Ini nama saya {this.state.name}</p>
        <a onClick={this.handleLink} href="https://google.com">stop link</a>
        <p>Ini nama saya {this.state.name}</p>
        <button onClick={this.handleToggle}>{this.state.isToggleOn ? "ON" : "OFF"}</button>
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <Comment 
      author={comment.author} 
      text={comment.text} 
      date={comment.date}
      />
      <Wellcome name="ardan"/>
      <Wellcome name="arif"/>
      <Wellcome name="alvin"/> */}
    </div>
  );
}

export default Clock;
