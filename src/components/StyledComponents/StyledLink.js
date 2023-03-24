import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    text-decoration-line: underline;
    color: #FFFFFF;
    :hover {
        cursor: pointer;
    }
`