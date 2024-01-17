function toWatts(amps, volts) {
  amps < 0 || volts < 0
    ? console.log("Enter positive numbers!")
    : console.log(`${amps} A x ${volts} V = ${amps * volts} W`);
}

function toAmps(watts, volts) {
  watts < 0 || volts < 0
    ? console.log("Enter positive numbers!")
    : console.log(`${watts} W / ${volts} V = ${watts / volts} A`);
}

function toVolts(watts, amps) {
  watts < 0 || amps < 0
    ? console.log("Enter positive numbers!")
    : console.log(`${watts} W / ${amps} A = ${watts / amps} V`);
}

module.exports = { toWatts, toAmps, toVolts };
