import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";

export default function Footer() {
  return (
    <footer>
      <div className="footer-container mx-2">
        <div className="orange-line mx-2"></div>
        <div className="footer-content p-4">
          <ContactUs />
          <AboutUs />
        </div>
      </div>
    </footer>
  );
}
