import {
  FaFacebook,
  FaLocationDot,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { PiPhoneCallFill } from "react-icons/pi";

export default function ContactUs() {
  return (
    <div className="contact-us text-white">
      <div>
        <h5>مسیر های ارتباطی</h5>
        <div>
          <div className="d-flex align-items-center">
            <div className="icon d-flex justify-content-center align-items-center">
              <PiPhoneCallFill className="fs-4" />
            </div>
            <div className="mx-2 pt-2">
              <span className="contact-title">شماره تماس</span>
              <p className="fw-bold contact-content">۰۹۱۲۳۴۵۶۷۸ و ۰۹۱۲۳۴۵۶۷۸</p>
            </div>
          </div>
          <div className="d-flex align-items-center">
            <div className="icon d-flex justify-content-center align-items-center">
              <FaLocationDot className="fs-4" />
            </div>
            <div className="mx-2 pt-2">
              <span className="contact-title">آدرس</span>
              <p className="fw-bold contact-content">
                تهران، میدان انقلاب، کوچه سوم، پلاک ۴
              </p>
            </div>
          </div>
          <div className="d-flex align-items-center">
            <div className="icon d-flex justify-content-center align-items-center">
              <MdEmail className="fs-4" />
            </div>
            <div className="mx-2 pt-2">
              <span className="contact-title">ایمیل</span>
              <p className="fw-bold contact-content">yourmail@mail.com</p>
            </div>
          </div>
        </div>
        <div className="footer-social-media px-2 w-100 d-flex align-items-center justify-content-between">
          <span className="fw-500">با ما در ارتباط باشید</span>
          <div>
            <a href="#" className="text-white me-3 fs-3">
              <FaFacebook />
            </a>
            <a href="#" className="text-white me-3 fs-3">
              <FaTwitter />
            </a>
            <a href="#" className="text-white me-3 fs-3">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
