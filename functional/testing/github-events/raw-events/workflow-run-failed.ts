import { randNumber } from '@ngneat/falso';
import { WorkflowRunEvent } from '@octokit/webhooks-types';
import { getOrganization } from './organization';
import { getRepository } from './repository';
import { getSender } from './sender';
import { getWorkflow } from './workflow';

export const constructFailedEvent = (
  e: WorkflowRunEvent,
  updatedAt: string,
) => {
  return getWorkflowRunFailedEvent({
    workflow_id: e.workflow.id,
    workflow_run_id: e.workflow_run.id,
    created_at: e.workflow_run.created_at,
    updated_at: updatedAt,
    run_started_at: e.workflow_run.run_started_at,
  });
};

export const getWorkflowRunFailedEvent = (overrides?: {
  workflow_id?: number;
  workflow_run_id?: number;
  created_at?: string;
  updated_at?: string;
  run_started_at?: string;
}) => ({
  action: 'completed',
  workflow_run: {
    id: overrides?.workflow_id || randNumber({ min: 10000, max: 9999999 }),
    created_at: overrides?.created_at || '2022-08-11T16:20:57Z',
    updated_at: overrides?.updated_at || '2022-08-11T16:21:53Z',
    run_started_at: overrides?.run_started_at || '2022-08-11T16:20:57Z',
    display_title: 'Build',
    name: 'Build',
    node_id: 'WFR_kwLOHuI7KM6pWmBC',
    head_branch: 'main',
    head_sha: '8b019ec683dc087b90ac0291c723d745e0f842c1',
    path: '.github/workflows/build.yml',
    run_number: 35,
    event: 'push',
    status: 'completed',
    conclusion: 'failure',
    workflow_id: 31951854,
    check_suite_id: 7774313405,
    check_suite_node_id: 'CS_kwDOHuI7KM8AAAABz2KbvQ',
    url: 'https://api.github.com/repos/synapsestudios/cs3/actions/runs/2841272386',
    html_url: 'https://github.com/synapsestudios/cs3/actions/runs/2841272386',
    pull_requests: [],
    actor: {
      login: 'spruce-bruce',
      id: 59978,
      node_id: 'MDQ6VXNlcjU5OTc4',
      avatar_url: 'https://avatars.githubusercontent.com/u/59978?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/spruce-bruce',
      html_url: 'https://github.com/spruce-bruce',
      followers_url: 'https://api.github.com/users/spruce-bruce/followers',
      following_url:
        'https://api.github.com/users/spruce-bruce/following{/other_user}',
      gists_url: 'https://api.github.com/users/spruce-bruce/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/spruce-bruce/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/spruce-bruce/subscriptions',
      organizations_url: 'https://api.github.com/users/spruce-bruce/orgs',
      repos_url: 'https://api.github.com/users/spruce-bruce/repos',
      events_url: 'https://api.github.com/users/spruce-bruce/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/spruce-bruce/received_events',
      type: 'User',
      site_admin: false,
    },
    run_attempt: 1,
    referenced_workflows: [],
    triggering_actor: {
      login: 'spruce-bruce',
      id: 59978,
      node_id: 'MDQ6VXNlcjU5OTc4',
      avatar_url: 'https://avatars.githubusercontent.com/u/59978?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/spruce-bruce',
      html_url: 'https://github.com/spruce-bruce',
      followers_url: 'https://api.github.com/users/spruce-bruce/followers',
      following_url:
        'https://api.github.com/users/spruce-bruce/following{/other_user}',
      gists_url: 'https://api.github.com/users/spruce-bruce/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/spruce-bruce/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/spruce-bruce/subscriptions',
      organizations_url: 'https://api.github.com/users/spruce-bruce/orgs',
      repos_url: 'https://api.github.com/users/spruce-bruce/repos',
      events_url: 'https://api.github.com/users/spruce-bruce/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/spruce-bruce/received_events',
      type: 'User',
      site_admin: false,
    },
    jobs_url:
      'https://api.github.com/repos/synapsestudios/cs3/actions/runs/2841272386/jobs',
    logs_url:
      'https://api.github.com/repos/synapsestudios/cs3/actions/runs/2841272386/logs',
    check_suite_url:
      'https://api.github.com/repos/synapsestudios/cs3/check-suites/7774313405',
    artifacts_url:
      'https://api.github.com/repos/synapsestudios/cs3/actions/runs/2841272386/artifacts',
    cancel_url:
      'https://api.github.com/repos/synapsestudios/cs3/actions/runs/2841272386/cancel',
    rerun_url:
      'https://api.github.com/repos/synapsestudios/cs3/actions/runs/2841272386/rerun',
    previous_attempt_url: null,
    workflow_url:
      'https://api.github.com/repos/synapsestudios/cs3/actions/workflows/31951854',
    head_commit: {
      id: '8b019ec683dc087b90ac0291c723d745e0f842c1',
      tree_id: '4c757ed53c79483a7dec123af01e94bb4fe1f02c',
      message: 'forcing a failure so I can get a failure event',
      timestamp: '2022-08-11T16:20:54Z',
      author: {
        name: 'spruce-bruce',
        email: 'aaron@synapsestudios.com',
      },
      committer: {
        name: 'spruce-bruce',
        email: 'aaron@synapsestudios.com',
      },
    },
    repository: getRepository(),
    head_repository: getRepository(),
  },
  workflow: getWorkflow({ workflow_id: overrides?.workflow_id }),
  repository: getRepository(),
  organization: getOrganization(),
  sender: getSender(),
  installation: {
    id: 28113283,
    node_id: 'MDIzOkludGVncmF0aW9uSW5zdGFsbGF0aW9uMjgxMTMyODM=',
  },
});
