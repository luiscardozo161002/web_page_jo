import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function SectionPurposesCompany() {
  return (
    <section className="mx-auto grid md:grid-cols-2 md:grid-rows-1 gap-5 px-10 md:px-45 p-5 text-gray-900 dark:text-zinc-300">
      <Card className="flex flex-col gap-3">
        <CardHeader>
          <CardTitle>
            <h3 className="text-2xl md:text-4xl font-light">
              <strong>Misión</strong>
            </h3>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm md:text-lg text-justify gap-3 font-extralight">
            En Juárez de Oriente, S.A. de C.V., estamos comprometidos a proveer
            un excelente servicio en la explotación de yacimientos, carga y
            acarreo, mediante el control y estandarizaición de nuestros
            procesos, aplicando la mejora continua con el fin de satisfacer las
            necesidades y expectativas de nuestros clientes.
          </p>
        </CardContent>
      </Card>
      <Card className="flex flex-col gap-3">
        <CardHeader>
          <CardTitle>
            <h3 className="text-2xl md:text-4xl font-light">
              <strong>Visión</strong>
            </h3>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm md:text-lg text-justify gap-3 font-extralight">
            Posicionarnos como la empresa líder en prestación de servicios de
            explotación de yacimientos, carga y acarreo nacional y regional,
            aplicando la mejora continua dentro de nuestros procesos.
          </p>
        </CardContent>
      </Card>
    </section>
  );
}
