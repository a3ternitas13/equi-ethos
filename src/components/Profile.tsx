export const Profile = () => {
  return (
    <>
      <div
        id="whoweare"
        className="font-bold text-center my-10 text-4xl text-center w-full"
      >
        ¿Quienes somos?
      </div>
      <div className="flex flex-col w-full lg:flex-row">
        <div className="flex-1 h-auto card bg-base-300 rounded-box place-items-center p-3 text-justify ml-3 mr-3">
          <p className="ml-1">
            Mª del Rocío Gentil. Psicóloga especializada en intervención
            criminológica y victimológica. Psico/sociodramatista. Colegiada en
            el Colegio Oficial de Psicólogos de Castilla y León (COPCYL).
            Miembro de la Sociedad Española de Psicoterapia y técnicas de grupo
            (SEPTG) y vocal de la zona centro en funciones desde principios de
            2024. Actriz de la compañía de Teatro Playback “Entrespejos” desde
            2019.
          </p>
        </div>
        <div className="divider lg:divider-horizontal"></div>
        <div className="flex-1 h-auto card bg-base-300 rounded-box place-items-center p-3 ml-3 mr-3">
          Sergio Carrascal. Músico graduado en el Conservatorio Profesional de
          Música de Salamanca. Biólogo (USAL). Colaborador en varios
          grupos de música de cámara. Clarinetista en la Banda de Música Tomás
          Bretón. Músico de la compañía de Teatro Playback “Entrespejos” desde
          2017
        </div>
      </div>
    </>
  );
};

export default Profile;
