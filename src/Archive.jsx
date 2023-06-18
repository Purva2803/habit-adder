import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { HabitContext } from './habitcontext';

export const Archived = () => {
  const { habits } = useContext(HabitContext);

  // Filter archived habits
  const archivedHabits = habits.filter((habit) => habit.archived);

  return (
    <div>
      <h1>Archived</h1>
      <ul>
        {archivedHabits.map((habit) => (
          <li key={habit.id}>
            <Link to={`/habit/${habit.id}`}>{habit.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
