import { Input } from "../../Input";
import { useLocation, useHistory } from "react-router-dom";
import { Wrapper } from "./styled";

export function Search() {
  const location = useLocation();
  const history = useHistory();
  const query = new URLSearchParams(location.search).get("szukaj");

  const onInputChange = ({ target }) => {
    const searchParams = new URLSearchParams(location.search);
    if (target.value.trim() !== "") {
      searchParams.set("szukaj", target.value);
    } else {
      searchParams.delete("szukaj");
    }
    history.push(`${location.pathname}?${searchParams.toString()}`);
  };

  return (
    <>
      <Wrapper>
        <Input
          placeholder="Filtruj zadania"
          onChange={onInputChange}
          defaultValue={query}
        />
      </Wrapper>
    </>
  );
}
