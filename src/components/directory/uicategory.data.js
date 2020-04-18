//Images
import vegies from '../../assets/vegies2.png';
import meat from '../../assets/meat2.png';
import fish from '../../assets/fish5.png';
import spices from '../../assets/spices3.png';
import grains from '../../assets/grains1.png';
import fruits from '../../assets/fruits.png';
import frozen from '../../assets/frozen1.png';


export const UI_CATEGORY_LARGE = [
    {
        title: 'vegetables',
        imageUrl: `${vegies}`,
        id: 1,
        linkUrl: '/shop',
        size:'large'
      },
      {
        title: 'fruits',
        imageUrl: `${fruits}`,
        size: 'large',
        id: 2,
        linkUrl: '/shop'
      },
      {
        title: 'spices',
        imageUrl: `${spices}`,
        size: 'large',
        id: 3,
        linkUrl: '/'
      }
]

export const UI_CATEGORY_SMALL = [
    {
        title: 'grains',
        imageUrl: `${grains}`,
        id: 1,
        linkUrl: '/',
        size:'small'
      },
      {
        title: 'meat',
        imageUrl: `${meat}`,
        id: 2,
        linkUrl: '/',
        size:'small'
      },
      {
        title: 'fish',
        imageUrl: `${fish}`,
        id: 3,
        linkUrl: '/',
        size:'small'
      },
      {
        title: 'frozen',
        imageUrl: `${frozen}`,
        id: 4,
        linkUrl: '/',
        size:'small'
      },
     
]


