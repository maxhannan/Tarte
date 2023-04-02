import { redirect } from "@remix-run/node";

export const loader = () => {
  return redirect("/app/recipes");
};
export default function Index() {
  return <div className=" px-4"></div>;
}
