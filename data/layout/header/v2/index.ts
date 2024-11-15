import { HeaderProps } from '@/src/layout/header/desktop/v2';
import { menuItemsProps } from '../menu';

export const headerData: HeaderProps = {
  contactInfo: {
    phone: '+92-341-4264969',
    mail: 'contact@encodix.org',
    address: 'Office # 7, Mazzanine Floor, Mediacom, Faisalabad',
  },
  ctaBtn: {
    href: '/contact',
    label: 'Get  A Quote',
    openNewTab: false,
  },
  menuItems: menuItemsProps,
};
