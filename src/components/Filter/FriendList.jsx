import React, { useEffect, useState } from 'react';
import { fetchFriends } from './product-api';
import { Loading } from 'components/Loader/Loading';
import {
  BtnFilter,
  FilterBar,
  FilterMobileWrap,
  FilterWrap,
  FriendsList,
} from './Product.styled';
import FilterArray from './FilterArray';
import MobileMenu from 'components/MobileMenu';
import WindowWidth from 'components/WindowWidth';
import FriendItem from './FriendItem';
import { nanoid } from '@reduxjs/toolkit';

export default function FriendList() {
  const [isHidden, setIsHidden] = useState(true);
  const [friends, setFriends] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [age, setAge] = useState(0);
  const [filters, setFilters] = useState({
    country: '',
    animal: '',
    job: '',
    music: '',
  });

  const clearFilter = () => {
    setFilters({
      country: '',
      animal: '',
      job: '',
      music: '',
    });
    setAge(0);
  };

  useEffect(() => {
    getFriends();
    return () => {};
  }, []);

  const getFriends = async () => {
    try {
      setIsLoading(true);
      const response = await fetchFriends();
      setFriends(response);
    } catch (error) {
      console(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const getFilter = event => {
    setFilters(prevFilters => ({
      ...prevFilters,
      [event.target.name]: event.target.value,
    }));
  };

  const onRange = newValue => {
    setAge(newValue);
  };

  function filterFriends(friends, filters) {
    if (filters.country !== '') {
      friends = friends.filter(friend =>
        friend.country.includes(filters.country)
      );
    }
    if (filters.animal !== '') {
      friends = friends.filter(friend =>
        friend.animal.includes(filters.animal)
      );
    }
    if (filters.job !== '') {
      friends = friends.filter(friend => friend.job.includes(filters.job));
    }
    if (filters.music !== '') {
      friends = friends.filter(friend => friend.music.includes(filters.music));
    }
    if (age >= 10 && age < 100) {
      friends = friends.filter(friend => friend.age <= age);
    }

    return friends;
  }

  const filterArray = filterFriends(friends, filters);

  const widthVuport = WindowWidth();

  const Arr = Array.isArray(filterArray) && filterArray.length > 0;

  return (
    <>
      <FilterBar>
        {isLoading && <Loading />}
        <MobileMenu />
        <BtnFilter onClick={() => setIsHidden(!isHidden)}>Filters</BtnFilter>
        {widthVuport < 768 ? (
          !isHidden && (
            <FilterMobileWrap
              style={{
                transform: isHidden ? 'translate(0, -100%)' : 'translate(0, 0)',
              }}
            >
              <FilterArray
                getFilter={getFilter}
                friends={friends}
                filters={filters}
                clearFilter={clearFilter}
                age={age}
                onRange={onRange}
              />
            </FilterMobileWrap>
          )
        ) : (
          <FilterWrap>
            <FilterArray
              getFilter={getFilter}
              friends={friends}
              filters={filters}
              clearFilter={clearFilter}
              age={age}
              onRange={onRange}
            />
          </FilterWrap>
        )}
      </FilterBar>
      <FriendsList>
        {Arr &&
          filterArray.map(item => {
            return <FriendItem key={nanoid()} item={item} />;
          })}
      </FriendsList>
    </>
  );
}
