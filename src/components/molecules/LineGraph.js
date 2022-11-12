import React, { useEffect, useRef } from 'react';
import LineGraphService from '../../utils/services/LineGraph.service';
import TrendData from '../../utils/data/trend.json';

const data = TrendData.report.daily;
export default function LineGraph() {
  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      const graph = new LineGraphService(ref.current, data);
      console.log('use Effect');
    }
  }, [ref.current]);
  return (
    <section
      ref={ref}
      style={{
        position: 'relative',
        width: '100%',
        height: 0,
        paddingBottom: '28.5%',
        backgroundColor: '#fff'
      }}
    />
  );
}
