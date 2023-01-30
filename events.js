events = [
    {
        _id: 0,
        date: new Date('2023-01-23').toDateString(),
        imgs: ['C:/Users/akino/coding_projects/21ctl/events/assets/img/events-1', 'C:/Users/akino/coding_projects/21ctl/events/assets/img/events-2'],
        title: 'Unveiling the Digital Center',
        body: 'On Monday January 23, 2023, 21st Century Technologies hosted the U.S. Consul General, Will Stevens, the CEO of Stanbic IBTC bank, Wole Adeniyi and top executives of Oracle and Digital Encode. The event was the unveiling of the new digital center.'
    }
]

let eventsC = document.getElementById('eventsContainer')

let eventList = ''

events.forEach(event => {
    const eventCard = `
        <div class="event" id=eventCard${event._id}>
            <div class="details">
                <div class="eventDate">${event.date}</div>
                <div class="eventTitle">${event.title}</div>
                <div class="eventBody">${event.body}</div>
            </div>
            <div class="album">
                <div class="navDots selected"></div>
                <div class="navDots"></div>
            </div>
        </div>`;
    eventList += eventCard;
});//this iterator turns the JSON into event cards
eventsC.innerHTML = eventList