import { Shield, Award, Users, FileCheck } from "lucide-react"

export default function TrustBadges() {
  return (
    <div className="grid md:grid-cols-4 gap-8">
      <div className="flex flex-col items-center text-center">
        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
          <Shield className="w-8 h-8 text-blue-600" />
        </div>
        <h3 className="font-bold mb-2">Seguridad Garantizada</h3>
        <p className="text-gray-600">Protección de datos de nivel empresarial</p>
      </div>

      <div className="flex flex-col items-center text-center">
        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
          <Award className="w-8 h-8 text-blue-600" />
        </div>
        <h3 className="font-bold mb-2">Certificado por Expertos</h3>
        <p className="text-gray-600">Revisado por abogados profesionales</p>
      </div>

      <div className="flex flex-col items-center text-center">
        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
          <Users className="w-8 h-8 text-blue-600" />
        </div>
        <h3 className="font-bold mb-2">+10,000 Clientes</h3>
        <p className="text-gray-600">Confianza de miles de empresas</p>
      </div>

      <div className="flex flex-col items-center text-center">
        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
          <FileCheck className="w-8 h-8 text-blue-600" />
        </div>
        <h3 className="font-bold mb-2">100% Cumplimiento</h3>
        <p className="text-gray-600">Conforme con la legislación vigente</p>
      </div>
    </div>
  )
}
