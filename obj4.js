var m1 = {
  call: function () {
    console.log("Calling!!");
  },
};

var mobile = Object.create(
  {},
  {
    brand: { value: "Apple", writable: false, enumerable: true, configurable: true },
    model: { value: "Iphone 14", enumerable: true },
  }
);

Object.defineProperty(mobile, "brand", {
  writable: true,
  enumerable: false,
});

mobile.brand = "Redmi";

//mobile.brand = "Samsung";
console.log(mobile.call());
