export default function SectionAboutCompany() {
  return (
    <section className="mx-auto flex flex-col gap-5 px-10 md:px-45 p-5 text-gray-900 dark:text-zinc-300">
      <h3 className="text-2xl md:text-4xl font-light">
        <strong>Acerca de Juárez de Oriente</strong>
      </h3>
      <p className="text- md:text-lg text-justify font-extralight">
        Juárez de Oriente S.A. de C.V. es una empresa filial de la{" "}
        <a href="https://www.cpjz.com.mx/" className="hover:underline">
          Sociedad Cooperativa de Producción de Servicios Juárez S.C.L.
        </a>
        , fundada en 2007 con el objetivo de brindar servicios de explotación,
        barrenación, carga y acarreo de materias primas a CYCNA de Oriente en
        Puebla. Esta filial forma parte del crecimiento y expansión de la
        cooperativa, que inició sus actividades el 19 de junio de 1962 con 97
        trabajadores convocados por el Sr. Guillermo Álvarez Macías. La
        cooperativa ha consolidado su posición como líder en su sector, con una
        trayectoria de más de seis décadas de crecimiento y fortaleza,
        destacando la labor de sus socios y trabajadores.
      </p>
      <img
        className="border-white border-2 rounded-sm"
        src="https://i.ibb.co/vCQphDyW/fondo-cpjz.png"
        alt="Fondo de la empresa Juárez de Oriente"
      />
    </section>
  );
}
