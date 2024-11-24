'use client'

import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/24/outline'

export default function Airline(props: any) {
    const { open, setOpen } = props;

    return (
        <Dialog open={open} onClose={setOpen} className="relative z-10">
            <DialogBackdrop
                transition
                className="fixed inset-0 bg-gray-500/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
            />

            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
                    <DialogPanel
                        transition
                        className="w-full relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-sm sm:p-6 data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
                    >
                        <div className='w-full'>
                            <DialogTitle className='flex justify-between'>
                                <span>深圳航空 ZH661</span>
                                <span>2024-12-29 星期日</span>
                            </DialogTitle>
                            <div className="w-full flex justify-between mt-3 text-center">
                                <div className='flex flex-col gap-1 items-start'>
                                    <div className='text-3xl'>8:30</div>
                                    <div className='text-md'>SZX 深圳宝安T3</div>
                                </div>
                                <div className='flex flex-col gap-1 items-end'>
                                    <div className='text-3xl'>13:00</div>
                                    <div className='text-md'>KIX 大阪关西T1</div>
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-between border-t-gray-200 border-t mt-2 pt-2'>
                            <div className='flex flex-col gap-1 items-center'>
                                <span className='text-sm'>登机口</span>
                                <span className='font-bold'>待定</span>
                            </div>
                            <div className='flex flex-col gap-1 items-center'>
                                <span className='text-sm'>座位号</span>
                                <span className='font-bold'>24F</span>
                            </div>
                            <div className='flex flex-col gap-1 items-center'>
                                <span className='text-sm'>转盘号</span>
                                <span className='font-bold'>待定</span>
                            </div>
                        </div>
                    </DialogPanel>
                </div>
            </div>
        </Dialog>
    )
}
