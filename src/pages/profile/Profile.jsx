import useAuth from "../../utils/hooks/useAuth";

const Profile = () => {
  const { authData } = useAuth();

  return (
    <div>
      <h1>Profile</h1>
      <hr />
      <br />
      <h3>{authData?.name}</h3>
      <h3>{authData?.email}</h3>
    </div>
  );
};

export default Profile;
