export type SiteConfig = {
  brand: {
    name: string;
    domain: string;
    tagline: string;
  };
  links: {
    whatsapp: {
      phoneE164: string;
      message: string;
    };
    demo: {
      url: string;
      label: string;
    };
    email: string;
  };
  sections: {
    segments: { title: string; description: string }[];
    platforms: string[];
    deliverables: { title: string; description: string }[];
    features: string[];
    monetization: { title: string; description: string }[];
    packages: {
      title: string;
      description: string;
      bullets: string[];
      recommended?: boolean;
    }[];
    process: { title: string; description: string }[];
    faq: { q: string; a: string }[];
  };
};

export const site: SiteConfig = {
  brand: {
    name: "YourottApp",
    domain: "yourottapp.com",
    tagline: "Apps OTT white-label sob medida para Smart TVs, mobile e web.",
  },
  links: {
    whatsapp: {
      phoneE164: "+5500000000000",
      message:
        "Olá! Quero um app white-label para IPTV/Hotel (MVP: Smart TV + mobile). Podemos falar?",
    },
    demo: {
      url: "#",
      label: "Agendar demonstração",
    },
    email: "contato@yourottapp.com",
  },
  sections: {
    segments: [
      {
        title: "Provedores IPTV",
        description:
          "App com sua marca, pensado para controle remoto e operação diária: categorias, listas, EPG e experiência fluida.",
      },
      {
        title: "Operação Hotel / Hospitality",
        description:
          "Interface simples e elegante para hóspedes, com foco em estabilidade, branding do hotel e uma experiência direta.",
      },
      {
        title: "TV + Mobile (MVP) ",
        description:
          "Estratégia de lançamento: começar em Smart TV e mobile, garantindo consistência de marca e evolução por etapas.",
      },
    ],
    platforms: [
      "Samsung (Tizen)",
      "LG (webOS)",
      "Android TV",
      "Fire TV",
      "Apple TV",
      "Roku",
      "iOS",
      "Android",
      "Web",
    ],
    deliverables: [
      {
        title: "Apps com sua marca",
        description:
          "Interface e experiência pensadas para TV: navegação rápida, foco em performance e consistência visual.",
      },
      {
        title: "Integração com seu ecossistema",
        description:
          "Integramos com seu backend/API/CMS e serviços essenciais (CDN/DRM/analytics/pagamentos) conforme o seu stack.",
      },
      {
        title: "Publicação e suporte",
        description:
          "Acompanhamento de homologação e publicação nas lojas quando aplicável, além de manutenção e evolução contínua.",
      },
    ],
    features: [
      "Live TV, VOD e séries",
      "Catch-up / Timeshift (quando disponível)",
      "EPG (guia de programação)",
      "Pesquisa e categorias",
      "Perfis e controle parental",
      "Favoritos e continuar assistindo",
      "Legendas e múltiplos áudios (quando disponível)",
      "Notificações e lembretes (quando aplicável)",
    ],
    monetization: [
      {
        title: "SVOD",
        description: "Assinaturas recorrentes com planos e períodos de teste.",
      },
      {
        title: "AVOD",
        description:
          "Monetização por anúncios (banners e vídeo) com integração conforme suas necessidades.",
      },
      {
        title: "TVOD / PPV",
        description:
          "Eventos e conteúdos pay-per-view com regras de acesso e campanhas.",
      },
      {
        title: "FAST",
        description:
          "Canais lineares com anúncios e programação, quando fizer sentido para o seu negócio.",
      },
    ],
    packages: [
      {
        title: "Start",
        description: "Para lançar o MVP (TV + mobile) com qualidade.",
        bullets: [
          "MVP em Smart TV + mobile (Android e/ou iOS)",
          "Branding (logo, cores, tipografia)",
          "Integração com sua API/CMS",
          "Player + catálogo + busca",
        ],
      },
      {
        title: "Pro",
        description:
          "Para operação pronta para crescimento e evolução contínua.",
        bullets: [
          "Mais plataformas (TV + mobile + web)",
          "Perfis, favoritos e continuar assistindo",
          "Monetização (SVOD/AVOD/PPV) conforme necessidade",
          "Observabilidade básica (logs/métricas) e processo de releases",
        ],
        recommended: true,
      },
      {
        title: "Enterprise",
        description:
          "Para operações com integrações avançadas e requisitos de segurança.",
        bullets: [
          "Integrações avançadas (DRM/CDN/SSO), quando aplicável",
          "Checklist de publicação/homologação por store",
          "Rotina de suporte e SLA (a definir)",
          "Roadmap e priorização por dados",
        ],
      },
    ],
    process: [
      {
        title: "Diagnóstico",
        description:
          "Entendemos seu catálogo, integrações, monetização e o que precisa estar pronto para lançamento.",
      },
      {
        title: "Design & UX de TV",
        description:
          "Construímos telas e fluxo com foco em controle remoto, legibilidade e velocidade.",
      },
      {
        title: "Implementação",
        description:
          "Desenvolvimento por plataforma, integrações e testes de reprodução, navegação e conta.",
      },
      {
        title: "Homologação",
        description:
          "Checklist técnico e ajustes finos para garantir estabilidade e boa avaliação do usuário.",
      },
      {
        title: "Lançamento e evolução",
        description:
          "Publicação, monitoramento e roadmap de melhorias com base em dados e feedback.",
      },
    ],
    faq: [
      {
        q: "Vocês entregam para todas as plataformas?",
        a: "Sim — atendemos Smart TVs, set-top boxes, mobile e web. No kickoff, confirmamos o escopo por plataforma, requisitos de store e integrações.",
      },
      {
        q: "Vocês fazem publicação nas lojas (Samsung/LG/Google/Apple)?",
        a: "Podemos apoiar o processo de publicação e homologação conforme a plataforma e o seu modelo (conta do desenvolvedor, políticas e requisitos).",
      },
      {
        q: "Dá para integrar com meu painel/CMS/API atual?",
        a: "Sim. Trabalhamos por integração via API e adaptamos o app ao seu catálogo, autenticação e regras de acesso.",
      },
      {
        q: "Quais modelos de monetização vocês suportam?",
        a: "SVOD, AVOD e TVOD/PPV, além de modelos híbridos. A escolha depende do seu produto e da sua operação.",
      },
      {
        q: "Como funciona suporte e manutenção?",
        a: "Oferecemos manutenção corretiva e evolutiva. Definimos SLAs e rotina de atualização conforme o plano contratado.",
      },
    ],
  },
};

export function getWhatsAppUrl(params: {
  phoneE164: string;
  message: string;
}): string {
  const phone = params.phoneE164.replace(/\D/g, "");
  const text = encodeURIComponent(params.message);
  return `https://wa.me/${phone}?text=${text}`;
}
