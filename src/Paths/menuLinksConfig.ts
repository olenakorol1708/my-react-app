import paths from './paths';

type MenuLinkConfig = {
  path: string;
  name: string;
};

const menuLinksConfigs: MenuLinkConfig[] = [
  { path: paths.HOME, name: 'Home' },
  { path: paths.CASE, name: 'Case Studies' },
  { path: paths.PRICE, name: 'Pricing' },
  { path: paths.ABOUT, name: 'About' },
  { path: paths.BLOG, name: 'Blog' },
];

export default menuLinksConfigs;
