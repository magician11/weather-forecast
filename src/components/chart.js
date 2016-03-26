import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import _ from 'lodash';

export default (props) => {
  function average(data) {
    return _.round(_.sum(data) / data.length);
  }

  return (
    <div>
      <Sparklines data={props.data} height={props.height}>
        <SparklinesLine color={props.colour} />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <div>{average(props.data)}{props.units}</div>
    </div>
  );
};
