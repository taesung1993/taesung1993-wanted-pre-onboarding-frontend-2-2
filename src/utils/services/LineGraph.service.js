import * as d3 from 'd3';

class LineGraphService {
  #container = null;

  #svg = null;

  #size = null;

  #data = [];

  constructor(element, data) {
    this.#container = element;
    this.#container.style.overflowX = 'scroll';
    this.#container.style.overflowY = 'hidden';

    this.#data = data;

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
  }

  mainDraw(keyword) {
    this.#drawGraph('main', keyword, '#4FADF7');
  }

  subDraw(keyword) {
    this.#drawGraph('sub', keyword, '#85DA47');
  }

  #drawGraph(name, keyword, color) {
    const data = [...this.#data]
      .map((d) => ({
        [keyword]: d[keyword],
        date: new Date(d.date)
      }))
      .sort((a, b) => a.date - b.date);

    const xScale = d3
      .scaleBand()
      .domain(data.map((el) => el.date))
      .range([0, 100 * data.length]);

    const yScale = d3
      .scaleLinear()
      .domain([0, 3000])
      .range([this.#size.height - 20, 0]);

    const line = d3
      .line()
      .x((d) => {
        const xPosition = xScale(d.date);
        const space = xScale.bandwidth() / 2;
        return xPosition + space;
      })
      .y((d) => yScale(d[keyword]));

    this.#svg.select(`g.${name}`).remove();

    const graph = this.#svg.append('g').attr('class', name);

    graph
      .append('g')
      .attr('class', 'axis x')
      .attr('transform', `translate(0, ${this.#size.height - 20})`)
      .style('color', '#94A2AD')
      .call(
        d3
          .axisBottom(xScale)
          .tickPadding(5)
          .tickSizeInner(0)
          .ticks(data.length)
          .tickFormat((d) => {
            const obj = new Date(d);
            const month = obj.getMonth() + 1;
            const date = obj.getDate();
            return `${month}월 ${date}일`;
          })
      );

    graph
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

    graph
      .append('path')
      .datum(data)
      .attr('fill', 'none')
      .attr('stroke', color)
      .attr('stroke-width', 2)
      .attr('d', line);

    return this;
  }
}

export default LineGraphService;
