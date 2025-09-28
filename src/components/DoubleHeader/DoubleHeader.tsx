import { useState } from 'react';
import { Anchor, Box, Burger, Container, Group, Title, Drawer, ScrollArea } from '@mantine/core'; // Добавлены Title, Drawer, ScrollArea
import { useDisclosure } from '@mantine/hooks';
import classes from './DoubleHeader.module.css';

const mainLinks = [
  { link: '#', label: 'Home' },
  { link: '#', label: 'Documentation' },
  { link: '#', label: 'Community' },
  { link: '#', label: 'Academy' },
  { link: '#', label: 'Forums' },
];

export function DoubleHeader() {
  const [opened, { toggle, close }] = useDisclosure(false); // Добавили close для Drawer
  const [active, setActive] = useState(0);

  const mainItems = mainLinks.map((item, index) => (
    <Anchor<'a'>
      href={item.link}
      key={item.label}
      className={classes.mainLink}
      data-active={index === active || undefined}
      onClick={(event) => {
        event.preventDefault();
        setActive(index);
        close(); // Закрываем Drawer при выборе пункта меню на мобильных
      }}
    >
      {item.label}
    </Anchor>
  ));

  const mobileItems = mainLinks.map((item, index) => (
    <Anchor<'a'>
      href={item.link}
      key={item.label}
      className={classes.mobileLink} // Отдельный класс для мобильного меню, если нужны другие стили
      data-active={index === active || undefined}
      onClick={(event) => {
        event.preventDefault();
        setActive(index);
        close(); // Закрываем Drawer при выборе пункта меню
      }}
    >
      {item.label}
    </Anchor>
  ));

  return (
    <Box component="header" className={classes.header}>
      <Container className={classes.inner}>
        {/* Логотип */}
        <Group>
          <Burger
            opened={opened}
            onClick={toggle}
            className={classes.burger}
            size="sm"
            hiddenFrom="sm"
            aria-label="Toggle navigation"
          />
          <Title order={3} className={classes.logo}>
            Logo
          </Title>
        </Group>

        <Box className={classes.links} visibleFrom="sm">
          <Group gap="md" justify="flex-end" className={classes.mainLinks}>
            {mainItems}
          </Group>
        </Box>
      </Container>

      {/* Мобильное меню (Drawer) */}
      <Drawer
        opened={opened}
        onClose={close}
        size="70%" // Ширина Drawer на мобильных
        padding="md"
        position="left" // Открывается слева
        overlayProps={{ backgroundOpacity: 0.5, blur: 4 }}
        className={classes.drawer} // Добавим класс для возможных стилей Drawer
      >
        <ScrollArea> 
          <Group className={classes.mobileLinksGroup}>
            {mobileItems}
          </Group>
        </ScrollArea>
      </Drawer>
    </Box>
  );
}