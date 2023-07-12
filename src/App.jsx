import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Header>
        <div>Promotion Banner</div>
      </Header>
      <main>
        <section className="banner">BANNER</section>
        <section id="features">FEATURE LIST</section>
      </main>
      <Footer year="2040" />
    </>
  );
}
