import React, { useState } from 'react';
import { Check, X, ChevronDown, Menu, Star, Zap, Shield, TrendingUp, Users, BarChart3, Brain, Clock, Smartphone, DollarSign, ArrowRight, CheckCircle2, HelpCircle } from 'lucide-react';

function LandingPage() {
  const [isAnnual, setIsAnnual] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const plans = [
    {
      name: 'Básico',
      monthlyPrice: 9.99,
      annualPrice: 99,
      popular: false,
      description: 'Perfecto para comenzar a tomar control de tus finanzas',
      features: [
        'Registro ilimitado de ingresos y gastos',
        '1 cuenta bancaria',
        'Análisis mensual de salud financiera',
        'Alertas de gastos excesivos',
        'Reportes básicos semanales',
        'Acceso a categorías predefinidas'
      ],
      notIncluded: [
        'Registro por voz o foto',
        'Módulo de deudas y metas',
        'Hogar compartido'
      ]
    },
    {
      name: 'Premium',
      monthlyPrice: 19.99,
      annualPrice: 199,
      popular: true,
      description: 'La opción más elegida para finanzas familiares',
      features: [
        'Todo lo del plan Básico',
        'Registro por voz y fotos (OCR)',
        'Hasta 5 cuentas bancarias',
        'Módulo completo de deudas',
        'Módulo completo de metas',
        'Análisis semanal personalizado',
        'Reportes avanzados diarios',
        'Consejos personalizados con IA',
        'Hogar compartido (2 miembros)',
        'Dashboard web completo'
      ],
      notIncluded: []
    },
    {
      name: 'Elite',
      monthlyPrice: 39.99,
      annualPrice: 399,
      popular: false,
      description: 'Para quienes buscan excelencia financiera total',
      features: [
        'Todo lo del plan Premium',
        'Cuentas bancarias ilimitadas',
        'Análisis predictivo con IA',
        'Hogar familiar (5 miembros)',
        'Exportación a PDF y Excel',
        'Dashboard premium con visualizaciones 3D',
        'Consultas prioritarias',
        'Reportes personalizados a demanda',
        'Soporte prioritario',
        'Asesoría financiera mensual'
      ],
      notIncluded: []
    }
  ];

  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'Inteligencia Artificial Avanzada',
      description: 'Emiliano usa IA para analizar tus patrones de gasto y darte consejos específicos para tu situación.'
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: 'Directo en Telegram',
      description: 'Sin apps complicadas. Emiliano vive en Telegram, donde ya pasas tu tiempo. Siempre disponible.'
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Análisis Predictivo',
      description: 'No solo ve el pasado. Emiliano predice tus gastos futuros y te alerta antes de problemas.'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Seguridad Total',
      description: 'Tus datos financieros están encriptados y protegidos. Jamás compartimos tu información.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Finanzas Compartidas',
      description: 'Administra las finanzas de tu hogar en equipo. Todos ven, todos aportan, todos ahorran.'
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: 'Reportes Profesionales',
      description: 'Visualiza tu situación financiera con gráficos claros y reportes que realmente entiendes.'
    }
  ];

  const testimonials = [
  {
    name: 'María González',
    role: 'Emprendedora',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop',
    comment: 'En 2 meses con Emiliano identifiqué $450 mensuales en gastos innecesarios. Ahora esos $450 van directo a mi fondo de emergencia.',
    rating: 5
  },
  {
    name: 'Carlos Ramírez',
    role: 'Ingeniero de Software',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    comment: 'Probé 5 apps de finanzas antes de Emiliano. Ninguna me duró más de 2 semanas. Con Emiliano llevo 6 meses porque es tan fácil como enviar un mensaje.',
    rating: 5
  },
  {
    name: 'Ana Martínez',
    role: 'Diseñadora',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop',
    comment: 'Nunca fui buena con los números, pero esta herramienta lo hace todo tan simple. Ahora tengo control total de mis finanzas.',
    rating: 5
  }
];

  const faqs = [
    {
      q: '¿Necesito descargar una app?',
      a: 'No. Emiliano funciona 100% en Telegram. Solo necesitas tener Telegram instalado (que probablemente ya tienes) y empezar a chatear con Emiliano.'
    },
    {
      q: '¿Emiliano tiene acceso a mi cuenta bancaria?',
      a: 'No. Emiliano NUNCA tiene acceso a tus cuentas bancarias. Tú registras tus movimientos manualmente (por texto, voz o foto) y Emiliano los analiza. Cero riesgo.'
    },
    {
      q: '¿Funciona en mi país?',
      a: 'Sí. Emiliano funciona en cualquier país y con cualquier moneda. Configuras tu país y moneda al inicio y Emiliano se adapta completamente.'
    },
    {
      q: '¿Puedo cancelar en cualquier momento?',
      a: 'Por supuesto. Sin permanencias. Cancelas cuando quieras desde tu cuenta de Stripe en un clic. Tu data permanece disponible por 30 días después de cancelar.'
    },
    {
      q: '¿Qué pasa si no sé usar Telegram?',
      a: 'Telegram es súper fácil de usar (más que WhatsApp). Te enviamos una guía paso a paso al registrarte. Estarás listo en 5 minutos.'
    },
    {
      q: '¿Emiliano reemplaza a un asesor financiero humano?',
      a: 'Emiliano es tu primer línea de defensa para finanzas personales. Para estrategias de inversión complejas o planificación patrimonial, te recomendamos consultar un asesor certificado.'
    },
    {
      q: '¿Hay período de prueba gratuito?',
      a: 'Sí, ofrecemos 7 días de prueba gratis en cualquier plan. Prueba todas las funcionalidades sin ingresar tarjeta de crédito.'
    },
    {
      q: '¿Puedo cambiar de plan después?',
      a: 'Claro. Puedes hacer upgrade, downgrade o cambiar de mensual a anual en cualquier momento. Los cambios se aplican inmediatamente.'
    }
  ];

  const scrollToPlans = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Navigation */}
        <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center space-x-2">
                <img src="/logo.png" alt="Xenda.co" className="h-26 w-auto object-contain" />
                <span className="text-xl font-bold bg-gradient-to-r from-[#0052CC] to-[#34D399] bg-clip-text text-transparent">
                  Xenda.co
                </span>
              </div>
              
              <div className="hidden md:flex items-center space-x-8">
                <a href="#features" className="text-[#1F2937] hover:text-[#0052CC] transition">Características</a>
                <a href="#pricing" className="text-[#1F2937] hover:text-[#0052CC] transition">Planes</a>
                <a href="#faq" className="text-[#1F2937] hover:text-[#0052CC] transition">FAQ</a>
                <button onClick={scrollToPlans} className="bg-gradient-to-r from-[#0052CC] to-[#34D399] text-white px-6 py-2 rounded-lg hover:shadow-lg hover:scale-105 transition">
                  Empezar Ahora
                </button>
              </div>
        
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden text-[#1F2937]"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        
          {mobileMenuOpen && (
            <div className="md:hidden bg-white border-t border-slate-200">
              <div className="px-4 py-4 space-y-3">
                <a href="#features" className="block text-[#1F2937] hover:text-[#0052CC]">Características</a>
                <a href="#pricing" className="block text-[#1F2937] hover:text-[#0052CC]">Planes</a>
                <a href="#faq" className="block text-[#1F2937] hover:text-[#0052CC]">FAQ</a>
                <button onClick={scrollToPlans} className="w-full bg-gradient-to-r from-[#0052CC] to-[#34D399] text-white px-6 py-2 rounded-lg hover:shadow-lg">
                  Empezar Ahora
                </button>
              </div>
            </div>
          )}
        </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#0052CC]/10 to-[#34D399]/10 text-[#0052CC] px-4 py-2 rounded-full mb-6 border border-[#0052CC]/20">
              <Zap className="w-4 h-4" />
              <span className="text-sm font-medium">Tu asesor financiero con IA en Telegram</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-[#1F2937] mb-6 leading-tight">
              Deja de preguntarte{' '}
              <span className="bg-gradient-to-r from-[#0052CC] to-[#34D399] bg-clip-text text-transparent">
                a dónde va tu dinero
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-600 mb-10 leading-relaxed">
              Emiliano analiza tus gastos con la experiencia de un Wealth Manager de 20 años
              y te dice exactamente dónde estás perdiendo dinero. Sin rodeos. Sin apps complicadas.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button 
                onClick={scrollToPlans}
                className="bg-gradient-to-r from-[#0052CC] to-[#34D399] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-2xl hover:scale-105 transition shadow-lg flex items-center justify-center space-x-2"
              >
                <span>Probar 7 días gratis</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border-2 border-[#0052CC] text-[#0052CC] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#0052CC] hover:text-white transition">
                Ver cómo funciona
              </button>
            </div>

            <div className="flex items-center justify-center space-x-8 text-sm text-slate-500 flex-wrap gap-4">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-5 h-5 text-[#34D399]" />
                <span>Sin permanencia</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-5 h-5 text-[#34D399]" />
                <span>Cancela cuando quieras</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-5 h-5 text-[#34D399]" />
                <span>Datos 100% seguros</span>
              </div>
            </div>
          </div>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-[#0052CC]/5 to-[#34D399]/5 border border-[#0052CC]/10">
              <div className="text-4xl font-bold bg-gradient-to-r from-[#0052CC] to-[#34D399] bg-clip-text text-transparent mb-2">$450</div>
              <div className="text-slate-600">Ahorro promedio mensual</div>
            </div>
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-[#0052CC]/5 to-[#34D399]/5 border border-[#0052CC]/10">
              <div className="text-4xl font-bold bg-gradient-to-r from-[#0052CC] to-[#34D399] bg-clip-text text-transparent mb-2">30 seg</div>
              <div className="text-slate-600">Para registrar un gasto</div>
            </div>
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-[#0052CC]/5 to-[#34D399]/5 border border-[#0052CC]/10">
              <div className="text-4xl font-bold bg-gradient-to-r from-[#0052CC] to-[#34D399] bg-clip-text text-transparent mb-2">24/7</div>
              <div className="text-slate-600">Disponible en tu bolsillo</div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem-Solution */}
      <section className="py-20 bg-[#1F2937] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              ¿Te suena familiar?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-slate-800 p-8 rounded-xl border border-slate-700 hover:border-red-500/50 transition">
              <div className="text-red-400 mb-4 text-3xl">❌</div>
              <h3 className="text-xl font-bold mb-3">
                "No sé a dónde va mi dinero"
              </h3>
              <p className="text-slate-400">
                Ganas bien pero al final del mes no te queda nada. No tienes idea en qué se fue.
              </p>
            </div>

            <div className="bg-slate-800 p-8 rounded-xl border border-slate-700 hover:border-red-500/50 transition">
              <div className="text-red-400 mb-4 text-3xl">❌</div>
              <h3 className="text-xl font-bold mb-3">
                "Las apps de finanzas son muy complicadas"
              </h3>
              <p className="text-slate-400">
                Probaste 3-4 apps. Todas requieren demasiado tiempo y esfuerzo. Las abandonaste en 2 semanas.
              </p>
            </div>

            <div className="bg-slate-800 p-8 rounded-xl border border-slate-700 hover:border-red-500/50 transition">
              <div className="text-red-400 mb-4 text-3xl">❌</div>
              <h3 className="text-xl font-bold mb-3">
                "Necesito un asesor pero son muy caros"
              </h3>
              <p className="text-slate-400">
                Un asesor financiero te costaría $200+/hora. No puedes pagarlo (o justificarlo) en esta etapa.
              </p>
            </div>
          </div>

          <div className="text-center">
            <div className="inline-block bg-gradient-to-r from-[#34D399] to-emerald-500 text-white px-6 py-3 rounded-full font-bold mb-8 shadow-lg">
              Emiliano resuelve los 3 problemas
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-[#0052CC] to-[#0052CC]/80 p-8 rounded-xl shadow-xl hover:scale-105 transition">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-bold mb-3">Sabes EXACTAMENTE a dónde va cada peso</h3>
                <p className="text-blue-100">
                  Emiliano categoriza automáticamente y te muestra en qué categorías gastas más de lo que deberías.
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#0052CC] to-[#0052CC]/80 p-8 rounded-xl shadow-xl hover:scale-105 transition">
                <div className="text-4xl mb-4">💬</div>
                <h3 className="text-xl font-bold mb-3">Solo envías un mensaje. Listo.</h3>
                <p className="text-blue-100">
                  "Gasté $50 en almuerzo" y ya. Emiliano hace todo el resto. Incluso puedes enviar una foto del recibo.
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#0052CC] to-[#0052CC]/80 p-8 rounded-xl shadow-xl hover:scale-105 transition">
                <div className="text-4xl mb-4">💰</div>
                <h3 className="text-xl font-bold mb-3">$19.99/mes vs $200/hora</h3>
                <p className="text-blue-100">
                  Tienes un Wealth Manager con 20 años de experiencia por el precio de 2 cafés al mes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1F2937] mb-4">
              Por qué Emiliano es diferente
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              No es otra app de finanzas. Es tu asesor financiero personal que vive en tu bolsillo.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-50 to-white p-8 rounded-2xl border border-slate-200 hover:border-[#0052CC] hover:shadow-xl transition group">
                <div className="text-[#0052CC] mb-4 group-hover:scale-110 transition">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-[#1F2937] mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-[#34D399]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1F2937] mb-4">
              Tan fácil como 1-2-3
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition">
              <div className="w-16 h-16 bg-gradient-to-br from-[#0052CC] to-[#34D399] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-lg">
                1
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#1F2937]">Suscríbete</h3>
              <p className="text-slate-600 text-lg">
                Elige tu plan, completa el pago y recibe acceso instantáneo a Emiliano en Telegram.
              </p>
            </div>

            <div className="text-center bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition">
              <div className="w-16 h-16 bg-gradient-to-br from-[#0052CC] to-[#34D399] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-lg">
                2
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#1F2937]">Registra tus gastos</h3>
              <p className="text-slate-600 text-lg">
                Envía un mensaje de texto, audio o foto. Emiliano entiende todo y lo clasifica automáticamente.
              </p>
            </div>

            <div className="text-center bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition">
              <div className="w-16 h-16 bg-gradient-to-br from-[#0052CC] to-[#34D399] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-lg">
                3
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#1F2937]">Recibe análisis</h3>
              <p className="text-slate-600 text-lg">
                Emiliano te envía reportes semanales con consejos específicos para ahorrar más dinero.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1F2937] mb-4">
              Elige tu plan perfecto
            </h2>
            <p className="text-xl text-slate-600 mb-8">
              Todos los planes incluyen 7 días de prueba gratis. Sin permanencia.
            </p>

            <div className="inline-flex items-center bg-slate-100 rounded-full p-1">
              <button
                onClick={() => setIsAnnual(false)}
                className={`px-6 py-2 rounded-full transition ${!isAnnual ? 'bg-gradient-to-r from-[#0052CC] to-[#34D399] text-white shadow-lg' : 'text-slate-600'}`}
              >
                Mensual
              </button>
              <button
                onClick={() => setIsAnnual(true)}
                className={`px-6 py-2 rounded-full transition ${isAnnual ? 'bg-gradient-to-r from-[#0052CC] to-[#34D399] text-white shadow-lg' : 'text-slate-600'}`}
              >
                Anual
                <span className="ml-2 text-xs bg-[#34D399] text-white px-2 py-1 rounded-full">
                  Ahorra 17%
                </span>
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl border-2 p-8 transition hover:shadow-2xl ${
                  plan.popular
                    ? 'border-[#0052CC] shadow-2xl scale-105'
                    : 'border-slate-200 hover:border-[#0052CC]'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-[#0052CC] to-[#34D399] text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                      Más Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-[#1F2937] mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-slate-600 mb-6">
                    {plan.description}
                  </p>
                  <div className="mb-2">
                    <span className="text-5xl font-bold text-[#1F2937]">
                      ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                    </span>
                    <span className="text-slate-600">
                      /{isAnnual ? 'año' : 'mes'}
                    </span>
                  </div>
                  {isAnnual && (
                    <p className="text-sm text-[#34D399] font-semibold">
                      Ahorras ${(plan.monthlyPrice * 12 - plan.annualPrice).toFixed(2)} al año
                    </p>
                  )}
                </div>

                <button className={`w-full py-3 rounded-lg font-semibold transition mb-8 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-[#0052CC] to-[#34D399] text-white hover:shadow-xl hover:scale-105'
                    : 'bg-slate-100 text-[#1F2937] hover:bg-gradient-to-r hover:from-[#0052CC] hover:to-[#34D399] hover:text-white'
                }`}>
                  Empezar prueba gratis
                </button>

                <ul className="space-y-4">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-[#34D399] flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">{feature}</span>
                    </li>
                  ))}
                  {plan.notIncluded.map((feature, i) => (
                    <li key={i} className="flex items-start space-x-3 opacity-50">
                      <X className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-500">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1F2937] mb-4">
              Lo que dicen nuestros clientes
            </h2>
            <p className="text-xl text-slate-600">
              Miles de personas ya transformaron sus finanzas con nuestra IA
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "María González",
                role: "Emprendedora",
                image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
                text: "En 3 meses logré ahorrar $5,000 que pensé imposibles. La IA me ayudó a identificar gastos ocultos que ni siquiera sabía que tenía.",
                rating: 5
              },
              {
                name: "Carlos Ramírez",
                role: "Profesional TI",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
                text: "Las proyecciones financieras son increíblemente precisas. Me ayudó a planificar la compra de mi casa en tiempo récord.",
                rating: 5
              },
              {
                name: "Ana Martínez",
                role: "Diseñadora",
                image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
                text: "Nunca fui buena con los números, pero esta herramienta lo hace todo tan simple. Ahora tengo control total de mis finanzas.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-slate-700 mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center space-x-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-[#1F2937]">{testimonial.name}</p>
                    <p className="text-sm text-slate-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
        <section id="faq" className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-[#1F2937] mb-4">
                Preguntas Frecuentes
              </h2>
              <p className="text-xl text-slate-600">
                Todo lo que necesitas saber sobre nuestro asistente financiero
              </p>
            </div>
        
            <div className="max-w-3xl mx-auto space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-slate-50 rounded-xl overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-slate-100 transition"
                  >
                    <span className="font-semibold text-slate-900">{faq.q}</span>
                    <ChevronDown className={`w-5 h-5 text-slate-600 transition-transform ${openFaq === index ? 'rotate-180' : ''}`} />
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-4 text-slate-600">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-[#0052CC] to-[#34D399]">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Transforma tus finanzas hoy
          </h2>
          <p className="text-xl text-blue-50 mb-8 max-w-2xl mx-auto">
            Únete a miles de personas que ya están construyendo su libertad financiera con IA
          </p>
          <button className="bg-white text-[#0052CC] px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-2xl hover:scale-105 transition inline-flex items-center space-x-2">
            <span>Comenzar prueba gratuita</span>
            <ArrowRight className="w-5 h-5" />
          </button>
          <p className="text-blue-100 mt-4 text-sm">
            No se requiere tarjeta de crédito • Cancela cuando quieras
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1F2937] text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img src="/logo.png" alt="Xenda.co" className="h-26 w-auto object-contain" />
                <span className="text-2xl font-bold">Xenda.co</span>
              </div>
              <p className="text-slate-400">
                Tu asistente financiero inteligente para alcanzar tus metas económicas.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Producto</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition">Características</a></li>
                <li><a href="#" className="hover:text-white transition">Precios</a></li>
                <li><a href="#" className="hover:text-white transition">Integraciones</a></li>
                <li><a href="#" className="hover:text-white transition">API</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Recursos</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
                <li><a href="#" className="hover:text-white transition">Guías</a></li>
                <li><a href="#" className="hover:text-white transition">Centro de ayuda</a></li>
                <li><a href="#" className="hover:text-white transition">Webinars</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Empresa</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition">Sobre nosotros</a></li>
                <li><a href="#" className="hover:text-white transition">Contacto</a></li>
                <li><a href="#" className="hover:text-white transition">Privacidad</a></li>
                <li><a href="#" className="hover:text-white transition">Términos</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-700 pt-8 text-center text-slate-400">
            <p>© 2026 Xenda.co. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
