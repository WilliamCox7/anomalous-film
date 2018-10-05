import React from 'react';
import ItemInformation from '../../../components/ItemInformation';

export default function buildList(list) {
  return list.map((item, i) => {
    return (
      <div className="list-item" key={i}>
        <img className="background-img" src={item.background} />
        <div className="gradient-overlay" style={{
          backgroundImage: `linear-gradient(45deg, ${item.gradient} 20%, transparent)`
        }}></div>
        <div className="gradient-overlay" style={{
          backgroundImage: `linear-gradient(325deg, black 10%, transparent)`
        }}></div>
        <ItemInformation item={item} />
        <div className="item-ranking">{i+1}</div>
      </div>
    );
  });
}
