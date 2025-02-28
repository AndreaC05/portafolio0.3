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
            Desarrollador de software - Empresa de transporte Grupo Horna S.A.C
          </p>
          <p className="date">Octubre 2024 - Actualidad</p>
          <ul className="list-task">
            <li>
              Desarrollo de una pagina web interactiva con pasarela de pagos.
            </li>
            <li>Administración de servidores.</li>
            <li>Implementación de un servicio de streaming.</li>
            <li>
              Gestión y soporte en el uso del software de venta de pasajes.
            </li>
            <li>Administración y gestión de base de datos.</li>
          </ul>
        </div>
        <div className="experience-information">
          <p className="puesto">
            Analista Programador - GEMMaster Business Solutions
          </p>
          <p className="date">Enero 2024 - Octubre 2024</p>
          <ul className="list-task">
            <li>Gestión de una aplicación web ERP.</li>
            <li>Desarrollo de API REST con el framework Laravel.</li>
            <li>Desarrollo Web FrontEnd con el framework Vue JS.</li>
            <li>
              Implementación de actualizaciones y optimización de estructura del
              sistema.
            </li>
            <li>Administración y gestión de base de datos.</li>
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
        <div className="experience-information">
          <p className="puesto">Desarrollador de Software - Layla E.I.R.L</p>
          <p className="date">Enero 2022 - Diciembre 2024</p>
          <ul className="list-task">
            <li>
              Implementación de software para la gestión de inventario y
              comprobantes electrónicos.
            </li>
            <li>Gestión y soporte de servicios basados en la nube.</li>
            <li>
              Implementación de un servidor de archivos utilizando Samba en un
              servidor Linux.
            </li>
            <li>Soporte técnico del hardware</li>
            <li>Administración y gestión de base de datos.</li>
          </ul>
        </div>
      </div>
    </>
  );
}
