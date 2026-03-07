'use client';

import { Command } from 'cmdk';
import { useRouter } from 'next/navigation';
import { Search } from 'lucide-react';
import { wallpapers } from '@/data/wallpapers';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { cn } from '@/lib/utils';

interface CommandPaletteProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function CommandPalette({ open, onOpenChange }: CommandPaletteProps) {
  const router = useRouter();

  const navigate = (path: string) => {
    router.push(path);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[600px] overflow-hidden p-0 shadow-2xl bg-black/60 backdrop-blur-3xl border-white/10 rounded-[2rem]">
        <DialogTitle className="sr-only">Search LuxWalls</DialogTitle>
        
        <Command className="flex h-full w-full flex-col overflow-hidden bg-transparent">
          <div className="flex items-center border-b border-white/5 px-6 py-5" cmdk-input-wrapper="">
            <Search className="mr-3 h-5 w-5 shrink-0 text-primary opacity-70" />
            <Command.Input 
              className="flex h-12 w-full rounded-md bg-transparent py-3 text-base outline-none placeholder:text-white/30 disabled:cursor-not-allowed disabled:opacity-50 font-body"
              placeholder="Search assets, collections, moods..."
            />
          </div>
          
          <Command.List className="max-h-[400px] overflow-y-auto overflow-x-hidden p-3 no-scrollbar scroll-smooth">
            <Command.Empty className="py-16 text-center text-sm text-muted-foreground font-body italic">
              No assets found for your search.
            </Command.Empty>

            <Command.Group 
              heading="Navigation" 
              className="px-2 py-3 text-[10px] font-black uppercase tracking-[0.2em] text-primary/60 mb-2"
            >
              <CommandItem onSelect={() => navigate('/')}>Atmosphere Home</CommandItem>
              <CommandItem onSelect={() => navigate('/wallpapers')}>All Assets</CommandItem>
              <CommandItem onSelect={() => navigate('/about')}>The Vision</CommandItem>
            </Command.Group>

            <Command.Group 
              heading="Collections" 
              className="px-2 py-3 text-[10px] font-black uppercase tracking-[0.2em] text-primary/60"
            >
              {wallpapers.slice(0, 15).map((wallpaper) => (
                <CommandItem
                  key={wallpaper.id}
                  onSelect={() => navigate(`/wallpapers/${wallpaper.category}/${wallpaper.id}`)}
                >
                  <div className="flex items-center justify-between w-full">
                    <span>{wallpaper.title}</span>
                    <span className="text-[9px] opacity-40 uppercase tracking-tighter">{wallpaper.category}</span>
                  </div>
                </CommandItem>
              ))}
            </Command.Group>
          </Command.List>

          <div className="flex items-center justify-between px-6 py-4 bg-white/[0.02] border-t border-white/5">
            <p className="text-[10px] text-white/20 uppercase tracking-widest font-bold">
              Esc to close • Enter to select
            </p>
            <div className="flex gap-1">
              <div className="h-1.5 w-1.5 rounded-full bg-primary/20" />
              <div className="h-1.5 w-1.5 rounded-full bg-primary/40" />
              <div className="h-1.5 w-1.5 rounded-full bg-primary/60" />
            </div>
          </div>
        </Command>
      </DialogContent>
    </Dialog>
  );
}

function CommandItem({ children, onSelect }: { children: React.ReactNode; onSelect: () => void }) {
  return (
    <Command.Item
      onSelect={onSelect}
      className="relative flex cursor-pointer select-none items-center rounded-xl px-4 py-3 text-sm outline-none transition-all duration-200 aria-selected:bg-white/5 aria-selected:text-primary hover:bg-white/5 font-medium mb-1 text-white/80"
    >
      {children}
    </Command.Item>
  );
}
