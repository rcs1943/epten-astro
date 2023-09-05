import type { BenefitProps } from "../../../components/Cursos/BenefitList/types";
import type { InfoSchemaProps } from "../../../components/InfoSchema/InfoSchema.astro";
import type { JumbotronProps } from "../../../components/Jumbotron/Jumbotron.astro";

export const COURSES_JUMBOTRON: JumbotronProps = {
    topTitle: "NUESTROS",
    bottomTitle: "CURSOS",
    imagePath: "/images/cursos/COURSES_HERO.jpg",
};
export const BENEFIT_CARDS: BenefitProps[] = [
    {
        imgPath: "/images/cursos/ICON_BENEFIT.jpg",
        title: "Beneficio",
        content: "Many of our programs can be completed in as few as 40 weeks.",
    },
    {
        imgPath: "/images/cursos/ICON_BENEFIT.jpg",
        title: "Beneficio",
        content: "Many of our programs can be completed in as few as 40 weeks.",
    },
    {
        imgPath: "/images/cursos/ICON_BENEFIT.jpg",
        title: "Beneficio",
        content: "Many of our programs can be completed in as few as 40 weeks.",
    },
    {
        imgPath: "/images/cursos/ICON_BENEFIT.jpg",
        title: "Beneficio",
        content: "Many of our programs can be completed in as few as 40 weeks.",
    },
];
export const INSCRIPTION_INFO: InfoSchemaProps = {
    topTitle: "INSCRÍBETE",
    bottomTitle: "AQUÍ",
    content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean mollis, tortor non eleifend rhoncus, quam elit condimentum tortor, eget posuere dui neque sed lacus. Donec dolor ipsum, viverra et dolor quis, laoreet semper eros. Integer cursus sollicitudin consectetur. Nullam et elementum quam.",
    button: {
        linkPath: "./inscripcion",
        content: "Inscríbete",
    },
};
