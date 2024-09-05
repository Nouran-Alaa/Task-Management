import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faApple } from "@fortawesome/free-brands-svg-icons";
import { useNavigate } from "react-router-dom"; // For navigation
import Loader from "../../ui/Loader";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate(); // For navigation

  useEffect(() => {
    alert("User name: NouranAlaa | Password: 123 ");
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "NouranAlaa" && password === "123") {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        navigate("/app/kanban"); // Navigate to the AppLayout route
      }, 3000); // Show loader for 3 seconds
    } else {
      // Handle invalid credentials
      alert("Invalid username or password");
    }
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="absolute inset-0 flex items-center justify-between bg-white">
      <div className="mx-auto w-[300px] p-4 md:p-6 lg:mx-auto lg:w-1/4">
        {/* Form */}
        <form onSubmit={handleSubmit}>
          {/* <h1 className="font-ubuntu mb-8 text-2xl font-extrabold">Taskify</h1> */}
          <img className="mb-4 w-[130px]" src="./images/logo.png" alt="Logo" />
          <p className="mb-8 text-2xl font-bold">Welcome back</p>
          <div className="mb-3 flex flex-col gap-3">
            <label className="text-sm font-semibold">Email or username</label>
            <input
              className="input w-full"
              type="text"
              placeholder="email@company.com"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="mb-3 flex flex-col gap-3">
            <label className="text-sm font-semibold">Password</label>
            <input
              className="input w-full"
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="mt-5 inline-block w-full rounded-full bg-blue-600 px-4 py-3 text-sm font-semibold tracking-wide text-stone-100 outline-none transition-colors duration-300 hover:bg-blue-500 focus:bg-blue-500 focus:ring disabled:cursor-not-allowed md:px-6 md:py-3"
          >
            Log in to Taskify
          </button>
        </form>
        <div className="mt-2">
          <a href="#" className="text-sm text-blue-600">
            Create new account
          </a>
        </div>
        <div className="flex flex-col gap-3">
          <div className="my-4 flex items-center gap-1">
            <div className="flex-grow border-t border-gray-200"></div>
            <h1 className="my-5 text-center text-stone-400">
              or continue with
            </h1>
            <div className="flex-grow border-t border-gray-200"></div>
          </div>
          <a
            href="#"
            className="flex w-full items-center justify-center space-x-2 rounded-full border border-blue-600 px-4 py-2 text-center text-sm font-semibold tracking-wide text-blue-600 outline-none transition-colors duration-300 disabled:cursor-not-allowed md:px-6 md:py-3"
          >
            <FontAwesomeIcon icon={faGoogle} />
            <span>Log in with Google</span>
          </a>
          <a
            href="#"
            className="flex w-full items-center justify-center space-x-2 rounded-full border border-stone-300 px-4 py-2 text-center text-sm font-semibold tracking-wide text-stone-800 outline-none transition-colors duration-300 disabled:cursor-not-allowed md:px-6 md:py-3"
          >
            <FontAwesomeIcon icon={faApple} style={{ fontSize: "20px" }} />
            <span>Log in with Apple</span>
          </a>
        </div>
      </div>
      {/* CTA */}
      <div className="hidden w-auto items-center justify-center bg-[url('../images/background.png')] bg-cover p-4 lg:flex lg:h-dvh lg:w-3/6 lg:flex-col lg:gap-14 lg:p-5">
        <div className="flex flex-col items-center justify-center gap-5 md:w-2/3">
          <h2 className="mb-4 font-ubuntu text-3xl font-semibold text-blue-500 md:text-5xl">
            Collaborate Seamlessly with Your Team
          </h2>
          <p className="mb-4 text-2xl text-gray-600">
            Whether you’re managing a small team or a large organization, our
            tool is designed to keep everyone on the same page. Set priorities,
            monitor deadlines, and ensure that everyone knows what needs to be
            done.
          </p>
          <button className="rounded-full bg-blue-600 px-7 py-5 text-xl font-semibold text-stone-100 shadow transition duration-300 hover:bg-blue-500">
            Start Collaborating
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
