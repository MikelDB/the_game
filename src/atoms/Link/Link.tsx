import React from 'react';
import styled from 'styled-components';

const StyledLink = styled.a`
    color: red;
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