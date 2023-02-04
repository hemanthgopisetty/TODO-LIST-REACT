import { useState } from "react";

function App() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleForm = (e) => {
    e.preventDefault();
    
    if(todo.length >1){
      setTodoList([...todoList, { todoName: todo }]);
    setTodo("");
    }
    else alert("Enter the Todo pls");
  };

  const deleteTodo = (deleteValue) => {
    const restTodoList = [
      ...todoList.filter((val) => {
        return val.todoName !== deleteValue;
      }),
    ];
    setTodoList(restTodoList);
  };

  return (
    <div className="bg-black/90 min-h-screen w-full  ">
      <div className="w-[400px] mx-auto text-center bg-white rounded-lg p-5  ">
        <h1 className="text-5xl font-bold mb-8">Todo List</h1>
        <form onSubmit={handleForm}>
          <input
            className="border-2 placeholder:text-gray-500 rounded-lg border-black w-full p-5 mb-5 text-black"
            type="text"
            placeholder="Add Todo"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          <button
            type="submit"
            className="bg-blue-500 text-white py-3 px-8 rounded-lg mb-8"
          >
            Add Todo
          </button>
        </form>
        <div className="todo-show-area">
          <ul>
            {todoList.map((singleTodo, index) => {
              return (
                <li
                  key={index}
                  className="bg-black mb-5 flex justify-between  text-white py-5 rounded-lg text-2xl px-5"
                >
                  {singleTodo.todoName}{" "}
                  <span
                    onClick={() => deleteTodo(singleTodo.todoName)}
                    className="text-white cursor-pointer text-base bg-red-500 rounded-lg p-1"
                  >
                    Delete
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
