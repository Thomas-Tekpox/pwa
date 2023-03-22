class PlaybulbCandle {
  constructor() {
    this.device = null;
    this.onDisconnected = this.onDisconnected.bind(this);
  }

  request() {
    let options = { filters: [{ services: [65282] }] };

    return navigator.bluetooth.requestDevice(options).then((device) => {
      this.device = device;
      this.device.addEventListener(
        "gattserverdisconnected",
        this.onDisconnected
      );
    });
  }

  connect() {
    if (!this.device) {
      return Promise.reject("Device is not connected.");
    }
    return this.device.gatt.connect();
  }

  writeColor(data) {
    return this.device.gatt
      .getPrimaryService(0xff02)
      .then((service) => service.getCharacteristic(0xfffc))
      .then((characteristic) => characteristic.writeValue(data));
  }

  disconnect() {
    if (!this.device) {
      return Promise.reject("Device is not connected.");
    }
    return this.device.gatt.disconnect();
  }

  onDisconnected() {
    console.log("Device is disconnected.");
  }

  getMacAddress() {
    return this.device.gatt
      .getPrimaryService(0xff02)
      .then((service) => service.getCharacteristic(0xffff))
      .then((characteristic) => characteristic.readValue());

    return this.device.gatt
      .getPrimaryService(0xff02)
      .then((service) => service.getCharacteristic(0xfffc))
      .then((characteristic) =>
        characteristic.writeValue(new Uint8Array([100]))
      )
      .then(characteristic.readValue())
      .then((value) => {
        if (value.getUint8(0) !== 100) {
          return Promise.reject(
            "Unexpected ID when reading command characteristic"
          );
        }
        let bytes = [];
        for (let i = 6; i < 12; i++) {
          bytes.push(
            ("00" + value.getUint8(i).toString(16).toUpperCase()).slice(-2)
          );
        }
        let macAddress = bytes.join(":");
        alert(macAddress);
        return macAddress;
      });
  }
}
