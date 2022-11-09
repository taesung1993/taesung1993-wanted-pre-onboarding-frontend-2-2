import * as d3 from 'd3';
import getDataType, { isKeyInObject } from '../common';

class LineGraphService {
  #container = null;

  #svg = null;

  #size = null;

  #xScale = null;

  #yScale = null;

  #data = new Map();

  #options = { keyName: 'name', valueName: 'value' };

  constructor(element) {
    if (!this.#isElementType(element)) {
      throw new Error('HTML 태그를 삽입해주세요.');
    }
    this.#init(element);
    this.#setScale();
  }

  #isElementType(el) {
    return el instanceof HTMLElement;
  }

  #init(el) {
    this.#container = d3.select(el);
    this.#container.select('svg').remove();
    this.#size = {
      width: this.#container.node().clientWidth,
      height: this.#container.node().clientHeight
    };
    this.#svg = this.#container
      .append('svg')
      .style('position', 'absolute')
      .style('top', 0)
      .style('left', 0)
      .attr('width', this.#size.width)
      .attr('height', this.#size.height)
      .append('g')
      .attr('transform', 'translate(0, 0)');
  }

  setData(data, options = null) {
    if (getDataType(data) !== 'Array') {
      throw new Error('data는 배열 형태로 들어와야 합니다.');
    }

    if (options) {
      if (getDataType(options) !== 'Object') {
        throw new Error(
          `options는 ${JSON.stringify(this.#options)} 형식만 가능합니다.`
        );
      }

      if (
        !isKeyInObject(options, 'keyName') ||
        !isKeyInObject(options, 'valueName')
      ) {
        throw new Error(
          `options는 ${JSON.stringify(this.#options)} 형식만 가능합니다.`
        );
      }

      this.#options = options;
    }

    this.#data.set(this.#options.keyName, data);

    return this;
  }

  #setScale() {
    this.#xScale = d3
      .scaleBand()
      .rangeRound([this.#size.width, 0])
      .paddingOuter(0)
      .align(0);

    this.#yScale = d3.scaleLinear().range([this.#size.height - 30, 0]);
  }
}

export default LineGraphService;
