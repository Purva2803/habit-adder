import React, { createContext, useState } from 'react';
import { habitsdata } from './habitsdata';
import { v4 as uuidv4 } from 'uuid';


export const HabitContext = createContext();

export const HabitProvider = ({ children }) => {
  const [habits, setHabits] = useState(habitsdata);

  const addHabit = (newHabit) => {
    const updatedHabit = { ...newHabit, id: uuidv4(), archived: false};
    setHabits([...habits, updatedHabit]);
  };
  const deleteHabit = (id) => {
    setHabits(habits.filter((habit) => habit.id !== id));
    };
    const archiveHabit = (id) => {

        setHabits((prevHabits) =>
          prevHabits.map((habit) =>
            habit.id === id ? { ...habit, archived: true } : habit
          )
        
        );
        alert("Habit Archived");
      };
      
  return (
    <HabitContext.Provider value={{ habits, addHabit ,deleteHabit,archiveHabit}}>
      {children}
    </HabitContext.Provider>
  );
};

