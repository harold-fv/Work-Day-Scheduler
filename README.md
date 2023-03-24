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

## Installation

To install and use the Work Day Scheduler application, please follow these steps:

1. You can clone this repository to your local machine using Git:

   git clone https://github.com/harold-fv/Work-Day-Scheduler.git

2. Open the index.html file in your web browser to run the application.

## Usage

1. Below is the total picture of the project.
   ![image](https://user-images.githubusercontent.com/120603153/227630062-cc3cff33-9a0c-4fa8-9ba0-389c42a0c47c.png)

2. It shows the current day.
   ![image](https://user-images.githubusercontent.com/120603153/227629964-17856577-7b8e-49d4-bd8d-cecd4f442468.png)

3. If I type Project 1 on the 12pm row and click save icon on the right, information will be stored on the local storage.
   ![image](https://user-images.githubusercontent.com/120603153/227630363-902c8264-08e7-4f43-8ce9-aa9b225af591.png)

4. If I type another info like Lunch time on row 1PM, it's currently on color red signifying that the current time is color red.
   ![image](https://user-images.githubusercontent.com/120603153/227630719-f4af9fcd-7ab3-4d2f-89ba-d58037af5e9b.png)

5. The future time is colored red which starts at two pm based on the current time.
   ![image](https://user-images.githubusercontent.com/120603153/227630858-f090dee7-885c-4d97-9df1-105e6c49a596.png)

6. All of the informations are save into local storage and if I pressed the refesh url, the information is still showing on the screen.
   ![image](https://user-images.githubusercontent.com/120603153/227631899-e7442129-1110-4467-b9dd-7ba1784373d6.png)


- Once you type in your list of things to do in a Work Day scheduler and you save it, it will then store in a local storage. The next time you open the application work day scheduler, all the data are still shown on the screen. This application has the following features:

1. The user can store his list of items to do in a Work Day scheduler application.

2. It has the ability to show which row is past, present or future.
