import { useEffect, useState } from "react";
import axios from "axios";

const BaseURL = "https://jsonplaceholder.typicode.com";

export default function Todo() {
  const [todos, setTodos] = useState([]);
  // const [data, setData] = useState([]);
  const [status, setStatus] = useState(2); // 0 = not completed, 1 = completed, 2 = all

  const [complete, setComplete] = useState();
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
  };

  function getTodos() {
    const data = fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => console.log(data));
  }

  async function getTodoz() {
    let data = await fetch(BaseURL + "/todos");
    data = await data.json();
    // console.log(data);
    if (data.length) {
      setTodos(data);
      // setData(data);
    }
    // setTotalPages(Math.ceil(data.length / itemsPerPage));
    return data;
  }

  async function getTodoAxios() {
    const response = await axios.get(BaseURL + "/todos");
    let data = response?.data;
    console.log("Data on Todo page", data);
    if (data.length) {
      setTodos(data);
    }
    return data;
  }

  useEffect(() => {
    // getTodoz();
    getTodoAxios();
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

  // function handleData(type = "all") {

  //   let newData = [...todos];

  //   if (type == "all") {
  //     // do nothing
  //   } else if (type == "completed") {
  //     newData = todos.filter((todo) => todo.completed);
  //   } else if (type == "not completed") {
  //     newData = todos.filter((todo) => !todo.completed);
  //   }

  //   setData(newData);
  // }

  const activeTodoList = () => todos.filter((t) => (status > 1 ? true : status ? t.completed : !t.completed));
  const totalPage = () => {
    let total = Math.ceil(activeTodoList().length / 10);
    if (currentPage > total) setCurrentPage(total);
    return total;
  };

  const filteredTodoList = () => activeTodoList().slice((currentPage - 1) * 10, currentPage * 10);

  return (
    <>
      <section className="banner bg-black text-white text-4xl min-h-100px text-center items-center flex justify-center">TODO</section>

      {todos?.length ? (
        <>
          <section className="grid grid-cols-3 py-6 px-6 gap-4 text-xs">
            <div className="grid col-span-2 grid-cols-3 gap-3">
              <a onClick={() => setStatus(2)} className="rounded-full p-3 bg-pink-600 text-white">
                ALL ({todos.length})
              </a>
              <a onClick={() => setStatus(1)} className="rounded-full p-3 bg-pink-600 text-white">
                COMPLETED ({todos.filter((todo) => todo.completed).length})
              </a>
              <a onClick={() => setStatus(0)} className="rounded-full p-3 bg-pink-600 text-white">
                NOT COMPLETED ({todos.filter((todo) => !todo.completed).length})
              </a>
            </div>

            <div className="flex gap-3 items-center justify-end">
              <div className="text-base">
                Page {currentPage} of {totalPage()}
              </div>
              <a onClick={() => setCurrentPage(Math.max(currentPage - 1, 1))} className="rounded-md p-1.5 bg-pink-600 text-white">
                PREV
              </a>
              <a onClick={() => setCurrentPage(Math.min(currentPage + 1, totalPage()))} className="rounded-md p-1.5 bg-pink-600 text-white">
                NEXT
              </a>
            </div>
          </section>

          <section className="py-10 px-6 bg-pink-200">
            <div className="grid grid-cols-5 gap-6">
              {filteredTodoList().map((todo) => (
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
      ) : (
        <section className="py-10 px-6 text-center text-7xl bg-pink-200">No Data</section>
      )}
    </>
  );
}
