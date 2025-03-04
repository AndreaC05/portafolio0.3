import "../styles/experience.css";

export default function Experience() {
  return (
    <>
      <div className="experience-container">
        <div className="title-experience flex align-items-center">
          <p className="mr-4">Experiencia</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M18.125 3.75H15V1.875C15 0.875391 14.125 0 13.125 0H6.875C5.875 0 5 0.875391 5 1.875V3.75H1.875C0.875391 3.75 0 4.625 0 5.625V11.25H20V5.625C20 4.625 19.125 3.75 18.125 3.75ZM13.125 3.75H6.875V1.875H13.125V3.75Z"
              fill="#fff"
            />
            <path
              opacity="0.4"
              d="M12.5 13.125C12.5 13.4705 12.2205 13.75 11.875 13.75H8.125C7.78125 13.75 7.5 13.4688 7.5 13.125V11.25H0V16.875C0 17.875 0.875391 18.75 1.875 18.75H18.125C19.1246 18.75 20 17.8746 20 16.875V11.25H12.5V13.125Z"
              fill="#fff"
            />
          </svg>
        </div>
        <div className="experience-information">
          <p className="puesto">
            Desarrollador de software - Empresa Corporación Mikrotik Perú
          </p>
          <p className="date">Enero 2024 - Actualidad</p>
          <ul className="list-task">
            <li>
              Desarrollo de una aplicación web para la gestión eficiente de
              stock, optimizando el control de inventarios.
            </li>
            <li>
              Implementación de un sistema web para la gestión de accesos en
              Radius, automatizando la autenticación de usuarios.
            </li>
            <li>
              Desarrollo de un sistema web para la gestión interna de la empresa.
            </li>
            <li>
              Administración y configuración de hosting en SiteGround,
              asegurando estabilidad y rendimiento del sitio.
            </li>
            <li>
              Gestión y mantenimiento de bases de datos, optimizando consultas y
              estructura para un mejor rendimiento.
            </li>
          </ul>
        </div>
        <div className="experience-information">
          <p className="puesto">FullStack Developer - GetByte</p>
          <p className="date">Julio 2023 - Diciembre 2023</p>
          <ul className="list-task">
            <li>Desarrollo de API REST con el framework Laravel.</li>
            <li>Desarrollo Web FrontEnd con el framework React JS.</li>
            <li>
              Integración de API REST para la gestión de exámenes ocupacionales.
            </li>
            <li>
              Implementación de web para exámenes ocupacionales y exámenes de
              laboratorio.
            </li>
            <li>Administración y gestión de base de datos.</li>
          </ul>
        </div>
      </div>
    </>
  );
}
