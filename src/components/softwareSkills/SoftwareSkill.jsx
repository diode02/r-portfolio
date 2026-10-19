import React from "react";
import { Icon } from "@iconify/react";
import "./SoftwareSkill.css";
export default function SoftwareSkill({ logos }) {
  return (
    <div className="software-skills-main-div">
      <ul className="dev-icons">
        {logos.map((logo) => (
          <li
            key={logo.skillName}
            className="software-skill-inline"
            title={logo.skillName}
            aria-label={logo.skillName}
            tabIndex={0}
          >
            <Icon icon={logo.fontAwesomeClassname} style={logo.style} />
          </li>
        ))}
      </ul>
    </div>
  );
}
