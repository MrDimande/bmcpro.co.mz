export interface Job {
  id: string;
  slug: string;
  title: string;
  location: string;
  type: 'Full-time' | 'Part-time' | 'Contract' | 'Remote';
  description: string;
  requirements: string[];
  postedAt: string;
}

export const JOBS: Job[] = [
  {
    id: '1',
    slug: 'desenvolvedor-frontend-senior',
    title: 'Desenvolvedor Frontend Sénior',
    location: 'Maputo (Híbrido)',
    type: 'Full-time',
    description: 'Procuramos um desenvolvedor frontend experiente para liderar a construção de interfaces modernas e responsivas. Você trabalhará com React, Astro e Tailwind CSS.',
    requirements: [
      'Experiência comprovada de 5+ anos com React e TypeScript',
      'Domínio de CSS moderno e Tailwind',
      'Experiência com SSR e otimização de performance',
      'Boa comunicação e capacidade de liderança técnica'
    ],
    postedAt: '2026-01-05'
  },
  {
    id: '2',
    slug: 'analista-de-dados',
    title: 'Analista de Dados',
    location: 'Maputo',
    type: 'Full-time',
    description: 'Estamos em busca de um analista para transformar dados em insights acionáveis para nossos clientes. Você trabalhará com SQL, Python e ferramentas de visualização.',
    requirements: [
      'Formação em Estatística, Matemática ou Computação',
      'Forte conhecimento em SQL',
      'Experiência com Power BI ou Tableau',
      'Inglês avançado'
    ],
    postedAt: '2026-01-03'
  },
  {
    id: '3',
    slug: 'gestor-de-projetos-ti',
    title: 'Gestor de Projetos de TI',
    location: 'Remoto',
    type: 'Contract',
    description: 'Gerencie projetos de tecnologia complexos, garantindo entregas no prazo e dentro do orçamento. Metodologias ágeis são essenciais.',
    requirements: [
      'Certificação PMP ou Scrum Master',
      'Experiência com Jira/Confluence',
      'Histórico de entrega de projetos de software',
      'Excelentes habilidades de negociação'
    ],
    postedAt: '2025-12-28'
  }
];

export function getJobBySlug(slug: string): Job | undefined {
  return JOBS.find(job => job.slug === slug);
}
