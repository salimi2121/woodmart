import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import ImportantLinks from "./ImportantLinks";

export default function Footer() {
  return (
    <footer>
      <div className="footer-container mx-2">
        <div className="orange-line mx-2"></div>
        <div className="footer-content pt-4 px-4">
          <div className="footer-sections">
            <ContactUs />
            <AboutUs />
            <ImportantLinks />
          </div>
          <div className="copyright text-center text-white fw-500 py-2 mt-5">کلیه حقوق متعلق به آرامیس می باشد.</div>
        </div>
      </div>
    </footer>
  );
}
