/* eslint-disable */
import { FuseNavigationItem } from '@fuse/components/navigation';

export const defaultNavigation: FuseNavigationItem[] = [
    {
        id: 'apps.gestion-creditos',
        title: 'Gestión de créditos',
        type: 'collapsable',
        icon: 'attach_money',
        children: [
            {
                id: 'apps.gestion.solicitudes',
                title: 'Solicitudes',
                type: 'basic',
                link: '/pages/gestion-creditos/solicitudes',
            },
        ],
    },
    {
        id: 'apps.gestion-cobros',
        title: 'Gestión de cobros',
        type: 'collapsable',
        icon: 'request_quote',
        children: [
            {
                id: 'apps.gestion.cobros',
                title: 'Cobro trabajadores',
                type: 'basic',
                link: '/pages/gestion-cobros/cobros',
            },
        ],
    },
    {
        id: 'apps.gestion-empleados',
        title: 'Gestión de trabajadores',
        type: 'collapsable',
        icon: 'heroicons_outline:user-group',
        children: [
            {
                id: 'apps.gestion.empleados',
                title: 'Trabajadores',
                type: 'basic',
                link: '/pages/gestion-trabajadores/trabajadores',
            },
        ],
    },
   {
        id: 'apps.configuraciones',
        title: 'Configuraciones',
        type: 'collapsable',
        icon: 'settings',
        children: [
            {
                id: 'apps.empresas.maestras',
                title: 'Empresas maestras',
                type: 'basic',
                link: '/pages/configuracion/empresas-maestras',
            },
        ],
    },



];
export const compactNavigation: FuseNavigationItem[] = [
    {
        id   : 'example',
        title: 'Example',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/example'
    },
];
export const futuristicNavigation: FuseNavigationItem[] = [
    {
        id   : 'example',
        title: 'Example',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/example'
    }
];
export const horizontalNavigation: FuseNavigationItem[] = [
    {
        id   : 'example',
        title: 'Example',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/example'
    },
];
