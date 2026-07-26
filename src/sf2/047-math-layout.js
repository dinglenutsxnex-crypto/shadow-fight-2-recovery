// 047-math-layout.js
// Domain: tree-tt  |  28 class(es)  |  tree root(s): tt, fa, Ey, mq, nq, Qw, Oj, sy, rz, Fy, oq, Rw, Mf, Jh, Oa, sf, qq, Of, rq, wb, Sw, Tw, Pb, Gy
// Edit here. Run `npm run build` to reassemble the full bundle.
  class tt {
    constructor(a, b, c, d, e, f, g) {
      g == null && (g = 0);
      f == null && (f = 0);
      e == null && (e = 0);
      d == null && (d = 2);
      c == null && (c = !1);
      this.Fg = m.l();
      this.name = a;
      this.fileName = b;
      this.DR = c;
      this.status = d;
      this.index = e;
      this.gL = f;
      this.QK = g;
      this.bia = new Map();
      a = 0;
      for (b = this.Fg; a < b.length; ) {
        let h = b[a];
        ++a;
        c = h.mza;
        if (c == null || c == "") continue;
        c = m.find(this.Fg, function (k) {
          return k.name == h.mza;
        });
        c != null && this.bia.set(h, c);
      }
    }
    DQ(a) {
      let b = 0,
        c = this.Fg;
      for (; b < c.length; ) {
        let d = c[b];
        ++b;
        if (d.name == a) return d;
      }
      return null;
    }
    h0(a) {
      let b = m.l(),
        c = 0,
        d = this.Fg;
      for (; c < d.length; ) {
        let e = d[c];
        ++c;
        e.type == a && b.push(e);
      }
      return b;
    }
    Lx() {
      let a = 0,
        b = !1;
      let c = 0,
        d = this.Fg.length;
      for (; c < d; ) {
        var e = this.Fg[c++];
        e = e.yc;
        let g = 0,
          h = e.length;
        for (; g < h; ) {
          var f = g++;
          ++a;
          f = e[f].status;
          if (f == 2 || f == 1) {
            this.status = 2;
            b = !0;
            break;
          }
        }
      }
      (a != 0 && b) || (this.status = 3);
    }
    setTime(a) {
      let b = 0,
        c = this.Fg.length;
      for (; b < c; ) this.Fg[b++].setTime(a);
    }
  }
  tt.g = "307";
  Object.assign(tt.prototype, { j: tt });
  class fa {
    static add(a, ...b) {
      let c = 0;
      for (; c < b.length; ) a.push(b[c++]);
    }
    static ye(a, b) {
      b == a.length - 1 ? a.pop() : a.splice(b, 1);
    }
    static vKa(a) {
      let b = a.length,
        c = 0;
      for (; c < b; ) {
        let d = c + 1;
        for (; d < b; ) a[d] == a[c] ? (a.splice(d, 1), --b) : ++d;
        ++c;
      }
    }
  }
  class Ey {
    constructor(a, b, c) {
      this.cols = a;
      this.rows = b;
      this.size = a * b;
      this.data = c != null ? c : Array(this.size);
    }
  }
  Ey.g = "308";
  Object.assign(Ey.prototype, { j: Ey });
  class mq {}
  mq.g = "309";
  mq.Ei = !0;
  Object.assign(mq.prototype, { j: mq });
  class nq {}
  nq.g = "30A";
  nq.Ei = !0;
  Object.assign(nq.prototype, { j: nq });
  class Qw {
    constructor(a, b, c) {
      b == null && (b = !1);
      a == null && (a = 1);
      this.Eha = null;
      this.Oh = 0;
      this.$ob = !1;
      this.Aab = -2;
      this.PC = a;
      this.Dha = b;
      c != null &&
        ((a = this.Oh = c.length), (b = this.PC), (this.PC = a > b ? a : b));
      this.Bn = Array(this.PC + 1);
      this.Bn[0] = null;
      if (c != null) {
        a = this.Bn;
        b = 1;
        let d = this.Oh + 1;
        for (; b < d; ) {
          let e = b++;
          a[e] = c[e - 1];
        }
        this.nob();
      }
    }
    enqueue(a) {
      this.Oh == this.PC && this.grow();
      this.Bn[++this.Oh] = a;
      a = a.ca = this.Oh;
      let b = this.Bn,
        c = a >> 1,
        d = b[a],
        e = d.priority;
      if (this.Dha)
        for (; c > 0; ) {
          var f = b[c];
          if (e - f.priority < 0) ((b[a] = f), (f.ca = a), (a = c), (c >>= 1));
          else break;
        }
      else
        for (; c > 0; )
          if (((f = b[c]), e - f.priority > 0))
            ((b[a] = f), (f.ca = a), (a = c), (c >>= 1));
          else break;
      b[a] = d;
      d.ca = a;
    }
    $2a() {
      var a = this.Bn;
      let b = a[1];
      b.ca = -1;
      a[1] = a[this.Oh];
      a = 1;
      let c = this.Bn,
        d = 2,
        e,
        f = c[1],
        g = f.priority;
      if (this.Dha)
        for (; d < this.Oh; )
          if (
            (d < this.Oh - 1 && c[d].priority - c[d + 1].priority > 0 && ++d,
            (e = c[d]),
            g - e.priority > 0)
          )
            ((c[a] = e), (e.ca = a), (a = f.ca = d), (d <<= 1));
          else break;
      else
        for (; d < this.Oh; )
          if (
            (d < this.Oh - 1 && c[d].priority - c[d + 1].priority < 0 && ++d,
            (e = c[d]),
            g - e.priority < 0)
          )
            ((c[a] = e), (e.ca = a), (a = f.ca = d), (d <<= 1));
          else break;
      c[a] = f;
      f.ca = a;
      this.Oh--;
      return b;
    }
    iterator() {
      if (this.$ob) {
        if (this.Eha == null) return new Oj(this);
        this.Eha.reset();
        return this.Eha;
      }
      return new Oj(this);
    }
    nob() {
      let a = this.Oh >> 1;
      for (; a >= 1; ) (this.FDa(a, this.Oh), --a);
    }
    FDa(a, b) {
      let c = this.Bn;
      var d = a << 1,
        e = d + 1;
      let f = a;
      this.Dha
        ? (d <= b && c[d].priority - c[a].priority < 0 && (f = d),
          d + 1 <= b && c[d + 1].priority - c[f].priority < 0 && (f = e))
        : (d <= b && c[d].priority - c[a].priority > 0 && (f = d),
          d + 1 <= b && c[d + 1].priority - c[f].priority > 0 && (f = e));
      f != a &&
        ((d = c[f]),
        (e = c[a]),
        (c[f] = e),
        (c[a] = d),
        (a = d.ca),
        (d.ca = e.ca),
        (e.ca = a),
        this.FDa(f, b));
    }
    grow() {
      this.PC = rz.FZ(this.Aab, this.PC);
      this.Tob(this.PC);
    }
    Tob(a) {
      a = Array(a + 1);
      Fy.jwa(this.Bn, 0, a, this.Oh + 1);
      this.Bn = a;
    }
  }
  Qw.g = "30B";
  Object.assign(Qw.prototype, { j: Qw });
  class Oj {
    constructor(a) {
      this.eGa = a;
      this.reset();
    }
    reset() {
      this.dGa = 0;
      this.Fha = this.eGa.Oh;
      this.Bn = Array(this.Fha);
      Fy.jwa(this.eGa.Bn, 1, this.Bn, this.Fha);
      return this;
    }
    yd() {
      return this.dGa < this.Fha;
    }
    next() {
      return this.Bn[this.dGa++];
    }
  }
  Oj.g = "30C";
  Oj.Rb = [mq];
  Object.assign(Oj.prototype, { j: Oj });
  class sy {
    static Lxa(a, b) {
      a = a.toLowerCase();
      b = b.toLowerCase();
      return a < b ? -1 : a > b ? 1 : 0;
    }
  }
  sy.g = "30D";
  class rz {
    static FZ(a, b) {
      if (a > 0) b += a;
      else
        switch (a) {
          case -3:
            b <<= 1;
            break;
          case -2:
            b = ((b * 3) >> 1) + 1;
            break;
          case -1:
            a = b + 1;
            b = (a >> 3) + (a < 9 ? 3 : 6);
            b += a;
            break;
          case 0:
            throw 37;
        }
      return b;
    }
  }
  rz.g = "30E";
  class Fy {
    static jwa(a, b, c, d) {
      if (d > 0)
        if (a == c)
          if (b < 0) {
            c = b + d;
            b = 0 + d;
            for (var e = 0; e < d; ) (++e, --c, --b, (a[b] = a[c]));
          } else {
            if (b > 0)
              for (c = b, e = b = 0; e < d; ) (++e, (a[b] = a[c]), ++c, ++b);
          }
        else if (b == 0) for (b = 0; b < d; ) ((e = b++), (c[e] = a[e]));
        else if (b == 0) for (b = 0; b < d; ) ((e = b++), (c[0 + e] = a[e]));
        else
          for (e = 0; e < d; ) {
            let f = e++;
            c[f] = a[b + f];
          }
    }
  }
  Fy.g = "30F";
  class oq {
    constructor(a, b) {
      this.Xf = a.length;
      this.data = Array(this.Xf);
      let c = 0;
      for (; c < this.Xf; ) ((this.data[c] = a[c].data), ++c);
      this.Sr = Array(this.Xf);
      c = 0;
      switch (b) {
        case 0:
          for (this.WL = 0; c < this.Xf; )
            ((this.Sr[c] = this.WL), (this.WL += a[c].time), ++c);
          break;
        case 1:
          for (this.WL = a[this.Xf - 1].time; c < this.Xf; )
            ((this.Sr[c] = a[c].time), ++c);
      }
    }
  }
  oq.g = "310";
  Object.assign(oq.prototype, { j: oq });
  class Rw {
    constructor(a, b) {
      this.data = a;
      this.time = b;
    }
  }
  Rw.g = "311";
  Object.assign(Rw.prototype, { j: Rw });
  class Mf {
    constructor() {
      this.fb = new H(0, 0, 0, 1);
      this.gb = 0;
      this.type = ob.Vq(this);
    }
  }
  Mf.g = "312";
  Object.assign(Mf.prototype, { j: Mf });
  class Nf extends Mf {
    constructor() {
      super();
    }
    qca(a) {
      let b = a.length >> 1;
      for (var c = 0, d = 0, e = 0; e < b; ) {
        var f = e++;
        c += a[f << 1];
        d += a[(f << 1) + 1];
      }
      c = this.fb.x = c / b;
      d = this.fb.y = d / b;
      for (e = this.gb = 0; e < b; ) {
        var g = e++;
        f = a[g << 1] - c;
        g = a[(g << 1) + 1] - d;
        this.gb = Math.max(f * f + g * g, this.gb);
      }
      this.gb = Math.sqrt(this.gb);
    }
    contains(a) {
      let b = a.x - this.fb.x;
      a = a.y - this.fb.y;
      return b * b + a * a <= this.gb * this.gb;
    }
    dga(a) {
      if (a.gb != 0)
        if (this.gb == 0)
          ((this.gb = a.gb), (this.fb.x = a.fb.x), (this.fb.y = a.fb.y));
        else {
          var b = a.fb.x - this.fb.x,
            c = a.fb.y - this.fb.y,
            d = a.gb - this.gb,
            e = b * b + c * c;
          d * d >= e
            ? d >= 0 && this.from(a)
            : ((d = Math.sqrt(e)),
              (e = (d + a.gb - this.gb) / (2 * d)),
              (this.fb.x += e * b),
              (this.fb.y += e * c),
              (this.gb = (d + this.gb + a.gb) / 2));
        }
    }
    from(a) {
      this.fb.x = a.fb.x;
      this.fb.y = a.fb.y;
      this.gb = a.gb;
    }
    yma(a, b) {
      var c = b.fb,
        d = this.fb;
      (a.U & 64) > 0 && a.Ix();
      let e = a.hm,
        f = e.m21 * d.x + e.m22 * d.y + e.m24;
      c.x = e.m11 * d.x + e.m12 * d.y + e.m14;
      c.y = f;
      (a.U & 8) > 0
        ? ((c = Math.abs(a.scale.x)),
          (d = Math.abs(a.scale.y)),
          (a = Math.abs(a.scale.z)))
        : ((a = a.matrix),
          (c = Math.abs(a.m11) + Math.abs(a.m12) + Math.abs(a.m13)),
          (d = Math.abs(a.m21) + Math.abs(a.m22) + Math.abs(a.m23)),
          (a = Math.abs(a.m31) + Math.abs(a.m32) + Math.abs(a.m33)));
      b.gb = Math.max(Math.max(c, d), a) * this.gb;
    }
  }
  Nf.g = "313";
  Nf.u = Mf;
  Object.assign(Nf.prototype, { j: Nf });
  class Td extends Mf {
    constructor() {
      super();
      this.rect = new hb(pa.sd, pa.sd, pa.Ld, pa.Ld);
    }
    qca(a) {
      this.rect.Tn();
      var b = a.length >> 1;
      let c = 0;
      for (; c < b; ) {
        let d = c++;
        this.rect.So(new H(a[d << 1], a[(d << 1) + 1], 0, 1));
      }
      a = this.rect;
      this.fb.x = (a.K + a.N) * 0.5;
      a = this.rect;
      this.fb.y = (a.P + a.X) * 0.5;
      a = this.rect;
      a = (a.N - a.K) * 0.5;
      b = this.rect;
      b = (b.X - b.P) * 0.5;
      this.gb = Math.sqrt(a * a + b * b);
    }
    contains(a) {
      let b = this.rect;
      return a.x >= b.K && a.x <= b.N && a.y >= b.P ? a.y <= b.X : !1;
    }
    dga(a) {
      if (a.type == Nf) {
        if (a.gb == 0) return;
        var b = a.fb;
        a = a.gb;
        this.rect.So(new H(b.x - a, b.y - a, 0, 1));
        this.rect.So(new H(b.x + a, b.y + a, 0, 1));
      } else if (a.type == Td) {
        if (a.rect.Wj()) return;
        this.rect.add(a.rect);
      }
      b = this.rect;
      this.fb.x = (b.K + b.N) * 0.5;
      b = this.rect;
      this.fb.y = (b.P + b.X) * 0.5;
      b = this.rect;
      b = (b.N - b.K) * 0.5;
      a = this.rect;
      a = (a.X - a.P) * 0.5;
      this.gb = Math.sqrt(b * b + a * a);
    }
    from(a) {
      let b = a.fb,
        c = a.gb;
      if (a.type == Nf) {
        if (c == 0) {
          debugger;
          this.rect.Tn();
        }
      } else if (a.type == Td) {
        var d = this.rect;
        a = a.rect;
        d.K = a.K;
        d.P = a.P;
        d.N = a.N;
        d.X = a.X;
      }
      d = this.fb;
      d.x = b.x;
      d.y = b.y;
      d.z = b.z;
      this.gb = c;
    }
    yma(a, b) {
      var c = b.fb,
        d = b.fb,
        e = this.fb;
      (a.U & 64) > 0 && a.Ix();
      var f = a.hm;
      let g = f.m21 * e.x + f.m22 * e.y + f.m24;
      d.x = f.m11 * e.x + f.m12 * e.y + f.m14;
      d.y = g;
      b.gb =
        ((a.U & 8) > 0
          ? Math.max(Math.abs(a.scale.x), Math.abs(a.scale.y))
          : Math.max(
              Math.abs(a.matrix.m11) + Math.abs(a.matrix.m12),
              Math.abs(a.matrix.m21) + Math.abs(a.matrix.m22),
            )) * this.gb;
      b = b.rect;
      d = this.rect;
      d = d.N - d.K;
      e = this.rect;
      e = e.X - e.P;
      b.K = c.x;
      b.P = c.y;
      b.N = c.x;
      b.X = c.y;
      f = c = 1;
      (a.U & 8) > 0 && ((f = a.scale), (c = f.x), (f = f.y));
      a = a.matrix;
      c = d * Math.abs(c) * 0.5;
      d = e * Math.abs(f) * 0.5;
      a.m11 > 0
        ? ((b.K -= a.m11 * c), (b.N += a.m11 * c))
        : ((b.K += a.m11 * c), (b.N -= a.m11 * c));
      a.m12 > 0
        ? ((b.K -= a.m12 * d), (b.N += a.m12 * d))
        : ((b.K += a.m12 * d), (b.N -= a.m12 * d));
      a.m21 > 0
        ? ((b.P -= a.m21 * c), (b.X += a.m21 * c))
        : ((b.P += a.m21 * c), (b.X -= a.m21 * c));
      a.m22 > 0
        ? ((b.P -= a.m22 * d), (b.X += a.m22 * d))
        : ((b.P += a.m22 * d), (b.X -= a.m22 * d));
    }
  }
  Td.g = "314";
  Td.u = Mf;
  Object.assign(Td.prototype, { j: Td });
  class pq extends Mf {
    constructor() {
      super();
    }
    qca(a) {
      let b = 0,
        c = 0,
        d = 0,
        e = a.length;
      for (var f = 0; f < e; ) ((b += a[f++]), (c += a[f++]), (d += a[f++]));
      f = (e / 3) | 0;
      b /= f;
      c /= f;
      d /= f;
      let g = 0;
      for (f = 0; f < e; ) {
        var h = a[f++] - b;
        let k = a[f++] - c,
          l = a[f++] - d;
        h = h * h + k * k + l * l;
        h > g && (g = h);
      }
      this.gb = Math.sqrt(g);
    }
    contains(a) {
      let b = this.fb,
        c = a.x - b.x,
        d = a.y - b.y;
      a = a.z - b.z;
      return c * c + d * d + a * a <= this.gb * this.gb;
    }
    dga(a) {
      if (a.gb != 0)
        if (this.gb == 0) this.from(a);
        else {
          var b = a.fb,
            c = this.fb,
            d = b.x - c.x,
            e = b.y - c.y;
          b = b.z - c.z;
          c = d * d + e * e + b * b;
          var f = a.gb - this.gb;
          if (f * f >= c)
            f >= 0 &&
              ((d = this.fb),
              (e = a.fb),
              (d.x = e.x),
              (d.y = e.y),
              (d.z = e.z),
              (this.gb = a.gb));
          else {
            c = Math.sqrt(c);
            if (c > 1e-8) {
              f = (c + f) / (2 * c);
              let g = this.fb;
              g.x += d * f;
              g.y += e * f;
              g.z += b * f;
            }
            this.gb = (c + this.gb + a.gb) * 0.5;
          }
        }
    }
    from(a) {
      this.fb.x = a.fb.x;
      this.fb.y = a.fb.y;
      this.fb.z = a.fb.z;
      this.gb = a.gb;
    }
    yma(a, b) {
      b.fb = a.tYa(this.fb, b.fb);
      b.gb = a.g8a() * this.gb;
    }
  }
  pq.g = "315";
  pq.u = Mf;
  Object.assign(pq.prototype, { j: pq });
  class Jh {
    constructor(a, b, c) {
      this.IE = 0;
      this.DPa = c;
      this.rr = a;
      this.O3a = b;
      this.Gn = a * b;
    }
    grow(a) {
      return a > this.rr
        ? ((this.rr = a), (this.Gn = a * this.O3a), (this.IE = 0), !0)
        : !1;
    }
  }
  Jh.g = "316";
  Object.assign(Jh.prototype, { j: Jh });
  class Oa {
    static Wv(a) {
      return new H(
        ((a >> 16) & 255) / 255,
        ((a >> 8) & 255) / 255,
        (a & 255) / 255,
        (a >>> 24) / 255,
      );
    }
    static dd(a) {
      return new H(
        ((a >> 16) & 255) / 255,
        ((a >> 8) & 255) / 255,
        (a & 255) / 255,
        1,
      );
    }
    static X4a(a) {
      var b = new Ua("#([0-9a-f]+)", "");
      if (b.match(a))
        return (
          (a = b.mg(1)),
          new H(
            K.parseInt("0x" + J.substr(a, 0, 2)) / 255,
            K.parseInt("0x" + J.substr(a, 2, 2)) / 255,
            K.parseInt("0x" + J.substr(a, 4, 2)) / 255,
            a.length == 8 ? K.parseInt("0x" + J.substr(a, 6, 2)) / 255 : 1,
          )
        );
      if (a.indexOf("rgba") == 0) {
        a = a.substring(5, a.length - 1);
        a = a.split(",");
        b = K.parseInt(a[0]) / 255;
        let c = K.parseInt(a[1]) / 255,
          d = K.parseInt(a[2]) / 255;
        return new H(b, c, d, parseFloat(a[3]));
      }
      a = a.split(",");
      return new H(parseFloat(a[0]), parseFloat(a[1]), parseFloat(a[2]), 1);
    }
  }
  class sf {}
  class qq {
    constructor() {
      this.hint = 0;
      this.offset = new H(0, 0, 0, 0);
      this.gf = new H(1, 1, 1, 1);
    }
    set(a) {
      var b = this.gf,
        c = a.gf;
      b.x = c.x;
      b.y = c.y;
      b.z = c.z;
      b.w = c.w;
      b = this.offset;
      c = a.offset;
      b.x = c.x;
      b.y = c.y;
      b.z = c.z;
      b.w = c.w;
      this.hint = a.hint;
    }
    concat(a) {
      if (this.hint == 1 && a.hint == 1) return ((this.gf.w *= a.gf.w), this);
      let b = this.offset,
        c = this.gf,
        d = a.gf;
      a = a.offset;
      c.x *= d.x;
      c.y *= d.y;
      c.z *= d.z;
      c.w *= d.w;
      b.x = d.x * b.x + a.x;
      b.y = d.y * b.y + a.y;
      b.z = d.z * b.z + a.z;
      b.w = d.w * b.w + a.w;
      this.hint = 0;
      return this;
    }
  }
  qq.g = "317";
  Object.assign(qq.prototype, { j: qq });
  class Of {
    constructor() {
      this.Z2 = 0;
      this.isActive = !1;
      this.GA = 0;
      this.TL = 1;
      this.om = this.pr = this.ld = 0;
      this.du = 1;
      this.next = this.L = null;
      this.id = -1;
    }
    B() {
      let a = this.L;
      a != null && a.f3a(this);
      this.L = null;
    }
    update(a) {
      this.isActive &&
        ((this.GA += a * this.TL), this.L != null && this.BK(this.GA));
    }
    QAa() {
      var a = this.GA + this.ld;
      if (this.du == 0) {
        var b = this.om,
          c = this.pr;
        return a < b ? b : a > c ? c : a;
      }
      b = this.pr - this.om;
      return b > 0
        ? ((this.Z2 = (a - this.om) / b),
          (a = Math.floor(this.Z2)),
          (c = this.Z2 - a),
          this.du == 1
            ? this.om + c * b
            : (a & 1) == 0
              ? this.om + c * b
              : this.pr - c * b)
        : this.om;
    }
  }
  Of.g = "318";
  Object.assign(Of.prototype, { j: Of });
  class rq {
    constructor() {
      this.Rxb = [];
      this.Bna = [];
    }
    wob(a) {
      this.Bna.length = 0;
      let b = this.Rxb;
      for (b.push(a); b.length > 0; )
        if (((a = b.pop()), a.oh))
          for (a = a.children; a != null; ) (b.push(a), (a = a.Ma));
        else a.PZ = !0;
    }
  }
  rq.g = "319";
  Object.assign(rq.prototype, { j: rq });
  class sq extends rq {
    constructor() {
      super();
      this.Sxb = [];
      this.Txb = [];
    }
    X0a(a) {
      this.wob(a);
      let b = this.Bna;
      b.length = 0;
      var c = this.Sxb;
      let d = this.Txb;
      for (c.push(a); c.length > 0; )
        if (((a = c.pop()), a.bn != 1))
          if (a.oh) for (a = a.children; a != null; ) (c.push(a), (a = a.Ma));
          else a.effect != null && d.push(a);
      c = 0;
      for (a = d.length; c < a; ) {
        ++c;
        let e = d.pop();
        e.PZ = !1;
        this.Bna.push(e);
      }
      return b;
    }
  }
  sq.g = "31A";
  sq.u = rq;
  Object.assign(sq.prototype, { j: sq });
  class wb {}
  wb.g = "31B";
  wb.Ei = !0;
  Object.assign(wb.prototype, { j: wb });
  class Sw {}
  Sw.g = "31C";
  Sw.Ei = !0;
  class Tw {
    constructor(a) {
      this.effect = this.hb = this.XY = null;
      this.Ha = a;
    }
  }
  Tw.g = "31D";
  Object.assign(Tw.prototype, { j: Tw });
  class Pb {
    constructor() {
      this.enabled = !0;
      this.hb = null;
      this.type = ob.Vq(this);
      this.state = 0;
    }
    B() {}
    update() {}
    jx(a) {
      this.hb = a;
    }
  }
  Pb.g = "31E";
  Object.assign(Pb.prototype, { j: Pb });
  class Gy {
    constructor() {
      this.oK = this.Rd = 0;
      this.Zub = !1;
      this.wu = [];
      this.Lza = [];
      this.Yg = Array(6);
      let a = 0;
      for (; a < 6; ) this.Yg[a++] = [];
    }
    getData(a) {
      return this.Yg[a];
    }
  }
  Gy.g = "31F";
  Object.assign(Gy.prototype, { j: Gy });
