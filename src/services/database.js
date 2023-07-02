import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
  getDoc,
  doc,
  addDoc,
  updateDoc,
  increment,
  arrayUnion,
  limit,
} from "firebase/firestore";

async function getProjectsByUserId(uid) {
  const db = getFirestore();
  const projectsRef = collection(db, "projects");
  const q = query(projectsRef, where("userId", "==", uid));

  const querySnapshot = await getDocs(q);
  let projects = [];
  querySnapshot.forEach((doc) => {
    console.log(doc.id, " => ", doc.data());
    projects.push(doc.data());
  });

  return projects;
}

async function getAllProjects() {
  const db = getFirestore();
  const projectsRef = collection(db, "projects");

  const querySnapshot = await getDocs(projectsRef);
  let projects = [];
  querySnapshot.forEach((doc) => {
    console.log(doc.id, " => ", doc.data());
    projects.push(doc.data());
  });

  return projects;
}

async function getProjectById(id) {
  const db = getFirestore();

  const projectRef = doc(db, "projects", id);
  const projectSnap = await getDoc(projectRef);

  if (projectSnap.exists()) {
    return { id: projectSnap.id, ...projectSnap.data() };
  } else {
    throw new Error("Le projet demandé n'existe pas");
  }
}

async function getUserById(id) {
  const db = getFirestore();

  const userRef = doc(db, "users", id);
  const userSnap = await getDoc(userRef);

  if (userSnap.exists()) {
    return { id: userSnap.id, ...userSnap.data() };
  } else {
    throw new Error("L'utilisateur demandé n'existe pas");
  }
}

async function getUserData(project) {
  const userRef = project.user;

  const userDoc = await getDoc(userRef);

  const userData = userDoc.data();

  return userData;
}

async function createProject(formData, userId) {
  const db = getFirestore();

  // Création d'une référence vers l'utilisateur spécifié
  const userRef = doc(db, "users", userId);

  const newProjectData = {
    ...formData,
    user: userRef,
    current: 0,
    contributors: [],
  };

  const projectsRef = collection(db, "projects");
  const newProjectRef = await addDoc(projectsRef, newProjectData);

  // Ajout de l'ID du projet au document lui-même
  await updateDoc(newProjectRef, { project_id: newProjectRef.id });

  return newProjectRef.id;
}

async function updateProject(projectId, contribution) {
  const db = getFirestore();

  // référence vers le document du projet
  const projectRef = doc(db, "projects", projectId);

  // mise à jour du document du projet
  await updateDoc(projectRef, {
    current: increment(contribution.amount),
    contributors: arrayUnion({
      alt: contribution.username,
      uid: contribution.userId,
      amount: contribution.amount,
      src: contribution.avatar,
    }),
  });
}

async function getFirstThreeProjects() {
  const db = getFirestore();

  const projectsQuery = query(collection(db, "projects"), limit(3));
  const projectSnapshot = await getDocs(projectsQuery);
  
  const projects = projectSnapshot.docs.map(doc => doc.data());
  
  return projects;
}

async function getUserStats(userId) {
    const db = getFirestore();
  
    // Récupérer tous les projets
    const projectsQuery = collection(db, "projects");
    const projectsSnapshot = await getDocs(projectsQuery);
    
    const projects = projectsSnapshot.docs.map(doc => doc.data());
  
    let contributionsCount = 0;
    let createdProjectsCount = 0;
  
    projects.forEach(project => {
      // Vérifier si l'utilisateur est dans la liste des contributeurs
      project.contributors.forEach(contributor => {
        if (contributor.uid === userId) {
            contributionsCount += 1;
        }
        });
      
      // Vérifier si l'utilisateur est le créateur du projet
      if (project.user.id === userId) {
        createdProjectsCount += 1;
      }
    });
  
    return {
      contributionsCount,
      createdProjectsCount
    };
  }


export {
  getProjectsByUserId,
  getAllProjects,
  getUserData,
  getProjectById,
  updateProject,
  createProject,
  getUserById,
  getUserStats,
  getFirstThreeProjects
};
