import { CardProps } from './components/Card'

// export interface Course {
//     name: string;
//     url: string;
//     hours: number;
    
// }

interface SEO {
    title: string;
    description: string
}

///////////////////////////////////////////////
///////// HOME /////////////////////////////
//////////////////////////////////////////////

export const HomeCards: CardProps[] = [
    {
        title: 'Curriculo',
        description: 'Experiências profissionais, cursos, certificados e muito mais',
        link: '/cv'
    },
    {
      title: 'Github',
      description: 'Veja as minhas colaborações no Github',
      href: 'https://github.com/gablara14'
    },
    {
      title: 'Linkedin',
      description: 'Veja meu perfil profissional no Linkedin',
      href: 'https://www.linkedin.com/in/gabriel-lara-412b1613a'
    },
    {
      title: 'Medium',
      description: 'Veja as minhas publicações sobre AI e Machine Learning no Medium',
      href: 'https://medium.com/@gabrielrlara'
    }
]

export const HomeSEO: SEO = {
    title: 'Gabriel Lara',
    description: 'JavaScript/Typescript Full-Stack Developer'
}



///////////////////////////////////////////////
///////// CV ///////////////////////////////////
//////////////////////////////////////////////

export const CVCards: CardProps[] = [
    {
      title: 'Experiência Profissional',
      description: '',
      link: '/cv/experience'
    },
    {
      title: 'Cursos e Formação',
      description: '',
      link: '/cv/courses'
    },
    {
      title: 'Certificados',
      description: '',
      link: '/cv/certificates'
    },
    {
        title: 'Habilidades e Idiomas',
        description: '',
        link: '/cv/skills'
    }
]




export const ExperienceSEO: SEO = {
    title: 'Experiência Profissional',
    description: ''
}

export const CoursesSEO: SEO = {
    title: 'Cursos e Formação',
    description: "Cursando Administração - Universidade Presbiteriana Mackenzie, de agosto de 2018 a junho de 2022, São Paulo, SP"
}


export const CourseCards: CardProps[] = [
    {
      title: 'Quantitative Trading by Femisapien',
      description: '15 horas, Traders Club',
      href: 'https://tc.com.br/store/cursos/curso-de-quantitative-trading'
    },
    {
      title: 'Understanding TypeScript 2021 Edition',
      description: '15 horas, Udemy',
      href: 'https://www.udemy.com/courses/search/?src=ukw&q=Understanding+TypeScript+2021+Edition'
    },
    {
      title: 'Node with React: Fullstack Web Development',
      description: '26 horas, Udemy',
      href: 'https://www.udemy.com/course/node-with-react-fullstack-web-development'
    },
    {
        title: 'Modern React with Redux 2020',
        description: '52 horas, Udemy',
        href: 'https://www.udemy.com/course/react-redux'
    },
    {
        title: 'Python for Financial Analysis and Algorithmic Trading',
        description: '16 horas, Udemy',
        href: 'https://www.udemy.com/course/python-for-finance-and-trading-algorithms'
    },
    {
        title: 'Python for data Science and Machine Learning Bootcamp',
        description: '25 horas, Udemy',
        href: 'https://www.udemy.com/course/python-for-data-science-and-machine-learning-bootcamp'
    },
    {
        title: 'Método Cosmos com Pedro Albuquerque',
        description: '10 horas, TradersClub',
        href: 'https://tc.com.br/store/cursos/metodo-cosmos'
    },
    {
        title: 'Marketing de exportação',
        description: '12 horas, Instituto Mauá de Tecnologia',
        href: ''
    },
    {
        title: 'Criando uma empresa',
        description: '12 horas, Instituto Mauá de Tecnologia',
        href: ''
    },
    {
        title: 'GraphQL with React: The Complete Developers Guide',
        description: '13 horas, Udemy',
        href: 'https://www.udemy.com/course/graphql-with-react-course'
    },
    {
        title: 'Ultimate AWS Certified Developer Associate 2020',
        description: '29 horas (Em andamento), Udemy',
        href: 'https://www.udemy.com/course/aws-certified-developer-associate-dva-c01'
    }
]


export const SkilsSEO: SEO = {
    title: 'Habilidades e Idiomas',
    description: "Habilidades e Idiomas"
}



export const CertificatesCards: CardProps[] = [
    {
      title: 'CPA-20 - ANBIMA',
      description: 'Emitido em jan. de 2021 - Expira em jan. de 2024',
      href: 'https://www.anbima.com.br/pt_br/educar/certificacoes/cpa-20.htm'
    }

]

export const ExperienceCards: CardProps[] = [
    {
      title: 'Founder & CEO - GLA ECOMMERCE',
      description:  'Fundou e administrou uma empresa que gerou mais de R$1.5 milhões de faturamento em poucos meses.'
    },
    {
        title: 'Autônomo - Jeunesse Global',
        description:  'Treinou e liderou uma equipe que alcançou 1100 pessoas.'
    }
]

export const SkillsCards: CardProps[] = [
    {
      title: 'Soft Skills',
      description:'',
      link: '/cv/skills/soft'
    },
    {
        title: 'Hard Skills',
        description:'',
        link: '/cv/skills/hard'
    },
    {
        title: 'Idiomas',
        description:'',
        link: '/cv/skills/languages'
    },
]

export const LanguageCards: CardProps[] = [
    {
        title: 'Português',
        description: 'Nativo/Fluente'
    },
    {
        title: 'Inglês',
        description: 'Fluente'
    },
    {
        title: 'Espanhol',
        description: 'Intermediário'
    }
]

export const LanguageSEO: SEO = {
    title: 'Idiomas',
    description: ''
}

export const SoftSkillsSEO: SEO = {
    title: 'Soft Skills',
    description: ''
}
export const HardSkillsSEO: SEO = {
    title: 'Hard Skills',
    description: ''
}



export const SoftSkillsCards: CardProps[] = [
    {
        title: 'Pró-atividade',
        description: ''
    },
    {
        title: 'Oratória',
        description: ''
    },
    {
        title: 'Liderança',
        description: ''
    },
    {
        title: 'Resiliência',
        description: ''
    },
    {
        title: 'Criatividade',
        description: ''
    },
    {
        title: 'Trabalho em Equipe',
        description: ''
    }
] 

export const HardSkillsCards: CardProps[] = [
    {
        title: 'Microsoft Office Excel, PowerPoint & Word',
        description: ''
    },
    {
        title: 'Facebook ads',
        description: ''
    },
    {
        title: 'HTML & CSS',
        description: ''
    },
    {
        title: 'Javascript',
        description: ''
    },
    {
        title: 'React JS',
        description: ''
    },
    {
        title: 'React Native',
        description: ''
    },
    {
        title: 'NodeJS',
        description: ''
    },
    {
        title: 'MySQL',
        description: ''
    },
    {
        title: 'MongoDB',
        description: ''
    },
    {
        title: 'Machine Learning',
        description: ''
    },
    {
        title: 'Ciência de daados',
        description: ''
    },
    {
        title: 'Machine Learning',
        description: ''
    },
    {
        title: 'AWS',
        description: ''
    }
] 