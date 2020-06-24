import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// Componentes
// import HookApp from './HookApp';
// import CounterApp from './components/useState/CounterApp';
// import CounterWithCustomHook from './components/useState/CounterWithCustomHook';
// import SimpleForm from './components/useEffect/SimpleForm';
// import FormWithCustomHook from './components/useEffect/FormWithCustomHook';
// import MultipleCustomHooks from './components/examples/MultipleCustomHooks';
// import FocusScreen from './components/useRef/FocusScreen';
// import RealExampleRef from './components/useRef/RealExampleRef';
// import './components/useReducer/introReducer';
// import Layout from './components/useLayoutEffect/Layout';
import TodoApp from './components/useReducer/TodoApp';

ReactDOM.render(
    <TodoApp />,
  document.getElementById('root')
);
