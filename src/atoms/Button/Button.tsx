import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.a`
    color: #deffde;
    background-color: #505b50;
    font-size: 16px;
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