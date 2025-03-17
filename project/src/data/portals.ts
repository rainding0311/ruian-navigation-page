import { Portal } from '../types/portal';

export const portals: Portal[] = [
  {
    id: 'blog',
    title: 'Ruian's Blog',
    url: 'https://www.ruianding.com/blog',
    description: 'Ruian's Blog',
    icon: '🌐',
    category: 'Blog'
  },
  {
    id: 'grafana',
    title: 'Grafana',
    url: 'https://www.ruianding.com/grafana',
    description: 'Metrics visualization',
    icon: '📊',
    category: 'Monitoring'
  },
  {
    id: 'matomo',
    title: 'Matomo',
    url: 'https://www.ruianding.com/matomo',
    description: 'Website analytics',
    icon: '📈',
    category: 'Analytics'
  }
];
