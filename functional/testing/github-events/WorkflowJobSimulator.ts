import { randNumber } from '@ngneat/falso';
import { WorkflowJobEvent, WorkflowRunEvent } from '@octokit/webhooks-types';
import { addSeconds } from 'date-fns';
import { withoutMilliseconds } from './raw-events/withoutMilliseconds';
import { constructInProgressEvent } from './raw-events/workflow-job-in-progress';
import { constructInProgressEvent as constructInProgressRunEvent } from './raw-events/workflow-run-in-progress';
import { constructQueuedEvent } from './raw-events/workflow-job-queued';
import { constructSucceededEvent } from './raw-events/workflow-job-succeeded';
import { constructFailedEvent } from './raw-events/workflow-job-failed';
import { constructSkippedEvent } from './raw-events/workflow-job-skipped';

export const WorkflowJobSimulator = {
  generateSuccessfulSequence(
    seedEvent: WorkflowRunEvent | WorkflowJobEvent,
    run: WorkflowRunEvent,
  ): [WorkflowJobEvent, WorkflowJobEvent, WorkflowRunEvent, WorkflowJobEvent] {
    const queued = constructQueuedEvent(seedEvent) as WorkflowJobEvent;
    const inProgress = constructInProgressEvent(queued) as WorkflowJobEvent;

    const runSeed = withoutMilliseconds(
      addSeconds(
        new Date(inProgress.workflow_job.started_at),
        randNumber({ min: 1, max: 2 }),
      ).toISOString(),
    );
    const inProgressRun = constructInProgressRunEvent(
      run,
      runSeed,
    ) as WorkflowRunEvent;

    const completed = constructSucceededEvent(inProgress) as WorkflowJobEvent;
    return [queued, inProgress, inProgressRun, completed];
  },

  generateFailedSequence(
    seedEvent: WorkflowRunEvent | WorkflowJobEvent,
    run: WorkflowRunEvent,
  ): [WorkflowJobEvent, WorkflowJobEvent, WorkflowRunEvent, WorkflowJobEvent] {
    const queued = constructQueuedEvent(seedEvent) as WorkflowJobEvent;
    const inProgress = constructInProgressEvent(queued) as WorkflowJobEvent;

    const runSeed = withoutMilliseconds(
      addSeconds(
        new Date(inProgress.workflow_job.started_at),
        randNumber({ min: 1, max: 2 }),
      ).toISOString(),
    );
    const inProgressRun = constructInProgressRunEvent(
      run,
      runSeed,
    ) as WorkflowRunEvent;

    const completed = constructFailedEvent(inProgress) as WorkflowJobEvent;
    return [queued, inProgress, inProgressRun, completed];
  },

  generateSkippedSequence(
    seedEvent: WorkflowRunEvent | WorkflowJobEvent,
  ): [WorkflowJobEvent] {
    const skipped = constructSkippedEvent(seedEvent) as WorkflowJobEvent;
    return [skipped];
  },
};
