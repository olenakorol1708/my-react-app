interface Steps{
    id:number;
    blockNumber:string;
    blockTitle:string;
    blockDescription:string;
}

const steps:Steps[]=[
    {
    id:1,
    blockNumber:'01',
    blockTitle:'Choose your plan',
    blockDescription:'Select the service package that best fits your needs and budget.',
},
{
    id:2,
    blockNumber:'02',
    blockTitle:'Wrike access',
    blockDescription:'Gain access to our project management tool for streamlined communication and updates.',
},
{
    id:3,
    blockNumber:'03',
    blockTitle:'Get your designs',
    blockDescription:'Receive your customised designs tailored to meet your specifications.',
},
{
    id:4,
    blockNumber:'04',
    blockTitle:'Pause and resume',
    blockDescription:'Flexibility to pause your plan and resume it at your convenience.',
},


]

export default steps;