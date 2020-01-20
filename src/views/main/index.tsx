import Loadable from 'react-loadable'
import Loading  from '../navigation/Loading'

const Main = Loadable({
    loader: () => import('./Main'),
    loading: Loading
});

export const routes = [
    {
        component: Main,
        exact: true,
        name: 'Main',
        path: '/requests/add'
    }
];
