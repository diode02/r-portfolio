import React from "react";
import ExperienceCard from "../../components/experienceCard/ExperienceCard";
import "./ExperienceAccordion.css";
export default function ExperienceAccordion({ theme, sections }) {
  return (
    <div
      className="experience-accord"
      style={{ backgroundColor: theme.body, color: theme.text }}
    >
      {sections.map((section) => (
        <details
          className="accord-panel"
          key={section.title}
          open={section.title === "Work Experience"}
        >
          <summary>{section.title}</summary>
          {section.experiences.map((experience, index) => (
            <ExperienceCard
              key={`${section.title}-${index}`}
              experience={experience}
              theme={theme}
            />
          ))}
        </details>
      ))}
    </div>
  );
}
