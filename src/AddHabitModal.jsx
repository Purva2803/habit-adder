import { Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Select, useDisclosure } from '@chakra-ui/react';
import { HabitContext } from './habitcontext';
import React, { useContext, useState } from 'react';
import './App.css'

export const AddHabitModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { addHabit } = useContext(HabitContext);
  const [habitData, setHabitData] = useState({
    
    name: '',
    repeat: '',
    goal: '',
    time: '',
    startdate: ''
  });

  const handleInputChange = (e) => {
    setHabitData({ ...habitData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    if (
        habitData.name.trim() === '' ||
        habitData.repeat.trim() === '' ||
        habitData.goal.trim() === '' ||
        habitData.time.trim() === '' ||
        habitData.startdate.trim() === ''
      ) {
        // Display an error message or perform any necessary action
        alert('Please fill in all the fields');
        return;
      }
    
      addHabit(habitData);
      onClose();
    };
  

  return (
    <>
    <div className='modalContainer'>
      <Button onClick={onOpen}>Add a new habit</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent className='modalContent'>
          <ModalHeader>Add New Habit</ModalHeader>
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
      </div>
    </>
  );
};
