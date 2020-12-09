import React from 'react';
import Button from './components/Button/button'

function App() {
  return (
    <div className="App">
      <Button onClick={()=>{alert('add')}}> Add </Button>
      {/* <Button btnType={ButtonType.Primary} size={ButtonSize.Large}> Add </Button>
      <Button btnType={ButtonType.Link} href="https://www.baidu.com" disabled> Baidu Link </Button> */}
    </div>
  );
}

export default App;
