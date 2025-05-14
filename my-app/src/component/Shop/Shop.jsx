import './Shop.css';
import Header from "./Header/Header";
import Main from "./MainSection/MainSection";
import SocialMedia from "./SocialMedia";
import Footer from './Footer/Footer';

export default function Shop() {
  return (
    <div className="shop">
      <div className="bg-orange d-1025-none py-2 d-flex justify-content-center align-items-center">
        <SocialMedia />
      </div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
