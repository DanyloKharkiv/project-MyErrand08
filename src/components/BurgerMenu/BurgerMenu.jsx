import url from '../../images/sprite.svg';
import { Button, Svg } from './BurgerMenu.Styled';

const BurgerMenu = ({ openSideBar }) => {
  return (
      <div>
      <Button onClick={openSideBar}>
        <Svg width={24} height={24}>
          <use xlinkHref={`${url}#icon-menu-01`} />
        </Svg>
      </Button>
    </div>
  );
};

export default BurgerMenu;