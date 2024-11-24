'use client'
import { MdPlace } from "react-icons/md";
import { FaPlane, FaTrain, FaBus, FaWalking } from "react-icons/fa";
import Airline from "./airline";
import { useState } from "react";
import Hotel from "./hotel";
import Site from "./site";

const meetings = [
    {
        id: 1,
        date: '2024.12.29',
        name: '大阪关西国际机场T1',
        english: '関西空港 T1',
        location: '大阪',
        icon: <FaPlane />,
        content: '深圳宝安国际机场T3, 深圳航空, ZH661, 8:30',
        modal: 'airline',
        modalName: '',
    },
    {
        id: 2,
        date: '2024.12.29',
        name: '京都站希尔顿逸林酒店',
        english: 'ダブルツリーbyヒルトン京都駅',
        location: '京都',
        icon: <FaTrain />,
        content: 'JR 西日本特急列车 Haruka, 关西空港 - 京都',
        modal: 'hotel',
        modalName: '',
    },
    {
        id: 3,
        date: '2024.12.29',
        name: '伏见稻荷大社',
        english: '伏見稲荷大社',
        location: '京都',
        icon: <FaTrain />,
        content: 'JR 奈良线, 京都 - 稻荷',
        modal: 'site',
        modalName: 'inari',
    },
    {
        id: 4,
        date: '2024.12.29',
        name: '花见小路',
        english: '花见小路',
        location: '京都',
        icon: <FaTrain />,
        content: 'KH 京阪本线, 伏见稻荷 - 祇园四条',
        modal: 'site',
        modalName: 'inari',
    },
    {
        id: 5,
        date: '2024.12.30',
        name: '清水寺',
        english: '清水寺',
        location: '京都',
        icon: <FaBus />,
        content: '京都站中央出口, D2区, 206路',
        modal: 'site',
        modalName: 'kiyomizudera',
    },
    {
        id: 6,
        date: '2024.12.30',
        name: '三年坂 & 二年坂',
        english: '三年坂 & 二年坂',
        location: '京都',
        icon: <FaWalking />,
        content: 'City Walk',
        modal: 'site',
        modalName: 'san',
    },
]
const initDays = [
    { date: '2024.12.29', isCurrentMonth: true, isToday: true, isSelected: true },
    { date: '2024.12.30', isCurrentMonth: true, isSelected: false },
    { date: '2024.12.31', isCurrentMonth: true },
    { date: '2025.01.01', isCurrentMonth: true },
    { date: '2025.01.02', isCurrentMonth: true },
    { date: '2025.01.03', isCurrentMonth: true },
    { date: '2025.01.04', isCurrentMonth: true },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Calendars() {
    const [airline, setAirline] = useState(false);
    const [hotel, setHotel] = useState(false);
    const [site, setSite] = useState(false);
    const [siteName, setSiteName] = useState('inari');
    const [days, setDays] = useState(initDays);
    const [current, setCurrent] = useState(initDays[0].date);

    const handleClick = (modal: string, modalName: string) => {
        switch (modal) {
            case 'airline': {
                setAirline(true);
                break;
            }
            case 'hotel': {
                setHotel(true);
                break;
            }
            case 'site': {
                setSiteName(modalName);
                setSite(true);
                break;
            }

        }
    }

    const handleDate = (day) => {
        initDays.forEach(item => {
            item.isSelected = day.date === item.date;
        })
        setDays([...initDays]);
        setCurrent(day.date);
    }

    return (
        <div>
            <Airline open={airline} setOpen={setAirline} />
            <Hotel open={hotel} setOpen={setHotel} />
            <Site open={site} setOpen={setSite} siteName={siteName} />
            <div className="lg:grid lg:grid-cols-12 lg:gap-x-16">
                <div className="mt-10 text-center lg:col-start-8 lg:col-end-13 lg:row-start-1 lg:mt-9 xl:col-start-9">
                    <div className="flex items-center text-gray-900">
                        <div className="flex-auto text-sm font-semibold">2024 - 2025</div>
                    </div>
                    <div className="mt-6 grid grid-cols-7 text-xs/6 text-gray-500">
                        <div>Sun</div>
                        <div>Mon</div>
                        <div>Tue</div>
                        <div>Wed</div>
                        <div>Thu</div>
                        <div>Fri</div>
                        <div>Sat</div>
                    </div>
                    <div className="isolate mt-2 grid grid-cols-7 gap-px rounded-lg bg-gray-200 text-sm shadow ring-1 ring-gray-200">
                        {days.map((day, dayIdx) => (
                            <button
                                key={day.date}
                                type="button"
                                onClick={() => handleDate(day)}
                                className={classNames(
                                    'py-1.5 hover:bg-gray-100 focus:z-10',
                                    day.isCurrentMonth ? 'bg-white' : 'bg-gray-50',
                                    (day.isSelected || day.isToday) && 'font-semibold',
                                    day.isSelected && 'text-white',
                                    !day.isSelected && day.isCurrentMonth && !day.isToday && 'text-gray-900',
                                    !day.isSelected && !day.isCurrentMonth && !day.isToday && 'text-gray-400',
                                    day.isToday && !day.isSelected && 'text-indigo-600',
                                    dayIdx === 0 && 'rounded-tl-lg',
                                    dayIdx === 6 && 'rounded-tr-lg',
                                    dayIdx === days.length - 7 && 'rounded-bl-lg',
                                    dayIdx === days.length - 1 && 'rounded-br-lg',
                                )}
                            >
                                <time
                                    dateTime={day.date}
                                    className={classNames(
                                        'mx-auto flex size-7 items-center justify-center rounded-full',
                                        day.isSelected && day.isToday && 'bg-indigo-600',
                                        day.isSelected && !day.isToday && 'bg-gray-900',
                                    )}
                                >
                                    {day.date.split('.').pop().replace(/^0/, '')}
                                </time>
                            </button>
                        ))}
                    </div>
                </div>
                <ol className="mt-4 divide-y divide-gray-100 text-sm/6 lg:col-span-7 xl:col-span-8">
                    {meetings.filter(item => item.date === current).map((meeting) => (
                        <li key={meeting.id} className="relative flex space-x-6 py-6 xl:static" onClick={() => handleClick(meeting.modal, meeting.modalName)}>
                            <div className="flex-auto">
                                <h3 className="flex flex-col gap-2 pr-10 font-semibold text-gray-900 xl:pr-0">
                                    <span>{meeting.name}</span>
                                    <span className='text-gray-500'>{meeting.english}</span>
                                </h3>
                                <dl className="mt-2 flex flex-col text-gray-500 xl:flex-row">
                                    <div className="flex items-center gap-2">
                                        <span>{meeting.icon}</span>
                                        <span>{meeting.content}</span>
                                    </div>
                                    <div className="mt-2 flex items-center space-x-3 xl:ml-3.5 xl:mt-0 xl:border-l xl:border-gray-400/50 xl:pl-3.5">
                                        <MdPlace />
                                        <span>{meeting.location}</span>
                                    </div>
                                </dl>
                            </div>
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    )
}
