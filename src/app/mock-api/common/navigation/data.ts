/* eslint-disable */
import { FuseNavigationItem } from '@fuse/components/navigation';

export const defaultNavigation: FuseNavigationItem[] = [
    {
        id: 'apps.gestion-creditos',
        title: 'Solicitudes',
        type: 'collapsable',
        icon: 'attach_money',
        children: [
            {
                id: 'apps.gestion.solicitudes',
                title: 'Crédito',
                type: 'basic',
                link: '/pages/gestion-creditos/solicitudes',
            },
        ],
    },
    {
        id: 'apps.gestion-creditos',
        title: 'Créditos',
        type: 'collapsable',
        icon: 'request_quote',
        children: [
            {
                id: 'apps.gestion.creditos',
                title: 'Mi crédito',
                type: 'basic',
                link: '/pages/gestion-creditos/creditos',
            },
        ],
    },
   /* {
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
    },*/
   /*{
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
    },*/



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
