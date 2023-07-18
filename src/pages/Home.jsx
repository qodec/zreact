import { useState, useEffect } from "react";

export default function Home() {
  let [inputText, setInputText] = useState("I am AWESOME");
  let [bannerText, setBannerText] = useState("I am AWESOME");

  useEffect(() => {
    console.log("Jane Jane Jane Jane Jane ....");
  }, [bannerText, inputText]);

  const handleChange = (e) => setInputText(e.target.value);

  return (
    <div>
      <section className="banner bg-black text-white text-4xl min-h-200px text-center items-center flex justify-center">{bannerText}</section>
      <section id="features" className="bg-gray-300 py-6 text-center">
        <h2 className="text-3xl opacity-50 p-0 m-0">Hey Homie,</h2>
        <div>tell us how you feel</div>
        <input type="text" onChange={handleChange} className="block mx-auto text-xl p-2 my-2 text-center" />
        <button onClick={() => setBannerText(inputText)} className="px-4 py-1 uppercase">
          Enter
        </button>
      </section>
    </div>
  );
}
