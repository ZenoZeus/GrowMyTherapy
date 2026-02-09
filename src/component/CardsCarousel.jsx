import { Carousel } from '@mantine/carousel';
import { Button, Paper, Text, Title, useMantineTheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import classes from './CardsCarousel.module.css';
import '@mantine/carousel/styles.css';
import office1 from "../public/office1.jpeg"
import office2 from "../public/office2.jpeg"
import office3 from "../public/office3.jpg"



function Card({ image, title, category }) {
  return (
    <Paper
      shadow="md"
      p="xl"
      radius="md"
      style={{ backgroundImage: `url(${image})` }}
      className={classes.card}
    >
      <div>
        <Text className={classes.category} size="xs">
          {category}
        </Text>
        <Title order={3} className={classes.title}>
          {title}
        </Title>
      </div>
    </Paper>
  );
}

const data = [
  {
    image: office1,
    title: 'Office View 1',
    category: 'Natural Light',
  },
  {
    image: office2,
    title: 'Office View 2',
    category: 'Soft Atmosphere',
  },
  {
   image: office3,
    title: 'Office View 3',
    category: 'Soft Atmosphere',
  },
  {
    image:
      'https://images.unsplash.com/photo-1507272931001-fc06c17e4f43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    title: 'Aurora in Norway experience',
    category: 'nature',
  },
];

export function CardsCarousel() {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const slides = data.map((item) => (
    <Carousel.Slide key={item.title}>
      <Card {...item} />
    </Carousel.Slide>
  ));

  return (
    <Carousel
      slideSize={{ base: '100%', sm: '50%' }}
      slideGap={30}
      emblaOptions={{ align: 'start', slidesToScroll: mobile ? 1 : 2 }}
      nextControlProps={{ 'aria-label': 'Next slide' }}
      previousControlProps={{ 'aria-label': 'Previous slide' }}
    >
      {slides}
    </Carousel>
  );
}