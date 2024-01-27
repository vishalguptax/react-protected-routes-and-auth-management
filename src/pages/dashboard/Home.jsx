import useAuth from "../../utils/hooks/useAuth";

const Home = () => {
  const { authData } = useAuth();
  return <h1>Welcome {authData?.name?.split(" ")[0]}</h1>;
};

export default Home;
