import { Formik, Field } from 'formik';
import * as FilterStyle from './FilterForm.styled';
import { filterBrand } from '../../redux/selectors';
import { useDispatch } from 'react-redux';
import { filtersCars } from '../../redux/CarSlice';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';
export const FilterForm = () => {
  const [age, setAge] = useState('');
  const handleChange = event => {
    setAge(event.target.value);
  };
  const dispatch = useDispatch();
  const optionBrand = () => {
    const option = [];
    for (let i = 0; i < filterBrand.length; i += 1) {
      option.push(
        <option key={i} value={filterBrand[i]}>
          {filterBrand[i]}
        </option>
      );
    }
    return option;
  };
  const optionVrice = () => {
    const option = [];
    for (let i = 30; i <= 500; i += 10) {
      option.push(
        <option key={i} value={i}>
          {i}
        </option>
      );
    }
    return option;
  };

  return (
    <div>
      <Formik
        initialValues={{
          brand: '',
          price: '',
          mileage: {
            from: '',
            to: '',
          },
        }}
        onSubmit={e => {
          dispatch(filtersCars(e));
        }}
      >
        {({ isSubmitting }) => (
          <FilterStyle.MyForm>
            <FilterStyle.MyLabel>
              <FilterStyle.Span> Car brand</FilterStyle.Span>
              <Field name="brand" as="select">
                <option value="">select a brand</option>
                {optionBrand()}
              </Field>
            </FilterStyle.MyLabel>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-simple-select-helper-label">Age</InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={age}
                label="Age"
                onChange={handleChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
              <FormHelperText>Price/ 1 hour</FormHelperText>
            </FormControl>
            <FilterStyle.Button type="submit">Search</FilterStyle.Button>
          </FilterStyle.MyForm>
        )}
      </Formik>
    </div>
  );
};
