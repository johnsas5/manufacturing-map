// use LinesDown and LinesArr in conjunction with each other if needed

export const LinesArr: Array<string> = ["Line01", "Line02", "Line03", "Line04", "Line05", "Line06", "Line07", "Line08", "Line09"];

export const LinesDown = new Array<boolean>(LinesArr.length).fill(false);

export type DowntimeEntry = {
  // use Date object when referring to start and end times
  startTime: number,
  endTime: number | null,
  line: string,
  notes: string | null,
  editedBy: string | null,
};

export type onlineUser = {
  uid: string,
  displayName: string | null;
  online: boolean;
  workingOnLine: string | null;
}

export const LinesDownTracker = {
  line01: "isup",
  line02: "isup",
  line03: "isup",
  line04: "isup",
  line05: "isup",
  line06: "isup",
  line07: "isup",
  line08: "isup",
  line09: "isup",
}