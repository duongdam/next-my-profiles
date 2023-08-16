'use client';

import { MySites } from '@/lib/mySites';
import clsx from 'clsx';
import { useSelectedLayoutSegments } from 'next/navigation';
import { useAtom } from 'jotai';
import { routeAtom } from '../../varibles/routes.atoms';

export default function GlobalNavigation() {
  const [selectedLayoutSegments] = useSelectedLayoutSegments();
  const [route, setRoute] = useAtom(routeAtom);

  const handleClick = (slug: string) => {
    setRoute(slug);
  };

  return (
    <div className='space-y-5'>
      {
        MySites.map((item) => {
          return (
            <div key={item.name}>
              <div className='mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-zinc-500'>
                <div>{item.name}</div>
              </div>

              {
                item.items.map((item) => {
                  const isActive = item.slug === selectedLayoutSegments;
                  const isSelected = item.slug === route;
                  return (
                    <div key={item.slug}>
                      {
                        item.isDisabled ?
                          <div
                            className='block rounded-md px-3 py-2 text-sm font-medium text-zinc-600'
                            title='Coming soon'
                          >
                            {item.name}
                          </div>
                          :
                          <div
                            onClick={() => handleClick(item.slug)}
                            className={clsx(
                              'block rounded-md px-3 py-2 text-sm font-medium hover:bg-zinc-800 hover:text-zinc-100',
                              {
                                'text-zinc-400': !isActive,
                                'text-white': isActive,
                              }, isSelected ? 'bg-zinc-700 text-white' : 'bg-zinc-900',
                            )}
                          >
                            {item.name}
                          </div>
                      }
                    </div>
                  );
                })}
            </div>
          );
        })}
    </div>
  );
}
