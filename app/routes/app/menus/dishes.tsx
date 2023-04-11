import {
  ArrowLongRightIcon,
  ArrowRightCircleIcon,
  ArrowUturnLeftIcon,
} from "@heroicons/react/24/solid";
import { Link, useNavigate } from "@remix-run/react";
import ComboBoxCustom from "~/components/forms/Combobox";
import SearchBar from "~/components/forms/SearchBar";

const DishesPage = () => {
  const navigate = useNavigate();
  return <h1>Dishes</h1>;
};

export default DishesPage;
