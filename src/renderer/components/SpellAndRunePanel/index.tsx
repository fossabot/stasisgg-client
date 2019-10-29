import React, { FC } from 'react';
import styled from 'styled-components';
import SpellIcon from 'src/renderer/components/SpellIcon';
import RuneIcon from 'src/renderer/components/RuneIcon';

const MainContainer = styled.div`
  display: flex;
  > * + * {
    margin-left: 0.5em;
  }
`;
const VerticalIcons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  > * + * {
    margin-top: 0.5em;
  }
`;

type SpellAndRunePanelProps = {
  summonerSpell1Id: number;
  summonerSpell2Id: number;
  runeMain: number;
  runeSub: number;
};

const SpellAndRunePanel: FC<SpellAndRunePanelProps> = (
  props: SpellAndRunePanelProps
) => {
  return (
    <MainContainer>
      <VerticalIcons>
        <SpellIcon spellId={props.summonerSpell1Id} height={24} />
        <SpellIcon spellId={props.summonerSpell2Id} height={24} />
      </VerticalIcons>
      <VerticalIcons>
        <RuneIcon runeId={props.runeMain} height={24} />
        <RuneIcon runeId={props.runeSub} height={24} />
      </VerticalIcons>
    </MainContainer>
  );
};

export default SpellAndRunePanel;
