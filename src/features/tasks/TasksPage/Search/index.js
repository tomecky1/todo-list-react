import { Input } from "../../Input";
import { Wrapper } from "./styled";
import searchQueryParam from "../hooks/searchQueryParamName";
import { useReplaceQueryParameter } from "../hooks/useReplaceQueryParameter";
import { useQueryParameter } from "../hooks/useQueryParameter";

export function Search() {
  // const location = useLocation();
  // const history = useHistory();
  const query = useQueryParameter(searchQueryParam);

  const replaceQueryParameter = useReplaceQueryParameter();

  const onInputChange = ({ target }) => {
    replaceQueryParameter(
      searchQueryParam,
      target.value.trim() === "" ? undefined : target.value
    );
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
