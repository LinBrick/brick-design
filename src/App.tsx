import React from 'react';
import Button from './components/Button/button'
import Menu from './components/Menu/menu'
import MenuItem from './components/Menu/menuItem'

function App() {
  return (
    <div className="App">
      <Button onClick={()=>{alert('add')}}> Add </Button>
      <Button btnType="primary" size="lg"> Add </Button>
      <Button btnType="danger" href="https://www.baidu.com" disabled> Baidu Link </Button>

      <Menu>
        <MenuItem>
          cool link 1
        </MenuItem>
        <MenuItem>
          cool link 2
        </MenuItem>
        <MenuItem>
          cool link 3
        </MenuItem>
      </Menu>
    </div>
  );
}

export default App;
