// 023-data-types.js
// Domain: tree-fd  |  16 class(es)  |  tree root(s): fd, gd, al, rb, m, Ia, Ca, $s, ja, Fb, at, ui, ez, bt, vf, ct
// Edit here. Run `npm run build` to reassemble the full bundle.
  class fd {
    constructor() {
      this.Hc = new Map();
    }
    addEventListener(a, b) {
      if (b == null) return -1;
      let c = 0;
      X.Xa(this.Hc, a) || (this.Hc.set(a, new V()), (c = 1));
      this.Hc.get(a).addListener(b);
      return c;
    }
    removeEventListener(a, b) {
      return b == null
        ? -1
        : X.Xa(this.Hc, a)
          ? (this.Hc.get(a).removeListener(b),
            this.Hc.get(a).qd() == 0 && this.ynb(a),
            0)
          : 1;
    }
    Pw() {
      X.clear(this.Hc);
    }
    ynb(a) {
      X.remove(this.Hc, a);
    }
    hh(a, b) {
      return X.Xa(this.Hc, a) ? (this.Hc.get(a).$(b), 0) : 1;
    }
  }
  fd.g = "2B";
  Object.assign(fd.prototype, { j: fd });
  class gd {
    constructor() {
      this.values = [];
    }
    add(a) {
      if (this.values.includes(a)) return !1;
      this.values.push(a);
      return !0;
    }
    clear() {
      this.values = [];
    }
    remove(a) {
      J.remove(this.values, a);
    }
    contains(a) {
      return this.values.indexOf(a) != -1;
    }
    uma() {
      return this.values.slice();
    }
  }
  gd.g = "2C";
  Object.assign(gd.prototype, { j: gd });
  class al {}
  al.g = "2D";
  al.Ei = !0;
  class rb {
    constructor(a, b) {
      this.key = a;
      this.value = b;
    }
  }
  rb.g = "2E";
  Object.assign(rb.prototype, { j: rb });
  class m {
    static l() {
      return [];
    }
    static Ib(a) {
      return a.slice();
    }
    static zga(a, b, c) {
      a.splice(b, 0, c);
    }
    static findLastIndex(a, b) {
      let c = a.length - 1,
        d = 0,
        e = a.length;
      for (; d < e; ) {
        let f = d++;
        if (b(a[c - f])) return c - f;
      }
      return -1;
    }
    static gyb(a) {
      a.length == 0 || a.pop();
    }
    static Fe(a, b) {
      return Qb.Fe(a, b);
    }
    static find(a, b) {
      return Qb.find(a, b);
    }
    static sD(a, b) {
      return Qb.filter(a, b);
    }
    static N3a(a, b) {
      return a[b];
    }
    static cd(a, b) {
      let c = a.indexOf(b);
      return c == -1 ? (a.push(b), a.length - 1) : c;
    }
    static Zaa(a, b) {
      let c = 0,
        d = b.length;
      for (; c < d; ) {
        let e = b[c++];
        a.indexOf(e) == -1 && a.push(e);
      }
    }
    static uma(a) {
      return a.slice();
    }
    static resize(a, b, c) {
      var d = a.length;
      if (d != b)
        if (d > b) for (c = d - 1; c >= b; ) (a.pop(), --c);
        else for (; d < b; ) (a.push(c()), ++d);
    }
    static forEach(a, b) {
      Qb.oFa(a, b);
    }
    static tj(a, b) {
      let c = [],
        d = 0;
      for (; d < a.length; ) {
        let e = a[d];
        ++d;
        b(e) && c.push(e);
      }
      return c;
    }
    static any(a, b) {
      let c = 0;
      for (; c < a.length; ) if (b(a[c++])) return !0;
      return !1;
    }
    static findIndex(a, b) {
      return Qb.findIndex(a, b);
    }
    static addRange(a, b) {
      for (b = Qe(b); b.yd(); ) a.push(b.next());
    }
    static removeRange(a, b, c) {
      a.splice(b, c);
    }
    static jF(a, b) {
      let c = 0;
      for (; c < a.length; ) {
        let d = a[c];
        (b(d) && J.remove(a, d)) || ++c;
      }
    }
    static ye(a, b) {
      if (b < 0 || b >= a.length) throw 17;
      a.splice(b, 1);
    }
    static gn(a, b) {
      let c = 0;
      for (; c < a.length; ) {
        let d = a[c];
        ++c;
        if (b(d)) return d;
      }
    }
    static byb(a, b) {
      return Qb.R4a(a, b);
    }
    static t_(a) {
      a = a.slice();
      let b = a.length,
        c = 0;
      for (; c < b; ) {
        let d = c + 1;
        for (; d < b; ) a[d] == a[c] ? (a.splice(d, 1), --b) : ++d;
        ++c;
      }
      return a;
    }
    static Cdb(a, b) {
      let c = a.length;
      for (; --c > -1; ) if (b(a[c])) return a[c];
      return null;
    }
  }
  class Ia {
    constructor() {
      this.G = null;
    }
  }
  Ia.g = "2F";
  Object.assign(Ia.prototype, { j: Ia });
  class Ca {
    constructor(a, b) {
      this.first = a;
      this.second = b;
    }
    toString() {
      return "{" + K.T(this.first) + "} : {" + K.T(this.second) + "}";
    }
  }
  Ca.g = "30";
  Object.assign(Ca.prototype, { j: Ca });
  class $s {
    constructor() {}
  }
  $s.g = "31";
  Object.assign($s.prototype, { j: $s });
  class ja {
    constructor(a) {
      this.G = a;
    }
  }
  ja.g = "32";
  Object.assign(ja.prototype, { j: ja });
  class Fb {
    constructor() {
      this.M = "";
    }
  }
  Fb.g = "33";
  Object.assign(Fb.prototype, { j: Fb });
  class at {
    static zga(a, b, c) {
      a.M = a.M.substring(0, b) + c + a.M.substring(b);
    }
    static Iva(a, b, ...c) {
      let d = 0,
        e = c.length;
      for (; d < e; ) {
        let f = d++;
        b = Eb.replace(b, "{" + f + "}", c[f]);
      }
      a.M += b;
    }
    static EVa(a, b, c, d, e) {
      b = a
        .substring(d, d + e)
        .split(b)
        .join(c);
      return a.substring(0, d) + b + a.substring(d + e);
    }
  }
  class ui {
    constructor() {
      this.hR = this.R2 = this.h5 = this.Tca = 0;
    }
    static sAa(a) {
      let b = new ui();
      b.hR = Math.floor(a / 3600);
      let c = a % 3600;
      b.R2 = Math.floor(c / 60);
      b.h5 = c % 60;
      b.Tca = Math.floor(a / 86400);
      return b;
    }
  }
  ui.g = "34";
  Object.assign(ui.prototype, { j: ui });
  class ez {
    static zlb(a) {
      return Number(
        ((BigInt(a) & 4294967295n) + (BigInt(12345) & 4294967295n)) &
          4294967295n,
      );
    }
    static Sr(a, b) {
      return Number(
        ((BigInt(a) & 4294967295n) * (BigInt(b) & 4294967295n)) & 4294967295n,
      );
    }
  }
  class bt {
    constructor() {}
    fHa() {
      return this.imb();
    }
    imb() {
      return Math.random();
    }
  }
  bt.g = "35";
  Object.assign(bt.prototype, { j: bt });
  class vf {
    static Dja(a) {
      return Math.floor(vf.cLa.fHa() * (a - 0)) + 0;
    }
    static fKa() {
      return vf.cLa.fHa() * 1;
    }
  }
  vf.g = "36";
  class ct {
    constructor(a) {
      let b = new Ua(
        "^(0|[1-9]\\d*)\\.(0|[1-9]\\d*)\\.(0|[1-9]\\d*)(?:-((?:0|[1-9]\\d*|\\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\\.(?:0|[1-9]\\d*|\\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\\+([0-9a-zA-Z-]+(?:\\.[0-9a-zA-Z-]+)*))?$",
        "",
      );
      if (b.match(a))
        ((this.DE = K.parseInt(b.mg(1))),
          (this.GE = K.parseInt(b.mg(2))),
          (this.alb = K.parseInt(b.mg(3))),
          (this.MJa = b.mg(4)),
          (this.qwa = b.mg(5)));
      else throw 110;
    }
    toString() {
      let a = this.DE + "." + this.GE + "." + this.alb;
      this.MJa != null && (a += "-" + this.MJa);
      this.qwa != null && (a += "+" + this.qwa);
      return a;
    }
  }
  ct.g = "37";
  Object.assign(ct.prototype, { j: ct });
