import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import Taken from '../../public/images/taken.svg';
import { VscArrowRight } from "react-icons/vsc";

function Custom404() {
    return (
        <div>
            <Head>
                <title>JosBIz | Error 404</title>
                <meta name="description" content="Jose Bolivar's Portfolio" />
            </Head>
            <div className="w-screen h-[80vh] flex flex-col justify-center items-center text-center">
                <div>
                    <Image src={Taken} alt="404" width={200} height={200} />
                </div>
                <div className="m-4">
                    <h2 className="uppercase text-torch-300 text-5xl">404 error</h2>
                    <h2 className="text-gray-700 font-inter p-2  font-semibold">
                        Page Not Found
                        <span className="text-torch-300 ml-1">:(</span>
                    </h2>
                    <h2 className="text-gray-500">Sorry, that page is not available</h2>
                </div>
                <div>
                    <Link href="/">
                        <button className="flex justify-center items-center button p-2">
                            Go Back Home
                            <VscArrowRight className="text-lg" />
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Custom404;