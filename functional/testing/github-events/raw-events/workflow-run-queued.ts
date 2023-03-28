import { randNumber, randPastDate } from '@ngneat/falso';
import { getOrganization } from './organization';
import { getRepository } from './repository';
import { getSender } from './sender';
import { withoutMilliseconds } from './withoutMilliseconds';
import { getWorkflow } from './workflow';

const randTime = () => withoutMilliseconds(randPastDate().toISOString());

export const getWorkflowRunQueuedEvent = (overrides?: {
  workflow_id?: number;
}) => {
  const time = randTime();
  return {
    action: 'requested',
    sender: getSender(),
    workflow: getWorkflow({ workflow_id: overrides?.workflow_id }),
    repository: getRepository(),
    installation: {
      id: 28113401,
      node_id: 'MDIzOkludGVncmF0aW9uSW5zdGFsbGF0aW9uMjgxMTM0MDE=',
    },
    organization: getOrganization(),
    workflow_run: {
      id: randNumber({ min: 10000, max: 9999999 }),
      created_at: time,
      run_started_at: time,
      updated_at: time,
      display_title: 'Build',
      name: 'Build',
      url: 'https://api.github.com/repos/synapsestudios/blip/actions/runs/2982291946',
      path: '.github/workflows/build.yml',
      actor: {
        id: 59978,
        url: 'https://api.github.com/users/spruce-bruce',
        type: 'User',
        login: 'spruce-bruce',
        node_id: 'MDQ6VXNlcjU5OTc4',
        html_url: 'https://github.com/spruce-bruce',
        gists_url: 'https://api.github.com/users/spruce-bruce/gists{/gist_id}',
        repos_url: 'https://api.github.com/users/spruce-bruce/repos',
        avatar_url: 'https://avatars.githubusercontent.com/u/59978?v=4',
        events_url:
          'https://api.github.com/users/spruce-bruce/events{/privacy}',
        site_admin: false,
        gravatar_id: '',
        starred_url:
          'https://api.github.com/users/spruce-bruce/starred{/owner}{/repo}',
        followers_url: 'https://api.github.com/users/spruce-bruce/followers',
        following_url:
          'https://api.github.com/users/spruce-bruce/following{/other_user}',
        organizations_url: 'https://api.github.com/users/spruce-bruce/orgs',
        subscriptions_url:
          'https://api.github.com/users/spruce-bruce/subscriptions',
        received_events_url:
          'https://api.github.com/users/spruce-bruce/received_events',
      },
      event: 'push',
      status: 'queued',
      node_id: 'WFR_kwLOHuI7KM6xwinq',
      head_sha: '78ccf68c979ba85b69739d09c1d95a4533b3e680',
      html_url:
        'https://github.com/synapsestudios/blip/actions/runs/2982291946',
      jobs_url:
        'https://api.github.com/repos/synapsestudios/blip/actions/runs/2982291946/jobs',
      logs_url:
        'https://api.github.com/repos/synapsestudios/blip/actions/runs/2982291946/logs',
      rerun_url:
        'https://api.github.com/repos/synapsestudios/blip/actions/runs/2982291946/rerun',
      cancel_url:
        'https://api.github.com/repos/synapsestudios/blip/actions/runs/2982291946/cancel',
      conclusion: null,
      repository: getRepository(),
      run_number: 205,
      head_branch: 'main',
      head_commit: {
        id: '78ccf68c979ba85b69739d09c1d95a4533b3e680',
        author: { name: 'spruce-bruce', email: 'aaron@synapsestudios.com' },
        message: "can't create users with heroku perms apparently",
        tree_id: '7649977b7ca57489ca97da5355e3492d740fdd70',
        committer: { name: 'spruce-bruce', email: 'aaron@synapsestudios.com' },
        timestamp: '2022-09-02T22:59:34Z',
      },
      run_attempt: 1,
      workflow_id: 31951854,
      workflow_url:
        'https://api.github.com/repos/synapsestudios/blip/actions/workflows/31951854',
      artifacts_url:
        'https://api.github.com/repos/synapsestudios/blip/actions/runs/2982291946/artifacts',
      pull_requests: [],
      check_suite_id: 8116053925,
      check_suite_url:
        'https://api.github.com/repos/synapsestudios/blip/check-suites/8116053925',
      head_repository: getRepository(),
      triggering_actor: {
        id: 59978,
        url: 'https://api.github.com/users/spruce-bruce',
        type: 'User',
        login: 'spruce-bruce',
        node_id: 'MDQ6VXNlcjU5OTc4',
        html_url: 'https://github.com/spruce-bruce',
        gists_url: 'https://api.github.com/users/spruce-bruce/gists{/gist_id}',
        repos_url: 'https://api.github.com/users/spruce-bruce/repos',
        avatar_url: 'https://avatars.githubusercontent.com/u/59978?v=4',
        events_url:
          'https://api.github.com/users/spruce-bruce/events{/privacy}',
        site_admin: false,
        gravatar_id: '',
        starred_url:
          'https://api.github.com/users/spruce-bruce/starred{/owner}{/repo}',
        followers_url: 'https://api.github.com/users/spruce-bruce/followers',
        following_url:
          'https://api.github.com/users/spruce-bruce/following{/other_user}',
        organizations_url: 'https://api.github.com/users/spruce-bruce/orgs',
        subscriptions_url:
          'https://api.github.com/users/spruce-bruce/subscriptions',
        received_events_url:
          'https://api.github.com/users/spruce-bruce/received_events',
      },
      check_suite_node_id: 'CS_kwDOHuI7KM8AAAAB48EnpQ',
      previous_attempt_url: null,
      referenced_workflows: [
        {
          ref: 'refs/heads/main',
          sha: '78ccf68c979ba85b69739d09c1d95a4533b3e680',
          path: 'synapsestudios/blip/.github/workflows/fast_checks.yml@78ccf68c979ba85b69739d09c1d95a4533b3e680',
        },
      ],
    },
  };
};
