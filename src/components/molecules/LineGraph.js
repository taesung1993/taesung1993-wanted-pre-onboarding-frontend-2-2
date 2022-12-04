import React, { useEffect } from 'react';
import TrendData from '../../utils/data/trend.json';
import useLineGraph from '../../utils/hooks/useLineGraph';

const data = TrendData.report.daily;

export default function LineGraph() {
  const { ref, graph, mainDraw, subDraw } = useLineGraph(data);

  useEffect(() => {
    if (graph) {
      mainDraw('roas');
      subDraw('click');
      mainDraw('cpc');
    }
  }, [graph]);

  return (
    <section
      ref={ref}
      style={{
        position: 'relative',
        width: '100%',
        height: 274,
        backgroundColor: '#fff'
      }}
    />
  );
}
