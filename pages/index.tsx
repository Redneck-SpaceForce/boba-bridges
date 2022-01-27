import Head from 'next/head';
import { BridgeOverview } from '../components/Bridge-Overview';

export default function Home(this: any) {
  return (
    <div className="bg-zinc-900  min-h-screen">
      <Head>
        <title>Boba Bridges</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex justify-center pt-6 sm:pt-6 md:pt-10 lg:pt-20 xl:pt-30">
        <main className="items-center justify-center place-content-center text-center">
          <h1 className="text-6xl font-bold text-white">
            <a className="text-[#ccff00]" href="https://boba.network/">
              Boba
            </a>{' '}
            Bridges
          </h1>
          <p className="mt-3 text-2xl text-white">Select a direction</p>
          <BridgeOverview />
        </main>
      </div>
    </div>
  );
}
