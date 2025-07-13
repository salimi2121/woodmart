import { Link } from "react-router-dom";
import { category } from "../../constants";

export default function MenuList(props) {
  return (
    props.topic === "منو" ? (
    <nav>
      <ul className="p-0 m-0">
        {props.navItems.map((item, i) => (
          <li key={i} className={`p-3 pointer w-100 border ${item.isActive && "link-active"}`}>
            <Link to={item.href} className={` ${item.isActive && "link-active"}`}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
    ) : (
      <div>
        <ul className="p-0 m-0">
          {category.map((item, i) => (
            <li key={i} className="p-3 pointer w-100 border text-orange">{item}</li>
          ))}
        </ul>
      </div>
    )
  )
}
