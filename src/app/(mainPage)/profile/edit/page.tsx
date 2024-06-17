/* eslint-disable react-hooks/rules-of-hooks */

'use client';

import { useQuery } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';

import PrimaryButton from '@/Common/PrimaryButton';
import { getUserProfileData } from '@/lib/user/getUserProfileData';
import { ProfileResponse } from '@/models/Profile';
import Loader from '@/Common/Loader';
import { useState } from 'react';
import EditForm from './_components/EditForm';

export default function Page() {
  const [showEdit, setShowEdit] = useState(false);
  const { data: session, status, update } = useSession();
  const { data: UserProfileResponse, isLoading } = useQuery<ProfileResponse>({
    queryKey: [session?.user?.email],
    queryFn: () => getUserProfileData(session?.user?.email!),
  });

  if (isLoading) {
    return <Loader />;
  }

  if (
    status === 'authenticated' &&
    UserProfileResponse &&
    UserProfileResponse.data
  ) {
    const imageUrl = session.user?.image?.replace('http:', 'https:');
    return (
      <main className="mx-6 p-6 mt-16 mb-24 border rounded-lg shadow-lg">
        {!showEdit ? (
          <>
            <p className="text-2xl font-semibold">기본정보</p>
            <section className="flex items-center gap-4 my-10">
              <img
                src={imageUrl}
                alt="profile"
                className="rounded-full w-[80px] h-[80px]"
              />
              <div className="flex flex-col gap-2 text-text500">
                <span className="flex items-center gap-2">
                  <p className="text-xl font-semibold text-text800">
                    {session.user?.name}
                  </p>
                  <p>
                    {UserProfileResponse.data[0].gender === 'MALE'
                      ? '남성'
                      : '여성'}
                  </p>
                  <p>{UserProfileResponse.data[0].birthYear}년생</p>
                </span>
                <p>{session.user?.email}</p>
                <p>{UserProfileResponse.data[0].phoneNum}</p>
              </div>
            </section>
            <PrimaryButton onClick={() => setShowEdit(true)}>
              정보 수정하기
            </PrimaryButton>
          </>
        ) : (
          <EditForm
            updateHandler={update}
            setShowEdit={setShowEdit}
            image={imageUrl!}
            name={session.user?.name!}
            gender={UserProfileResponse.data[0].gender}
            birthYear={UserProfileResponse.data[0].birthYear}
            email={session.user?.email!}
            phone={UserProfileResponse.data[0].phoneNum}
          />
        )}
        {/* <p>Signed in as {session.user?.name}</p> */}

        {/* Update the value by sending it to the backend. */}
        {/* <button type="button" onClick={() => update({ name: '신태일' })}>
          Edit name
        </button> */}
      </main>
    );
  }
}
