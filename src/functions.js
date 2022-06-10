function sun(sunriseSeconds, sunsetSeconds) {
  const time = Math.floor(Date.now() / 1000);
  if (time > sunriseSeconds && time < sunsetSeconds) {
    let x = (time - sunriseSeconds) / (sunsetSeconds - sunriseSeconds) * 300;
    let y = -50 + Math.sqrt(150 * 150 - Math.pow((x - 150), 2));
    return {bottom: y, left: x};
  } else {
    return {display: 'none'};
  }
}

let objToGet = (obj) => {
  var str = [];
  for (var p in obj)
    if (obj.hasOwnProperty(p)) {
      str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
    }
  return str.join("&");
}

export {sun, objToGet};
