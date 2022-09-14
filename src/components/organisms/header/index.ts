import { HeaderContent, HeaderAction } from '../../molecules';
import { Header as HeaderComponent } from './Header';

export const Header = Object.assign(HeaderComponent, {
  Content: HeaderContent,
  Action: HeaderAction,
});
