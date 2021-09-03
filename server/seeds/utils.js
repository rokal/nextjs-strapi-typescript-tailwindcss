function stringifyData(data) {
  return JSON.stringify(data, null, 2);
}

const log = (data) => console.log(stringifyData(data));
