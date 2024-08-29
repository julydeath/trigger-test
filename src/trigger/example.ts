import { logger, task, wait, schedules } from "@trigger.dev/sdk/v3";

export const firstScheduledTask = schedules.task({
  id: "first-scheduled-task",
  // every minute (UTC timezone)

  cron: {
    pattern: "* * * * *",
    timezone: "Asia/Calcutta",
  },
  run: async (payload, { ctx }) => {
    return {
      message: "Hi wokring",
    };
  },
});
