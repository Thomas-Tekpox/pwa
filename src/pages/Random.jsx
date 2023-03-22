import { useEffect } from "react";
import { useNavigation } from "../contexts/NavigationContext";

const Random = () => {
  const { location } = useNavigation();
  const isActive = location === 1;

  const onShake = () => {
    console.log("Shake");
    alert("Shake");
  };

  useEffect(() => {
    if (isActive) {
      window.addEventListener("shake", onShake);
    } else {
      window.removeEventListener("shake", onShake);
    }

    return () => {
      window.removeEventListener("shake", onShake);
    };
  }, [isActive]);

  return <h1>Random</h1>;
};

export default Random;
