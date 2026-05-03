import Image from "next/image";
import Hero from '@/components/Hero';
import VideoStore from '@/components/VideoStore';

export default function Home() {
  return (
    <main>
      <Hero />
      <VideoStore />
    </main>
  );
}
