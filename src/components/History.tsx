export const History = () => {
  return (
    <>
      <a
        id="history"
        className="flex flex-col items-center justify-center h-screen"
      >
        <div className="font-lato font-bold text-center my-10 text-4xl w-1/2 mx-auto">
          Nuestra historia
        </div>
        <p className="font-lato md:w-1/3 p-3 mx-auto">
          En 2021, el proyecto comienza bajo el nombre{" "}
          <span className="font-bold">Música y Emociones</span>.{" "}
        </p>
        <p className="font-lato leading-7 md:w-1/3 p-3 mx-auto">
          Por aquel entonces, el objetivo era explorar el mundo emocional a
          través de la música y utilizarla como una herramienta para gestionar
          las emociones. La idea se origina por las experiencias compartidas en
          la compañía de Teatro Playback “Entrespejos” (Salamanca) y por las
          ganas de aportar más con nuestros conocimientos. Desde entonces, hemos
          preparado y presentado numerosos talleres, realizándolos con éxito
          durante los siguientes años.
        </p>
        <p className="md:w-1/3 leading-7 p-3 mx-auto">
          A principios de 2024, el proyecto evoluciona y adopta un nuevo nombre
          <span className="font-vibes font-bold text-2xl"> Equi-ethos.</span> Con esta
          transformación buscamos ir más allá de nuestras actividades iniciales,
          incorporando la reflexión y la filosofía en nuestras propuestas. La
          idea se inspira en nuestro tiempo compartido como estudiantes del
          grado de filosofía por la UNED.
        </p>
        <p className="md:w-1/3 leading-7 p-3 mx-auto">
          Durante este período, hemos presentado talleres con éxito, integrando
          estos nuevos elementos y enriqueciendo nuestras ofertas. Así, el
          proyecto que comenzó como una exploración grupal de las emociones a
          través de la música y el movimiento corporal, se convierte en la
          búsqueda de traer de nuevo la atención del cuerpo al pensamiento.
        </p>
      </a>
    </>
  );
};

export default History;
