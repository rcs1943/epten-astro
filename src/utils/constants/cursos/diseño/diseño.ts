import type { CourseCategoryCardProps } from "../../../../components/CourseCategoryList/CourseCategoryList.astro";
import type { JumbotronProps } from "../../../../components/Jumbotron/Jumbotron.astro";

export const DESIGN_CATEGORY_JUMBOTRON: JumbotronProps = {
    bottomTitle: "DISEÑO",
    imagePath: "/images/cursos/diseño/HERO_IMG.jpg",
};
export const DESIGN_COURSES_CARDS: CourseCategoryCardProps[] = [
    {
        title: "Diseño Gráfico Publicitario",
        linkPath: "./diseño/diseño-grafico-publicitario",
        imgPath: "/images/cursos/diseño/COURSE_GRAPHIC_DESIGN.jpg",
    },
    {
        title: "Diseño de Retoque Fotográfico",
        linkPath: "./diseño/diseño-de-retoque-fotografico",
        imgPath: "/images/cursos/diseño/COURSE_PHOTO_RETOUCH.jpg",
    },
];

export const DESIGN_CATEGORY_NAV_LINKS: string[] = ["DISEÑO"];
