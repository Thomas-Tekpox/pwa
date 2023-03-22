import { useNavigation } from "../contexts/NavigationContext";

const Photo = () => {
  const { location } = useNavigation();
  const isActive = location === 2;

  return <h1>Photo</h1>;
};

export default Photo;
