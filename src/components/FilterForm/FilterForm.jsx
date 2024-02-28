import {
  Form,
  Label,
  FilterInput,
  ArrowDown,
  ArrowUp,
  Span,
  BoxList,
  Option,
  ValuePrice,
  SubmitBtn,
  BoxLabel,
} from './FilterForm.styled';

import { useDispatch, useSelector } from 'react-redux';
import { filtersCars } from '../../redux/CarSlice';
import { filterBrand, selectFilters } from '../../redux/selectors';
import { useState } from 'react';
import { nanoid } from 'nanoid';

export const FilterForm = () => {
  const { brand, price, from, to } = useSelector(selectFilters);

  const [isShowBrand, setisShowBrand] = useState(false);
  const [brandValue, setBrandValue] = useState(brand);

  const [isFocusPrice, setIsFocusPrice] = useState(false);
  const [priceValue, setPriceValue] = useState(price);

  const dispatch = useDispatch();

  const handleIsShowBrand = () => {
    setisShowBrand(pS => !pS);
  };
  const handleValueBrand = e => {
    setisShowBrand(true);
    setBrandValue(e.target.value);
    if ((e.target.nodeName !== 'UL') & (e.target.nodeName !== 'INPUT')) {
      setBrandValue(e.target.textContent);
    }
  };

  const handleIsShowPrice = () => {
    setIsFocusPrice(pS => !pS);
  };
  const handleTextContentPrice = e => {
    if (e.target.nodeName !== 'UL') {
      setPriceValue(e.target.textContent);
    }
  };
  const optionPrice = () => {
    const item = [];
    for (let i = 30; i <= 500; i += 10) {
      if (Number(priceValue) === i) {
        item.push(
          <li key={nanoid(10)}>
            <Option $active={true}>{i}</Option>
          </li>
        );
        continue;
      }
      item.push(
        <li key={nanoid(10)}>
          <Option $active={false}>{i}</Option>
        </li>
      );
    }
    return item;
  };
  const subForm = e => {
    e.preventDefault();
    const form = e.target;
    const { from, to } = form.elements;
    const data = {
      brand: brandValue,
      price: priceValue,
      from: from.value,
      to: to.value,
    };

    dispatch(filtersCars(data));
  };

  return (
    <div>
      <Form onSubmit={e => subForm(e)}>
        <BoxLabel>
          <Label
            onMouseEnter={handleIsShowBrand}
            onMouseLeave={handleIsShowBrand}
            $width="224px"

          >
            {isShowBrand ? <ArrowUp /> : <ArrowDown />}
            <Span> Car brand</Span>
            <FilterInput
              type="text"
              name="brand"
              placeholder="Enter the text"
              autoComplete="off"
              value={brandValue}
              title=""
              $width="224px"
              onChange={handleValueBrand}
            />
            {isShowBrand && (
              <BoxList
                onClick={e => handleValueBrand(e)}
                $width="224px"
                $height="188px"
              >
                {filterBrand.map((i, idx) => {
                  if (
                    i?.toLocaleLowerCase() ===
                    brandValue?.toLocaleLowerCase()?.trim()
                  ) {
                    return (
                      <li key={nanoid(10)}>
                        <Option $active={true}>{i}</Option>
                      </li>
                    );
                  }
                  return (
                    <li key={nanoid(10)}>
                      <Option $active={false}>{i}</Option>
                    </li>
                  );
                })}
              </BoxList>
            )}
          </Label>
          <Label
            onMouseEnter={handleIsShowPrice}
            onMouseLeave={handleIsShowPrice}
            $width="125px"
          >
            {isFocusPrice ? <ArrowUp /> : <ArrowDown />}
            <Span> Price/ 1 hour</Span>
            <FilterInput
              type="text"
              name="price"
              $width="125px"
              $cursor="pointer"
              title=""
              readOnly
            ></FilterInput>
            <ValuePrice>{`To ${priceValue}$`}</ValuePrice>
            {isFocusPrice && (
              <BoxList
                onClick={e => handleTextContentPrice(e)}
                $width="125px"
                $height="188px"
              >
                <li key={nanoid(10)}>
                  <Option $active={false}>0</Option>
                </li>
                {optionPrice()}
              </BoxList>
            )}
          </Label>
        </BoxLabel>
        <Label>
          <Span>Car mileage / km</Span>
          <FilterInput
            style={{
              borderRadius: '14px 0 0 14px',
              borderRight: '1px solid rgba(138, 138, 137, 0.2)',
            }}
            type="number"
            name="from"
            placeholder="From"
            defaultValue={from}
            $width="160px"
          ></FilterInput>
          <FilterInput
            style={{ borderRadius: '0 14px 14px 0' }}
            type="number"
            name="to"
            placeholder="To"
            defaultValue={to}
            $width="160px"
          ></FilterInput>
        </Label>
        <SubmitBtn type="submit">Search</SubmitBtn>
      </Form>
    </div>
  );
};
