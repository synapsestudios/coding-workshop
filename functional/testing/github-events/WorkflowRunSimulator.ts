import { randNumber } from '@ngneat/falso';
import { WorkflowJobEvent, WorkflowRunEvent } from '@octokit/webhooks-types';
import { addSeconds } from 'date-fns';
import { isWorkflowRunEvent } from '../../../pipelines/domain/github-workflow-run/githubWebhookEvents';
import { WorkflowRunSequence } from '../../../pipelines/domain/pipeline-run/reduceGithubEvents';
import { withoutMilliseconds } from './raw-events/withoutMilliseconds';
import { constructFailedEvent } from './raw-events/workflow-run-failed';
import { getWorkflowRunQueuedEvent } from './raw-events/workflow-run-queued';
import { constructSuccessEvent } from './raw-events/workflow-run-success';
import { WorkflowJobSimulator } from './WorkflowJobSimulator';

export const WorkflowRunSimulator = {
  generateSuccessfulSequence(): WorkflowRunSequence {
    const queued = getWorkflowRunQueuedEvent() as WorkflowRunEvent;
    const job1 = WorkflowJobSimulator.generateSuccessfulSequence(
      queued,
      queued,
    );
    const job2 = WorkflowJobSimulator.generateSuccessfulSequence(
      job1[3],
      queued,
    );
    const job3 = WorkflowJobSimulator.generateSuccessfulSequence(
      job2[3],
      queued,
    );
    const runSeed = withoutMilliseconds(
      addSeconds(
        new Date(job3[3].workflow_job.completed_at as string),
        randNumber({ min: 1, max: 2 }),
      ).toISOString(),
    );
    const concluded = constructSuccessEvent(
      queued,
      runSeed,
    ) as WorkflowRunEvent;
    return [queued, ...job1, ...job2, ...job3, concluded];
  },

  startRun(): WorkflowRunSequence {
    return [this.generateSuccessfulSequence()[0] as WorkflowRunEvent];
  },

  completeRunSuccessfully(sequence: WorkflowRunSequence): WorkflowRunSequence {
    const queued = sequence[0] as WorkflowRunEvent;
    const seed = sequence[sequence.length - 1] as WorkflowJobEvent;
    const runSeed = withoutMilliseconds(
      addSeconds(
        new Date(seed.workflow_job.completed_at as string),
        randNumber({ min: 1, max: 2 }),
      ).toISOString(),
    );
    const concluded = constructSuccessEvent(
      queued,
      runSeed,
    ) as WorkflowRunEvent;

    return [...sequence, concluded];
  },

  completeRunUnsuccessfully(
    sequence: WorkflowRunSequence,
  ): WorkflowRunSequence {
    const queued = sequence[0] as WorkflowRunEvent;
    const seed = sequence[sequence.length - 1] as WorkflowJobEvent;
    const runSeed = withoutMilliseconds(
      addSeconds(
        new Date(seed.workflow_job.completed_at as string),
        randNumber({ min: 1, max: 2 }),
      ).toISOString(),
    );
    const concluded = constructFailedEvent(queued, runSeed) as WorkflowRunEvent;

    return [...sequence, concluded];
  },

  queuedJob(sequence: WorkflowRunSequence): WorkflowRunSequence {
    if (!isWorkflowRunEvent(sequence[0]))
      throw new Error('first event in sequence expected to be run event');

    const job = WorkflowJobSimulator.generateSuccessfulSequence(
      sequence[sequence.length - 1],
      sequence[0] as WorkflowRunEvent,
    );
    return [...sequence, job[0]];
  },

  inProcessJob(sequence: WorkflowRunSequence): WorkflowRunSequence {
    const job = WorkflowJobSimulator.generateSuccessfulSequence(
      sequence[sequence.length - 1],
      sequence[0] as WorkflowRunEvent,
    );
    return [...sequence, job[0], job[1]];
  },

  successfulJob(sequence: WorkflowRunSequence): WorkflowRunSequence {
    const job = WorkflowJobSimulator.generateSuccessfulSequence(
      sequence[sequence.length - 1],
      sequence[0] as WorkflowRunEvent,
    );
    return [...sequence, ...job];
  },

  failedJob(sequence: WorkflowRunSequence): WorkflowRunSequence {
    const job = WorkflowJobSimulator.generateFailedSequence(
      sequence[sequence.length - 1],
      sequence[0] as WorkflowRunEvent,
    );
    return [...sequence, ...job];
  },

  skippedJob(sequence: WorkflowRunSequence): WorkflowRunSequence {
    const job = WorkflowJobSimulator.generateSkippedSequence(
      sequence[sequence.length - 1],
    );
    return [...sequence, ...job];
  },
};
