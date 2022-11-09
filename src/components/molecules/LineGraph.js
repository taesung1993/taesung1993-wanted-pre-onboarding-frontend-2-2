import React, { useEffect, useRef } from 'react';
import LineGraphService from '../../utils/services/LineGraph.service';

// const data = [
//   {
//     name: '테스트',
//     value: 90
//   },
//   {
//     name: '테스트2',
//     value: 0
//   },
//   {
//     name: '테스트3',
//     value: 90
//   },
//   {
//     name: '테스트4',
//     value: 44
//   },
//   {
//     name: '테스트5',
//     value: 30
//   },
//   {
//     name: '테스트6',
//     value: 80
//   }
// ];
export default function LineGraph() {
  const ref = useRef();

  useEffect(() => {
    const line = new LineGraphService(ref.current).setData([]);
    console.log(line);
    // container.select('svg').remove();

    // const size = {
    //   width: container.node().clientWidth,
    //   height: container.node().clientHeight,
    //   get space() {
    //     // eslint-disable-next-line react/no-this-in-sfc
    //     return Math.floor((this.height * 0.876) / 6);
    //   }
    // };
    // const svg = container
    //   .append('svg')
    //   .style('position', 'absolute')
    //   .style('top', 0)
    //   .style('left', 0)
    //   .attr('width', size.width)
    //   .attr('height', size.height)
    //   .append('g')
    //   .attr('transform', 'translate(0, 0)');

    // const xScale = d3
    //   .scaleBand()
    //   .rangeRound([size.width, 0])
    //   .paddingOuter(0)
    //   .align(0);

    // const yScale = d3
    //   .scaleLinear()
    //   .domain([0, 100])
    //   .range([size.height - 30, 0]);

    // const xAxis = d3.axisBottom(xScale).ticks(5).tickSize(size.height);
    // const yAxis = d3.axisLeft(yScale).ticks(5).tickSize(-size.width);

    // xScale.domain(data.map((el) => el.name).reverse());

    // svg
    //   .append('g')
    //   .attr('class', 'y axis')
    //   .attr('transfrom', 'translate(0, 0)')
    //   .call(yAxis);

    // svg.append('g').attr('class', 'x axis').call(xAxis);

    // svg
    //   .select('g.x.axis')
    //   .selectAll('g')
    //   .each((_, index, group) => {
    //     const item = d3.select(group[index]);
    //     const transform = item.attr('transform');
    //     const [x] = transform.replace(/[^0-9|,]/g, '').split(',');
    //     item.attr('transform', `translate(${x}, -25)`);
    //   });

    // const valueLine = d3
    //   .line()
    //   .x((d) => {
    //     const result = xScale(d.name);
    //     const space = Math.floor(xScale.bandwidth() / 2);
    //     return result + space;
    //   })
    //   .y((d) => yScale(d.value));

    // svg
    //   .append('path')
    //   .attr('class', 'line')
    //   .attr('d', valueLine(data.reverse()))
    //   .style('fill', 'none')
    //   .style('stroke', '#4FADF7')
    //   .style('stroke-width', '2px');
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
