interface DataItem {
  id: number;
  number: string;
  title: string;
  text: string;
}

const data: DataItem[] = [
  {
    id: 1,
    number: '01',
    title: 'UI/UX design',
    text: 'Crafting intuitive and visually appealing designs that ensure a seamless and engaging user experience across all platforms.',
  },
  {
    id: 2,
    number: '02',
    title: 'Branding',
    text: 'Developing unique brand identities that resonate with target audiences and enhance brand recognition and loyalty.',
  },
  {
    id: 3,
    number: '03',
    title: 'Graphic design',
    text: 'Creating visually stunning graphics tailored to enhance messaging, brand identity, and user engagement.',
  },
  {
    id: 4,
    number: '04',
    title: '3D modelling',
    text: 'Building 3D models to provide interactive and innovative experiences for users.',
  },
  {
    id: 5,
    number: '05',
    title: 'Video production',
    text: 'Producing high-quality video content that tells compelling stories and promotes brand visibility and engagement.',
  },
];

export default data;
