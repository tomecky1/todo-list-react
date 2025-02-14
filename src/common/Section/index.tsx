import {SectionHeader, StyledSection} from "./styled";
import {ReactNode} from "react";

export interface SectionProps {
    title: string,
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
