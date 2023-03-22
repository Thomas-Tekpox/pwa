import { useNavigation } from "../contexts/NavigationContext";

const User = () => {
  const { location } = useNavigation();
  const isActive = location === 3;

  return <h1>User</h1>;
};

export default User;
