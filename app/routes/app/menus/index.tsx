import {
  ArrowLeftCircleIcon,
  ArrowLongRightIcon,
  ArrowRightCircleIcon,
} from "@heroicons/react/24/solid";
import { Link, useNavigate } from "@remix-run/react";
import { BiDish } from "react-icons/bi";
import LoadingButton from "~/components/buttons/LoadingButton";
import ComboBoxCustom from "~/components/forms/Combobox";
import MultiSelectBox from "~/components/forms/MultiSelectBox";
import SearchBar from "~/components/forms/SearchBar";
import SelectBox from "~/components/forms/SelectBox";
import Example from "~/components/menuComponents/DropDown";
import MenuSummary from "~/components/menuComponents/MenuSummary";

const MenusPage = () => {
  const navigate = useNavigate();
  return <h1>Menus</h1>;
};

export default MenusPage;
