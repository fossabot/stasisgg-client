import React, { FC } from 'react';
import styled from 'styled-components';

const MainContainer = styled.div`
  display: flex;
  padding: 0 1em;
`;
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr 1fr;
  gap: 0.4em;
  justify-content: center;
  align-self: center;
`;

const Icon = styled.img<{ order?: number }>`
  height: 36px;
  width: 36px;
  order: ${({ order }): number => order || 0};
`;

const BlankIcon = styled.div<{ order?: number }>`
  height: 36px;
  width: 36px;
  background-color: rgba(0, 0, 0, 0.24);
  order: ${({ order }): number => order || 0};
`;

type ItemsPanelProps = {
  items: { order: number; spriteURL: string }[];
};

const ItemsPanel: FC<ItemsPanelProps> = (props: ItemsPanelProps) => {
  const ward = props.items.pop();
  const listItems = props.items.map(item =>
    // if spriteURL is "", return blank icon
    item.spriteURL ? (
      <Icon
        key={item.order}
        src={item.spriteURL}
        // Specifiy grid order to order correctly
        order={item.order < 3 ? item.order + 1 : item.order + 2}
      />
    ) : (
      <BlankIcon order={item.order < 3 ? item.order + 1 : item.order + 2} />
    )
  );

  return (
    <MainContainer>
      <GridContainer>
        {listItems}
        <Icon src={ward ? ward.spriteURL : BlankIcon} order={4} />
      </GridContainer>
    </MainContainer>
  );
};

export default ItemsPanel;
