import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function PricingTiers() {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {/* Basic Plan */}
      <div className="border rounded-lg overflow-hidden bg-white">
        <div className="p-6">
          <h3 className="text-lg font-bold mb-2">Básico</h3>
          <div className="flex items-baseline mb-4">
            <span className="text-3xl font-bold">$29</span>
            <span className="text-gray-500 ml-1">/ documento</span>
          </div>
          <p className="text-gray-600 mb-6">Ideal para pequeños negocios con necesidades legales básicas.</p>
          <Button className="w-full bg-blue-600 hover:bg-blue-700">Seleccionar Plan</Button>
        </div>
        <div className="bg-gray-50 p-6">
          <h4 className="font-medium mb-4">Incluye:</h4>
          <ul className="space-y-3">
            <li className="flex items-start">
              <Check className="w-5 h-5 text-green-500 mr-2 shrink-0" />
              <span>1 documento legal personalizado</span>
            </li>
            <li className="flex items-start">
              <Check className="w-5 h-5 text-green-500 mr-2 shrink-0" />
              <span>Personalización básica</span>
            </li>
            <li className="flex items-start">
              <Check className="w-5 h-5 text-green-500 mr-2 shrink-0" />
              <span>Formato PDF descargable</span>
            </li>
            <li className="flex items-start">
              <Check className="w-5 h-5 text-green-500 mr-2 shrink-0" />
              <span>Actualizaciones por 30 días</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Standard Plan */}
      <div className="border rounded-lg overflow-hidden bg-white relative">
        <div className="absolute top-0 left-0 right-0 bg-blue-600 text-white text-center py-1 text-sm font-medium">
          Más Popular
        </div>
        <div className="p-6 pt-10">
          <h3 className="text-lg font-bold mb-2">Estándar</h3>
          <div className="flex items-baseline mb-4">
            <span className="text-3xl font-bold">$99</span>
            <span className="text-gray-500 ml-1">/ paquete</span>
          </div>
          <p className="text-gray-600 mb-6">Perfecto para negocios en crecimiento con múltiples necesidades.</p>
          <Button className="w-full bg-blue-600 hover:bg-blue-700">Seleccionar Plan</Button>
        </div>
        <div className="bg-gray-50 p-6">
          <h4 className="font-medium mb-4">Incluye:</h4>
          <ul className="space-y-3">
            <li className="flex items-start">
              <Check className="w-5 h-5 text-green-500 mr-2 shrink-0" />
              <span>3 documentos legales personalizados</span>
            </li>
            <li className="flex items-start">
              <Check className="w-5 h-5 text-green-500 mr-2 shrink-0" />
              <span>Personalización avanzada</span>
            </li>
            <li className="flex items-start">
              <Check className="w-5 h-5 text-green-500 mr-2 shrink-0" />
              <span>Formatos PDF y Word editables</span>
            </li>
            <li className="flex items-start">
              <Check className="w-5 h-5 text-green-500 mr-2 shrink-0" />
              <span>Actualizaciones por 90 días</span>
            </li>
            <li className="flex items-start">
              <Check className="w-5 h-5 text-green-500 mr-2 shrink-0" />
              <span>Cláusulas especiales incluidas</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Premium Plan */}
      <div className="border rounded-lg overflow-hidden bg-white">
        <div className="p-6">
          <h3 className="text-lg font-bold mb-2">Premium</h3>
          <div className="flex items-baseline mb-4">
            <span className="text-3xl font-bold">$149</span>
            <span className="text-gray-500 ml-1">/ paquete</span>
          </div>
          <p className="text-gray-600 mb-6">La solución completa para empresas establecidas.</p>
          <Button className="w-full bg-blue-600 hover:bg-blue-700">Seleccionar Plan</Button>
        </div>
        <div className="bg-gray-50 p-6">
          <h4 className="font-medium mb-4">Incluye:</h4>
          <ul className="space-y-3">
            <li className="flex items-start">
              <Check className="w-5 h-5 text-green-500 mr-2 shrink-0" />
              <span>5 documentos legales personalizados</span>
            </li>
            <li className="flex items-start">
              <Check className="w-5 h-5 text-green-500 mr-2 shrink-0" />
              <span>Personalización premium</span>
            </li>
            <li className="flex items-start">
              <Check className="w-5 h-5 text-green-500 mr-2 shrink-0" />
              <span>Todos los formatos de archivo (PDF, Word, HTML)</span>
            </li>
            <li className="flex items-start">
              <Check className="w-5 h-5 text-green-500 mr-2 shrink-0" />
              <span>Actualizaciones ilimitadas por 1 año</span>
            </li>
            <li className="flex items-start">
              <Check className="w-5 h-5 text-green-500 mr-2 shrink-0" />
              <span>Todas las cláusulas especiales incluidas</span>
            </li>
            <li className="flex items-start">
              <Check className="w-5 h-5 text-green-500 mr-2 shrink-0" />
              <span>Soporte prioritario</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
