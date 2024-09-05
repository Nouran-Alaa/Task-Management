import { useNavigate } from "react-router-dom";

function PageNotFound() {
  const navigate = useNavigate();

  return (
    <div className="flex h-dvh flex-col items-center justify-center py-20">
      <div className="mb-8 text-6xl font-extrabold text-gray-400">404</div>
      <h1 className="text-center text-4xl font-extrabold md:text-5xl lg:text-6xl">
        You have found a secret place.
      </h1>
      <p className="mx-auto mt-6 max-w-md text-center text-lg text-gray-500">
        Unfortunately, this is only a 404 page. You may have mistyped the
        address, or the page has been moved to another URL.
      </p>
      <div className="mt-8 flex justify-center">
        <button
          onClick={() => navigate("/app")}
          className="rounded-md border border-blue-500 bg-transparent px-4 py-2 font-medium text-blue-500 transition duration-300 hover:bg-blue-500 hover:text-white"
        >
          Take me back to home page
        </button>
      </div>
    </div>
  );
}

export default PageNotFound;
