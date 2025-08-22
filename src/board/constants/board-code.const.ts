export const BoardCode = {
  NOTICE: 'notice', // 공지사항
  EVENT: 'event', // 이벤트
} as const;

export type BoardCode = (typeof BoardCode)[keyof typeof BoardCode];
