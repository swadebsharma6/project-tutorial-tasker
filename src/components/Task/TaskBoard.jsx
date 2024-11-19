import { useState } from "react";
import SearchTask from "./SearchTask";
import TaskAction from "./TaskAction";
import TaskList from "./TaskList";
import AddTaskModal from "./AddTaskModal";

const TaskBoard = () => {
      const defaultTask ={
            'id': crypto.randomUUID(),
            'title': 'Learn React js',
            'description': 'I want to be a full stack web developer,, Best learning platform is lear with sumit',
            'tags': ['Web','JavaScript', 'React'],
            'priority': 'High',
            'isFavorite': true

      }
      const [tusks, setTusks] = useState([defaultTask]);
      const [showAddModal, setShowModal] = useState(false);

      const handleAddTask =(task)=>{
            console.log('btn is clicked', task)
      }

  return (
    <section className="mb-20" id="tasks">
      { showAddModal && <AddTaskModal onSave={handleAddTask}/> }
      <div className="container">
        <div className="p-2 flex justify-end">
          <SearchTask/>
        </div>

        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <TaskAction onAddClick={()=>setShowModal(true)}/>
          <TaskList tusks={tusks}/>
        </div>
      </div>
    </section>
  );
};

export default TaskBoard;
