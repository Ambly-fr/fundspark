"use client";
import React, { useEffect, useState } from "react";

import styles from "../../styles/userProfile.module.css";
import Image from "next/image";
import Text from "@/components/text/text";
import { useDispatch, useSelector } from "react-redux";
import { initializeAuth, logout } from "@/services/auth";
import ProjectCard from "@/components/projectCard/projectCard";
import Button from "@/components/button/button";
import { useRouter } from "next/navigation";
import { getAllProjects, getUserData, getUserStats } from "@/services/database";

export default function Page({ params }) {
  const [userStats, setUserStats] = useState({ contributionsCount: 0, createdProjectsCount: 0 });
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
  

  const user = useSelector((state) => state.user);
  const router = useRouter();

  useEffect(() => {
    if (user?.value?.uid) {
      getUserStats(user.value.uid).then(setUserStats);
    }
  }, [user]);

  return (
    <div className={styles.userPage}>
      <section className={styles.userProfile}>
        <div className={styles.userProfileHeading}>
          {!user?.value?.photoURL ? (
            <Button
              type="LinkXL"
              label={"Ajouter une photo"}
              onClick={() => {
                router.push(
                  "/account/[uid]/photo",
                  `/account/${user.value.uid}/photo`
                );
              }}
            />
          ) : (
            <div className={styles.userProfileImage}>
              <Image
                src={user?.value?.photoURL}
                width={200}
                height={200}
                alt="user profile image"
              />
            </div>
          )}
          <div className={styles.userProfileText}>
            <Text variant="title">{user?.value?.displayName}</Text>
            <Text variant="supportingtext">User Bio</Text>
          </div>
          <div className={styles.userProfileStats}>
          <div className={styles.userProfileStat}>
            <Text variant="supportingtext">Projets</Text>
            <Text variant="title">{userStats.createdProjectsCount}</Text>
          </div>
          <div className={styles.userProfileStat}>
            <Text variant="supportingtext">Contributions</Text>
            <Text variant="title">{userStats.contributionsCount}</Text>
          </div>
        </div>
        </div>
      </section>
      <section className={styles.userProjects}>
        <div className={styles.userProjectsHeading}>
          <Text variant="title">Projets</Text>
          <Text variant="supportingtext">Projets de l&apos;utilisateur</Text>
        </div>
        <div className={styles.userProjectsList}>
          {projects.map((project) => (
            <ProjectCard
            key={"000"+project.project_title}
              category={project.category}
              date="15 mars 2023"
              description={project.description}
              imgSrc={project.project_image}
              link={"/project/"+project.project_id}
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
      <section className={styles.userContributions}>
        <div className={styles.userContributionsHeading}>
          <Text variant="title">Contributions</Text>
          <Text variant="supportingtext">
            Contributions de l&apos;utilisateur
          </Text>
        </div>
        <div className={styles.userContributionsList}></div>
      </section>
      <section className={styles.userAction}>
        <Button
          type="LinkXL Error"
          label={"Déconnexion"}
          onClick={() => {
            router.push("/");
            logout(dispatch);
          }}
        />
      </section>
    </div>
  );
}
