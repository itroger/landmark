'use client'
import {
    CalendarIcon,
    MapPinIcon,
} from '@heroicons/react/20/solid'
import Modal from "./modal";
import {useState} from "react";

const meetings = [
    {
        id: 1,
        date: '2024.12.29',
        time: '8:00',
        datetime: '2022-01-10T17:00',
        name: '深圳宝安国际机场T3 - 大阪关西国际机场T1',
        location: '深圳 - 大阪',
    },
    {
        id: 2,
        date: '2024.12.29',
        time: '13:00',
        datetime: '2022-01-10T17:00',
        name: '大阪关西国际机场T1 - 京都站希尔顿逸林酒店',
        location: '大阪 - 京都',
    },
    // More meetings...
]
const days = [
    { date: '2024-12-29', isToday: true },
    { date: '2024-12-30', isSelected: false },
    { date: '2024-12-31' },
    { date: '2025-01-01', isCurrentMonth: true },
    { date: '2025-01-02', isCurrentMonth: true },
    { date: '2025-01-03', isCurrentMonth: true },
    { date: '2025-01-04', isCurrentMonth: true },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Calendars() {
    const [open, setOpen] = useState(false);

    return (
        <div>
            <Modal open={open} setOpen={setOpen} />
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
                                    {day.date.split('-').pop().replace(/^0/, '')}
                                </time>
                            </button>
                        ))}
                    </div>
                    <button
                        type="button"
                        className="mt-8 w-full rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Add event
                    </button>
                </div>
                <ol className="mt-4 divide-y divide-gray-100 text-sm/6 lg:col-span-7 xl:col-span-8">
                    {meetings.map((meeting) => (
                        <li key={meeting.id} className="relative flex space-x-6 py-6 xl:static" onClick={() => setOpen(true)}>
                            <div className="flex-auto">
                                <h3 className="pr-10 font-semibold text-gray-900 xl:pr-0">{meeting.name}</h3>
                                <dl className="mt-2 flex flex-col text-gray-500 xl:flex-row">
                                    <div className="flex items-start space-x-3">
                                        <dt className="mt-0.5">
                                            <span className="sr-only">Date</span>
                                            <CalendarIcon className="size-5 text-gray-400" aria-hidden="true" />
                                        </dt>
                                        <dd>
                                            <time dateTime={meeting.datetime}>
                                                {meeting.date} {meeting.time}
                                            </time>
                                        </dd>
                                    </div>
                                    <div className="mt-2 flex items-start space-x-3 xl:ml-3.5 xl:mt-0 xl:border-l xl:border-gray-400/50 xl:pl-3.5">
                                        <dt className="mt-0.5">
                                            <span className="sr-only">Location</span>
                                            <MapPinIcon className="size-5 text-gray-400" aria-hidden="true" />
                                        </dt>
                                        <dd>{meeting.location}</dd>
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
