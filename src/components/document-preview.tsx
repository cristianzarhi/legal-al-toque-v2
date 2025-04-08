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
                  Este Acuerdo de Confidencialidad (el "Acuerdo") se celebra entre [Nombre de la Empresa], con domicilio
                  en [Dirección] (la "Parte Reveladora") y [Nombre del Receptor], con domicilio en [Dirección] (la
                  "Parte Receptora").
                </p>
                <p className="mb-2">1. OBJETO DEL ACUERDO</p>
                <p className="mb-2">
                  El presente Acuerdo tiene por objeto establecer los términos y condiciones bajo los cuales la Parte
                  Receptora mantendrá la confidencialidad de la información proporcionada por la Parte Reveladora.
                </p>
                <p className="mb-2">2. INFORMACIÓN CONFIDENCIAL</p>
                <p className="mb-2">
                  A efectos del presente Acuerdo, "Información Confidencial" significa toda información revelada por la
                  Parte Reveladora a la Parte Receptora, ya sea de forma oral, escrita, gráfica o electromagnética...
                </p>
                <p className="mb-2">3. OBLIGACIONES DE LA PARTE RECEPTORA</p>
                <p className="mb-2">La Parte Receptora se compromete a:</p>
                <p className="mb-2">a) Mantener la Información Confidencial en estricta confidencialidad;</p>
                <p className="mb-2">
                  b) No divulgar, distribuir, publicar, transmitir o comunicar de cualquier forma la Información
                  Confidencial, en todo o en parte, a terceros;
                </p>
                <p className="mb-2">
                  c) Utilizar la Información Confidencial únicamente para los fines autorizados expresamente por la
                  Parte Reveladora;
                </p>
                <p>
                  d) Proteger la Información Confidencial con al menos el mismo grado de cuidado que utiliza para
                  proteger su propia información confidencial...
                </p>
              </div>
              <div className="flex justify-center">
                <Button className="bg-blue-600 hover:bg-blue-700">Ver Documento Completo</Button>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="services" className="mt-0">
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Contrato de Servicios</h3>
              <div className="bg-gray-100 p-4 rounded-lg h-64 overflow-y-auto text-sm">
                <p className="font-bold mb-2">CONTRATO DE PRESTACIÓN DE SERVICIOS</p>
                <p className="mb-2">
                  En [Ciudad], a [Fecha], entre [Nombre de la Empresa], con NIF/CIF [Número], domiciliada en
                  [Dirección], representada por [Nombre del Representante] (en adelante, el "Prestador") y [Nombre del
                  Cliente], con NIF/CIF [Número], domiciliado en [Dirección] (en adelante, el "Cliente").
                </p>
                <p className="mb-2">1. OBJETO DEL CONTRATO</p>
                <p className="mb-2">
                  El Prestador se compromete a proporcionar al Cliente los servicios de [descripción de servicios] (los
                  "Servicios"), de acuerdo con los términos y condiciones establecidos en el presente contrato.
                </p>
                <p className="mb-2">2. DURACIÓN</p>
                <p className="mb-2">
                  El presente contrato tendrá una duración de [período], comenzando el [fecha de inicio] y finalizando
                  el [fecha de finalización], salvo que se rescinda anticipadamente conforme a lo previsto en este
                  contrato.
                </p>
                <p className="mb-2">3. HONORARIOS Y FORMA DE PAGO</p>
                <p>
                  El Cliente pagará al Prestador la cantidad de [importe] euros por los Servicios. El pago se realizará
                  de la siguiente manera: [condiciones de pago]...
                </p>
              </div>
              <div className="flex justify-center">
                <Button className="bg-blue-600 hover:bg-blue-700">Ver Documento Completo</Button>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="terms" className="mt-0">
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Términos y Condiciones</h3>
              <div className="bg-gray-100 p-4 rounded-lg h-64 overflow-y-auto text-sm">
                <p className="font-bold mb-2">TÉRMINOS Y CONDICIONES</p>
                <p className="mb-2">Última actualización: [Fecha]</p>
                <p className="mb-2">
                  Bienvenido a [Nombre de la Empresa]. Estos Términos y Condiciones rigen el uso de nuestro sitio web y
                  servicios.
                </p>
                <p className="mb-2">1. ACEPTACIÓN DE LOS TÉRMINOS</p>
                <p className="mb-2">
                  Al acceder o utilizar nuestro sitio web y servicios, usted acepta estar legalmente vinculado por estos
                  Términos y Condiciones. Si no está de acuerdo con alguno de estos términos, no debe utilizar nuestro
                  sitio web o servicios.
                </p>
                <p className="mb-2">2. CAMBIOS EN LOS TÉRMINOS</p>
                <p className="mb-2">
                  Nos reservamos el derecho de modificar estos Términos y Condiciones en cualquier momento. Las
                  modificaciones entrarán en vigor inmediatamente después de su publicación en nuestro sitio web. Su uso
                  continuado del sitio web después de cualquier cambio constituye su aceptación de los nuevos términos.
                </p>
                <p>3. USO DEL SITIO WEB</p>
              </div>
              <div className="flex justify-center">
                <Button className="bg-blue-600 hover:bg-blue-700">Ver Documento Completo</Button>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="privacy" className="mt-0">
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Política de Privacidad</h3>
              <div className="bg-gray-100 p-4 rounded-lg h-64 overflow-y-auto text-sm">
                <p className="font-bold mb-2">POLÍTICA DE PRIVACIDAD</p>
                <p className="mb-2">Última actualización: [Fecha]</p>
                <p className="mb-2">
                  En [Nombre de la Empresa], nos comprometemos a proteger su privacidad. Esta Política de Privacidad
                  explica cómo recopilamos, utilizamos y protegemos su información personal.
                </p>
                <p className="mb-2">1. INFORMACIÓN QUE RECOPILAMOS</p>
                <p className="mb-2">Podemos recopilar la siguiente información personal:</p>
                <p className="mb-2">- Nombre y apellidos</p>
                <p className="mb-2">
                  - Información de contacto, incluyendo dirección de correo electrónico y número de teléfono
                </p>
                <p className="mb-2">- Información demográfica como código postal, preferencias e intereses</p>
                <p className="mb-2">- Otra información relevante para encuestas y/o ofertas</p>
                <p>2. CÓMO UTILIZAMOS LA INFORMACIÓN RECOPILADA</p>
              </div>
              <div className="flex justify-center">
                <Button className="bg-blue-600 hover:bg-blue-700">Ver Documento Completo</Button>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="employment" className="mt-0">
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Contrato Laboral</h3>
              <div className="bg-gray-100 p-4 rounded-lg h-64 overflow-y-auto text-sm">
                <p className="font-bold mb-2">CONTRATO DE TRABAJO</p>
                <p className="mb-2">
                  En [Ciudad], a [Fecha], entre [Nombre de la Empresa], con NIF/CIF [Número], domiciliada en
                  [Dirección], representada por [Nombre del Representante] (en adelante, el "Empleador") y [Nombre del
                  Empleado], con DNI [Número], domiciliado en [Dirección] (en adelante, el "Empleado").
                </p>
                <p className="mb-2">1. OBJETO DEL CONTRATO</p>
                <p className="mb-2">
                  El Empleador contrata al Empleado para desempeñar el cargo de [Puesto de Trabajo], con las funciones y
                  responsabilidades detalladas en el Anexo I del presente contrato.
                </p>
                <p className="mb-2">2. DURACIÓN DEL CONTRATO</p>
                <p className="mb-2">
                  El presente contrato tendrá una duración [indefinida/temporal por X meses/años], comenzando el [fecha
                  de inicio].
                </p>
                <p className="mb-2">3. JORNADA LABORAL</p>
                <p>
                  La jornada laboral será de [número de horas] horas semanales, distribuidas de la siguiente manera:
                  [horario]...
                </p>
              </div>
              <div className="flex justify-center">
                <Button className="bg-blue-600 hover:bg-blue-700">Ver Documento Completo</Button>
              </div>
            </div>
          </TabsContent>
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
