import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "PlayFiver - Plataforma Completa de Distribuição de Jogos de Cassino",
    description:
        "A plataforma mais completa para distribuir jogos de cassino. 6000+ jogos, 50+ provedores premium, GGR de 3% a 15%, integração rápida via API REST. Pragmatic Play, PG Soft, Evolution Gaming e muito mais.",
    keywords: [
        "plataforma de cassino",
        "jogos de cassino online",
        "API de cassino",
        "distribuição de jogos",
        "Pragmatic Play",
        "PG Soft",
        "Evolution Gaming",
        "controle RTP",
        "GGR baixo",
        "integração cassino",
        "white label cassino",
        "provedores de jogos",
        "cassino online brasil",
        "API jogos cassino",
    ],
    authors: [{ name: "PlayFiver" }],
    creator: "PlayFiver",
    publisher: "PlayFiver",
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    openGraph: {
        type: "website",
        locale: "pt_BR",
        url: "https://www.playfiver.app",
        title: "PlayFiver - Plataforma Completa de Distribuição de Jogos de Cassino",
        description:
            "6000+ jogos, 50+ provedores premium, GGR de 3% a 15%. Integração rápida, suporte 24/7 e controle total de RTP. A melhor solução para sua plataforma de cassino.",
        siteName: "PlayFiver",
        images: [
            {
                url: "/logo.png",
                width: 1200,
                height: 630,
                alt: "PlayFiver - Plataforma de Cassino",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "PlayFiver - Plataforma Completa de Distribuição de Jogos de Cassino",
        description:
            "6000+ jogos, 50+ provedores premium, GGR de 3% a 15%. Integração rápida e suporte 24/7.",
        images: ["/logo.png"],
        creator: "@playfiver",
    },
    icons: {
        icon: "/logo.ico",
        shortcut: "/logo.ico",
        apple: "/logo.png",
    },
    manifest: "/manifest.json",
    alternates: {
        canonical: "https://www.playfiver.app",
    },
    category: "technology",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-BR">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                {children}
            </body>
        </html>
    );
}
