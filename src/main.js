export default function ProgressiveTimeout(callback, { min, max, step }) {
  this.tick = min;

  this.start = () => {
    const internalCallback = () => {
      this.tick += step;
      if (this.tick > max) this.tick = max;
      this.timeoutID = setTimeout(internalCallback, this.tick);
      callback();
    };

    this.timeoutID = setTimeout(internalCallback, this.tick);
  };

  this.stop = () => {
    clearTimeout(this.timeoutID);
  };

  return this;
}
