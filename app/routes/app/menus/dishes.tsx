import { Link } from "@remix-run/react";

const DishesPage = () => {
  return (
    <Link to="/app/menus">
      <h1>View Menus</h1>
    </Link>
  );
};

export default DishesPage;
