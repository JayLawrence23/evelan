'use client';
import React, { ReactNode } from 'react';

import { Container } from '@/components/layout';
import { CardSkeletonGroup } from '@/components/skeletons';
import { useFetchUsers } from '@/hooks/use-query';

import LoadMore from './LoadMore';
import Card from './Card';
import Header from './Header';
import Footer from './Footer';

const Main = () => {
  const { disabled, pagination, setPagination, isLoading, users } =
    useFetchUsers();

  return (
    <Container maxWidth='7xl'>
      <Header />
      {isLoading && (
        <CardContainer>
          <CardSkeletonGroup count={6} />
        </CardContainer>
      )}

      {/* PASS USERS DATA TO CARD */}
      <CardContainer>
        {users.length === 0 ? (
          <CardSkeletonGroup count={6} />
        ) : (
          users?.map((user) => <Card user={user} key={user.id} />)
        )}
      </CardContainer>

      {/* LOAD MORE BUTTON */}
      <LoadMore
        disabled={disabled}
        pagination={pagination}
        setPagination={setPagination}
      />

      {disabled && <Footer />}
    </Container>
  );
};

const CardContainer = ({ children }: { children: ReactNode }) => (
  <div className='grid grid-cols-3 gap-3'>{children}</div>
);

export default Main;
