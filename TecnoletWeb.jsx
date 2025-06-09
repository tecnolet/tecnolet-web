import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function TecnoletWeb() {
  const [form, setForm] = useState({ nombre: "", telefono: "", servicio: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    alert(`Cotización enviada:\nNombre: ${form.nombre}\nTeléfono: ${form.telefono}\nServicio: ${form.servicio}`);
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-6">
      <header className="text-center">
        <h1 className="text-4xl font-bold text-blue-800">TECNOLET - Complete Security</h1>
        <p className="text-lg text-gray-600">Soluciones integrales en seguridad electrónica y redes</p>
      </header>

      <section>
        <h2 className="text-2xl font-semibold text-blue-700">¿Quiénes somos?</h2>
        <p className="text-gray-700 mt-2">
          Con más de 5 años de experiencia, ofrecemos soluciones completas y personalizadas para hogares,
          empresas e instituciones. Nuestro compromiso es proteger lo que más valoras, brindando calidad,
          profesionalismo y tecnología de vanguardia.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-blue-700">Servicios</h2>
        <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
          <li>Instalación de cámaras de seguridad (CCTV analógicas e IP)</li>
          <li>Sistemas de alarmas para hogar y negocio</li>
          <li>Automatización de portones eléctricos</li>
          <li>Cercas eléctricas</li>
          <li>Cableado estructurado (voz, datos y red)</li>
          <li>Instalación de redes LAN y WiFi</li>
          <li>Mantenimiento preventivo y correctivo</li>
          <li>Venta de equipos de seguridad y redes</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-blue-700">Solicita tu cotización</h2>
        <Card className="mt-4">
          <CardContent className="space-y-4 pt-4">
            <Input name="nombre" placeholder="Tu nombre" value={form.nombre} onChange={handleChange} />
            <Input name="telefono" placeholder="Tu teléfono" value={form.telefono} onChange={handleChange} />
            <Input name="servicio" placeholder="Servicio que necesitas" value={form.servicio} onChange={handleChange} />
            <Button onClick={handleSubmit} className="bg-blue-600 text-white">Enviar cotización</Button>
          </CardContent>
        </Card>
      </section>

      <footer className="text-center text-sm text-gray-500 mt-8">
        <p>📍 Zona El Tejar, Calle Mariano Colodro Nro. 1604 - Bolivia</p>
        <p>📞 72357159 | ✉️ aecheverrialte@gmail.com</p>
      </footer>
    </div>
  );
}
