import Button from '@/components/button/button'
import Input from '@/components/input/input'
import Text from '@/components/text/text'
import React from 'react'

import styles from '../styles/contactPage.module.css'
import FaqList from '@/components/faqList/faqList'

export default function page() {
  return (
    <div className={styles.ContactPage}>
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
      <section className={styles.FAQ}>
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
  )
}
