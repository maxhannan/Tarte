import { DocumentPlusIcon } from "@heroicons/react/24/outline";
import AppBar from "~/components/navigation/AppBar";

const PrepListPage = () => {
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
        ]}
      />
    </div>
  );
};

export default PrepListPage;
