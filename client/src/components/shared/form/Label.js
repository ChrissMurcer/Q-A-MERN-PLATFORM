import styled from 'styled-components/macro';
import { normalFont } from '../helpers';

const Label = styled.label.attrs({
  allcaps: true
})`
  ${normalFont};
  
  display: block;
  color: ${props => props.theme.normalText};
`;

export default Label;
