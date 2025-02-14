import {StyledContainer} from "../../common/Container/styled";
import Header from "../../common/Header";
import Section from "../../common/Section";
import {StyledImage} from "./styled";

function Author() {
    return (
        <StyledContainer>
            <Header title="O autorze" />
            <Section
                title="Tomasz Piotrowski - moja inna lista zadań w React'cie, oparta na składni JSX"
                extraHeaderContent={
                    <StyledImage
                        src="https://image.freepik.com/free-vector/cute-cartoon-beaver-listening-music-with-headphone_290315-1409.jpg"
                        alt="bober"
                    />
                }
            >
                <a
                    href="https://todo-zrozumiec-react.netlify.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Tomasz Piotrowski - link do jego innej listy zadań"
                >
                    Tomasz Piotrowski - moja inna lista zadań w React'cie
                </a>
                <p>
                    Cześć, jestem technikiem informatyki. Pracowałem troszkę w serwisie IT
                    dużej firmy, ale nie wytrzymałem presji psychicznej. Później 9 lat jako specjalista ds. archiwizacji dokumentacji medycznej w znowu firmie ogólnopolskiej, ostatnio mnie zwolniono i uczę się programowania frontendowego od 3 lat. 😍
                </p>
            </Section>
        </StyledContainer>
    );
}

export default Author;
