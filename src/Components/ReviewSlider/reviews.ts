import photo1 from '@/images/Homepage/reviews/img1.svg';
import photo2 from '@/images/Homepage/reviews/img2.webp';
import photo3 from '@/images/Homepage/reviews/img3.webp';
import photo4 from '@/images/Homepage/reviews/img4.webp';
import photo5 from '@/images/Homepage/reviews/img5.webp';
import star from '@/images/Homepage/reviews/star.svg';

interface Reviews{
    id: number;
    personName:string;
    personTitle: string;
    imageUrl: string;
    text:string;
    rate:number;
    starUrl:string;
}



const reviews:Reviews[] = [{
    id: 1,
    personName:'Atif Hussain',
    personTitle: 'Co-Founder at Kinetik',
    imageUrl: photo1,
    text:'Thanks for their significant knowledge in UI/UX design. The vendor has provided valuable feedback by always being readily available for communication. Moreover, they have a satisfying project management process that makes their process smooth and efficient.',
    rate:5.0,
    starUrl:star,
},
{
    id: 2,
    personName:'Ola Bobssain',
    personTitle: 'Co-Founder at Kinetik',
    imageUrl: photo2,
    text:'Thanks for their significant knowledge in UI/UX design. The vendor has provided valuable feedback by always being readily available for communication. Moreover, they have a satisfying project management process that makes their process smooth and efficient.',
    rate:5.0,
    starUrl:star,
},
{
    id: 3,
    personName:'Mike Smith',
    personTitle: 'Co-Founder at Kinetik',
    imageUrl: photo3,
    text:'Thanks for their significant knowledge in UI/UX design. The vendor has provided valuable feedback by always being readily available for communication. Moreover, they have a satisfying project management process that makes their process smooth and efficient.',
    rate:5.0,
    starUrl:star,
},
{
    id: 4,
    personName:'Atif Hugo',
    personTitle: 'Co-Founder at Kinetik',
    imageUrl: photo4,
    text:'Thanks for their significant knowledge in UI/UX design. The vendor has provided valuable feedback by always being readily available for communication. Moreover, they have a satisfying project management process that makes their process smooth and efficient.',
    rate:5.0,
    starUrl:star,
},
{
    id: 5,
    personName:'Avon Kane',
    personTitle: 'Co-Founder at Kinetik',
    imageUrl: photo5,
    text:'Thanks for their significant knowledge in UI/UX design. The vendor has provided valuable feedback by always being readily available for communication. Moreover, they have a satisfying project management process that makes their process smooth and efficient.',
    rate:5.0,
    starUrl:star,
},


]
export default reviews;