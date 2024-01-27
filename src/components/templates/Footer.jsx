import useAuth from "../../utils/hooks/useAuth";

const Footer = () => {
  const { logoutUser } = useAuth();

  const handleLogout = () => [logoutUser()];
  return (
    <footer>
      <div>
        © {new Date().getFullYear()} React Protected Routes and Auth Management
        by{" "}
        <a
          href={"https://www.linkedin.com/in/vishalgupta26/"}
          target="_blank"
          rel="noreferrer"
        >
          Vishal Gupta
        </a>{" "}
        |{" "}
        <a
          href="https://github.com/vishalguptax/react-protected-routes-and-handling-authentication"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>{" "}
      </div>
      <button onClick={handleLogout}>Logout</button>
    </footer>
  );
};

export default Footer;
