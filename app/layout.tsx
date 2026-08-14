import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/navigation/Footer";
import { SmoothScroll } from "@/components/ui/SmoothScroll";
import { LoadingScreen } from "@/components/ui/LoadingScreen";
import { Experience } from "@/components/3d/Experience";
import { QualitySettings } from "@/components/ui/QualitySettings";
import { AudioManager } from "@/components/ui/AudioManager";
import { RouteScrollSync } from "@/components/ui/RouteScrollSync";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SPIDER TEAM | Innovation. Technology. Impact.",
  description: "Site officiel de SPIDER TEAM, leader en solutions technologiques innovantes et design premium.",
  openGraph: {
    title: "SPIDER TEAM | Innovation. Technology. Impact.",
    description: "Nous concevons des solutions modernes pour construire les entreprises de demain.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`${inter.className} bg-spider-black text-white antialiased`}>
        <SmoothScroll>
          <LoadingScreen />
          <Experience />
          <AudioManager />
          <QualitySettings />
          <RouteScrollSync />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
