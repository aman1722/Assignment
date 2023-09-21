import React, { useState } from "react";

export const sections = [
  {
    title: "Section 1",
    content: "Content for Section 1",
  },
  {
    title: "Section 2",
    content: "Content for Section 2",
  },
  {
    title: "Section 3",
    content: "Content for Section 3",
  },
];

export const AccordionComponent = ({ sections }) => {
  const [activeSection, setActiveSection] = useState(null);

  const handleSectionClick = (index) => {
    setActiveSection(index === activeSection ? null : index);
  };

  return (
    <div className="accordion">
      <h3>Accordian Component</h3>
      <h4>Click on any section</h4>
      {sections.map((section, index) => (
        <div key={index} className="accordion-section">
          <div
            className={`accordion-header ${
              index === activeSection ? "active" : ""
            }`}
            onClick={() => handleSectionClick(index)}
          >
            {section.title}
          </div>
          {index === activeSection && (
            <div className="accordion-content">{section.content}</div>
          )}
        </div>
      ))}
    </div>
  );
};
