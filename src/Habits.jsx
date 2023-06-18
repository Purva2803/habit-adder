import React, { useContext } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { Button } from '@chakra-ui/react';
import { HabitContext } from './habitcontext';
import { AddHabitModal } from './AddHabitModal';
import { useState } from 'react';
import { EditHabitModal } from './EditHabitModal';

export const Habits = () => {
  const { habits, deleteHabit,archiveHabit } = useContext(HabitContext);
  const location = useLocation();
  const { habitId } = useParams();
  const [isEditModalOpen, setEditModalOpen] = useState(false);
    const toggleEditModal = () => setEditModalOpen(!isEditModalOpen);

    const handleEdit = () => {
        toggleEditModal();
    };
  const habit = habits.find((habit) => habit.id == habitId);

  

  const handleDelete = () => {
    deleteHabit(habitId);
  
    if (location.state && location.state.from) {
      location.state.from.goBack();
    } else {
      
      history.push('/');
    }
  };

  const handleArchive = () => {
    archiveHabit(habitId);
  
    if (location.state && location.state.from) {
      location.state.from.goBack();
    } else {
      
      history.push('/');
    }
  };

  if (!habit) {
    return <div>Habit not found.</div>;
  }

  return (
    <div>
      <h2>{habit.name}</h2>
      <p>Repeat: {habit.repeat}</p>
      <p>Goal: {habit.goal}</p>
      <p>Time: {habit.time}</p>
      <p>Start Date: {habit.startdate}</p>

      <Button onClick={handleEdit}>Edit</Button>
      <Button onClick={handleDelete}>Delete</Button>
      <Button onClick={handleArchive}>Archive</Button>
      {isEditModalOpen && (
        < EditHabitModal
         
          habitId={habitId}
          onClose={toggleEditModal}
        />
      )}
    </div>
  );
};
