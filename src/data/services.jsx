import React from 'react';
import { FiTrendingUp, FiShare2, FiMonitor, FiShoppingBag, FiPenTool, FiCast } from 'react-icons/fi';

export const services = [
  {
    n: '01',
    title: 'Meta Ads',
    copy: 'Targeted ad campaigns that put your business in front of the right local customers — strategically created, managed, and continuously optimized to generate more leads, calls, and sales.',
    icon: <FiTrendingUp />,
    result: 'More Leads',
    tags: ['Meta Ads', 'Lead Generation', 'Optimization'],
  },
  {
    n: '02',
    title: 'Social Media Management',
    copy: 'Consistent, on-brand content creation and management across Instagram and Facebook that keeps your business visible, builds trust, and stays top of mind with your audience.',
    icon: <FiShare2 />,
    result: 'Brand Visibility',
    tags: ['Instagram', 'Facebook', 'Content'],
  },
  {
    n: '03',
    title: 'Website Development',
    copy: 'Fast, responsive, and mobile-friendly websites designed to convert visitors into customers — giving your business the professional online presence it deserves.',
    icon: <FiMonitor />,
    result: 'High Conversion',
    tags: ['Web Design', 'Development', 'Responsive'],
  },
  {
    n: '04',
    title: 'E-Commerce Store Development',
    copy: 'We build fast, secure online stores that make it easy for customers to browse, order, and pay — turning your products into a 24/7 sales channel, not just another website.',
    icon: <FiShoppingBag />,
    result: '24/7 Sales',
    tags: ['E-Commerce', 'Payments', 'Online Store'],
  },
  {
    n: '05',
    title: 'Brand Identity & Design',
    copy: 'Professional logos, visual identity systems, and creative brand assets that make your business memorable, recognizable, and instantly trustworthy.',
    icon: <FiPenTool />,
    result: 'Memorable Brand',
    tags: ['Logo', 'Identity', 'Branding'],
  },
  {
    n: '06',
    title: 'DOOH Advertising',
    copy: 'Reach your ideal customers through premium digital billboards and display screens where they already are — delivering high-impact visibility that traditional posters simply can’t match.',
    icon: <FiCast />,
    result: 'Maximum Reach',
    tags: ['Digital Screens', 'Outdoor', 'Awareness'],
  },
];