function NumFormatter(props) {
  const data = props.userData;

  if (data > 999999) {
    return (data / 1000000).toFixed(1) + "M";
  } else if (data > 999) {
    return (data / 1000).toFixed(1) + "K";
  } else {
    return data;
  }
}

export default NumFormatter;
