import React from 'react';
import Button from './components/Button/button'

function App() {
  return (
    <div className="App">
      <Button onClick={()=>{alert('add')}}> Add </Button>
      <Button btnType="primary" size="lg"> Add </Button>
      <Button btnType="danger" href="https://www.baidu.com" disabled> Baidu Link </Button>
    </div>
  );
}

export default App;
