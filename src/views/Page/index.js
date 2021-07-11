import { renderRoutes } from 'react-router-config';
import { StyledPageWrapper } from './style';

export default function Page({ route }) {
    return (
        <div>
            <div>Page</div>
            <StyledPageWrapper pl={20}>
                {renderRoutes(route.routes)}
            </StyledPageWrapper>
        </div>
    );
}
