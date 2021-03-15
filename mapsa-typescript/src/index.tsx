import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Tours from './Tours';
import { Input } from './Input';
import { Input1 } from './Input1';
import Slider from './Slider';
import Slider2 from './Slider2';
import Tabs from './Tabs';
import Todos from './Todos';
import { TodoProvider } from './TodoProvider';
import TodoApp from './TodoApp';
import Cocktail from './Cocktail';
import DivarContainer from './divar/DivarContainer';
import Shop from './shop/Shop';

ReactDOM.render(
  <React.StrictMode>
    {/* <App firstName="ali" /> */}
    {/* <Tours /> */}
    {/* <Input variant="filled" label="Name" />
    <Input1 label="Last Name" helperText="Error" /> */}
    {/* <Slider /> */}
    {/* <Slider2 /> */}
    {/* <Tabs /> */}
    {/* <TodoProvider>
      <Todos />
    </TodoProvider> */}
    {/* <TodoApp /> */}
    {/* <Cocktail /> */}
    {/* <DivarContainer /> */}
    <Shop />
  </React.StrictMode>,
  document.getElementById('root')
);