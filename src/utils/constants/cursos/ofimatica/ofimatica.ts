import type { CourseCategoryCardProps } from "../../../../components/CourseCategoryList/CourseCategoryList.astro";
import type { JumbotronProps } from "../../../../components/Jumbotron/Jumbotron.astro";

export const OFFICE_CATEGORY_JUMBOTRON: JumbotronProps = {
    bottomTitle: "OFIMÁTICA",
    imagePath: "/images/cursos/ofimatica/HERO_IMG.jpg",
};
export const OFFICE_COURSES_CARDS: CourseCategoryCardProps[] = [
    {
        title: "Ofimática Para Escolares",
        linkPath: "./ofimatica/ofimatica-para-escolares",
        imgPath: "/images/cursos/ofimatica/COURSE_OFFICE_SCHOOL.jpg",
    },
];

export const OFFICE_CATEGORY_NAV_LINKS: string[] = ["OFIMÁTICA"];
