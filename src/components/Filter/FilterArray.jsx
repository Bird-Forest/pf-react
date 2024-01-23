import React from 'react';
import {
  BtnClear,
  FilterForm,
  FilterWrap,
  InputRange,
  LabelRange,
  OptionForm,
  RangeWrap,
  SelectForm,
  SpanRange,
} from './Product.styled';

function getCategories(items, itemName) {
  if (!items) return [];
  return items.reduce((acc, item) => {
    if (!acc.includes(item[itemName])) acc.push(item[itemName]);
    return acc.sort((a, b) => a.localeCompare(b));
  }, []);
}

export default function FilterArray({
  friends,
  filters,
  getFilter,
  age,
  onRange,
  clearFilter,
}) {
  const country = getCategories(friends, 'country');
  const animal = getCategories(friends, 'animal');
  const job = getCategories(friends, 'job');
  const music = getCategories(friends, 'music');

  const handleOnChangeFilter = event => {
    const key = event.target.name;
    const value = event.target.value;
    console.log({ [key]: value });
    getFilter(event);
    // filterProducts(key, value);
  };

  const handleOnChangeValue = event => {
    const newValue = event.target.value;
    onRange(newValue);
    console.log(newValue);
  };

  return (
    <FilterWrap>
      <FilterForm>
        <SelectForm
          id="country"
          name="country"
          value={filters.country || ''}
          onChange={handleOnChangeFilter}
        >
          <OptionForm value="">Country</OptionForm>
          {country.map(option => (
            <OptionForm key={option} value={option}>
              {option}
            </OptionForm>
          ))}
        </SelectForm>
      </FilterForm>
      <FilterForm>
        <SelectForm
          id="animal"
          name="animal"
          value={filters.animal || ''}
          onChange={handleOnChangeFilter}
        >
          <OptionForm value="">Animal</OptionForm>
          {animal.map(option => (
            <OptionForm key={option} value={option}>
              {option}
            </OptionForm>
          ))}
        </SelectForm>
      </FilterForm>
      <FilterForm>
        <SelectForm
          id="job"
          name="job"
          value={filters.job || ''}
          onChange={handleOnChangeFilter}
        >
          <OptionForm value="">Job</OptionForm>
          {job.map(option => (
            <OptionForm key={option} value={option}>
              {option}
            </OptionForm>
          ))}
        </SelectForm>
      </FilterForm>
      <FilterForm>
        <SelectForm
          id="music"
          name="music"
          value={filters.music || ''}
          onChange={handleOnChangeFilter}
        >
          <OptionForm value="">Music</OptionForm>
          {music.map(option => (
            <OptionForm key={option} value={option}>
              {option}
            </OptionForm>
          ))}
        </SelectForm>
      </FilterForm>
      <RangeWrap>
        <LabelRange htmlFor="age">Age</LabelRange>
        <InputRange
          type="range"
          id="age"
          name="age"
          min={10}
          max={100}
          step={5}
          value={age}
          onChange={handleOnChangeValue}
        />
        <SpanRange id="ranger">{age}</SpanRange>
      </RangeWrap>
      <BtnClear type="button" onClick={clearFilter}>
        Clear
      </BtnClear>
    </FilterWrap>
  );
}
