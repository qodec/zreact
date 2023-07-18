import { useEffect, useState } from "react";

export default function Todo() {
  const [todos, setTodos] = useState([]);
  const [complete, setComplete] = useState();

  function getTodos() {
    const data = fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => console.log(data));
  }

  async function getTodoz() {
    let data = await fetch("https://jsonplaceholder.typicode.com/todos");
    data = await data.json();
    // console.log(data);
    if (data.length) setTodos(data);
    return data;
  }

  useEffect(() => {
    getTodoz();
  }, []);

  const handleComplete = (id) => {
    // Style 1
    // for (let todo of todos) {
    //   if (todo.id == id) {
    //     todo.completed = !todo.completed;
    //     break;
    //   }
    // }
    // console.log({ todos });
    // setTodos([...todos]);

    // Style 2
    let todox = todos.map((todo) => {
      if (todo.id == id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(todox);

    // Style 3
    // setTodos(todos.map((todo) => ({ ...todo, completed: todo.id == id ? !todo.completed : todo.completed })));
  };

  const counter = () => {
    // let i = 0;

    // for (let todo in todos) {
    //   // console.log({ todo });
    //   if (todos[todo].completed === true) {
    //     i++;
    //   }
    // }

    // for (let todo of todos) {
    //   console.log({ todo });
    //   if (todo.completed === true) {
    //     i++;
    //   }
    // }
    // return i;

    return todos.filter((todo) => todo.completed).length;
  };

  return (
    <>
      <section className="banner bg-black text-white text-4xl min-h-100px text-center items-center flex justify-center">TODO</section>
      <div className="grid grid-cols-3 gap-4">
        <div className="p-4 bg-blue-50 rounded-lg flex flex-col justify-between text-center min-h-100px">
          ALL
          <div className="rounded-full p-3 bg-green-600">{todos.length}</div>
        </div>
        <div className="p-4 bg-blue-200 rounded-lg flex flex-col justify-between text-center min-h-100px">
          COMPLETED
          <div className="rounded-full p-3 bg-green-600">{todos.filter((todo) => todo.completed).length}</div>
        </div>
        <div className="p-4 bg-blue-100 rounded-lg flex flex-col justify-between text-center min-h-100px">
          NOT COMPLETED
          <div className="rounded-full p-3 bg-green-600">{todos.filter((todo) => !todo.completed).length}</div>
        </div>
      </div>
      <section className="py-10 px-6 bg-pink-200">
        <div className="grid grid-cols-5 gap-6">
          {todos.map((todo) => (
            <div key={todo.id} className="p-4 bg-white rounded-lg flex flex-col justify-between">
              <div>
                <div className="text-xs">TASK</div>
                <div className="text-5xl font-bold opacity-50">{todo.id}</div>
                <div className="leading-tight pt-3">{todo.title}</div>
              </div>
              <div className="text-right">
                <div className="inline-block bg-pink-400 rounded-full p-1.5">
                  <div onClick={() => handleComplete(todo.id)} className={"rounded-full p-3 " + (todo.completed ? "bg-gray-800" : "bg-white")}></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
