import {
  ArrowRightIcon,
  ArrowUturnLeftIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";
import { useNavigate } from "@remix-run/react";
import CustomDisclosure from "~/components/displays/customDisclosure";
import CustomTextInput from "~/components/forms/CustomTextInput";
import SearchBar from "~/components/forms/SearchBar";
import AppBar from "~/components/navigation/AppBar";
import PrepListItem from "~/components/prep/PrepListItem";

const PrepListPage = () => {
  const navigate = useNavigate();
  return (
    <div className=" container mx-auto max-w-4xl mb-28">
      <AppBar
        page={"PM Grill"}
        buttons={[
          {
            Icon: ArrowUturnLeftIcon,
            buttonName: "Add Recipe",
            action: () => navigate(-1),
          },
        ]}
      />
      <SearchBar
        handleChange={() => (e: string) => console.log(e)}
        value={""}
      />
      <div className="w-full flex flex-col gap-2 mt-2">
        <CustomDisclosure name={"Hummus"}>
          <PrepListItem name={"Hummus Base"} unit="Quarts" />
          <PrepListItem name={"Crispy Chickpeas"} unit="Quarts" />
          <PrepListItem name={"Tahini Puree"} unit="Quarts" />
          <PrepListItem name={"Pita Bread / Socca Wraps"} unit="EA" />
          <PrepListItem name={"Chopped Parsely"} unit="Pints" />
          <PrepListItem name={"Jean Reno"} unit="Squeeze Bottle" />
        </CustomDisclosure>
        <CustomDisclosure name={"Hummus"}>
          <PrepListItem name={"Hummus Base"} unit="Quarts" />
          <PrepListItem name={"Crispy Chickpeas"} unit="Quarts" />
          <PrepListItem name={"Tahini Puree"} unit="Quarts" />
          <PrepListItem name={"Pita Bread / Socca Wraps"} unit="EA" />
          <PrepListItem name={"Chopped Parsely"} unit="Pints" />
          <PrepListItem name={"Jean Reno"} unit="Squeeze Bottle" />
        </CustomDisclosure>
        <CustomDisclosure name={"Hummus"}>
          <PrepListItem name={"Hummus Base"} unit="Quarts" />
          <PrepListItem name={"Crispy Chickpeas"} unit="Quarts" />
          <PrepListItem name={"Tahini Puree"} unit="Quarts" />
          <PrepListItem name={"Pita Bread / Socca Wraps"} unit="EA" />
          <PrepListItem name={"Chopped Parsely"} unit="Pints" />
          <PrepListItem name={"Jean Reno"} unit="Squeeze Bottle" />
        </CustomDisclosure>
        <CustomDisclosure name={"Hummus"}>
          <PrepListItem name={"Hummus Base"} unit="Quarts" />
          <PrepListItem name={"Crispy Chickpeas"} unit="Quarts" />
          <PrepListItem name={"Tahini Puree"} unit="Quarts" />
          <PrepListItem name={"Pita Bread / Socca Wraps"} unit="EA" />
          <PrepListItem name={"Chopped Parsely"} unit="Pints" />
          <PrepListItem name={"Jean Reno"} unit="Squeeze Bottle" />
        </CustomDisclosure>
        <CustomDisclosure name={"Hummus"}>
          <PrepListItem name={"Hummus Base"} unit="Quarts" />
          <PrepListItem name={"Crispy Chickpeas"} unit="Quarts" />
          <PrepListItem name={"Tahini Puree"} unit="Quarts" />
          <PrepListItem name={"Pita Bread / Socca Wraps"} unit="EA" />
          <PrepListItem name={"Chopped Parsely"} unit="Pints" />
          <PrepListItem name={"Jean Reno"} unit="Squeeze Bottle" />
        </CustomDisclosure>
      </div>
    </div>
  );
};

export default PrepListPage;
