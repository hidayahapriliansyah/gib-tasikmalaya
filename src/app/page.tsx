import Image from "next/image";
import { Button } from '../components/ui/button';
import Paskas from './components/Paskas';
import DonasiSalur from './components/DonasiSalur';
import Form from './components/Form';
import Hero from './components/Hero';
import CaraDonasi from './components/CaraDonasi';

export default function Home() {
  return (
    <>
      <Hero />
      <Paskas />
      <DonasiSalur />
      <CaraDonasi />
      <Form />
    </>
  );
}