import { updateProject } from "@/services/database";
import React, { useState } from "react";
import styles from "./contributeModal.module.css";
import Text from "@/components/text/text";
import Input from "../input/input";
import Button from "../button/button";

function ContributionModal({
  projectId,
  userId,
  username,
  avatar,
  isOpen,
  onClose,
}) {
  const [amount, setAmount] = useState(0);

  const handleContribute = async (e) => {
    e.preventDefault();

    // Mise à jour du projet avec la nouvelle contribution
    await updateProject(projectId, {
      username: username,
      userId: userId,
      amount: amount,
      avatar: avatar,
    });

    // Fermeture de la modal
    onClose();
  };

  const handleContentClick = (e) => {
    // Empêche les clics sur le contenu de la modale de fermer la modale.
    e.stopPropagation();
  }

  if (!isOpen) {
    return null;
  }

  return (
    <div className={styles.modal} onClick={onClose}>
      <div onClick={handleContentClick} className={styles.modalContent}>
        <div className={styles.modalHeader}>
          <Button label="Close" onClick={onClose} type="LinkXS" />
        </div>
        <Text variant="title">Contribute to the project</Text>
        <Input
          label={"Amount"}
          status={"Default"}
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <Button label="Contribute" onClick={handleContribute} type="XL" />
      </div>
    </div>
  );
}

export default ContributionModal;
