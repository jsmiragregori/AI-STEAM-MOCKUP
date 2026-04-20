import { useState } from 'react';
import { isOfflineMode } from '../../config/appMode';

interface CountryFlagProps {
  countryCode: string;
  countryName: string;
  size: 'small' | 'large';
  className?: string;
}

const codeToEmoji = (countryCode: string): string => {
  if (!/^[A-Za-z]{2}$/.test(countryCode)) return '🏳️';
  return countryCode
    .toUpperCase()
    .split('')
    .map((char) => String.fromCodePoint(127397 + char.charCodeAt(0)))
    .join('');
};

export default function CountryFlag({ countryCode, countryName, size, className }: CountryFlagProps) {
  const [hasError, setHasError] = useState(false);
  const emoji = codeToEmoji(countryCode);
  const emojiClass = size === 'large' ? 'text-2xl leading-none' : 'text-sm leading-none';

  if (isOfflineMode || hasError) {
    return (
      <span
        className={`${emojiClass} ${className ?? ''}`}
        role="img"
        aria-label={countryName}
        title={countryName}
      >
        {emoji}
      </span>
    );
  }

  const path = size === 'large' ? '48x36' : '20x15';
  return (
    <img
      src={`https://flagcdn.com/${path}/${countryCode.toLowerCase()}.png`}
      alt={countryName}
      className={className}
      onError={() => setHasError(true)}
    />
  );
}
