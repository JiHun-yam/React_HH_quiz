import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [todo, setTodos] = useState([
    {
      id: Math.random(),
      title: '나는 지훈1'
    },
    {
      id: Math.random(),
      title: '나는 지훈2'
    },
    {
      id: Math.random(),
      title: '나는 지훈3'
    }
  ]);




  const [todoInput, setTodoInput] = useState('');

  const todoInputHanlder = (event) => {
    setTodoInput(event.target.value)
  }

  const todoButtonHandler = () => {
    let obj = {
      id: Math.random(),
      title: todoInput
    }
    setTodos([...todo, obj])
  }





  return (
    <div className="App">
      <header className='header'>
        <input
          type="text"
          value={todoInput}
          onChange={todoInputHanlder} />
        <button onClick={todoButtonHandler}>버튼</button>
      </header>

      <div className='app-style'>
        {
          todo.map((item) => {
            return <TodoCom key={item.id} item={item} />

          })

        }
      </div>
    </div>
  );
}

const TodoCom = ({ item }) => {
  return <div className='componentes-style'>{item.title}</div>
}





export default App;
