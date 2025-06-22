import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-xl font-semibold">Power2X</div>

        {/* Desktop links */}
        <div className="hidden md:flex gap-4 items-center">
        <a href="#about" className="hover:underline">Schedule</a>
        <a href="#about" className="hover:underline">Venue</a>
        <a href="#about" className="hover:underline">Sponsors</a>
        <a href="#contact" className="hover:underline">Contact</a>
        <Button>REGISTER</Button>
        <Button>GET UR TICKET NOW!</Button>
        </div>

        {/* Mobile menu toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 flex flex-col gap-2">
          <a href="#about" className="hover:underline">About</a>
          <a href="#contact" className="hover:underline">Contact</a>
          <Button className="w-full">Login</Button>
        </div>
      )}
    </nav>
  );
}
