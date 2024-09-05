import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Async thunk to fetch phases from the server
export const fetchPhases = createAsyncThunk("kanban/fetchPhases", async () => {
  const response = await fetch("http://localhost:4000/phases");
  const data = await response.json();
  return data;
});

const kanbanSlice = createSlice({
  name: "kanban",
  initialState: {
    phases: [],
    searchQuery: "",
    selectedTask: {},
    searchTasks: [],
    isCreateTaskModalOpen: false,
    isViewTaskModalOpen: false,
    status: "idle",
  },
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    setSelectedTask: (state, action) => {
      state.selectedTask = action.payload;
    },
    clearSelectedTask: (state) => {
      state.selectedTask = {};
    },
    setTask: (state, action) => {
      const newTask = action.payload;
      const updatedPhases = state.phases.map((phase, index) =>
        phase.title === "Backlog" || index === 0
          ? {
              ...phase,
              tasks: [newTask, ...phase.tasks],
            }
          : phase,
      );
      state.phases = updatedPhases;
      state.searchTasks = updatedPhases;
    },
    moveTask: (state, action) => {
      const { taskId, sourceIndex, destinationIndex } = action.payload;

      console.log("Before moveTask:", JSON.parse(JSON.stringify(state.phases)));
      console.log("Moving task:", { taskId, sourceIndex, destinationIndex });

      // Validate indexes
      if (
        sourceIndex < 0 ||
        destinationIndex < 0 ||
        sourceIndex >= state.phases.length ||
        destinationIndex >= state.phases.length
      ) {
        console.error("Invalid source or destination index", {
          sourceIndex,
          destinationIndex,
        });
        return;
      }

      const sourcePhase = state.phases[sourceIndex];
      const destinationPhase = state.phases[destinationIndex];

      if (!sourcePhase || !destinationPhase) {
        console.error("Source or destination phase is undefined", {
          sourcePhase,
          destinationPhase,
        });
        return;
      }

      console.log(
        "Source Phase Tasks:",
        JSON.parse(JSON.stringify(sourcePhase.tasks)),
      );

      const taskIndex = sourcePhase.tasks.findIndex((task) => {
        console.log(`Comparing taskId: ${taskId} with task.id: ${task.id}`);
        return String(task.id) === String(taskId);
      });

      if (taskIndex === -1) {
        console.error("Task not found in source phase", {
          taskId,
          sourceIndex,
          tasks: JSON.parse(JSON.stringify(sourcePhase.tasks)),
        });
        return;
      }

      const [movedTask] = sourcePhase.tasks.splice(taskIndex, 1);
      destinationPhase.tasks.push(movedTask);

      console.log("After moveTask:", JSON.parse(JSON.stringify(state.phases)));
    },
    toggleCreateTaskModal: (state) => {
      state.isCreateTaskModalOpen = !state.isCreateTaskModalOpen;
    },
    toggleViewTaskModal: (state) => {
      state.isViewTaskModalOpen = !state.isViewTaskModalOpen;
      console.log(state.isViewTaskModalOpen);
    },
    updatePhaseTitle: (state, action) => {
      const { index, newTitle } = action.payload;
      const phase = state.phases[index];
      if (phase) {
        phase.title = newTitle;

        state.searchTasks = [...state.phases];
      }
    },
    addColumn: (state, action) => {
      const { title, color } = action.payload;
      if (title.trim()) {
        state.phases.push({
          title,
          color: color.replace("bg-", "").replace("-400", ""),
          tasks: [],
        });
        state.searchTasks = [...state.phases];
      } else {
        console.error("Column title is required");
      }
    },
    filterSearchTasks: (state) => {
      const searchQuery = state.searchQuery.toLowerCase();
      state.searchTasks =
        searchQuery.length > 0
          ? state.phases.map((phase) => ({
              ...phase,
              tasks: phase.tasks.filter((task) =>
                `${task.title} ${task.description} ${task.creator} ${task.priority}`
                  .toLowerCase()
                  .includes(searchQuery),
              ),
            }))
          : state.phases;
    },
    deleteTask: (state, action) => {
      const { taskId } = action.payload;
      state.phases = state.phases.map((phase) => ({
        ...phase,
        tasks: phase.tasks.filter((task) => task.id !== taskId),
      }));
    },
    deleteColumn: (state, action) => {
      const { index } = action.payload;
      state.phases = state.phases.filter((_, i) => i !== index);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPhases.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPhases.fulfilled, (state, action) => {
        state.status = "succeeded";
        console.log(state.status, action);
        state.phases = action.payload;
        state.searchTasks = action.payload;
      })
      .addCase(fetchPhases.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const {
  setSearchQuery,
  setSelectedTask,
  toggleCreateTaskModal,
  updatePhases,
  filterSearchTasks,
  updatePhaseTitle,
  addColumn,
  clearSelectedTask,
  setTask,
  moveTask,
  deleteTask,
  deleteColumn,
  toggleViewTaskModal,
} = kanbanSlice.actions;

export default kanbanSlice.reducer;
