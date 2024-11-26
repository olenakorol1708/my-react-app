import icon1 from '@/images/Homepage/tasksCovered/icon1.svg';
import icon2 from '@/images/Homepage/tasksCovered/icon2.svg';
import icon3 from '@/images/Homepage/tasksCovered/icon3.svg';
import icon4 from '@/images/Homepage/tasksCovered/icon4.svg';
import icon5 from '@/images/Homepage/tasksCovered/icon5.svg';
import icon6 from '@/images/Homepage/tasksCovered/icon6.svg';
import icon7 from '@/images/Homepage/tasksCovered/icon7.svg';
import icon8 from '@/images/Homepage/tasksCovered/icon8.svg';



export interface IconArr {
    id: number;
    iconTitle: string;
    imageUrl: string;
}

const iconArr: IconArr[] = [{
    id: 1,
    iconTitle: 'Website design',
    imageUrl:icon1
    
},
{
    id: 2,
    iconTitle: 'Video tutorials',
    imageUrl:icon2

},
{
    id: 3,
    iconTitle: 'Icon design',
    imageUrl:icon3

},
{
    id: 4,
    iconTitle: 'Presentations',
    imageUrl:icon4

},
{
    id: 5,
    iconTitle: 'Mobile app design',
    imageUrl:icon5

},
{
    id: 6,
    iconTitle: 'Graphics',
    imageUrl:icon6

},
{
    id: 7,
    iconTitle: 'Visual identity',
    imageUrl:icon7
 
},
{
    id: 8,
    iconTitle: 'Landing page design',
    imageUrl:icon8

},
]
export default iconArr;