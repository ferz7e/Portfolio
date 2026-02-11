import "./App.css";

function App() {
  return (
    <div className="layout">
      <footer className="footer">
        <div className="footer__wrapper">
          <p className="footer__p">Fernando Zárate © 2026</p>
        </div>{" "}
      </footer>
      <main className="main"></main>
      <header className="header">
        <div className="header__navbar">
          <p className="header__navbar--item">Linkedin</p>
          <p className="header__navbar--item">Github</p>
          <p className="header__navbar--item">Contacto</p>
          <p className="header__navbar--item">Resumen</p>
        </div>
      </header>
    </div>
  );
}
export default App;
