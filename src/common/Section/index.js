import styled from "styled-components";

const StyledSection = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
`;

export const StyledButtons = styled.button`
  display: inline-block;
  align-items: center;
  flex-wrap: nowrap;
`;

// const StyledLoadingText = styled.div`
//   color: teal;
//   padding: 10px;
//   text-align: center;
// `;

const Section = ({ title, children, extraHeaderContent }) => (
  <StyledSection>
    <h2 className="section__title section__item--h2">{title}</h2>
    {extraHeaderContent}
    {children}
  </StyledSection>
);

export default Section;
