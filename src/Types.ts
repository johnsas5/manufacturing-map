// use LinesDown and LinesArr in conjunction with each other if needed
export const LinesDown: Array<boolean> = [];
export const LinesArr: Array<string> = ["Line01", "Line02", "Line03", "Line04", "Line05", "Line06", "Line07", "Line08", "Line09"];

export type DowntimeEntry = {
  // use Date object when referring to start and end times
  startTime: number,
  endTime: number | null,
  line: string,
  notes: string | null,
  editedBy: string | null,
};
