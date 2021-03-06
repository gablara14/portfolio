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
    },
    {
      title: 'Curriculo',
      description: 'Veja meu CV',
      link: '/cv'
    },
]

export const HomeSEO: SEO = {
    title: 'Gabriel Lara',
    description: 'JavaScript/Typescript Full-Stack Developer'
}



///////////////////////////////////////////////
///////// CV ///////////////////////////////////
//////////////////////////////////////////////

export const CVCards: CardProps[] = [
    // {
    //   title: 'Experiência Profissional',
    //   description: '',
    //   link: '/cv/experience'
    // },
    {
      title: 'Cursos e Formação',
      description: '',
      link: '/cv/courses'
    }
    // ,
    // {
    //   title: 'Habilidades e Idiomas',
    //   description: '',
    //   link: '/cv/skills'
    // }
]




export const ExperienceSEO: SEO = {
    title: 'Experiência Profissional',
    description: `
    Fundou e administrou uma empresa de 4 funcionários no ramo de comércio
eletrônico e, em poucos meses, gerou mais de R$1.5 milhões de faturamento,
com uma média de 20.000 acessos diários (mais de 10.000 pedidos).
    `
}

export const CoursesSEO: SEO = {
    title: 'Cursos e Formação',
    description: "Cursos e Formação"
}


export const CourseCards: CardProps[] = [
    {
      title: 'Quantitative Trading',
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
        title: 'Modern React with Redux',
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
