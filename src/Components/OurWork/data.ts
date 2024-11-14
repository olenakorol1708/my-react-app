export interface InfoBlock{
    id:number;
    imageUrl:string;
    category:string;
    title:string;
    description:string;
    subTitle?:string;
    sectionTitle?:string;
    text?:string;
    hasText:boolean;
}

const infoBlock:InfoBlock[] = [
    // { id:number;
    //     imageUrl:string;
    //     category:string;
    //     title:string;
    //     description:string;
    //     subTitle?:string;
    //     sectionTitle?:string;
    //     text?:string;
    //     hasText:boolean;}
]

export default infoBlock;