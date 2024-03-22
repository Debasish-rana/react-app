import { useEffect, useState } from "react";
import { MENU_API } from "./constent";

const useRestrurentMenu = (resId) => {
  const [restMenu, setRestMenu] = useState(null);
  useEffect(() => {
    fetchDeta();
  }, []);

  const fetchDeta = async () => {
    const deta = await fetch(MENU_API + resId);
    const json = await deta.json();
    console.log(json);
    setRestMenu(json.data);
  };

  return restMenu;
};

export default useRestrurentMenu;
