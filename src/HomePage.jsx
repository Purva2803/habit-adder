import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { HabitContext } from './habitcontext';
import { habitsdata } from './habitsdata';
import { AddHabitModal } from './AddHabitModal';
// ... import other components and styles

export const HomePage = () => {
  const { habits, addHabit } = useContext(HabitContext);

  return (
    <div>
      <h1 className='homepage'>welcome to habbit </h1>
      <ul>
      {habits
  .filter((habit) => !habit.archived) // Filter out archived habits
  .map((habit) => (
    <li key={habit.id}>
      <Link to={`/habit/${habit.id}`}>{habit.name}</Link>
    </li>
  ))}

        <li>
          <AddHabitModal addHabit={addHabit} />
        </li>
      </ul>
    </div>
  );
};
