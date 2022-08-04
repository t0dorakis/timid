import styled from 'styled-components'

import { mediaQueries } from "../styles/queries";

const HeaderLayout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 3rem 10rem;

  ${mediaQueries.medium} {
    padding: 2rem 5rem;
  }

  ${mediaQueries.small} {
    padding: 1.5rem 2rem;
  }

  a {
    font-size: 1.2rem;
    font-weight: 400;
    color: ${(props) => props.theme.textPrimary};
  }
`;

export default HeaderLayout
