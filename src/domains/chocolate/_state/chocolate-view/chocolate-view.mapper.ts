import { ChocolateViewData } from "../../_entities/_interfaces/chocolate-view-data.interface";
import { Chocolate } from "../../_entities/_models/chocolate.class";
import { Price } from "../../_entities/_models/price.class";
import { flow as _flow, filter as _filter, map as _map, mean as _mean , min as _min, reduce as _reduce, get as _get } from 'lodash/fp';

export const toChocolateViewData = ({id, prices}: Chocolate): ChocolateViewData => ({
  id, link: toLink(prices), minimumPrice: toMinimumPrice(prices), averagePrice: toAveragePrice(prices)
}) 

export const toAveragePrice = (prices: Price[]): number => _flow(
  _filter(({amount}) => amount === 100),
  _map('price'),
  _mean
)(prices)

export const toMinimumPrice = (prices: Price[]): number => _flow(
  _filter(({amount}) => amount === 100),
  _map('price'),
  _min
)(prices)

export const toLink = (prices: Price[]): string => _flow(
  _reduce<any, any>((result, value) => (result.price < value.price? result: value), new Price()),
  _get('link')
)(prices)