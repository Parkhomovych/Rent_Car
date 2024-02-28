import styled from 'styled-components';
import { GrStatusGood } from 'react-icons/gr';

export const Box = styled.div`
  display: flex;
  justify-content: space-evenly;
  @media only screen and (max-width: 767.9px) {
    flex-direction: column;
    align-items: center;
    gap: 24px;
  }
`;
export const HomeImg = styled.img`
  max-width: 600px;
  @media only screen and (max-width: 1049.9px) {
    max-width: 450px;
  }
  @media only screen and (max-width: 767.9px) {
    max-width: 320px;
  }
`;
export const List = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  column-gap: 4px;
`;
export const SvgGood = styled(GrStatusGood)`
  color: ${p => p.theme.colors.blue};
`;
export const Text = styled.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 143%;
  color: ${p => p.theme.colors.black};
`;
