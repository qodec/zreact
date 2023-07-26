import { useState, useEffect } from "react";
import axios from "axios";

const BaseURL = "https://jsonplaceholder.typicode.com";

export default function Contact() {
  const [todos, setTodos] = useState([]);

  async function getTodoAxios() {
    const response = await axios.get(BaseURL + "/todos");
    let data = response?.data;
    console.log("Data on Contact page", data);
    // console.log({ data });
    if (data.length) {
      setTodos(data);
    }
    return data;
  }

  useEffect(() => {
    // getTodoz();
    getTodoAxios();
  }, []);

  return (
    <>
      <div className="flex w-93% px-30px py-20px justify-between items-center">
        <div className="w-45%">
          <h1 className="text-50px text-blue">Get In Touch.</h1>
          <p className="text-2xl">
            We have <b>{todos.filter((todo) => todo.completed).length}</b> task in our Todo list
          </p>
          <p className="lh-24px text-20px text-justify">
            Need to hire a talent? need a website? Got a gig for us? Don't hesitate to buzz us. We are 24hours ready, up and running!{" "}
          </p>
        </div>
        <div className="w-50% flex flex-col">
          <form action="" className="w-100%">
            <label htmlFor="" className="text-18px">
              Full Name
            </label>
            <br />
            <input type="text" placeholder="Your Full Name" className="w-100%  px-15px py-15px my-5px b-none bg-#f2f8fb rounded-lg outline-none" required />
            <br />
            <br />
            <label htmlFor="" className="text-18px">
              Email
            </label>
            <br />
            <input type="email" placeholder="Your Email" className="w-100% px-15px py-15px my-5px b-none bg-#f2f8fb rounded-lg outline-none" required />
            <br />
            <br />
            <label htmlFor="" className="text-18px">
              Message
            </label>
            <br />
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Your Message"
              className="w-100% px-15px py-15px my-5px b-none bg-#f2f8fb rounded-lg outline-none"
              required
            ></textarea>
            <br />
            <br />
            <input type="submit" value="Send" className="px-30px py-15px text-18px w-200px bg-blue-400 b-blue rounded-lg text-white" />
          </form>
        </div>
      </div>
    </>
  );
}

// import { Link, useParams } from "react-router-dom";

// export default function Contact() {
//   let params = useParams();
//   console.log({ params });
//   return (
//     <div>
//       <h1>Contact Page of ID: {params.id}</h1>
//       <div>
//         <Link to="/contact/1">Contact 1</Link>
//       </div>
//       <div>
//         <Link to="/contact/101">Contact 101</Link>
//       </div>
//       <div>
//         <Link to="/contact/202">Contact 202</Link>
//       </div>
//     </div>
//   );
// }
