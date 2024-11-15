import media1 from '@/images/Homepage/work/designBlockAll/media1.webp';
import media2 from '@/images/Homepage/work/designBlockAll/media2.webp';
import media3 from '@/images/Homepage/work/designBlockAll/media3.webp';
import media4 from '@/images/Homepage/work/designBlockAll/media4.webp';
import media5 from '@/images/Homepage/work/uiDesignBlock/1.webp';
import media6 from '@/images/Homepage/work/uiDesignBlock/2.webp';
import media7 from '@/images/Homepage/work/uiDesignBlock/3.webp';
import media8 from '@/images/Homepage/work/uiDesignBlock/4.webp';
import media9 from '@/images/Homepage/work/uiDesignBlock/5.webp';
import media10 from '@/images/Homepage/work/uiDesignBlock/6.webp';
import media11 from '@/images/Homepage/work/uiDesignBlock/7.webp';
import media12 from '@/images/Homepage/work/uiDesignBlock/8.webp';
import media13 from '@/images/Homepage/work/uiDesignBlock/9.webp';
import media14 from '@/images/Homepage/work/uiDesignBlock/10.webp';
import media15 from '@/images/Homepage/work/uiDesignBlock/11.webp';
import media16 from '@/images/Homepage/work/uiDesignBlock/12.webp';
import media17 from '@/images/Homepage/work/uiDesignBlock/13.webp';
import media18 from '@/images/Homepage/work/uiDesignBlock/14.webp';
import media19 from '@/images/Homepage/work/brandingBlock/1.webp';
import media20 from '@/images/Homepage/work/brandingBlock/2.webp';
import media21 from '@/images/Homepage/work/brandingBlock/3.webp';
import media22 from '@/images/Homepage/work/brandingBlock/4.webp';
import media23 from '@/images/Homepage/work/brandingBlock/5.webp';
import media24 from '@/images/Homepage/work/brandingBlock/6.webp';
import media25 from '@/images/Homepage/work/brandingBlock/7.webp';
import media26 from '@/images/Homepage/work/brandingBlock/8.webp';
import media27 from '@/images/Homepage/work/graphicBlock/1.webp';
import media28 from '@/images/Homepage/work/graphicBlock/2.webp';
import media29 from '@/images/Homepage/work/graphicBlock/3.webp';
import media30 from '@/images/Homepage/work/graphicBlock/4.webp';
import media31 from '@/images/Homepage/work/graphicBlock/5.webp';
import media32 from '@/images/Homepage/work/graphicBlock/6.webp';
import media33 from '@/images/Homepage/work/graphicBlock/7.webp';
import media34 from '@/images/Homepage/work/graphicBlock/8.webp';
import media35 from '@/images/Homepage/work/graphicBlock/9.webp';
import media36 from '@/images/Homepage/work/graphicBlock/10.webp';
import media37 from '@/images/Homepage/work/graphicBlock/11.webp';
import media38 from '@/images/Homepage/work/graphicBlock/12.webp';
import media39 from '@/images/Homepage/work/graphicBlock/13.webp';
import media40 from '@/images/Homepage/work/graphicBlock/14.webp';
import media41 from '@/images/Homepage/work/graphicBlock/15.webp';
import media42 from '@/images/Homepage/work/graphicBlock/16.webp';
import media43 from '@/images/Homepage/work/graphicBlock/17.webp';
import media44 from '@/images/Homepage/work/graphicBlock/18.webp';
import media45 from '@/images/Homepage/work/graphicBlock/19.webp';
import media46 from '@/images/Homepage/work/graphicBlock/20.webp';
import media47 from '@/images/Homepage/work/graphicBlock/21.webp';
import media48 from '@/images/Homepage/work/graphicBlock/22.webp';
import media49 from '@/images/Homepage/work/caseStudies/1.webp';
import media50 from '@/images/Homepage/work/caseStudies/2.webp';
import media51 from '@/images/Homepage/work/caseStudies/3.webp';
import media52 from '@/images/Homepage/work/caseStudies/4.webp';
import video1 from '../../video/HomePage/3Dmodelling/1.mp4';
import video2 from '../../video/HomePage/3Dmodelling/2.mp4';
import video3 from '../../video/HomePage/production/1.mp4';
import video4 from '../../video/HomePage/production/2.mp4';
import video5 from '../../video/HomePage/production/3.mp4';
import video6 from '../../video/HomePage/production/4.mp4';
import video7 from '../../video/HomePage/production/5.mp4';
import video8 from '../../video/HomePage/production/6.mp4';


export interface WorkData {
  id: number;
  imageUrl?: string;
  videoUrl?: string;
  category: string;
  categoryTitle?: string;

  subTitle?: string;
  sectionTitle?: string;
  text?: string;
  hasText: boolean;
}

const workData: WorkData[] = [
  {
    id: 1,
    imageUrl: media1,
    category: "Designs",
    categoryTitle: "All",
    subTitle: "",
    sectionTitle: "",
    text: "",
    hasText: false,
  },
  {
    id: 2,
    imageUrl: media2,
    category: "Designs",
    categoryTitle: "All",
    subTitle: "",
    sectionTitle: "",
    text: "",
    hasText: false,
  },
  {
    id: 3,
    imageUrl: media3,
    category: "Designs",
    categoryTitle: "All",
    subTitle: "",
    sectionTitle: "",
    text: "",
    hasText: false,
  },
  {
    id: 4,
    imageUrl: media4,
    category: "Designs",
    categoryTitle: "All",
    subTitle: "",
    sectionTitle: "",
    text: "",
    hasText: false,
  },
  {
    id: 5,
    imageUrl: media5,
    category: "Designs",
    categoryTitle: "UI/UX design",
    subTitle: "",
    sectionTitle: "",
    text: "",
    hasText: false,
  }, {
    id: 6,
    imageUrl: media6,
    category: "Designs",
    categoryTitle: "UI/UX design",
    subTitle: "",
    sectionTitle: "",
    text: "",
    hasText: false,
  },
  {
    id: 7,
    imageUrl: media7,
    category: "Designs",
    categoryTitle: "UI/UX design",
    subTitle: "",
    sectionTitle: "",
    text: "",
    hasText: false,
  },
  {
    id: 8,
    imageUrl: media8,
    category: "Designs",
    categoryTitle: "UI/UX design",
    subTitle: "",
    sectionTitle: "",
    text: "",
    hasText: false,
  },
  {
    id: 9,
    imageUrl: media9,
    category: "Designs",
    categoryTitle: "UI/UX design",
    subTitle: "",
    sectionTitle: "",
    text: "",
    hasText: false,
  },
  {
    id: 10,
    imageUrl: media10,
    category: "Designs",
    categoryTitle: "UI/UX design",
    subTitle: "",
    sectionTitle: "",
    text: "",
    hasText: false,
  },
  {
    id: 11,
    imageUrl: media11,
    category: "Designs",
    categoryTitle: "UI/UX design",

    subTitle: "",
    sectionTitle: "",
    text: "",
    hasText: false,
  },
  {
    id: 12,
    imageUrl: media12,
    category: "Designs",
    categoryTitle: "UI/UX design",

    subTitle: "",
    sectionTitle: "",
    text: "",
    hasText: false,
  },
  {
    id: 13,
    imageUrl: media13,
    category: "Designs",
    categoryTitle: "UI/UX design",
    subTitle: "",
    sectionTitle: "",
    text: "",
    hasText: false,
  },
  {
    id: 14,
    imageUrl: media14,
    category: "Designs",
    categoryTitle: "UI/UX design",
    subTitle: "",
    sectionTitle: "",
    text: "",
    hasText: false,
  },
  {
    id: 15,
    imageUrl: media15,
    category: "Designs",
    categoryTitle: "UI/UX design",
    subTitle: "",
    sectionTitle: "",
    text: "",
    hasText: false,
  },
  {
    id: 16,
    imageUrl: media16,
    category: "Designs",
    categoryTitle: "UI/UX design",
    subTitle: "",
    sectionTitle: "",
    text: "",
    hasText: false,
  },
  {
    id: 17,
    imageUrl: media17,
    category: "Designs",
    categoryTitle: "UI/UX design",
    subTitle: "",
    sectionTitle: "",
    text: "",
    hasText: false,
  },
  {
    id: 18,
    imageUrl: media18,
    category: "Designs",
    categoryTitle: "UI/UX design",
    subTitle: "",
    sectionTitle: "",
    text: "",
    hasText: false,
  },
  {
    id: 19,
    imageUrl: media19,
    category: "Designs",
    categoryTitle: "Branding",
    subTitle: "",
    sectionTitle: "",
    text: "",
    hasText: false,
  },
  {
    id: 20,
    imageUrl: media20,
    category: "Designs",
    categoryTitle: "Branding",
    subTitle: "",
    sectionTitle: "",
    text: "",
    hasText: false,
  },
  {
    id: 21,
    imageUrl: media21,
    category: "Designs",
    categoryTitle: "Branding",
    subTitle: "",
    sectionTitle: "",
    text: "",
    hasText: false,
  },
  {
    id: 22,
    imageUrl: media22,
    category: "Designs",
    categoryTitle: "Branding",
    subTitle: "",
    sectionTitle: "",
    text: "",
    hasText: false,
  },
  {
    id: 23,
    imageUrl: media23,
    category: "Designs",
    categoryTitle: "Branding",
    subTitle: "",
    sectionTitle: "",
    text: "",
    hasText: false,
  },
  {
    id: 24,
    imageUrl: media24,
    category: "Designs",
    categoryTitle: "Branding",
    subTitle: "",
    sectionTitle: "",
    text: "",
    hasText: false,
  },
  {
    id: 25,
    imageUrl: media25,
    category: "Designs",
    categoryTitle: "Branding",
    subTitle: "",
    sectionTitle: "",
    text: "",
    hasText: false,
  },
  {
    id: 26,
    imageUrl: media26,
    category: "Designs",
    categoryTitle: "Branding",
    subTitle: "",
    sectionTitle: "",
    text: "",
    hasText: false,
  },
  {
    id: 27,
    imageUrl: media27,
    category: "Designs",
    categoryTitle: "Graphic design",
    subTitle: "",
    sectionTitle: "",
    text: "",
    hasText: false,
  },
  {
    id: 28,
    imageUrl: media28,
    category: "Designs",
    categoryTitle: "Graphic design",
    subTitle: "",
    sectionTitle: "",
    text: "",
    hasText: false,
  },
  {
    id: 29,
    imageUrl: media29,
    category: "Designs",
    categoryTitle: "Graphic design",
    subTitle: "",
    sectionTitle: "",
    text: "",
    hasText: false,
  },
  {
    id: 30,
    imageUrl: media30,
    category: "Designs",
    categoryTitle: "Graphic design",
    subTitle: "",
    sectionTitle: "",
    text: "",
    hasText: false,
  },
  {
    id: 31,
    imageUrl: media31,
    category: "Designs",
    subTitle: "",
    sectionTitle: "",
    text: "",
    hasText: false,
  },
  {
    id: 32,
    imageUrl: media32,
    category: "Designs",
    categoryTitle: "Graphic design",
    subTitle: "",
    sectionTitle: "",
    text: "",
    hasText: false,
  },
  {
    id: 33,
    imageUrl: media33,
    category: "Designs",
    categoryTitle: "Graphic design",
    subTitle: "",
    sectionTitle: "",
    text: "",
    hasText: false,
  },
  {
    id: 34,
    imageUrl: media34,
    category: "Designs",
    categoryTitle: "Graphic design",
    subTitle: "",
    sectionTitle: "",
    text: "",
    hasText: false,
  },
  {
    id: 35,
    imageUrl: media35,
    category: "Designs",
    categoryTitle: "Graphic design",

    subTitle: "",
    sectionTitle: "",
    text: "",
    hasText: false,
  },
  {
    id: 36,
    imageUrl: media36,
    category: "Designs",
    categoryTitle: "Graphic design",
    subTitle: "",
    sectionTitle: "",
    text: "",
    hasText: false,
  },
  {
    id: 37,
    imageUrl: media37,
    category: "Designs",
    categoryTitle: "Graphic design",
    subTitle: "",
    sectionTitle: "",
    text: "",
    hasText: false,
  },
  {
    id: 38,
    imageUrl: media38,
    category: "Designs",
    categoryTitle: "Graphic design",
    subTitle: "",
    sectionTitle: "",
    text: "",
    hasText: false,
  },
  {
    id: 39,
    imageUrl: media39,
    category: "Designs",
    categoryTitle: "Graphic design",
    subTitle: "",
    sectionTitle: "",
    text: "",
    hasText: false,
  },
  {
    id: 40,
    imageUrl: media40,
    category: "Designs",
    categoryTitle: "Graphic design",
    subTitle: "",
    sectionTitle: "",
    text: "",
    hasText: false,
  },
  {
    id: 41,
    imageUrl: media41,
    category: "Designs",
    categoryTitle: "Graphic design",
    subTitle: "",
    sectionTitle: "",
    text: "",
    hasText: false,
  },
  {
    id: 42,
    imageUrl: media42,
    category: "Designs",
    categoryTitle: "Graphic design",
    subTitle: "",
    sectionTitle: "",
    text: "",
    hasText: false,
  },
  {
    id: 43,
    imageUrl: media43,
    category: "Designs",
    categoryTitle: "Graphic design",
    subTitle: "",
    sectionTitle: "",
    text: "",
    hasText: false,
  },
  {
    id: 44,
    imageUrl: media44,
    category: "Designs",
    categoryTitle: "Graphic design",
    subTitle: "",
    sectionTitle: "",
    text: "",
    hasText: false,
  },
  {
    id: 45,
    imageUrl: media45,
    category: "Designs",
    categoryTitle: "Graphic design",
    subTitle: "",
    sectionTitle: "",
    text: "",
    hasText: false,
  },
  {
    id: 46,
    imageUrl: media46,
    category: "Designs",
    categoryTitle: "Graphic design",
    subTitle: "",
    sectionTitle: "",
    text: "",
    hasText: false,
  },
  {
    id: 47,
    imageUrl: media47,
    category: "Designs",
    categoryTitle: "Graphic design",
    subTitle: "",
    sectionTitle: "",
    text: "",
    hasText: false,
  },
  {
    id: 48,
    imageUrl: media48,
    category: "Designs",
    categoryTitle: "Graphic design",
    subTitle: "",
    sectionTitle: "",
    text: "",
    hasText: false,
  },
  {
    id: 49,
    imageUrl: media49,
    category: "Case studies",
    categoryTitle: "",
    subTitle: "Sport",
    sectionTitle: "Lazor Sports",
    text: "XRii Media revitalised Lazor Sports' brand strategy, emphasising innovation and excellence. We created a dynamic brand highlighting Lazor Sports' dedication to entertainment, gaming, sports, and technology.",
    hasText: true,
  },
  {
    id: 50,
    imageUrl: media50,
    category: "Case studies",
    categoryTitle: "",
    subTitle: "AR DEVELOPMENT",
    sectionTitle: "UnRealXR",
    text: "XRii Media helped UnRealXR stand out in the crowded AR market by creating a futuristic brand that redefined how sports enthusiasts engage with augmented reality, enhancing engagement and positioning them as tech innovators.",
    hasText: true,
  },
  {
    id: 51,
    imageUrl: media51,
    category: "Case studies",
    categoryTitle: "",
    subTitle: "Marketing",
    sectionTitle: "City Precinct",
    text: "XRii Media helped UnRealXR stand out in the crowded AR market by creating a futuristic brand that redefined how sports enthusiasts engage with augmented reality, enhancing engagement and positioning them as tech innovators.",
    hasText: true,
  },
  {
    id: 52,
    imageUrl: media52,
    category: "Case studies",
    categoryTitle: "",
    subTitle: "Media & Intertainment",
    sectionTitle: "SportsPro Madrid",
    text: "XRii Media helped UnRealXR stand out in the crowded AR market by creating a futuristic brand that redefined how sports enthusiasts engage with augmented reality, enhancing engagement and positioning them as tech innovators.",
    hasText: true,
  },
  {
    id: 53,
    imageUrl: video1,
    category: "Designs",
    categoryTitle: "3D modelling",
    subTitle: "",
    sectionTitle: "",
    text: "",
    hasText: false,
  },
  {
    id: 54,
    imageUrl: video2,
    category: "Designs",
    categoryTitle: "3D modelling",
    subTitle: "",
    sectionTitle: "",
    text: "",
    hasText: false,
  },
  {
    id: 55,
    imageUrl: video3,
    category: "Designs",
    categoryTitle: "Video production",
    subTitle: "",
    sectionTitle: "",
    text: "",
    hasText: false,
  },
  {
    id: 56,
    imageUrl: video4,
    category: "Designs",
    categoryTitle: "Video production",
    subTitle: "",
    sectionTitle: "",
    text: "",
    hasText: false,
  },
  {
    id: 57,
    imageUrl: video5,
    category: "Designs",
    categoryTitle: "Video production",
    subTitle: "",
    sectionTitle: "",
    text: "",
    hasText: false,
  },
  {
    id: 58,
    imageUrl: video6,
    category: "Designs",
    categoryTitle: "Video production",
    subTitle: "",
    sectionTitle: "",
    text: "",
    hasText: false,
  },
  {
    id: 59,
    imageUrl: video7,
    category: "Designs",
    categoryTitle: "Video production",
    subTitle: "",
    sectionTitle: "",
    text: "",
    hasText: false,
  },
  {
    id: 60,
    imageUrl: video8,
    category: "Designs",
    categoryTitle: "Video production",
    subTitle: "",
    sectionTitle: "",
    text: "",
    hasText: false,
  },
 

]


export default workData;