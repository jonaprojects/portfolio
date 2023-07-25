import React from "react";

const Section = (props) => {
    return (
        <section className={`mt-8 md:mt-11 ${props.className}`}>
            {props.children}
        </section>
    );
}

export default Section;