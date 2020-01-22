
interface IRouteBase {
    name: string;
    sidebarVisible: boolean;
    icon?: string;
}

export interface IRoute extends IRouteBase {
    path: string; // href for app outside link
    // pageTitle?: string;
    pageTitleVisible: boolean;
    breadcrumbVisible: boolean;
    // permission: () => boolean;
}

export interface IRouteParent extends IRouteBase {
    breadcrumbVisible: boolean;
    children: Array<IRoute | IRouteParent>;
}

export type IAppRoute = Array<IRoute | IRouteParent>;

export class AppRoute {
    private static readonly routes: IAppRoute = [
        {
            path: '/dashboard',
            name: 'dashboard',
            sidebarVisible: true,
            pageTitleVisible: true,
            breadcrumbVisible: true,
            icon: 'fa fa-dashboard'
        },
        {
            name: 'tools',
            sidebarVisible: true,
            breadcrumbVisible: true,
            icon: 'fa fa-link',
            children: [
                {
                    path: '/blank',
                    name: 'blankkkkk',
                    sidebarVisible: true,
                    pageTitleVisible: true,
                    breadcrumbVisible: true,
                    icon: 'fa fa-home'
                },
                {
                    path: '/profile',
                    name: 'profileeeee',
                    sidebarVisible: true,
                    pageTitleVisible: true,
                    breadcrumbVisible: true,
                    icon: 'fa fa-picture-o'
                },
                {
                    name: 'inner1',
                    sidebarVisible: true,
                    breadcrumbVisible: true,
                    icon: 'fa fa-home',
                    children: []
                }
            ]
        }
    ];

    static getRoutes(): IAppRoute {
        return this.routes;
    }

    static getAllPathList(parentRoute: IRouteParent): Array<string> {
        const list: string[] = [];
        const getPath = (children: IRouteParent['children']) => {
            children.forEach(item => {
                if ((item as any).children) {
                    getPath((item as any).children);
                } else {
                    list.push((item as IRoute).path);
                }
            });
        };
        getPath(parentRoute.children);
        return list;
    }

}
