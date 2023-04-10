import { Link } from "@remix-run/react";

const MenusPage = () => {
  return (
    <Link to="/app/menus/dishes">
      <h1>View all Dishes</h1>
    </Link>
  );
};

export default MenusPage;
