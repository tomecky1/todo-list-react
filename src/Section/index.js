const Section = ({ title, children, extraHeaderContent }) => (
    <section className="section">
        <div className="buttons">
            <h2 className="section__title section__item--h2">{title}</h2>
            {extraHeaderContent}
        </div>
        {children}
    </section>
);

export default Section;