import logo from "./logo.svg";
import "./App.css";
import Main from "./pages/Main";
import footerLeftImage from "./assets/footerLeftImage.svg";
import footerMapImage from "./assets/footerMap.svg";
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
        <img src={footerMapImage} className="footerMapImage" alt="big-news" />
      </footer>
    </div>
  );
}

export default App;
