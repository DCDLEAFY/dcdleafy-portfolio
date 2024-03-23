import { PortfolioInformation } from "../../app/core/models/portfolio-information";


const dataWorkExperience: PortfolioInformation[] = [
    {
        title: '[Example Work Area]#1',
        description: 'This is an example description, this description has been describing things for millions of years. Hopefully i get to put something useful here.',
        imagePath: '',
        date: '01/01/2024'
    },
    {
        title: '[Example Work Area]#2',
        description: 'This is an example description, this description has been describing things for millions of years. Hopefully i get to put something useful here.',
        imagePath: '',
        date: '02/01/2024'
    },
    {
        title: '[Example Work Area]#3',
        description: 'This is an example description, this description has been describing things for millions of years. Hopefully i get to put something useful here.',
        imagePath: '',
        date: '03/01/2024'
    },
];

const dataProject: PortfolioInformation[] = [
    {
        title: '[Example Project]#1',
        description: 'This is an example description, this description has been describing things for millions of years. Hopefully i get to put something useful here.',
        imagePath: '',
        date: '01/01/2024'
    },
    {
        title: '[Example Project]#2',
        description: 'This is an example description, this description has been describing things for millions of years. Hopefully i get to put something useful here.',
        imagePath: '',
        date: '02/01/2024'
    },
    {
        title: '[Example Project]#3',
        description: 'This is an example description, this description has been describing things for millions of years. Hopefully i get to put something useful here.',
        imagePath: '',
        date: '03/01/2024'
    },
];

export const aboutSkillsSection: string[] = [
    'C#',
    '.Net [6-8]',
    'Javascript',
    'Typescript',
    'Golang',
    'Java',
    'Object-Relational-Mapping',
    'Angular',
    'Azure',
    'CICD-Pipelines',
    'Git'
];

export const fullData: PortfolioInformation[] = dataWorkExperience.concat(dataProject);