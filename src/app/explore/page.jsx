'use client'

import React, { use, useEffect, useState } from "react";
import Text from "@/components/text/text";
import ProjectCard from "@/components/projectCard/projectCard";
import Button from "@/components/button/button";
import MetricItem from "@/components/metricItem/metricItem";
import Illustration from "@/components/image/image";
import Image from "next/image";

import styles from "../styles/explorePage.module.css";
import { useDispatch } from "react-redux";
import { initializeAuth } from "../../services/auth";
import { getAllProjects, getUserData } from "@/services/database";

export default function Page() {
  const [projects, setProjects] = useState([]);
  const dispatch = useDispatch();



  useEffect(() => {
    initializeAuth(dispatch);
    handleGetAllProjects();
  }, [dispatch]);


  const handleGetAllProjects = async () => {
    try{
      const projects = await getAllProjects();
  
      const projectsWithUser = [];
  
      for (let project of projects) {
        const userData = await getUserData(project);
  
        project.user = userData;
  
        projectsWithUser.push(project);
      }
  
      setProjects(projectsWithUser);
  
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <div className={styles.explorePage}>
      <section className={styles.projectExplore}>
        <div className={styles.projectheading}>
          <Text variant="title">Projets en vedette</Text>
          <Text variant="supportingtext">
            Découvrez les projets les plus populaires de FundSpark.
          </Text>
        </div>
        <div className={styles.projectList}>
        {projects.map((project) => (
            <ProjectCard
            key={"000"+project.project_title}
              category={project.category}
              date="15 mars 2023"
              description={project.description}
              imgSrc={project.project_image}
              link={"/project/" + project.project_id}
              progress={{
                current: project.current,
                total: project.total,
              }}
              title={project.project_title}
              user={{
                img: project.user.photoURL,
                name: project.user.displayName,
                uid: project.user.uid,
              }}
            />
            ))
            }
        </div>
      </section>
      <section className={styles.Cta}>
      <Image
          className={styles.backGrid2}
          src={"/backGrid.png"}
          height={1235}
          width={1235}
          alt="Back Grid"
        />
        <div className={styles.CtaHeading}>
          <Text variant="title">Prêt à transformer vos idées en réalité ?</Text>
          <Text variant="supportingtext">
          Avec FundSpark, il n&apos;a jamais été aussi simple de lancer un projet. Commencez dès aujourd&apos;hui !
          </Text>
          </div>
          <div className={styles.CtaAction}>
            <Button label="Démarrer un projet" type="XL" link={"/create"} />
            </div>
          <Illustration src={"/unidosh_Idea_Coming_to_Life_Un_entrepreneur_travaillant_tard_da_51c7c56d-2289-49cc-9e82-0f89039ff5a9.png"} type={"content"} alt="CTA Image" />
      </section>
    </div>
  );
}
