import { useSelector } from 'react-redux';
import { Box } from 'Box';
import { getFilterValue } from 'components/redux/filterSlice';
import { PropTypes } from 'prop-types';
import { useEffect, useRef } from 'react';

export const FilterContacts = ({ handleFilterContacts }) => {
  const filterValue = useSelector(getFilterValue);
  const inputFilterRef = useRef();
  useEffect(() => {
    inputFilterRef.current.value = filterValue;
  });
  return (
    <Box
      display="flex"
      width="100%"
      justifyContent="space-between"
      flexDirection="column"
      pt={5}
      pb={5}
    >
      <label htmlFor="filter">Filter</label>
      <input
        type="text"
        ref={inputFilterRef}
        name="filterName"
        onChange={handleFilterContacts}
      />
    </Box>
  );
};

FilterContacts.propTypes = {
  handleFilterContacts: PropTypes.func.isRequired,
};
