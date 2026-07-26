// 051-sprite-renderer.js
// Domain: renderer-canvas  |  17 class(es)  |  tree root(s): zq, Aq, Bq, Cq, Dq, hb, Eq, Ud, Fq, Gq, Hq, Ph, Iq, Pb, Of
// Edit here. Run `npm run build` to reassemble the full bundle.
  class zq {
    constructor() {
      this.ae = Zb;
      this.Xd = Qh;
    }
    init() {}
    Ea(a) {
      let b = a.Ha,
        c = a.effect;
      var d = c.qc,
        e = d.data,
        f = d.width,
        g = d.height,
        h = (b.Qc & 32) > 0 ? b.Yi : 1;
      b.pla(d);
      (b.Qc & 2) > 0 && (e = b.Lva(b.ki(1).transform, e, 0, 0, f, g));
      d = c.color;
      if (d.x != 1 || d.y != 1 || d.z != 1 || d.w != 1)
        e = b.wOa(e, c.color, 0, 0, f, g);
      b.fz == 0 && ((e = b.Kva(e, 0, 0, f, g)), (h = 1));
      b.JT(h);
      b.CF(a.hb.dc);
      a = c.Zq;
      var k = c.qc.re.kt;
      f = 0;
      g = ((a.length / 6) | 0) * 6;
      d = c.width;
      var l = c.height,
        n = c.kd;
      h = null;
      c.clip &&
        ((h = b.Cc), h.save(), h.rect(n, n, d - 2 * n, l - 2 * n), h.clip());
      let q;
      for (; f < g; ) {
        var r = a[f++];
        r == 65533
          ? (f += 5)
          : ((d = a[f++]),
            (l = a[f++]),
            (n = a[f++]),
            (q = a[f++]),
            ++f,
            (r = k[r].Pc),
            b.drawImage(e, r.x, r.y, r.w, r.v, d, l, n, q));
      }
      if (c.br.length > 0)
        for (e = -1, f = 0; f < g; ) {
          r = a[f++];
          if (r != 65533) {
            f += 5;
            continue;
          }
          k = c.br[++e];
          if (k == null) {
            f += 5;
            continue;
          }
          d = a[f++];
          l = a[f++];
          n = a[f++];
          q = a[f++];
          ++f;
          r = k.frame.Pc;
          let x = k.frame.ea;
          var t = n / x.x;
          let z = q / x.y,
            A = Math.min(t, z);
          t < z
            ? ((t = q), (q = x.y * A), (l += (t - q) / 2))
            : ((t = n), (n = x.x * A), (d += (t - n) / 2));
          k.frame.Dx &&
            ((n *= r.w / x.x),
            (q *= r.v / x.y),
            (d += k.frame.sj.x * A),
            (l += k.frame.sj.y * A));
          b.drawImage(k.qc.data, r.x, r.y, r.w, r.v, d, l, n, q);
        }
      c.clip && h.restore();
    }
  }
  zq.g = "335";
  zq.Rb = [wb];
  Object.assign(zq.prototype, { j: zq });
  class Aq {
    constructor() {
      this.ae = Zb;
      this.Xd = Rj;
    }
    init() {}
    Ea(a) {
      let b = a.Ha,
        c = a.effect;
      var d = c.qc,
        e = c.charset,
        f = e.lineHeight;
      let g = e.Zy,
        h = e.bea,
        k = c.grid;
      var l = c.cols;
      e = l * h;
      let n = c.rows * f;
      var q = c.Nxa;
      b.SK();
      b.fL(e, n);
      b.KT(!1);
      let r = b.Cc;
      var t = null;
      d = d.data;
      let x = g[c.pob];
      var z = c.fillColor;
      z == null &&
        ((z = b.clearColor),
        (z =
          (((z.w * 255) | 0) << 24) |
          (((z.x * 255) | 0) << 16) |
          (((z.y * 255) | 0) << 8) |
          (z.z * 255) |
          0));
      var A = sf.Sx;
      z =
        "#" + A[(z >> 16) & 255] + A[(z >> 8) & 255] + A[z & 255] + A[z >>> 24];
      if (c.fillColor != null) {
        A = c.fillColor;
        var C = sf.Sx;
        b.hk(
          "#" +
            C[(A >> 16) & 255] +
            C[(A >> 8) & 255] +
            C[A & 255] +
            C[A >>> 24],
        );
        r.fillRect(0, 0, e, n);
      }
      A = k.length;
      if (q)
        for (l = c.cols, q = 0; q < A; ) {
          var B = q++;
          var D = k[B];
          C = B % l;
          B = (B / l) | 0;
          var F = D.code;
          var M = D.nma;
          D = D.UY;
          F > 32
            ? ((F = g[F]),
              F == null && (F = x),
              F != null &&
                ((C *= h),
                (B *= f),
                r.clearRect(C, B, h, f),
                t != "source-over" &&
                  (t = r.globalCompositeOperation = "source-over"),
                r.drawImage(
                  d,
                  F.x,
                  F.y,
                  F.width,
                  F.height,
                  C + F.XU,
                  B + F.sM,
                  F.width,
                  F.height,
                ),
                b.ti++,
                M != -1 &&
                  ((F = sf.Sx),
                  b.hk(
                    "#" + F[(M >> 16) & 255] + F[(M >> 8) & 255] + F[M & 255],
                  ),
                  t != "source-atop" &&
                    (t = r.globalCompositeOperation = "source-atop"),
                  r.fillRect(C, B, h, f),
                  b.ti++),
                D != -1
                  ? ((M = sf.Sx),
                    b.hk(
                      "#" + M[(D >> 16) & 255] + M[(D >> 8) & 255] + M[D & 255],
                    ))
                  : (r.fillStyle = z),
                t != "destination-over" &&
                  (t = r.globalCompositeOperation = "destination-over"),
                r.fillRect(C, B, h, f),
                b.ti++))
            : D != -1 &&
              ((M = sf.Sx),
              b.hk("#" + M[(D >> 16) & 255] + M[(D >> 8) & 255] + M[D & 255]),
              t != "source-over" &&
                (t = r.globalCompositeOperation = "source-over"),
              (C *= h),
              (B *= f),
              r.fillRect(C, B, h, f),
              b.ti++);
        }
      else
        for (t = 0; t < A; )
          ((z = t++),
            (D = k[z]),
            (C = z % l),
            (B = (z / l) | 0),
            (F = D.code),
            F > 32 &&
              ((F = g[F]),
              F == null && (F = x),
              F != null &&
                (r.drawImage(
                  d,
                  F.x,
                  F.y,
                  F.width,
                  F.height,
                  C * h + F.XU,
                  B * f + F.sM,
                  F.width,
                  F.height,
                ),
                b.ti++)));
      f = b.Cc;
      b.NK();
      c.IPa
        ? b.CF(a.hb.dc)
        : ((a = b.nfa(a.hb.dc)),
          b.Cc.setTransform(a.m11, a.m21, a.m12, a.m22, a.m14, a.m24));
      b.drawImage(f.canvas, 0, 0, e, n, 0, 0, e, n);
    }
  }
  Aq.g = "336";
  Aq.Rb = [wb];
  Object.assign(Aq.prototype, { j: Aq });
  class Bq {
    constructor() {
      this.ae = Zb;
      this.Xd = yg;
    }
    init() {}
    Ea(a) {
      let b = a.Ha;
      var c = a.effect;
      a = a.hb;
      b.CF(a.dc);
      var d = c.color;
      if ((b.Qc & 2) > 0) {
        var e = b.ki(1).transform;
        d = c.color;
        c = e.gf;
        let g = e.offset;
        e = d.x * c.x + g.x;
        var f = d.y * c.y + g.y;
        let h = d.z * c.z + g.z;
        d = d.w * c.w + g.w;
        d = new H(
          e < 0 ? 0 : e > 1 ? 1 : e,
          f < 0 ? 0 : f > 1 ? 1 : f,
          h < 0 ? 0 : h > 1 ? 1 : h,
          d < 0 ? 0 : d > 1 ? 1 : d,
        );
      }
      b.JT((b.Qc & 32) > 0 ? b.Yi : 1);
      c = ((d.x * 255) | 0) & 255;
      e = ((d.y * 255) | 0) & 255;
      f = ((d.z * 255) | 0) & 255;
      b.hk(
        d.w == 1
          ? "rgb(" + c + "," + e + "," + f + ")"
          : "rgba(" + c + "," + e + "," + f + "," + We.toFixed(d.w, 2) + ")",
      );
      a = a.size;
      b.fillRect(0, 0, a.x, a.y);
    }
  }
  Bq.g = "337";
  Bq.Rb = [wb];
  Object.assign(Bq.prototype, { j: Bq });
  class Cq {
    constructor() {
      this.$s = new Ud();
      this.ae = Zb;
      this.Xd = Sj;
    }
    init() {}
    Ea(a) {
      let b = a.effect;
      a.effect = a.effect.Ar;
      this.$s.Ea(a);
      a.effect = b;
    }
  }
  Cq.g = "338";
  Cq.Rb = [wb];
  Object.assign(Cq.prototype, { j: Cq });
  class Dq {
    constructor() {
      this.ae = Zb;
      this.Xd = Mh;
    }
    init() {}
    Ea(a) {
      let b = a.Ha;
      b.resetTransform();
      b.JT((b.Qc & 32) > 0 ? b.Yi : 1);
      a = a.effect;
      for (
        var c = a.qc,
          d = 0,
          e = 0,
          f = 1,
          g = 1,
          h = 1,
          k = 1,
          l = b.Fl,
          n = 0,
          q = l.length;
        n < q;

      )
        ((d += h * l[n++]),
          (e += k * l[n++]),
          (f -= h * (1 - l[n++])),
          (g -= k * (1 - l[n++])),
          (h = f - d),
          (k = g - e));
      l = d;
      n = e;
      var r = b.currentTarget.width;
      q = b.currentTarget.height;
      e = (r * l) | 0;
      d = (q * n) | 0;
      h = e;
      k = d;
      f = (r * (f - l)) | 0;
      l = (q * (g - n)) | 0;
      g = a.ELa;
      if (g != null) {
        f = l = 0;
        q = n = h = k = 1;
        r = b.Fl;
        let t = 0,
          x = r.length;
        for (; t < x; )
          ((l += n * r[t++]),
            (f += q * r[t++]),
            (k -= n * (1 - r[t++])),
            (h -= q * (1 - r[t++])),
            (n = k - l),
            (q = h - f));
        n = f;
        f = k;
        q = h;
        h = e + g.x * (f - l);
        k = d + g.y * (q - n);
        f = g.w * (f - l);
        l = g.v * (q - n);
      }
      c != null
        ? (b.pla(c), b.drawImage(c.data, 0, 0, c.width, c.height, h, k, f, l))
        : ((a = a.color),
          (c = ((a.x * 255) | 0) & 255),
          (e = ((a.y * 255) | 0) & 255),
          (d = ((a.z * 255) | 0) & 255),
          b.hk(
            a.w == 1
              ? "rgb(" + c + "," + e + "," + d + ")"
              : "rgba(" +
                  c +
                  "," +
                  e +
                  "," +
                  d +
                  "," +
                  We.toFixed(a.w, 2) +
                  ")",
          ),
          b.fillRect(h, k, f, l));
    }
  }
  Dq.g = "339";
  Dq.Rb = [wb];
  Object.assign(Dq.prototype, { j: Dq });
  class hb {
    constructor(a, b, c, d) {
      this.K = a;
      this.P = b;
      this.N = c;
      this.X = d;
    }
    Tn() {
      this.K = this.P = pa.sd;
      this.N = this.X = pa.Ld;
    }
    Wj() {
      return this.K >= this.N ? !0 : this.P >= this.X;
    }
    add(a) {
      a.K < this.K && (this.K = a.K);
      a.N > this.N && (this.N = a.N);
      a.P < this.P && (this.P = a.P);
      a.X > this.X && (this.X = a.X);
    }
    So(a) {
      let b = a.x;
      b < this.K && (this.K = b);
      b > this.N && (this.N = b);
      a = a.y;
      a < this.P && (this.P = a);
      a > this.X && (this.X = a);
    }
    offset(a, b) {
      this.K -= a;
      this.P -= b;
      this.N += a;
      this.X += b;
      return this;
    }
    hn(a) {
      var b = this.N - this.K;
      let c = this.X - this.P;
      var d = b / a;
      let e = c / 1;
      if (d <= e)
        return ((b = this.P + (c - d) * 0.5), new hb(this.K, b, this.N, b + d));
      d = a * e;
      b = this.K + (b - d) * 0.5;
      return new hb(b, this.P, b + d, this.X);
    }
    clone() {
      return new hb(this.K, this.P, this.N, this.X);
    }
    Z5a() {
      return new H((this.K + this.N) * 0.5, (this.P + this.X) * 0.5, 0, 1);
    }
    FBa() {
      return new H(this.K, this.P, 0, 1);
    }
    DBa() {
      return new H(this.N, this.X, 0, 1);
    }
  }
  hb.g = "33A";
  Object.assign(hb.prototype, { j: hb });
  class Eq {
    constructor() {
      this.ae = Xb;
      this.Xd = Ah;
    }
    init() {}
    Ea(a) {
      let b = a.Ha,
        c = a.effect;
      var d = a.hb;
      a = null;
      let e = c.qc;
      e != null && (a = e.data);
      b.CF(d.dc);
      var f = b.li(d.dc);
      d = f.m11;
      let g = f.m12,
        h = f.m14,
        k = f.m21,
        l = f.m22;
      f = f.m24;
      var n, q;
      let r,
        t = (n = 0),
        x = 0,
        z = (q = 0),
        A = 0;
      let C;
      let B = b.Cc;
      B.resetTransform();
      (b.Qc & 1) > 0 && b.fz == 0 && (B.fillStyle = Vw);
      r = null;
      let D = 0,
        F = c.rl;
      for (; D < F.length; ) {
        var M = F[D];
        ++D;
        var Q = M.x;
        var U = M.y;
        var W = M.uka;
        var da = M.vka;
        var na = M.rotation;
        switch (c.$kb) {
          case 0:
            M.frame != r &&
              ((r = M.frame),
              M.frame == -1
                ? ((t = n = 0), (x = z = e.width), (q = A = e.height))
                : ((n = e.re.kt[r]),
                  n.Dx
                    ? ((z = n.Pc.w), (A = n.Pc.v))
                    : ((z = n.ea.x), (A = n.ea.y)),
                  (q = n.Pc),
                  (n = q.x),
                  (t = q.y),
                  (x = q.w),
                  (q = q.v)));
            if (na == 0) {
              Q -= (W * z) / 2;
              var ka = U - (da * A) / 2;
              U = d * W;
              var qa = g * da;
              var oa = d * Q + g * ka + h;
              na = k * W;
              da *= l;
            } else
              ((oa = (W * z) / 2),
                (ka = (da * A) / 2),
                (qa = Math.cos(na)),
                (C = Math.sin(na)),
                (na = W * qa),
                (W *= -C),
                (Q = -(oa * qa) + ka * C + Q),
                (M = da * C),
                (da *= qa),
                (ka = -(oa * C) - ka * qa + U),
                (U = d * na + g * M),
                (qa = d * W + g * da),
                (oa = d * Q + g * ka + h),
                (na = k * na + l * M),
                (da = k * W + l * da));
            W = k * Q + l * ka + f;
            B.setTransform(U, na, qa, da, oa, W);
            b.Cc.drawImage(a, n, t, x, q, 0, 0, z, A);
            b.ti++;
            break;
          case 1:
            (B.setTransform(d, k, g, l, h, f),
              (da = M.gb * Math.max(W, da)),
              B.fillRect(Q - da, U - da, 2 * da, 2 * da),
              b.ti++);
        }
      }
    }
  }
  Eq.g = "33B";
  Eq.Rb = [wb];
  Object.assign(Eq.prototype, { j: Eq });
  class Ud {
    constructor(a) {
      this.Aka = new H(0, 0, 0, 0);
      this.s1 = null;
      this.Xd = ke;
      this.ae = a != null ? a : Xb;
    }
    init() {}
    Ea(a) {
      let b = a.effect,
        c = a.Ha,
        d = null;
      (c.Qc & 2) > 0 && (d = c.ki(1).transform);
      let e = b.ilb,
        f = !1,
        g = !1,
        h = !1,
        k = 0,
        l = b.wd,
        n = b.values,
        q = 0,
        r = 0;
      let t,
        x = b.Sc;
      if (x != 0) {
        var z = c.Cc,
          A = c.Yi;
        (c.Qc & 1) > 0 && c.fz == 0 && (A = 1);
        z.globalAlpha = A;
        Ud.kda
          ? ((a = c.li(a.hb.dc)),
            z.setTransform(a.m11, a.m21, a.m12, a.m22, a.m14, a.m24))
          : z.resetTransform();
        a = !1;
        for (var C = new Path2D(); q < x; ) {
          var B = l[q++];
          switch (B) {
            case 1:
              B = n[r++];
              t = n[r++];
              C.moveTo(B, t);
              break;
            case 2:
              B = n[r++];
              t = n[r++];
              C.lineTo(B, t);
              break;
            case 3:
              r++;
              r++;
              C.closePath();
              break;
            case 4:
              c.zMa(this.HQ(n[r++], n[r++] * A, d));
              k = n[r++];
              b.Pfb && c.am instanceof Ug && (k /= c.am.zoom);
              k != z.lineWidth && (z.lineWidth = k);
              h = g == 0;
              f = !0;
              break;
            case 5:
              c.hk(this.HQ(n[r++], n[r++] * A, d));
              h = f;
              g = !0;
              break;
            case 6:
              f = !1;
              c.zMa(Vw);
              z.lineWidth = 1;
              break;
            case 7:
              g = !1;
              c.hk(Vw);
              break;
            case 10:
              B = f && e && ((k | 0) & 1) == 1;
              a
                ? B || (z.translate(-0.5, -0.5), (a = !1))
                : B && (z.translate(0.5, 0.5), (a = !0));
              f && g
                ? (h ? (z.stroke(C), z.fill(C)) : (z.fill(C), z.stroke(C)),
                  c.ti++)
                : f
                  ? (z.stroke(C), c.ti++)
                  : g && (z.fill(C), c.ti++);
              q < x - 1 && (C = new Path2D());
              break;
            default:
              r = this.s1(B, r, n, C);
          }
        }
      }
    }
    HQ(a, b, c) {
      if (c != null) {
        var d = this.Aka;
        d.x = ((a >> 16) & 255) / 255;
        d.y = ((a >> 8) & 255) / 255;
        d.z = (a & 255) / 255;
        d.w = b;
        a = c.gf;
        c = c.offset;
        let e = d;
        d = e.x * a.x + c.x;
        b = e.y * a.y + c.y;
        let f = e.z * a.z + c.z;
        a = e.w * a.w + c.w;
        d = new H(
          d < 0 ? 0 : d > 1 ? 1 : d,
          b < 0 ? 0 : b > 1 ? 1 : b,
          f < 0 ? 0 : f > 1 ? 1 : f,
          a < 0 ? 0 : a > 1 ? 1 : a,
        );
        a = ((d.x * 255) | 0) & 255;
        c = ((d.y * 255) | 0) & 255;
        b = ((d.z * 255) | 0) & 255;
        return d.w == 1
          ? "rgb(" + a + "," + c + "," + b + ")"
          : "rgba(" + a + "," + c + "," + b + "," + We.toFixed(d.w, 2) + ")";
      }
      d = a | (((b * 255) | 0) << 24);
      a = sf.Sx;
      return (
        "#" + a[(d >> 16) & 255] + a[(d >> 8) & 255] + a[d & 255] + a[d >>> 24]
      );
    }
  }
  Ud.g = "33C";
  Ud.Rb = [wb];
  Object.assign(Ud.prototype, { j: Ud });
  class Fq {
    constructor() {
      this.Xi = null;
      this.flags = 0;
      this.dD = [];
      this.lJa = new Ud();
      this.ae = Xb;
      this.Xd = Kq;
      this.lJa.s1 = w(this, this.s1);
    }
    init() {}
    Ea(a) {
      this.flags = 0;
      this.Xi = a.Ha.Cc;
      this.lJa.Ea(a);
      (this.flags & 1) > 0 && (this.Xi.lineCap = "butt");
      if ((this.flags & 2) > 0) {
        for (; this.dD.length > 0; ) this.dD.pop();
        this.Xi.setLineDash(this.dD);
      }
      this.Xi = null;
    }
    s1(a, b, c, d) {
      let e, f, g, h, k;
      switch (a) {
        case 11:
          a = c[b++];
          var l = c[b++];
          e = c[b++];
          f = c[b++];
          d.rect(a, l, e, f);
          break;
        case 12:
          a = c[b++];
          l = c[b++];
          e = c[b++];
          f = c[b++];
          g = c[b++];
          d.roundRect(a, l, e, f, g);
          break;
        case 13:
          a = c[b++];
          l = c[b++];
          e = c[b++];
          f = c[b++];
          d.quadraticCurveTo(a, l, e, f);
          break;
        case 14:
          a = c[b++];
          l = c[b++];
          e = c[b++];
          f = c[b++];
          g = c[b++];
          h = c[b++];
          d.bezierCurveTo(a, l, e, f, g, h);
          break;
        case 15:
          a = c[b++];
          l = c[b++];
          e = c[b++];
          f = c[b++];
          g = c[b++];
          d.arc(a, l, e, f, g);
          break;
        case 16:
          a = c[b++];
          l = c[b++];
          e = c[b++];
          f = c[b++];
          g = c[b++];
          d.arcTo(a, l, e, f, g);
          break;
        case 17:
          a = c[b++];
          l = c[b++];
          e = c[b++];
          f = c[b++];
          g = c[b++];
          h = c[b++];
          k = c[b++];
          c = c[b++];
          d.ellipse(a, l, e, f, g, h, k, c == 1);
          break;
        case 18:
          switch (c[b++]) {
            case 0:
              l = "butt";
              break;
            case 1:
              l = "round";
              break;
            case 2:
              l = "square";
          }
          this.Xi.lineCap = l;
          this.flags |= 1;
          break;
        case 19:
          for (d = c[b++]; this.dD.length > 0; ) this.dD.pop();
          for (a = 0; a < d; ) (a++, this.dD.push(c[b++]));
          this.Xi.setLineDash(this.dD);
          c = c[b++];
          this.Xi.lineDashOffset = c;
          this.flags |= 2;
      }
      return b;
    }
  }
  Fq.g = "33D";
  Fq.Rb = [wb];
  Object.assign(Fq.prototype, { j: Fq });
  class Gq {
    constructor() {
      this.ae = Zb;
      this.Xd = le;
    }
    init() {}
    Ea(a) {
      var b = a.effect;
      let c = a.Ha;
      var d = a.hb,
        e = b.page;
      c.pla(e);
      a = e.data;
      var f = d.size,
        g = f.x,
        h = f.y;
      c.CF(d.dc);
      f = b.Pc;
      var k = f.x,
        l = f.y,
        n = f.w,
        q = f.v;
      (c.Qc & 2) > 0 &&
        ((a = c.Lva(c.ki(1).transform, a, k, l, n, q)), (k = l = 0));
      f = b.color;
      if (f.x != 1 || f.y != 1 || f.z != 1 || f.w != 1)
        a = c.wOa(a, b.color, k, l, n, q);
      f = (c.Qc & 32) > 0 ? c.Yi : 1;
      c.fz == 0 && ((a = c.Kva(a, k, l, n, q)), (k = l = 0), (f = 1));
      c.JT(f);
      f = (1 / c.am.bG.m11) * c.Gva;
      var r = 0,
        t = b.offsetX,
        x = b.offsetY,
        z = b.QA,
        A = b.Sw;
      t != 0 && (r = 1);
      x != 0 && (r |= 2);
      z != 1 && (r |= 4);
      A != 1 && (r |= 8);
      var C = b.flipX,
        B = b.flipY,
        D = b.mode;
      switch (D.Ag) {
        case 0:
          if (r == 0) {
            t = c.Cc;
            if (b.frame != null && b.frame.iL)
              (t.save(),
                t.rotate(-1.5707963267948966),
                t.translate(-h, 0),
                c.drawImage(a, k, l, q, n, 0 - f, 0 - f, h + 2 * f, g + 2 * f),
                t.restore());
            else {
              if (C || B)
                (t.save(),
                  b.frame.Dx
                    ? ((z = b.frame.ea.x - b.frame.Pc.w - b.frame.sj.x),
                      (e = b.frame.ea.y - b.frame.Pc.v - b.frame.sj.y),
                      t.translate(C ? -n : 0, B ? -b.frame.sj.y : 0),
                      t.scale(C ? -1 : 1, B ? -1 : 1),
                      t.translate(C ? -n - z : 0, B ? -q - e : 0))
                    : (t.scale(C ? -1 : 1, B ? -1 : 1),
                      t.translate(C ? -n : 0, B ? -q : 0)));
              c.drawImage(a, k, l, n, q, 0 - f, 0 - f, g + 2 * f, h + 2 * f);
              (C || B) && t.restore();
            }
            break;
          }
          if (r == 1) {
            t %= 1;
            t < 0 && ++t;
            z = n * t;
            t *= g;
            c.drawImage(
              a,
              k + z,
              l,
              n - z,
              q,
              0 - f,
              0 - f,
              g - t + 2 * f,
              h + 2 * f,
            );
            c.drawImage(a, k, l, z, q, g - z - f, 0 - f, t + 2 * f, h + 2 * f);
            break;
          }
          if (r == 2) {
            x %= 1;
            x < 0 && ++x;
            t = q * x;
            z = h * x;
            c.drawImage(
              a,
              k,
              l + t,
              n,
              q - t,
              0 - f,
              0 - f,
              g + 2 * f,
              h - z + 2 * f,
            );
            c.drawImage(a, k, l, n, t, 0 - f, h - t - f, g + 2 * f, z + 2 * f);
            break;
          }
          k = c.Cc;
          k.save();
          l = new Path2D();
          l.rect(0, 0, g, h);
          k.clip(l);
          g = e.width;
          h = e.height;
          l = g / z;
          n = h / A;
          q = 1 / z;
          b = 1 / A;
          d = t % 1;
          d < 0 && ++d;
          d = -d;
          r = x % 1;
          r < 0 && ++r;
          r = -r;
          var F;
          C = l + 2 * f;
          B = n + 2 * f;
          if ((e.flags & 4) > 0)
            for (
              e = ((x | 0) & 1) == 1 ? 1 : -1,
                x >= 0 && (e *= -1),
                x = r * n,
                A = r / A;
              A < 1;

            ) {
              r = A + b;
              D = ((t | 0) & 1) == 1 ? -1 : 1;
              t >= 0 && (D *= -1);
              A = d * l;
              for (F = d / z; F < 1; )
                ((F += q),
                  k.save(),
                  k.scale(D, e),
                  D > 0
                    ? e > 0
                      ? c.drawImage(a, 0, 0, g, h, A - f, x - f, C, B)
                      : c.drawImage(a, 0, 0, g, h, A - f, -x - n - f, C, B)
                    : e > 0
                      ? c.drawImage(a, 0, 0, g, h, -A - l - f, x - f, C, B)
                      : c.drawImage(
                          a,
                          0,
                          0,
                          g,
                          h,
                          -A - l - f,
                          -x - n - f,
                          C,
                          B,
                        ),
                  k.restore(),
                  (D = -D),
                  (A += l));
              e = -e;
              x += n;
              A = r;
            }
          else
            for (x = r * n, A = r / A; A < 1; ) {
              r = A + b;
              A = d * l;
              for (F = d / z; F < 1; )
                ((F += q),
                  c.drawImage(
                    a,
                    0,
                    0,
                    g,
                    h,
                    A - f,
                    x - f,
                    l + 2 * f,
                    n + 2 * f,
                  ),
                  (A += l));
              x += n;
              A = r;
            }
          k.restore();
          break;
        case 1:
          this.rda(
            c,
            d,
            b.Pc,
            D.rect,
            a,
            b.frame != null ? b.frame.sj : new fc(0, 0),
          );
          break;
        case 2:
          this.sda(c, d, b.Pc, a);
          break;
        case 3:
          this.nda(c, d, b.Pc, D.mode, D.amount, a);
      }
    }
    nda(a, b, c, d, e, f) {
      if (e != 0) {
        var g = c.x,
          h = c.y,
          k = c.w;
        c = c.v;
        var l = b.size;
        b = l.x;
        l = l.y;
        switch (d.Ag) {
          case 0:
            a.drawImage(f, g, h, k * e, c, 0, 0, b * e, l);
            break;
          case 1:
            a.drawImage(
              f,
              g + k * (1 - e),
              h,
              k * e,
              c,
              b * (1 - e),
              0,
              e * b,
              l,
            );
            break;
          case 2:
            a.drawImage(f, g, h, k, c * e, 0, 0, b, l * e);
            break;
          case 3:
            a.drawImage(
              f,
              g,
              h + c * (1 - e),
              k,
              c * e,
              0,
              l * (1 - e),
              b,
              e * l,
            );
        }
      }
    }
    rda(a, b, c, d, e, f) {
      var g = b.Jb.scale;
      let h = g.x;
      g = g.y;
      var k = b.size;
      b = k.x;
      k = k.y;
      var l = f.x,
        n = f.y;
      f = c.x;
      let q = c.y,
        r = c.w;
      c = c.v;
      let t = d.x - l;
      l = d.x + d.w - l;
      let x = d.y - n;
      d = d.y + d.v - n;
      n = t;
      let z = x,
        A;
      n > 0 && z > 0 && a.drawImage(e, f, q, n, z, 0, 0, t / h, x / g);
      n = f + r - l;
      z = x;
      n > 0 &&
        z > 0 &&
        a.drawImage(e, f + l, q, n, z, b - (r - l) / h, 0, n / h, x / g);
      n = t;
      z = c - d;
      n > 0 &&
        z > 0 &&
        a.drawImage(e, f, q + d, n, z, 0, k - (c - d) / g, t / h, (c - d) / g);
      n = r - l;
      z = c - d;
      n > 0 &&
        z > 0 &&
        a.drawImage(
          e,
          f + l,
          q + d,
          n,
          z,
          b - (r - l) / h,
          k - (c - d) / g,
          (r - l) / h,
          (c - d) / g,
        );
      n = l - t;
      z = x;
      A = b - t / h - (r - l) / h;
      n > 0 && z > 0 && a.drawImage(e, f + t, q, n, z, t / h, 0, A, x / g);
      n = l - t;
      z = c - d;
      n > 0 &&
        z > 0 &&
        a.drawImage(
          e,
          f + t,
          q + d,
          n,
          z,
          t / h,
          k - (c - d) / g,
          A,
          (c - d) / g,
        );
      n = t;
      z = d - x;
      n > 0 &&
        z > 0 &&
        a.drawImage(
          e,
          f,
          q + x,
          n,
          z,
          0,
          x / g,
          t / h,
          k - x / g - (c - d) / g,
        );
      n = r - l;
      z = d - x;
      n > 0 &&
        z > 0 &&
        a.drawImage(
          e,
          f + l,
          q + x,
          n,
          z,
          b - (r - l) / h,
          x / g,
          (r - l) / h,
          k - x / g - (c - d) / g,
        );
      n = l - t;
      z = d - x;
      n > 0 &&
        z > 0 &&
        a.drawImage(
          e,
          f + t,
          q + x,
          n,
          z,
          t / h,
          x / g,
          b - t / h - (r - l) / h,
          k - x / g - (c - d) / g,
        );
    }
    sda(a, b, c, d) {
      var e = b.Jb.scale,
        f = b.size;
      b = c.x;
      let g = c.y,
        h = c.w,
        k = c.v,
        l = h,
        n = k,
        q = (f.x * e.x) / l;
      e = (f.y * e.y) / n;
      f = q | 0;
      let r = q % 1,
        t = e | 0,
        x = e % 1,
        z,
        A,
        C = l / q,
        B = n / e;
      if (f == 0 && t == 0)
        ((h *= r), (k *= x), (A = z = 0), (C = (l / q) * r), (B = (n / e) * x));
      else {
        for (var D = 0; D < t; ) {
          A = (D * n) / e;
          let F = 0;
          for (; F < f; )
            ((z = (F * l) / q), a.drawImage(d, b, g, h, k, z, A, C, B), ++F);
          ++D;
        }
        if (r > 0)
          for (h *= r, C *= r, z = (f * l) / q, D = 0; D < t; )
            ((A = (D++ * n) / e), a.drawImage(d, b, g, h, k, z, A, C, B));
        if (x > 0)
          for (
            h = c.w, k *= x, C = l / q, B *= x, A = (t * n) / e, c = 0;
            c < f;

          )
            ((z = (c++ * l) / q), a.drawImage(d, b, g, h, k, z, A, C, B));
        h *= r;
        C *= r;
        z = (f * l) / q;
        A = (t * n) / e;
      }
      a.drawImage(d, b, g, h, k, z, A, C, B);
    }
  }
  Gq.g = "33E";
  Gq.Rb = [wb];
  Object.assign(Gq.prototype, { j: Gq });
  class Hq {
    constructor() {
      this.ae = Zb;
      this.Xd = Tj;
    }
    init() {}
    Ea(a) {
      let b = a.Ha,
        c = a.effect;
      b.JT((b.Qc & 32) > 0 ? b.Yi : 1);
      var d = c.tu,
        e = c.gu;
      let f = e.x;
      e = e.y;
      let g = c.rj,
        h = c.rj.cols,
        k = c.jB;
      var l = c.zna;
      l = l < 0 ? 0 : l;
      var n = c.xna,
        q = h - 1;
      n = n > q ? q : n;
      q = c.Ana;
      var r = q < 0 ? 0 : q;
      q = c.yna;
      var t = c.rj.rows - 1;
      let x = q > t ? t : q;
      q = b.Cc;
      t = l * d;
      let z = r * d,
        A = c.tA;
      A
        ? (b.resetTransform(),
          b.SK(),
          b.fL((n - l + 1) * d, (x - r + 1) * d),
          (q = b.Cc),
          b.KT(!1))
        : (b.CF(a.hb.dc), b.KT(c.ENa));
      let C = (1 / b.am.bG.m11) * b.Gva,
        B = d + 2 * C;
      for (; r <= x; ) {
        let F = l;
        for (; F <= n; ) {
          var D = g.data[r * h + F];
          if (D == 0) {
            ++F;
            continue;
          }
          let M = k[D];
          D = M.re.kt[D].Pc;
          q.drawImage(
            M.data,
            D.x,
            D.y,
            D.w,
            D.v,
            F * d + (A ? -t : f) - C,
            r * d + (A ? -z : e) - C,
            B,
            B,
          );
          b.ti++;
          ++F;
        }
        ++r;
      }
      A &&
        ((d = q.canvas),
        b.NK(),
        b.KT(c.ENa),
        (q = b.Cc),
        b.CF(a.hb.dc),
        q.transform(1, 0, 0, 1, t + f, z + e),
        b.drawImage(d, 0, 0, d.width, d.height, 0, 0, d.width, d.height));
    }
  }
  Hq.g = "33F";
  Hq.Rb = [wb];
  Object.assign(Hq.prototype, { j: Hq });
  class Ph {
    constructor() {
      this.ae = $e;
      this.Xd = Uj;
    }
    init() {
      this.path = new ke();
    }
    Ea(a) {
      let b = a.Ha,
        c = a.effect,
        d = a.hb;
      this.path.clear();
      let e = d.jp,
        f = b.El;
      b.El = Ph.Uab;
      let g = b.H0(d.dc);
      b.El = f;
      let h = b.ki(3),
        k = h.enabled,
        l = h.Pwa ? 1 : 0,
        n = e.getData(0),
        q = c.color,
        r =
          (((q.z * 255) | 0) & 255) |
          ((((q.y * 255) | 0) & 255) << 8) |
          ((((q.x * 255) | 0) & 255) << 16);
      this.path.hk(r, c.color.w, !0);
      let t = c.flags;
      if ((t & 8) > 0) {
        let A = c.BJa / 2,
          C = 0;
        for (; C < e.Rd; ) {
          let B = C * 3,
            D = n[B],
            F = n[B + 1],
            M = n[B + 2],
            Q = g,
            U = Q.m11 * D + Q.m12 * F + Q.m13 * M + Q.m14,
            W = Q.m21 * D + Q.m22 * F + Q.m23 * M + Q.m24,
            da = Q.m31 * D + Q.m32 * F + Q.m33 * M + Q.m34,
            na = Q.m41 * D + Q.m42 * F + Q.m43 * M + Q.m44,
            ka,
            qa,
            oa,
            Aa = na,
            Ta;
          if (Math.abs(U) > Aa || Math.abs(W) > Aa || Math.abs(da) > Aa)
            Ta = null;
          else {
            let Ba = 1 / na;
            ka = U * Ba;
            qa = W * Ba;
            oa = da * Ba;
            let ab = ka,
              hc = qa,
              Jb = oa,
              nb = f;
            Ta = new H(
              nb.m11 * ab + nb.m12 * hc + nb.m13 * Jb + nb.m14,
              nb.m21 * ab + nb.m22 * hc + nb.m23 * Jb + nb.m24,
              nb.m31 * ab + nb.m32 * hc + nb.m33 * Jb + nb.m34,
              1,
            );
          }
          if (Ta != null) {
            let Ba = Ta.x,
              ab = Ta.y;
            this.path.Jja(Ba - A, ab - A, Ba + A, ab + A);
          }
          ++C;
        }
        this.path.apply();
        this.path.uxa();
      }
      this.path.dla(r, c.color.w, 1, !0);
      let x = 0;
      (t & 16) > 0 && (x = 1);
      (t & 32) > 0 && (x |= 2);
      (t & 64) > 0 && (x |= 4);
      let z = 0;
      for (; z < 3; ) {
        let A = z++;
        if ((x & (1 << A)) > 0) {
          let C = e.getData(0),
            B = e.getData(3 + A),
            D = 0;
          for (; D < e.Rd; ) {
            let F = C[D * 3],
              M = C[D * 3 + 1],
              Q = C[D * 3 + 2],
              U = c.lK,
              W = F + B[D * 3] * U,
              da = M + B[D * 3 + 1] * U,
              na = Q + B[D * 3 + 2] * U,
              ka = g,
              qa = ka.m11 * F + ka.m12 * M + ka.m13 * Q + ka.m14,
              oa = ka.m21 * F + ka.m22 * M + ka.m23 * Q + ka.m24,
              Aa = ka.m31 * F + ka.m32 * M + ka.m33 * Q + ka.m34,
              Ta = ka.m41 * F + ka.m42 * M + ka.m43 * Q + ka.m44,
              Ba,
              ab,
              hc,
              Jb = Ta,
              nb;
            if (Math.abs(qa) > Jb || Math.abs(oa) > Jb || Math.abs(Aa) > Jb)
              nb = null;
            else {
              let Sa = 1 / Ta;
              Ba = qa * Sa;
              ab = oa * Sa;
              hc = Aa * Sa;
              let Zc = Ba,
                tc = ab,
                Ab = hc,
                pb = f;
              nb = new H(
                pb.m11 * Zc + pb.m12 * tc + pb.m13 * Ab + pb.m14,
                pb.m21 * Zc + pb.m22 * tc + pb.m23 * Ab + pb.m24,
                pb.m31 * Zc + pb.m32 * tc + pb.m33 * Ab + pb.m34,
                1,
              );
            }
            let zb = g,
              Vd = zb.m11 * W + zb.m12 * da + zb.m13 * na + zb.m14,
              uc = zb.m21 * W + zb.m22 * da + zb.m23 * na + zb.m24,
              Ub = zb.m31 * W + zb.m32 * da + zb.m33 * na + zb.m34,
              Wd = zb.m41 * W + zb.m42 * da + zb.m43 * na + zb.m44,
              Xd,
              Ad,
              ld,
              $c = Wd,
              Hc;
            if (Math.abs(Vd) > $c || Math.abs(uc) > $c || Math.abs(Ub) > $c)
              Hc = null;
            else {
              let Sa = 1 / Wd;
              Xd = Vd * Sa;
              Ad = uc * Sa;
              ld = Ub * Sa;
              let Zc = Xd,
                tc = Ad,
                Ab = ld,
                pb = f;
              Hc = new H(
                pb.m11 * Zc + pb.m12 * tc + pb.m13 * Ab + pb.m14,
                pb.m21 * Zc + pb.m22 * tc + pb.m23 * Ab + pb.m24,
                pb.m31 * Zc + pb.m32 * tc + pb.m33 * Ab + pb.m34,
                1,
              );
            }
            nb != null &&
              Hc != null &&
              (this.path.bS(nb.x, nb.y), this.path.tE(Hc.x, Hc.y));
            ++D;
          }
          this.path.apply();
        }
      }
      if ((t & 1) > 0) {
        let A = e.wu,
          C = 0;
        for (; C < e.oK * 3; ) {
          let B = A[C++],
            D = A[C++],
            F = A[C++],
            M = n[B * 3],
            Q = n[B * 3 + 1],
            U = n[B * 3 + 2],
            W = n[D * 3],
            da = n[D * 3 + 1],
            na = n[D * 3 + 2],
            ka = n[F * 3],
            qa = n[F * 3 + 1],
            oa = n[F * 3 + 2],
            Aa = g,
            Ta = Aa.m11 * M + Aa.m12 * Q + Aa.m13 * U + Aa.m14,
            Ba = Aa.m21 * M + Aa.m22 * Q + Aa.m23 * U + Aa.m24,
            ab = Aa.m31 * M + Aa.m32 * Q + Aa.m33 * U + Aa.m34,
            hc = Aa.m41 * M + Aa.m42 * Q + Aa.m43 * U + Aa.m44,
            Jb,
            nb,
            zb,
            Vd = hc,
            uc;
          if (Math.abs(Ta) > Vd || Math.abs(Ba) > Vd || Math.abs(ab) > Vd)
            uc = null;
          else {
            let kb = 1 / hc;
            Jb = Ta * kb;
            nb = Ba * kb;
            zb = ab * kb;
            let bb = Jb,
              Bd = nb,
              Cd = zb,
              Va = f;
            uc = new H(
              Va.m11 * bb + Va.m12 * Bd + Va.m13 * Cd + Va.m14,
              Va.m21 * bb + Va.m22 * Bd + Va.m23 * Cd + Va.m24,
              Va.m31 * bb + Va.m32 * Bd + Va.m33 * Cd + Va.m34,
              1,
            );
          }
          let Ub = g,
            Wd = Ub.m11 * W + Ub.m12 * da + Ub.m13 * na + Ub.m14,
            Xd = Ub.m21 * W + Ub.m22 * da + Ub.m23 * na + Ub.m24,
            Ad = Ub.m31 * W + Ub.m32 * da + Ub.m33 * na + Ub.m34,
            ld = Ub.m41 * W + Ub.m42 * da + Ub.m43 * na + Ub.m44,
            $c,
            Hc,
            Sa,
            Zc = ld,
            tc;
          if (Math.abs(Wd) > Zc || Math.abs(Xd) > Zc || Math.abs(Ad) > Zc)
            tc = null;
          else {
            let kb = 1 / ld;
            $c = Wd * kb;
            Hc = Xd * kb;
            Sa = Ad * kb;
            let bb = $c,
              Bd = Hc,
              Cd = Sa,
              Va = f;
            tc = new H(
              Va.m11 * bb + Va.m12 * Bd + Va.m13 * Cd + Va.m14,
              Va.m21 * bb + Va.m22 * Bd + Va.m23 * Cd + Va.m24,
              Va.m31 * bb + Va.m32 * Bd + Va.m33 * Cd + Va.m34,
              1,
            );
          }
          let Ab = g,
            pb = Ab.m11 * ka + Ab.m12 * qa + Ab.m13 * oa + Ab.m14,
            zg = Ab.m21 * ka + Ab.m22 * qa + Ab.m23 * oa + Ab.m24,
            Ag = Ab.m31 * ka + Ab.m32 * qa + Ab.m33 * oa + Ab.m34,
            Bg = Ab.m41 * ka + Ab.m42 * qa + Ab.m43 * oa + Ab.m44,
            bf,
            me,
            Pc,
            Ic = Bg,
            Bc;
          if (Math.abs(pb) > Ic || Math.abs(zg) > Ic || Math.abs(Ag) > Ic)
            Bc = null;
          else {
            let kb = 1 / Bg;
            bf = pb * kb;
            me = zg * kb;
            Pc = Ag * kb;
            let bb = bf,
              Bd = me,
              Cd = Pc,
              Va = f;
            Bc = new H(
              Va.m11 * bb + Va.m12 * Bd + Va.m13 * Cd + Va.m14,
              Va.m21 * bb + Va.m22 * Bd + Va.m23 * Cd + Va.m24,
              Va.m31 * bb + Va.m32 * Bd + Va.m33 * Cd + Va.m34,
              1,
            );
          }
          uc == null ||
            tc == null ||
            Bc == null ||
            (k &&
              ((tc.x - uc.x) * (Bc.y - uc.y) - (tc.y - uc.y) * (Bc.x - uc.x)) *
                l >
                0) ||
            (this.path.bS(uc.x, uc.y),
            this.path.tE(tc.x, tc.y),
            this.path.tE(Bc.x, Bc.y),
            this.path.tE(uc.x, uc.y));
        }
        this.path.apply();
      }
      if ((t & 2) > 0) {
        let A = e.getData(0),
          C = e.wu,
          B = 0;
        for (; B < e.oK * 3; ) {
          let D = C[B++],
            F = C[B++],
            M = C[B++],
            Q = A[D * 3],
            U = A[D * 3 + 1],
            W = A[D * 3 + 2],
            da = A[F * 3],
            na = A[F * 3 + 1],
            ka = A[F * 3 + 2],
            qa = A[M * 3],
            oa = A[M * 3 + 1],
            Aa = A[M * 3 + 2],
            Ta = da - Q,
            Ba = na - U,
            ab = ka - W,
            hc = qa - Q,
            Jb = oa - U,
            nb = Aa - W,
            zb = Ba * nb - ab * Jb,
            Vd = ab * hc - Ta * nb,
            uc = Ta * Jb - Ba * hc,
            Ub,
            Wd,
            Xd,
            Ad = c.lK / Math.sqrt(zb * zb + Vd * Vd + uc * uc);
          Ub = zb * Ad;
          Wd = Vd * Ad;
          Xd = uc * Ad;
          let ld = (Q + da + qa) * 0.3333333333333333,
            $c = (U + na + oa) * 0.3333333333333333,
            Hc = (W + ka + Aa) * 0.3333333333333333,
            Sa = g,
            Zc = Sa.m11 * ld + Sa.m12 * $c + Sa.m13 * Hc + Sa.m14,
            tc = Sa.m21 * ld + Sa.m22 * $c + Sa.m23 * Hc + Sa.m24,
            Ab = Sa.m31 * ld + Sa.m32 * $c + Sa.m33 * Hc + Sa.m34,
            pb = Sa.m41 * ld + Sa.m42 * $c + Sa.m43 * Hc + Sa.m44,
            zg,
            Ag,
            Bg,
            bf = pb,
            me;
          if (Math.abs(Zc) > bf || Math.abs(tc) > bf || Math.abs(Ab) > bf)
            me = null;
          else {
            let cf = 1 / pb;
            zg = Zc * cf;
            Ag = tc * cf;
            Bg = Ab * cf;
            let df = zg,
              Rh = Ag,
              Sh = Bg,
              $b = f;
            me = new H(
              $b.m11 * df + $b.m12 * Rh + $b.m13 * Sh + $b.m14,
              $b.m21 * df + $b.m22 * Rh + $b.m23 * Sh + $b.m24,
              $b.m31 * df + $b.m32 * Rh + $b.m33 * Sh + $b.m34,
              1,
            );
          }
          let Pc = ld + Ub,
            Ic = $c + Wd,
            Bc = Hc + Xd,
            kb = g,
            bb = kb.m11 * Pc + kb.m12 * Ic + kb.m13 * Bc + kb.m14,
            Bd = kb.m21 * Pc + kb.m22 * Ic + kb.m23 * Bc + kb.m24,
            Cd = kb.m31 * Pc + kb.m32 * Ic + kb.m33 * Bc + kb.m34,
            Va = kb.m41 * Pc + kb.m42 * Ic + kb.m43 * Bc + kb.m44,
            sz,
            tz,
            uz,
            Hy = Va,
            Ww;
          if (Math.abs(bb) > Hy || Math.abs(Bd) > Hy || Math.abs(Cd) > Hy)
            Ww = null;
          else {
            let cf = 1 / Va;
            sz = bb * cf;
            tz = Bd * cf;
            uz = Cd * cf;
            let df = sz,
              Rh = tz,
              Sh = uz,
              $b = f;
            Ww = new H(
              $b.m11 * df + $b.m12 * Rh + $b.m13 * Sh + $b.m14,
              $b.m21 * df + $b.m22 * Rh + $b.m23 * Sh + $b.m24,
              $b.m31 * df + $b.m32 * Rh + $b.m33 * Sh + $b.m34,
              1,
            );
          }
          if (me != null && Ww != null) {
            let cf = me;
            this.path.bS(cf.x, cf.y);
            let df = Ww;
            this.path.tE(df.x, df.y);
          }
        }
        this.path.apply();
      }
      if ((t & 4) > 0) {
        let A = 0,
          C = e.Lza;
        for (; A < C.length; ) {
          let B = C[A];
          ++A;
          let D;
          D = 1;
          let F = B[0] * 3,
            M = B.length,
            Q = 0;
          for (; Q < M; ) {
            let U = n[F],
              W = n[F + 1],
              da = n[F + 2],
              na = new H(U, W, da, 1),
              ka = na,
              qa = ka.x,
              oa = ka.y,
              Aa = ka.z,
              Ta = ka.w,
              Ba = g,
              ab = Ba.m11 * qa + Ba.m12 * oa + Ba.m13 * Aa + Ba.m14 * Ta,
              hc = Ba.m21 * qa + Ba.m22 * oa + Ba.m23 * Aa + Ba.m24 * Ta,
              Jb = Ba.m31 * qa + Ba.m32 * oa + Ba.m33 * Aa + Ba.m34 * Ta,
              nb = Ba.m41 * qa + Ba.m42 * oa + Ba.m43 * Aa + Ba.m44 * Ta,
              zb,
              Vd,
              uc,
              Ub = nb,
              Wd;
            if (Math.abs(ab) > Ub || Math.abs(hc) > Ub || Math.abs(Jb) > Ub)
              Wd = null;
            else {
              let Pc = 1 / nb;
              zb = ab * Pc;
              Vd = hc * Pc;
              uc = Jb * Pc;
              let Ic = zb,
                Bc = Vd,
                kb = uc,
                bb = f;
              Wd = new H(
                bb.m11 * Ic + bb.m12 * Bc + bb.m13 * kb + bb.m14,
                bb.m21 * Ic + bb.m22 * Bc + bb.m23 * kb + bb.m24,
                bb.m31 * Ic + bb.m32 * Bc + bb.m33 * kb + bb.m34,
                1,
              );
            }
            F = B[D++ % M] * 3;
            U = n[F];
            W = n[F + 1];
            da = n[F + 2];
            let Xd = (na = new H(U, W, da, 1)),
              Ad = Xd.x,
              ld = Xd.y,
              $c = Xd.z,
              Hc = Xd.w,
              Sa = g,
              Zc = Sa.m11 * Ad + Sa.m12 * ld + Sa.m13 * $c + Sa.m14 * Hc,
              tc = Sa.m21 * Ad + Sa.m22 * ld + Sa.m23 * $c + Sa.m24 * Hc,
              Ab = Sa.m31 * Ad + Sa.m32 * ld + Sa.m33 * $c + Sa.m34 * Hc,
              pb = Sa.m41 * Ad + Sa.m42 * ld + Sa.m43 * $c + Sa.m44 * Hc,
              zg,
              Ag,
              Bg,
              bf = pb,
              me;
            if (Math.abs(Zc) > bf || Math.abs(tc) > bf || Math.abs(Ab) > bf)
              me = null;
            else {
              let Pc = 1 / pb;
              zg = Zc * Pc;
              Ag = tc * Pc;
              Bg = Ab * Pc;
              let Ic = zg,
                Bc = Ag,
                kb = Bg,
                bb = f;
              me = new H(
                bb.m11 * Ic + bb.m12 * Bc + bb.m13 * kb + bb.m14,
                bb.m21 * Ic + bb.m22 * Bc + bb.m23 * kb + bb.m24,
                bb.m31 * Ic + bb.m32 * Bc + bb.m33 * kb + bb.m34,
                1,
              );
            }
            if (Wd != null && me != null) {
              let Pc = Wd;
              this.path.bS(Pc.x, Pc.y);
              let Ic = me;
              this.path.tE(Ic.x, Ic.y);
            }
            ++Q;
          }
        }
        this.path.apply();
      }
      Ud.kda = !1;
      b.nz(this.path);
      Ud.kda = !0;
    }
  }
  Ph.g = "340";
  Ph.Rb = [wb];
  Object.assign(Ph.prototype, { j: Ph });
  class Iq {
    constructor() {
      this.$s = null;
      this.ae = Xb;
      this.Xd = Vj;
    }
    init() {
      this.$s = new Ud();
    }
    Ea(a) {
      this.$s.Ea(a);
    }
  }
  Iq.g = "341";
  Iq.Rb = [wb];
  Object.assign(Iq.prototype, { j: Iq });
  class ke extends Pb {
    constructor(a) {
      a == null && (a = -1);
      super();
      a == -1 && (a = 4096);
      a < 128 && (a = 128);
      this.precision = 0.2;
      this.ilb = !1;
      this.Pfb = !0;
      new hb(-1024, -1024, 1024, 1024);
      this.Uxa = !1;
      this.Sc = 0;
      this.VR = a >> 2;
      this.wd = Array(a >> 2);
      this.$c = 0;
      this.WR = a;
      this.values = Array(a);
      this.zha = new Xw(0, 1, 1);
      this.fillStyle = new Yw(0, 1);
      this.start = new H(0, 0, 0, 1);
      this.current = new H(0, 0, 0, 1);
      this.KI = this.JI = null;
      this.Yn = [];
      this.Ih = new hb(pa.sd, pa.sd, pa.Ld, pa.Ld);
      this.clear();
      this.dla(0, 1, 1);
    }
    update(a) {
      super.update(a);
      this.apply();
    }
    jx(a) {
      super.jx(a);
      this.Uxa && this.Txa();
    }
    clear() {
      this.Sc = this.$c = 0;
      this.Ih.Tn();
      this.iga = this.jga = !1;
    }
    apply() {
      this.Sc != 0 &&
        this.wd[this.Sc - 1] != 10 &&
        ((this.wd[this.Sc++] = 10), this.Uxa && this.Txa());
    }
    dla(a, b, c, d) {
      d == null && (d = !1);
      b < 0 ? (b = 0) : b > 1 && (b = 1);
      c < 0 && (c = 0);
      this.Sc > 0 && this.wd[this.Sc - 1] == 4 && (this.Sc--, (this.$c -= 3));
      this.Uo(3, 1);
      let e = this.values;
      e[this.$c++] = a;
      e[this.$c++] = b;
      e[this.$c++] = c;
      this.wd[this.Sc++] = 4;
      this.zha.color = a;
      this.zha.alpha = b;
      this.zha.width = c;
      this.jga = !0;
      d && this.uxa();
    }
    q0a() {
      this.jga &&
        ((this.jga = !1),
        (this.Sc > 0 && this.wd[this.Sc - 1] == 6) ||
          (this.Uo(0, 1), (this.wd[this.Sc++] = 6)));
    }
    hk(a, b, c) {
      c == null && (c = !1);
      b < 0 ? (b = 0) : b > 1 && (b = 1);
      this.Sc > 0 && this.wd[this.Sc - 1] == 5 && (this.Sc--, (this.$c -= 2));
      this.Uo(2, 1);
      this.wd[this.Sc++] = 5;
      this.values[this.$c++] = a;
      this.values[this.$c++] = b;
      this.fillStyle.color = a;
      this.fillStyle.alpha = b;
      this.iga = !0;
      c && this.q0a();
    }
    uxa() {
      this.iga &&
        ((this.iga = !1),
        (this.Sc > 0 && this.wd[this.Sc - 1] == 7) ||
          (this.Uo(0, 1), (this.wd[this.Sc++] = 7)));
    }
    bS(a, b) {
      this.Uo(2, 1);
      var c = this.$c;
      this.values[c] = a;
      this.values[c + 1] = b;
      this.$c += 2;
      this.wd[this.Sc++] = 1;
      c = this.start;
      c.x = a;
      c.y = b;
      c = this.current;
      c.x = a;
      c.y = b;
    }
    D0a(a, b) {
      this.Uo(2, 1);
      this.values[this.$c++] = a;
      this.values[this.$c++] = b;
      this.wd[this.Sc++] = 3;
    }
    tE(a, b) {
      this.Uo(2, 1);
      var c = this.$c;
      this.values[c] = a;
      this.values[c + 1] = b;
      this.$c += 2;
      this.wd[this.Sc++] = 2;
      c = this.current;
      c.x = a;
      c.y = b;
    }
    Jja(a, b, c, d) {
      if (!(a > c || b > d)) {
        this.Uo(10, 5);
        var e = this.$c,
          f = this.values;
        f[e] = a;
        f[e + 1] = b;
        f[e + 2] = c;
        f[e + 3] = b;
        f[e + 4] = c;
        f[e + 5] = d;
        f[e + 6] = a;
        f[e + 7] = d;
        f[e + 8] = a;
        f[e + 9] = b;
        this.$c += 10;
        e = this.Sc;
        a = this.wd;
        a[e] = 1;
        a[e + 1] = 2;
        a[e + 2] = 2;
        a[e + 3] = 2;
        a[e + 4] = 3;
        this.Sc += 5;
      }
    }
    cea(a, b, c, d, e, f) {
      this.JI == null && (this.JI = new Zw());
      this.JI.nR = 1 - this.precision;
      this.JI.flatten(a, b, c, d, e, f);
      this.AJa(this.JI.zc, this.JI.nc);
    }
    dea(a, b, c, d, e, f, g, h) {
      this.KI == null && (this.KI = new $w());
      this.KI.nR = 1 - this.precision;
      this.KI.flatten(a, b, c, d, e, f, g, h);
      this.AJa(this.KI.zc, this.KI.nc);
    }
    AJa(a, b) {
      this.Uo(b, b >> 1);
      let c = this.values,
        d = this.$c,
        e = this.wd,
        f = this.Sc,
        g = 0;
      for (; g < b; ) ((c[d++] = a[g++]), (c[d++] = a[g++]), (e[f++] = 2));
      this.$c = d;
      this.Sc = f;
      this.current.x = c[d - 2];
      this.current.y = c[d - 1];
    }
    Txa() {
      var a = pa.sd,
        b = pa.Ld,
        c = pa.sd;
      let d = pa.Ld,
        e = this.Ih,
        f = this.values,
        g = this.wd,
        h = 0,
        k = 0,
        l = this.Sc;
      for (; h < l; ) {
        var n = g[h++];
        switch (n) {
          case 1:
          case 2:
          case 3:
            n = f[k];
            let q = f[k + 1];
            n < a && (a = n);
            n > b && (b = n);
            q < c && (c = q);
            q > d && (d = q);
            k += 2;
            break;
          case 4:
            k += 3;
            break;
          case 5:
            k += 2;
            break;
          case 6:
          case 7:
          case 10:
            break;
          default:
            ((e.K = a),
              (e.P = c),
              (e.N = b),
              (e.X = d),
              (k = this.rva(n, k, f)),
              (a = e.K),
              (c = e.P),
              (b = e.N),
              (d = e.X));
        }
      }
      e.K = a;
      e.P = c;
      e.N = b;
      e.X = d;
      this.hb != null &&
        ((a = this.hb.pm),
        (a.fb.x = (e.K + e.N) * 0.5),
        (a.fb.y = (e.P + e.X) * 0.5),
        (b = (e.N - e.K) * 0.5),
        (c = (e.X - e.P) * 0.5),
        (a.gb = Math.sqrt(b * b + c * c)),
        a instanceof Td &&
          ((a = a.rect), (a.K = e.K), (a.P = e.P), (a.N = e.N), (a.X = e.X)));
    }
    rva() {
      return 0;
    }
    Uo(a, b) {
      if (a > 0 && this.$c + a > this.WR) {
        this.WR *= 2;
        if (this.WR > 2147483647) throw 140;
        a = Array(this.WR);
        for (var c = 0, d = this.$c; c < d; ) {
          let e = c++;
          a[e] = this.values[e];
        }
        this.values = a;
      }
      if (b > 0 && this.Sc + b > this.VR) {
        this.VR *= 2;
        if (this.VR > 2147483647) throw 141;
        b = Array(this.VR);
        a = 0;
        for (c = this.Sc; a < c; ) ((d = a++), (b[d] = this.wd[d]));
        this.wd = b;
      }
    }
  }
  ke.g = "342";
  ke.u = Pb;
  Object.assign(ke.prototype, { j: ke });
  class Kq extends ke {
    constructor() {
      super();
      this.Wha = !0;
    }
    Jja(a, b, c, d) {
      if (!this.Wha) super.Jja(a, b, c, d);
      else if (!(a > c || b > d)) {
        this.Uo(4, 1);
        var e = this.$c,
          f = this.values;
        f[e] = a;
        f[e + 1] = b;
        f[e + 2] = c - a;
        f[e + 3] = d - b;
        this.$c += 4;
        this.wd[this.Sc++] = 11;
      }
    }
    cea(a, b, c, d, e, f) {
      this.Wha
        ? (this.Uo(4, 1),
          (a = this.values),
          (b = this.$c),
          (a[b] = c),
          (a[b + 1] = d),
          (a[b + 2] = e),
          (a[b + 3] = f),
          (this.$c += 4),
          (this.wd[this.Sc++] = 13))
        : super.cea(a, b, c, d, e, f);
    }
    dea(a, b, c, d, e, f, g, h) {
      this.Wha
        ? (this.Uo(6, 1),
          (a = this.values),
          (b = this.$c),
          (a[b] = c),
          (a[b + 1] = d),
          (a[b + 2] = e),
          (a[b + 3] = f),
          (a[b + 4] = g),
          (a[b + 5] = h),
          (this.$c += 6),
          (this.wd[this.Sc++] = 14))
        : super.dea(a, b, c, d, e, f, g, h);
    }
    rva(a, b, c) {
      let d = this.Ih.K,
        e = this.Ih.P,
        f = this.Ih.N,
        g = this.Ih.X;
      switch (a) {
        case 11:
          var h = c[b];
          a = c[b + 1];
          var k = c[b + 2];
          c = c[b + 3];
          h < d && (d = h);
          h > f && (f = h);
          a < e && (e = a);
          a > g && (g = a);
          h += k;
          a += c;
          h < d && (d = h);
          h > f && (f = h);
          a < e && (e = a);
          a > g && (g = a);
          b += 4;
          break;
        case 12:
          h = c[b];
          a = c[b + 1];
          k = c[b + 2];
          c = c[b + 3];
          h < d && (d = h);
          h > f && (f = h);
          a < e && (e = a);
          a > g && (g = a);
          h += k;
          a += c;
          h < d && (d = h);
          h > f && (f = h);
          a < e && (e = a);
          a > g && (g = a);
          b += 5;
          break;
        case 13:
          a = c[b];
          h = c[b + 1];
          a < d && (d = a);
          a > f && (f = a);
          h < e && (e = h);
          h > g && (g = h);
          a = c[b + 2];
          c = c[b + 3];
          a < d && (d = a);
          a > f && (f = a);
          c < e && (e = c);
          c > g && (g = c);
          b += 4;
          break;
        case 14:
          a = c[b];
          h = c[b + 1];
          a < d && (d = a);
          a > f && (f = a);
          h < e && (e = h);
          h > g && (g = h);
          a = c[b + 2];
          h = c[b + 3];
          a < d && (d = a);
          a > f && (f = a);
          h < e && (e = h);
          h > g && (g = h);
          a = c[b + 4];
          c = c[b + 5];
          a < d && (d = a);
          a > f && (f = a);
          c < e && (e = c);
          c > g && (g = c);
          b += 6;
          break;
        case 15:
          h = c[b];
          a = c[b + 1];
          c = c[b + 2];
          k = h - c;
          var l = a - c;
          k < d && (d = k);
          k > f && (f = k);
          l < e && (e = l);
          l > g && (g = l);
          h += c;
          a += c;
          h < d && (d = h);
          h > f && (f = h);
          a < e && (e = a);
          a > g && (g = a);
          b += 5;
          break;
        case 16:
          h = c[b];
          a = c[b + 1];
          h < d && (d = h);
          h > f && (f = h);
          a < e && (e = a);
          a > g && (g = a);
          h = c[b + 2];
          a = c[b + 3];
          h < d && (d = h);
          h > f && (f = h);
          a < e && (e = a);
          a > g && (g = a);
          b += 5;
          break;
        case 17:
          h = c[b];
          a = c[b + 1];
          c = Math.max(c[b + 2], c[b + 3]);
          k = h - c;
          l = a - c;
          k < d && (d = k);
          k > f && (f = k);
          l < e && (e = l);
          l > g && (g = l);
          h += c;
          a += c;
          h < d && (d = h);
          h > f && (f = h);
          a < e && (e = a);
          a > g && (g = a);
          b += 8;
          break;
        case 18:
          ++b;
          break;
        case 19:
          b += 2 + (c[b] | 0);
      }
      a = this.Ih;
      a.K = d;
      a.P = e;
      a.N = f;
      a.X = g;
      return b;
    }
  }
  Kq.g = "343";
  Kq.u = ke;
  Object.assign(Kq.prototype, { j: Kq });
  class Wj extends Of {
    constructor() {
      super();
      this.Eq = this.Pt = null;
      this.currentFrame = -1;
      this.Dw = this.cK = this.R4 = 0;
      this.Nw = -1;
      this.Qca = !1;
    }
    B() {
      super.B();
      this.Pt = this.NE = null;
    }
    start(a, b, c) {
      b == null && (b = 0);
      this.Eq = a;
      c == null && (c = a.Xf - 1);
      this.cK = b;
      this.Dw = c;
      this.om = a.Sr[this.cK];
      this.pr = a.Sr[this.Dw];
      this.pr = this.Dw < a.Xf - 1 ? a.Sr[this.Dw + 1] : a.WL;
      this.du == 2 &&
        ((this.Qca = !1), (this.pr -= (this.pr - a.Sr[this.Dw]) / 2));
      c < a.Xf - 1 && ++c;
      this.GA = this.om;
      this.isActive = !0;
      this.currentFrame = -1;
      this.Nw = this.cK;
      this.BK(this.GA);
    }
    stop() {
      this.Eq = null;
      this.isActive = !1;
      this.R4 = 0;
    }
    BK() {
      let a = this.QAa();
      this.du == 2 &&
        this.Z2 > 1 &&
        !this.Qca &&
        ((this.Qca = !0), (this.om += this.Eq.Sr[1] / 2));
      let b = this.Eq.WL;
      this.Dw < this.Eq.Xf - 1 && (b = this.Eq.Sr[this.Dw + 1]);
      var c = this.Eq.Xf;
      if (c == 1) var d = (this.Nw = 0);
      else if (a >= b) d = this.Nw = c - 1;
      else {
        d = this.Eq.Sr;
        if (a >= d[this.Nw] && a <= (this.Nw + 1 >= c ? b : d[this.Nw + 1]))
          d = this.Nw;
        else if (c < 16) {
          for (var e = 0; e < c && !(d[e] >= a); ) ++e;
          d = e - 1;
        } else {
          --c;
          e = 0;
          let f,
            g = c + 1;
          for (; e < g; )
            ((f = e + ((g - e) >> 1)), d[f] < a ? (e = f + 1) : (g = f));
          d = e <= c && d[e] == a ? e : ~e;
          d < 0 && ((d = ~d), --d);
        }
        this.Nw = d;
      }
      d < this.cK ? (d = this.cK) : d > this.Dw && (d = this.Dw);
      d != this.currentFrame &&
        ((this.currentFrame = d),
        this.NE != null &&
          this.NE(this.Eq, this.Eq.data[d], this.currentFrame));
      this.du == 0 &&
        a >= b &&
        (this.R4 > 0
          ? (this.R4--,
            (this.GA = this.om),
            (this.currentFrame = -1),
            (this.Nw = this.cK))
          : ((this.isActive = !1),
            (this.Eq = null),
            this.Pt != null && this.Pt()));
    }
  }
  Wj.g = "344";
  Wj.u = Of;
  Object.assign(Wj.prototype, { j: Wj });
  class Nh extends Of {
    constructor() {
      super();
      this.FS = null;
      this.Xbb = function (a, b, c) {
        return a + (b - a) * c;
      };
      this.Pt = null;
      this.ended = !1;
      this.xda = this.ONa = -1;
      this.easing = null;
    }
    B() {
      super.B();
      this.Pt = this.FS = null;
    }
    start(a, b, c, d) {
      this.ONa = a;
      this.xda = b;
      this.easing = d;
      this.om = this.GA = 0;
      this.pr = c;
      this.isActive = !0;
      this.ended = !1;
    }
    BK(a) {
      a >= this.pr && this.du == 0
        ? ((this.isActive = !1),
          this.FS(this.xda),
          (this.ended = !0),
          (a = this.Pt),
          (this.Pt = null),
          a != null && a())
        : ((a = this.QAa() - this.om),
          (a = this.Xbb(
            this.ONa,
            this.xda,
            this.easing(a / (this.pr - this.om)),
          )),
          this.FS(a));
    }
  }
  Nh.g = "345";
  Nh.u = Of;
  Object.assign(Nh.prototype, { j: Nh });
