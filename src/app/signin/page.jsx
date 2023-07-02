"use client"

import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation'
import { login, loginWithGoogle } from '../../services/auth'; // Assurez-vous d'importer la bonne fonction de votre service d'authentification

import styles from "../styles/signInPage.module.css";
import Text from "@/components/text/text";
import Input from "@/components/input/input";
import Button from "@/components/button/button";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [credentialsError, setCredentialsError] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleEmailChange = (event) => setEmail(event.target.value);
  const handlePasswordChange = (event) => setPassword(event.target.value);

    // try login and catch error
    const handleLogin = async (event) => {
        event.preventDefault(); // empêche le rechargement de la page

        try {
            await login(dispatch, email, password);
            router.push('/');
        }
        catch (error) {
            setCredentialsError(true);
        }
    };

    const handleLoginWithGoogle = async () => {
        try {
            await loginWithGoogle(dispatch);
            router.push('/');
        } catch (error) {
            console.error(error);
        }
    };


  return (
    <div className={styles.signInPage}>
      <section className={styles.form}>
        <div className={styles.connexionHeading}>
          <Text variant="supportingtext">Connectez vous à votre compte</Text>
          <Text variant="description">
            Welcome back! Please enter your details.
          </Text>
          {credentialsError && <Text variant="error">Email ou mot de passe incorrect</Text>}
        </div>
        <div className={styles.signForm}>
          <Input label="email@xyz.fr" status={credentialsError?"Error":"Default"} type="Email" value={email} onChange={handleEmailChange} />
          <Input label="password" status={credentialsError?"Error":"Default"} type="Password" value={password} onChange={handlePasswordChange} />
          <div className="signInAction">
            <Button label="Se Connecter" onClick={handleLogin} type="XL" />
            <Button label="Creer un compte" link="/signup" type="LinkXL"/> 
            <Button label="Se Connecter avec Google" onClick={handleLoginWithGoogle} type="XL" />
          </div>
        </div>
      </section>
    </div>
  );
}
