import { MenuItem } from './menu.model';

export const MENU: MenuItem[] = [
  {
    label: 'Main',
    isTitle: true,
  },
  {
    label: 'Dashboard',
    icon: 'home',
    link: '/dashboard',
  },
  {
    label: 'Configuración',
    isTitle: true,
  },
  {
    label: 'Parametros',
    icon: 'settings',
    link: 'configuracion/parametros',
  },
  {
    label: 'Intercambio',
    isTitle: true,
  },
  {
    label: 'Menudeo',
    icon: 'aperture',
    link: '/operaciones/menudeo',
  },
  {
    label: 'Intervencion',
    icon: 'airplay',
    link: '/operaciones/intervencion',
  },
  {
    label: 'Mesa de Cambio',
    icon: 'archive',
    link: '/operaciones/mesa',
  },
  {
    label: 'Oficina Comercial',
    isTitle: true,
  },
  {
    label: 'Inventario',
    icon: 'unlock',
    link: '/comercial/inventario',
  },
  {
    label: 'Oficina',
    icon: 'briefcase',
    link: '/comercial/oficina',
  },
  {
    label: 'Canal',
    isTitle: true,
  },
  {
    label: 'Inventario',
    icon: 'unlock',
    link: '/canal/inventario',
  },
  {
    label: 'Politica',
    icon: 'briefcase',
    link: '/canal/politica',
  },
  {
    label: 'Utilidades',
    isTitle: true,
  },
  {
    label: 'Procesos operativos',
    icon: 'terminal',
    link: '/utilidad/procesos-operativo',
  }
];
