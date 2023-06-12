import React, { useEffect } from 'react';
import { Navbar, Text, Spacer, Button, Loading } from '@nextui-org/react';
import Icon from '../Icon';
import { useSelector } from 'react-redux';
import { itemsInCart } from '../../store/slices/orderSlice';
const Nav = ({ islogged, location }) => {
  const list = useSelector(itemsInCart);
  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/';
  };
  const [loaded, setLoaded] = React.useState(false);
  useEffect(() => {
    setLoaded(true);
  }, []);
  return (
    <Navbar isBordered variant='sticky' maxWidth={'fluid'}>
      <Navbar.Brand>
        <Spacer y={1} />
        <Icon />
        <Spacer y={1} />
        <Text b color='inherit' hideIn='xs'>
          Hifility
        </Text>
      </Navbar.Brand>
      {!islogged ? (
        <Navbar.Content as={'span'}>
          <Navbar.Link color='inherit' href='/login'>
            Inicia sesión
          </Navbar.Link>
          <Navbar.Item as={'span'}>
            <Navbar.Link color='inherit' href='/register'>
              Registro
            </Navbar.Link>
          </Navbar.Item>
        </Navbar.Content>
      ) : (
        <Navbar.Content as={'span'}>
          {location === '/cart' && list[0] && (
            <Navbar.Item hideIn={'xs'} as={'span'}>
                <Button color='success'>
                  {loaded ? (
                    'Agregar todo a la orden'
                  ) : (
                    <Loading color='currentColor' size='sm' />
                  )}
                </Button>
            </Navbar.Item>
          )}

          <Navbar.Item as={'span'}>
            <Button
              onClick={handleLogout}
              style={{ backgroundColor: '#171717', fontStyle: 'bold' }}
            >
              Cerrar sesión
            </Button>
          </Navbar.Item>
        </Navbar.Content>
      )}
    </Navbar>
  );
};

export default Nav;
