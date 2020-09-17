import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.a`
    color: black;
`;

type Props = {
    href?: string
    text: string
};

const Button: React.FC<Props> = ({
    href,
    text,
}) => {
    return <StyledButton href={href}>{text}</StyledButton>
};

export default Button;