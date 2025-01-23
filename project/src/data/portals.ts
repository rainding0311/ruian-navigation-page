import { Portal } from '../types/portal';

export const portals: Portal[] = [
  {
    id: 'grafana',
    title: 'Grafana',
    url: 'https://your-grafana-url.com',
    description: 'Advanced metrics visualization',
    icon: '📊',
    category: 'Monitoring'
  },
  {
    id: 'matomo',
    title: 'Matomo',
    url: 'https://your-matomo-url.com',
    description: 'Analytics command center',
    icon: '📈',
    category: 'Analytics'
  }
];