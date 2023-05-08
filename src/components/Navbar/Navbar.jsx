import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Text, Spacer } from '@nextui-org/react';
import Icon from '../Icon';
const Nav = () => {
  const navbar = [
    { name: 'Home', path: '/' },
    { name: 'Productos', path: '/products' },
  ];

  return (
    <Navbar isBordered variant='sticky' maxWidth={'fluid'}>
      <Navbar.Brand>
        <Navbar.Toggle aria-label='toggle navigation' showIn={'sm'} />
        <Spacer y={1} />
        <Icon />
        <Spacer y={1} />
        <Text b color='inherit' hideIn='xs'>
          Hifility
        </Text>
      </Navbar.Brand>
      <Navbar.Content>
        <Navbar.Link color='inherit' href='/login'>
          Inicia sesión
        </Navbar.Link>
        <Navbar.Item>
          <Navbar.Link color='inherit' href='/register'>
            Registro
          </Navbar.Link>
        </Navbar.Item>
      </Navbar.Content>
      <Navbar.Collapse style={{ zIndex: '40' }}>
        {navbar.map((item, index) => (
          <Navbar.CollapseItem key={index}>
            <Link style={{ color: 'black' }} color='inherit' to={item.path}>
              {item.name}
            </Link>
          </Navbar.CollapseItem>
        ))}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Nav;
