import Header from './components/Header';
import Tasks from './components/Tasks';
import { useState } from 'react';
import AddTask from './components/AddTask';
const App = () => {
  const [showAddTask, setshowAddTask] = useState(true);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctor's Appointment",
      day: 'Feb 5th at 2:30pm',
      reminder: true,
    },
    {
      id: 2,
      text: 'Football',
      day: 'Feb 6th at 2:30pm',
      reminder: true,
    },
    {
      id: 3,
      text: 'Dentist',
      day: 'Feb 7th at 2:30pm',
      reminder: true,
    },
  ]);

  const addTask = task => {
    const id = Math.floor(Math.random() * 100) + 1;
    console.log(id);
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };
  const deletetask = id => {
    setTasks(tasks.filter(task => task.id !== id));
  };
  const toggleReminder = id => {
    setTasks(
      tasks.map(task =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };
  return (
    <div className='container'>
      <Header
        onAdd={() => {
          setshowAddTask(!showAddTask);
        }}
        showAdd={showAddTask}
      />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deletetask} onToggle={toggleReminder} />
      ) : (
        'Nothing to show MF'
      )}
    </div>
  );
};

export default App;
