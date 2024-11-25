import React, { PureComponent, useContext } from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";
import { LangContext } from "../../utils/context";

import "./skills.css";

const Skills = () => {
  const { lang } = useContext(LangContext);
  const hskills = [
    {
      subject: "HTML, CSS",
      A: 100,
      fullMark: 100,
    },
    {
      subject: "JS",
      A: 94,
      fullMark: 100,
    },
    {
      subject: "React",
      A: 90,
      fullMark: 100,
    },
    {
      subject: "PHP",
      A: 80,
      fullMark: 100,
    },
    {
      subject: "SQL",
      A: 80,
      fullMark: 100,
    },
    {
      subject: "Node",
      A: 90,
      fullMark: 100,
    },
    {
      subject: "MongooDB",
      A: 70,
      fullMark: 100,
    },
  ];
  const method = [
    {
      subject: "UX/UI",
      A: 90,
      fullMark: 100,
    },
    {
      subject: "DevOps",
      A: 85,
      fullMark: 100,
    },

    {
      subject: lang === "en" ? "agility" : "agilité",
      A: 98,
      fullMark: 100,
    },
    {
      subject: "versionning",
      A: 99,
      fullMark: 100,
    },

    {
      subject: "front-end",
      A: 98,
      fullMark: 100,
    },
    {
      subject: "back-end",
      A: 70,
      fullMark: 100,
    },
  ];
  const sskills = [
    {
      subject: "Communication",
      A: 90,
      fullMark: 100,
    },
    {
      subject: "Team working",
      A: 85,
      fullMark: 100,
    },

    {
      subject: "Self-control",
      A: 98,
      fullMark: 100,
    },
    {
      subject: "Memory",
      A: 99,
      fullMark: 100,
    },

    {
      subject: "Organisation",
      A: 98,
      fullMark: 100,
    },
    {
      subject: "Mediation",
      A: 70,
      fullMark: 100,
    },
    {
      subject: "Initiateur",
      A: 70,
      fullMark: 100,
    },
  ];
  return (
    <section className="skillsSec">
      <h1>{lang === "en" ? "Present my skills" : "Mon expertise"}</h1>
      <div className="chartsContainer">
        <ResponsiveContainer>
          <RadarChart cx="50%" cy="50%" outerRadius="55%" data={hskills}>
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" tick={{ fill: "#1E1D32" }} />
            <Radar
              name="Mike"
              dataKey="A"
              stroke="1E1D32"
              fill="1E1D32"
              fillOpacity={0.6}
            />
          </RadarChart>
          <div className="label">
            {lang === "en" ? "Tech used" : "Mes techno'"}
          </div>
        </ResponsiveContainer>
        <ResponsiveContainer>
          <div className="label">{lang === "en" ? "Methods" : "Méthodes"}</div>
          <RadarChart cx="50%" cy="50%" outerRadius="55%" data={method}>
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" tick={{ fill: "#1E1D32" }} />
            <Radar
              name="Mike"
              dataKey="A"
              stroke="1E1D32"
              fill="1E1D32"
              fillOpacity={0.6}
            />
          </RadarChart>
        </ResponsiveContainer>
        <ResponsiveContainer>
          <div className="label">SoftSkills</div>
          <RadarChart cx="50%" cy="50%" outerRadius="55%" data={sskills}>
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" tick={{ fill: "#1E1D32" }} />
            <Radar
              name="Mike"
              dataKey="A"
              stroke="1E1D32"
              fill="1E1D32"
              fillOpacity={0.6}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
};

export default Skills;
