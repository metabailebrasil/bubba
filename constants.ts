import { PricingCategory } from './types';

export const PRICING_DATA: PricingCategory[] = [
  {
    id: 'local',
    title: 'Negócios Locais',
    description: 'Soluções pontuais para estabelecer sua marca digitalmente.',
    plans: [
      {
        id: 'start',
        name: 'Plano Start',
        price: 'R$ 279',
        period: 'pagamento único',
        features: [
          'Configuração Google Maps',
          'Perfis em Redes Sociais',
          'Padronização de Imagens',
          '3 Artes Gráficas',
          'PDF de Aprendizado',
          '7 dias de acompanhamento',
          'IA inclusa nos processos'
        ]
      },
      {
        id: 'branding',
        name: 'Plano Branding & Growth',
        price: 'R$ 389',
        period: 'pagamento único',
        recommended: true,
        features: [
          'Tudo do Plano Start',
          'Identidade Visual (Logo, Cores, Tipografia)',
          'Estratégia de Conteúdo (Calendário 1 mês)',
          'Copywriting persuasivo',
          'Pacote de artes ilimitado (conforme necessidade)',
          'Suporte consultivo 30 dias'
        ]
      }
    ]
  },
  {
    id: 'automation',
    title: 'Automação WhatsApp',
    description: 'Atenda seus clientes 24/7 com inteligência.',
    note: 'Aviso: Setup Inicial de R$200 (Básico) ou R$400 (Complexo). Teste de 7 dias.',
    plans: [
      {
        id: 'basic',
        name: 'Plano Basic',
        price: 'R$ 89',
        period: '/mês',
        features: [
          '1 Número WhatsApp',
          'Fluxo padrão (saudação + respostas)',
          'Suporte horário comercial',
          'Ideal para pequenos negócios'
        ]
      },
      {
        id: 'pro',
        name: 'Plano Pro',
        price: 'R$ 149',
        period: '/mês',
        recommended: true,
        features: [
          'Até 2 Números',
          'Fluxos Ilimitados e Personalizados',
          'Consultoria mensal de melhorias',
          'Suporte VIP Prioritário',
          'Ideal para empresas e equipes'
        ]
      }
    ]
  },
  {
    id: 'dealership',
    title: 'Concessionárias',
    description: 'Acelere as vendas de veículos com tração total.',
    note: 'Planos com recorrência trimestral.',
    plans: [
      {
        id: 'aceleracao',
        name: 'Plano Aceleração',
        price: 'R$ 199,90',
        period: '/mês',
        features: [
          'Site melhorado',
          'Automação básica',
          '4 Artes mensais',
          'Atualização de estoque (fotos enviadas pelo cliente)'
        ]
      },
      {
        id: 'tracao',
        name: 'Plano Tração',
        price: 'R$ 299,90',
        period: '/mês',
        features: [
          'Site completo',
          'Automação avançada (captura leads)',
          '8 Artes mensais estratégicas',
          'Novo Branding aplicado'
        ]
      },
      {
        id: 'turbo',
        name: 'Plano Turbo VIP',
        price: 'R$ 389,00',
        period: '/mês',
        recommended: true,
        features: [
          'Melhoria avançada de site',
          'Suporte priorizado',
          'Branding total',
          'Produção contínua de artes (sem limite)',
          'Copywriting e Relatórios de desempenho'
        ]
      }
    ]
  }
];