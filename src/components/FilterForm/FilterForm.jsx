import {
  Form,
  Label,
  Select,
  Input,
  Span,
  Button,
  Box,
} from './FilterForm.styled';
import { filterBrand, selectFilters } from '../../redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { filtersCars } from '../../redux/CarSlice';

export const FilterForm = () => {
  const locValForm = useSelector(selectFilters);
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
  const subForm = e => {
    e.preventDefault();
    const form = e.target;
    const { brand, price, from, to } = form.elements;
    const data = {
      brand: brand.value,
      price: price.value,
      from: from.value,
      to: to.value,
    };

    dispatch(filtersCars(data));
  };
  return (
    <div>
      <Form onSubmit={e => subForm(e)}>
        <Label>
          <Span> Car brand</Span>
          <Select
            defaultValue={locValForm.brand}
            placeholder="Select a brand"
            $width="224px"
            name="brand"
          >
            <option value=""></option>
            {optionBrand()}
          </Select>
        </Label>
        <Label>
          <Span> Price/ 1 hour</Span>

          <Select
            defaultValue={locValForm.price}
            $width="125px"
            name="price"
            as="select"
          >
            <option value="">To $</option>
            {optionPrice()}
          </Select>
        </Label>

        <Box>
          <Input
            style={{
              width: '160px',
              borderRadius: '14px 0 0 14px',
              borderRight: '1px solid rgba(138, 138, 137, 0.2)',
            }}
            defaultValue={locValForm.from}
            type="number"
            name="from"
            placeholder="From"
          ></Input>
          <Input
            style={{ borderRadius: '0 14px 14px 0', width: '160px' }}
            defaultValue={locValForm.to}
            type="number"
            name="to"
            placeholder="To"
          ></Input>
        </Box>

        <Button type="submit">Search</Button>
      </Form>
    </div>
  );
};
