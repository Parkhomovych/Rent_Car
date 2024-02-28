import { Box, HomeImg, Item, List, SvgGood, Text } from './HomeContent.styled';

export const HomeContent = () => {
  return (
    <Box>
      <List>
        <Item>
          <SvgGood />
          <Text>137 нових автомобілів у парку</Text>
        </Item>
        <Item>
          <SvgGood />
          <Text>Повне страхування</Text>
        </Item>
        <Item>
          <SvgGood />
          <Text>Доставка авто за адресою</Text>
        </Item>
        <Item>
          <SvgGood />
          <Text>Можливий виїзд за кордон</Text>
        </Item>
        <Item>
          <SvgGood />
          <Text>Цілодобова підтримка 24/7</Text>
        </Item>
      </List>
      <HomeImg
        width="600"
        src="https://img2.creatium.app/98/dc/27/596a9a1325b5b9d4cc2985dc0c30a20ce8/kia_sportage_2018_gt_line_s_hybrid_experience_green_0000_1.png"
        alt="many cars"
      />
    </Box>
  );
};
