import { instance } from './base';

export const getEpics = (): Promise<any[]> => {
  return instance.get('/api/jira/epics/search');
};
