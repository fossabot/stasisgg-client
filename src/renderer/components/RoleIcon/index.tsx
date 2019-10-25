import React, { FC } from 'react';
import AllIcon from 'src/assets/icons/role/all.svg';
import TopIcon from 'src/assets/icons/role/position-top.svg';
import JungleIcon from 'src/assets/icons/role/position-jungle.svg';
import MidIcon from 'src/assets/icons/role/position-middle.svg';
import BotIcon from 'src/assets/icons/role/position-bottom.svg';
import SupportIcon from 'src/assets/icons/role/position-utility.svg';

type RoleIconProps = {
  role: string;
  height: number;
  width: number;
};

const RoleIcon: FC<RoleIconProps> = (props: RoleIconProps) => {
  if (props.role === 'TOP')
    return <TopIcon height={props.height} width={props.width} />;
  else if (props.role === 'JUNGLE')
    return <JungleIcon height={props.height} width={props.width} />;
  else if (props.role === 'MIDDLE')
    return <MidIcon height={props.height} width={props.width} />;
  else if (props.role === 'BOTTOM')
    return <BotIcon height={props.height} width={props.width} />;
  else if (props.role === 'SUPPORT')
    return <SupportIcon height={props.height} width={props.width} />;
  else return <AllIcon height={props.height} width={props.width} />;
};

export default RoleIcon;
