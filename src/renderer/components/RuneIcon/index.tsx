import React, { FC } from 'react';
import styled from 'styled-components';
import DefaultIcon from 'src/assets/icons/-1.png';

import Precision from 'src/assets/runes/style/precision.png';
import Conqueror from 'src/assets/runes/main/precision/conqueror.png';
import FleetFootWork from 'src/assets/runes/main/precision/fleetfootwork.png';
import LethalTempo from 'src/assets/runes/main/precision/lethaltempotemp.png';
import PressTheAttack from 'src/assets/runes/main/precision/presstheattack.png';

import Domination from 'src/assets/runes/style/domination.png';
import DarkHarvest from 'src/assets/runes/main/domination/darkharvest.png';
import Electrocute from 'src/assets/runes/main/domination/electrocute.png';
import HailOfBades from 'src/assets/runes/main/domination/hailofblades.png';
import Predator from 'src/assets/runes/main/domination/predator.png';

import Sorcery from 'src/assets/runes/style/sorcery.png';
import Arcanecomet from 'src/assets/runes/main/sorcery/arcanecomet.png';
import PhaseRush from 'src/assets/runes/main/sorcery/phaserush.png';
import SummonAery from 'src/assets/runes/main/sorcery/summonaery.png';

import Resolve from 'src/assets/runes/style/resolve.png';
import GraspOfTheUndying from 'src/assets/runes/main/resolve/graspoftheundying.png';
import Guardian from 'src/assets/runes/main/resolve/guardian.png';
import Aftershock from 'src/assets/runes/main/resolve/veteranaftershock.png';

import Inspiration from 'src/assets/runes/style/whimsy.png';
import GlacialAugment from 'src/assets/runes/main/inspiration/glacialaugment.png';
import Kleptomancy from 'src/assets/runes/main/inspiration/kleptomancy.png';
import UnsealedSpellbook from 'src/assets/runes/main/inspiration/unsealedspellbook.png';

const Icon = styled.img<{
  height?: number;
}>`
  height: ${({ height }): number => height || 100};
`;

type RuneIconProps = {
  runeId: number;
  height?: number;
};

const RuneIcon: FC<RuneIconProps> = (props: RuneIconProps) => {
  let runeIcon;
  switch (props.runeId) {
    case 8000:
      runeIcon = Precision;
      break;
    case 8005:
      runeIcon = PressTheAttack;
      break;
    case 8008:
      runeIcon = LethalTempo;
      break;
    case 8010:
      runeIcon = Conqueror;
      break;
    case 8021:
      runeIcon = FleetFootWork;
      break;
    case 8100:
      runeIcon = Domination;
      break;
    case 8112:
      runeIcon = Electrocute;
      break;
    case 8124:
      runeIcon = Predator;
      break;
    case 8128:
      runeIcon = DarkHarvest;
      break;
    case 8200:
      runeIcon = Sorcery;
      break;
    case 8214:
      runeIcon = SummonAery;
      break;
    case 8229:
      runeIcon = Arcanecomet;
      break;
    case 8230:
      runeIcon = PhaseRush;
      break;
    case 8300:
      runeIcon = Inspiration;
      break;
    case 8351:
      runeIcon = GlacialAugment;
      break;
    case 8359:
      runeIcon = Kleptomancy;
      break;
    case 8360:
      runeIcon = UnsealedSpellbook;
      break;
    case 8400:
      runeIcon = Resolve;
      break;
    case 8437:
      runeIcon = GraspOfTheUndying;
      break;
    case 8439:
      runeIcon = Aftershock;
      break;
    case 8465:
      runeIcon = Guardian;
      break;
    case 9923:
      runeIcon = HailOfBades;
      break;
    default:
      runeIcon = DefaultIcon;
      break;
  }

  return (
    <Icon
      height={props.height}
      src={runeIcon}
      onError={(e): void => (e.currentTarget.src = DefaultIcon)}
    />
  );
};

export default RuneIcon;
