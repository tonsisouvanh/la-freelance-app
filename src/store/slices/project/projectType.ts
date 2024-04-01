import { ProjectType } from "../../../type";

export interface ProjectState {
  projects: ProjectType[];
  isLoading: boolean;
  error: string | null;
}
