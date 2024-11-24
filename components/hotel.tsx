'use client'
import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react'

export default function Hotel(props: any) {
    const { open, setOpen } = props;

    return (
        <Dialog open={open} onClose={setOpen} className="relative z-10">
            <DialogBackdrop transition className="fixed inset-0 bg-gray-500/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"/>
            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
                    <DialogPanel transition className="w-full relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-sm sm:p-6 data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95">
                       <div className='hilton'></div>
                        <div className='p-2'>
                            <div>京都站希尔顿逸林酒店</div>
                            <p className='text-sm'>15 Higashi Kujo Nishi Iwamotocho, Minami Ward, 日本京都</p>
                            <p className='text-sm'>12月29日 - 12月31日</p>
                        </div>
                    </DialogPanel>
                </div>
            </div>
        </Dialog>
    )
}
