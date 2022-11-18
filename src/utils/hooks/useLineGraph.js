import { useCallback, useEffect, useRef, useState } from 'react';
import LineGraphService from '../services/LineGraph.service';

export default function useLineGraph(data) {
  const ref = useRef();
  const [graph, setGraph] = useState(null);
  const mainDraw = useCallback(
    (keyword) => {
      if (!graph) {
        throw new Error('그래프 객체가 생성되지 않았습니다.');
      }

      graph.mainDraw(keyword);
    },
    [graph]
  );

  const subDraw = useCallback(
    (keyword) => {
      if (!graph) {
        throw new Error('그래프 객체가 생성되지 않았습니다.');
      }
      graph.subDraw(keyword);
    },
    [graph]
  );

  useEffect(() => {
    if (ref.current) {
      setGraph(() => new LineGraphService(ref.current, data));
    }
  }, []);

  return { ref, graph, mainDraw, subDraw };
}
