import smile1 from '@/images/Homepage/tasksCovered/smile1.svg';
import smile2 from '@/images/Homepage/tasksCovered/smileDown2.svg';
import smile3 from '@/images/Homepage/tasksCovered/smile 3.svg';

export interface ImageArr {
    id: number;
     imageTitle: string;
    imageUrl: string;
}

const imageArr : ImageArr[] = [{
    id: 1,
    imageTitle: 'smile',
    imageUrl:smile1,
    
},
{
    id: 2,
    imageTitle: 'smile',
    imageUrl:smile2
    
},
{
    id: 3,
    imageTitle: 'smile',
    imageUrl:smile3
    
},]

export default imageArr;