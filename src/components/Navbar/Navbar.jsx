import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import { Navbar, Button, Text, Spacer } from '@nextui-org/react';
import Icon from '../Icon';
const Nav = () => {
  const navbar = [
    { name: 'Home', path: '/' },
    { name: 'Productos', path: '/products' },
  ];
  return (
    <Navbar isBordered variant='sticky'>
      <Navbar.Brand>
        <Navbar.Toggle aria-label='toggle navigation' hideIn='md' />
        <Spacer y={1} />
        <Icon />
        <Spacer y={1} />
        <Text b color='inherit' hideIn='xs'>
          Hifility
        </Text>
      </Navbar.Brand>
      <Navbar.Content enableCursorHighlight hideIn='xs' variant='underline'>
        {navbar.map((item, i) => {
          return (
            <Navbar.Link key={i} href={item.path}>
              {item.name}
            </Navbar.Link>
          );
        })}
      </Navbar.Content>
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
      <Navbar.Collapse>
        {navbar.map((item, index) => (
          <Navbar.CollapseItem key={item}>
            <Link
              color='black'
              css={{
                minWidth: '100%',
              }}
              href={item.path}
            >
              {item.name}
            </Link>
          </Navbar.CollapseItem>
        ))}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Nav;
