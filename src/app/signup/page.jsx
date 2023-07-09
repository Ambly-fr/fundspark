"use client"

import React, { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation'
import { initializeAuth, register } from '../../services/auth';

import styles from "../styles/signInPage.module.css";
import Text from "@/components/text/text";
import Input from "@/components/input/input";
import Button from "@/components/button/button";

export default function SignUpPage() {

  
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [credentialsError, setCredentialsError] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();
  
  useEffect(() => {
    initializeAuth(dispatch);
  }, [dispatch]);
  const handleEmailChange = (event) => setEmail(event.target.value);
  const handleUsernameChange = (event) => setUsername(event.target.value);
  const handlePasswordChange = (event) => setPassword(event.target.value);
  const handleConfirmPasswordChange = (event) => setConfirmPassword(event.target.value);

  const handleSignUp = async (event) => {
    
    event.preventDefault(); 

    if (password !== confirmPassword) {
      alert('Les mots de passe ne correspondent pas!');
      return;
    }

    try {
      await register(dispatch, email, password, username);
      router.push('/');
    } catch (error) {
      setCredentialsError(true);
    }
  };

  return (
    <div className={styles.signInPage}>
      <section className={styles.form}>
        <div className={styles.connexionHeading}>
          <Text variant="supportingtext">Créez votre compte</Text>
          <Text variant="description">
            Bienvenue! Veuillez entrer vos détails.
          </Text>
          {credentialsError && <Text variant="error">Ce compte existe déjà</Text>}
        </div>
        <div className={styles.signForm}>
          <Input label="Nom d'utilisateur" status="Default" type="text" value={username} onChange={handleUsernameChange} />
          <Input label="email@xyz.fr" status={credentialsError?"Error":"Default"} type="Email" value={email} onChange={handleEmailChange} />
          <Input label="password" status={credentialsError?"Error":"Default"} type="Password" value={password} onChange={handlePasswordChange} />
          <Input label="Confirmer le mot de passe" status={credentialsError?"Error":"Default"} type="Password" value={confirmPassword} onChange={handleConfirmPasswordChange} />
          <div className="signInAction">
            <Button label="Créer un compte" onClick={handleSignUp} type="XL" />
            <Button label="Se Connecter" link="/signin" type="LinkXL"/> {/* Assurez-vous de diriger ce lien vers votre page de connexion */}
          </div>
        </div>
      </section>
    </div>
  );
}
