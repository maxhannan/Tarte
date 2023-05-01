import { Input } from "../ui/input";

const ImageInput = () => {
  return (
    <div className="grid w-full  items-center gap-1 text-neutral-200 ">
      <Input
        id="picture"
        type="file"
        placeholder="Upload Images"
        multiple
        accept="image/png, image/jpeg"
        name="uploadedImage"
        className="file:dark:text-neutral-200 h-12 file:hover:text-neutral-200 bg-opacity-50 dark:bg-opacity-50 text-neutral-800 file:mr-4 dark:text-neutral-200 dark:bg-neutral-800 file:px-2 p-0 file:text-lg inline-flex file:h-full text-lg dark:border-neutral-700 border-neutral-300 border bg-neutral-200 file:dark:bg-violet-500 file:bg-violet-500 file:text-neutral-200 file:transition-all file:duration-200 file:hover:bg-violet-400 rounded-xl overflow-hidden file:rounded-r-xl"
      />
      <p
        className=" text-sm text-gray-500 dark:text-gray-300 my-1"
        id="file_input_help"
      >
        SVG, PNG, JPG or GIF (MAX. 800x400px).
      </p>
    </div>
  );
};

export default ImageInput;
