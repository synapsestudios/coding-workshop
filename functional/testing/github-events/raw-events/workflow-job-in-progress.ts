import { randNumber } from '@ngneat/falso';
import { WorkflowJobEvent, WorkflowRunEvent } from '@octokit/webhooks-types';
import { addSeconds } from 'date-fns';
import {
  isWorkflowJobEvent,
  isWorkflowRunEvent,
} from '../../../../pipelines/domain/github-workflow-run/githubWebhookEvents';
import { getOrganization } from './organization';
import { getRepository } from './repository';
import { getSender } from './sender';
import { withoutMilliseconds } from './withoutMilliseconds';

export const constructInProgressEvent = (
  e: WorkflowRunEvent | WorkflowJobEvent,
) => {
  const seedTime = isWorkflowRunEvent(e)
    ? e.workflow_run.updated_at
    : e.workflow_job.started_at;

  if (!seedTime)
    throw new Error(
      'Unable to determine seed time from event. Probably because the job is incomplete',
    );

  const startedAt = addSeconds(
    new Date(seedTime),
    randNumber({ min: 4, max: 15 }),
  );
  return getWorkflowJobInProgressEvent({
    started_at: withoutMilliseconds(startedAt.toISOString()),
    run_id: isWorkflowRunEvent(e) ? e.workflow_run.id : e.workflow_job.run_id,
    workflow_job_id: isWorkflowJobEvent(e) ? e.workflow_job.id : undefined,
  });
};

export const getWorkflowJobInProgressEvent = (overrides?: {
  workflow_job_id?: number;
  run_id?: number;
  started_at?: string;
}) => ({
  action: 'in_progress',
  sender: getSender(),
  repository: getRepository(),
  installation: {
    id: 28113401,
    node_id: 'MDIzOkludGVncmF0aW9uSW5zdGFsbGF0aW9uMjgxMTM0MDE=',
  },
  organization: getOrganization(),
  workflow_job: {
    id: overrides?.workflow_job_id || randNumber({ min: 10000, max: 9999999 }),
    run_id: overrides?.run_id || randNumber({ min: 10000, max: 9999999 }),
    started_at: overrides?.started_at || '2022-10-07T21:20:03Z',
    completed_at: null,
    workflow_name: 'Workflow Name',
    url: 'https://api.github.com/repos/synapsestudios/blip/actions/jobs/8774114091',
    name: 'Build Stage',
    steps: [
      {
        name: 'Set up job',
        number: 1,
        status: 'completed',
        conclusion: 'success',
        started_at: '2022-10-07T21:20:02.000Z',
        completed_at: '2022-10-07T21:20:04.000Z',
      },
      {
        name: 'Checkout',
        number: 2,
        status: 'in_progress',
        conclusion: null,
        started_at: '2022-10-07T21:20:04.000Z',
        completed_at: null,
      },
      {
        name: 'Set up Docker Buildx',
        number: 3,
        status: 'queued',
        conclusion: null,
        started_at: null,
        completed_at: null,
      },
      {
        name: 'Build Image',
        number: 4,
        status: 'queued',
        conclusion: null,
        started_at: null,
        completed_at: null,
      },
      {
        name: 'Upload image',
        number: 5,
        status: 'queued',
        conclusion: null,
        started_at: null,
        completed_at: null,
      },
      {
        name: 'Post Checkout',
        number: 10,
        status: 'queued',
        conclusion: null,
        started_at: null,
        completed_at: null,
      },
    ],
    labels: ['ubuntu-latest'],
    status: 'in_progress',
    node_id: 'CR_kwDOHuI7KM8AAAACCvpbKw',
    run_url:
      'https://api.github.com/repos/synapsestudios/blip/actions/runs/3207743670',
    head_sha: '5ad1c96500a4f877ca43b4198bc2746da8ae1d9f',
    html_url:
      'https://github.com/synapsestudios/blip/actions/runs/3207743670/jobs/5242953473',
    runner_id: 1,
    conclusion: null,
    run_attempt: 1,
    runner_name: 'Hosted Agent',
    check_run_url:
      'https://api.github.com/repos/synapsestudios/blip/check-runs/8774114091',
    runner_group_id: 2,
    runner_group_name: 'GitHub Actions',
  },
});
