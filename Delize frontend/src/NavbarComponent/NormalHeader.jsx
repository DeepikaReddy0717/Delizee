import { Link } from "react-router-dom";

const NormalHeader = () => {
  return (
    <ul class="navbar-nav ms-auto mb-2 mb-lg-0 me-5">
      <li class="nav-item">
        <Link
          to="/user/restaurant/register"
          class="nav-link active"
          aria-current="page"
        >
          <b className="text-color">Add Your Restaurant</b>
        </Link>
      </li>

      <li class="nav-item">
        <Link
          to="/user/customer/register"
          class="nav-link active"
          aria-current="page"
        >
          <b className="text-color">Join Delize</b>
        </Link>
      </li>

      <li class="nav-item">
        <Link to="/user/login" class="nav-link active" aria-current="page">
          <b className="text-color">Client Portal</b>
        </Link>
      </li>
    </ul>
  );
};

export default NormalHeader;
