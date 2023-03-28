import { randNumber } from '@ngneat/falso';
import { WorkflowJobEvent } from '@octokit/webhooks-types';
import { addMinutes } from 'date-fns';
import { getOrganization } from './organization';
import { getRepository } from './repository';
import { getSender } from './sender';
import { withoutMilliseconds } from './withoutMilliseconds';

export const constructSucceededEvent = (e: WorkflowJobEvent) => {
  const seedTime = e.workflow_job.started_at;

  const completedAt = addMinutes(
    new Date(seedTime),
    randNumber({ min: 4, max: 15 }),
  );
  return getWorkflowJobSucceededEvent({
    started_at: e.workflow_job.started_at,
    completed_at: withoutMilliseconds(completedAt.toISOString()),
    run_id: e.workflow_job.run_id,
    job_id: e.workflow_job.id,
  });
};

export const getWorkflowJobSucceededEvent = (overrides?: {
  run_id?: number;
  job_id?: number;
  started_at?: string;
  completed_at?: string;
}) => ({
  action: 'completed',
  workflow_job: {
    id: overrides?.job_id || randNumber({ min: 10000, max: 9999999 }),
    run_id: overrides?.run_id || randNumber({ min: 10000, max: 9999999 }),
    started_at: overrides?.started_at || '2022-09-21T16:02:52Z',
    completed_at: overrides?.completed_at || '2022-09-21T16:04:11Z',
    workflow_name: 'Workflow Name',
    url: 'https://api.github.com/repos/synapsestudios/blip/actions/jobs/8476556932',
    name: 'Commit Stage / Commit Stage Checks',
    steps: [
      {
        name: 'Set up job',
        number: 1,
        status: 'completed',
        conclusion: 'success',
        started_at: '2022-09-21T16:02:52.000Z',
        completed_at: '2022-09-21T16:02:55.000Z',
      },
      {
        name: 'Checkout',
        number: 2,
        status: 'completed',
        conclusion: 'success',
        started_at: '2022-09-21T16:02:55.000Z',
        completed_at: '2022-09-21T16:02:57.000Z',
      },
      {
        name: 'Cache dependencies',
        number: 3,
        status: 'completed',
        conclusion: 'success',
        started_at: '2022-09-21T16:02:57.000Z',
        completed_at: '2022-09-21T16:02:59.000Z',
      },
      {
        name: 'Install npm Dependencies',
        number: 4,
        status: 'completed',
        conclusion: 'success',
        started_at: '2022-09-21T16:03:00.000Z',
        completed_at: '2022-09-21T16:03:13.000Z',
      },
      {
        name: 'Check Formatting',
        number: 5,
        status: 'completed',
        conclusion: 'success',
        started_at: '2022-09-21T16:03:13.000Z',
        completed_at: '2022-09-21T16:03:17.000Z',
      },
      {
        name: 'Check Linting',
        number: 6,
        status: 'completed',
        conclusion: 'success',
        started_at: '2022-09-21T16:03:17.000Z',
        completed_at: '2022-09-21T16:03:28.000Z',
      },
      {
        name: 'Run Unit Tests',
        number: 7,
        status: 'completed',
        conclusion: 'success',
        started_at: '2022-09-21T16:03:28.000Z',
        completed_at: '2022-09-21T16:03:45.000Z',
      },
      {
        name: 'Run nest build',
        number: 8,
        status: 'completed',
        conclusion: 'success',
        started_at: '2022-09-21T16:03:45.000Z',
        completed_at: '2022-09-21T16:04:09.000Z',
      },
      {
        name: 'Post Cache dependencies',
        number: 15,
        status: 'completed',
        conclusion: 'success',
        started_at: '2022-09-21T16:04:10.000Z',
        completed_at: '2022-09-21T16:04:10.000Z',
      },
      {
        name: 'Post Checkout',
        number: 16,
        status: 'completed',
        conclusion: 'success',
        started_at: '2022-09-21T16:04:10.000Z',
        completed_at: '2022-09-21T16:04:10.000Z',
      },
      {
        name: 'Complete job',
        number: 17,
        status: 'completed',
        conclusion: 'success',
        started_at: '2022-09-21T16:04:10.000Z',
        completed_at: '2022-09-21T16:04:10.000Z',
      },
    ],
    labels: ['ubuntu-latest'],
    status: 'completed',
    node_id: 'CR_kwDOHuI7KM8AAAAB-T3-hA',
    run_url:
      'https://api.github.com/repos/synapsestudios/blip/actions/runs/3099290911',
    head_sha: 'f331186b2b5c1c16704b628d5d48ee021cc57056',
    html_url:
      'https://github.com/synapsestudios/blip/actions/runs/3099290911/jobs/5018317869',
    runner_id: 1,
    conclusion: 'success',
    run_attempt: 1,
    runner_name: 'Hosted Agent',
    check_run_url:
      'https://api.github.com/repos/synapsestudios/blip/check-runs/8476556932',
    runner_group_id: 2,
    runner_group_name: 'GitHub Actions',
  },
  sender: getSender(),
  repository: getRepository(),
  organization: getOrganization(),
  installation: {
    id: 28113401,
    node_id: 'MDIzOkludGVncmF0aW9uSW5zdGFsbGF0aW9uMjgxMTM0MDE=',
  },
});
