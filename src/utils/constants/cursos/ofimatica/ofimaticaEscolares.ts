import type { CourseCyclesProps } from "../../../../components/Course/CourseCycles.astro";
import type { CourseObjectivesContentType } from "../../../../components/Course/CourseObjectives.astro";
import type { JumbotronProps } from "../../../../components/Jumbotron/Jumbotron.astro";

export const OFFICE_SCHOOL_JUMBOTRON: JumbotronProps = {
    topTitle: "Ofimática para",
    bottomTitle: "Escolares",
    imagePath: "/images/cursos/ofimatica/ofimatica-escolares/HERO_IMG.jpg",
};

export const OFFICE_SCHOOL_NAV_LINKS: string[] = [
    "OFIMÁTICA",
    "OFIMÁTICA PARA ESCOLARES",
];

export const OFFICE_SCHOOL_DESCRIPTION = {
    courseName: "OFIMÁTICA PARA ESCOLARES",
    courseDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in nisl in ligula condimentum pulvinar. Praesent mattis, ipsum eu ullamcorper suscipit, massa dui lacinia massa, ac bibendum lorem dolor et mauris. Curabitur laoreet mollis arcu, a interdum turpis sodales sed. Ut vel egestas tortor",
};

export const OFFICE_SCHOOL_OBJECTIVES_CONTENT: CourseObjectivesContentType =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in nisl in ligula condimentum pulvinar. Praesent mattis, ipsum eu ullamcorper suscipit, massa dui lacinia massa, ac bibendum lorem dolor et mauris. Curabitur laoreet mollis arcu, a interdum turpis sodales sed. Ut vel egestas tortor";

export const OFFICE_SCHOOL_SCHEDULES = {
    daytimeSchedule: "7:00 a.m. - 10:45 a.m.",
    afternoonSchedule: "15:00 p.m. - 18:45 p.m.",
    nightSchedule: "19:00 p.m. - 22:45 p.m.",
};

export const OFFICE_SCHOOL_CYCLES: CourseCyclesProps[] = [
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