import {Input} from "../../Input";
import {Wrapper} from "./styled";
import searchQueryParam from "../hooks/searchQueryParamName";
import {useReplaceQueryParameter} from "../hooks/useReplaceQueryParameter";
import {useQueryParameter} from "../hooks/useQueryParameter";

export function Search() {

    const query = useQueryParameter(searchQueryParam);

    const replaceQueryParameter = useReplaceQueryParameter();

    const onInputChange = ({target}: React.ChangeEvent<HTMLInputElement>) => {
        replaceQueryParameter(
            searchQueryParam,
            target.value.trim() === "" ? undefined : target.value
        );
    };

    return (
        <Wrapper>
            <Input
                placeholder="Filtruj zadania"
                onChange={onInputChange}
                value={query || ""}
                type={"text"}
            />
        </Wrapper>
    );
}
