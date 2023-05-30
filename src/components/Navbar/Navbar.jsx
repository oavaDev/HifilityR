import React from 'react';
import { Navbar, Text, Spacer, Button } from '@nextui-org/react';
import Icon from '../Icon';
const Nav = ({ islogged }) => {
  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/';
  };

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
