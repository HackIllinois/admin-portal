const API = 'https://hackillinois-mock-api.netlify.com';

export async function getEvents() {
  const data = await fetch(`${API}/event/`, {
    method: 'GET',
  });
  const json = await data.json();
  return json.events;
}

/* Example return object:
[
  {
    dayOfWeek: "Friday",
    date: "February 28",
    events: [ ... ] // all the event objects occuring on this day
  },
  ...
]
*/
export function sortEventsIntoDays(events) {
  // separate events by day into a map like so {"2/28/2019": [], "3/1/2019": [], ...}
  const eventsByDay = new Map();
  events.forEach(event => {
    const dateString = new Date(event.startTime * 1000).toLocaleDateString();
    if (eventsByDay.has(dateString)) {
      eventsByDay.get(dateString).push(event);
    } else {
      eventsByDay.set(dateString, [event]);
    }
  });

  // convert the map into an array of day objects
  const days = [];
  Array.from(eventsByDay.entries()).forEach(([dateString, events]) => {
    const date = new Date(dateString);
    days.push({
      date,
      dayOfWeek: date.toLocaleDateString('en-US', { weekday: 'long'}),
      dateString: date.toLocaleDateString('en-US', { month: 'long', day: 'numeric' }),
      events: events.sort((event1, event2) => event1.startTime - event2.startTime),
    });
  });

  // sort the days in order (just using the startTime of the first event on that day to prevent additional calculations)
  days.sort((a, b) => a.events[0].startTime - b.events[0].startTime);

  return days;
}

export function updateEvent(event) {
  const addingNewEvent = !event.id; // if the id doesn't exist, then we're adding a new event
  return fetch(`${API}/event/`, {
    method: addingNewEvent ? 'POST' : 'PUT',
    body: JSON.stringify(event),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(response => response.json())
}

export function deleteEvent(eventId) {
  return fetch(`${API}/event/${eventId}`, { method: 'DELETE' }).then(response => response.json());
}