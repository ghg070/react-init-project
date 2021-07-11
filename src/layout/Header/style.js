import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
    &:not(:first-child) {
        margin-left: 10px;
    }
`;
