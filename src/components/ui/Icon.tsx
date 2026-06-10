import { type IconType } from 'react-icons';
import { FiHeart, FiCamera, FiCloud, FiStar, FiMoon, FiSun, FiMusic, FiMail, FiSearch, FiRefreshCw } from 'react-icons/fi';
import { LuGem, LuSparkles, LuWaves, LuMessageSquare, LuDumbbell } from 'react-icons/lu';
import { FaRegGem, FaBirthdayCake, FaHandHoldingHeart, FaDiceD6, FaCloudRain } from 'react-icons/fa';
import { GiCakeSlice, GiRose, GiSparkSpirit, GiFlowerTwirl } from 'react-icons/gi';

const iconMap: Record<string, IconType> = {
  heart: FiHeart,
  camera: FiCamera,
  cloud: FiCloud,
  star: FiStar,
  moon: FiMoon,
  sun: FiSun,
  music: FiMusic,
  mail: FiMail,
  search: FiSearch,
  refresh: FiRefreshCw,
  gem: LuGem,
  sparkles: LuSparkles,
  waves: LuWaves,
  thought: LuMessageSquare,
  muscle: LuDumbbell,
  'gem-alt': FaRegGem,
  cake: GiCakeSlice,
  'sparkle-outline': GiSparkSpirit,
  'cherry-blossom': GiFlowerTwirl,
  'playing-card': FaDiceD6,
  rain: FaCloudRain,
  rose: GiRose,
  flower: GiFlowerTwirl,
  'birthday-cake': FaBirthdayCake,
  'holding-heart': FaHandHoldingHeart,
  dice: FaDiceD6,
};

export type IconName =
  | 'heart' | 'camera' | 'cloud' | 'star' | 'moon' | 'sun'
  | 'music' | 'mail' | 'search' | 'refresh'
  | 'gem' | 'sparkles' | 'waves' | 'thought' | 'muscle'
  | 'gem-alt' | 'cake' | 'sparkle-outline' | 'cherry-blossom' | 'playing-card'
  | 'rain' | 'rose' | 'flower' | 'birthday-cake' | 'holding-heart'
  | 'dice';

const knownIcons = new Set(Object.keys(iconMap));

export function isIconName(name: string): name is IconName {
  return knownIcons.has(name);
}

interface IconProps {
  name: string;
  className?: string;
  size?: number;
  style?: React.CSSProperties;
}

export function Icon({ name, className = '', size = 20, style }: IconProps) {
  const Component = iconMap[name];
  if (!Component) {
    return <span className={className} style={style}>{name}</span>;
  }
  return <Component className={className} size={size} style={style} />;
}
