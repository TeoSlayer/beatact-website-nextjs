import EventFeed from '../components/EventsFeed.js';
import { firestore, eventToJSON } from '../libs/firebase';

import { useState } from 'react';

// Max post to query per page

export async function getServerSideProps() {
  const eventsQuery = firestore
    .collection("Events")

  const events = (await eventsQuery.get()).docs.map(eventToJSON);

  return {
    props: { events }, // will be passed to the page component as props
  };
}

export default function Home(props) {
    const [events, setevents] = useState(props.events);



    firestore.collection("Events").get().then((docs) => {
        let newevents = docs.map((doc) => doc.data());
        setevents(events.concat(newevents));
    }).catch((err) => console.log(err))


    

  return (
      <main>
        <EventFeed events={events} />

        {eventsEnd && 'You have reached the end!'}
      </main>
  );
}