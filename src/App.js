import logo from "./logo.svg";
import "./App.css";
import Main from "./pages/Main";
import footerLeftImage from "./assets/footerLeftImage.svg";
import Button from "./components/Button";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="addNewRecordbuttonContainer">
          <Button title="Add new record" />
        </div>
        <img src={logo} className="App-logo" alt="logo" />
        <h5 className="searchAppTitle">Search app</h5>
        <div className="largeTitleContainer">
          <h3 className="largeTitle">Find in records</h3>
        </div>
        <Main />
      </header>
      <footer className="footer">
        <img src={footerLeftImage} className="footerLeftImage" alt="big-news" />
        <p className="footerDescription">
          İletişim Adres: Çifte Havuzlar Mah. Eski Londra Asfaltı Cad. Kuluçka
          Merkezi D2 Blok No: 151/1F İç Kapı No: 2B03 Esenler/İstanbul Email:
          bilgi@tesodev.com
        </p>
        <p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12041.118984277!2d28.8909481!3d41.0191353!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc98f44e9057adcde!2zVGVzb2RldiBZYXrEsWzEsW0gRG9uYW7EsW0gQmlsacWfaW0gQml5b21lZGlrYWwgS29uZ3JlIFR1cml6bSBFxJ9pdGltIERhbsSxxZ9tYW5sxLFrIExpbWl0ZWQgxZ5pcmtldGk!5e0!3m2!1str!2str!4v1551267054669"
            width="467.49"
            height="222.49"
            frameborder="0"
            className="footerMapImage"
            allowfullscreen=""
          ></iframe>
        </p>
      </footer>
    </div>
  );
}

export default App;
