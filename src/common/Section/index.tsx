import styled from "styled-components";
import {SectionHeader} from "./styled";
import {ReactNode} from "react";

const StyledSection = styled.section`
    /* display: grid; */
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;
`;

export const StyledButtons = styled.button`
    display: inline-block;
    align-items: center;
    flex-wrap: nowrap;
`;

interface SectionProps {
    title: ReactNode,
    extraHeaderContent?: ReactNode,
    children: ReactNode,
}

const Section = ({title, children, extraHeaderContent}: SectionProps) => (
    <StyledSection>
        <SectionHeader>
            <h2 className="section__title section__item--h2">{title}</h2>
            {extraHeaderContent}
        </SectionHeader>
        {children}
    </StyledSection>
);

export default Section;
