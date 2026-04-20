import type { ReactNode } from 'react';
import { isExternalHrefAvailable } from '../../config/appMode';

interface ExternalAnchorProps {
  href?: string;
  className?: string;
  children: ReactNode;
  title?: string;
}

export default function ExternalAnchor({ href, className, children, title }: ExternalAnchorProps) {
  if (!isExternalHrefAvailable(href)) {
    return (
      <span
        className={`${className ?? ''} opacity-70 cursor-not-allowed`}
        title={title ?? 'Disponible en modo online'}
        aria-disabled="true"
      >
        {children}
      </span>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      title={title}
    >
      {children}
    </a>
  );
}
