import Container from "../../common/Container";
import Header from "../../common/Header";
import Section from "../../common/Section";

function Author() {
  return (
    <Container>
      <Header title="O autorze" />
      <Section
        title="Tomasz Piotrowski"
        children={
          <p>
            Cześć, jestem technikiem informatyki. Pracowałem troszkę w serwisie
            IT duzej firmy , ale nie wytrzymałem presji psychicznej. Pózniej 9
            lat jako specjalista ds. archiwizacji dokumentacji medycznej w znowu
            firmie ogólnopolskiej, ostatnio mnie zwolniono i uczę się
            programowania frontendowego od 3 lat.😍
          </p>
        }
      />
    </Container>
  );
}

export default Author;
