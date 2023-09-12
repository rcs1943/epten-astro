import type { InfoSchemaProps } from "../../components/InfoSchema/InfoSchema.astro";
import type { JumbotronProps } from "../../components/Jumbotron/Jumbotron.astro";
import type { Value } from "../../components/Nosotros/ValueList/types";
import type { PresentationBoxProps } from "../../components/PresentationBox/PresentationBox.astro";

export const ABOUT_US_JUMBOTRON: JumbotronProps = {
    topTitle: "SOBRE",
    bottomTitle: "EPTEN",
    imagePath: "/images/nosotros/ABOUTUS_HERO.jpg",
};
export const PRESENTATION_BOX: PresentationBoxProps = {
    content:
        "Empresa formada por Profesionales en Pedagogía, Sistemas, Industriales y Profesionales Técnicos con una amplia trayectoria de más de 20 años en el campo comercial-industrial-servicios. Creada para fomentar la tecnología y los negocios a fin de transformar la vida de las personas y la de su comunidad.",
    cardList: [
        {
            iconPath: "/images/nosotros/ICON_EXPERIENCE.svg",
            content: "a",
        },
        {
            iconPath: "/images/nosotros/ICON_EXPERIENCE.svg",
            content: "b",
        },
        {
            iconPath: "/images/nosotros/ICON_EXPERIENCE.svg",
            content: "c",
        },
        {
            iconPath: "/images/nosotros/ICON_EXPERIENCE.svg",
            content: "d",
        },
    ],
};

export const MISSION: InfoSchemaProps = {
    topTitle: "NUESTRA",
    bottomTitle: "MISIÓN",
    content:
        "Brindar una instrucción de calidad orientada al emprendimiento y poder satisfacer ampliamente las necesidades de aprendizaje de nuestros estudiantes.",
};

export const VISION: InfoSchemaProps = {
    topTitle: "NUESTRA",
    bottomTitle: "VISIÓN",
    content:
        "Ser una institución líder en educación, transformando la vida de sus estudiantes y la comunidad.",
};

export const VALUE_CARDS: Value[] = [
    {
        icon: "/images/nosotros/ICON_EDUCACION.svg",
        title: "Educación",
        content:
            "Creemos en la importancia de brindar una formación completa y de alta calidad a nuestros estudiantes, con el objetivo de prepararlos para enfrentar los retos del mercado laboral actual y futuro.",
    },
    {
        icon: "/images/nosotros/ICON_RESPONSABILIDAD.svg",
        title: "Responsabilidad Social",
        content:
            "No solo brindamos capacitación de alta calidad, sino que también trabajamos activamente para mejorar la vida de las personas y comunidades en las que operamos.",
    },
    {
        icon: "/images/nosotros/ICON_LIDERAZGO.svg",
        title: "Liderazgo",
        content:
            "Desarrollamos habilidades de liderazgo en nuestros estudiantes a través de una formación integral que les permita tomar decisiones acertadas, ser proactivos y motivar a otros a alcanzar objetivos comunes.",
    },
    {
        icon: "/images/nosotros/ICON_INNOVACION.svg",
        title: "Innovación",
        content:
            "Fomentamos un ambiente de creatividad e inspiración, donde nuestros estudiantes puedan desarrollar habilidades innovadoras y pensamiento crítico para ser líderes en sus campos y en la sociedad.",
    },
    {
        icon: "/images/nosotros/ICON_DISCIPLINA.svg",
        title: "Disciplina",
        content:
            "Creamos un ambiente de estudio ordenado y responsable en todos nuestros cursos y talleres, donde los participantes puedan desarrollar su disciplina y aplicarla en sus proyectos personales y profesionales.",
    },
    {
        icon: "/images/nosotros/ICON_RESPETO.svg",
        title: "Respeto",
        content:
            "Creemos que el respeto es la base de una comunicación sana y efectiva, y que permite construir relaciones sólidas y confiables.",
    },
];
