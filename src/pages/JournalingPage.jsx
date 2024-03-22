import React, { useEffect, useState } from 'react'
import Navbar from '../components/shared/Navbar'
import TemplatePage from '../components/layout/TemplatePage'
import Button from '../components/ui/Button'
import { useNavigate } from 'react-router-dom'

const JournalingPage = () => {
  const navigate = useNavigate();
  const [journalHistory, setJournalHistory] = useState([]);

  useEffect(() => {
    const savedJournalHistory = JSON.parse(localStorage.getItem('journalHistory')) || [];
    setJournalHistory(savedJournalHistory);
  }, []);
  const handleAddJournal = () => {
    const nextJournalId = journalHistory.length + 1;
    setJournalHistory(prevHistory => [...prevHistory, null]);
    navigate(`/journaling/${nextJournalId}`);
    
  };
  return (
    <div className='w-[97.9vw] ml-1 font-plus-jakarta'>
      <Navbar />
      <TemplatePage title={'Journaling'} />
      <div>
        <div className='flex flex-col justify-center w-full px-20 box-border items-center'>
          <h4 className='text-2xl'>Coba Jurnal</h4>
          <Button type={'button'} children={'Add Journal +'} className={'h-max py-1 px-2 bg-blue-500 rounded-md border-none text-white w-80'} onClick={() => navigate('/journaling/1')} />
          <ul>
            {journalHistory.map((journal, index) => (
              <li key={index}>
                Journaling {index + 1}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default JournalingPage
