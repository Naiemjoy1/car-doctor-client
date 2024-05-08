import { Link } from "react-router-dom";
import error from "../../assets/images/404.gif";

const Error = () => {
  return (
    <section className="flex items-center h-full p-16 ">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="max-w-md text-center">
          <img src={error} alt="" />
          <a
            rel="noopener noreferrer"
            href="/"
            className="px-8 py-3 font-semibold rounded dark:bg-violet-600 dark:text-gray-50"
          >
            Back to homepage
          </a>
        </div>
      </div>
    </section>
  );
};

export default Error;
