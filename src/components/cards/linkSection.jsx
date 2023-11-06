import React from "react";

function LinkSection(props) {

    const scrollToSection = (e) => {
        e.preventDefault();
        
        const sectionId = props.href.substring(1); 
        const section = document.getElementById(sectionId);
        
        if (section) {
            const yOffset = -150; 
            const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
            
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    return (
        <div className="col">
            <a  href={props.href}
                className=" text-white text-decoration-none" 
                style={{whiteSpace: "nowrap"}}
                onClick={scrollToSection}>
                {props.text}
            </a>
        </div>
    );
}

export default LinkSection;