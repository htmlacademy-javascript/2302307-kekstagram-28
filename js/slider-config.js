const format = {
  to: function (value) {
    if (Number.isInteger(value)) {
      return Number(value.toFixed(0));
    }
    return Number(value.toFixed(1));
  },
  from: function (value) {
    return parseFloat(value);
  }
};

const chromeFilter = {
  start: 1,
  step: 0.1,
  connect: 'lower',
  range: {
    min: 0,
    max: 1,
  },
  format: format
};

const sepiaFilter = {
  start: 1,
  step: 0.1,
  connect: 'lower',
  range: {
    min: 0,
    max: 1,
  },
  format: format
};

const marvinFilter = {
  start: 100,
  step: 1,
  connect: 'lower',
  range: {
    min: 0,
    max: 100,
  },
  format: format,
};

const phobosFilter = {
  start: 3,
  step: 0.1,
  connect: 'lower',
  range: {
    min: 0,
    max: 3,
  },
  format: format
};

const heatFilter = {
  start: 3,
  step: 0.1,
  connect: 'lower',
  range: {
    min: 1,
    max: 3,
  },
  format: format
};

const sliderConfig = {
  chrome: chromeFilter,
  sepia: sepiaFilter,
  marvin: marvinFilter,
  phobos: phobosFilter,
  heat: heatFilter
};

export { sliderConfig };
