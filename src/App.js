import React from 'react';



const App = () => {
  const profiles = [
    { name : "Makotoo", age: 10 },
    { name : "Hanako", age: 123 },
    { name : "No name"}
  ];
  return (
    <React.Fragment>
      {
        profiles.map((profile, index) => {
          return <User name={profile.name} age={profile.age} key={index}/>
        })
      }
    </React.Fragment>
  );
}


const User= (props) => {
  return (
    <div>{props.name}です. 俺、{props.age}歳なんだよな.</div>
  );
}



User.defaultProps = {
  age: 1
};

export default App;
