import Button from "@/components/button/button";
import Text from "@/components/text/text";
import ProjectCard from "@/components/projectCard/projectCard";
import React from "react";

import styles from "./styles/homePage.module.css";
import MetricItem from "@/components/metricItem/metricItem";
import Illustration from "@/components/image/image";
import Image from "next/image";

import FaqList from "@/components/faqList/faqList";

export default function page() {
  return (
    <div className={styles.HomePage}>
      <Image
        className={styles.flaire1}
        src={"/purpleFlare.png"}
        height={1887}
        width={1887}
        alt="Purple Flare"
      />
      <section className={styles.heroBanner}>
        <Image
          className={styles.backGrid1}
          src={"/backGrid.png"}
          height={1235}
          width={1235}
          alt="Back Grid"
        />
        <div className={styles.heading}>
          <div className={styles.text}>
            <Text variant="title">
              Éclairez le chemin de l&apos;innovation.
            </Text>
            <Text variant="supportingtext">
              FundSpark, la plateforme de crowdfunding de choix pour des
              milliers d&apos;innovateurs et de contributeurs du monde entier.
            </Text>
          </div>
          <div className={styles.action}>
            <Button label="Explorer les projets" type="LinkXL" />
            <Button label="Démarrer un projet" type="XL" />
          </div>
        </div>
        <Image
          className={styles.HeroImage}
          src={"/heroImage.png"}
          height={640}
          width={1280}
          alt="Hero Image"
        />
      </section>
      <section className={styles.featuredProjects}>
        <div className={styles.Projectheading}>
          <Text variant="title">Projets en vedette</Text>
          <Text variant="supportingtext">
            Découvrez les projets les plus populaires de FundSpark.
          </Text>
        </div>
        <div className={styles.projects}>
          <ProjectCard
            category="Technologies vertes"
            date="15 mars 2023"
            description="EcoDrone vise à développer des drones alimentés par de l'énergie solaire pour des applications de surveillance environnementale. "
            imgSrc={"/unidosh_EcoDrone_vise__dvelopper_des_drones_aliments_par_de_lne_ce780da7-5bdc-4eb3-aee8-04aa6058a6a0.png"}
            link="https://www.google.com"
            progress={{
              current: 35000,
              total: 50000,
            }}
            title="EcoDrone"
            user={{
              img: "",
              name: "Jean Dupont",
            }}
          />
        </div>
        <div className="ProjectAction">
          <Button label="Explorer les projets" type="LinkXL" />
        </div>
      </section>
      <section className={styles.Metrics}>
      <Image
        className={styles.flaire2}
        src={"/blueFlare.png"}
        height={1887}
        width={1887}
        alt="Purple Flare"
      />
        <div className={styles.MetricsHeading}>
          <Text variant="title">Nos réalisations en chiffres</Text>
          <Text variant="supportingtext">
            Découvrez l&apos;impact de FundSpark à travers ces chiffres clés.{" "}
          </Text>
        </div>
        <div className={styles.MetricsCards}>
          <div className={styles.line}>
            <MetricItem
              number={5000}
              supporting="Plus de 5 000 idées ont trouvé un financement grâce à notre plateforme."
              title="Projets financés"
            />
            <MetricItem
              number="50 millions"
              supporting="Plus de 50 millions d'euros ont été investis dans des projets innovants."
              title="Montant levé"
            />
          </div>
          <div className={styles.line}>
            <MetricItem
              number="100 000"
              supporting=" Une communauté dynamique de plus de 100 000 contributeurs."
              title="Contributeurs"
            />
            <MetricItem
              number="20"
              supporting="Des projets réussis dans plus de 20 domaines différents."
              title="Domaines de projets"
            />
          </div>
        </div>
        <div className={styles.MetricsAction}>
          <Button label="Explorer les projets" type="LinkXL" />
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
            <Button label="Démarrer un projet" type="XL" />
            </div>
          <Illustration src={"/unidosh_Idea_Coming_to_Life_Un_entrepreneur_travaillant_tard_da_51c7c56d-2289-49cc-9e82-0f89039ff5a9.png"} type={"content"} alt="CTA Image" />
      </section>
      <section className={styles.FAQ}>
      <Image
        className={styles.flaire3}
        height={1887}
        width={1887}
        src={"/greenFlare.png"}
        alt="Purple Flare"
      />
        <div className={styles.FAQHeading}>
          <Text variant="title">Questions fréquentes</Text>
          <Text variant="supportingtext">
            Vous avez des questions ? Nous avons les réponses.
          </Text>
          </div>
          <div className={styles.FAQAction}>
            <FaqList questions={[
              {
                title: "Comment fonctionne FundSpark ?",
                corp: "FundSpark est une plateforme de crowdfunding qui permet aux innovateurs de trouver des fonds pour leurs projets. Les innovateurs peuvent créer une campagne de financement participatif pour leur projet et les contributeurs peuvent soutenir les projets qui les intéressent. Les contributeurs peuvent également recevoir des récompenses en fonction du montant de leur contribution.",
              },
              {
                title: "Quel est le processus de validation des projets sur FundSpark ?",
                corp: "Chaque projet est examiné par notre équipe pour s'assurer qu'il respecte nos directives avant d'être publié.",
              },
              {
                title: "Comment puis-je contribuer à un projet ?",
                corp: "Choisissez un projet qui vous intéresse, cliquez sur 'Contribuer' et choisissez le montant de votre contribution.",
              },
              {
                title: "Quels sont les frais associés à l'utilisation de FundSpark ?",
                corp: "FundSpark prélève une commission de 5% sur chaque projet financé. Il n'y a pas de frais pour la création d'un projet.",
              },
              {
                title: "Qu'arrive-t-il si un projet n'atteint pas son objectif de financement ?",
                corp: "FundSpark fonctionne sur le principe du tout ou rien. Si un projet n'atteint pas son objectif, les contributeurs sont remboursés.",
              },
              {
                title: "Comment puis-je contacter le créateur d'un projet ?",
                corp: "Sur chaque page de projet, il y a un lien pour contacter directement le créateur du projet.",
              },
            ]}/>
            </div>
      </section>
    </div>
  );
}
