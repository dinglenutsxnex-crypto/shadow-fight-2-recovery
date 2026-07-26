// 034-quest-actions-base.js
// Domain: camera  |  21 class(es)  |  tree root(s): eb, Vu, mz
// Edit here. Run `npm run build` to reassemble the full bundle.
  class eb {
    constructor(a) {
      this.type = a;
      this.model = null;
      this.Ey = new Vu();
      this.ad = m.l();
      this.pe = 0;
    }
    vfb(a, b, c) {
      return this.Ey.h6 != 0 || this.Ey.frame != a ? !1 : this.Vi(b, c);
    }
    wfb(a, b, c) {
      return this.Ey.h6 != 1 || this.Ey.event != a ? !1 : this.Vi(b, c);
    }
    Vi(a, b) {
      if (Fd(this.ad)) return !0;
      var c = b.Nf().j6a(a, this);
      if (c != null) return c;
      c = new Ae();
      c.xr = b;
      c.items = b.parameters.qt();
      c.IA = b.Nf().parameters.Yk();
      c.qz = b.Nf().jb != null ? b.Nf().jb.parameters.Yk() : null;
      c = a.sw(c, this.ad);
      b.Nf().cyb(a, this, c);
      return c;
    }
    Wh() {}
    parse(a) {
      var b = a.attributes.get("Frame");
      b != null
        ? ((this.Ey.h6 = 0), (this.Ey.frame = u.I(b)))
        : ((this.Ey.h6 = 1),
          (b = a.attributes.get("Event")),
          (this.Ey.event = ub.X6a(b != null ? b : "")));
      b = a.attributes.get("Player");
      this.pe = Od.ql(b != null ? b : "Me");
      b = a.A("Conditions");
      if (b != null) {
        this.ad = m.l();
        b = b.children;
        let c = 0;
        for (; c < b.length; ) {
          let d = Xl.create(b[c++]);
          d != null && (d.parse(a), this.ad.push(d));
        }
      }
    }
    preload() {}
  }
  eb.g = "110";
  Object.assign(eb.prototype, { j: eb });
  class Zl extends eb {
    constructor(a) {
      super(8);
      this.parse(a);
    }
    Wh(a) {
      a.owb(this);
    }
    parse(a) {
      super.parse(a);
      var b = a.attributes.get("Type");
      b = b != null ? b : "";
      b == "MagicBullet"
        ? (this.B6 = 0)
        : b == "RaidChargeBullet" && (this.B6 = 1);
      this.value = u.I(a.attributes.get("Value"));
      (this.B6 != 0 && this.B6 != 1) || !v.jba || (this.value = 0);
    }
  }
  Zl.g = "111";
  Zl.u = eb;
  Object.assign(Zl.prototype, { j: Zl });
  class Vu {
    constructor() {
      this.h6 = this.frame = this.event = 0;
    }
  }
  Vu.g = "112";
  Object.assign(Vu.prototype, { j: Vu });
  class $l extends eb {
    constructor(a) {
      super(13);
      this.Pi = null;
      this.parse(a);
    }
    Wh(a) {
      debugger;
      if (this.iy < 0.01) a.RNa(this);
      else {
        debugger;
        let b = this;
        this.Pi = new Re(function () {
          b.Edb(a);
        }, this.iy);
      }
    }
    parse(a) {
      super.parse(a);
      a.attributes.get("MeWeight");
      a.attributes.get("EnemyWeight");
      this.time = u.H(a.attributes.get("Time"));
      this.iy = u.H(a.attributes.get("Delay"));
    }
    Edb(a) {
      a.RNa(this);
    }
  }
  $l.g = "113";
  $l.u = eb;
  Object.assign($l.prototype, { j: $l });
  class lh extends eb {
    constructor(a) {
      super(0);
      this.parse(a);
    }
    Wh(a) {
      a.xwb(this);
    }
    parse(a) {
      super.parse(a);
      this.cacheName = K.T(++lh.wUa);
      var b = a.attributes.get("Name");
      this.fK = b != null ? b : "";
      b = a.attributes.get("StartAnimation");
      this.ux = b != null ? b : "";
      this.items = m.l();
      a = a.children;
      for (b = 0; b < a.length; ) {
        var c = a[b++];
        let d = c.attributes.get("CopyParentType"),
          e = c.attributes.get("CopyParentSubtype");
        c = new rl(c, d != null ? d : "", e != null ? e : "");
        this.items.push(c);
      }
    }
  }
  lh.g = "114";
  lh.u = eb;
  Object.assign(lh.prototype, { j: lh });
  class am extends eb {
    constructor(a) {
      super(1);
      this.parse(a);
    }
    Wh(a) {
      a.ywb(this);
    }
    parse(a) {
      super.parse(a);
    }
  }
  am.g = "115";
  am.u = eb;
  Object.assign(am.prototype, { j: am });
  class bm extends eb {
    constructor(a) {
      super(5);
      this.position = new ee();
      this.X1 = !1;
      this.KS = null;
      this.parse(a);
    }
    Wh(a) {
      a.Cwb(this);
    }
    mB(a, b, c, d, e) {
      this.position.lB(a, b, c, d, e);
    }
    yxa() {
      this.position.$y();
    }
    parse(a) {
      super.parse(a);
      var b = a.attributes.get("Name");
      this.name = b != null ? b : "";
      b = a.attributes.get("Sequence");
      this.fileName = b != null ? b : "";
      var c = u.H(a.attributes.get("Scale"), 1);
      this.TL = u.H(a.attributes.get("TimeScale"), 1);
      this.Scb = u.ka(a.attributes.get("Looped"), !1);
      this.bgb = u.ka(a.attributes.get("OnBackground"), !1);
      this.EYa = u.ka(a.attributes.get("Backwards"), !1);
      b = u.H(a.attributes.get("ScaleX"), c);
      c = u.H(a.attributes.get("ScaleY"), c);
      this.fma = u.H(a.attributes.get("StartRotation"));
      let d = a.attributes.get("PackName");
      this.KS = d != null ? d : "";
      this.scale = new H(b, c, 0, 1);
      b = a.A("Attach");
      b != null
        ? ((this.MY = new Wu(b)), (this.X1 = !0))
        : ((a = a.A("Position")),
          a != null &&
            (this.position.Jj(a),
            (this.X1 = u.ka(a.attributes.get("Follow"), !1)),
            u.I(a.attributes.get("StopFollowframe"), -1)));
    }
    preload() {
      G.uf("magic/" + this.fileName + ".png");
    }
  }
  bm.g = "116";
  bm.u = eb;
  Object.assign(bm.prototype, { j: bm });
  class cm extends eb {
    constructor(a) {
      super(14);
      this.parse(a);
    }
    Wh(a) {
      debugger;
      a.vwb(this);
    }
    parse(a) {
      super.parse(a);
      this.value = u.ka(a.attributes.get("Value"));
    }
  }
  cm.g = "117";
  cm.u = eb;
  Object.assign(cm.prototype, { j: cm });
  class kg extends eb {
    constructor(a) {
      super(10);
      this.parse(a);
    }
    Wh(a) {
      a.swb(this);
    }
    parse(a) {
      super.parse(a);
      var b = a.attributes.get("FileName");
      this.BT = b != null ? b : "";
      this.Uwb = u.H(a.attributes.get("StartingRotation"));
      this.oza = u.H(a.attributes.get("ChangeHitEffectScale"));
      switch (this.BT) {
        case "block":
          var c = 24;
          break;
        case "effect_shield_hex_hit":
          c = 16;
          break;
        case "critical":
        case "hit_blade":
          c = 29;
          break;
        case "effect_tornado_hit":
        case "mgc_effect_gust_up":
          c = 0;
          break;
        default:
          c = 0;
      }
      if (c > 0) {
        a = [];
        b = 1;
        for (c += 1; b < c; ) a.push("" + this.BT + "/" + this.BT + "_" + b++);
        b = kg.eAa;
        c = this.BT;
        a = lg.hea(a, 60);
        b.v[c] = a;
      }
    }
    preload() {}
  }
  kg.g = "118";
  kg.u = eb;
  Object.assign(kg.prototype, { j: kg });
  class dm extends eb {
    constructor(a) {
      super(17);
      this.parse(a);
    }
    Wh(a) {
      a.wwb(this);
    }
    parse(a) {
      super.parse(a);
      var b = a.attributes.get("ChildName");
      this.qxa = b != null ? b : "";
      b = a.attributes.get("Animation");
      this.Cva = b != null ? b : "";
      this.L4a = u.ka(a.attributes.get("ForcePlay"), !1);
    }
  }
  dm.g = "119";
  dm.u = eb;
  Object.assign(dm.prototype, { j: dm });
  class em extends eb {
    constructor(a) {
      super(4);
      this.wq = m.l();
      this.parse(a);
    }
    ab() {
      var a = this.wq;
      let b = a.length;
      return b == 0 ? null : a[vf.Dja(b)];
    }
    Wh(a) {
      a.Bwb(this);
    }
    qka(a) {
      return this.E7 ? !0 : a == this.V8;
    }
    parse(a) {
      super.parse(a);
      var b = a.attributes.get("Voice");
      this.E7 = b == null;
      this.V8 = b != null ? b : "";
      a = a.children;
      for (b = 0; b < a.length; ) {
        let c = a[b++].attributes.get("Name");
        this.wq.push(c != null ? c : "ERR_RAND_SOUND_NO_NAME");
      }
    }
  }
  em.g = "11A";
  em.u = eb;
  Object.assign(em.prototype, { j: em });
  class fm extends eb {
    constructor(a) {
      super(12);
      this.parse(a);
    }
    Wh(a) {
      a.uwb(this);
    }
    parse(a) {
      super.parse(a);
      this.duration = u.I(a.attributes.get("Duration"));
      a = a.attributes.get("Button");
      this.Fv = a != null ? a : "";
    }
  }
  fm.g = "11B";
  fm.u = eb;
  Object.assign(fm.prototype, { j: fm });
  class gm extends eb {
    constructor(a) {
      super(15);
      this.parse(a);
    }
    Wh() {}
    parse(a) {
      super.parse(a);
    }
  }
  gm.g = "11C";
  gm.u = eb;
  Object.assign(gm.prototype, { j: gm });
  class hm extends eb {
    constructor(a) {
      super(9);
      this.mw = new im();
      this.parse(a);
    }
    Wh(a) {
      a.rwb(this);
    }
    parse(a) {
      super.parse(a);
      this.mw.parse(a);
    }
  }
  hm.g = "11D";
  hm.u = eb;
  Object.assign(hm.prototype, { j: hm });
  class jm extends eb {
    constructor(a) {
      super(2);
      this.parse(a);
    }
    Wh(a) {
      a.zwb(this);
    }
    qka(a) {
      return this.E7 ? !0 : a == this.V8;
    }
    parse(a) {
      super.parse(a);
      var b = a.attributes.get("Name");
      this.name = b != null ? b : "";
      this.volume = u.H(a.attributes.get("Volume"), 1);
      this.yeb = u.ka(a.attributes.get("Looped"), !1);
      b = a.attributes.get("Voice");
      this.E7 = b == null;
      this.V8 = b != null ? b : "";
      a = a.attributes.get("PackName");
      this.KS = a != null ? a : "";
    }
    preload() {}
  }
  jm.g = "11E";
  jm.u = eb;
  Object.assign(jm.prototype, { j: jm });
  class km extends eb {
    constructor(a) {
      super(6);
      this.parse(a);
    }
    Wh(a) {
      a.nwb(this);
    }
    parse(a) {
      super.parse(a);
      a = a.attributes.get("Name");
      this.name = a != null ? a : "";
    }
  }
  km.g = "11F";
  km.u = eb;
  Object.assign(km.prototype, { j: km });
  class lm extends eb {
    constructor(a) {
      super(7);
      this.parse(a);
    }
    Wh(a) {
      a.pwb(this);
    }
    parse(a) {
      super.parse(a);
      a = a.attributes.get("Name");
      this.name = a != null ? a : "";
    }
  }
  lm.g = "120";
  lm.u = eb;
  Object.assign(lm.prototype, { j: lm });
  class mm extends eb {
    constructor(a) {
      super(3);
      this.parse(a);
    }
    Wh(a) {
      a.Awb(this);
    }
    parse(a) {
      super.parse(a);
      a = a.attributes.get("Name");
      this.name = a != null ? a : "";
    }
  }
  mm.g = "121";
  mm.u = eb;
  Object.assign(mm.prototype, { j: mm });
  class nm extends eb {
    constructor(a) {
      super(1);
      this.parse(a);
    }
    Wh(a) {
      a.qwb();
    }
    parse(a) {
      super.parse(a);
    }
  }
  nm.g = "122";
  nm.u = eb;
  Object.assign(nm.prototype, { j: nm });
  class om extends eb {
    constructor(a) {
      super(11);
      this.Ef = new Xu();
      this.parse(a);
    }
    Wh(a) {
      a.twb(this);
    }
    parse(a) {
      super.parse(a);
      this.Ef.oz = u.I(a.attributes.get("EffectTime"));
      this.Ef.tM = u.H(a.attributes.get("ZoomScale"));
    }
  }
  om.g = "123";
  om.u = eb;
  Object.assign(om.prototype, { j: om });
  class mz {
    static create(a) {
      switch (a.name) {
        case "AddBullets":
          a = new Zl(a);
          break;
        case "CameraWeight":
          a = new $l(a);
          break;
        case "CreatePlayer":
          a = new lh(a);
          break;
        case "Delete":
          a = new am(a);
          break;
        case "Effect":
          a = new bm(a);
          break;
        case "EnableBossAbility":
          a = new cm(a);
          break;
        case "HitEffect":
          a = new kg(a);
          break;
        case "PlayAnimation":
          a = new dm(a);
          break;
        case "RandomSound":
          a = new em(a);
          break;
        case "SetCooldown":
          a = new fm(a);
          break;
        case "SetEndStage":
          a = new gm(a);
          break;
        case "ShakeScreen":
          a = new hm(a);
          break;
        case "Sound":
          a = new jm(a);
          break;
        case "StopEffect":
          a = new km(a);
          break;
        case "StopFollowEffect":
          a = new lm(a);
          break;
        case "StopSound":
          a = new mm(a);
          break;
        case "TryOnEnd":
          a = new nm(a);
          break;
        case "ZoomEffect":
          a = new om(a);
          break;
        default:
          a = null;
      }
      return a;
    }
  }
  mz.g = "124";
