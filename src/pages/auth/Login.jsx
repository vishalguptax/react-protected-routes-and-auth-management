import { useState } from "react";
import NavLinks from "../../components/shared/NavLinks";
import useAuth from "../../utils/hooks/useAuth";
import { Loader } from "../../components/ui/Loader";

const Login = () => {
  const { loginUser } = useAuth();

  const [userData, setUserData] = useState({
    name: "",
    email: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setUserData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      loginUser(userData);
    }, 3000);
  };

  return (
    <section>
      <h1>Login</h1>
      <NavLinks />
      <form onSubmit={handleLogin} className="login-form">
        <input
          required
          type="text"
          name="name"
          placeholder="Enter Your Name"
          minLength={3}
          max={50}
          value={userData.name}
          onChange={handleChange}
        />
        <input
          required
          type="email"
          name="email"
          placeholder="Enter Your Email"
          value={userData.email}
          onChange={handleChange}
        />
        <button>
          {isLoading ? (
            <>
              <Loader /> Logging In...
            </>
          ) : (
            "Login"
          )}
        </button>
      </form>
    </section>
  );
};

export default Login;
