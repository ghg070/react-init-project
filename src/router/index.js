import { lazy } from 'react';
import { Redirect } from 'react-router-dom';
function loadView(viewPath) {
    return lazy(() =>
        import(/* webpackChunkName: "view-[request]" */ `@/views/${viewPath}`)
    );
}

const routes = [
    {
        path: '/home',
        component: loadView('Home'),
    },
    {
        path: '/page',
        component: loadView('Page'),
        meta: {
            // noHeader: true,
        },
        routes: [
            {
                path: '/page/child',
                component: loadView('Page/PageChild'),
            },
            {
                path: '/page*',
                render: () => <Redirect to="/page/child" />,
            },
        ],
    },
    {
        path: '*',
        render: () => <Redirect to="/home" />,
    },
];

export default routes;
