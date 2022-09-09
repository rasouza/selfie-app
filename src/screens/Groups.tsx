import React from 'react';

import {useTheme, useTranslation} from '../hooks/';
import {Block, Button, Image, Input, Product, Text} from '../components/';

const Home = () => {
  const {t} = useTranslation();
  const {assets, colors, fonts, gradients, sizes} = useTheme();

  return (
    <Block>
      {/* search input */}
      <Block color={colors.card} flex={0} padding={sizes.padding}>
        <Input search placeholder={t('common.search')} />
      </Block>

      <Block
        scroll
        paddingHorizontal={sizes.padding}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: sizes.l}}>
        <Block row wrap="wrap" justify="space-between" marginTop={sizes.sm}>
          <Product
            image="https://picsum.photos/200"
            title="My group 1"
            type="vertical"
          />
          <Product
            image="https://picsum.photos/200"
            title="My group 2"
            type="vertical"
          />
          <Product
            image="https://picsum.photos/200"
            title="New"
            type="horizontal"
          />
        </Block>
      </Block>
    </Block>
  );
};

export default Home;
