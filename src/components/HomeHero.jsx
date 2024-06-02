import React from 'react';
import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
} from '@chakra-ui/react';
import {
  IoCheckmarkCircleOutline,
  IoHappyOutline,
  IoSearchSharp,

} from 'react-icons/io5';

import HeroImage from '../assets/HeroHomeImage.jpg';

const Feature = ({ text, icon, iconBg }) => {
  return (
    <Stack direction={'row'} align={'center'}>
      <Flex
        w={8}
        h={8}
        align={'center'}
        justify={'center'}
        rounded={'full'}
        bg={iconBg}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  );
};

const SplitWithImage = () => {
  return (
    <Container maxW={'5xl'} py={12}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>

          <Heading>Transforming Spaces, One Clean at a Time</Heading>
          <Text color={'gray.500'} fontSize={'lg'}>
          With meticulous attention to detail and a commitment to quality, we transform even the toughest messes into spotless sanctuaries. Say goodbye to the hassle of cleaning and hello to the joy of sparkling surroundings. Let <strong>Grime + Punishment Services</strong> handle the dirty work, so you can enjoy a pristine environment without the punishment of scrubbing.
          </Text>
          <Stack
            spacing={4}
            divider={
              <StackDivider
                borderColor={useColorModeValue('gray.100', 'gray.700')}
              />
            }
          >
            <Feature
              icon={<Icon as={IoCheckmarkCircleOutline} color={'yellow.500'} w={5} h={5} />}
              iconBg={useColorModeValue('yellow.100', 'black')}
              text={'Expertise in Tough Cleaning'}
            />
            <Feature
              icon={<Icon as={IoSearchSharp} color={'green.500'} w={5} h={5} />}
              iconBg={useColorModeValue('green.100', 'green.900')}
              text={'Attention to Detail'}
            />
            <Feature
              icon={<Icon as={IoHappyOutline} color={'pink.500'} w={5} h={5} />}
              iconBg={useColorModeValue('pink.200')}
              text={'Convenience and Peace of Mind'}
            />
          </Stack>
        </Stack>
        <Flex>
          <Image
            rounded={'md'}
            alt={'feature image'}
            src= {HeroImage}
            objectFit={'cover'}
          />
        </Flex>
      </SimpleGrid>
    </Container>
  );
};

export default SplitWithImage;
