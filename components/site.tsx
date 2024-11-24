'use client'
import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react'


const sites = {
    kiyomizudera: {
        name: '清水寺',
        content: '乙和山清水寺始建于 778 年。 它的历史可以追溯到距今约 1250 年。 作为象征大慈悲的观音大人的圣地，它自古以来就向平民开放，受到广泛人群的欢迎。 在古老的历史书籍和文学作品中，许多人喜欢参观清水寺。\n' +
            '                                占地 130,000 平方米的辖区位于京都以东音羽山的山坡上，两旁林立着 30 多座寺庙和宝塔，包括国宝和重要文化财产。 自成立以来，这座塔曾被超过 10 度的大火摧毁，但由于虔诚的信仰，它已经多次重建。 现在的寺庙大部分是在 1633 年重建的。 1994 年，它被联合国教科文组织列为世界文化遗产“古都京都文化财产”之一。',
        location: '京都 12月30日'
    },
    inari: {
        name: '伏见稻荷大社',
        content: '“稻荷神社”堪称是最贴近日本人生活的神社。\n' +
            '\n' +
            '据说全国共有3万座稻荷神社，在日本各地受到男女老幼的喜爱。\n' +
            '\n' +
            '其总本宫便是京都的伏见稻荷大社。\n' +
            '\n' +
            '自公元711年神明镇座以来，长达1300年间汇集了人们的信仰，被尊崇为保佑五谷丰登、商业兴盛、家庭安全、诸愿望皆得实现之神。\n' +
            '\n' +
            '近年来除了日本人之外，也有许多外国参拜客、观光客造访，稻荷神社已成为代表京都与日本的名胜，闻名于世。',
        location: '京都 12月29日'
    },
    san: {
        name: '三年坂 & 二年坂',
        content: '山坡上的繁华步行街，街道两旁有纪念品摊位和传统日式建筑。迷人的步行大街，以传统建筑、茶室和樱花而知名。',
        location: '京都 12月30日'
    }
}

export default function Site(props: any) {
    const { open, setOpen, siteName } = props;

    return (
        <Dialog open={open} onClose={setOpen} className="relative z-10">
            <DialogBackdrop transition className="fixed inset-0 bg-gray-500/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"/>
            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
                    <DialogPanel transition className="w-full relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-sm sm:p-6 data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95">
                        <div className={siteName}></div>
                        <div className='p-2'>
                            <div>{sites[siteName].name}</div>
                            <p className='text-sm text-gray-600'>{sites[siteName].content}</p>
                            <p className='text-sm'>{sites[siteName].location}</p>
                        </div>
                    </DialogPanel>
                </div>
            </div>
        </Dialog>
    )
}
