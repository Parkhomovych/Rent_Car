import { Formik, Field } from 'formik';
import * as FilterStyle from './FilterForm.styled';
import { filterBrand } from '../../redux/selectors';
import { useDispatch } from 'react-redux';
import { filtersCars } from '../../redux/CarSlice';

export const FilterForm = () => {
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
  const optionPrice = () => {
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
          from: '',
          to: '',
        }}
        onSubmit={e => {
          dispatch(filtersCars(e));
        }}
      >
        {props => {
          return (
            <FilterStyle.MyForm>
              <FilterStyle.MyLabel>
                <FilterStyle.Span> Car brand</FilterStyle.Span>
                <FilterStyle.MySelect $width="224px" name="price" as="select">
                  <option value="">Select a brand</option>
                  {optionBrand()}
                </FilterStyle.MySelect>
              </FilterStyle.MyLabel>
              <FilterStyle.MyLabel>
                <FilterStyle.Span> Price/ 1 hour</FilterStyle.Span>
                <FilterStyle.MySelect $width="125px" name="price" as="select">
                  <option value="">To $</option>
                  {optionPrice()}
                </FilterStyle.MySelect>
              </FilterStyle.MyLabel>
              <FilterStyle.MyLabel>
                <Field type="number" name="from" placeholder="From"></Field>
                <Field type="number" name="to" placeholder="To"></Field>
              </FilterStyle.MyLabel>

              <FilterStyle.Button type="submit">Search</FilterStyle.Button>
            </FilterStyle.MyForm>
          );
        }}
      </Formik>
    </div>
  );
};
