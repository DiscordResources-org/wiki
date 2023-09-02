import React from 'react';
import { useColorMode } from '@docusaurus/theme-common';

const InviteWidget = ({ invite }) => {
    const { isDarkTheme } = useColorMode();
    const theme = isDarkTheme ? 'dark' : 'light';
    const href = `https://discord.gg/${invite}`;
    const src = `https://invidget.switchblade.xyz/${invite}?theme=${theme}`;

    return (
        <a href={href} target='_blank' rel='noreferrer'>
            <img src={src} alt='' />
        </a>
    );
};

module.exports =  InviteWidget;
