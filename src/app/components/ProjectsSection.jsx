"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "Project 1 description",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Potography Portfolio Website",
    description: "Project 2 description",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "E-commerce Application",
    description: "Project 3 description",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Food Ordering Application",
    description: "Project 4 description",
    image: "/images/projects/4.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "React Firebase Template",
    description: "Authentication and CRUD operations",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Full-stack Roadmap",
    description: "Project 5 description",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        Our Services
      </h2>
      <section>
        <h2 class="text-3xl font-semibold text-white-600 mb-6">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
            Mobile UI/UX Design
          </span>
        </h2>
        <p class="text-white text-lg mb-6">
          In today’s mobile-first world, the importance of a well-designed
          mobile application cannot be overstated. We focus on creating visually
          appealing and user-friendly interfaces that make navigating your app
          effortless. Whether it’s a simple application or a complex platform,
          our design process ensures your app is both functional and delightful
          to use.
        </p>
        <ul class="text-white list-disc pl-5 mb-8">
          <li class="mb-2">Custom Mobile UI Design</li>
          <li class="mb-2">Interactive Prototypes</li>
          <li class="mb-2">User Journey Mapping</li>
          <li class="mb-2">Usability Testing</li>
          <li class="mb-2">Cross-Platform Consistency</li>
        </ul>
      </section>

      <section>
        <h2 class="text-white text-3xl font-semibold text-white-600 mb-6">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
            Web UI/UX Design
          </span>
        </h2>
        <p class="text-white text-lg mb-6">
          Your website is often the first interaction users have with your
          brand. We make sure it’s a memorable one. By combining aesthetics with
          usability, we design websites that not only look great but also
          provide an intuitive and enjoyable experience for every visitor.
        </p>
        <ul class="text-white list-disc pl-5 mb-8">
          <li class="mb-2">Responsive Web Design</li>
          <li class="mb-2">User Research & Personas</li>
          <li class="mb-2">Wireframing & Prototyping</li>
          <li class="mb-2">Information Architecture</li>
          <li class="mb-2">Accessibility & Inclusive Design</li>
        </ul>
      </section>

      <section>
        <h2 class="text-3xl font-semibold text-white-600 mb-6">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
            Why Choose Elevate?
          </span>
        </h2>
        <ul class="text-white list-disc pl-5 mb-8">
          <li class="mb-2">User-Centric Approach</li>
          <li class="mb-2">Innovative Design Solutions</li>
          <li class="mb-2">Collaborative Process</li>
          <li class="mb-2">Proven Expertise</li>
          <li class="mb-2">End-to-End Service</li>
        </ul>
      </section>

      <section>
        <h2 class="text-3xl font-semibold text-white-600 mb-6">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
            Our Process
          </span>
        </h2>
        <ol class="text-white list-decimal pl-5 mb-8">
          <li class="mb-2">Discovery & Research</li>
          <li class="mb-2">Strategy & Planning</li>
          <li class="mb-2">Design & Prototype</li>
          <li class="mb-2">Development & Implementation</li>
          <li class="mb-2">Testing & Refinement</li>
          <li class="mb-2">Launch & Support</li>
        </ol>
      </section>
      {/* <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul> */}
    </section>
  );
};

export default ProjectsSection;
