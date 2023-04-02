import { DocumentPlusIcon, UserIcon } from "@heroicons/react/24/solid";
import AppBar from "~/components/navigation/AppBar";

const PrepPage = () => {
  return (
    <div>
      <AppBar
        page={"Prep"}
        buttons={[
          {
            Icon: DocumentPlusIcon,
            buttonName: "Add Recipe",
            action: () => console.log("addRecipe"),
          },
          {
            Icon: UserIcon,
            buttonName: "User",
            action: () => console.log("USer"),
          },
        ]}
      />
      <h1>Hello From Prep</h1>
    </div>
  );
};

export default PrepPage;
