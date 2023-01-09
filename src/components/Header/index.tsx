import React from 'react';

import { Container, BackIcon, ProfileInfo} from './styles';

const Header: React.FC = () => {
  return (
    <Container>
            <button>
                <BackIcon />
            </button>

            <ProfileInfo>
                <strong>Vitor Markis</strong>
                <span>34 Tweets</span>
            </ProfileInfo>
    </Container>
  );
}

export default Header;