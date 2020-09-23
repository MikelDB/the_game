import React from 'react';
import styled from 'styled-components';

const StyledLink = styled.a`
    color: #505b50;
    font-size: 16px;
`;

type Props = {
    href?: string
    text: string
};

const Link: React.FC<Props> = ({
    href,
    text,
}) => {
    return <StyledLink href={href}>{text}</StyledLink>
};

export default Link;