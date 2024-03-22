import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import ErrorPage from '../../pages/ErrorPage';
import Navbar from '../shared/Navbar';
import Button from '../ui/Button';
import InfoLogin from '../auth/InfoLogin';




const JournalingDetail = ({ prevPage, nextPage }) => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [allAnswers, setAllAnswers] = useState({
        answerA: '',
        answerB: '',
        answerC: '',
        answer1: '',
        answer12: '',
        answer123: '',
        answer2: '',
        answer22: '',
        answer23: '',
        answer3: '',
        answer32: '',
        answer33: '',
        answer4: '',
        answer42: '',
        answer43: '',

    });

    const [userData, setUserData] = useState(null);
    const [selectedMood, setSelectedMood] = useState(null);
    const [showPopup, setShowPopup] = useState(false);
    const [selectedMoodStyle, setSelectedMoodStyle] = useState({});


    const handleMoodSelect = (mood) => {
        setSelectedMood(mood);
        const style = {
            backgroundColor: '#b3c3ff',
            transform: 'scale(1)',
        };
        setSelectedMoodStyle({ [mood]: style });
    };

    const handleNextMoodTracker = () => {
        if (!selectedMood) {
            alert('Silakan pilih satu ekspresi mood terlebih dahulu!');
            return;
        }
        setShowPopup(true);
        sendJournalData();
        handleNext(selectedMood);
    };

    const handleAnswerChange = (event) => {
        const { name, value } = event.target;
        setAllAnswers((prevAnswers) => ({
            ...prevAnswers,
            [name]: value,
        }));
    };

    const handleNext = () => {
        const nextPage = parseInt(id) + 1;
        const nextUrl = `/journaling/${nextPage}`;
        localStorage.setItem('selectedMood', selectedMood);
        localStorage.setItem('journalingAnswers', JSON.stringify(allAnswers));
        if (nextPage === 9) {
            alert('Terimakasih sudah bercerita!');
            sendJournalData();
            navigate('/journaling');
        } else {
            navigate(nextUrl);
        }
    };


    const sendJournalData = () => {
        const journalData = {
            answers: Object.values(allAnswers),
            mood_id: selectedMood,
        };
        fetch('https://heal-in-501fb50a416c.herokuapp.com/api/user/journaling/save', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            },
            body: JSON.stringify(journalData),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Journaling data sent successfully:', data);
            })
            .catch((error) => {
                console.error('Error sending journaling data:', error);
            });
    };

    const handleBack = () => {
        const prevPage = parseInt(id) - 1;
        const prevUrl = `/journaling/${prevPage}`;
        navigate(prevUrl);
    }

    useEffect(() => {
        const token = localStorage.getItem('accessToken');
        if (token) {
            InfoLogin(token) // Panggil InfoLogin di sini
                .then(userData => {
                    if (userData) {
                        setUserData(userData);
                    } else {
                        setUserData(null);
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                    setUserData(null);
                });
        } else {
            setUserData(null);
        }
    }, []);

    const popupMessages = {
        Marah: "Itu hal yang wajar kok. Tapi, jangan lupa untuk luangkan waktu untuk tenangkan diri sebelum berbicara atau bertindak ya..😉",
        Sedih: "Aku turut sedih melihatmu sedih😢 Tapi aku yakin kamu bisa melewati semua ini. Kamu lebih kuat daripada yang kamu kira😉",
        Bahagia: "Waah, senang melihatmu bahagia. Semoga kebahagiaan akan datang lagi kepadamu esok hari🤩",
        Kecewa: "Yaahh.. apa hal yang membuatmu kecewa? Apapun itu, Aku harap masalahmu terselesaikan dengan baik ya.. Aku yakin kamu bisa melewatinya. Semangatt!!💪🏻🔥",
        Lelah: "Istirahatlah sejenak , gapapa kok. Tenangkan dirimu dulu beri waktu untuk dirimu beristirahat. Kamu sudah bekerja keras hari ini!"
    };


    const questions = [
        // slide pertama
        <div key={1}>
            <div className=' flex flex-col items-center pt-20 w-[97vw] font-plus-jakarta h-[80vh]'>
                <progress aria-label='' max='100' value='20' className='w-[60%] overflow-hidden rounded bg-slate-100 [&::-webkit-progress-value]:bg-blue-500'></progress>
                <span className='mt-3 text-sm w-[60%]'>Pertanyaan 1/5</span>
                <h2 className='text-center'>
                    3 Hal yang aku alami hari ini
                </h2>
                {/* inputan jawaban */}
                <input
                    type="text"
                    name="answerA"
                    value={allAnswers.answerA}
                    onChange={handleAnswerChange}
                    placeholder="Masukkan jawaban Anda di sini"
                    className='input input-bordered w-[70%] mt-8 py-3 shadow-xl'
                />
                <input
                    type="text"
                    name="answerB"
                    value={allAnswers.answerB}
                    onChange={handleAnswerChange}
                    placeholder="Masukkan jawaban Anda di sini"
                    className='input input-bordered w-[70%] mt-8 py-3 shadow-xl'
                />
                <input
                    type="text"
                    name="answerC"
                    value={allAnswers.answerC}
                    onChange={handleAnswerChange}
                    placeholder="Masukkan jawaban Anda di sini"
                    className='input input-bordered w-[70%] mt-8 py-3 shadow-xl'
                />

                <Button onClick={handleNext} children={"Next"} className={"bottom-10 right-20 fixed bg-blue-500 border-none text-white rounded-md py-2 px-10"} />
            </div>
        </div>,
        // slide kedua
        <div key={2}>
            <div className='flex flex-col items-center pt-20 w-[97vw] font-plus-jakarta h-[80vh]'>
                <progress aria-label='' max='100' value='40' className='w-[60%] overflow-hidden rounded bg-slate-100 [&::-webkit-progress-value]:bg-blue-500'></progress>
                <span className='mt-3 text-sm w-[60%]'>Pertanyaan 2/5</span>
                <h2>
                    3 hal yang membuatku bersyukur hari ini
                </h2>
                {/* inputan jawaban */}
                <input
                    type="text"
                    name="answer1"
                    value={allAnswers.answer1}
                    onChange={handleAnswerChange}
                    placeholder="Masukkan jawaban Anda di sini"
                    className='input input-bordered w-[70%] mt-8 py-3 shadow-xl'
                />
                <input
                    type="text"
                    name="answer12"
                    value={allAnswers.answer12}
                    onChange={handleAnswerChange}
                    placeholder="Masukkan jawaban Anda di sini"
                    className='input input-bordered w-[70%] mt-8 py-3 shadow-xl'
                />
                <input
                    type="text"
                    name="answer123"
                    value={allAnswers.answer123}
                    onChange={handleAnswerChange}
                    placeholder="Masukkan jawaban Anda di sini"
                    className='input input-bordered w-[70%] mt-8 py-3 shadow-xl'
                />
                <Button onClick={handleBack} children={"Back"} className={"bottom-10 left-20 fixed bg-blue-500 border-none text-white rounded-md py-2 px-10"} />
                <Button onClick={handleNext} children={"Next"} className={"bottom-10 right-20 fixed bg-blue-500 border-none text-white rounded-md py-2 px-10"} />
            </div>
        </div>,
        // slide ketiga
        <div key={3}>
            <div className='flex flex-col items-center pt-20 w-[97vw] font-plus-jakarta h-[80vh]'>
                <progress aria-label='' max='100' value='60' className='w-[60%] overflow-hidden rounded bg-slate-100 [&::-webkit-progress-value]:bg-blue-500'></progress>
                <span className='mt-3 text-sm w-[60%]'>Pertanyaan 3/5</span>
                <h2 className='w-[70%] text-center'>
                    3 hal positif yang aku terima dari orang lain hari ini
                </h2>
                {/* inputan jawaban */}
                <input
                    type="textbox"
                    name="answer2"
                    value={allAnswers.answer2}
                    onChange={handleAnswerChange}
                    placeholder="Masukkan jawaban Anda di sini"
                    className='input input-bordered w-[70%] mt-8 py-3 shadow-xl'
                />
                <input
                    type="textbox"
                    name="answer22"
                    value={allAnswers.answer22}
                    onChange={handleAnswerChange}
                    placeholder="Masukkan jawaban Anda di sini"
                    className='input input-bordered w-[70%] mt-8 py-3 shadow-xl'
                />
                <input
                    type="textbox"
                    name="answer23"
                    value={allAnswers.answer23}
                    onChange={handleAnswerChange}
                    placeholder="Masukkan jawaban Anda di sini"
                    className='input input-bordered w-[70%] mt-8 py-3 shadow-xl'
                />
                <Button onClick={handleBack} children={"Back"} className={"bottom-10 left-20 fixed bg-blue-500 border-none text-white rounded-md py-2 px-10"} />
                <Button onClick={handleNext} children={"Next"} className={"bottom-10 right-20 fixed bg-blue-500 border-none text-white rounded-md py-2 px-10"} />
            </div>
        </div>,
        // slide keempat
        <div key={4}>
            <div className='flex flex-col items-center pt-20 w-[97vw] font-plus-jakarta h-[80vh]'>
                <progress aria-label='' max='100' value='80' className='w-[60%] overflow-hidden rounded bg-slate-100 [&::-webkit-progress-value]:bg-blue-500'></progress>
                <span className='mt-3 text-sm w-[60%]'>Pertanyaan 4/5</span>
                <h2 className='w-[70%] text-center'>
                    3 harapan yang aku inginkan akan terjadi
                </h2>
                {/* inputan jawaban */}
                <input
                    type="textbox"
                    name="answer3"
                    value={allAnswers.answer3}
                    onChange={handleAnswerChange}
                    placeholder="Masukkan jawaban Anda di sini"
                    className='input input-bordered w-[70%] mt-8 py-3 shadow-xl'
                />
                <input
                    type="textbox"
                    name="answer32"
                    value={allAnswers.answer32}
                    onChange={handleAnswerChange}
                    placeholder="Masukkan jawaban Anda di sini"
                    className='input input-bordered w-[70%] mt-8 py-3 shadow-xl'
                />
                <input
                    type="textbox"
                    name="answer33"
                    value={allAnswers.answer33}
                    onChange={handleAnswerChange}
                    placeholder="Masukkan jawaban Anda di sini"
                    className='input input-bordered w-[70%] mt-8 py-3 shadow-xl'
                />
                <Button onClick={handleBack} children={"Back"} className={"bottom-10 left-20 fixed bg-blue-500 border-none text-white rounded-md py-2 px-10"} />
                <Button onClick={handleNext} children={"Next"} className={"bottom-10 right-20 fixed bg-blue-500 border-none text-white rounded-md py-2 px-10"} />
            </div>
        </div>,
        // slide kelima
        <div key={5}>
            <div className='flex flex-col items-center pt-20 w-[97vw] font-plus-jakarta h-[80vh]'>
                <progress aria-label='' max='100' value='100' className='w-[60%] overflow-hidden rounded bg-slate-100 [&::-webkit-progress-value]:bg-blue-500'></progress>
                <span className='mt-3 text-sm w-[60%]'>Pertanyaan 5/5</span>
                <h2 className='w-[70%] text-center'>
                    3 hal yang ingin aku lakukan agar besok bisa lebih baik lagi
                </h2>
                {/* inputan jawaban */}
                <input
                    type="textbox"
                    name="answer4"
                    value={allAnswers.answer4}
                    onChange={handleAnswerChange}
                    placeholder="Masukkan jawaban Anda di sini"
                    className='input input-bordered w-[70%] mt-8 py-3 shadow-xl'
                />
                <input
                    type="textbox"
                    name="answer42"
                    value={allAnswers.answer42}
                    onChange={handleAnswerChange}
                    placeholder="Masukkan jawaban Anda di sini"
                    className='input input-bordered w-[70%] mt-8 py-3 shadow-xl'
                />
                <input
                    type="textbox"
                    name="answer43"
                    value={allAnswers.answer43}
                    onChange={handleAnswerChange}
                    placeholder="Masukkan jawaban Anda di sini"
                    className='input input-bordered w-[70%] mt-8 py-3 shadow-xl'
                />
                <Button onClick={handleBack} children={"Back"} className={"bottom-10 left-20 fixed bg-blue-500 border-none text-white rounded-md py-2 px-10"} />
                <Button onClick={handleNext} children={"Next"} className={"bottom-10 right-20 fixed bg-blue-500 border-none text-white rounded-md py-2 px-10"} />
            </div>
        </div>,
        // slide keenam,
        <div key={6}>
            <div className='flex flex-col items-center pt-20 w-[97vw] font-plus-jakarta h-[80vh]'>
                <h2 className='w-[70%] text-start'>
                    {userData && <div className='text-xl font-thin'>Hai {userData.name}</div>}
                    <span>Pesan yang ingin kusampaikan untuk diriku sendiri dan orang lain yang sudah berbuat baik kepadaku</span>
                </h2>
                {/* inputan jawaban */}
                <div className='w-[71.1%]'>
                    <div className='bg-zinc-100 p-3 rounded-t-xl'>Tulis cerita Anda disini!</div>
                    <textarea name="" id="" cols="125" rows="18" placeholder='Tulis disni...' className='p-3 rounded-b-xl'></textarea>
                </div>
                <Button onClick={handleBack} children={"Back"} className={"bottom-10 left-20 fixed bg-blue-500 border-none text-white rounded-md py-2 px-10"} />
                <Button onClick={handleNext} children={"Next"} className={"bottom-10 right-20 fixed bg-blue-500 border-none text-white rounded-md py-2 px-10"} />
            </div>
        </div>,
        // slide ketujuh
        <div key={7}>
            <div className='flex flex-col items-center justify-center pt-20 w-[97vw] font-plus-jakarta h-[50vh]'>
                <h2 className='w-[70%] text-center text-blue-500'>
                    Bagaimana perasaan Kamu setelah mengisi journaling hari ini?
                </h2>
                {/* inputan jawaban */}
                <div className='flex gap-5'>
                    <div onClick={() => handleMoodSelect('Marah')} className="flex flex-col items-center bg-[#ECF0FF] p-3 rounded-3xl shadow-xl gap-2 font-bold text-blue-500 cursor-pointer" style={selectedMood === 'Marah' ? selectedMoodStyle.Marah : {}}>
                        <span className='text-5xl'>😡</span>
                        Marah
                    </div>
                    <div onClick={() => handleMoodSelect('Sedih')} className="flex flex-col items-center bg-[#ECF0FF] p-3 rounded-3xl shadow-xl gap-2 font-bold text-blue-500 cursor-pointer" style={selectedMood === 'Sedih' ? selectedMoodStyle.Sedih : {}}>
                        <span className='text-5xl'>☹️</span>
                        Sedih
                    </div>
                    <div onClick={() => handleMoodSelect('Kecewa')} className="flex flex-col items-center bg-[#ECF0FF] p-3 rounded-3xl shadow-xl gap-2 font-bold text-blue-500 cursor-pointer" style={selectedMood === 'Kecewa' ? selectedMoodStyle.Kecewa : {}}>
                        <span className='text-5xl'>😥</span>
                        Kecewa
                    </div>
                    <div onClick={() => handleMoodSelect('Bahagia')} className="flex flex-col items-center bg-[#ECF0FF] p-3 rounded-3xl shadow-xl gap-2 font-bold text-blue-500 cursor-pointer" style={selectedMood === 'Bahagia' ? selectedMoodStyle.Bahagia : {}}>
                        <span className='text-5xl'>😀</span>
                        Bahagia
                    </div>
                    <div onClick={() => handleMoodSelect('Lelah')} className="flex flex-col items-center bg-[#ECF0FF] p-3 rounded-3xl shadow-xl gap-2 font-bold text-blue-500 cursor-pointer" style={selectedMood === 'Lelah' ? selectedMoodStyle.Lelah : {}}>
                        <span className='text-5xl'>😴</span>
                        Lelah
                    </div>
                </div>
                <Button onClick={handleBack} children={"Back"} className={"bottom-10 left-20 fixed bg-blue-500 border-none text-white rounded-md py-2 px-10"} />
                <Button onClick={handleNextMoodTracker} children={"Next"} className={"bottom-10 right-20 fixed bg-blue-500 border-none text-white rounded-md py-2 px-10"} />
            </div>
        </div>,
        <div key={8}>
            <div className='flex flex-col items-center justify-center pt-20 w-[97vw] font-plus-jakarta h-[50vh]'>
                <h2 className='w-[70%] text-center text-blue-500'>
                    {userData && <div className='text-xl font-thin'>Halo {userData.name}!</div>}
                </h2>
                {/* inputan jawaban */}
                <div className='bg-[#ECF0FF] p-5 w-[35rem] text-xl text-blue-500 rounded-3xl shadow-2xl flex items-center gap-4'>
                    <span className='text-5xl'>🤗</span>
                    <p>{popupMessages[selectedMood]}</p>
                </div>
                <Button onClick={handleBack} children={"Back"} className={"bottom-10 left-20 fixed bg-blue-500 border-none text-white rounded-md py-2 px-10"} />
                <Button onClick={handleNext} children={"Next"} className={"bottom-10 right-20 fixed bg-blue-500 border-none text-white rounded-md py-2 px-10"} />
            </div>
        </div>,
    ]

    const journaling = questions.find(journaling => journaling.key.toString() === id);
    if (!id || parseInt(id) < 1 || parseInt(id) > 8) {
        return <ErrorPage />;
    }

    return (
        <>
            <Navbar />
            <div className='font-plus-jakarta'>{journaling}</div>

        </>
    )
}

export default JournalingDetail
