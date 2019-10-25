import React, { FC } from 'react';
import styled from 'styled-components';
import DefaultIcon from 'src/assets/icons/-1.png';
import BarrierIcon from 'src/assets/spells/summoner_barrier.png';
import CleanseIcon from 'src/assets/spells/summoner_boost.png';
import ExhaustIcon from 'src/assets/spells/summoner_exhaust.png';
import FlashIcon from 'src/assets/spells/summoner_flash.png';
import HasteIcon from 'src/assets/spells/summoner_haste.png';
import HealIcon from 'src/assets/spells/summoner_heal.png';
import IgniteIcon from 'src/assets/spells/summoner_ignite.png';
import SmiteIcon from 'src/assets/spells/summoner_smite.png';
import TeleportIcon from 'src/assets/spells/summoner_teleport.png';

const Icon = styled.img<{
  height?: number;
}>`
  height: ${({ height }): number => height || 100};
`;

type SpellIconProps = {
  spellId: number;
  height?: number;
};

const SpellIcon: FC<SpellIconProps> = (props: SpellIconProps) => {
  let spellIcon;
  switch (props.spellId) {
    case 1:
      spellIcon = CleanseIcon;
      break;
    case 3:
      spellIcon = ExhaustIcon;
      break;
    case 4:
      spellIcon = FlashIcon;
      break;
    case 6:
      spellIcon = HasteIcon;
      break;
    case 7:
      spellIcon = HealIcon;
      break;
    case 11:
      spellIcon = SmiteIcon;
      break;
    case 12:
      spellIcon = TeleportIcon;
      break;
    case 14:
      spellIcon = IgniteIcon;
      break;
    case 21:
      spellIcon = BarrierIcon;
      break;
    case 51:
      spellIcon = HasteIcon;
      break;
    default:
      spellIcon = DefaultIcon;
      break;
  }

  return (
    <Icon
      height={props.height}
      src={spellIcon}
      onError={(e): void => (e.currentTarget.src = DefaultIcon)}
    />
  );
};

export default SpellIcon;
