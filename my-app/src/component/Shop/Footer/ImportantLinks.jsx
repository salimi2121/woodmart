import { Link } from "react-router-dom";
import { importantLinks } from "../constants";

export default function ImportantLinks() {
    return (
        <div className="important-links mt-4">
            <div className="text-white">
                <h2>لینک های مهم</h2>
                <ul className="m-0 p-0">
                    {importantLinks.map((item, i) => (
                        <li className="w-50 d-inline-block my-2" key={i}><Link to={item.href} className="text-white">{item.title}</Link></li>
                    ))}
                </ul>
            </div>
            <div className="footer-logo d-flex justify-content-around my-2">
                <img src="/images/samandehipng.parspng-5.png" alt="" />
                <img src="/images/enamad-1-9.png" alt="" />
                <img src="/images/etehadiekeshvaripng.parspng-4.png" alt="" />
            </div>
        </div>
    )
}