import { Input } from "../../Input";
import { useLocation, useHistory } from "react-router-dom";
import { Wrapper } from "./styled";
import searchQueryParam from "../searchQueryParamName";

export function Search() {
  const location = useLocation();
  const history = useHistory();
  const query = new URLSearchParams(location.search).get(searchQueryParam);

  const onInputChange = ({ target }) => {
    const searchParams = new URLSearchParams(location.search);
    if (target.value.trim() !== "") {
      searchParams.set(searchQueryParam, target.value);
    } else {
      searchParams.delete(searchQueryParam);
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
