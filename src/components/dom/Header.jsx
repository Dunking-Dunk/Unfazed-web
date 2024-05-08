import Image from 'next/image'
import unfazedLogo from '../../../public/img/unfazedLogo.png'
import Link from 'next/link'

const Header = () => {
    return (
        <div className="absolute top-0 w-full h-20 z-50 backdrop-blur-10 flex items-center px-14 py-8  justify-between">
            <div className="">
                <Image src={unfazedLogo} alt='unfazed logo' className='w-40' />
            </div>
            <div className="flex flex-row justify-evenly w-1/3 text-sm">
                <Link href='#about'>About</Link>
                <Link href='#about'>Service</Link>
                <Link href='#about'>Contact</Link>
            </div>
        </div>
    )
}

export default Header