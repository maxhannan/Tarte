const RecipePage = () => {
  return (
    <div className="dark:bg-neutral-800 bg-neutral-200 rounded-r-3xl font-light rounded-l-md rounded-bl-3xl text-lg text-neutral-700 dark:text-neutral-100 mt-4">
      <table className="w-full text-base  text-left ">
        <thead className="text-lg  bg-neutral-700 text-neutral-100  border-none   ">
          <tr>
            <th
              scope="col"
              className="px-6  font-light py-3 border-none  rounded-tl-md"
            >
              Ingredient
            </th>
            <th
              scope="col"
              className="px-6 py-3  font-light border-none  rounded-tr-3xl"
            >
              Color
            </th>
          </tr>
        </thead>
        <tbody className="">
          <tr>
            <th
              scope="row"
              className="px-6 py-4  font-light text-gray-900 whitespace-nowrap dark:text-white"
            >
              Olive Oil
            </th>
            <td className="px-6 py-4">100g</td>
          </tr>
          <tr>
            <th
              scope="row"
              className="px-6 py-4  font-light text-gray-900 whitespace-nowrap dark:text-white"
            >
              Butter
            </th>
            <td className="px-6 py-4">2000g</td>
          </tr>
          <tr>
            <th
              scope="row"
              className="px-6 py-4  font-light text-gray-900 whitespace-nowrap dark:text-white"
            >
              Milk Sponge
            </th>
            <td className="px-6 py-4">792g</td>
          </tr>
          <tr>
            <th
              scope="row"
              className="px-6 py-4  font-light  text-gray-900 whitespace-nowrap dark:text-white"
            >
              Chorizo Oil
            </th>
            <td className="px-6 py-4 ">200g</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default RecipePage;
