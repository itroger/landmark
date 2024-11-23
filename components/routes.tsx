import { ArrowRightCircleIcon, ArrowsRightLeftIcon, AcademicCapIcon, TicketIcon, ShoppingBagIcon, PaperAirplaneIcon } from '@heroicons/react/20/solid'

const timeline = [
    {
        id: 1,
        content: '',
        target: '深圳 -> 大阪 -> 京都',
        href: '#',
        date: '2024.12.29',
        datetime: '2024-12-29',
        icon: PaperAirplaneIcon,
        iconBackground: 'bg-gray-400',
    },
    {
        id: 2,
        content: '',
        target: '京都',
        href: '#',
        date: '2024.12.30',
        datetime: '2024-12-30',
        icon: AcademicCapIcon,
        iconBackground: 'bg-blue-500',
    },
    {
        id: 3,
        content: '',
        target: '京都 -> 奈良 -> 大阪',
        href: '#',
        date: '2024.12.31',
        datetime: '2024-12-31',
        icon: ArrowRightCircleIcon,
        iconBackground: 'bg-green-500',
    },
    {
        id: 4,
        content: '',
        target: '大阪 -> 神户 -> 大阪',
        href: '#',
        date: '2025.01.01',
        datetime: '2025-01-01',
        icon: ArrowsRightLeftIcon,
        iconBackground: 'bg-blue-500',
    },
    {
        id: 5,
        content: '',
        target: '大阪',
        href: '#',
        date: '2025.01.02',
        datetime: '2025-01-02',
        icon: ShoppingBagIcon,
        iconBackground: 'bg-green-500',
    },
    {
        id: 6,
        content: '',
        target: '大阪',
        href: '#',
        date: '2025.01.03',
        datetime: '2025-01-03',
        icon: TicketIcon,
        iconBackground: 'bg-green-500',
    },
    {
        id: 7,
        content: '',
        target: '大阪 -> 深圳',
        href: '#',
        date: '2025.01.04',
        datetime: '2025-01-04',
        icon: PaperAirplaneIcon,
        iconBackground: 'bg-gray-400',
    },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Routes() {
    return (
        <div className="max-w-xl w-full mt-8">
            <ul role="list" className="-mb-8">
                {timeline.map((event, eventIdx) => (
                    <li key={event.id}>
                        <div className="relative pb-8">
                            {eventIdx !== timeline.length - 1 ? (
                                <span aria-hidden="true" className="absolute left-4 top-4 -ml-px h-full w-0.5 bg-gray-200" />
                            ) : null}
                            <div className="relative flex space-x-3">
                                <div>
                  <span
                      className={classNames(
                          event.iconBackground,
                          'flex size-8 items-center justify-center rounded-full ring-8 ring-white',
                      )}
                  >
                    <event.icon aria-hidden="true" className="size-5 text-white" />
                  </span>
                                </div>
                                <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                                    <div>
                                        <p className="text-sm text-gray-500">
                                            {event.content}{' '}
                                            <a href={event.href} className="font-medium text-gray-900">
                                                {event.target}
                                            </a>
                                        </p>
                                    </div>
                                    <div className="whitespace-nowrap text-right text-sm text-gray-500">
                                        <time dateTime={event.datetime}>{event.date}</time>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}
