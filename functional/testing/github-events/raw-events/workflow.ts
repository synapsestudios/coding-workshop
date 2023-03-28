import { randNumber } from '@ngneat/falso';

export const getWorkflow = (overrides?: { workflow_id?: number }) => ({
  id: overrides?.workflow_id || randNumber({ min: 10000, max: 9999999 }),
  node_id: 'W_kwDOHuI7KM4B54vu',
  name: 'Build',
  path: '.github/workflows/build.yml',
  state: 'active',
  created_at: '2022-08-08T20:12:42.000Z',
  updated_at: '2022-08-11T00:01:57.000Z',
  url: 'https://api.github.com/repos/synapsestudios/cs3/actions/workflows/31951854',
  html_url:
    'https://github.com/synapsestudios/cs3/blob/main/.github/workflows/build.yml',
  badge_url: 'https://github.com/synapsestudios/cs3/workflows/Build/badge.svg',
});
