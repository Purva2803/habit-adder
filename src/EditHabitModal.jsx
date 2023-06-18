import React, { useContext, useState } from 'react';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Button, FormControl, FormLabel, Input, Select } from '@chakra-ui/react';
import { HabitContext } from './habitcontext';

export const EditHabitModal = ({ habitId, onClose }) => {
  const { habits, editHabit } = useContext(HabitContext);
  const habit = habits.find((habit) => habit.id === habitId);
  const [habitData, setHabitData] = useState({
    name: habit.name,
    repeat: habit.repeat,
    goal: habit.goal,
    time: habit.time,
    startdate: habit.startdate
  });

  const handleInputChange = (e) => {
    setHabitData({ ...habitData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    editHabit(habitId, habitData);
    onClose();
  };

  return (
    <Modal isOpen={true} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Edit Habit</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input
              placeholder="Name"
              name="name"
              value={habitData.name}
              onChange={handleInputChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Repeat</FormLabel>
            <Select
              placeholder="Repeat"
              name="repeat"
              value={habitData.repeat}
              onChange={handleInputChange}
            >
              <option value="Daily">Daily</option>
              <option value="Weekly">Weekly</option>
              <option value="Monthly">Monthly</option>
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel>Goal</FormLabel>
            <Input
              placeholder="Goal"
              name="goal"
              value={habitData.goal}
              onChange={handleInputChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Time</FormLabel>
            <Input
              placeholder="Time"
              name="time"
              value={habitData.time}
              onChange={handleInputChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Start Date</FormLabel>
            <Input
              placeholder="Start Date"
              name="startdate"
              value={habitData.startdate}
              onChange={handleInputChange}
            />
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
          <Button variant="ghost" onClick={handleSave}>
            Save
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
