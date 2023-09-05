import type { CourseCategoryCardProps } from "../../../../components/CourseCategoryList/CourseCategoryList.astro";
import type { JumbotronProps } from "../../../../components/Jumbotron/Jumbotron.astro";

export const BUSINESS_CATEGORY_JUMBOTRON: JumbotronProps = {
    bottomTitle: "NEGOCIOS",
    imagePath: "/images/cursos/negocios/HERO_IMG.jpg",
};
export const BUSINESS_COURSES_CARDS: CourseCategoryCardProps[] = [
    {
        title: "Excel Para la Producción Comercial",
        linkPath: "./negocios/excel-para-la-produccion-comercial",
        imgPath: "/images/cursos/negocios/COURSE_EXCEL_COMM_PROD.jpg",
    },
];

export const BUSINESS_CATEGORY_NAV_LINKS: string[] = ["NEGOCIOS"];
