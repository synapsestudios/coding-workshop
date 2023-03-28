import { randNumber } from '@ngneat/falso';
import { WorkflowJobEvent, WorkflowRunEvent } from '@octokit/webhooks-types';
import { addSeconds } from 'date-fns';
import { isWorkflowRunEvent } from '../../../../pipelines/domain/github-workflow-run/githubWebhookEvents';
import { getOrganization } from './organization';
import { getRepository } from './repository';
import { getSender } from './sender';
import { withoutMilliseconds } from './withoutMilliseconds';

export const constructQueuedEvent = (
  e: WorkflowRunEvent | WorkflowJobEvent,
) => {
  const seedTime = isWorkflowRunEvent(e)
    ? e.workflow_run.updated_at
    : e.workflow_job.completed_at;

  if (!seedTime)
    throw new Error(
      'Unable to determine seed time from event. Probably because the job is incomplete',
    );

  const startedAt = addSeconds(
    new Date(seedTime),
    randNumber({ min: 1, max: 2 }),
  );
  return getWorkflowJobQueuedEvent({
    started_at: withoutMilliseconds(startedAt.toISOString()),
    run_id: isWorkflowRunEvent(e) ? e.workflow_run.id : e.workflow_job.run_id,
  });
};

export const getWorkflowJobQueuedEvent = (overrides?: {
  run_id?: number;
  started_at?: string;
}) => ({
  action: 'queued',
  sender: getSender(),
  repository: getRepository(),
  installation: {
    id: 28113401,
    node_id: 'MDIzOkludGVncmF0aW9uSW5zdGFsbGF0aW9uMjgxMTM0MDE=',
  },
  organization: getOrganization(),
  workflow_job: {
    id: randNumber({ min: 10000, max: 99999999999 }),
    started_at: overrides?.started_at || '2022-08-18T21:54:18Z',
    completed_at: null,
    workflow_name: 'workflow name',
    url: 'https://api.github.com/repos/synapsestudios/cs3/actions/jobs/7908086315',
    name: 'Commit Stage',
    steps: [],
    labels: ['ubuntu-latest'],
    run_id: overrides?.run_id || randNumber({ min: 10000, max: 9999999 }),
    status: 'queued',
    node_id: 'CR_kwDOHuI7KM8AAAAB11vSKw',
    run_url:
      'https://api.github.com/repos/synapsestudios/cs3/actions/runs/2885648578',
    head_sha: 'e3cee5b266a740f62ad31a1e11f0f60cab3cfc2f',
    html_url:
      'https://github.com/synapsestudios/cs3/runs/7908086315?check_suite_focus=true',
    runner_id: null,
    conclusion: null,
    run_attempt: 1,
    runner_name: null,
    check_run_url:
      'https://api.github.com/repos/synapsestudios/cs3/check-runs/7908086315',
    runner_group_id: null,
    runner_group_name: null,
  },
});
