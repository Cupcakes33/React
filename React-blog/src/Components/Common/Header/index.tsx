import { Link } from "react-router-dom";
import ROUTES from "../../../router/constants";


export default function Header() {

  return (
    <ul>
      {ROUTES.map((route) => (
        <li key={route.path}>
          <Link to={route.path}>{route.label}</Link>
        </li>
      ))}
    </ul>
  );
}
