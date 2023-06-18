import { v4 as uuidv4 } from 'uuid';
export const habitsdata = [
    {
        id: uuidv4(),
        name: "Exercise",
        repeat : "Daily",
        goal : "30 minutes",
        time : "Morning",
        startdate : "Today",
        archived : false,

    },
    {
        id: uuidv4(),
        name: "Meditation",
        repeat : "Daily",
        goal : "1 hour",
        time : "evening",
        startdate : "Next week",
        archived : false,

    },
    {
        id: uuidv4() ,
        name: "Reading",
        repeat : "Daily",
        goal : "30 minutes",
        time : "Night",
        startdate : "Next month",
        archived : false,

    },
]