import { useNavigation } from "../contexts/NavigationContext";

const Random = () => {
  const { location } = useNavigation();
  const isActive = location === 1;

  return <h1>Random</h1>;
};

export default Random;
