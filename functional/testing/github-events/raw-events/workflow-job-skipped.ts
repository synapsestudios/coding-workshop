import { randNumber } from '@ngneat/falso';
import { WorkflowJobEvent, WorkflowRunEvent } from '@octokit/webhooks-types';
import { addSeconds } from 'date-fns';
import { isWorkflowRunEvent } from '../../../../pipelines/domain/github-workflow-run/githubWebhookEvents';
import { getOrganization } from './organization';
import { getRepository } from './repository';
import { getSender } from './sender';
import { withoutMilliseconds } from './withoutMilliseconds';

export const constructSkippedEvent = (
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
  return getWorkflowJobSkipped({
    started_at: withoutMilliseconds(startedAt.toISOString()),
    run_id: isWorkflowRunEvent(e) ? e.workflow_run.id : e.workflow_job.run_id,
  });
};

/**
 * Workflow jobs can be skipped when it's determined that they shouldn't run. For example,
 * jobs might be set up so that they only run after a previous job has completed. If the previous
 * job were to fail the next jobs would be send a "workflow job skipped" event
 */
export const getWorkflowJobSkipped = (overrides?: {
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
    started_at: overrides?.started_at || '2022-09-22T04:36:08Z',
    completed_at: overrides?.started_at || '2022-09-22T04:36:08Z',
    status: 'completed',
    conclusion: 'skipped',
    workflow_name: 'Workflow Name',
    name: 'Acceptance Stage',
    url: 'https://api.github.com/repos/synapsestudios/blip/actions/jobs/8486527424',
    steps: [],
    labels: [],
    node_id: 'CR_kwDOHuI7KM8AAAAB-dYhwA',
    run_url:
      'https://api.github.com/repos/synapsestudios/blip/actions/runs/3102861636',
    head_sha: '6a952cf06b99ebc9b2f8552c9f395f356aa72850',
    html_url:
      'https://github.com/synapsestudios/blip/actions/runs/3102861636/jobs/5025611686',
    runner_id: null,
    run_attempt: 1,
    runner_name: null,
    check_run_url:
      'https://api.github.com/repos/synapsestudios/blip/check-runs/8486527424',
    runner_group_id: null,
    runner_group_name: null,
  },
});
