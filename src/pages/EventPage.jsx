import React from 'react'
import Template from '../components/layout/TemplatePage'
import Navbar from '../components/shared/Navbar'
import ImgEvent from '../assets/LandingPage/Event/2.png'
import EventCard from '../components/event/EventCard'


const EventPage = () => {
  const events = [
    {
      id: 1,
      img: ImgEvent,
      title: 'Kenapa Kamu',
      time: '10.00 AM - 12.00 PM',
      month: 'Sep',
      date: '25',
      status: 'Offline',
      onClick: () => { }
    },
    {
      id: 2,
      img: ImgEvent,
      title: 'Kenapa Kamu',
      time: '10.00 AM - 12.00 PM',
      month: 'Sep',
      date: '25',
      status: 'Offline',
      onClick: () => { }
    },
    {
      id: 3,
      img: ImgEvent,
      title: 'Kenapa Kamu',
      time: '10.00 AM - 12.00 PM',
      month: 'Sep',
      date: '25',
      status: 'Offline',
      onClick: () => { }
    },
    {
      id: 4,
      img: ImgEvent,
      title: 'Kenapa Kamu',
      time: '10.00 AM - 12.00 PM',
      month: 'Sep',
      date: '25',
      status: 'Offline',
      onClick: () => { }
    }
  ]
  const events2 = [
    {
      id: 1,
      img: ImgEvent,
      title: 'Kenapa Kamu',
      time: '10.00 AM - 12.00 PM',
      month: 'Sep',
      date: '25',
      status: 'Offline',
      onClick: () => { }
    },
    {
      id: 2,
      img: ImgEvent,
      title: 'Kenapa Kamu',
      time: '10.00 AM - 12.00 PM',
      month: 'Sep',
      date: '25',
      status: 'Offline',
      onClick: () => { }
    },
  ]
  return (
    <div className='font-plus-jakarta'>
      <Navbar />
      <Template title={"Event"} />
      {/* event dari kita */}
      <h3 className='text-3xl'>Heal.in Event</h3>
      <section className='box-border grid grid-cols-3 mx-2 gap-3 font-plus-jakarta'>
        {events.map((event) => (
          <EventCard
            img={event.img}
            title={event.title}
            time={event.time}
            month={event.month}
            date={event.date}
            status={event.status}
            onClick={event.onClick}
            key={event.id}
            id={event.id}
          />
        ))}
      </section>
      {/* event dari third partner */}
      <h3 className='text-3xl'>Third Partner Event</h3>
      <section className='box-border grid grid-cols-3 mx-2 gap-3 font-plus-jakarta'>
        {events2.map((event) => (
          <EventCard
            img={event.img}
            title={event.title}
            time={event.time}
            month={event.month}
            date={event.date}
            status={event.status}
            onClick={event.onClick}
            key={event.id}
            id={event.id}
          />
        ))}
      </section>
    </div>
  )
}

export default EventPage;
