# 05 Third-Party APIs: Work Day Scheduler

This is a simple Work Day Scheduler application that allows a user to save events for each hour of the day. This app runs in the browser and features dynamically updated HTML and CSS powered by jQuery.




## User Story

AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively


## Acceptance Criteria

GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```

#Installation:

1. Below is the total picture of the project.
![image](https://user-images.githubusercontent.com/120603153/227650956-4cde31ba-6730-4436-b7e8-36ad6de5c1ac.png)


2. It shows the current day.

![image](https://user-images.githubusercontent.com/120603153/227651278-d527f79f-a69d-4297-aee0-8f578c282450.png)

3. If I type Project 1 on the 1pm row and click save icon on the right, information will be stored on the local storage.

![image](https://user-images.githubusercontent.com/120603153/227651390-27cecef9-2bf7-4dae-8afc-3b985dea2f0f.png)


4. If I type another info like Lunch time on row 2PM, it's currently on color red signifying that the current time is color red.

![image](https://user-images.githubusercontent.com/120603153/227651448-514de9e6-4aea-42a4-a33a-3bdc9edbb34d.png)


5. The future time which is colored green which starts at three pm based on the current time shows on the screen. It I type Start Meeting the system will start to store it in the lcoal storage.


![image](https://user-images.githubusercontent.com/120603153/227651941-72835e6b-20d7-4aa1-819b-1321d3636d73.png)


6. All of the informations are save into local storage and if I pressed the refesh url, the information is still showing on the screen.
![image](https://user-images.githubusercontent.com/120603153/227631899-e7442129-1110-4467-b9dd-7ba1784373d6.png)

![image](https://user-images.githubusercontent.com/120603153/227651978-1b3c1852-179a-452d-a14c-5e426076b321.png)