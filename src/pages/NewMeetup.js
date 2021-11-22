import { useNavigate } from "react-router-dom";

import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetup() {
  const history = useNavigate();

  console.log(history);

  function addMeetupaHandler(meetupData) {
    fetch(
      "https://react-meetup-exercise-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        header: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      history.toString().replace("/");
    });
  }
  return (
    <div>
      <NewMeetupForm onAddMeetup={addMeetupaHandler} />
    </div>
  );
}

export default NewMeetup;
