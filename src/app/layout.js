import Header from "@/components/header/header";
import "./styles/globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/footer/footer";
import { ReduxProvider } from "./provider";
import Image from "next/image";

import styles from "./styles/layout.module.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "FundSpark",
  description: "",
};

export default function RootLayout({ children }) {
  
  return (
    <html lang="fr">
      <body className={inter.className + "" + styles.layout}>
        <ReduxProvider>
        <Image
        className={styles.flaire1}
        src={"/purpleFlare.png"}
        height={1887}
        width={1887}
        alt="Purple Flare"
      />
          <Header />
          {children}
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}
