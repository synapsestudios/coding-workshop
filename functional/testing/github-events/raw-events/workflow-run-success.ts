import { randNumber } from '@ngneat/falso';
import { WorkflowRunEvent } from '@octokit/webhooks-types';
import { getOrganization } from './organization';
import { getRepository } from './repository';
import { getSender } from './sender';
import { getWorkflow } from './workflow';

export const constructSuccessEvent = (
  e: WorkflowRunEvent,
  updatedAt: string,
) => {
  return getWorkflowRunSuccessEvent({
    workflow_id: e.workflow.id,
    workflow_run_id: e.workflow_run.id,
    created_at: e.workflow_run.created_at,
    updated_at: updatedAt,
    run_started_at: e.workflow_run.run_started_at,
  });
};

export const getWorkflowRunSuccessEvent = (overrides?: {
  workflow_id?: number;
  workflow_run_id?: number;
  created_at?: string;
  updated_at?: string;
  run_started_at?: string;
}) => ({
  action: 'completed',
  workflow_run: {
    id: overrides?.workflow_run_id || randNumber({ min: 10000, max: 9999999 }),
    created_at: overrides?.created_at || '2022-08-11T16:09:23Z',
    updated_at: overrides?.updated_at || '2022-08-11T16:11:20Z',
    run_started_at: overrides?.run_started_at || '2022-08-11T16:09:23Z',
    display_title: 'Build',
    name: 'Build',
    node_id: 'WFR_kwLOHuI7KM6pWV88',
    head_branch: 'main',
    head_sha: 'c4428830fcdb38ba04a3d40df7d09ac4f372c6aa',
    path: '.github/workflows/build.yml',
    run_number: 34,
    event: 'push',
    status: 'completed',
    conclusion: 'success',
    workflow_id: 31951854,
    check_suite_id: 7774124204,
    check_suite_node_id: 'CS_kwDOHuI7KM8AAAABz1-4rA',
    url: 'https://api.github.com/repos/synapsestudios/cs3/actions/runs/2841206588',
    html_url: 'https://github.com/synapsestudios/cs3/actions/runs/2841206588',
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
      'https://api.github.com/repos/synapsestudios/cs3/actions/runs/2841206588/jobs',
    logs_url:
      'https://api.github.com/repos/synapsestudios/cs3/actions/runs/2841206588/logs',
    check_suite_url:
      'https://api.github.com/repos/synapsestudios/cs3/check-suites/7774124204',
    artifacts_url:
      'https://api.github.com/repos/synapsestudios/cs3/actions/runs/2841206588/artifacts',
    cancel_url:
      'https://api.github.com/repos/synapsestudios/cs3/actions/runs/2841206588/cancel',
    rerun_url:
      'https://api.github.com/repos/synapsestudios/cs3/actions/runs/2841206588/rerun',
    previous_attempt_url: null,
    workflow_url:
      'https://api.github.com/repos/synapsestudios/cs3/actions/workflows/31951854',
    head_commit: {
      id: 'c4428830fcdb38ba04a3d40df7d09ac4f372c6aa',
      tree_id: '08deff025d1f79faa38c293cc567572831ca5c3a',
      message: 'renames interface to root',
      timestamp: '2022-08-11T16:09:20Z',
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
