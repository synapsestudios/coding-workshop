import { randNumber } from '@ngneat/falso';
import { WorkflowJobEvent } from '@octokit/webhooks-types';
import { addMinutes } from 'date-fns';
import { getOrganization } from './organization';
import { getRepository } from './repository';
import { getSender } from './sender';
import { withoutMilliseconds } from './withoutMilliseconds';

export const constructFailedEvent = (e: WorkflowJobEvent) => {
  const seedTime = e.workflow_job.started_at;

  const completedAt = addMinutes(
    new Date(seedTime),
    randNumber({ min: 4, max: 15 }),
  );
  return getWorkflowJobFailedEvent({
    started_at: e.workflow_job.started_at,
    completed_at: withoutMilliseconds(completedAt.toISOString()),
    run_id: e.workflow_job.run_id,
    job_id: e.workflow_job.id,
  });
};

export const getWorkflowJobFailedEvent = (overrides?: {
  job_id?: number;
  run_id?: number;
  started_at?: string;
  completed_at?: string;
}) => ({
  action: 'completed',
  sender: getSender(),
  repository: getRepository(),
  installation: {
    id: 28113401,
    node_id: 'MDIzOkludGVncmF0aW9uSW5zdGFsbGF0aW9uMjgxMTM0MDE=',
  },
  organization: getOrganization(),
  workflow_job: {
    id: overrides?.job_id || randNumber({ min: 10000, max: 9999999 }),
    run_id: overrides?.run_id || randNumber({ min: 10000, max: 9999999 }),
    started_at: overrides?.started_at || '2022-09-20T23:47:07Z',
    completed_at: overrides?.completed_at || '2022-09-20T23:47:45Z',
    conclusion: 'failure',
    status: 'completed',
    workflow_name: 'Workflow Name',
    url: 'https://api.github.com/repos/synapsestudios/blip/actions/jobs/8461907793',
    name: 'Commit Stage / Commit Stage Checks',
    steps: [
      {
        name: 'Set up job',
        number: 1,
        status: 'completed',
        conclusion: 'success',
        started_at: '2022-09-20T23:47:06.000Z',
        completed_at: '2022-09-20T23:47:07.000Z',
      },
      {
        name: 'Checkout',
        number: 2,
        status: 'completed',
        conclusion: 'success',
        started_at: '2022-09-20T23:47:07.000Z',
        completed_at: '2022-09-20T23:47:08.000Z',
      },
      {
        name: 'Cache dependencies',
        number: 3,
        status: 'completed',
        conclusion: 'success',
        started_at: '2022-09-20T23:47:08.000Z',
        completed_at: '2022-09-20T23:47:10.000Z',
      },
      {
        name: 'Install npm Dependencies',
        number: 4,
        status: 'completed',
        conclusion: 'success',
        started_at: '2022-09-20T23:47:10.000Z',
        completed_at: '2022-09-20T23:47:19.000Z',
      },
      {
        name: 'Check Formatting',
        number: 5,
        status: 'completed',
        conclusion: 'success',
        started_at: '2022-09-20T23:47:19.000Z',
        completed_at: '2022-09-20T23:47:22.000Z',
      },
      {
        name: 'Check Linting',
        number: 6,
        status: 'completed',
        conclusion: 'success',
        started_at: '2022-09-20T23:47:22.000Z',
        completed_at: '2022-09-20T23:47:31.000Z',
      },
      {
        name: 'Run Unit Tests',
        number: 7,
        status: 'completed',
        conclusion: 'failure',
        started_at: '2022-09-20T23:47:31.000Z',
        completed_at: '2022-09-20T23:47:44.000Z',
      },
      {
        name: 'Run nest build',
        number: 8,
        status: 'completed',
        conclusion: 'skipped',
        started_at: '2022-09-20T23:47:44.000Z',
        completed_at: '2022-09-20T23:47:44.000Z',
      },
      {
        name: 'Post Cache dependencies',
        number: 15,
        status: 'completed',
        conclusion: 'skipped',
        started_at: '2022-09-20T23:47:44.000Z',
        completed_at: '2022-09-20T23:47:44.000Z',
      },
      {
        name: 'Post Checkout',
        number: 16,
        status: 'completed',
        conclusion: 'success',
        started_at: '2022-09-20T23:47:44.000Z',
        completed_at: '2022-09-20T23:47:44.000Z',
      },
      {
        name: 'Complete job',
        number: 17,
        status: 'completed',
        conclusion: 'success',
        started_at: '2022-09-20T23:47:44.000Z',
        completed_at: '2022-09-20T23:47:44.000Z',
      },
    ],
    labels: ['ubuntu-latest'],
    node_id: 'CR_kwDOHuI7KM8AAAAB-F53UQ',
    run_url:
      'https://api.github.com/repos/synapsestudios/blip/actions/runs/3094195533',
    head_sha: '79929305f218914704ca3954989aad31b56acc4c',
    html_url:
      'https://github.com/synapsestudios/blip/actions/runs/3094195533/jobs/5007326800',
    runner_id: 1,
    run_attempt: 1,
    runner_name: 'Hosted Agent',
    check_run_url:
      'https://api.github.com/repos/synapsestudios/blip/check-runs/8461907793',
    runner_group_id: 2,
    runner_group_name: 'GitHub Actions',
  },
});
