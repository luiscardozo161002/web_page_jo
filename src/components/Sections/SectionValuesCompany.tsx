import { CardContent, CardFooter, CardTitle, Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const valuesCompany = [
  {
    logo:"https://i.ibb.co/N6CbbsTX/ESCUDO-JUAREZ-DE-ORIENTE.jpg",
    title: "Trabajo en equipo",
    description:
      "Fomentamos la colaboración y el apoyo mutuo para alcanzar objetivos comunes.",
  },
  { 
    logo:"https://i.ibb.co/N6CbbsTX/ESCUDO-JUAREZ-DE-ORIENTE.jpg",
    title: "Honestidad",
    description:
      "Actuamos con integridad y transparencia en todas nuestras acciones.",
  },
  {
    logo:"https://i.ibb.co/N6CbbsTX/ESCUDO-JUAREZ-DE-ORIENTE.jpg",
    title: "Responsabilidad",
    description:
      "Asumimos las consecuencias de nuestras acciones y decisiones.",
  },
  {
    logo:"https://i.ibb.co/N6CbbsTX/ESCUDO-JUAREZ-DE-ORIENTE.jpg",
    title: "Disciplina",
    description:
      "Mantenemos el orden y la constancia en nuestras actividades para lograr resultados efectivos.",
  },
  {
    logo:"https://i.ibb.co/N6CbbsTX/ESCUDO-JUAREZ-DE-ORIENTE.jpg",
    title: "Eficacia",
    description:
      "Nos esforzamos por alcanzar nuestros objetivos de manera eficiente y efectiva.",
  },
];

export default function SectionValuesCompany() {
  return (
    <section className="mx-auto flex flex-col gap-5 px-10 md:px-45 pb-5 text-gray-900 dark:text-zinc-300">
      <div className="h-px w-full max-w-5xl bg-gradient-to-r from-transparent to-transparent border-b border-zinc-900/10 dark:border-zinc-700" />
      <CardTitle>
        <h3 className="text-2xl md:text-4xl font-light">
          <strong>Nuestros Valores</strong>
        </h3>
      </CardTitle>
      <CardContent>
        <Carousel className="w-full md:max-w-7xl md:h-80">
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                <div className="p-1 w-full">
                  <Card className="h-50 md:h-80 md:w-[100%]">
                    <CardContent className="h-40 md:h-70 flex aspect-square items-center justify-center p-6 gap-5">
                        <div><img src={valuesCompany[index].logo} alt={valuesCompany[index].title} className="w-40 object-contain rounded-full border-white border-2" /></div>
                        <div>
                          <h4 className="text-2xl font-semibold">{valuesCompany[index].title}</h4>
                          <p className="text-sm font-extralight">{valuesCompany[index].description}</p>
                        </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </CardContent>
      <CardFooter>
        <span className="text-sm md:text-md">CJ-AN-03 REV.0</span>
      </CardFooter>
    </section>
  );
}
