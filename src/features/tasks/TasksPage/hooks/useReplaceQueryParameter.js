import { useLocation, useHistory } from "react-router-dom";

export const useReplaceQueryParameter = () => {
  const location = useLocation();
  const history = useHistory();

  return (key, value) => {
    const searchParams = new URLSearchParams(location.search);

    if (value === undefined || value.trim() === "") {
      searchParams.delete(key);
    } else {
      searchParams.set(key, value);
    }

    history.push(`${location.pathname}?${searchParams.toString()}`);
  };
};
