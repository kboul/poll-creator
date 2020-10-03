# Create Questionnaire

An app to help a researcher create a questionnaire using React.

## Run the back-end

```
cd mock-api && npm install && npm start
```

## Run the front-end

clone the project

select master branch

Navigate to the root folder:

```
npm install && npm start
```

browser listens to [http://localhost:3000](http://localhost:3000) as default port

## Features

-   The app allows to create, read, update & delete questions & answers to build a simple questionnaire.
-   It uses a fake DB to persist the data and relevant corresponding changes (crud operations).
-   Once starting typing into question or answer input a Save button will appear on the right input corner which allows to save the inserted value.
-   The button will dissapear after clicking Save.
-   The app allows to push reordered question or answer to the bottom of the list if its the first question or answer and user hits ⌃ icon.
-   The app allows to push reordered question or answer to the start of the list if its the first question or answer and user hits ⌄ icon.

## Current App Status

At the moment the app handles also network errors, which are simulated by the fake back-end, for the following operations:

1. Create question
2. Read questions
3. Create answer
4. Reorder question up
5. Reorder question down
6. Delete Question
7. Delete Answer

The app does not handle network failures for the following operations:

1. Reorder answer up
2. Reorder answer down
3. Update question
4. Update answer
