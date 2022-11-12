import * as d3 from 'd3';
import { scaleBand } from 'd3';
import getDataType, { isKeyInObject } from '../common';

class LineGraphService {
  #container = null;

  #svg = null;

  #size = null;

  #xScale = null;

  #yScale = null;

  #data = [];

  #options = { xLabel: 'name', yLabel: 'value' };

  constructor(element, data) {
    this.#container = element;
    this.#container.style.maxWidth = `${element.clientWidth}px`;

    this.#container.style.overflowX = 'scroll';
    this.#container.style.overflowY = 'hidden';

    this.#data = data
      .map((d) => ({
        click: d.click,
        date: new Date(d.date)
      }))
      .sort((a, b) => a.date - b.date);

    this.#size = {
      width: this.#data.length * 100,
      height: element.clientHeight
    };

    this.#svg = d3
      .select(this.#container)
      .call((g) => {
        g.select('svg').remove();
      })
      .append('svg')
      .attr('viewBox', `0 0 ${this.#size.width} ${this.#size.height}`)
      .style('width', `${this.#size.width}px`)
      .style('height', `${this.#size.height}px`);

    const xScale = d3
      .scaleBand()
      .domain(this.#data.map((el) => el.date))
      .range([0, 100 * this.#data.length]);

    const yScale = d3
      .scaleLinear()
      .domain([0, 3000])
      .range([this.#size.height - 20, 20]);

    const line = d3
      .line()
      .x((d) => {
        const xPosition = xScale(d.date);
        const space = xScale.bandwidth() / 2;
        return xPosition + space;
      })
      .y((d) => yScale(d.click));

    this.#svg
      .append('g')
      .attr('class', 'axis x')
      .attr('transform', `translate(0, ${this.#size.height - 20})`)
      .call(
        d3
          .axisBottom(xScale)
          .ticks(this.#data.length)
          .tickFormat((d) => {
            const obj = new Date(d);
            const month = obj.getMonth() + 1;
            const date = obj.getDate();
            return `${month}월 ${date}일`;
          })
      );

    this.#svg
      .append('g')
      .attr('class', 'axis y')
      .attr('transform', `translate(${0}, 0)`)
      .call(
        d3
          .axisLeft(yScale)
          .ticks(6)
          .tickSize(this.#size.width * -1)
          .tickPadding(-10)
      );

    this.#svg
      .append('path')
      .datum(this.#data)
      .attr('fill', 'none')
      .attr('stroke', '#4FADF7')
      .attr('stroke-width', 2)
      .attr('d', line);
  }
}

export default LineGraphService;
