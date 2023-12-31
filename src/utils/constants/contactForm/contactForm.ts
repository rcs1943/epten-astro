export const CONTACT_FORM_INPUT_PROPS = {
    USER_NAMES: {
        name: "names",
        placeholder: "Nombres*",
        dataTitle: "El campo es requerido.",
        dataRegex: "Ingrese un valor válido.",
        dataPattern: "^[A-Za-zÑñÁáÉéÍíÓóÚúÜüs]+$",
        maxLength: 50,
    },
    USER_SURNAMES: {
        name: "surnames",
        placeholder: "Apellidos*",
        dataTitle: "El campo es requerido.",
        dataRegex: "Ingrese un valor válido.",
        dataPattern: "^[A-Za-zÑñÁáÉéÍíÓóÚúÜüs]+$",
        maxLength: 50,
    },
    USER_EMAIL: {
        name: "email",
        placeholder: "Correo electrónico*",
        dataTitle: "El campo es requerido.",
        dataRegex: "Ingrese un email válido.",
        dataPattern: "^(\\w+[/./-]?){1,}@[a-z]+[/.]\\w{2,}$",
        maxLength: 50,
    },
    USER_PHONE: {
        name: "phone",
        placeholder: "Teléfono / Celular*",
        dataTitle: "El campo es requerido.",
        dataRegex: "Debe ingresar 9 dígitos.",
        dataPattern: "^[0-9]{9}$",
        maxLength: 9,
    },
    COURSES_DROPDOWN: {
        name: "courses",
        dataTitle: "El campo es requerido",
        defaultValue: "Curso de interés",
        optionList: [
            {
                label: "Cursos del Mes",
                options: ["Excel Básico", "Python Fundamentals"],
            },
            {
                label: "Tecnologías de la Información",
                options: [
                    "Programador Web FrontEnd",
                    "Programador BackEnd",
                    "Programador de Aplicaciones de Escritorio",
                    "Fundamentos y Algoritmos de Programación",
                    "Base de Datos con Access",
                    "Administrador de Sistemas Operativos de Servidores",
                ],
            },
            {
                label: "Diseño",
                options: [
                    "Diseñador de Retoque Fotográfico",
                    "Diseñador Gráfico Publicitario",
                ],
            },
            {
                label: "Negocios",
                options: ["Excel para la producción comercial"],
            },
            {
                label: "Ofimática",
                options: ["Ofimática para escolares"],
            },
        ],
    },
};
