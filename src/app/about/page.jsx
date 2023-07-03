import React from "react";
import Text from "@/components/text/text";
import Input from "@/components/input/input";
import Button from "@/components/button/button";

import styles from "../styles/aboutPage.module.css";

export default function page() {
  return (
    <div className={styles.aboutPage}>
      <div className={styles.aboutHeading}>
        <Text variant="title">À propos de FundSpark</Text>
        <Text variant="supportingtext">
          Découvrez notre mission, notre vision, et comment tout a commencé.
        </Text>
      </div>
      <section className={styles.aboutContent}>
        <div className={styles.aboutItem}>
          <Text variant="title">Notre mission</Text>
          <Text variant="supportingtext">
            Notre vision est de devenir la plateforme de crowdfunding la plus
            fiable et la plus efficace au monde. Nous voulons être le premier
            choix pour tous ceux qui cherchent à réaliser une idée innovante ou
            à soutenir de nouvelles initiatives. Nous sommes déterminés à créer
            un espace où les rêves deviennent réalité grâce à la générosité de
            la communauté.
          </Text>
        </div>
        <div className={styles.aboutItem}>
          <Text variant="title">Notre vision</Text>
          <Text variant="supportingtext">
            Notre vision est de devenir la plateforme de crowdfunding la plus
            fiable et la plus efficace au monde. Nous voulons être le premier
            choix pour tous ceux qui cherchent à réaliser une idée innovante ou
            à soutenir de nouvelles initiatives. Nous sommes déterminés à créer
            un espace où les rêves deviennent réalité grâce à la générosité de
            la communauté.
          </Text>
        </div>
        <div className={styles.aboutItem}>
          <Text variant="title">Notre mission</Text>
          <Text variant="supportingtext">
            FundSpark a été fondé en 2023 par une équipe de passionnés
            convaincus que le crowdfunding peut changer le monde. Nous avons
            commencé comme une petite start-up, mais grâce à notre dévouement et
            à l&apos;incroyable soutien de notre communauté, nous avons grandi
            et nous sommes maintenant fiers de dire que nous avons aidé à
            financer des milliers de projets à travers le monde.
          </Text>
        </div>
        <div className={styles.aboutItem}>
          <Text variant="title">Notre mission</Text>
          <Text variant="supportingtext">
            Notre équipe est composée d&apos;individus dévoués et passionnés qui
            travaillent sans relâche pour améliorer FundSpark. Chaque membre de
            notre équipe croit en notre mission et contribue à la rendre
            possible.
          </Text>
        </div>
      </section>
      <section className={styles.contact}>
        <div className={styles.contactHeading}>
          <Text variant="title">Nous contacter</Text>
          <Text variant="supportingtext">
            Nous sommes là pour vous aider. N&apos;hésitez pas à nous contacter
            avec toutes vos questions ou préoccupations.
          </Text>
        </div>
        <div className={styles.contactContent}>
          <Input label="email@xyz.fr" status="Default" type="Email" />
          <Input
            helper="Donnez le maximum d’information sur votre projet (avancement etc...)"
            label="Partagez votre idée"
            status="Default"
            type="Multiline"
          />
          <Button label="Envoyer" link="/" type="XS" />
        </div>
      </section>
    </div>
  );
}
