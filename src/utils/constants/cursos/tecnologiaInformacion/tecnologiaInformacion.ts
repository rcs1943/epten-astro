import type { CourseCategoryCardProps } from "../../../../components/CourseCategoryList/CourseCategoryList.astro";
import type { JumbotronProps } from "../../../../components/Jumbotron/Jumbotron.astro";

export const TI_CATEGORY_JUMBOTRON: JumbotronProps = {
    topTitle: "TECNOLOGÍAS DE",
    bottomTitle: "LA INFORMACIÓN",
    imagePath: "/images/cursos/ti/HERO_IMG.jpg",
};
export const TI_COURSES_CARDS: CourseCategoryCardProps[] = [
    {
        title: "Administración de Sistemas Operativos de Servidores",
        linkPath: "./tecnologias-de-la-informacion/administracion-de-sistemas-operativos-de-servidores",
        imgPath: "/images/cursos/ti/COURSE_ADMIN_OS_SERV.jpg",
    },
    {
        title: "Base de Datos con Access",
        linkPath: "./base-de-datos-con-access",
        imgPath: "/images/cursos/ti/COURSE_DB_ACCESS.jpg",
    },
    {
        title: "Fundamentos y Algoritmos de Programación",
        linkPath: "./fundamentos-y-algoritmos-de-programacion",
        imgPath: "/images/cursos/ti/COURSE_ALGORITHMS.jpg",
    },
    {
        title: "Programación de Aplicaciones de Escritorio",
        linkPath: "./programacion-de-aplicaciones-de-escritorio",
        imgPath: "/images/cursos/ti/COURSE_DESK.jpg",
    },
    {
        title: "Programación BackEnd",
        linkPath: "./programacion-backend",
        imgPath: "/images/cursos/ti/COURSE_BACKEND.jpg",
    },
    {
        title: "Programación Web FrontEnd",
        linkPath: "./programacion-web-frontend",
        imgPath: "/images/cursos/ti/COURSE_FRONTEND.jpg",
    },
];

export const TI_CATEGORY_NAV_LINKS: string[] = ["TECNOLOGÍAS DE LA INFORMACIÓN"];
