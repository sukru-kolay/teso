import React from "react";
import searchIcon from "../assets/searchIcon.svg";
import Button from "../components/Button";
import ResultsCard from "../components/ResultsCard";
import BigNewsCard from "../components/NewsCard";
import footerLeftImage from "../assets/footerLeftImage.svg";
import footerMapImage from "../assets/footerMap.svg";
const Main = () => {
  return (
    <>
      <div className="search-button">
        <div className="search-container">
          <div className="input-container">
            <img src={searchIcon} className="search-icon" alt="search" />
            <input
              className="input"
              placeholder="Search..."
              onChange={(e) => console.log(e.target.value)}
            />
          </div>
        </div>
        <Button />
      </div>
      <ResultsCard />
      <div>
        <h3 className="topNews">Top News</h3>
        <div style={{ display: "flex" }}>
          <BigNewsCard />
          <BigNewsCard />
          <BigNewsCard />
        </div>
      </div>
      <footer className="footer">
        <div className="footerLeftImageContainer">
          <img
            src={footerLeftImage}
            className="footerLeftImage"
            alt="big-news"
          />
        </div>
        <div className="footerDescriptionContainer">
          <p className="footerDescription">
            İletişim Adres: Çifte Havuzlar Mah. Eski Londra Asfaltı Cad. Kuluçka
            Merkezi D2 Blok No: 151/1F İç Kapı No: 2B03 Esenler/İstanbul Email:
            bilgi@tesodev.com
          </p>
        </div>
        <div className="footerMapImageContainer">
          <img src={footerMapImage} className="footerMapImage" alt="big-news" />
        </div>
      </footer>
    </>
  );
};

export default Main;
