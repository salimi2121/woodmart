import { PiPhoneCallFill } from "react-icons/pi";

export default function Footer() {
    return (
        <footer>
            <div className="footer-container mx-2">
                <div className="orange-line mx-2"></div>
                <div className="footer-content">
                    <div className="contact-us text-white">
                        <div>
                            <h4>مسیر های ارتباطی</h4>
                            <div>
                                <div className="d-flex">
                                    <div className="icon p-3"><PiPhoneCallFill /></div>
                                    <div className="mx-2">
                                        <span>شماره تماس</span>
                                        <p>۰۹۲</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}