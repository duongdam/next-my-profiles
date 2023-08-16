'use client';
import React, { useEffect, useState } from 'react';
import { useAtom } from 'jotai';
import { routeAtom } from '../../varibles/routes.atoms';
import { MySites } from '@/lib/mySites';

function Details() {
  const [route] = useAtom(routeAtom);
  const [detail, setDetail] = useState<any>(null);

  useEffect(() => {
    getDetails();
  }, [route]);

  const getDetails = () => {
    MySites.forEach((item) => {
      item.items.forEach((item) => {
        if (item.slug === route) {
          setDetail(item);
        }
      });
    });
  };

  return (
    <div className={'text-white'}>
      {
        detail?.description || ''
      }
    </div>
  );
}

export default Details;