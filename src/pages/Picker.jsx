import { useNavigation } from "../contexts/NavigationContext";

const Picker = () => {
  const { location } = useNavigation();
  const isActive = location === 0;

  return <h1>Picker</h1>;
};

export default Picker;
