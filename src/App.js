import "./assets/css/style.css";
import Creation from "./components/Creation";
import Footer from "./components/Footer";
import Interactive from "./components/Interactive";
import Nav from "./components/Nav";

function App() {
  return (
    <>
      <section className="heroSection">
        <Nav />
        <div className="main_hero ff-head fw-300">
          <span>Immersive</span>
          <span>experiences</span>
          <span>that deliver</span>
        </div>
      </section>

      <Interactive />
      <Creation />

      <Footer />
    </>
  );
}

export default App;
