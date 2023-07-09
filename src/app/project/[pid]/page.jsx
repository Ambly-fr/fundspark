"use client";
import React, { useEffect, useState } from "react";
import styles from "../../styles/project.module.css";
import Text from "@/components/text/text";
import Tags from "@/components/tags/tags";
import Avatar from "@/components/avatar/avatar";
import ProgressBar from "@/components/progressBar/progressBar";
import Illustration from "@/components/image/image";
import Button from "@/components/button/button";
import AvatarStack from "@/components/avatarList/avatarList";
import { getProjectById, getUserData } from "../../../services/database";
import { useDispatch, useSelector } from "react-redux";
import { initializeAuth } from "../../../services/auth";
import { useRouter } from "next/navigation";
import ContributionModal from "@/components/ContributeModal/contributeModal";

export default function Page({ params }) {
  const router = useRouter();
  const [project, setProject] = useState(null);
  const id = params.pid;
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [isContributionModalOpen, setIsContributionModalOpen] = useState(false);

  const handleContributeClick = () => {
    setIsContributionModalOpen(true);
  };

  useEffect(() => {
    initializeAuth(dispatch);
    (async () => {
      try {
        const proj = await getProjectById(id);
        const userData = await getUserData(proj);

        proj.user = userData;
        console.log(proj);

        setProject(proj);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [id, dispatch]);

  return (
    <div className={styles.projectPage}>
      <section className={styles.ProjectHero}>
        <div className={styles.ProjectHeroHeading}>
          <Text variant="title">{project?.project_title}</Text>
          <Text variant="supportingtext">{project?.description}</Text>
          <div className={styles.ProjectHeroTags}>
            {project &&
              project.category?.map((tag, index) => (
                <Tags key={index}>{tag}</Tags>
              ))}
          </div>
        </div>
        <div className={styles.ProjectHeroImage}>
          <Illustration
            alt={project?.project_title}
            src={project?.project_image}
            type="project_Presentation"
          />
        </div>
        <div className={styles.ProjectHeroFooter}>
          <div
            className={styles.User}
            onClick={() => {
              router.push("/user/" + project?.user.uid);
            }}
          >
            <Avatar
              img={project?.user.photoURL}
              alt={project?.user.displayName}
            />
            <div className={styles.userInfos}>
              <Text variant={"preheading"}>{project?.user.displayName}</Text>
              <Text variant={"date"}>{"date"}</Text>
            </div>
          </div>
        </div>
        <div className={styles.ProjectStats}>
          <ProgressBar current={project?.current} total={project?.total} />
          <div className={styles.ProjectActions}>
            <div className={styles.ProjectContributors}>
              <Text variant="preheading">
                {
                  project?.contributors?.reduce((acc, current) => {
                    const x = acc.find((item) => item.id === current.id);
                    if (!x) {
                      return acc.concat([current]);
                    } else {
                      return acc;
                    }
                  }, []).length
                }{" "}
                Contributeur
              </Text>
              <AvatarStack avatars={project?.contributors} />
            </div>
            <div className={styles.ProjectActionsButton}>
              <Button
                type="XS"
                label={"Contribuer"}
                onClick={handleContributeClick}
              />
              <ContributionModal
                projectId={params.pid}
                userId={user?.value?.uid}
                avatar={user?.value?.photoURL}
                username={user?.value?.displayName}
                isOpen={isContributionModalOpen}
                onClose={async () => {
                  setIsContributionModalOpen(false);

                  try {
                    const proj = await getProjectById(params.pid);
                    const userData = await getUserData(proj);

                    proj.user = userData;
                    console.log(proj);

                    setProject(proj);
                  } catch (error) {
                    console.error(error);
                  }
                }}
              />
            </div>
          </div>
        </div>
      </section>
      <section className={styles.ProjectContent}>
        {project?.content.titles.map((title, index) => (
          <div className={styles.part} key={index}>
            <div className={styles.partText}>
              <Text variant="subtitle">{title}</Text>
              <Text variant="corp">{project.content.bodies[index]}</Text>
            </div>
            {project?.content.images[index] && (
              <Illustration
                type="default"
                src={project.content.images[index]}
                alt={title}
                placeholder="blur"
              />
            )}
          </div>
        ))}
      </section>
    </div>
  );
}
