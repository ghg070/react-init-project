import { Suspense } from 'react';
import { renderRoutes, matchRoutes } from 'react-router-config';
import { ThemeProvider } from 'styled-components';
import Loading from '@/components/Loading';
import Header from '@/layout/Header';
import Wrapper from '@/layout/Wrapper';
import router from '@/router';
import useTheme from '@/hooks/useTheme';

export default function App({ location }) {
    const [, , currentTheme] = useTheme();
    const matchRoute = matchRoutes(router, location.pathname);
    const isDisableHeader = !!matchRoute.find(
        ({ route }) => route?.meta?.noHeader
    );
    return (
        <Suspense fallback={<Loading />}>
            <ThemeProvider theme={currentTheme}>
                {isDisableHeader ? null : <Header />}
                <Wrapper>
                    <div className="App">{renderRoutes(router)}</div>
                </Wrapper>
            </ThemeProvider>
        </Suspense>
    );
}
