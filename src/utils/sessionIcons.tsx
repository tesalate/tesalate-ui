import React from 'react';
// import { SessionType } from '../ducks/sessions/sessions.index';

const sessionIcons = new Map([
  [
    'charge',
    <span className="me-2" role="img" aria-label="high-voltage">
      ⚡
    </span>,
  ],
  [
    'drive',
    <span className="me-2" role="img" aria-label="automobile">
      🚗
    </span>,
  ],
  [
    'sleep',
    <span className="me-2" role="img" aria-label="sleeping">
      💤
    </span>,
  ],
  [
    'idle',
    <span className="me-2" role="img" aria-label="idle">
      🟡
    </span>,
  ],
  [
    'sentry',
    <span className="me-2" role="img" aria-label="sentry">
      👁️
    </span>,
  ],
  [
    'conditioning',
    <span className="me-2" role="img" aria-label="sentry">
      🌬️
    </span>,
  ],
]);

export default sessionIcons;
