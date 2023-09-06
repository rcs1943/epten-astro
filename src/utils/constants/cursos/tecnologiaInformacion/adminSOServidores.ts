import type { CourseObjectivesContentType } from "../../../../components/Course/CourseObjectives.astro";
import type { JumbotronProps } from "../../../../components/Jumbotron/Jumbotron.astro";

export const ADMIN_SO_JUMBOTRON: JumbotronProps = {
    topTitle: "Administración de SO",
    bottomTitle: "de Servidores",
    imagePath: "/images/cursos/ti/servidores/HERO_IMG.jpg",
};

export const ADMIN_SO_NAV_LINKS: string[] = [
    "TECNOLOGÍAS DE LA INFORMACIÓN",
    "ADMINISTRACIÓN DE SISTEMAS OPERATIVOS DE SERVIDORES",
];

export const ADMIN_SO_DESCRIPTION = {
    courseName: "ADMINISTRACIÓN DE SISTEMAS OPERATIVOS DE SERVIDORES",
    courseDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in nisl in ligula condimentum pulvinar. Praesent mattis, ipsum eu ullamcorper suscipit, massa dui lacinia massa, ac bibendum lorem dolor et mauris. Curabitur laoreet mollis arcu, a interdum turpis sodales sed. Ut vel egestas tortor",
};

export const ADMIN_SO_OBJECTIVES_CONTENT: CourseObjectivesContentType =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in nisl in ligula condimentum pulvinar. Praesent mattis, ipsum eu ullamcorper suscipit, massa dui lacinia massa, ac bibendum lorem dolor et mauris. Curabitur laoreet mollis arcu, a interdum turpis sodales sed. Ut vel egestas tortor";

export const ADMIN_SO_SCHEDULES = {
    daytimeSchedule: "7:00 a.m. - 10:45 a.m.",
    afternoonSchedule: "15:00 p.m. - 18:45 p.m.",
    nightSchedule: "19:00 p.m. - 22:45 p.m.",
};
