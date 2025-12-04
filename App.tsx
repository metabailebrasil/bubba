import React, { useState } from 'react';
import { Check, ArrowRight, Zap, MessageSquare, Car, Globe, Star, Sparkles, Instagram, Linkedin, Facebook, MapPin, Mail, Phone } from 'lucide-react';
import Header from './components/Header';
import Button from './components/Button';
import { PRICING_DATA } from './constants';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'local' | 'automation' | 'dealership'>('local');

  const activeCategory = PRICING_DATA.find(c => c.id === activeTab) || PRICING_DATA[0];

  const handleTabChange = (id: string) => {
    setActiveTab(id as 'local' | 'automation' | 'dealership');
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900 selection:bg-bubba-100 selection:text-bubba-800 flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section id="hero" className="pt-32 pb-20 lg:pt-44 lg:pb-32 bg-gradient-to-b from-bubba-50/80 via-white to-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center max-w-4xl mx-auto mb-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-bubba-50 text-bubba-700 text-sm font-medium mb-8 animate-fade-in-up border border-bubba-100 shadow-sm">
                <span className="flex h-2 w-2 rounded-full bg-bubba-600 mr-2 animate-pulse"></span>
                Agência Especializada em Performance
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-gray-900 mb-8 leading-[1.1] animate-fade-in-up">
                Acelere seu Negócio com <span className="text-transparent bg-clip-text bg-gradient-to-r from-bubba-600 to-bubba-800">Inteligência Digital</span> e Automação
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in-up">
                Potencialize seus resultados com estratégias validadas no Google, WhatsApp e o poder da Inteligência Artificial para escalar suas vendas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up">
                <Button onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })} className="shadow-bubba-200 shadow-lg px-8 py-4 text-lg">
                  Ver Soluções
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="secondary" onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })} className="px-8 py-4 text-lg">
                  Saiba mais
                </Button>
              </div>
            </div>

            <div className="relative mx-auto max-w-6xl rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-gray-900 animate-fade-in">
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none z-10"></div>
              <img
                src="https://placehold.co/1200x600/1e40af/ffffff?text=Dashboard+Bubba+Intelligence"
                alt="Bubba Dashboard"
                className="w-full h-auto object-cover opacity-90 hover:opacity-100 transition-opacity duration-700"
              />
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-24 bg-white relative">
          <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-30"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-base text-bubba-600 font-semibold tracking-wide uppercase mb-2">Nossas Especialidades</h2>
              <p className="text-3xl font-bold text-gray-900 sm:text-4xl">O que você precisa?</p>
              <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">Soluções completas para transformar visitantes em clientes fiéis.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
              {/* Service Card 1 */}
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-bubba-600 transition-colors duration-300">
                  <Globe className="w-7 h-7 text-bubba-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Presença Digital</h3>
                <p className="text-gray-600 leading-relaxed">
                  Posicionamento estratégico no Google e Redes Sociais para que sua marca seja encontrada e lembrada pelos clientes certos.
                </p>
              </div>

              {/* Service Card 2 */}
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-600 transition-colors duration-300">
                  <MessageSquare className="w-7 h-7 text-green-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Automação WhatsApp</h3>
                <p className="text-gray-600 leading-relaxed">
                  Atenda 24 horas por dia, 7 dias por semana. Automatize agendamentos, dúvidas e vendas sem perder a personalização.
                </p>
              </div>

              {/* Service Card 3 */}
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-600 transition-colors duration-300">
                  <Car className="w-7 h-7 text-orange-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Soluções para Concessionárias</h3>
                <p className="text-gray-600 leading-relaxed">
                  Tecnologia dedicada para acelerar o giro de estoque, captar leads qualificados e profissionalizar o marketing automotivo.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-6">Escolha o plano ideal</h2>
              
              {/* Tabs */}
              <div className="inline-flex flex-wrap justify-center p-1.5 bg-white rounded-xl shadow-sm border border-gray-200 gap-1 sm:gap-0">
                {PRICING_DATA.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => handleTabChange(category.id)}
                    className={`px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-bubba-500 focus:ring-offset-2 whitespace-nowrap ${
                      activeTab === category.id
                        ? 'bg-bubba-600 text-white shadow-md'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    {category.title}
                  </button>
                ))}
              </div>
            </div>

            {/* Content Area */}
            <div className="animate-fade-in">
              <div className="text-center max-w-3xl mx-auto mb-12">
                <p className="text-lg text-gray-600">{activeCategory.description}</p>
                {activeCategory.note && (
                  <div className="mt-4 inline-block bg-blue-50 text-bubba-800 px-4 py-2 rounded-lg text-sm border border-blue-100">
                    <span className="font-semibold">Nota:</span> {activeCategory.note}
                  </div>
                )}
              </div>

              <div className={`grid grid-cols-1 md:grid-cols-${activeCategory.plans.length > 2 ? '3' : '2'} gap-8 max-w-${activeCategory.plans.length > 2 ? '7xl' : '4xl'} mx-auto`}>
                {activeCategory.plans.map((plan) => (
                  <div 
                    key={plan.id}
                    className={`relative bg-white rounded-2xl p-8 transition-all duration-300 flex flex-col ${
                      plan.recommended 
                        ? 'border-2 border-bubba-500 shadow-xl scale-100 md:scale-105 z-10' 
                        : 'border border-gray-200 shadow-lg hover:shadow-xl hover:border-bubba-200'
                    }`}
                  >
                    {plan.recommended && (
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <span className="bg-bubba-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                          Recomendado
                        </span>
                      </div>
                    )}
                    
                    <div className="mb-6">
                      <h3 className="text-xl font-bold text-gray-900">{plan.name}</h3>
                      <div className="mt-4 flex items-baseline">
                        <span className="text-4xl font-extrabold text-gray-900 tracking-tight">{plan.price}</span>
                        {plan.period && <span className="ml-2 text-gray-500 font-medium text-sm">{plan.period}</span>}
                      </div>
                    </div>

                    <ul className="space-y-4 mb-8 flex-1">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-50 flex items-center justify-center mt-0.5">
                            <Check className="w-3.5 h-3.5 text-green-600" />
                          </div>
                          <span className="ml-3 text-gray-600 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button 
                      variant={plan.recommended ? 'primary' : 'secondary'} 
                      fullWidth
                      onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                      Começar Agora
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Innovation Section */}
        <section id="innovation" className="py-24 bg-gray-900 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-bubba-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="lg:flex lg:items-center lg:justify-between">
              <div className="lg:w-1/2 mb-10 lg:mb-0">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-bubba-900 border border-bubba-700 text-bubba-300 text-xs font-semibold tracking-wide uppercase mb-6">
                  <Sparkles className="w-3 h-3 mr-2" />
                  Coming Soon
                </div>
                <h2 className="text-3xl font-bold sm:text-4xl mb-4">Bubba Barber AI</h2>
                <p className="text-lg text-gray-400 mb-8 max-w-xl">
                  O futuro da gestão para barbearias. Uma inteligência artificial treinada para gerenciar agendamentos, prever tendências de corte e fidelizar clientes automaticamente.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                   <input 
                    type="email" 
                    placeholder="Seu e-mail para novidades" 
                    className="px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-bubba-500 w-full sm:w-auto"
                   />
                   <Button variant="white">Entrar na Lista</Button>
                </div>
              </div>
              <div className="lg:w-5/12">
                 <div className="bg-gray-800 rounded-2xl p-2 border border-gray-700 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                    <img 
                      src="https://placehold.co/600x400/111827/3b82f6?text=AI+Interface+Preview" 
                      alt="Bubba AI Interface" 
                      className="rounded-xl w-full"
                    />
                 </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="contact" className="bg-white border-t border-gray-100 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center mb-4">
                <span className="text-2xl font-bold text-bubba-700 tracking-tight">Bubba</span>
                <span className="w-2 h-2 bg-bubba-500 rounded-full ml-1 mt-2"></span>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                Transformando negócios locais em referências digitais através de tecnologia, design e estratégia.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-bubba-600 transition-colors"><Instagram size={20} /></a>
                <a href="#" className="text-gray-400 hover:text-bubba-600 transition-colors"><Facebook size={20} /></a>
                <a href="#" className="text-gray-400 hover:text-bubba-600 transition-colors"><Linkedin size={20} /></a>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-6">Soluções</h4>
              <ul className="space-y-3">
                <li><a href="#" onClick={(e) => { e.preventDefault(); handleTabChange('local'); document.getElementById('pricing')?.scrollIntoView({behavior: 'smooth'})}} className="text-gray-600 hover:text-bubba-600 text-sm">Negócios Locais</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); handleTabChange('automation'); document.getElementById('pricing')?.scrollIntoView({behavior: 'smooth'})}} className="text-gray-600 hover:text-bubba-600 text-sm">Automação WhatsApp</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); handleTabChange('dealership'); document.getElementById('pricing')?.scrollIntoView({behavior: 'smooth'})}} className="text-gray-600 hover:text-bubba-600 text-sm">Concessionárias</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-6">Contato</h4>
              <ul className="space-y-3">
                <li className="flex items-start text-gray-600 text-sm">
                  <Phone size={16} className="mr-2 mt-0.5 text-bubba-500" />
                  <span>(11) 99999-9999</span>
                </li>
                <li className="flex items-start text-gray-600 text-sm">
                  <Mail size={16} className="mr-2 mt-0.5 text-bubba-500" />
                  <span>contato@bubba.agency</span>
                </li>
                <li className="flex items-start text-gray-600 text-sm">
                  <MapPin size={16} className="mr-2 mt-0.5 text-bubba-500" />
                  <span>São Paulo, SP</span>
                </li>
              </ul>
            </div>

            <div>
               <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-6">Pagamento</h4>
               <p className="text-gray-500 text-sm mb-4">Aceitamos cartões de crédito e PIX com parcelamento facilitado.</p>
               <div className="flex gap-2 opacity-60 grayscale hover:grayscale-0 transition-all">
                 <div className="h-8 w-12 bg-gray-200 rounded"></div>
                 <div className="h-8 w-12 bg-gray-200 rounded"></div>
                 <div className="h-8 w-12 bg-gray-200 rounded"></div>
               </div>
            </div>
          </div>

          <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Bubba Agency. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-gray-600 text-sm">Privacidade</a>
              <a href="#" className="text-gray-400 hover:text-gray-600 text-sm">Termos de Uso</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;