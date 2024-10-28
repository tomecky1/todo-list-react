import styled from "styled-components";

const StyledSection = styled.section`
  display: grid;
  grid-template-columns: 100%;
  /* grid-template-rows: repeat(2, 1fr); */
  margin-bottom: 20px;
  align-items: center;
  justify-content: center;
`;

export const StyledButtons = styled.button`
  display: inline-block;
  align-items: center;
  flex-wrap: nowrap;
`;

const Section = ({ title, children, extraHeaderContent }) => (
  <StyledSection>
    <h2 className="section__title section__item--h2">{title}</h2>

    {extraHeaderContent}
    {children}
  </StyledSection>
);

export default Section;
