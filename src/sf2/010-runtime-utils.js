// 010-runtime-utils.js — Haxe runtime helpers: string, array, number utilities
// Edit here. Run `npm run build` to reassemble the full bundle.

  function Ra() {
    return ob.DM(this, "");
  }

  function qb(a, b) {
    return a < b ? -1 : a > b ? 1 : 0;
  }

  function Fd(a) {
    return a != null ? (a != null ? a.length == 0 : !0) : !0;
  }

  function Ty(a, b) {
    b == null && (b = 2);
    return a.toFixed(b);
  }

  function hy(a) {
    if (li(a)) return parseFloat(a);
    throw 18;
  }

  function bd(a) {
    return li(a) ? parseFloat(a) : null;
  }

  function kc(a, b) {
    b == null && (b = 0);
    return a != null && ((a = bd(a)), a != null) ? a : b;
  }

  function Kg(a, b) {
    b == null && (b = 0);
    a = K.parseInt(a);
    return a != null ? a : b;
  }

  function li(a) {
    if (!Az.match(a)) return !1;
    a = parseFloat(a);
    return isNaN(a) ? !1 : isFinite(a);
  }

  function Cb(a, b) {
    return a.indexOf(b) != -1;
  }

  function lc(a) {
    let b = 0,
      c = a.length;
    for (; b < c; ) if (a.charCodeAt(b++) > 32) return !1;
    return !0;
  }

  function Xa(a) {
    return a != null ? a == "" : !0;
  }

  function qd(a, b) {
    return a.indexOf(b) == 0;
  }

  function Zf(a, b) {
    return a.length < b.length ? !1 : a.slice(-b.length) == b;
  }

  function Rc(a, b, c) {
    c == null && (c = "");
    return a.replaceAll(b, c);
  }

  function Uy(a, b) {
    b == null && (b = 0);
    return a != null && K.parseInt(a) != null ? K.parseInt(a) : b;
  }

  function nf(a, b, c) {
    c == null && (c = 0);
    if (c == 0) return J.substr(a, 0, b);
    if (b < 0 || b >= a.length) return a;
    c = b + c;
    c > a.length && (c = a.length);
    return a.substring(0, b) + a.substring(c);
  }

  function mi(a, b) {
    return a == "" ? [] : a.split(b);
  }

  function Lg(a) {
    let b = 0,
      c = a.length;
    for (; b < c; ) {
      let d = a.charCodeAt(b++);
      if (d > 47 && d < 58) return !0;
    }
    return !1;
  }

  function Ms(a, b) {
    if (a.length != b.length) return a.length - b.length;
    let c = 0,
      d = a.length;
    for (; c < d; ) {
      let e = c++;
      if (a.charAt(e) != b.charAt(e)) return J.Jh(a, e) - J.Jh(b, e);
    }
    return 0;
  }

  function iy(a, b) {
    return b.includes(a);
  }

  function Vy(a, b, c, d) {
    d.x = a.x + (b.x - a.x) * c;
    d.y = a.y + (b.y - a.y) * c;
    d.z = a.z + (b.z - a.z) * c;
  }

  function Wy(a, b, c) {
    var d = a.x - b.x;
    let e = a.y - b.y;
    d = Math.sqrt(d * d + e * e);
    c.a = (a.y - b.y) / d;
    c.b = (b.x - a.x) / d;
    c.c = -(c.a * a.x + c.b * a.y);
  }

  function Xy(a, b) {
    let c = new Ck(0, 0, 0);
    Wy(a, b, c);
    return c;
  }

  function Bz(a, b) {
    let c = a.x * b.y - a.y * b.x;
    a = a.x * b.x + a.y * b.y;
    b = 1 / Math.sqrt(c * c + a * a);
    return Math.atan2(c * b, a * b) * 57.29577951308232;
  }

  function Cz(a, b, c, d, e, f, g, h, k, l) {
    c += f;
    if (ic.o2(c))
      return Dz(d, e, a, b, g)
        ? ((h.x = g.x), (h.y = g.y), (h.z = g.z), !0)
        : !1;
    l = l != null ? l : Xy(d, e);
    var n = l.a * a.x + l.b * a.y + l.c;
    f = l.a * b.x + l.b * b.y + l.c;
    if (0 <= n * f && c < Math.abs(n) && c < Math.abs(f)) return !1;
    k = k != null ? k : Xy(a, b);
    let q = k.a * d.x + k.b * d.y + k.c,
      r = k.a * e.x + k.b * e.y + k.c;
    return 0 <= q * r && c < Math.abs(q) && c < Math.abs(r)
      ? !1
      : q * r < 0 && n * f < 0
        ? ((a = q / (q - r)),
          (g.x = e.x - d.x),
          (g.y = e.y - d.y),
          (g.z = e.z - d.z),
          (g.x *= a),
          (g.y *= a),
          (g.z *= a),
          (g.x += d.x),
          (g.y += d.y),
          (g.z += d.z),
          (h.x = g.x),
          (h.y = g.y),
          (h.z = g.z),
          !0)
        : (n = Ns(n, c, l, a, h, d, e))
          ? ((g.x = a.x), (g.y = a.y), (g.z = a.z), !0)
          : (n = Ns(f, c, l, b, h, d, e))
            ? ((g.x = b.x), (g.y = b.y), (g.z = b.z), !0)
            : (n = Ns(q, c, k, d, h, a, b))
              ? ((g.x = d.x),
                (g.y = d.y),
                (g.z = d.z),
                (h.x = d.x),
                (h.y = d.y),
                (h.z = d.z),
                !0)
              : (n = Ns(r, c, k, e, h, a, b))
                ? ((g.x = e.x),
                  (g.y = e.y),
                  (g.z = e.z),
                  (h.x = e.x),
                  (h.y = e.y),
                  (h.z = e.z),
                  !0)
                : !1;
  }

  function Dz(a, b, c, d, e) {
    if (
      (ic.cA(a.x, b.x, 1e-10) && ic.cA(a.y, b.y, 1e-10)) ||
      (ic.cA(c.x, d.x, 1e-10) && ic.cA(c.y, d.y, 1e-10))
    )
      return !1;
    var f = b.x - a.x,
      g = b.y - a.y,
      h = d.x - c.x;
    let k = d.y - c.y;
    var l = a.x - c.x,
      n = a.y - c.y,
      q = k * f - h * g;
    h = h * n - k * l;
    f = f * n - g * l;
    if (ic.o2(q))
      if (ic.o2(h) || ic.o2(f)) {
        a.x < b.x ? ((q = a.x), (g = b.x)) : ((q = b.x), (g = a.x));
        c.x < d.x ? ((l = c.x), (n = d.x)) : ((l = d.x), (n = c.x));
        if (q > n || l > g) return !1;
        a.y < b.y ? ((q = a.y), (g = b.y)) : ((q = b.y), (g = a.y));
        c.y < d.y ? ((l = c.y), (n = d.y)) : ((l = d.y), (n = c.y));
        if (q > n || l > g) return !1;
        q = 1;
      } else return !1;
    h /= q;
    return ic.BJ(h, 0, 1) && ic.BJ(f / q, 0, 1)
      ? ((e.x = a.x + h * (b.x - a.x)), (e.y = a.y + h * (b.y - a.y)), !0)
      : !1;
  }

  function Ns(a, b, c, d, e, f, g) {
    return Math.abs(a) <= b
      ? ((e.x = d.x - a * c.a),
        (e.y = d.y - a * c.b),
        ((ic.BJ(e.x, g.x, f.x) || ic.BJ(e.x, f.x, g.x)) &&
          (ic.BJ(e.y, g.y, f.y) || ic.BJ(e.y, f.y, g.y))) ||
        ic.m4(d.x - f.x) + ic.m4(d.y - f.y) <= b * b
          ? !0
          : ic.m4(d.x - g.x) + ic.m4(d.y - g.y) <= b * b)
      : !1;
  }

  function xb(a, b) {
    b == null && (b = 0);
    a = parseFloat(a);
    return isNaN(a) ? b : Math.trunc(a);
  }

  function $f(a, b, c) {
    c == null && (c = 0);
    b == null && (b = 0);
    return a == null
      ? new Ca(b, c)
      : new Ca(
          u.I(a.attributes.get("Min"), b),
          u.I(a.attributes.get("Max"), c),
        );
  }

  function of(a, b, c) {
    c == null && (c = 0);
    b == null && (b = 0);
    return a == null
      ? new Ca(b, c)
      : new Ca(
          u.H(a.attributes.get("Min"), b),
          u.H(a.attributes.get("Max"), c),
        );
  }

  function jy(a, b, c) {
    c == null && (c = 0);
    b == null && (b = 0);
    let d = new H(b, c, 0, 1);
    a != null &&
      ((d.x = u.H(a.attributes.get("In"), b)),
      (d.y = u.H(a.attributes.get("Out"), c)));
    return d;
  }

  function Yy(a) {
    if (a == null) return null;
    var b = new Ua("[ \t:;]", "g").split(a);
    let c = 0;
    a = Array(2);
    let d = 0;
    for (; d < b.length; ) {
      let e = b[d];
      ++d;
      if (e != null && e != "") {
        if (c >= 2) return null;
        a[c++] = e;
      }
    }
    b = bd(a[0]);
    a = bd(a[1]);
    return b == null || a == null ? null : new H(b, a, 0, 1);
  }

  function ky(a, b) {
    let c = a.A(b);
    return c != null ? c : a.appendChild(b);
  }

  function Mg(a, b) {
    return a == null ? null : a.A(b);
  }

  function Zy(a, b) {
    return a == null ? null : a.attributes.get(b);
  }

  function ag(a, b, c, d) {
    if (a != null) {
      a = a.children;
      let e = 0;
      for (; e < a.length; ) {
        let f = a[e++];
        if (f.name == b && f.attributes.get(c) == d) return f;
      }
    }
    return null;
  }

  function ly(a, b) {
    a -= Math.floor(a / b) * b;
    return a < 0 ? 0 : a > b ? b : a;
  }

  function Ez() {
    let a = new Gd();
    if (my == null) return (a.complete(!1), a.ef);
    try {
      ((ni = new Worker(my)),
        (ni.onerror = function () {
          a.complete(!1);
        }),
        (ni.onmessage = function (b) {
          b.data == "ready" && (($y = !0), (ni.onmessage = Fz), a.complete(!0));
        }));
    } catch (b) {
      ((my = null), a.complete(!1));
    }
    return a.ef;
  }

  function Fz(a) {
    var b = a.data;
    let c = b.id;
    a = ny.v[c];
    ny.remove(c);
    b = b.image;
    b == null
      ? a.error(null)
      : ((b = new qc(b.data, b.width, b.height, b.isCompressed)),
        a.complete(b));
  }

  function Gz(a, b) {
    function c(f) {
      return new Promise(function (g, h) {
        let k = window.document.createElement("img");
        k.addEventListener("load", function () {
          g(k);
        });
        k.addEventListener("error", function (l) {
          h(l);
        });
        k.src = f;
      });
    }
    if (a instanceof ArrayBuffer) {
      let f = new Uint32Array(a, 0, 16);
      (f[0] & 30792) == 30792 &&
        ((a = new Os().read(mb.ll(a)).b.Ev), (f = new Uint32Array(a, 0, 16)));
      if (f[0] == 1481919403) return rc.jo(new qc(a, f[9], f[10], !0));
      if (f[0] == 542327876) return rc.jo(new qc(a, f[4], f[3], !0));
    }
    let d = null,
      e = new Gd();
    (function (f) {
      if (typeof f == "string") {
        var g = new Ua(
          "data:([-\\w]+/[-+\\w.]+)?(;?\\w+=[-\\w]+)*(;base64)?,(.*)",
          "",
        );
        if (g.match(f)) {
          let h = Ng.decode(g.mg(4)).b.Ev;
          g = g.mg(1);
          return Promise.resolve(new Blob([new Uint8Array(h)], { type: g }));
        }
        return new Promise(function (h, k) {
          let l = new XMLHttpRequest();
          l.onerror = function (n) {
            k(n);
          };
          l.onload = function () {
            if (l.status == 404) k(404);
            else {
              let n = l.response;
              l.onerror = l.onload = l.onprogress = null;
              h(n);
            }
          };
          try {
            (l.open("GET", f, !0), (l.responseType = "blob"), l.send());
          } catch (n) {
            let q = Sc.sP(n);
            k(q);
          }
        });
      }
      return f instanceof ArrayBuffer
        ? Promise.resolve(new Blob([f]))
        : Promise.reject("Unknown source");
    })(a)
      .then(function (f) {
        if (qc.FPa)
          return self.createImageBitmap(f, {
            imageOrientation: b ? "flipY" : "none",
            premultiplyAlpha: "default",
          });
        d = URL.createObjectURL(a);
        return c(d);
      })
      .then(function (f) {
        d != null && URL.revokeObjectURL(d);
        let g = new qc(f, f.width, f.height);
        queueMicrotask(function () {
          e.complete(g);
        });
      })
      .catch(function (f) {
        return e.error(f);
      });
    return e.ef;
  }

  function az(a) {
    function b(c, d, e, f) {
      return c | (d << 8) | (e << 16) | (f << 24);
    }
    switch (a) {
      case 0:
        return b(68, 88, 84, 49);
      case 1:
        return b(68, 88, 84, 51);
      case 2:
        return b(68, 88, 84, 53);
      case 3:
        return b(67, 67, 120, 89);
      case 4:
        return b(120, 71, 120, 82);
      case 5:
        return b(120, 71, 66, 82);
      case 6:
        return b(65, 71, 66, 82);
      case 7:
        return b(65, 50, 88, 89);
      case 8:
        return b(65, 84, 73, 50);
      case 9:
        return b(65, 84, 73, 49);
      case 10:
        return b(69, 84, 67, 49);
      default:
        return 0;
    }
  }

  function bz(a) {
    switch (a) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
      case 7:
      case 8:
        return 8;
      case 0:
      case 9:
      case 10:
        return 4;
      default:
        return 0;
    }
  }

  function cz(a) {
    a = new cd(mb.ll(a));
    let b = new Ps();
    b.hGa = (a.fa() << 8) | a.fa();
    if (b.hGa != 18552) return null;
    b.Ieb = (a.fa() << 8) | a.fa();
    b.Heb = (a.fa() << 8) | a.fa();
    b.K2 = (a.fa() << 24) | (a.fa() << 16) | (a.fa() << 8) | a.fa();
    b.Feb = (a.fa() << 8) | a.fa();
    b.BE = (a.fa() << 8) | a.fa();
    b.xE = (a.fa() << 8) | a.fa();
    b.yp = a.fa();
    b.Cn = a.fa();
    b.nm = a.fa();
    b.Geb = (a.fa() << 8) | a.fa();
    b.Keb = (a.fa() << 24) | (a.fa() << 16) | (a.fa() << 8) | a.fa();
    b.M2 = (a.fa() << 24) | (a.fa() << 16) | (a.fa() << 8) | a.fa();
    b.N2 = (a.fa() << 24) | (a.fa() << 16) | (a.fa() << 8) | a.fa();
    var c = new te();
    c.yE = (a.fa() << 16) | (a.fa() << 8) | a.fa();
    c.AE = (a.fa() << 16) | (a.fa() << 8) | a.fa();
    c.ak = (a.fa() << 8) | a.fa();
    b.lm = c;
    c = new te();
    c.yE = (a.fa() << 16) | (a.fa() << 8) | a.fa();
    c.AE = (a.fa() << 16) | (a.fa() << 8) | a.fa();
    c.ak = (a.fa() << 8) | a.fa();
    b.dl = c;
    c = new te();
    c.yE = (a.fa() << 16) | (a.fa() << 8) | a.fa();
    c.AE = (a.fa() << 16) | (a.fa() << 8) | a.fa();
    c.ak = (a.fa() << 8) | a.fa();
    b.ej = c;
    c = new te();
    c.yE = (a.fa() << 16) | (a.fa() << 8) | a.fa();
    c.AE = (a.fa() << 16) | (a.fa() << 8) | a.fa();
    c.ak = (a.fa() << 8) | a.fa();
    b.yf = c;
    b.Neb = (a.fa() << 8) | a.fa();
    b.Meb = (a.fa() << 16) | (a.fa() << 8) | a.fa();
    b.Hha[0] = (a.fa() << 24) | (a.fa() << 16) | (a.fa() << 8) | a.fa();
    return b;
  }

  function dz(a) {
    switch (a.split("/")[0]) {
      case "preview_bosses":
        return 324;
      case "preview_main":
        return 322;
      case "preview_main_i":
        return 320;
      case "preview_pvp":
        return 318;
      default:
        return null;
    }
  }

  function Hz() {
    function a(d, e) {
      Qs.v[d] = e;
    }
    Qs = new ac();
    a("Space", 32);
    a("Space", 32);
    a("Quote", 39);
    a("Comma", 44);
    a("Minus", 45);
    a("Period", 46);
    a("Slash", 47);
    for (var b = 0; b < 10; ) {
      var c = b++;
      a("Digit" + String.fromCodePoint(48 + c), 48 + c);
    }
    a("Semicolon", 59);
    a("Equal", 61);
    a("BracketLeft", 91);
    a("Backslash", 92);
    a("BracketRight", 93);
    a("Backquote", 96);
    for (b = 0; b < 26; )
      ((c = b++), a("Key" + String.fromCodePoint(65 + c), 65 + c));
    for (b = 0; b < 12; ) ((c = b++), a("F" + (c + 1), 121 + c));
    a("ArrowUp", 133);
    a("ArrowLeft", 134);
    a("ArrowRight", 135);
    a("ArrowDown", 136);
    for (b = 0; b < 10; ) ((c = b++), a("EKeyNumpad" + c, 137 + c));
    a("NumpadAdd", 147);
    a("NumpadDecimal", 148);
    a("NumpadMultiply", 149);
    a("NumpadSubtract", 150);
    a("NumpadEqual", 151);
    a("NumpadComma", 152);
    a("NumpadEnter", 153);
    a("NumpadDivide", 154);
    a("NumLock", 155);
    a("Escape", 156);
    a("Backspace", 157);
    a("Tab", 158);
    a("Enter", 159);
    a("ControlLeft", 160);
    a("ControlRight", 161);
    a("ShiftLeft", 162);
    a("ShiftRight", 163);
    a("AltLeft", 164);
    a("AltRight", 165);
    a("PageUp", 166);
    a("PageDown", 167);
    a("Insert", 168);
    a("Delete", 169);
    a("Home", 170);
    a("End", 171);
    a("CapsLock", 172);
    a("Pause", 173);
    a("ScrollLock", 174);
    a("PrintScreen", 175);
  }

  function Iz(a) {
    return a instanceof Array
      ? function () {
          return new pf(a);
        }
      : typeof a.iterator == "function"
        ? w(a, a.iterator)
        : a.iterator;
  }

  function Qe(a) {
    return a instanceof Array ? new pf(a) : a.iterator();
  }

  function w(a, b) {
    if (b == null) return null;
    b.r7 == null && (b.r7 = va.Ona++);
    var c;
    a.rga == null ? (a.rga = {}) : (c = a.rga[b.r7]);
    c == null && ((c = b.bind(a)), (a.rga[b.r7] = c));
    return c;
  }
  Ka.SF2 = Ka.SF2 || {};

  var bg = bg || {},
    T;
