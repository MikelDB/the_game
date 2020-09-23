import React from 'react';
import styled from 'styled-components';

import { Link, Button } from '../../atoms';

const StyledFooter = styled.footer`
    margin-top: 16px;
    display: flex;
    flex-direction: column;
`;

const Links = styled.div`
    width: 200px;
    display: flex;
    justify-content: space-between;
`;

const Actions = styled.div`
    display: flex;
    justify-content: center;
`;

type Props = {
    text?: string
};

const Footer: React.FC<Props> = ({
    text,
}) => {
    return (
        <StyledFooter>
            <Links>
                <Link href="www.google.com" text="Artizarra" />
                <Link href="www.google.com" text="Github" />
            </Links>
            <Actions>
                <Button href="www.google.com" text="Dame algo" />
            </Actions>
        </StyledFooter>
    );
};

export default Footer;