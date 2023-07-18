import { useEffect, useState } from "react";

export default function Todo() {
  const [todos, setTodos] = useState([]);

  function getTodos() {
    const data = fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => console.log(data));
  }

  async function getTodoz() {
    let data = await fetch("https://jsonplaceholder.typicode.com/todos");
    data = await data.json();
    console.log(data);
    if (data.length) setTodos(data);
  }

  useEffect(() => {
    getTodoz();
  }, []);

  // let array = ["Jane", "Charles", "NG"];
  // array = array.map((item) => item + " ProMax");
  // console.log({ array });

  return (
    <>
      <section className="banner bg-black text-white text-4xl min-h-100px text-center items-center flex justify-center">TODO</section>
      <section className="py-10 px-6 bg-pink-200">
        <div className="grid grid-cols-5 gap-6">
          {todos.map((todo) => (
            <div className="p-4 bg-white rounded-lg flex flex-col justify-between">
              <div>
                <div className="text-xs">TASK</div>
                <div className="text-5xl font-bold opacity-50">{todo.id}</div>
                <div className="leading-tight pt-3">{todo.title}</div>
              </div>
              <div className="text-right">
                <div className="inline-block bg-pink-400 rounded-full p-1.5">
                  <div className={"rounded-full p-3 " + (todo.completed ? "bg-gray-800" : "bg-white")}></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
