import React from "react";
import { useParams, Link } from "react-router-dom";

const tasks = [
    { id: 1, title: "Finish project setup", description: "Set up Vite and React Router" },
    { id: 2, title: "Build TaskList component", description: "Display all tasks with links" },
    { id: 3, title: "Implement TaskDetail", description: "Show task details using useParams" },
    { id: 4, title: "Complete project proposal", description: "Draft and finalize the project proposal document, including scope, objectives, and deliverables."},
    { id: 5, title: "Schedule team meeting", description: "Find a suitable time for a team meeting to discuss project progress and assign new tasks."},
    { id: 6, title: "Research new technologies", description: "Explore emerging technologies relevant to the project and evaluate their potential benefits."},
    { id: 7, title: "Update documentation", description: "Review and update existing project documentation to reflect recent changes and additions."},
    { id: 8, title: "Prepare presentation for stakeholders", description: "Create a compelling presentation to inform stakeholders about the project's status and future plans."}
    ];

    function TaskDetail () {
        const {taskid} = useParams();
        const task = tasks.find((t) => t.id === Number(taskid));
        

  if (!task) {
    return (
      <div style={{ padding: "20px" }}>
        <h2>Task Not Found </h2>
        <Link to="/">Go Back to Task List</Link>
      </div>
    );
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>{task.title}</h1>
      <p>{task.description}</p>
      <Link to="/">← Back to Task List</Link>
    </div>
  );
}
    


   export default TaskDetail;