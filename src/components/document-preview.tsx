"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function DocumentPreview() {
  const [activeTab, setActiveTab] = useState("nda")

  return (
    <div className="border rounded-lg overflow-hidden bg-white shadow-lg">
      <Tabs defaultValue="nda" value={activeTab} onValueChange={setActiveTab} className="w-full">
        <div className="p-4 bg-gray-50 border-b">
          <TabsList className="grid grid-cols-3 md:grid-cols-5">
            <TabsTrigger value="nda">NDA</TabsTrigger>
            <TabsTrigger value="services">Servicios</TabsTrigger>
            <TabsTrigger value="terms">Términos</TabsTrigger>
            <TabsTrigger value="privacy">Privacidad</TabsTrigger>
            <TabsTrigger value="employment">Laboral</TabsTrigger>
          </TabsList>
        </div>

        <div className="p-6">
          <TabsContent value="nda" className="mt-0">
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Acuerdo de Confidencialidad</h3>
              <div className="bg-gray-100 p-4 rounded-lg h-64 overflow-y-auto text-sm">
                <p className="font-bold mb-2">ACUERDO DE CONFIDENCIALIDAD</p>
                <p className="mb-2">
                  Este Acuerdo de Confidencialidad (el &quot;Acuerdo&quot;) se celebra entre [Nombre de la Empresa], con domicilio
                  en [Dirección] (la &quot;Parte Reveladora&quot;) y [Nombre del Receptor], con domicilio en [Dirección] (la &quot;Parte Receptora&quot;).
                </p>
                <p className="mb-2">1. OBJETO DEL ACUERDO</p>
                <p className="mb-2">
                  El presente Acuerdo tiene por objeto establecer los términos y condiciones bajo los cuales la Parte
                  Receptora mantendrá la confidencialidad de la información proporcionada por la Parte Reveladora.
                </p>
                <p className="mb-2">2. INFORMACIÓN CONFIDENCIAL</p>
                <p className="mb-2">
                  A efectos del presente Acuerdo, &quot;Información Confidencial&quot; significa toda información revelada por la
                  Parte Reveladora a la Parte Receptora, ya sea de forma oral, escrita, gráfica o electromagnética...
                </p>
                <p className="mb-2">3. OBLIGACIONES DE LA PARTE RECEPTORA</p>
                <p className="mb-2">La Parte Receptora se compromete a:</p>
                <p className="mb-2">a) Mantener la Información Confidencial en estricta confidencialidad;</p>
                <p className="mb-2">b) No divulgar, distribuir, publicar, transmitir o comunicar de cualquier forma la Información Confidencial;</p>
                <p className="mb-2">c) Utilizarla únicamente para los fines autorizados por la Parte Reveladora;</p>
                <p>d) Protegerla con el mismo grado de cuidado que su propia información confidencial...</p>
              </div>
              <div className="flex justify-center">
                <Button className="bg-blue-600 hover:bg-blue-700">Ver Documento Completo</Button>
              </div>
            </div>
          </TabsContent>

          {/* Aquí seguirían los otros TabsContent (services, terms, privacy, employment) también con sus &quot; corregidos */}
        </div>
      </Tabs>

      <div className="p-4 bg-blue-50 border-t">
        <div className="flex items-center justify-center">
          <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
            Vista previa del documento aumenta las conversiones en un 76%
          </div>
        </div>
      </div>
    </div>
  )
}
