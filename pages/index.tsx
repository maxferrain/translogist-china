import Head from 'next/head'
import { FloatButton } from 'antd'
import Header from '@/components/Header/Header'
import Main from '@/components/Main/Main'
import WhyUs from '@/components/WhyUs/WhyUs'
import Features from '@/components/Features/Features'
import Containers from '@/components/Containers/Containers'
import Services from '@/components/Services/Services'


export default function Home() {
    return (
        <>
            <Head>
                <title>Транслогистик - перевозки из Китая</title>
                <meta name="description" content="Транслогистик - перевозки из Китая"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta name='keywords' content='авиаперевозки грузов из китая, авиадоставка грузов из китая, авиаперевозки грузов из китая в москву, авиадоставка грузов из китая в москву, китай грузоперевозки самолетом, китай доставка грузов самолетом, авиаперевозки грузов из китая в россию'/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main>
                <Header/>
                <Main/>
                <WhyUs/>
                <Features/>
                <Containers/>

                <Services/>
                {/*<Questions/>*/}
                {/*<Reviews/>*/}
                {/*<ContactUs/>*/}
                <FloatButton.BackTop/>

                {/*<Footer/>*/}
            </main>
        </>
    )
}
