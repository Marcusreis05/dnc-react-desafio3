import React, { useState, useRef } from 'react';
import edit from '../../assets/editar.svg';
import delet from '../../assets/deletar.svg';
import add from '../../assets/adicionar.svg';
import Popup from '../Popup/Popup';
import "./index.scss";

// import

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);
  const [mostrarPopupEditar, setMostrarPopupEditar] = useState(false);
  const [mostrarPopupDeletar, setMostrarPopupDeletar] = useState(false);
  const [itemIndexAcao, setItemIndexAcao] = useState(null);
  const inputRef = useRef(null);

  const addTodo = () => {
    if (newTodo.trim() !== '') {
      if (editingIndex !== null) {
        const updatedTodos = [...todos];
        updatedTodos[editingIndex] = newTodo;
        setTodos(updatedTodos);
        setEditingIndex(null);
        }else{
        setTodos([...todos, newTodo]);
              }
        setNewTodo('');
        inputRef.current.focus();
    }
  };

  const editTodo = (index) => {
    setNewTodo(todos[index]);
    setEditingIndex(index);
    setMostrarPopupEditar(true);
    setItemIndexAcao(index);
  };

  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  const handleNaoEditar = () => {
    const updatedTodos = [...todos];
    updatedTodos[itemIndexAcao] = newTodo;
    setTodos(updatedTodos);
    setEditingIndex(null);
    setMostrarPopupEditar(false);
  };

  const handleSimEditar = () => {
    setMostrarPopupEditar(false);
    inputRef.current.focus();
  };

  const handleSimDeletar = () => {
    deleteTodo(itemIndexAcao);
    setMostrarPopupDeletar(false);
  };

  const handleNaoDeletar = () => {
    setMostrarPopupDeletar(false);
  };

  return (
    <div className='list'>
      <h1>Otimize seu tempo e se organize com o nosso Planejador Diário.</h1>
      <div className='list__info'>
        <h2>Tarefa</h2>
        <h2>Status</h2>
        <h2>Opções</h2>
      </div>

      <ul className='list__todo-list'>

        {todos.map((todo, index) => (

          <li key={index}>

            <div className='list__li-list'>
              <div>
                <p className='list__txt'>{todo}</p>
              </div>
              <div>
                <input type="checkbox" />
              </div>
              <div className='list__btn-del-edt'>

                <div >

                  <button onClick={() => editTodo(index)}><img src={edit}></img></button>

                  {mostrarPopupEditar && (
                    <Popup
                      titulo={'editar'}
                      texto={`Você tem certeza de que deseja editar "${todo}"?`}
                      onSim={handleSimEditar}
                      onNao={handleNaoEditar}
                    />
                  )}

                </div>
                
                <div>

                  <button onClick={() => {setItemIndexAcao(index); setMostrarPopupDeletar(true);}}><img src={delet}></img></button>

                  {mostrarPopupDeletar && (
                    <Popup
                      titulo={'exluir'}
                      texto={`Você tem certeza de que deseja excluir "${todo}"?`}
                      onSim={handleSimDeletar}
                      onNao={handleNaoDeletar}
                    />
                  )}
                  
                </div>
              </div>
            </div>

          </li>

        ))}

      </ul>
      
      <input ref={inputRef} type="text" placeholder="Nova tarefa..." value={newTodo} onChange={(e) => setNewTodo(e.target.value)} className='list__add'/>

      <button onClick={addTodo}>{editingIndex !== null ? <img src={add} width='20px'></img> : <img src={add} width='20px'></img>}</button>
    
    </div>
  );
};

export default TodoList;