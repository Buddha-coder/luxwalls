'use client';

import { useEffect } from 'react';
import { Command } from 'cmdk';
import { useRouter } from 'next/navigation';
import { wallpapers } from '@/data/wallpapers';

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
    <Command.Dialog open={open} onOpenChange={onOpenChange} label="Global Command Menu">
      <Command.Input />
      <Command.List>
        <Command.Empty>No results found.</Command.Empty>

        <Command.Group heading="Navigation">
          <Command.Item onSelect={() => navigate('/')}>Home</Command.Item>
          <Command.Item onSelect={() => navigate('/about')}>About</Command.Item>
          <Command.Item onSelect={() => navigate('/wallpapers')}>Wallpapers</Command.Item>
        </Command.Group>

        <Command.Group heading="Wallpapers">
          {wallpapers.map((wallpaper) => (
            <Command.Item
              key={wallpaper.id}
              onSelect={() => navigate(`/wallpapers/${wallpaper.category}/${wallpaper.id}`)}
            >
              {wallpaper.title}
            </Command.Item>
          ))}
        </Command.Group>
      </Command.List>
    </Command.Dialog>
  );
}
