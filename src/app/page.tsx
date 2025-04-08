import { CheckCircle, Shield, Clock, Download, Users, DollarSign } from "lucide-react"
import CountdownTimer from "@/components/countdown-timer"
import DocumentForm from "@/components/document-form"
import PricingTiers from "@/components/pricing-tiers"
import TrustBadges from "@/components/trust-badges"
import DocumentPreview from "@/components/document-preview"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">
            Instant<span className="text-blue-600">Legal</span>AI
          </h1>
          <div className="flex items-center text-emerald-500 bg-emerald-50 px-4 py-1 rounded-full">
            <CheckCircle className="w-4 h-4 mr-2" />
            <span className="text-sm">100% Garantía de Devolución</span>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <div className="bg-blue-500 py-12 md:py-16">
          <div className="container mx-auto px-4 flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2 flex flex-col justify-center text-white">
              <h2 className="text-4xl font-bold mb-4">Documentos Legales Generados por IA</h2>
              <h3 className="text-3xl font-bold mb-6">Adaptados a Tu Negocio</h3>
              <p className="mb-6">
                Nuestra tecnología de IA crea documentos legales personalizados al instante. Sin abogados, sin esperas,
                sin tarifas excesivas. Obtén exactamente lo que necesitas en minutos, no días.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center">
                    <div className="w-4 h-4 rounded-full bg-blue-500"></div>
                  </div>
                  <span>Personalización Impulsada por IA para Tu Negocio Específico</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center">
                    <div className="w-4 h-4 rounded-full bg-blue-500"></div>
                  </div>
                  <span>Descarga Instantánea - Listo en 2 Minutos</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center">
                    <div className="w-4 h-4 rounded-full bg-blue-500"></div>
                  </div>
                  <span>Ahorra $500+ Comparado con Servicios Legales Tradicionales</span>
                </div>
              </div>
            </div>

            <div className="md:w-1/2">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-xl font-bold text-center mb-4">Genera Tu Documento Legal Personalizado</h2>

                <div className="bg-amber-50 p-4 rounded-lg mb-6">
                  <p className="text-center text-amber-700 font-medium mb-2">OFERTA ESPECIAL DE 24 HORAS TERMINA EN:</p>
                  <CountdownTimer hours={7} minutes={23} seconds={45} />
                </div>

                <DocumentForm />
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Tiers Section */}
        <div className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-2">Elige Tu Plan</h2>
            <p className="text-center text-gray-600 mb-8">
              Precios transparentes sin costos ocultos.{" "}
              <span className="font-semibold text-red-600">Oferta por tiempo limitado</span>
            </p>

            <div className="flex justify-center mb-6">
              <div className="inline-block bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-medium">
                <Clock className="w-4 h-4 inline mr-1" />
                Solo quedan 17 documentos disponibles a este precio
              </div>
            </div>

            <PricingTiers />
          </div>
        </div>

        {/* Document Preview Section */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Vista Previa de Documentos</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Visualiza cómo se verá tu documento legal antes de comprarlo.
                <span className="font-semibold text-blue-600"> Aumenta las conversiones en un 76%</span>
              </p>
            </div>

            <DocumentPreview />
          </div>
        </div>

        {/* Trust Badges Section */}
        <div className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Respaldado por Expertos</h2>
            <TrustBadges />
          </div>
        </div>

        {/* Features Section */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Por Qué Elegir InstantLegalAI</h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 border border-gray-200 rounded-lg">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Protección Legal Completa</h3>
                <p className="text-gray-600">
                  Documentos legales redactados por IA entrenada con miles de contratos profesionales.
                </p>
              </div>

              <div className="text-center p-6 border border-gray-200 rounded-lg">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Download className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Entrega Instantánea</h3>
                <p className="text-gray-600">Recibe tu documento personalizado en minutos, no días o semanas.</p>
              </div>

              <div className="text-center p-6 border border-gray-200 rounded-lg">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Ahorro Significativo</h3>
                <p className="text-gray-600">
                  Ahorra cientos de dólares en comparación con los honorarios tradicionales de abogados.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Lo Que Dicen Nuestros Clientes</h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold">Carlos Rodríguez</h4>
                    <p className="text-sm text-gray-600">Propietario de Pequeña Empresa</p>
                  </div>
                </div>
                <p className="text-gray-700">
                  &quot;InstantLegalAI me ahorró miles de euros en honorarios legales. Obtuve un contrato personalizado en minutos.&quot;
                </p>
                <div className="flex text-yellow-400 mt-2">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold">María González</h4>
                    <p className="text-sm text-gray-600">Consultora Independiente</p>
                  </div>
                </div>
                <p className="text-gray-700">
                  &quot;La calidad del documento legal que recibí superó mis expectativas. Muy profesional y completo.&quot;
                </p>
                <div className="flex text-yellow-400 mt-2">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold">Javier Martínez</h4>
                    <p className="text-sm text-gray-600">Startup Tecnológica</p>
                  </div>
                </div>
                <p className="text-gray-700">
                  &quot;Proceso sencillo y rápido. El documento se adaptó perfectamente a las necesidades específicas de mi empresa.&quot;
                </p>
                <div className="flex text-yellow-400 mt-2">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">
                Instant<span className="text-blue-400">Legal</span>AI
              </h3>
              <p className="text-gray-400">Documentos legales personalizados generados por IA para tu negocio.</p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Documentos</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Acuerdos de Confidencialidad</li>
                <li>Contratos de Servicios</li>
                <li>Términos y Condiciones</li>
                <li>Políticas de Privacidad</li>
                <li>Contratos Laborales</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Empresa</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Sobre Nosotros</li>
                <li>Contacto</li>
                <li>Blog</li>
                <li>Preguntas Frecuentes</li>
                <li>Soporte</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Términos de Servicio</li>
                <li>Política de Privacidad</li>
                <li>Política de Reembolso</li>
                <li>Aviso Legal</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>© {new Date().getFullYear()} InstantLegalAI. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
