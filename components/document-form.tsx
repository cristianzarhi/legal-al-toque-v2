"use client"

import { useState } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

export default function DocumentForm() {
  const [protectionLevel, setProtectionLevel] = useState(50)
  const [step, setStep] = useState(1)

  return (
    <div className="space-y-6">
      {step === 1 && (
        <>
          <div>
            <label className="block text-sm font-medium mb-1">Tipo de Documento</label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Seleccionar tipo de documento..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="nda">Acuerdo de Confidencialidad</SelectItem>
                <SelectItem value="contract">Contrato de Servicios</SelectItem>
                <SelectItem value="terms">Términos y Condiciones</SelectItem>
                <SelectItem value="privacy">Política de Privacidad</SelectItem>
                <SelectItem value="employment">Contrato Laboral</SelectItem>
                <SelectItem value="consulting">Acuerdo de Consultoría</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Nombre del Negocio</label>
              <Input placeholder="Ingresa el nombre de tu negocio" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Tipo de Negocio</label>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Seleccionar tipo de negocio..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="llc">Sociedad de Responsabilidad Limitada</SelectItem>
                  <SelectItem value="corporation">Corporación</SelectItem>
                  <SelectItem value="partnership">Sociedad</SelectItem>
                  <SelectItem value="sole-proprietor">Empresario Individual</SelectItem>
                  <SelectItem value="nonprofit">Organización Sin Fines de Lucro</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Estado/Jurisdicción</label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Seleccionar estado..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="madrid">Madrid</SelectItem>
                <SelectItem value="barcelona">Barcelona</SelectItem>
                <SelectItem value="valencia">Valencia</SelectItem>
                <SelectItem value="sevilla">Sevilla</SelectItem>
                <SelectItem value="malaga">Málaga</SelectItem>
                <SelectItem value="bilbao">Bilbao</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Industria</label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Seleccionar industria..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="tech">Tecnología</SelectItem>
                <SelectItem value="retail">Comercio Minorista</SelectItem>
                <SelectItem value="healthcare">Salud</SelectItem>
                <SelectItem value="finance">Finanzas</SelectItem>
                <SelectItem value="education">Educación</SelectItem>
                <SelectItem value="manufacturing">Manufactura</SelectItem>
                <SelectItem value="hospitality">Hostelería</SelectItem>
                <SelectItem value="construction">Construcción</SelectItem>
                <SelectItem value="consulting">Consultoría</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Nivel de Protección del Documento</label>
            <Slider
              value={[protectionLevel]}
              onValueChange={(value) => setProtectionLevel(value[0])}
              max={100}
              step={1}
              className="my-4"
            />
            <div className="flex justify-between text-sm text-gray-500">
              <span>Estándar</span>
              <span>Completo</span>
              <span>Máximo</span>
            </div>
          </div>

          <div>
            <h3 className="font-medium mb-2">Cláusulas Especiales (Opcional)</h3>
            <div className="space-y-2">
              <div className="flex items-start space-x-2">
                <Checkbox id="confidentiality" />
                <Label htmlFor="confidentiality" className="text-sm font-normal">
                  Confidencialidad Mejorada
                </Label>
              </div>
              <div className="flex items-start space-x-2">
                <Checkbox id="arbitration" />
                <Label htmlFor="arbitration" className="text-sm font-normal">
                  Cláusula de Arbitraje
                </Label>
              </div>
              <div className="flex items-start space-x-2">
                <Checkbox id="termination" />
                <Label htmlFor="termination" className="text-sm font-normal">
                  Opciones Avanzadas de Terminación
                </Label>
              </div>
              <div className="flex items-start space-x-2">
                <Checkbox id="intellectual" />
                <Label htmlFor="intellectual" className="text-sm font-normal">
                  Protección de Propiedad Intelectual
                </Label>
              </div>
              <div className="flex items-start space-x-2">
                <Checkbox id="noncompete" />
                <Label htmlFor="noncompete" className="text-sm font-normal">
                  Cláusula de No Competencia
                </Label>
              </div>
            </div>
          </div>

          <Button className="w-full bg-blue-600 hover:bg-blue-700" onClick={() => setStep(2)}>
            Continuar
          </Button>
        </>
      )}

      {step === 2 && (
        <>
          <h3 className="font-medium text-lg mb-4">Información Adicional</h3>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Dirección de la Empresa</label>
              <Input placeholder="Calle, número, código postal, ciudad" />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Información de Contacto</label>
              <Input placeholder="Correo electrónico" className="mb-2" />
              <Input placeholder="Número de teléfono" />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Número de Identificación Fiscal (NIF/CIF)</label>
              <Input placeholder="Ej. B12345678" />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Representante Legal</label>
              <Input placeholder="Nombre completo" />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Requisitos Específicos</label>
              <Textarea placeholder="Describe cualquier requisito específico para tu documento legal" rows={4} />
            </div>

            <div className="flex items-start space-x-2">
              <Checkbox id="terms" />
              <Label htmlFor="terms" className="text-sm font-normal">
                Acepto los <span className="text-blue-600 underline">Términos y Condiciones</span> y la{" "}
                <span className="text-blue-600 underline">Política de Privacidad</span>
              </Label>
            </div>

            <div className="flex gap-2">
              <Button variant="outline" className="w-1/2" onClick={() => setStep(1)}>
                Atrás
              </Button>
              <Button className="w-1/2 bg-blue-600 hover:bg-blue-700">Generar Documento</Button>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
