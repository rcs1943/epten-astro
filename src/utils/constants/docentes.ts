import type { TeacherCardProps } from "../../components/Docentes/TeacherCard.astro";
import type { JumbotronProps } from "../../components/Jumbotron/Jumbotron.astro";

export const TEACHER_JUMBOTRON: JumbotronProps = {
    topTitle: "NUESTROS",
    bottomTitle: "DOCENTES",
    imagePath: "/images/docentes/HERO_IMG.jpg",
};

export const TEACHER_INFO: TeacherCardProps[] = [
    {
        name: "Julio Alexander Ccari Guerra",
        academics: "Microsoft Office Master | Microsoft Certified Trainer | Microsoft Innovative Educator (MIE) Expert | Especialista de Microsoft Office: Asociado de Excel (Aplicaciones de Microsoft 365)",
        about: "Un profesional en Computación e Informática innovador con certificaciones oficiales y experiencia en el rubro empresarial aplicando herramientas informáticas para resolver diversos casos, también amplia experiencia dando capacitaciones en diferentes instituciones privadas y públicas.",
        photoPath: "/images/docentes/JULIO_ALEXANDER_CCARI_GUERRA.jpg"
    },
    {
        name: "Julio Cesar Stein Huamaní",
        academics: "Egresado Maestría en Ciencias de la Educación | Bach. en Ciencias de la Educación | Bach. en Ingeniería Industrial | Prof. Técnico en Computación e Informática | Certificado internacional por Microsoft",
        about: "Cuento con más de 28 años en la instrucción de jóvenes y adultos en el campo de sistemas y negocios, administrador de instituciones educativas en Lima y provincias.",
        photoPath: "/images/docentes/JULIO_CESAR_STEIN_HUAMANI.jpg"
    },
    {
        name: "Italo Paul Yaranga Vite",
        academics: "Ingeniero de Sistemas e Informática | Magister en Ingeniería de Sistemas con mención en Tecnologías de la Información | Candidato a Doctor en Administración",
        about: "Profesional con amplia experiencia en desarrollo de sistemas y docencia en Sistemas, en importantes instituciones como: UNIVERSIDAD NACIONAL DE INGENIERÍA FIIS-UNI - UNIVERSIDAD TECNOLÓGICA DEL PERU - CENTRO DE EXTENSION Y PROYECCIÓN SOCIAL CEPS UNI - ISIL - CERTUS",
        photoPath: "/images/docentes/ITALO_PAUL_YARANGA_VITE.jpg"
    },
]