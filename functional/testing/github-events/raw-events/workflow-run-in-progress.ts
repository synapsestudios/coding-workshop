import { randNumber } from '@ngneat/falso';
import { WorkflowRunEvent } from '@octokit/webhooks-types';
import { addMinutes } from 'date-fns';
import { getOrganization } from './organization';
import { getRepository } from './repository';
import { getSender } from './sender';
import { withoutMilliseconds } from './withoutMilliseconds';
import { getWorkflow } from './workflow';

export const constructInProgressEvent = (
  e: WorkflowRunEvent,
  updatedAt?: string,
) => {
  return getWorkflowRunInProgressEvent({
    workflow_id: e.workflow.id,
    workflow_run_id: e.workflow_run.id,
    created_at: e.workflow_run.created_at,
    updated_at:
      updatedAt ||
      withoutMilliseconds(
        addMinutes(new Date(e.workflow_run.created_at), 5).toISOString(),
      ),
    run_started_at: e.workflow_run.run_started_at,
  });
};

export const getWorkflowRunInProgressEvent = (overrides?: {
  workflow_id?: number;
  workflow_run_id?: number;
  created_at?: string;
  updated_at?: string;
  run_started_at?: string;
}) => ({
  action: 'in_progress',
  sender: getSender(),
  workflow: getWorkflow({ workflow_id: overrides?.workflow_id }),
  repository: getRepository(),
  installation: {
    id: 28113401,
    node_id: 'MDIzOkludGVncmF0aW9uSW5zdGFsbGF0aW9uMjgxMTM0MDE=',
  },
  organization: getOrganization(),
  workflow_run: {
    id: overrides?.workflow_run_id || randNumber({ min: 10000, max: 9999999 }),
    created_at: overrides?.created_at || '2022-11-08T21:23:02Z',
    updated_at: overrides?.updated_at || '2022-11-08T21:29:26Z',
    run_started_at: overrides?.run_started_at || '2022-11-08T21:23:02Z',
    url: 'https://api.github.com/repos/synapsestudios/blip/actions/runs/3423302965',
    name: 'Build',
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
      events_url: 'https://api.github.com/users/spruce-bruce/events{/privacy}',
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
    status: 'in_progress',
    node_id: 'WFR_kwLOHuI7KM7MC3U1',
    head_sha: '76f2aa7f5b54715e433d8088f78b95a901b79f97',
    html_url: 'https://github.com/synapsestudios/blip/actions/runs/3423302965',
    jobs_url:
      'https://api.github.com/repos/synapsestudios/blip/actions/runs/3423302965/jobs',
    logs_url:
      'https://api.github.com/repos/synapsestudios/blip/actions/runs/3423302965/logs',
    rerun_url:
      'https://api.github.com/repos/synapsestudios/blip/actions/runs/3423302965/rerun',
    cancel_url:
      'https://api.github.com/repos/synapsestudios/blip/actions/runs/3423302965/cancel',
    conclusion: null,
    repository: {
      id: 518142760,
      url: 'https://api.github.com/repos/synapsestudios/blip',
      fork: false,
      name: 'blip',
      owner: {
        id: 197868,
        url: 'https://api.github.com/users/synapsestudios',
        type: 'Organization',
        login: 'synapsestudios',
        node_id: 'MDEyOk9yZ2FuaXphdGlvbjE5Nzg2OA==',
        html_url: 'https://github.com/synapsestudios',
        gists_url:
          'https://api.github.com/users/synapsestudios/gists{/gist_id}',
        repos_url: 'https://api.github.com/users/synapsestudios/repos',
        avatar_url: 'https://avatars.githubusercontent.com/u/197868?v=4',
        events_url:
          'https://api.github.com/users/synapsestudios/events{/privacy}',
        site_admin: false,
        gravatar_id: '',
        starred_url:
          'https://api.github.com/users/synapsestudios/starred{/owner}{/repo}',
        followers_url: 'https://api.github.com/users/synapsestudios/followers',
        following_url:
          'https://api.github.com/users/synapsestudios/following{/other_user}',
        organizations_url: 'https://api.github.com/users/synapsestudios/orgs',
        subscriptions_url:
          'https://api.github.com/users/synapsestudios/subscriptions',
        received_events_url:
          'https://api.github.com/users/synapsestudios/received_events',
      },
      node_id: 'R_kgDOHuI7KA',
      private: true,
      html_url: 'https://github.com/synapsestudios/blip',
      keys_url:
        'https://api.github.com/repos/synapsestudios/blip/keys{/key_id}',
      tags_url: 'https://api.github.com/repos/synapsestudios/blip/tags',
      blobs_url:
        'https://api.github.com/repos/synapsestudios/blip/git/blobs{/sha}',
      forks_url: 'https://api.github.com/repos/synapsestudios/blip/forks',
      full_name: 'synapsestudios/blip',
      hooks_url: 'https://api.github.com/repos/synapsestudios/blip/hooks',
      pulls_url:
        'https://api.github.com/repos/synapsestudios/blip/pulls{/number}',
      teams_url: 'https://api.github.com/repos/synapsestudios/blip/teams',
      trees_url:
        'https://api.github.com/repos/synapsestudios/blip/git/trees{/sha}',
      events_url: 'https://api.github.com/repos/synapsestudios/blip/events',
      issues_url:
        'https://api.github.com/repos/synapsestudios/blip/issues{/number}',
      labels_url:
        'https://api.github.com/repos/synapsestudios/blip/labels{/name}',
      merges_url: 'https://api.github.com/repos/synapsestudios/blip/merges',
      archive_url:
        'https://api.github.com/repos/synapsestudios/blip/{archive_format}{/ref}',
      commits_url:
        'https://api.github.com/repos/synapsestudios/blip/commits{/sha}',
      compare_url:
        'https://api.github.com/repos/synapsestudios/blip/compare/{base}...{head}',
      description: null,
      branches_url:
        'https://api.github.com/repos/synapsestudios/blip/branches{/branch}',
      comments_url:
        'https://api.github.com/repos/synapsestudios/blip/comments{/number}',
      contents_url:
        'https://api.github.com/repos/synapsestudios/blip/contents/{+path}',
      git_refs_url:
        'https://api.github.com/repos/synapsestudios/blip/git/refs{/sha}',
      git_tags_url:
        'https://api.github.com/repos/synapsestudios/blip/git/tags{/sha}',
      releases_url:
        'https://api.github.com/repos/synapsestudios/blip/releases{/id}',
      statuses_url:
        'https://api.github.com/repos/synapsestudios/blip/statuses/{sha}',
      assignees_url:
        'https://api.github.com/repos/synapsestudios/blip/assignees{/user}',
      downloads_url:
        'https://api.github.com/repos/synapsestudios/blip/downloads',
      languages_url:
        'https://api.github.com/repos/synapsestudios/blip/languages',
      milestones_url:
        'https://api.github.com/repos/synapsestudios/blip/milestones{/number}',
      stargazers_url:
        'https://api.github.com/repos/synapsestudios/blip/stargazers',
      deployments_url:
        'https://api.github.com/repos/synapsestudios/blip/deployments',
      git_commits_url:
        'https://api.github.com/repos/synapsestudios/blip/git/commits{/sha}',
      subscribers_url:
        'https://api.github.com/repos/synapsestudios/blip/subscribers',
      contributors_url:
        'https://api.github.com/repos/synapsestudios/blip/contributors',
      issue_events_url:
        'https://api.github.com/repos/synapsestudios/blip/issues/events{/number}',
      subscription_url:
        'https://api.github.com/repos/synapsestudios/blip/subscription',
      collaborators_url:
        'https://api.github.com/repos/synapsestudios/blip/collaborators{/collaborator}',
      issue_comment_url:
        'https://api.github.com/repos/synapsestudios/blip/issues/comments{/number}',
      notifications_url:
        'https://api.github.com/repos/synapsestudios/blip/notifications{?since,all,participating}',
    },
    run_number: 533,
    head_branch: 'main',
    head_commit: {
      id: '76f2aa7f5b54715e433d8088f78b95a901b79f97',
      author: {
        name: 'spruce-bruce',
        email: 'aaron@synapsestudios.com',
      },
      message: 'fixes linter thing',
      tree_id: 'f85b9565968e3bc6b2a7e40ecb3aa844ec93a210',
      committer: {
        name: 'Aaron Bruce',
        email: 'aaron@synapsestudios.com',
      },
      timestamp: '2022-11-08T21:22:58Z',
    },
    run_attempt: 1,
    workflow_id: 31951854,
    workflow_url:
      'https://api.github.com/repos/synapsestudios/blip/actions/workflows/31951854',
    artifacts_url:
      'https://api.github.com/repos/synapsestudios/blip/actions/runs/3423302965/artifacts',
    display_title: 'fixes linter thing',
    pull_requests: [],
    check_suite_id: 9199316181,
    check_suite_url:
      'https://api.github.com/repos/synapsestudios/blip/check-suites/9199316181',
    head_repository: {
      id: 518142760,
      url: 'https://api.github.com/repos/synapsestudios/blip',
      fork: false,
      name: 'blip',
      owner: {
        id: 197868,
        url: 'https://api.github.com/users/synapsestudios',
        type: 'Organization',
        login: 'synapsestudios',
        node_id: 'MDEyOk9yZ2FuaXphdGlvbjE5Nzg2OA==',
        html_url: 'https://github.com/synapsestudios',
        gists_url:
          'https://api.github.com/users/synapsestudios/gists{/gist_id}',
        repos_url: 'https://api.github.com/users/synapsestudios/repos',
        avatar_url: 'https://avatars.githubusercontent.com/u/197868?v=4',
        events_url:
          'https://api.github.com/users/synapsestudios/events{/privacy}',
        site_admin: false,
        gravatar_id: '',
        starred_url:
          'https://api.github.com/users/synapsestudios/starred{/owner}{/repo}',
        followers_url: 'https://api.github.com/users/synapsestudios/followers',
        following_url:
          'https://api.github.com/users/synapsestudios/following{/other_user}',
        organizations_url: 'https://api.github.com/users/synapsestudios/orgs',
        subscriptions_url:
          'https://api.github.com/users/synapsestudios/subscriptions',
        received_events_url:
          'https://api.github.com/users/synapsestudios/received_events',
      },
      node_id: 'R_kgDOHuI7KA',
      private: true,
      html_url: 'https://github.com/synapsestudios/blip',
      keys_url:
        'https://api.github.com/repos/synapsestudios/blip/keys{/key_id}',
      tags_url: 'https://api.github.com/repos/synapsestudios/blip/tags',
      blobs_url:
        'https://api.github.com/repos/synapsestudios/blip/git/blobs{/sha}',
      forks_url: 'https://api.github.com/repos/synapsestudios/blip/forks',
      full_name: 'synapsestudios/blip',
      hooks_url: 'https://api.github.com/repos/synapsestudios/blip/hooks',
      pulls_url:
        'https://api.github.com/repos/synapsestudios/blip/pulls{/number}',
      teams_url: 'https://api.github.com/repos/synapsestudios/blip/teams',
      trees_url:
        'https://api.github.com/repos/synapsestudios/blip/git/trees{/sha}',
      events_url: 'https://api.github.com/repos/synapsestudios/blip/events',
      issues_url:
        'https://api.github.com/repos/synapsestudios/blip/issues{/number}',
      labels_url:
        'https://api.github.com/repos/synapsestudios/blip/labels{/name}',
      merges_url: 'https://api.github.com/repos/synapsestudios/blip/merges',
      archive_url:
        'https://api.github.com/repos/synapsestudios/blip/{archive_format}{/ref}',
      commits_url:
        'https://api.github.com/repos/synapsestudios/blip/commits{/sha}',
      compare_url:
        'https://api.github.com/repos/synapsestudios/blip/compare/{base}...{head}',
      description: null,
      branches_url:
        'https://api.github.com/repos/synapsestudios/blip/branches{/branch}',
      comments_url:
        'https://api.github.com/repos/synapsestudios/blip/comments{/number}',
      contents_url:
        'https://api.github.com/repos/synapsestudios/blip/contents/{+path}',
      git_refs_url:
        'https://api.github.com/repos/synapsestudios/blip/git/refs{/sha}',
      git_tags_url:
        'https://api.github.com/repos/synapsestudios/blip/git/tags{/sha}',
      releases_url:
        'https://api.github.com/repos/synapsestudios/blip/releases{/id}',
      statuses_url:
        'https://api.github.com/repos/synapsestudios/blip/statuses/{sha}',
      assignees_url:
        'https://api.github.com/repos/synapsestudios/blip/assignees{/user}',
      downloads_url:
        'https://api.github.com/repos/synapsestudios/blip/downloads',
      languages_url:
        'https://api.github.com/repos/synapsestudios/blip/languages',
      milestones_url:
        'https://api.github.com/repos/synapsestudios/blip/milestones{/number}',
      stargazers_url:
        'https://api.github.com/repos/synapsestudios/blip/stargazers',
      deployments_url:
        'https://api.github.com/repos/synapsestudios/blip/deployments',
      git_commits_url:
        'https://api.github.com/repos/synapsestudios/blip/git/commits{/sha}',
      subscribers_url:
        'https://api.github.com/repos/synapsestudios/blip/subscribers',
      contributors_url:
        'https://api.github.com/repos/synapsestudios/blip/contributors',
      issue_events_url:
        'https://api.github.com/repos/synapsestudios/blip/issues/events{/number}',
      subscription_url:
        'https://api.github.com/repos/synapsestudios/blip/subscription',
      collaborators_url:
        'https://api.github.com/repos/synapsestudios/blip/collaborators{/collaborator}',
      issue_comment_url:
        'https://api.github.com/repos/synapsestudios/blip/issues/comments{/number}',
      notifications_url:
        'https://api.github.com/repos/synapsestudios/blip/notifications{?since,all,participating}',
    },
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
      events_url: 'https://api.github.com/users/spruce-bruce/events{/privacy}',
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
    check_suite_node_id: 'CS_kwDOHuI7KM8AAAACJFJs1Q',
    previous_attempt_url: null,
    referenced_workflows: [
      {
        ref: 'refs/heads/main',
        sha: '76f2aa7f5b54715e433d8088f78b95a901b79f97',
        path: 'synapsestudios/blip/.github/workflows/fast_checks.yml@76f2aa7f5b54715e433d8088f78b95a901b79f97',
      },
    ],
  },
});
