import { StyledLink } from './style';
export default function Header() {
    return (
        <>
            <h4>Header</h4>
            <div className="links">
                <StyledLink to="/home">Home</StyledLink>
                <StyledLink to="/page">Page</StyledLink>
            </div>
        </>
    );
}
