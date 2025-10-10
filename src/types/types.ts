import { SVGProps } from 'react';

export interface Event {
  id: number;
  imgSrc: string;
  title: string;
  description: string;
  date: string;
  time: string;
}

export type IconComponentProps = SVGProps<SVGSVGElement> & { 
    className?: string; 
}

export type SocialLink = {
  id: number;
  name: 'Facebook' | 'Twitter' | 'Instagram';
  href: string;
  icon: React.ReactElement<IconComponentProps>; 
};