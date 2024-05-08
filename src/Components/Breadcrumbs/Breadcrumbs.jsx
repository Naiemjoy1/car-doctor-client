import { useParams } from "react-router-dom";

const Breadcrumbs = () => {
  const { id } = useParams();

  return (
    <div className="text-sm breadcrumbs text-white">
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/details">Details</a>
        </li>
        <li>{id}</li>
      </ul>
    </div>
  );
};

export default Breadcrumbs;
