import { Chocolate } from '../../_entities/_models/chocolate.model';
import { Price } from '../../_entities/_models/price.model';
import * as testUnit from './chocolate-view.mapper';

describe('toChocolateViewData', () => {
  it('should get chocolate view data', () => {
    const chocoalte = new Chocolate({id: '1234'});
    const result =  testUnit.toChocolateViewData(chocoalte);

    expect(result).toEqual({id: '1234', averagePrice: NaN, minimumPrice: undefined!, link: undefined!})
  })
})

describe('toAveragePrice', () => {
  it('should get average price', () => {
    const prices = [new Price({amount: 100, price: 4}), new Price({amount: 100, price: 2}), new Price({amount: 200, price: 3})];

    const result =  testUnit.toAveragePrice(prices);

    expect(result).toEqual(3)
  })
})

describe('toMinimumPrice', () => {
  it('should get minimum price', () => {
    const prices = [new Price({amount: 100, price: 4}), new Price({amount: 100, price: 2}), new Price({amount: 200, price: 3})];

    const result =  testUnit.toMinimumPrice(prices);

    expect(result).toEqual(2)
  })
})

describe('toLink', () => {
  it('should get the cheapest shop link', () => {
    const prices = [new Price({amount: 100, price: 4}), new Price({amount: 100, price: 2, link: 'wwww'}), new Price({amount: 200, price: 3})];

    const result =  testUnit.toLink(prices);

    expect(result).toEqual('wwww')
  })
})