"use client";

import Button from "@/components/button/button";
import Input from "@/components/input/input";
import Text from "@/components/text/text";
import React, { useEffect, useState } from "react";

import styles from "../styles/create.module.css";
import { createProject } from "@/services/database";
import { useDispatch, useSelector } from "react-redux";
import { initializeAuth } from "@/services/auth";
import { uploadFile } from "@/services/storage";
import { getDownloadURL } from "firebase/storage";
import TagsInput from "@/components/tagInput/tagInput";
import { useRouter } from "next/navigation";

const Step1 = ({ setStep, projectData, setProjectData }) => (
    <div className={styles?.create}>
      <Text variant="projectname">Créer un projet</Text>
      <Input
        helper="This text is an helper"
        label="Titre du projet"
        status="Default"
        type="Default"
        value={projectData?.project_title}
        onChange={(e) =>
          setProjectData({ ...projectData, project_title: e.target.value })
        }
      />
      <TagsInput
        helper="This text is an helper"
        label="Catégorie du projet"
        value={projectData?.category}
        onChange={(newCategory) =>
          setProjectData({ ...projectData, category: newCategory })
        }
      />
      <Input
        helper="Entrer la somme attendue en euros"
        label="Somme attendue"
        status="Default"
        type="number"
        value={projectData?.total}
        onChange={(e) =>
          setProjectData({ ...projectData, total: e?.target?.value })
        }
      />
      <Input
        helper="Entrer la date de fin du projet"
        label="Date de fin"
        status="Default"
        type="date"
        value={projectData?.end_date}
        onChange={(e) =>
          setProjectData({ ...projectData, end_date: e?.target?.value })
        }
      />
      {/* Vous pouvez ajouter plus de champs ici si nécessaire */}
      <Button type={"XS"} label={"suivant"} onClick={() => setStep(2)} />
    </div>
  );
  
  

const Step2 = ({ setStep, projectData, setProjectData }) => {
    const [projectImage, setProjectImage] = useState(null);
  
    const handleProjectImageChange = (e) => {
      const file = e?.target?.files[0];
      setProjectImage(file);
    }
  
    const handleNext = async () => {
      if (projectImage) {
        try {
          const snapshot = await uploadFile(projectImage); // Upload le fichier
  
          // Récupérer l'URL de téléchargement
          const downloadUrl = await getDownloadURL(snapshot.ref);
  
          // Sauvegarder l'URL de téléchargement dans projectData
          setProjectData({ ...projectData, project_image: downloadUrl });
        } catch (error) {
          console.error("Une erreur s'est produite lors du téléchargement du fichier", error);
        }
      }
  
      setStep(3);
    }
  
    return (
      <div className={styles?.create}>
        <Text variant="projectname">Créer un projet</Text>
        <Input
          helper="This text is an helper"
          label="Description du projet"
          status="Default"
          type="Multiline"
          value={projectData?.description}
          onChange={(e) =>
            setProjectData({ ...projectData, description: e?.target?.value })
          }
        />
        {/* Ajout de l'entrée pour l'image du projet */}
        <Input
          helper="This text is an helper"
          label="Image du projet"
          status="Default"
          type="File"
          accept="image/*"
          onChange={handleProjectImageChange}
        />
        {/* Vous pouvez ajouter plus de champs ici si nécessaire */}
        <Button type={"XS"} label={"Précédent"} onClick={() => setStep(1)} />
        <Button type={"XS"} label={"Suivant"} onClick={handleNext} />
      </div>
    );
  };
  

const Step3 = ({ setStep, projectData, setProjectData }) => (
  <div className={styles?.create}>
    <Text variant="projectname">Créer un projet</Text>
    <Text variant="projectname">Ajouter des sections pour votre projet</Text>
    {projectData.content.titles.map((_, index) => (
      <div className={styles?.section} key={index}>
        <Input
          helper="This text is an helper"
          label="Titre de la section"
          status="Default"
          type="Default"
          value={projectData?.content?.titles[index]}
          onChange={(event) => {
            const newTitles = [...projectData?.content?.titles];
            newTitles[index] = event?.target?.value;
            setProjectData({
              ...projectData,
              content: { ...projectData?.content, titles: newTitles },
            });
          }}
        />
        <Input
          helper="This text is an helper"
          label="Corp de la section"
          status="Default"
          type="Multiline"
          value={projectData?.content?.bodies[index]}
          onChange={(event) => {
            const newBodies = [...projectData?.content?.bodies];
            newBodies[index] = event?.target?.value;
            setProjectData({
              ...projectData,
              content: { ...projectData?.content, bodies: newBodies },
            });
          }}
        />
        <Input
          helper="This text is an helper"
          label="Upload de l'image"
          status="Default"
          type="File"
          accept="image/*"
          onChange={(event) => {
            const newImages = [...projectData?.content?.images];
            newImages[index] = event?.target?.files[0];
            setProjectData({
              ...projectData,
              content: { ...projectData?.content, images: newImages },
            });
          }}
        />
      </div>
    ))}
    <Button
      type={"XS"}
      label={"Ajouter une section"}
      onClick={() => {
        setProjectData({
          ...projectData,
          content: {
            ...projectData?.content,
            titles: [...projectData?.content?.titles, ""],
            bodies: [...projectData?.content?.bodies, ""],
            images: [...projectData?.content?.images, ""],
          },
        });
      }}
    />
    <Button type={"XS"} label={"Précédent"} onClick={() => setStep(2)} />
    <Button type={"XS"} label={"Suivant"} onClick={() => setStep(4)} />
  </div>
);

const FinalStep = ({ setStep, projectData }) => {
    const router = useRouter();
  const user = useSelector((state) => state?.user);
  async function handleSubmit() {
    try {
      const downloadUrls = await Promise?.all(
        projectData?.content?.images?.map(async (imageFile) => {
          const snapshot = await uploadFile(imageFile); // Upload le fichier
          // Récupérer l'URL de téléchargement
          const downloadUrl = await getDownloadURL(snapshot?.ref);

          return downloadUrl;
        })
      );
      // Sauvegarder les URL de téléchargement dans Firestore
      await createProject(
        {
          ...projectData,
          content: { ...projectData?.content, images: downloadUrls },
        },
        user.value.uid
      );
      setStep(4);
      console.log("Projet créé avec succès");
      router?.push("/explore");
    } catch (error) {
      console.error(
        "Une erreur s'est produite lors du téléchargement des fichiers",
        error
      );
    }
  }

  return (
    <div className={styles?.create}>
      <Button type={"XS"} label={"Soumettre le projet"} onClick={handleSubmit}/>
    </div>
  );
};

const Page = () => {
    const user = useSelector((state) => state?.user); 
  const signed = Boolean(user?.value);
  const router = useRouter();
  const dispatch = useDispatch();
  useEffect(() => {
    initializeAuth(dispatch);
  }, [dispatch]);
  const [projectData, setProjectData] = useState({
    project_title: "",
    category: "",
    description: "",
    total: 0,
    content: { titles: [], bodies: [], images: [] },
  });
  const [step, setStep] = useState(1);

  switch (step) {
    case 1:
      return (
        <Step1
          setStep={setStep}
          projectData={projectData}
          setProjectData={setProjectData}
        />
      );
    case 2:
      return (
        <Step2
          setStep={setStep}
          projectData={projectData}
          setProjectData={setProjectData}
        />
      );
    case 3:
      return (
        <Step3
          setStep={setStep}
          projectData={projectData}
          setProjectData={setProjectData}
        />
      );
    default:
      return <FinalStep setStep={setStep} projectData={projectData} />;
  }
};

export default Page;
