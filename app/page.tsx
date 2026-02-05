"use client";

import Jackbox from "@/components/Jackbox";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
    GameController,
    Gear,
    VideoCamera,
    Lightning,
    Gift,
    ChartBar,
    Trophy,
    Target,
    CheckCircle,
} from "phosphor-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
    const featuresRef = useRef<HTMLDivElement>(null);
    const statsRef = useRef<HTMLDivElement>(null);
    const exclusiveRef = useRef<HTMLDivElement>(null);
    const heroCardsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (heroCardsRef.current) {
            const cards = heroCardsRef.current.querySelectorAll(".hero-card");
            gsap.fromTo(
                cards,
                {
                    opacity: 0,
                    y: 30,
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1.2,
                    stagger: 0.15,
                    ease: "power2.out",
                    delay: 0.2,
                },
            );
        }

        if (featuresRef.current) {
            const featureCards =
                featuresRef.current.querySelectorAll(".feature-card");
            gsap.fromTo(
                featureCards,
                {
                    opacity: 0,
                    y: 40,
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1.2,
                    stagger: 0.12,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: featuresRef.current,
                        start: "top 75%",
                    },
                },
            );
        }

        if (statsRef.current) {
            const statNumbers =
                statsRef.current.querySelectorAll(".stat-number");
            statNumbers.forEach((stat) => {
                const target = stat.getAttribute("data-target");
                if (target) {
                    const numericValue = parseFloat(
                        target.replace(/[^0-9.]/g, ""),
                    );
                    const suffix = target.replace(/[0-9.]/g, "");

                    ScrollTrigger.create({
                        trigger: stat,
                        start: "top 80%",
                        onEnter: () => {
                            gsap.to(stat, {
                                textContent: numericValue,
                                duration: 2.5,
                                ease: "power2.out",
                                snap: { textContent: 1 },
                                onUpdate: function () {
                                    const currentValue = Math.ceil(
                                        parseFloat(
                                            (this.targets()[0] as any)
                                                .textContent,
                                        ),
                                    );
                                    stat.textContent = currentValue + suffix;
                                },
                            });
                        },
                    });
                }
            });
        }

        if (exclusiveRef.current) {
            const exclusiveCards =
                exclusiveRef.current.querySelectorAll(".exclusive-card");
            gsap.fromTo(
                exclusiveCards,
                {
                    opacity: 0,
                    y: 40,
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1.2,
                    stagger: 0.2,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: exclusiveRef.current,
                        start: "top 75%",
                    },
                },
            );
        }
    }, []);

    const structuredData = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: "PlayFiver",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "BRL",
        },
        aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.8",
            ratingCount: "150",
        },
        description:
            "A plataforma mais completa para distribuir jogos de cassino. Integração rápida, suporte 24/7 e os melhores provedores do mercado.",
        features: [
            "6000+ Jogos Disponíveis",
            "50+ Provedores Premium",
            "Controle Total de RTP",
            "GGR de 3% a 15%",
            "Suporte 24/7",
            "Integração Rápida via API",
        ],
    };

    return (
        <main>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(structuredData),
                }}
            />
            <header className="fixed top-0 left-0 py-2 px-4 border-b bg-background/50 backdrop-blur-sm w-full z-50">
                <div className="flex items-center gap-2">
                    <Image
                        src="/logo.png"
                        alt="PlayFiver Logo"
                        width={50}
                        height={50}
                    />
                    <p className="font-bold text-xl">PlayFiver</p>
                </div>
            </header>
            <section className="min-h-svh bg-linear-45 from-cyan-100 to-primary md:px-40 md:grid-cols-2 grid gap-8 pt-20">
                <div className="flex justify-center flex-col gap-4 px-4">
                    <Jackbox />
                    <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-xl">
                        A plataforma mais completa para distribuir jogos de
                        cassino. Integração rápida, suporte 24/7 e os melhores
                        provedores do mercado.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <Button asChild>
                            <Link href="https://www.playfiver.app/login">
                                Acessar o Painel
                            </Link>
                        </Button>
                        <Button variant="outline">
                            <Link
                                target="_blank"
                                href="https://api.playfivers.com/docs/api"
                            >
                                Ver Documentação
                            </Link>
                        </Button>
                    </div>
                </div>

                <div
                    className="flex items-center justify-center px-4"
                    ref={heroCardsRef}
                >
                    <div className="grid grid-cols-2 gap-4">
                        <div className="flex flex-col gap-4">
                            <div className="hero-card bg-background rounded-md p-4 shadow-lg">
                                <div className="text-primary mb-2">
                                    <GameController
                                        size={32}
                                        weight="duotone"
                                    />
                                </div>
                                <h3 className="font-bold text-lg mb-2">
                                    6000+ Jogos
                                </h3>
                                <p className="text-foreground/50 text-sm">
                                    Acesso a milhares de títulos dos melhores
                                    provedores do mercado em uma única API.
                                </p>
                            </div>

                            <div className="hero-card bg-background rounded-md p-4 shadow-lg">
                                <div className="text-primary mb-2">
                                    <Gear size={32} weight="duotone" />
                                </div>
                                <h3 className="font-bold text-lg mb-2">
                                    Controle Total
                                </h3>
                                <p className="text-foreground/50 text-sm">
                                    Gerencie RTP, rodadas grátis e configure
                                    cada detalhe da sua operação.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4 mt-8">
                            <div className="hero-card bg-background rounded-md p-4 shadow-lg ">
                                <div className="text-primary mb-2">
                                    <ChartBar size={32} weight="duotone" />
                                </div>
                                <h3 className="font-bold text-lg mb-2">
                                    GGR Flexível
                                </h3>
                                <p className="text-foreground/50 text-sm">
                                    Revenue share competitivo de 3% a 15%.
                                    Maximize seus lucros.
                                </p>
                            </div>

                            <div className="hero-card bg-background rounded-md p-4 shadow-lg ">
                                <div className="text-primary mb-2">
                                    <Lightning size={32} weight="duotone" />
                                </div>
                                <h3 className="font-bold text-lg mb-2">
                                    Suporte 24/7
                                </h3>
                                <p className="text-foreground/50 text-sm">
                                    Equipe técnica sempre disponível para
                                    garantir sua operação.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 px-4 md:px-40" ref={featuresRef}>
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Por que escolher a PlayFiver?
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        A solução completa para sua plataforma de cassino com as
                        melhores ferramentas do mercado
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    <div className="feature-card p-6 rounded-lg border bg-card">
                        <div className="text-primary mb-4 ">
                            <GameController size={48} weight="duotone" />
                        </div>
                        <h3 className="text-xl font-bold mb-3">
                            Melhores Provedores
                        </h3>
                        <p className="text-muted-foreground">
                            Pragmatic Play, PG Soft, Evolution Gaming e mais de
                            50 provedores premium integrados.
                        </p>
                    </div>

                    <div className="feature-card p-6 rounded-lg border bg-card">
                        <div className="text-primary mb-4 ">
                            <Gear size={48} weight="duotone" />
                        </div>
                        <h3 className="text-xl font-bold mb-3">
                            Controle de RTP
                        </h3>
                        <p className="text-muted-foreground">
                            Ajuste a dificuldade e distribuição de prêmios de
                            acordo com sua estratégia de negócio.
                        </p>
                    </div>

                    <div className="feature-card p-6 rounded-lg border bg-card">
                        <div className="text-primary mb-4 ">
                            <VideoCamera size={48} weight="duotone" />
                        </div>
                        <h3 className="text-xl font-bold mb-3">
                            Modo Influenciador
                        </h3>
                        <p className="text-muted-foreground">
                            Crie contas demo exclusivas para criadores de
                            conteúdo e impulsione seu marketing.
                        </p>
                    </div>

                    <div className="feature-card p-6 rounded-lg border bg-card">
                        <div className="text-primary mb-4 ">
                            <Lightning size={48} weight="duotone" />
                        </div>
                        <h3 className="text-xl font-bold mb-3">
                            Integração Rápida
                        </h3>
                        <p className="text-muted-foreground">
                            API REST moderna e documentação completa. Integre em
                            minutos, não em semanas.
                        </p>
                    </div>

                    <div className="feature-card p-6 rounded-lg border bg-card">
                        <div className="text-primary mb-4 ">
                            <Gift size={48} weight="duotone" />
                        </div>
                        <h3 className="text-xl font-bold mb-3">
                            Rodadas Grátis
                        </h3>
                        <p className="text-muted-foreground">
                            Sistema completo de bônus e free spins para engajar
                            seus jogadores.
                        </p>
                    </div>

                    <div className="feature-card p-6 rounded-lg border bg-card">
                        <div className="text-primary mb-4 ">
                            <ChartBar size={48} weight="duotone" />
                        </div>
                        <h3 className="text-xl font-bold mb-3">
                            Dashboard Completo
                        </h3>
                        <p className="text-muted-foreground">
                            Acompanhe todas as métricas em tempo real e tome
                            decisões baseadas em dados.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-20 px-4 md:px-40 bg-muted/50" ref={statsRef}>
                <div className="grid md:grid-cols-4 gap-8 text-center">
                    <div>
                        <div
                            className="stat-number text-5xl font-bold text-primary mb-2"
                            data-target="6000+"
                        >
                            0
                        </div>
                        <div className="text-muted-foreground">
                            Jogos Disponíveis
                        </div>
                    </div>
                    <div>
                        <div
                            className="stat-number text-5xl font-bold text-primary mb-2"
                            data-target="50+"
                        >
                            0
                        </div>
                        <div className="text-muted-foreground">Provedores</div>
                    </div>
                    <div>
                        <div
                            className="stat-number text-5xl font-bold text-primary mb-2"
                            data-target="3%"
                        >
                            0
                        </div>
                        <div className="text-muted-foreground">GGR Mínimo</div>
                    </div>
                    <div>
                        <div className="text-5xl font-bold text-primary mb-2">
                            24/7
                        </div>
                        <div className="text-muted-foreground">
                            Suporte Técnico
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 px-4 md:px-40" ref={exclusiveRef}>
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Recursos Exclusivos
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Ferramentas que você não encontra em nenhum outro lugar
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    <div className="exclusive-card p-8 rounded-lg border-2 border-primary bg-primary/5">
                        <div className="flex items-center gap-3 mb-4">
                            <Trophy
                                size={32}
                                weight="duotone"
                                className="text-primary"
                            />
                            <h3 className="text-2xl font-bold">
                                GGR Mais Baixo do Brasil
                            </h3>
                        </div>
                        <p className="text-muted-foreground mb-6">
                            Revenue share entre 3% e 15%, você mantém mais lucro
                            na sua operação. Sem taxas escondidas ou custos
                            extras.
                        </p>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-2">
                                <CheckCircle
                                    size={24}
                                    weight="fill"
                                    className="text-primary mt-0.5 shrink-0"
                                />
                                <span>Sem taxa de setup ou mensalidade</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle
                                    size={24}
                                    weight="fill"
                                    className="text-primary mt-0.5 shrink-0"
                                />
                                <span>Pagamento flexível por volume</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle
                                    size={24}
                                    weight="fill"
                                    className="text-primary mt-0.5 shrink-0"
                                />
                                <span>
                                    Desconto progressivo por crescimento
                                </span>
                            </li>
                        </ul>
                    </div>

                    <div className="exclusive-card p-8 rounded-lg border-2 border-primary bg-primary/5">
                        <div className="flex items-center gap-3 mb-4">
                            <Target
                                size={32}
                                weight="duotone"
                                className="text-primary"
                            />
                            <h3 className="text-2xl font-bold">
                                Controle Total de RTP
                            </h3>
                        </div>
                        <p className="text-muted-foreground mb-6">
                            Exclusivo no mercado: ajuste o RTP dos jogos para
                            balancear premiação e rentabilidade da sua operação.
                        </p>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-2">
                                <CheckCircle
                                    size={24}
                                    weight="fill"
                                    className="text-primary mt-0.5 shrink-0"
                                />
                                <span>Ajuste fino por jogo ou provedor</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle
                                    size={24}
                                    weight="fill"
                                    className="text-primary mt-0.5 shrink-0"
                                />
                                <span>Métricas detalhadas de performance</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle
                                    size={24}
                                    weight="fill"
                                    className="text-primary mt-0.5 shrink-0"
                                />
                                <span>Otimize lucro sem perder jogadores</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="py-20 px-4 md:px-40 bg-linear-to-r from-primary/20 to-cyan-100">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Pronto para começar?
                    </h2>
                    <p className="text-xl text-muted-foreground mb-8">
                        Teste gratuitamente e veja como podemos transformar seu
                        cassino online
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <Button size="lg" asChild>
                            <Link href="https://www.playfiver.app/login">
                                Acessar o Painel
                            </Link>
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="text-lg px-8"
                        >
                            Falar no Telegram
                        </Button>
                    </div>
                    <p className="mt-6 text-sm text-muted-foreground">
                        Sem cartão de crédito • Setup em minutos • Suporte em
                        português
                    </p>
                </div>
            </section>

            <footer className="py-12 px-4 md:px-40 border-t">
                <div className="grid md:grid-cols-4 gap-8 mb-8">
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <Image
                                src="/logo.png"
                                alt="PlayFiver Logo"
                                width={40}
                                height={40}
                            />
                            <p className="font-bold text-lg">PlayFiver</p>
                        </div>
                        <p className="text-sm text-muted-foreground">
                            A plataforma mais completa para distribuir jogos de
                            cassino online.
                        </p>
                    </div>

                    <div></div>

                    <div></div>

                    <div></div>
                </div>

                <div className="pt-8 border-t text-center text-sm text-muted-foreground">
                    <p>
                        © 2026 PlayFiver. Todos os direitos reservados. Jogo
                        responsável +18
                    </p>
                </div>
            </footer>
        </main>
    );
}
