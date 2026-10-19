import React from "react";
import { Icon } from "@iconify/react";
import "./ProjectLanguages.css";
export default function ProjectLanguages({ logos }) {
  return (
    <div className="software-skills-main-div">
      <ul className="dev-icons-languages">
        {logos.map((logo) => (
          <li
            key={logo.name}
            className="software-skill-inline-languages"
            title={logo.name}
            aria-label={logo.name}
            tabIndex={0}
          >
            <Icon icon={logo.iconifyClass} style={logo.style} />
          </li>
        ))}
      </ul>
    </div>
  );
}
