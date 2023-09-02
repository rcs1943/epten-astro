import type { InfoSchemaProps } from "../../components/InfoSchema/InfoSchema.astro";
import type { PresentationBox } from "../../components/PresentationBox/PresentationBox.astro";

export const PROMO_COURSES = [
    {
        courseName: "EXCEL BÁSICO",
        schedule: "Miércoles y viernes de 07:00PM a 10:00PM",
        startDate: "08/03/2023",
        imagePath: "/images/promo/PROMO_EXCEL.jpg",
    },
    {
        courseName: "PYTHON FUNDAMENTALS",
        schedule: "Lunes y jueves de 07:00PM a 10:00PM",
        startDate: "08/03/2023",
        imagePath: "/images/promo/PROMO_PYTHON.jpg",
    },
];

export const CATEGORY_CARDS = [
    {
        title: "Tecnologías de la información",
        linkPath: "./cursos/tecnologias-de-la-informacion",
        imgPath: "/images/cursos/CATEGORY_IT.jpg",
    },
    {
        title: "Diseño",
        linkPath: "./cursos/diseño",
        imgPath: "/images/cursos/CATEGORY_DESIGN.jpg",
    },
    {
        title: "Negocios",
        linkPath: "./cursos/negocios",
        imgPath: "/images/cursos/CATEGORY_BUSINESS.jpg",
    },
    {
        title: "Ofimática",
        linkPath: "./cursos/ofimatica",
        imgPath: "/images/cursos/CATEGORY_OFIMATICA.jpg",
    },
];

export const PRESENTATION_BOX: PresentationBox = {
    title: "SOBRE EPTEN",
    content:
        "Empresa formada por Profesionales en Pedagogía, Sistemas, Industriales y Profesionales Técnicos con una amplia trayectoria de más de 20 años en el campo comercial-industrial-servicios. Creada para fomentar la tecnología y los negocios a fin de transformar la vida de las personas y la de su comunidad.",
    cardList: [
        {
            iconPath: "/images/nosotros/ICON_EXPERIENCE.svg",
        },
        {
            iconPath: "/images/nosotros/ICON_EXPERIENCE.svg",
        },
        {
            iconPath: "/images/nosotros/ICON_EXPERIENCE.svg",
        },
        {
            iconPath: "/images/nosotros/ICON_EXPERIENCE.svg",
        },
    ],
    button: {
        linkPath: "./nosotros",
        content: "Conoce más aquí"
    }
}

export const NEXT_STEP_INFO: InfoSchemaProps = {
    topTitle: "¿PREPARADO PARA DAR",
    bottomTitle: "EL SIGUIENTE PASO?",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean mollis, tortor non eleifend rhoncus, quam elit condimentum tortor, eget posuere dui neque sed lacus. Donec dolor ipsum, viverra et dolor quis, laoreet semper eros. Integer cursus sollicitudin consectetur. Nullam et elementum quam.",
    button: {
        linkPath: "./inscripcion",
        content: "Inscríbete"
    }
}