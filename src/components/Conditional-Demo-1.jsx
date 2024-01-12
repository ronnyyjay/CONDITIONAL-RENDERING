const { experimental_taintObjectReference } = require('react');

//comparing function
function Greeting() {
  return <h1>Hello! I am Aaron Pogi!</h1>;
}

const ArrowGreeting = () => <h1>Hello! I am an arrow! </h1>;

//function with an arrow function

function ShinyButton() {
  const handleClcik = () => {};
  return <button onClick={handleClcik}>Click This Button!</button>;
}

export default ShinyButton;
