import type { CourseCyclesProps } from "../../../../components/Course/CourseCycles.astro";
import type { CourseObjectivesContentType } from "../../../../components/Course/CourseObjectives.astro";
import type { JumbotronProps } from "../../../../components/Jumbotron/Jumbotron.astro";

export const ACCESS_BD_JUMBOTRON: JumbotronProps = {
    topTitle: "Base de Datos con",
    bottomTitle: "Access",
    imagePath: "/images/cursos/ti/access/HERO_IMG.jpg",
};

export const ACCESS_BD_NAV_LINKS: string[] = [
    "TECNOLOGÍAS DE LA INFORMACIÓN",
    "BASE DE DATOS CON ACCESS",
];

export const ACCESS_BD_DESCRIPTION = {
    courseName: "BASE DE DATOS CON ACCESS",
    courseDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in nisl in ligula condimentum pulvinar. Praesent mattis, ipsum eu ullamcorper suscipit, massa dui lacinia massa, ac bibendum lorem dolor et mauris. Curabitur laoreet mollis arcu, a interdum turpis sodales sed. Ut vel egestas tortor",
};

export const ACCESS_BD_OBJECTIVES_CONTENT: CourseObjectivesContentType =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in nisl in ligula condimentum pulvinar. Praesent mattis, ipsum eu ullamcorper suscipit, massa dui lacinia massa, ac bibendum lorem dolor et mauris. Curabitur laoreet mollis arcu, a interdum turpis sodales sed. Ut vel egestas tortor";

export const ACCESS_BD_SCHEDULES = {
    daytimeSchedule: "7:00 a.m. - 10:45 a.m.",
    afternoonSchedule: "15:00 p.m. - 18:45 p.m.",
    nightSchedule: "19:00 p.m. - 22:45 p.m.",
};

export const ACCESS_BD_CYCLES: CourseCyclesProps[] = [
    {
        number: 1,
        courses: [
            "MATEMÁTICA BÁSICA",
            "REALIDAD NACIONAL REGIONAL Y UNIVERSITARIA",
            "INTRODUCCIÓN A LA INGENIERÍA DE SISTEMAS",
            "METODOLOGÍA DEL APRENDIZAJE",
        ],
    },
    {
        number: 2,
        courses: [
            "ÁLGEBRA",
            "FÍSICA",
            "DEFENSA NACIONAL, DESASTRES NATURALES Y EDUCACION AMBIENTAL",
            "REDACCION Y TECNICAS DE COMUNICACIÓN",
        ],
    },
    {
        number: 3,
        courses: [
            "FISICA APLICADA A LA INGENERÍA DE SISTEMAS",
            "CÁLCULO INTEGRAL APLICADO A LA INGENIERIA DE SISTEMAS",
            "ESTADÍSTICA APLICADA",
            "ALGORITMOS Y ESTRUCTURA DE DATOS I",
        ],
    },
    {
        number: 4,
        courses: [
            "ARQUITECTURA DE COMPUTADORES",
            "ELECTRÓNICA DIGITAL II",
            "PROGRAMACIÓN ORIENTADA A OBJETOS I",
            "LENGUAJE DE PROGRAMACIÓN II",
        ],
    },
];
