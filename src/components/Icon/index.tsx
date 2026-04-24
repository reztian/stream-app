import React from 'react'
import spritesSvg from '../../assets/icons/sprites.svg'

interface IconProps {
    name: 'facebook' | 'instagram' | 'youtube';
    width?: number;
    height?: number;
    className?: string;
}

const Icon: React.FC<IconProps> = ({ name, width = 48, height = 48, className = '' }) => (
    <svg 
        width={width} 
        height={height} 
        viewBox="0 0 48 48"
        className={`icon icon-${name} ${className}`}
    >
        <use href={`${spritesSvg}#icon-${name}`} />
    </svg>
);

export default Icon