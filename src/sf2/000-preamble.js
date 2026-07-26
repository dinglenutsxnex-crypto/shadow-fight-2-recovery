!(function () {
  try {
    var e =
        "undefined" != typeof window
          ? window
          : "undefined" != typeof global
            ? global
            : "undefined" != typeof globalThis
              ? globalThis
              : "undefined" != typeof self
                ? self
                : {},
      n = new e.Error().stack;
    n &&
      ((e._sentryDebugIds = e._sentryDebugIds || {}),
      (e._sentryDebugIds[n] = "b6e40934-eb74-5a0a-971c-411d77b5b790"));
  } catch (e) {}
})();
var Ls =
  typeof Object.defineProperties == "function"
    ? Object.defineProperty
    : function (Ka, va, Ra) {
        if (Ka == Array.prototype || Ka == Object.prototype) return Ka;
        Ka[va] = Ra.value;
        return Ka;
      };
function gy(Ka) {
  Ka = [
    "object" == typeof globalThis && globalThis,
    Ka,
    "object" == typeof window && window,
    "object" == typeof self && self,
    "object" == typeof global && global,
  ];
  for (var va = 0; va < Ka.length; ++va) {
    var Ra = Ka[va];
    if (Ra && Ra.Math == Math) return Ra;
  }
  throw Error("Cannot find global object");
}
var Qy = gy(this),
  Ry =
    "Int8 Uint8 Uint8Clamped Int16 Uint16 Int32 Uint32 Float32 Float64".split(
      " ",
    );
Qy.BigInt64Array && (Ry.push("BigInt64"), Ry.push("BigUint64"));
function Sy(Ka, va) {
  if (va)
    for (var Ra = 0; Ra < Ry.length; Ra++)
      xz(Ry[Ra] + "Array.prototype." + Ka, va);
}
function yz(Ka, va) {
  va && xz(Ka, va);
}
function xz(Ka, va) {
  var Ra = Qy;
  Ka = Ka.split(".");
  for (var qb = 0; qb < Ka.length - 1; qb++) {
    var Fd = Ka[qb];
    if (!(Fd in Ra)) return;
    Ra = Ra[Fd];
  }
  Ka = Ka[Ka.length - 1];
  qb = Ra[Ka];
  va = va(qb);
  va != qb &&
    va != null &&
    Ls(Ra, Ka, { configurable: !0, writable: !0, value: va });
}
yz("String.prototype.replaceAll", function (Ka) {
  return Ka
    ? Ka
    : function (va, Ra) {
        if (va instanceof RegExp && !va.global)
          throw new TypeError(
            "String.prototype.replaceAll called with a non-global RegExp argument.",
          );
        return va instanceof RegExp
          ? this.replace(va, Ra)
          : this.replace(
              new RegExp(
                String(va)
                  .replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1")
                  .replace(/\x08/g, "\\x08"),
                "g",
              ),
              Ra,
            );
      };
});
yz("Set.prototype.intersection", function (Ka) {
  return Ka
    ? Ka
    : function (va) {
        if (!(this instanceof Set))
          throw new TypeError("Method must be called on an instance of Set.");
        if (
          typeof va !== "object" ||
          va === null ||
          typeof va.size !== "number" ||
          va.size < 0 ||
          typeof va.keys !== "function" ||
          typeof va.has !== "function"
        )
          throw new TypeError("Argument must be set-like");
        var Ra = new Set();
        if (this.size <= va.size) va = { DNa: this.keys(), AFa: va };
        else {
          va = va.keys();
          if (
            typeof va !== "object" ||
            va === null ||
            typeof va.next !== "function"
          )
            throw new TypeError("Invalid iterator.");
          va = { DNa: va, AFa: this };
        }
        var qb = va;
        va = qb.DNa;
        qb = qb.AFa;
        for (var Fd = va.next(); !Fd.done; )
          (qb.has(Fd.value) && Ra.add(Fd.value), (Fd = va.next()));
        return Ra;
      };
});
function zz(Ka, va, Ra) {
  Ka instanceof String && (Ka = String(Ka));
  for (var qb = Ka.length - 1; qb >= 0; qb--) {
    var Fd = Ka[qb];
    if (va.call(Ra, Fd, qb, Ka)) return { sn: qb, G: Fd };
  }
  return { sn: -1, G: void 0 };
}
yz("Array.prototype.findLastIndex", function (Ka) {
  return Ka
    ? Ka
    : function (va, Ra) {
        return zz(this, va, Ra).sn;
      };
});
Sy("findLastIndex", function (Ka) {
  return Ka
    ? Ka
    : function (va, Ra) {
        return zz(this, va, Ra).sn;
      };
});
