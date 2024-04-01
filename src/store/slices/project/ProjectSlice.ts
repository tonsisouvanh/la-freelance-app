import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"; // Replace with your API client
import { ProjectState } from "./projectType";
import { ProjectType } from "../../../type";

//TODO: continue working on project slice

const initialState: ProjectState = {
  projects: [],
  isLoading: false,
  error: null,
};

export const fetchProjects = createAsyncThunk(
  "projects/fetchProjects",
  async () => {
    const response = await axios.get("/api/projects");
    return response.data;
  }
);

export const createProject = createAsyncThunk(
  "projects/createProject",
  async (project) => {
    const response = await axios.post("/api/projects", project);
    return response.data;
  }
);

export const updateProject = createAsyncThunk(
  "projects/updateProject",
  async (project: ProjectType) => {
    const response = await axios.put(`/api/projects/${project.id}`, project);
    return response.data;
  }
);

export const deleteProject = createAsyncThunk(
  "projects/deleteProject",
  async (projectId: number) => {
    await axios.delete(`/api/projects/${projectId}`);
    return projectId; // Return the deleted project ID for potential UI updates
  }
);

const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {}, // No synchronous reducers in this example
  extraReducers: (builder) => {
    builder
      .addCase(fetchProjects.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchProjects.fulfilled, (state, action) => {
        state.isLoading = false;
        state.projects = action.payload;
      })
      .addCase(fetchProjects.rejected, (state, action) => {
        state.isLoading = false;
        state.error =
          (action.error.message as string) ||
          "An error occurred during sign-in.";
      })
      .addCase(createProject.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createProject.fulfilled, (state, action) => {
        state.isLoading = false;
        state.projects.push(action.payload);
      })
      .addCase(createProject.rejected, (state, action) => {
        state.isLoading = false;
        state.error =
          (action.error.message as string) ||
          "An error occurred during sign-in.";
      })
      .addCase(updateProject.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateProject.fulfilled, (state, action) => {
        state.isLoading = false;
        const projectIndex = state.projects.findIndex(
          (project) => project.id === action.payload.id
        );
        state.projects[projectIndex] = action.payload;
      })
      .addCase(updateProject.rejected, (state, action) => {
        state.isLoading = false;
        state.error =
          (action.error.message as string) ||
          "An error occurred during sign-in.";
      })
      .addCase(deleteProject.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteProject.fulfilled, (state, action) => {
        state.isLoading = false;
        state.projects = state.projects.filter(
          (project) => project.id !== action.payload
        );
      })
      .addCase(deleteProject.rejected, (state, action) => {
        state.isLoading = false;
        state.error =
          (action.error.message as string) ||
          "An error occurred during sign-in.";
      });
  },
});

export default projectsSlice.reducer;
