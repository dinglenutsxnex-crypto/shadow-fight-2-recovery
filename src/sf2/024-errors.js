// 024-errors.js
// Domain: errors  |  7 class(es)  |  tree root(s): Sc, cg, Dk, qy, Vs
// Edit here. Run `npm run build` to reassemble the full bundle.
  class Sc extends Error {
    constructor(a, b, c) {
      super(a);
      this.message = a;
      this.iUa = c != null ? c : this;
    }
    Ema() {
      return this.iUa;
    }
    toString() {
      return this.message;
    }
    static sP(a) {
      return a instanceof Sc
        ? a
        : a instanceof Error
          ? new Sc(a.message, null, a)
          : new bl(a, null, a);
    }
  }
  Sc.g = "38";
  Sc.u = Error;
  Object.assign(Sc.prototype, { j: Sc });
  class eg extends Sc {
    constructor(a, b, c) {
      super(a, b);
      this.j4 =
        c == null
          ? {
              fileName: "(unknown)",
              lineNumber: 0,
              className: "(unknown)",
              methodName: "(unknown)",
            }
          : c;
    }
    toString() {
      return (
        "" +
        super.toString() +
        " in " +
        this.j4.className +
        "." +
        this.j4.methodName +
        " at " +
        this.j4.fileName +
        ":" +
        this.j4.lineNumber
      );
    }
  }
  eg.g = "39";
  eg.u = Sc;
  Object.assign(eg.prototype, { j: eg });
  class dt extends eg {
    constructor(a, b, c, d) {
      super(b == null ? 'Invalid argument "' + a + '"' : b, c, d);
    }
  }
  dt.g = "3A";
  dt.u = eg;
  Object.assign(dt.prototype, { j: dt });
  class cg {}
  cg.g = "3B";
  class Dk {
    constructor(a, b) {
      this.nKa = !1;
      this.top = 0;
      this.stack = [];
      this.nKa = b;
      this.push(a);
    }
    yd() {
      return this.top > 0;
    }
    next() {
      let a = this.stack[--this.top];
      this.nKa && this.push(a);
      return a;
    }
    push(a) {
      for (a = a.cf; a != null; ) ((this.stack[this.top++] = a), (a = a.Ma));
    }
  }
  Dk.g = "3C";
  Object.assign(Dk.prototype, { j: Dk });
  class qy {
    constructor() {
      this.cf = null;
      this.state = 0;
    }
    kia() {
      this.state = 2;
    }
    Qh() {}
    B() {}
    v$a() {
      return this.state != 4 && this.state != 5 ? this.state == 6 : !0;
    }
    removeChild() {
      let a = this.cf;
      this.cf = null;
      return a;
    }
  }
  qy.g = "3D";
  Object.assign(qy.prototype, { j: qy });
  class Vs {
    constructor() {
      this.t4 = [];
    }
    xYa(a) {
      this.t4.unshift(a);
    }
    Z(a) {
      let b = 0,
        c = 0,
        d = 0;
      for (; d < this.t4.length; ) {
        let e = this.t4[d++];
        e.state == 0 && e.kia();
        e.state == 2 && e.Qh(a);
        if (e.v$a()) {
          switch (e.state) {
            case 4:
              debugger;
              let f = e.removeChild();
              f != null ? (this.xYa(f), ++d) : --b;
              break;
            case 5:
              ++c;
              break;
            case 6:
              ++c;
          }
          --d;
          fa.ye(this.t4, d);
          e.B();
        }
      }
      return (b << 16) | c;
    }
  }
  Vs.g = "3E";
  Object.assign(Vs.prototype, { j: Vs });
