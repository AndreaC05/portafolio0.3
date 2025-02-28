import { Image } from "primereact/image";
import certicade from "../assets/images/UC-4223c419-3b88-4b37-93c5-4cf008e37bf8.jpg";
import "../styles/courses.css";

export default function Courses() {
  return (
    <>
      <div className="courses-container">
        <div className="title-courses flex justify-content-start align-items-center">
          <p className="mr-4">Courses </p>
          <svg
            fill="#fff"
            width="20"
            height="20"
            viewBox="0 0 1920 1920"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1750.21 0v1468.235h-225.882v338.824h169.412V1920H451.387c-82.447 0-161.506-36.141-214.701-99.388-43.934-51.953-67.652-116.33-67.652-182.965V282.353C169.034 126.494 295.528 0 451.387 0H1750.21Zm-338.823 1468.235H463.81c-89.223 0-166.136 59.86-179.576 140.047-1.242 9.036-2.259 18.07-2.259 27.106v2.26c0 40.658 13.553 77.928 40.659 109.552 32.753 38.4 79.059 59.859 128.753 59.859h960v-112.941H409.599v-112.942h1001.788v-112.94Zm225.882-1355.294H451.387c-92.725 0-169.412 75.67-169.412 169.412v1132.8c50.824-37.27 113.958-59.859 181.835-59.859h1173.46V112.941ZM1354.882 903.53v112.942H564.294V903.529h790.588Zm56.47-564.705v451.764H507.825V338.824h903.529Zm-112.94 112.94H620.765v225.883h677.647V451.765Z"
              fillRule="evenodd"
            />
          </svg>
        </div>
        <div className="certificades">
          <p>Curso de JavaScript – Global Mentoring (Udemy) </p>
          <div className="certificade-container">
            <div className="image-certificade">
                <Image
                    src={certicade}
                    width="100%"
                    preview
                >
                </Image>
            </div>
            <p className="certificate_link">
              <a href="https://udemy-certificate.s3.amazonaws.com/pdf/UC-4223c419-3b88-4b37-93c5-4cf008e37bf8.pdf">
                Mostrar credencial <span><i className="pi pi-external-link"></i></span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
