import { updateProject } from '@/services/database';
import React, { useState } from 'react';

function ContributionModal({ projectId, userId, username, avatar, isOpen, onClose }) {
  const [amount, setAmount] = useState(0);

  const handleContribute = async (e) => {
    e.preventDefault();

    // Mise à jour du projet avec la nouvelle contribution
    await updateProject(projectId, {
        username: username,
      userId: userId,
      amount: amount,
      avatar: avatar
    });

    // Fermeture de la modal
    onClose();
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Contribute to the project</h2>
        <form onSubmit={handleContribute}>
          <label>
            Amount:
            <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
          </label>
          <button type="submit">Contribute</button>
        </form>
      </div>
    </div>
  );
}

export default ContributionModal;
