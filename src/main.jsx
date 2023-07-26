import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "virtual:uno.css";
import "./assets/css/style.css";

// import App from "./App.jsx";

import Layout from "./components/Layout";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Notfound from "./pages/NotFound";
import Todo from "./pages/Todo";
import Photos from "./pages/Photos";
import Photo from "./pages/Photo";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Create a client
// const queryClient = new QueryClient();

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 1000 * 10 * 60,
    },
  },
});

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="photos" element={<Photos />} />
            <Route path="photos/:id" element={<Photo />} />
            <Route path="contact/:id" element={<Contact />} />
            <Route path="todo" element={<Todo />} />
            <Route path="*" element={<Notfound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
