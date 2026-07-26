// 990-constants.js — Global constants: regex patterns, config tables, lookup arrays
// Edit here. Run `npm run build` to reassemble the full bundle.

  var Yz = {},
    Wz = {},
    Xz = Number,
    Vz = Boolean,
    vz = {},
    Zz = {};
  ob.kUa = {}.toString;
  ya.Cna = !1;
  ya.aE = !1;
  ya.iR = new Ss();
  Ja.Nk = new ac();
  Ja.kGa = !1;
  ed.wxb = 0;
  L.seed = ed.getDate().getTime() % 2147483647;
  L.xka = [];
  dg.Z6 = "SF2Flags";
  la.bV = "SF2User";
  la.j7 = "SF2Packs";
  la.flags = new dg();
  la.hP = 0;
  la.n6 = 0;
  N.LTa = 2.5;
  N.rect = new Ec(0, 0, 960, 540);
  N.width = 960;
  N.height = 540;
  N.Pha = 540;
  N.lc = 1.7777777777777777;
  N.GK = 0;
  N.io = !1;
  N.Ta = new Ug();
  N.c4 = [];
  tf.up = !1;
  y.JQa = "combo";
  y.KQa = "critical";
  y.LQa = "fight";
  y.MQa = "first_strike";
  y.NQa = "great";
  y.OQa = "head_hit";
  y.PQa = "hot_ground";
  y.Wna = "label_lose";
  y.Xna = "label_win";
  y.QQa = "perfect";
  y.RQa = "ringout";
  y.SQa = "round";
  y.TQa = "shock";
  y.UQa = "timesup";
  y.VQa = "home";
  y.WQa = "Pause";
  y.XQa = "Pause_selected";
  y.Yna = "PauseMusic_off";
  y.Zna = "PauseMusic_on";
  y.$na = "PauseSound_off";
  y.aoa = "PauseSound_on";
  y.YQa = "play";
  y.ZQa = "FightPause";
  y.$U = "HealthBar_Empty";
  y.boa = "HealthBar_Full";
  y.$Qa = "HealthBar_Hit";
  y.aRa = "Pause_pressed";
  y.bRa = "Round_Done";
  y.d7 = "preview_bosses/lynx";
  y.cRa = "Achievements01/ach_block_gold";
  y.dRa = "panel";
  y.eRa = "arrow";
  y.fRa = "btn_kick_action";
  y.gRa = "btn_kick_normal";
  y.hRa = "btn_magic_action";
  y.iRa = "btn_magic_normal";
  y.jRa = "btn_punch_action";
  y.kRa = "btn_punch_normal";
  y.lRa = "btn_throw_action";
  y.mRa = "btn_throw_normal";
  y.nRa = "Highlight_Stick";
  y.qRa = "Joystick_action";
  y.rRa = "Joystick_norm";
  y.oRa = "JoystickContainer_action";
  y.pRa = "JoystickContainer_norm";
  y.e7 = "Kick_Highlight";
  y.sRa = "magic_full";
  y.coa = "magic_progress";
  y.doa = "btn_disciple";
  y.eoa = "btn_punching_bag";
  y.tRa = "Dojo_active";
  y.uRa = "Dojo_normal";
  y.vRa = "Dojo_pushed";
  y.wRa = "Map_active";
  y.xRa = "Map_normal";
  y.yRa = "Map_pushed";
  y.zRa = "Profile_active";
  y.ARa = "Profile_normal";
  y.BRa = "Profile_pushed";
  y.CRa = "Settings_active";
  y.DRa = "Settings_normal";
  y.ERa = "Shop_active";
  y.FRa = "Shop_normal";
  y.GRa = "Shop_pushed";
  y.HRa = "AddMoney";
  y.IRa = "AddMoney_Pressed";
  y.JRa = "Arrow";
  y.KRa = "board";
  y.foa = "bulb";
  y.goa = "checkbox0";
  y.LRa = "checkbox1";
  y.MRa = "ComboButtons/base_damage";
  y.hoa = "debug_btn";
  y.NRa = "difficulty_empty";
  y.ORa = "drop_blood";
  y.PRa = "energy";
  y.QRa = "Energy_Bar";
  y.RRa = "gold";
  y.SRa = "Highlight_menu";
  y.ioa = "hint_arrow";
  y.TRa = "img_video";
  y.URa = "inactive_bulb";
  y.VRa = "indicatorLocked";
  y.joa = "indicatorOff";
  y.WRa = "indicatorOn";
  y.XRa = "jackdaw_green";
  y.koa = "level";
  y.YRa = "Level_bar";
  y.loa = "level_bar_empty_short";
  y.ZRa = "level_bar_short";
  y.moa = "loading_circle";
  y.$Ra = "lock";
  y.aSa = "max";
  y.f7 = "notification_circle";
  y.bSa = "notification_ellipse";
  y.cSa = "red_bulb";
  y.dSa = "rewarded_ad_button";
  y.noa = "ruby";
  y.eSa = "slider";
  y.fSa = "star";
  y.g7 = "support_landscape";
  y.gSa = "support_landscape_pressed";
  y.ooa = "support_portrait";
  y.hSa = "support_portrait_pressed";
  y.iSa = "topPanel";
  y.jSa = "unlimited_energy";
  y.kSa = "wear";
  y.lSa = "buttons/Achiev";
  y.mSa = "buttons/Achiev_active";
  y.nSa = "buttons/Achiev_pushed";
  y.oSa = "buttons/Progress";
  y.pSa = "buttons/Progress_active";
  y.qSa = "buttons/Progress_pushed";
  y.rSa = "buttons/Seal";
  y.sSa = "buttons/Seal_active";
  y.tSa = "buttons/Seal_pushed";
  y.uSa = "buttons/Strikes";
  y.vSa = "buttons/Strikes_active";
  y.wSa = "buttons/Strikes_pushed";
  y.xSa = "pieces/achiev_progress_empty";
  y.ySa = "pieces/icons_kick_blocked";
  y.zSa = "pieces/icons_kick_glow";
  y.ASa = "pieces/icons_kick_off";
  y.BSa = "pieces/level1";
  y.poa = "pieces/perk_line_h";
  y.qoa = "pieces/perk_line_v";
  y.CSa = "pieces/perkback";
  y.DSa = "pieces/perkcircle";
  y.aV = "alpha-gradient_up";
  y.ESa = "bg";
  y.roa = "bg_edge";
  y.xM = "info_panel_h";
  y.soa = "info_panel_v";
  y.FSa = "paper";
  y.GSa = "paper_edge_left";
  y.HSa = "paper_edge_right";
  y.ISa = "roll_center";
  y.toa = "roll_end";
  y.uoa = "roll_shadow";
  y.JSa = "shadow";
  y.yM = "stripe_bottom";
  y.sB = "stripe_top";
  y.KSa = "credits";
  y.voa = "music";
  y.woa = "music_off";
  y.xoa = "sound";
  y.yoa = "sound_off";
  y.LSa = "buttons/Armor";
  y.MSa = "buttons/Armor_active";
  y.NSa = "buttons/Armor_pushed";
  y.OSa = "buttons/Free";
  y.PSa = "buttons/Free_active";
  y.QSa = "buttons/Free_pushed";
  y.RSa = "buttons/Helmet";
  y.SSa = "buttons/Helmet_active";
  y.TSa = "buttons/Helmet_pushed";
  y.USa = "buttons/Magic";
  y.VSa = "buttons/Magic_active";
  y.WSa = "buttons/Magic_pushed";
  y.XSa = "buttons/Payment";
  y.YSa = "buttons/Payment_active";
  y.ZSa = "buttons/Payment_pushed";
  y.$Sa = "buttons/Ranged_weapon";
  y.aTa = "buttons/Ranged_weapon_active";
  y.bTa = "buttons/Ranged_weapon_pushed";
  y.cTa = "buttons/Weapon";
  y.dTa = "buttons/Weapon_active";
  y.eTa = "buttons/Weapon_pushed";
  y.fTa = "parametersBar/bar_0";
  y.gTa = "parametersBar/bar_2";
  y.hTa = "parametersBar/bar_4";
  y.iTa = "parametersBar/bar_5";
  y.jTa = "pieces/BestValue_red";
  y.lTa = "pieces/Bonus_20";
  y.mTa = "pieces/Bonus_35";
  y.nTa = "pieces/Bonus_40";
  y.oTa = "pieces/Bonus_50";
  y.pTa = "pieces/Bonus_55";
  y.kTa = "pieces/Bonus_100";
  y.qTa = "pieces/FreeCoins_red";
  y.zoa = "pieces/FreeGems_red";
  y.rTa = "pieces/Left_flag";
  y.sTa = "pieces/Left_flag_properties";
  y.tTa = "pieces/Left_flag_properties_none";
  y.uTa = "pieces/MostPopular_red";
  y.vTa = "pieces/Right_flag";
  y.wTa = "pieces/Right_flag_properties";
  y.xTa = "pieces/Right_flag_properties_none";
  y.zM = "pieces/Stripe";
  y.yTa = "fill/0001";
  y.zTa = "Icons01/IconAvenger";
  y.ATa = "Trick1/high_kick";
  y.tB = "highlightButton";
  y.Aoa = "hint_base";
  y.BTa = "botCompleted";
  y.CTa = "left";
  y.DTa = "right";
  y.ETa = "vs";
  E.uJ = [];
  E.O2 = [];
  ia.Element = 0;
  ia.RTa = 1;
  ia.kQa = 2;
  ia.Comment = 3;
  ia.vQa = 4;
  ia.ProcessingInstruction = 5;
  ia.Document = 6;

  var Az = new Ua("^[-+]?(\\d+\\.?\\d*|\\.\\d+)([eE][-+]?\\d+)?$", "");
  vf.cLa = new bt();
  cg.VERSION = new ct("1.1.22");
  cg.KTa = "v1.1.22 2026-07-14 11:45:41 Generated by Haxe 4.3.7 polygonal";
  ti.J3a =
    "invalid zstd data;window size too large (>2046MB);invalid block type;FSE accuracy too high;match distance too far back;unexpected EOF".split(
      ";",
    );
  fb.zka = [];
  xi.nFa = "UI/Items/";
  xi.P2 = "Textures/buttons/map/";
  Uc.eA = !1;
  Uc.Kna = m.l();
  zi.yP = (function () {
    let a = new ac();
    a.v.dojo = 2626569;
    a.v.bamboo_groove = 989185;
    return a;
  })(this);
  jb.ui = new V();
  jb.um = new V();
  p.items = new jt();
  p.ZY = new fl();
  p.Hw = new ot();
  p.v_ = new zi();
  p.zT = 0;
  p.d0 = 1;
  p.nQa = "Coins";
  p.qQa = "Ruby";
  p.pQa = "RaidCurr";
  p.mQa = "Connection";
  p.oQa = "Materials";
  p.Pna = "TrustFailed";
  p.rra = !1;
  p.Dc = 0;
  p.xV = m.l();
  Bf.errorCode = -1;
  Bf.HUa = (function () {
    let a = new jd();
    a.v[1] = 87;
    a.v[3] = 68;
    a.v[5] = 83;
    a.v[7] = 65;
    a.v[9] = 75;
    a.v[10] = 76;
    a.v[11] = 79;
    a.v[12] = 80;
    a.v[13] = 74;
    a.v[14] = 81;
    return X.rAa(a);
  })(this);
  sc.UD = new Bf();
  yf.$ia = new kl();
  Jd.wua = !1;
  Jd.ne = m.l();
  Jd.hVa = m.l();
  I.Ux = "Skeleton";
  I.xg = "Weapon";
  I.Ci = "Armor";
  I.Di = "Helm";
  I.Xh = "Ranged";
  I.Ff = "Magic";
  I.yk = "RealMoneyItem";
  I.cUa = "Energy";
  I.p7 = "Decorate";
  I.aUa = "Cheat";
  I.$r = "Seal";
  I.Gu = "Free";
  I.Loa = "Profile";
  I.Tx = "Consumable";
  I.Jm = "RaidConsumable";
  I.vB = "RaidItemPack";
  I.bUa = "NoMagic";
  I.Ioa = "Gold";
  I.fG = "Bonus";
  I.n7 = "UnlimitedEnergy";
  I.XTa = "TapJoy";
  I.m7 = "PerkReset";
  I.l7 = "Currency";
  I.Joa = "Offer";
  I.Hoa = "DailyOffer";
  I.WTa = "RaidCurrency";
  I.BM = "RaidCharge";
  I.Koa = "RaidPotion";
  I.gQa = "MostPopular";
  I.fQa = "BestValue";
  I.GTa = "Video";
  I.Tfb = 230;
  Bi.uHa = "OfferTimer_";
  Bi.QYa = "Textures/buttons/map/";

  var Ld = {
    qAb: 1e4,
    Evb: !0,
    peb: !0,
    vAb: !1,
    Wbb: {
      FAb: { CAb: "", xAb: "" },
      rAb: "",
      wAb: {
        Rpb: "https://nekki.com/ru/legal/",
        pAb: "https://nekki.com/cn/legal/",
        a4a: "https://nekki.com/en/legal/",
      },
      JAb: { Rpb: "", a4a: "" },
      kmb: "https://nekki.com",
    },
    uAb: 1.5,
    dwb: !0,
    nAb: !0,
    hib: 1e3,
    cwb: !0,
    tAb: 55,
    GAb: "never",
    KAb: { AAb: 1900, switch: 2400, lYa: 2400, default: 3e3 },
    IAb: !1,
    oAb: 30,
    NAb: !1,
    sAb: 0.5,
    Yub: {
      zva: { x: 0.75, y: 0.3 },
      mAa: { x: 1, y: 0.75 },
      q_: { x: 10, y: 30 },
    },
    Wab: !1,
    Tzb: !1,
    Qfb: { d4a: !0 },
    yAb: { lYa: !0, default: !1 },
    ac: { oob: -1 },
    ZFa: {
      RL: { all: !1, wYa: !0, LAb: !1, EAb: !0 },
      all: !1,
      zAb: { style: !0, all: !0, Xb: !0 },
      Oa: { all: !0 },
      DAb: { all: !0, actions: !0 },
      Nk: { all: !0 },
      BAb: { all: !1 },
    },
    HAb: !0,
  };
  ca.ewb = !1;
  ca.pG = m.l();
  gb.eA = !1;
  Nc.SG = m.l();
  Nc.Yca = -1;
  ze.yua = 0;

  var Lz = 1.5,
    kz = 55,
    Mz = 0.5;
  wd.Acb = !1;
  Yc.K3a = [
    new Ca("mdl_magic_bomb", 500),
    new Ca("mdl_magic_asteroid", 65),
    new Ca("skeleton", 16),
    new Ca("", 21),
  ];
  de.AY = !1;
  P.yC = m.l();
  P.zp = 0;
  P.pOa = 3;
  P.J4a = !0;
  P.mP = !1;
  P.Mqa = m.l();
  P.Csa = m.l();
  P.Dsa = m.l();
  P.Aua = m.l();
  P.ssa = m.l();
  P.tsa = m.l();
  P.nsa = m.l();
  P.osa = m.l();
  P.qsa = m.l();
  P.psa = m.l();
  P.jpa = m.l();
  P.lpa = m.l();
  P.kpa = m.l();
  P.oUa = m.l();
  P.XVa = m.l();
  P.YVa = m.l();
  P.ipa = m.l();
  P.tG = m.l();
  P.Oqa = m.l();
  P.ita = m.l();
  P.lsa = m.l();
  P.Zra = m.l();
  P.OM = m.l();
  P.kta = m.l();
  P.Gpa = m.l();
  tb.Ubb = [];
  tb.fAa = [];
  tb.$bb = [];
  tb.Zbb = [];
  tb.xxb = [];
  tb.zab = [];
  sa.AC = new Map();
  sa.E8 = new Map();
  sa.Nk = m.l();
  sa.Fm = m.l();
  sa.Fsa = new gd();
  sa.Xl = m.l();
  jc.HY = m.l();
  Fa.MTa = "|";
  lh.wUa = 0;
  kg.eAa = new ac();
  Vc.BC = new H(0, 0, 0, 1);
  xc.D$ = m.l();

  var wy = "Body Head Fists NoRanged NoMagic NoRaidCharge".split(" ");
  Ee.o7 = "TimeDaysShort";
  Ee.YTa = "TimeHourShort";
  Ee.ZTa = "TimeMinuteShort";
  Ee.$Ta = "TimeSecondsShort";
  Y.cP = "^";
  Y.uQa = "{br}";
  Y.L3a = !1;
  Y.aN = new Fb();
  Y.wG = new Fb();
  Cc.A7 = "%%ERROR%%";
  Cc.dUa = " \n.?!,:;()[]{}<>*+#&'\"\\|/\u2018`~".split("");

  var jv = "en de it fr pt ru es tr ja ko".split(" ");
  xa.KYa = !1;
  tg.ywa = new Map();
  yb.Zlb = "_";
  yb.$lb = "_$";
  ba.X8 = new oc();
  ba.W8 = new yb();
  ih.count = 0;
  Z.NTa = "NHeel_1";
  Z.OTa = "NHeel_2";
  Z.RED = new H(0.60784313725, 0.10980392156, 0.02745098039, 1);
  Z.FTa = new H(0.26666666666, 0.47843137254, 0.00784313725, 1);
  Z.Vna = "quests.xml";
  Z.Tna = "gold";
  Z.Zr = "ruby";
  Z.a7 = "ForgeMaterial1";
  Z.b7 = "ForgeMaterial2";
  Z.c7 = "ForgeMaterial3";
  Z.zQa = [
    "difficulty_very_easy",
    "difficulty_easy",
    "difficulty_middle",
    "difficulty_hard",
    "difficulty_very_hard",
  ];
  Z.sc = new H(0.1843137254901961, 0.1450980392156863, 0.10588235294117647, 1);
  Z.h7 = new H(0.403921568627451, 0.24313725490196078, 0.1411764705882353, 1);
  Z.ITa = new H(
    0.6078431372549019,
    0.10980392156862745,
    0.027450980392156862,
    1,
  );
  Z.AQa = "ComboButtons/icon_down";
  Z.BQa = "ComboButtons/icon_kick";
  Z.eG = "ComboButtons/icon_left";
  Z.Una = "ComboButtons/icon_plus";
  Z.CQa = "ComboButtons/icon_punch";
  Z.DQa = "ComboButtons/icon_up";
  Z.Qna = new H(0.6392156862745098, 0.6392156862745098, 0.6392156862745098, 1);
  Z.eQa = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  Z.rQa = "_1 _2 _3 _4 _5 _6".split(" ");
  Z.VTa = 86400;
  Z.Coa = "NO_ITEM_NAME";
  v.Igb = new V();
  v.ho = new pw();
  v.XNa = new ip();
  v.JFa = new ip();
  v.Bv = m.l();
  v.nfb = new aw();
  v.mA = new Zv();
  v.D4 = new fw();
  v.Ub = new iw();
  v.uya = new Qv();
  v.Sg = new ew();
  v.MIa = new cw();
  v.mu = new mw();
  v.nF = new hw();
  v.mba = new Mv();
  v.JY = new Hv();
  v.KY = m.l();
  v.Tva = new Iv();
  v.IP = 0;
  v.jba = !1;
  v.KR = new Xv();
  v.IFa = 0;
  v.bLa = 0;
  v.xO = 1;
  v.Cia = new V();
  v.Xsa = 5;
  v.kqa = 0;
  v.jqa = "";
  v.lqa = 2e4;
  v.Ypa = 0;
  v.AGa = 100;
  v.ANa = 4;
  v.zNa = 2;
  v.tV = 0;
  v.npa = 0;
  v.mra = 0;
  v.bR = !1;
  v.Tq = new Tv();
  v.e0 = new Uv();
  v.frameRate = 60;
  v.zv = new Jv();
  v.xNa = new lw();
  v.zya = new Rv();
  v.OGa = new bw();
  v.bwa = new Nv();
  v.pY = new Lv();
  v.hNa = new jw();
  v.dya = 0;
  v.dF = 0;
  v.cl = 0;
  v.KDa = new Wv();
  v.OC = new Pv();
  v.bZ = new Eh();
  v.OZ = new Eh();
  v.Mja = new Eh();
  v.vha = new Eh();
  v.rT = 0;
  v.vDa = 0;
  v.Y1 = !1;
  v.BNa = 10;
  v.CNa = "";
  v.kua = !1;
  v.jua = !1;
  v.xu = new ow();
  v.Kya = "";
  v.Mya = 1;
  v.Vca = "";
  v.Nya = "";
  v.gB = 1;
  v.Qlb = 172800;
  v.Mha = 3e7;
  v.Eya = !1;
  v.Fya = 0;
  v.OEa = !1;
  v.ldb = !1;
  v.PF = !1;
  v.Vha = "";
  v.Ceb = new Yv();
  v.Gsa = m.l();
  v.Xca = "";
  v.z8 = m.l();
  v.t7 = m.l();
  Ch.pga = m.l();
  Pa.lia = new V();
  xd.Iya = 0;
  xd.uDa = 0;
  xd.qE = 0;
  xd.pAa = 0;
  ua.gE = !1;
  ua.fE = !1;
  db.xJ = !1;
  ge.qba = 0;
  ge.eya = new Map();
  ge.nHa = 0;
  Kj.uha = 0;
  Nb.challenge = new Cw();
  Nb.Im = new Ew();
  Nb.$Ka = new Dw();
  Ob.WJa = 0;
  Ob.YI = 0;
  Ob.PNa = 0;
  Ob.QNa = 0;
  zc.Eva = 3;
  zc.XE = new mp();
  zc.Jka = new mp();
  zc.KNa = 0;
  Be.mGa = (function () {
    let a = new ac();
    a.v.floor = 0;
    a.v.ceil = 1;
    a.v.trunc = 2;
    a.v.inf = 3;
    return X.rAa(a);
  })(this);
  bc.Kt = new Map();
  bc.glb = new Map();
  Lf.JTa = "MagicPlayer";
  Lf.Qeb = [
    "MagicPlayer",
    "MagicMissile",
    "MagicMissileStart",
    "MagicMissileFly",
  ];
  Lc.FQa = "base_";
  Lc.EQa = "active_";
  Lc.IQa = "pressed_";
  Lc.GQa = "locked_";
  Lc.HQa = "locked_active_";
  Gb.Lm = m.l();
  Gb.time = 0;
  Gb.Pn = 0;
  Gb.Ls = 0;
  ib.hQa =
    "Bosses BOSS_LYNX Stranger SENSEI_MEMORIES Duel Tournament Survival BOSS_HARDMODE BOSS_HERMIT Challenge BOSS_BUTCHER BOSS_WASP BOSS_HUNTRESS BOSS_SAMURAI QuestBattle FINAL_BATTLE BOSS_LYNX_INTERMISSION Tournament_INTERMISSION Duel_INTERMISSION Survival_INTERMISSION BOSS_HERMIT_INTERMISSION Challenge_INTERMISSION BOSS_BUTCHER_INTERMISSION BOSS_WASP_INTERMISSION BOSS_HUNTRESS_INTERMISSION BOSS_SAMURAI_INTERMISSION Stranger_INTERMISSION MINIBOSS_SHROUD MINIBOSS_CYPHER MINIBOSS_HYPERION CLIFFHANGER_STONE_FOREST MINIBOSS_ANCIENT Challenge1_1 Tournament2 MINIBOSS_SHROUD2 C3_Survival C3_Tournament C3_Challenge C3_BOSS_TITAN C3_FightWithMay C3_Duel".split(
      " ",
    );
  (function () {
    sf.Sx = Array(256);
    let a = 0;
    for (; a < 256; ) {
      let b = a++;
      sf.Sx[b] = Eb.HDa(b, 2);
    }
    return null;
  })(this);
  qc.FPa = !0;
  qc.flipY = !0;

  var Qz = 0,
    ny = new jd(),
    ni = null,
    $y = !1,
    my = "imageloader.665d5d2b.js";
  Xb.gD = Nf;
  $e.gD = pq;
  Hd.gD = Nf;
  Zb.gD = Td;
  af.Hfb = 1;

  var Vw = "#000000";
  new hb(0, 0, 100, 100);
  Ud.kda = !0;
  Ph.Uab = new Dc(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  Dd.b0 = [1, 2, 2, 3, 3, 3, 3, 4];
  Dd.c0 = [
    [0, 0, 0, 0],
    [0, 0, 1, 1],
    [0, 1, 0, 1],
    [0, 0, 1, 2],
    [1, 2, 0, 0],
    [0, 1, 0, 2],
    [1, 0, 2, 0],
    [0, 1, 2, 3],
  ];

  var Rz = [0, 2, 3, 1],
    Sz = [0, 2, 3, 4, 5, 6, 7, 1],
    Tz = [
      17, 18, 19, 20, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15, 16,
    ];
  ea.i1 = 1;
  ea.j1 = 1;
  wg.next = 0;
  xg.next = 0;
  Wa.R5 = [];
  Wa.xOa = new Float32Array(16);
  Sq.xwa = [1, 1, 2, 2, 4];
  Vh.uab = [5120, 5121, 5122, 5123, 5126];
  Id.aZ = [0, 1, 774, 775, 770, 771, 772, 773];
  Id.Z2a = [512, 513, 514, 515, 516, 517, 518, 519];

  var My = new rr();
  ma.Qq = new hb(0, 0, 0, 0);
  ma.fZ = new H(0, 0, 0, 1);
  ma.eZ = [R.Ed(-65536, 1, 1), R.Ed(-65536, 1, 1)];
  $d.$o = 0;
  Bb.STa = new H(0.78, 0.78, 0.78, 1);
  Qc.active = !1;
  Qc.list = [];

  var vr = new rr();
  Ib.YP = !1;
  Pd.Foa = (function () {
    let a = new ac();
    a.v.boss_huntress = 50;
    a.v.boss_shogun = 50;
    a.v.girl_kusarigama_2 = 100;
    a.v.girl_kusarigama = 100;
    a.v.girl_shuang_gou = 100;
    a.v.looter_girl_staff = 100;
    a.v.looter_man_glaive = 100;
    a.v.man_axes_3 = 100;
    a.v.man_big_swords = 50;
    a.v.man_chinese_sabre = 25;
    a.v.man_clutches = 25;
    a.v.man_crescent_knives = 125;
    a.v.man_crescent = 100;
    a.v.man_dadao_janissary = 50;
    a.v.man_deerhorn = 50;
    a.v.man_glaive_2 = 50;
    a.v.man_glaive_3 = 50;
    a.v.man_glaive = 100;
    a.v.man_hero_composite_sword = 100;
    a.v.man_hero_power_fists = 100;
    a.v.man_katar = 100;
    a.v.man_keris = 100;
    a.v.man_knives_2 = 100;
    a.v.man_machete = 100;
    a.v.man_ninja_naginata = 100;
    a.v.man_nunchaku_2 = 100;
    a.v.man_spear = 100;
    a.v.man_staff = 50;
    a.v.man_steel_claws = 100;
    a.v.man_swords_2 = 50;
    a.v.man_titans_army_4 = 100;
    a.v.man_tonfa_2 = 100;
    a.v.man_yari = 100;
    a.v.man_z7_tournament_swords = 100;
    a.v.ninja_girl_nunchaku = 100;
    a.v.ninja_girl_sickles = 100;
    a.v.ninja_man_butterfly_swords = 100;
    a.v.ninja_man_crescent_knives = 100;
    a.v.ninja_man_knives_2 = 100;
    a.v.ninja_man_knuckles = 100;
    a.v.ninja_man_labrys_axes = 100;
    a.v.ninja_man_machete = 100;
    a.v.ninja_man_ninja_sword = 100;
    a.v.ninja_man_nunchaku = 100;
    a.v.ninja_man_sai = 100;
    a.v.ninja_man_shuang_gou = 100;
    a.v.ninja_man_spear = 100;
    a.v.ninja_man_staff = 100;
    a.v.ninja_man_swords = 100;
    a.v.ninja_man_tonfa = 100;
    a.v.scavenger_3 = 100;
    return a;
  })(this);
  Pd.Goa = (function () {
    let a = new ac();
    a.v.boss_hermit = 50;
    a.v.boss_lynx_young = 50;
    a.v.boss_wasp = 50;
    a.v.girl_kusarigama_1 = 100;
    a.v.looter_girl_scythe = 50;
    a.v.looter_girl_staff = 50;
    a.v.man_cool_staff = 50;
    a.v.man_crescent = 50;
    a.v.man_glaive_2 = 50;
    a.v.man_glaive_3 = 100;
    a.v.man_glaive = 50;
    a.v.man_heavy_hammer = 50;
    a.v.man_heavy_staff = 50;
    a.v.man_magari_yari = 50;
    a.v.man_spear = 100;
    a.v.man_staff = 50;
    a.v.man_titans_army_4 = 50;
    a.v.man_trident_1 = 100;
    a.v.man_trident = 50;
    a.v.man_two_handed_mace = 50;
    a.v.man_yari = 50;
    a.v.man_z7_tournament_knobsticks = 100;
    a.v.man_z7_tournament_staff = 50;
    a.v.man_z7_tournament_swords = 50;
    a.v.ninja_girl_katar = 50;
    a.v.ninja_girl_stilettos = 50;
    a.v.ninja_man_dadao = 50;
    a.v.ninja_man_kusarigama = 50;
    a.v.ninja_man_ninja_sword = 50;
    return a;
  })(this);
  ad.eE = !1;
  ad.hHa = 11;
  pc.wB = 400;
  pc.uM = 40;
  Sd.o8 = m.l();
  Me.G2 = [];
  Ya.zw = !1;
  qe.AM = 1.5003663003663004;
  Wc.kD = m.l();
  vb.jg = !1;
  vb.YS = 0.65;
  Ed.kba = !0;
  Oe.w2 = new Map();
  Ma.jg = !1;
  Ma.YS = 0.62;
  rg.N$ = m.l();
  Ng.lQa = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  Ng.iQa = mb.q3(Ng.lQa);
  jf.dR = new DataView(new ArrayBuffer(8));
  Vg.lQ = (function () {
    let a = new ac();
    a.v.lt = "<";
    a.v.gt = ">";
    a.v.amp = "&";
    a.v.quot = '"';
    a.v.apos = "'";
    return a;
  })(this);
  pi.up = !1;
  pa.sd = Infinity;
  pa.Ld = -Infinity;
  Hb.BK = new V();
  Hb.Qh = new V();
  ug.kz = new Dh(1, 0, 13, 0);
  ug.version = new Dh(1, 0, 13, 0);
  aa.tc = new Map();
  aa.dsa = new Map();
  aa.esa = new Map();
  aa.xra = !1;
  aa.i7 = new Set();
  aa.k7 = "+-*^(){}|/&#%=! ";
  aa.vM = aa.k7 + "?.$,:;";
  Jf.xma = 0;
  G.fsa = 1362;
  G.RM = "res";
  G.xq =
    "xml2.dat xml.dat vs/sprites.{image} vs/sprites.json vs/bg.jpg video/shadow_gate.mp4 video/shadow_fight_ending.mp4 video/play.png video/mute.png video/intro.mp4 users_default.xml users/proxy.{image} users/proxy.json users/notifications.{image} users/notifications.json users/images/woman_z7_tournament_scythes.{image} users/images/starter_pack_zone6.{image} users/images/starter_pack_zone5.{image} users/images/starter_pack_zone4.{image} users/images/starter_pack_zone3.{image} users/images/starter_pack2.{image} users/images/scavenger_4.{image} users/images/scavenger_3.{image} users/images/scavenger_2.{image} users/images/scavenger_1.{image} users/images/premium_pack_zone1.{image} users/images/pile_coins_platinum.{image} users/images/ninja_man_yari.{image} users/images/ninja_man_two_handed_mace.{image} users/images/ninja_man_tonfa.{image} users/images/ninja_man_swords.{image} users/images/ninja_man_staff.{image} users/images/ninja_man_spear.{image} users/images/ninja_man_shuang_gou.{image} users/images/ninja_man_sai.{image} users/images/ninja_man_nunchaku.{image} users/images/ninja_man_ninja_sword.{image} users/images/ninja_man_magari_yari.{image} users/images/ninja_man_machete.{image} users/images/ninja_man_maces.{image} users/images/ninja_man_labrys_axes.{image} users/images/ninja_man_kusarigama.{image} users/images/ninja_man_kungfu.{image} users/images/ninja_man_kunai.{image} users/images/ninja_man_knuckles.{image} users/images/ninja_man_knives_2.{image} users/images/ninja_man_knives.{image} users/images/ninja_man_keris.{image} users/images/ninja_man_heavy_staff.{image} users/images/ninja_man_hammers.{image} users/images/ninja_man_glaive.{image} users/images/ninja_man_dadao.{image} users/images/ninja_man_crescent_knives.{image} users/images/ninja_man_claws.{image} users/images/ninja_man_chinese_sabers.{image} users/images/ninja_man_butterfly_swords.{image} users/images/ninja_man_big_mace.{image} users/images/ninja_man_big_hammer.{image} users/images/ninja_man_batons.{image} users/images/ninja_man_axes.{image} users/images/ninja_girl_swords.{image} users/images/ninja_girl_stilettos.{image} users/images/ninja_girl_sickles.{image} users/images/ninja_girl_sharp_tonfa.{image} users/images/ninja_girl_sai.{image} users/images/ninja_girl_nunchaku.{image} users/images/ninja_girl_moon_sabers.{image} users/images/ninja_girl_katar.{image} users/images/ninja_girl_golden_katana.{image} users/images/man_z7_tournament_swords.{image} users/images/man_z7_tournament_sword.{image} users/images/man_z7_tournament_staff.{image} users/images/man_z7_tournament_scythes.{image} users/images/man_z7_tournament_knobsticks.{image} users/images/man_z7_tournament_firebatons.{image} users/images/man_z7_tournament_daggers.{image} users/images/man_yari.{image} users/images/man_wakidzashi_2.{image} users/images/man_wakidzashi.{image} users/images/man_two_handed_mace.{image} users/images/man_trident_1.{image} users/images/man_trident.{image} users/images/man_tonfa_4.{image} users/images/man_tonfa_3.{image} users/images/man_tonfa_2.{image} users/images/man_tonfa.{image} users/images/man_titans_army_4.{image} users/images/man_titans_army_3.{image} users/images/man_titans_army_2.{image} users/images/man_titans_army_1.{image} users/images/man_tatoo.{image} users/images/man_swords_2.{image} users/images/man_swords.{image} users/images/man_stilettos.{image} users/images/man_steel_claws.{image} users/images/man_staff_3.{image} users/images/man_staff.{image} users/images/man_spear.{image} users/images/man_sickle.{image} users/images/man_scythe.{image} users/images/man_sai_2.{image} users/images/man_nunchaku_2.{image} users/images/man_nunchaku.{image} users/images/man_ninja_naginata.{image} users/images/man_night.{image} users/images/man_naginata.{image} users/images/man_moon_sabers.{image} users/images/man_magari_yari.{image} users/images/man_machete.{image} users/images/man_maces.{image} users/images/man_long_katana.{image} users/images/man_labrys_axes.{image} users/images/man_kungfu.{image} users/images/man_kunai.{image} users/images/man_knives_2.{image} users/images/man_knives.{image} users/images/man_keris.{image} users/images/man_katar.{image} users/images/man_invisible.{image} users/images/man_hero_power_fists.{image} users/images/man_hero_composite_sword.{image} users/images/man_hero_composite_spear.{image} users/images/man_heronkungfu.{image} users/images/man_heavy_staff.{image} users/images/man_heavy_kusarigama.{image} users/images/man_heavy_hammer.{image} users/images/man_glaive_3.{image} users/images/man_glaive_2.{image} users/images/man_glaive.{image} users/images/man_fists.{image} users/images/man_fist.{image} users/images/man_deerhorn.{image} users/images/man_daggers.{image} users/images/man_dadao_janissary.{image} users/images/man_dadao.{image} users/images/man_crescent_knives.{image} users/images/man_crescent.{image} users/images/man_cool_staff.{image} users/images/man_clutches.{image} users/images/man_claws.{image} users/images/man_chinese_sabre_2.{image} users/images/man_chinese_sabre.{image} users/images/man_big_swords.{image} users/images/man_big_sword.{image} users/images/man_big_mace_2.{image} users/images/man_big_hammer.{image} users/images/man_batons_4.{image} users/images/man_batons_3.{image} users/images/man_batons_2.{image} users/images/man_batons.{image} users/images/man_axes_3.{image} users/images/man_axe.{image} users/images/looter_man_staff.{image} users/images/looter_man_section_scythe.{image} users/images/looter_man_knives.{image} users/images/looter_man_glaive.{image} users/images/looter_girl_staff.{image} users/images/looter_girl_scythe.{image} users/images/img_unlimited_energy.{image} users/images/img_starter_pack_dark_chest.{image} users/images/img_drop_titan_sphere.{image} users/images/img_drop_red_seal.{image} users/images/img_drop_purple_seal.{image} users/images/img_drop_orange_seal.{image} users/images/img_drop_jade_seal.{image} users/images/img_drop_im_knuckles.{image} users/images/img_drop_green_seal.{image} users/images/img_drop_blue_seal.{image} users/images/girl_z7_tournament_glaive.{image} users/images/girl_swords_2.{image} users/images/girl_spear.{image} users/images/girl_shuang_gou.{image} users/images/girl_sai_2.{image} users/images/girl_sai.{image} users/images/girl_nunchaku.{image} users/images/girl_magari_yari.{image} users/images/girl_kusarigama_2.{image} users/images/girl_kusarigama_1.{image} users/images/girl_kusarigama.{image} users/images/girl_knives_2.{image} users/images/girl_knives.{image} users/images/girl_keris.{image} users/images/girl_katana.{image} users/images/girl_im_knuckles.{image} users/images/girl_hero_shocker_claws.{image} users/images/girl_hammers.{image} users/images/girl_golden_katana.{image} users/images/girl_dirk.{image} users/images/girl_butterfly_swords.{image} users/images/character_thief_small.{image} users/images/character_thief_3.{image} users/images/character_thief_2.{image} users/images/character_thief.{image} users/images/character_sister.{image} users/images/character_shroud.{image} users/images/character_sensei_young.{image} users/images/character_sensei_small.{image} users/images/character_sensei.{image} users/images/character_savage.{image} users/images/character_sadist.{image} users/images/character_ronin.{image} users/images/character_prince_evil.{image} users/images/character_prince.{image} users/images/character_pirate.{image} users/images/character_philosopher.{image} users/images/character_may_sad.{image} users/images/character_may_6.{image} users/images/character_may_5.{image} users/images/character_may_4.{image} users/images/character_may_3.{image} users/images/character_may_2.{image} users/images/character_may_1_small.{image} users/images/character_may_1.{image} users/images/character_master.{image} users/images/character_kali_small.{image} users/images/character_kali.{image} users/images/character_justice_2.{image} users/images/character_justice.{image} users/images/character_indean.{image} users/images/character_hyperion.{image} users/images/character_guru.{image} users/images/character_fanatic.{image} users/images/character_emperor.{image} users/images/character_disciple.{image} users/images/character_cypher.{image} users/images/character_corsair.{image} users/images/character_blind.{image} users/images/character_assasin.{image} users/images/character_asian.{image} users/images/character_ancient.{image} users/images/boss_widow_young.{image} users/images/boss_wasp_young.{image} users/images/boss_wasp.{image} users/images/boss_titan.{image} users/images/boss_shogun_young.{image} users/images/boss_shogun.{image} users/images/boss_lynx_young.{image} users/images/boss_lynx.{image} users/images/boss_huntress.{image} users/images/boss_hermit_young.{image} users/images/boss_hermit.{image} users/images/boss_butcher_young.{image} users/images/boss_butcher.{image} users/images/avatar_masked.{image} users/images/avatar_human.{image} users/images/avatar_hero.{image} ui/sliced.{image} ui/sliced.json ui/skills.{image} ui/skills.json ui/shop.{image} ui/shop.json ui/settings_icons.{image} ui/settings_icons.json ui/settings_font.png ui/settings_font.dat ui/scroll.{image} ui/scroll.json ui/sale.{image} ui/sale.json ui/profile.{image} ui/profile.json ui/misc.{image} ui/misc.json ui/menu.{image} ui/menu.json ui/font{lang}.png ui/font{lang}.fnt ui/enchantments.{image} ui/enchantments.json ui/controller.{image} ui/controller.json ui/achievements.{image} ui/achievements.json tactic_settings.xml stages.xml splash/scroll.{image} splash/logo.png splash/loading{lang}.png splash/loading{lang}.fnt splash/cast.{image} splash/bg.jpg quest_extensions/zone_7/story.xml quest_extensions/zone_6/story.xml quest_extensions/zone_5/story.xml quest_extensions/zone_4/story.xml quest_extensions/zone_3/story.xml quest_extensions/zone_2/story.xml quest_extensions/zone_2/core.xml quest_extensions/zone_1/story.xml quest_extensions/zone_1/core.xml quest_extensions/utils.xml quest_extensions/update_quests_start.xml quest_extensions/update_quests.xml quest_extensions/tutorial_quests.xml quest_extensions/test_quests.xml quest_extensions/starter_packs.xml quest_extensions/sensei_arc.xml quest_extensions/promotions_from_first_session.xml quest_extensions/premium_packs.xml quest_extensions/packs.xml quest_extensions/offers.xml quest_extensions/login_notify.xml quest_extensions/item_restore_quests.xml quest_extensions/intermission/story.xml quest_extensions/hardmode.xml quest_extensions/gdpr.xml quest_extensions/facebook.xml quest_extensions/energy.xml quest_extensions/battles.xml quest_extensions/advertising.xml quests.xml perks.xml packs.xml nekki_famobi.png moves.xml models_dojo.dat models.dat map/preview_pvp.{image} map/preview_pvp.json map/preview_main_i.{image} map/preview_main_i.json map/preview_main.{image} map/preview_main.json map/preview_bosses.{image} map/preview_bosses.json map/part6.{image} map/part6.json map/part5.{image} map/part5.json map/part4.{image} map/part4.json map/part3.{image} map/part3.json map/part2.{image} map/part2.json map/part1.{image} map/part1.json map/part0.{image} map/part0.json map/offers.{image} map/offers.json map/images/waterfall.{image} map/images/wasp.{image} map/images/volcano.{image} map/images/village.{image} map/images/titan.{image} map/images/swamp.{image} map/images/stone_forest.{image} map/images/stone_dragon.{image} map/images/statue.{image} map/images/spaceship.{image} map/images/snowy_peak.{image} map/images/skyport.{image} map/images/ships.{image} map/images/shadow_gate.{image} map/images/samurai.{image} map/images/sakura.{image} map/images/ruins_village.{image} map/images/road.{image} map/images/random_location.{image} map/images/pink_lake.{image} map/images/night_bridge.{image} map/images/neural_network.{image} map/images/mountain.{image} map/images/moon.{image} map/images/magic_rocks.{image} map/images/lynx.{image} map/images/lamps_on_water.{image} map/images/ice_cave.{image} map/images/huntress.{image} map/images/hermit.{image} map/images/heaven.{image} map/images/graveyard_ships.{image} map/images/flying_rocks.{image} map/images/flowers_field.{image} map/images/flooded_village.{image} map/images/factory.{image} map/images/emerald_forest.{image} map/images/eggs.{image} map/images/dark_room.{image} map/images/chess_yard.{image} map/images/cave.{image} map/images/castle_and_bridge.{image} map/images/capsules.{image} map/images/butcher.{image} map/images/burning_town.{image} map/images/bridge.{image} map/images/battlefield.{image} map/images/bamboo_grove.{image} map/images/autumn.{image} map/images/arena.{image} map/buttons.{image} map/buttons.json magic_ktx.dat magic_dds.dat magic/mgc_widow_teleportation_start.{image} magic/mgc_widow_teleportation_start.json magic/mgc_widow_teleportation_end.{image} magic/mgc_widow_teleportation_end.json magic/mgc_wasp_speed_split_wings_start_2.{image} magic/mgc_wasp_speed_split_wings_start_2.json magic/mgc_wasp_speed_split_wings_start.{image} magic/mgc_wasp_speed_split_wings_start.json magic/mgc_wasp_speed_split_wings_end.{image} magic/mgc_wasp_speed_split_wings_end.json magic/mgc_tonfa_guns_start.{image} magic/mgc_tonfa_guns_start.json magic/mgc_tonfa_guns_middle.{image} magic/mgc_tonfa_guns_middle.json magic/mgc_tonfa_guns_end.{image} magic/mgc_tonfa_guns_end.json magic/mgc_magic_wave_start.{image} magic/mgc_magic_wave_start.json magic/mgc_magic_wave_middle.{image} magic/mgc_magic_wave_middle.json magic/mgc_magic_wave_end.{image} magic/mgc_magic_wave_end.json magic/mgc_magic_water_ball_start.{image} magic/mgc_magic_water_ball_start.json magic/mgc_magic_water_ball_middle.{image} magic/mgc_magic_water_ball_middle.json magic/mgc_magic_water_ball_end.{image} magic/mgc_magic_water_ball_end.json magic/mgc_magic_tiger_ball_start.{image} magic/mgc_magic_tiger_ball_start.json magic/mgc_magic_tiger_ball_middle.{image} magic/mgc_magic_tiger_ball_middle.json magic/mgc_magic_tiger_ball_end.{image} magic/mgc_magic_tiger_ball_end.json magic/mgc_magic_spirit_pillar_start.{image} magic/mgc_magic_spirit_pillar_start.json magic/mgc_magic_spirit_pillar_end.{image} magic/mgc_magic_spirit_pillar_end.json magic/mgc_magic_small_sphere_start.{image} magic/mgc_magic_small_sphere_start.json magic/mgc_magic_small_sphere_middle.{image} magic/mgc_magic_small_sphere_middle.json magic/mgc_magic_small_sphere_end.{image} magic/mgc_magic_small_sphere_end.json magic/mgc_magic_mind_throw_start.{image} magic/mgc_magic_mind_throw_start.json magic/mgc_magic_mind_throw_middle.{image} magic/mgc_magic_mind_throw_middle.json magic/mgc_magic_mind_throw_end.{image} magic/mgc_magic_mind_throw_end.json magic/mgc_magic_mass_bomb_start.{image} magic/mgc_magic_mass_bomb_start.json magic/mgc_magic_mass_bomb_middle.{image} magic/mgc_magic_mass_bomb_middle.json magic/mgc_magic_mass_bomb_end.{image} magic/mgc_magic_mass_bomb_end.json magic/mgc_magic_lightning_arrow_start.{image} magic/mgc_magic_lightning_arrow_start.json magic/mgc_magic_lightning_arrow_middle.{image} magic/mgc_magic_lightning_arrow_middle.json magic/mgc_magic_lightning_arrow_end.{image} magic/mgc_magic_lightning_arrow_end.json magic/mgc_magic_invisible_start.{image} magic/mgc_magic_invisible_start.json magic/mgc_magic_invisible_end.{image} magic/mgc_magic_invisible_end.json magic/mgc_magic_ice_pins_start.{image} magic/mgc_magic_ice_pins_start.json magic/mgc_magic_ice_pins_middle_2.{image} magic/mgc_magic_ice_pins_middle_2.json magic/mgc_magic_ice_pins_middle_1.{image} magic/mgc_magic_ice_pins_middle_1.json magic/mgc_magic_ice_pins_end.{image} magic/mgc_magic_ice_pins_end.json magic/mgc_magic_ice_ball_start.{image} magic/mgc_magic_ice_ball_start.json magic/mgc_magic_ice_ball_middle.{image} magic/mgc_magic_ice_ball_middle.json magic/mgc_magic_ice_ball_end.{image} magic/mgc_magic_ice_ball_end.json magic/mgc_magic_fire_splash_start.{image} magic/mgc_magic_fire_splash_start.json magic/mgc_magic_fire_splash_middle.{image} magic/mgc_magic_fire_splash_middle.json magic/mgc_magic_fire_splash_end.{image} magic/mgc_magic_fire_splash_end.json magic/mgc_magic_fire_pillar_start.{image} magic/mgc_magic_fire_pillar_start.json magic/mgc_magic_fire_pillar_end.{image} magic/mgc_magic_fire_pillar_end.json magic/mgc_magic_fireball_start.{image} magic/mgc_magic_fireball_start.json magic/mgc_magic_fireball_middle.{image} magic/mgc_magic_fireball_middle.json magic/mgc_magic_fireball_end.{image} magic/mgc_magic_fireball_end.json magic/mgc_magic_energy_ball_start.{image} magic/mgc_magic_energy_ball_start.json magic/mgc_magic_energy_ball_middle.{image} magic/mgc_magic_energy_ball_middle.json magic/mgc_magic_energy_ball2_end.{image} magic/mgc_magic_energy_ball2_end.json magic/mgc_magic_energy_ball1_end.{image} magic/mgc_magic_energy_ball1_end.json magic/mgc_magic_earth_quake_end.{image} magic/mgc_magic_earth_quake_end.json magic/mgc_magic_death_ray.{image} magic/mgc_magic_death_ray.json magic/mgc_magic_bomb_start.{image} magic/mgc_magic_bomb_start.json magic/mgc_magic_bomb_middle.{image} magic/mgc_magic_bomb_middle.json magic/mgc_magic_bomb_end.{image} magic/mgc_magic_bomb_end.json magic/mgc_magic_asteroid_middle.{image} magic/mgc_magic_asteroid_middle.json magic/mgc_magic_asteroid_end_2.{image} magic/mgc_magic_asteroid_end_2.json magic/mgc_magic_asteroid_end_1.{image} magic/mgc_magic_asteroid_end_1.json magic/mgc_magic_acid_cloud.{image} magic/mgc_magic_acid_cloud.json magic/mgc_effect_time_bomb.{image} magic/mgc_effect_time_bomb.json magic/mgc_effect_shocker.{image} magic/mgc_effect_shocker.json magic/mgc_effect_shield_hex.{image} magic/mgc_effect_shield_hex.json magic/mgc_effect_round_knife_big.{image} magic/mgc_effect_round_knife_big.json magic/mgc_effect_round_knife.{image} magic/mgc_effect_round_knife.json magic/mgc_effect_mine_player.{image} magic/mgc_effect_mine_player.json magic/mgc_effect_mine.{image} magic/mgc_effect_mine.json magic/mgc_effect_lightning_end.{image} magic/mgc_effect_lightning_end.json magic/mgc_effect_levitation_middle.{image} magic/mgc_effect_levitation_middle.json magic/mgc_effect_hammer.{image} magic/mgc_effect_hammer.json magic/mgc_effect_fire_tonfa_shoot_1.{image} magic/mgc_effect_fire_tonfa_shoot_1.json magic/mgc_effect_fire_tonfa_flamethrower.{image} magic/mgc_effect_fire_tonfa_flamethrower.json magic/mgc_effect_fire_tonfa_blow_2.{image} magic/mgc_effect_fire_tonfa_blow_2.json magic/mgc_effect_fire_tonfa_blow_1.{image} magic/mgc_effect_fire_tonfa_blow_1.json magic/mgc_effect_fire_aura.{image} magic/mgc_effect_fire_aura.json magic/mgc_effect_fall.{image} magic/mgc_effect_fall.json magic/mgc_effect_energy_pillar_start.{image} magic/mgc_effect_energy_pillar_start.json magic/mgc_effect_energy_pillar_end.{image} magic/mgc_effect_energy_pillar_end.json locations/waterfall/waterfall_params.xml locations/waterfall/waterfall.{image} locations/waterfall/waterfall.json locations/waterfall/waterfall-2.{image} locations/waterfall/waterfall-2.json locations/volcano/volcano_params.xml locations/volcano/volcano.{image} locations/volcano/volcano.json locations/volcano/volcano-2.{image} locations/volcano/volcano-2.json locations/village/village_params.xml locations/village/village.{image} locations/village/village.json locations/village/village-2.{image} locations/village/village-2.json locations/swamp/swamp_params.xml locations/swamp/swamp.{image} locations/swamp/swamp.json locations/swamp/swamp-3.{image} locations/swamp/swamp-3.json locations/swamp/swamp-2.{image} locations/swamp/swamp-2.json locations/stone_forest_thorny/stone_forest_thorny_params.xml locations/stone_forest_thorny/stone_forest_thorny.{image} locations/stone_forest_thorny/stone_forest_thorny.json locations/stone_forest_thorny/stone_forest_thorny-2.{image} locations/stone_forest_thorny/stone_forest_thorny-2.json locations/stone_forest/stone_forest_params.xml locations/stone_forest/stone_forest.{image} locations/stone_forest/stone_forest.json locations/stone_forest/stone_forest-2.{image} locations/stone_forest/stone_forest-2.json locations/stone_dragon/stone_dragon_params.xml locations/stone_dragon/stone_dragon.{image} locations/stone_dragon/stone_dragon.json locations/stone_dragon/stone_dragon-2.{image} locations/stone_dragon/stone_dragon-2.json locations/statue/statue_params.xml locations/statue/statue.{image} locations/statue/statue.json locations/statue/statue-2.{image} locations/statue/statue-2.json locations/spaceship_thorny/spaceship_thorny_params.xml locations/spaceship_thorny/spaceship_thorny.{image} locations/spaceship_thorny/spaceship_thorny.json locations/spaceship_thorny/spaceship_thorny-2.{image} locations/spaceship_thorny/spaceship_thorny-2.json locations/spaceship/spaceship_params.xml locations/spaceship/spaceship.{image} locations/spaceship/spaceship.json locations/spaceship/spaceship-2.{image} locations/spaceship/spaceship-2.json locations/snowy_peak/snowy_peak_params.xml locations/snowy_peak/snowy_peak.{image} locations/snowy_peak/snowy_peak.json locations/snowy_peak/snowy_peak-2.{image} locations/snowy_peak/snowy_peak-2.json locations/skyport/skyport_params.xml locations/skyport/skyport.{image} locations/skyport/skyport.json locations/skyport/skyport-2.{image} locations/skyport/skyport-2.json locations/ships/ships_params.xml locations/ships/ships.{image} locations/ships/ships.json locations/ships/ships-2.{image} locations/ships/ships-2.json locations/shadow_gate/shadow_gate_params.xml locations/shadow_gate/shadow_gate.{image} locations/shadow_gate/shadow_gate.json locations/shadow_gate/shadow_gate-3.{image} locations/shadow_gate/shadow_gate-3.json locations/shadow_gate/shadow_gate-2.{image} locations/shadow_gate/shadow_gate-2.json locations/sakura/sakura_params.xml locations/sakura/sakura.{image} locations/sakura/sakura.json locations/sakura/sakura-4.{image} locations/sakura/sakura-4.json locations/sakura/sakura-3.{image} locations/sakura/sakura-3.json locations/sakura/sakura-2.{image} locations/sakura/sakura-2.json locations/ruins_village_small/ruins_village_small_params.xml locations/ruins_village_small/ruins_village_small.{image} locations/ruins_village_small/ruins_village_small.json locations/ruins_village/ruins_village_params.xml locations/ruins_village/ruins_village.{image} locations/ruins_village/ruins_village.json locations/ruins_village/ruins_village-4.{image} locations/ruins_village/ruins_village-4.json locations/ruins_village/ruins_village-3.{image} locations/ruins_village/ruins_village-3.json locations/ruins_village/ruins_village-2.{image} locations/ruins_village/ruins_village-2.json locations/pink_lake/pink_lake_params.xml locations/pink_lake/pink_lake.{image} locations/pink_lake/pink_lake.json locations/pink_lake/pink_lake-4.{image} locations/pink_lake/pink_lake-4.json locations/pink_lake/pink_lake-3.{image} locations/pink_lake/pink_lake-3.json locations/pink_lake/pink_lake-2.{image} locations/pink_lake/pink_lake-2.json locations/night_bridge/night_bridge_params.xml locations/night_bridge/night_bridge.{image} locations/night_bridge/night_bridge.json locations/night_bridge/night_bridge-2.{image} locations/night_bridge/night_bridge-2.json locations/neural_network/neural_network_params.xml locations/neural_network/neural_network.{image} locations/neural_network/neural_network.json locations/neural_network/neural_network-2.{image} locations/neural_network/neural_network-2.json locations/mountain/mountain_params.xml locations/mountain/mountain.{image} locations/mountain/mountain.json locations/mountain/mountain-4.{image} locations/mountain/mountain-4.json locations/mountain/mountain-3.{image} locations/mountain/mountain-3.json locations/mountain/mountain-2.{image} locations/mountain/mountain-2.json locations/moon/moon_params.xml locations/moon/moon.{image} locations/moon/moon.json locations/moon/moon-2.{image} locations/moon/moon-2.json locations/magic_rocks/magic_rocks_params.xml locations/magic_rocks/magic_rocks.{image} locations/magic_rocks/magic_rocks.json locations/magic_rocks/magic_rocks-2.{image} locations/magic_rocks/magic_rocks-2.json locations/lamps_on_water/lamps_on_water_params.xml locations/lamps_on_water/lamps_on_water.{image} locations/lamps_on_water/lamps_on_water.json locations/lamps_on_water/lamps_on_water-4.{image} locations/lamps_on_water/lamps_on_water-4.json locations/lamps_on_water/lamps_on_water-3.{image} locations/lamps_on_water/lamps_on_water-3.json locations/lamps_on_water/lamps_on_water-2.{image} locations/lamps_on_water/lamps_on_water-2.json locations/ice_cave/ice_cave_params.xml locations/ice_cave/ice_cave.{image} locations/ice_cave/ice_cave.json locations/ice_cave/ice_cave-2.{image} locations/ice_cave/ice_cave-2.json locations/heaven/heaven_params.xml locations/heaven/heaven.{image} locations/heaven/heaven.json locations/heaven/heaven-2.{image} locations/heaven/heaven-2.json locations/graveyard_ships/graveyard_ships_params.xml locations/graveyard_ships/graveyard_ships.{image} locations/graveyard_ships/graveyard_ships.json locations/graveyard_ships/graveyard_ships-2.{image} locations/graveyard_ships/graveyard_ships-2.json locations/fuji/fuji_params.xml locations/fuji/fuji.{image} locations/fuji/fuji.json locations/fuji/fuji-2.{image} locations/fuji/fuji-2.json locations/flying_rocks_small/flying_rocks_small_params.xml locations/flying_rocks_small/flying_rocks_small.{image} locations/flying_rocks_small/flying_rocks_small.json locations/flying_rocks_small/flying_rocks_small-2.{image} locations/flying_rocks_small/flying_rocks_small-2.json locations/flying_rocks/flying_rocks_params.xml locations/flying_rocks/flying_rocks.{image} locations/flying_rocks/flying_rocks.json locations/flying_rocks/flying_rocks-2.{image} locations/flying_rocks/flying_rocks-2.json locations/flowers_field/flowers_field_params.xml locations/flowers_field/flowers_field.{image} locations/flowers_field/flowers_field.json locations/flowers_field/flowers_field-3.{image} locations/flowers_field/flowers_field-3.json locations/flowers_field/flowers_field-2.{image} locations/flowers_field/flowers_field-2.json locations/flooded_village/flooded_village_params.xml locations/flooded_village/flooded_village.{image} locations/flooded_village/flooded_village.json locations/flooded_village/flooded_village-2.{image} locations/flooded_village/flooded_village-2.json locations/factory/factory_params.xml locations/factory/factory.{image} locations/factory/factory.json locations/factory/factory-2.{image} locations/factory/factory-2.json locations/emerald_forest/emerald_forest_params.xml locations/emerald_forest/emerald_forest.{image} locations/emerald_forest/emerald_forest.json locations/emerald_forest/emerald_forest-4.{image} locations/emerald_forest/emerald_forest-4.json locations/emerald_forest/emerald_forest-3.{image} locations/emerald_forest/emerald_forest-3.json locations/emerald_forest/emerald_forest-2.{image} locations/emerald_forest/emerald_forest-2.json locations/eggs/eggs_params.xml locations/eggs/eggs.{image} locations/eggs/eggs.json locations/eggs/eggs-2.{image} locations/eggs/eggs-2.json locations/dojo_shop/bg.{image} locations/dojo/dojo_params.xml locations/dojo/dojo.{image} locations/dojo/dojo.json locations/dark_room/dark_room_params.xml locations/dark_room/dark_room.{image} locations/dark_room/dark_room.json locations/dark_room/dark_room-2.{image} locations/dark_room/dark_room-2.json locations/chess_yard/chess_yard_params.xml locations/chess_yard/chess_yard.{image} locations/chess_yard/chess_yard.json locations/chess_yard/chess_yard-5.{image} locations/chess_yard/chess_yard-5.json locations/chess_yard/chess_yard-4.{image} locations/chess_yard/chess_yard-4.json locations/chess_yard/chess_yard-3.{image} locations/chess_yard/chess_yard-3.json locations/chess_yard/chess_yard-2.{image} locations/chess_yard/chess_yard-2.json locations/cave/cave_params.xml locations/cave/cave.{image} locations/cave/cave.json locations/cave/cave-2.{image} locations/cave/cave-2.json locations/castle_and_bridge/castle_and_bridge_params.xml locations/castle_and_bridge/castle_and_bridge.{image} locations/castle_and_bridge/castle_and_bridge.json locations/castle_and_bridge/castle_and_bridge-3.{image} locations/castle_and_bridge/castle_and_bridge-3.json locations/castle_and_bridge/castle_and_bridge-2.{image} locations/castle_and_bridge/castle_and_bridge-2.json locations/capsules/capsules_params.xml locations/capsules/capsules.{image} locations/capsules/capsules.json locations/capsules/capsules-2.{image} locations/capsules/capsules-2.json locations/burning_town/burning_town_params.xml locations/burning_town/burning_town.{image} locations/burning_town/burning_town.json locations/burning_town/burning_town-3.{image} locations/burning_town/burning_town-3.json locations/burning_town/burning_town-2.{image} locations/burning_town/burning_town-2.json locations/battlefield/battlefield_params.xml locations/battlefield/battlefield.{image} locations/battlefield/battlefield.json locations/battlefield/battlefield-2.{image} locations/battlefield/battlefield-2.json locations/bamboo_grove/bamboo_grove_params.xml locations/bamboo_grove/bamboo_grove.{image} locations/bamboo_grove/bamboo_grove.json locations/bamboo_grove/bamboo_grove-2.{image} locations/bamboo_grove/bamboo_grove-2.json locations/autumn/autumn_params.xml locations/autumn/autumn.{image} locations/autumn/autumn.json locations/autumn/autumn-2.{image} locations/autumn/autumn-2.json locations/arena/arena_params.xml locations/arena/arena.{image} locations/arena/arena.json locations/arena/arena-2.{image} locations/arena/arena-2.json loader/logo.png loader/bg.jpg list.xml lang/tr.xml lang/ru.xml lang/pt.xml lang/ko.xml lang/ja.xml lang/it.xml lang/fr.xml lang/es.xml lang/en.xml lang/de.xml items/proxy.{image} items/proxy.json items/images{scale}/weapon9/img_weapon_super_sai.{image} items/images{scale}/weapon9/img_weapon_dadao.{image} items/images{scale}/weapon9/img_weapon_composite_scythe.{image} items/images{scale}/weapon9/img_weapon_ceremonial_shuang_gou.{image} items/images{scale}/weapon9/img_weapon_battle_hammers.{image} items/images{scale}/weapon8/img_weapon_two_handed_mace.{image} items/images{scale}/weapon8/img_weapon_super_staff.{image} items/images{scale}/weapon8/img_weapon_silver_glaive.{image} items/images{scale}/weapon8/img_weapon_sickles.{image} items/images{scale}/weapon8/img_weapon_moon_sabers.{image} items/images{scale}/weapon8/img_weapon_magari_yari.{image} items/images{scale}/weapon6/img_weapon_two_handed_cudgel.{image} items/images{scale}/weapon6/img_weapon_super_knuckles.{image} items/images{scale}/weapon6/img_weapon_super_khopesh.{image} items/images{scale}/weapon6/img_weapon_maces.{image} items/images{scale}/weapon6/img_weapon_labrys_axes.{image} items/images{scale}/weapon6/img_weapon_kusarigama.{image} items/images{scale}/weapon6/img_weapon_golden_katana.{image} items/images{scale}/weapon6/img_weapon_glaive.{image} items/images{scale}/weapon6/img_weapon_butterfly_swords.{image} items/images{scale}/weapon5/img_weapon_yari.{image} items/images{scale}/weapon5/img_weapon_super_glaive.{image} items/images{scale}/weapon5/img_weapon_chinese_sabers.{image} items/images{scale}/weapon4/img_weapon_super_dadao.{image} items/images{scale}/weapon4/img_weapon_stilettos.{image} items/images{scale}/weapon4/img_weapon_steel_claws.{image} items/images{scale}/weapon4/img_weapon_heavy_staff.{image} items/images{scale}/weapon4/img_weapon_big_swords.{image} items/images{scale}/weapon4/img_weapon_axes.{image} items/images{scale}/weapon3/img_weapon_swords.{image} items/images{scale}/weapon3/img_weapon_super_spear.{image} items/images{scale}/weapon3/img_weapon_steel_nunchaku.{image} items/images{scale}/weapon3/img_weapon_shuang_gou.{image} items/images{scale}/weapon25/img_weapon_sectional_scythe.{image} items/images{scale}/weapon25/img_weapon_nunchaku.{image} items/images{scale}/weapon25/img_weapon_naginata.{image} items/images{scale}/weapon24/img_weapon_wanderer_staff.{image} items/images{scale}/weapon24/img_weapon_val17_trident.{image} items/images{scale}/weapon24/img_weapon_val17_sai.{image} items/images{scale}/weapon24/img_weapon_val17_fans.{image} items/images{scale}/weapon24/img_weapon_tonfa_guns.{image} items/images{scale}/weapon24/img_weapon_hermit_swords.{image} items/images{scale}/weapon24/img_weapon_boss_naginata.{image} items/images{scale}/weapon23/img_weapon_tec_knives.{image} items/images{scale}/weapon23/img_weapon_tec_glaive.{image} items/images{scale}/weapon23/img_weapon_super_sabers.{image} items/images{scale}/weapon23/img_weapon_super_poleaxe.{image} items/images{scale}/weapon23/img_weapon_super_knives.{image} items/images{scale}/weapon23/img_weapon_super_katana_set.{image} items/images{scale}/weapon22/img_weapon_starter_pack_tonfa.{image} items/images{scale}/weapon21/img_weapon_katana.{image} items/images{scale}/weapon21/img_weapon_im_knuckles.{image} items/images{scale}/weapon21/img_weapon_hw16_sickles.{image} items/images{scale}/weapon21/img_weapon_hw16_scythe.{image} items/images{scale}/weapon21/img_weapon_hw15_broom.{image} items/images{scale}/weapon21/img_weapon_heavy_kusarigama.{image} items/images{scale}/weapon21/img_weapon_dadao_janissary.{image} items/images{scale}/weapon20/img_weapon_hw15_scythe.{image} items/images{scale}/weapon20/img_weapon_hw14_broom.{image} items/images{scale}/weapon20/img_weapon_giant_sword.{image} items/images{scale}/weapon20/img_weapon_fan.{image} items/images{scale}/weapon20/img_weapon_crusher.{image} items/images{scale}/weapon2/img_weapon_tonfa.{image} items/images{scale}/weapon2/img_weapon_super_hammers.{image} items/images{scale}/weapon2/img_weapon_super_axes.{image} items/images{scale}/weapon2/img_weapon_staff.{image} items/images{scale}/weapon2/img_weapon_keris.{image} items/images{scale}/weapon2/img_weapon_crescent_knives.{image} items/images{scale}/weapon19/img_weapon_claws.{image} items/images{scale}/weapon19/img_weapon_chinese_swords.{image} items/images{scale}/weapon19/img_weapon_c2_z5_dragon_knives.{image} items/images{scale}/weapon19/img_weapon_c2_z3_sentinel_spear.{image} items/images{scale}/weapon19/img_weapon_c2_z2_monk_katar.{image} items/images{scale}/weapon19/img_weapon_c1_z4_sword.{image} items/images{scale}/weapon19/img_weapon_anniversary_10th.{image} items/images{scale}/weapon18/img_weapon_claws.{image} items/images{scale}/weapon18/img_weapon_butcher_knives.{image} items/images{scale}/weapon18/img_weapon_boss_swords.{image} items/images{scale}/weapon18/img_weapon_boss_claws.{image} items/images{scale}/weapon17/img_weapon_boss_hatchets.{image} items/images{scale}/weapon17/img_weapon_boss_giant_sword.{image} items/images{scale}/weapon17/img_weapon_boss_fans.{image} items/images{scale}/weapon17/img_weapon_boss_daisho.{image} items/images{scale}/weapon17/img_weapon_batons.{image} items/images{scale}/weapon16/img_weapon_val18_panda.{image} items/images{scale}/weapon16/img_weapon_ny18_mace.{image} items/images{scale}/weapon16/img_weapon_ny18_axes.{image} items/images{scale}/weapon16/img_weapon_hw17_staff.{image} items/images{scale}/weapon16/img_weapon_hw17_daggers.{image} items/images{scale}/weapon16/img_weapon_chny18_staff.{image} items/images{scale}/weapon15/img_weapon_rifle.{image} items/images{scale}/weapon15/img_weapon_knobsticks.{image} items/images{scale}/weapon15/img_weapon_glaivebow.{image} items/images{scale}/weapon15/img_weapon_fire_batons.{image} items/images{scale}/weapon15/img_weapon_electro_hammers.{image} items/images{scale}/weapon14/img_weapon_super_composite_sword.{image} items/images{scale}/weapon14/img_weapon_shocker_claws.{image} items/images{scale}/weapon14/img_weapon_power_fists.{image} items/images{scale}/weapon14/img_weapon_composite_staff.{image} items/images{scale}/weapon14/img_weapon_composite_spear.{image} items/images{scale}/weapon13/img_weapon_super_fans.{image} items/images{scale}/weapon13/img_weapon_im_sai.{image} items/images{scale}/weapon13/img_weapon_im_katana.{image} items/images{scale}/weapon13/img_weapon_im_claws.{image} items/images{scale}/weapon12/img_weapon_super_tonfa.{image} items/images{scale}/weapon12/img_weapon_super_machete.{image} items/images{scale}/weapon12/img_weapon_im_swords.{image} items/images{scale}/weapon12/img_weapon_im_staff.{image} items/images{scale}/weapon12/img_weapon_im_morningstars.{image} items/images{scale}/weapon12/img_weapon_im_glaive.{image} items/images{scale}/weapon11/img_weapon_xmas16_glaive.{image} items/images{scale}/weapon11/img_weapon_xmas16_candy.{image} items/images{scale}/weapon11/img_weapon_xmas15_canes.{image} items/images{scale}/weapon11/img_weapon_xmas14_canes.{image} items/images{scale}/weapon11/img_weapon_sharp_tonfa.{image} items/images{scale}/weapon10/img_weapon_z6_nunchaku.{image} items/images{scale}/weapon10/img_weapon_z6_knives.{image} items/images{scale}/weapon10/img_weapon_trident.{image} items/images{scale}/weapon10/img_weapon_silver_spear.{image} items/images{scale}/weapon10/img_weapon_northern_hammer.{image} items/images{scale}/weapon10/img_weapon_indian_katar.{image} items/images{scale}/weapon1/img_weapon_super_kusarigama.{image} items/images{scale}/weapon1/img_weapon_steel_batons.{image} items/images{scale}/weapon1/img_weapon_sai.{image} items/images{scale}/weapon1/img_weapon_ninja_sword.{image} items/images{scale}/weapon1/img_weapon_machete.{image} items/images{scale}/weapon1/img_weapon_knuckles.{image} items/images{scale}/weapon1/img_weapon_knives.{image} items/images{scale}/weapon1/img_weapon_daggers.{image} items/images{scale}/unknownitems/img_weapon_unknown.{image} items/images{scale}/unknownitems/img_ranged_unknown.{image} items/images{scale}/unknownitems/img_magic_unknown.{image} items/images{scale}/unknownitems/img_helm_unknown.{image} items/images{scale}/unknownitems/img_armor_unknown.{image} items/images{scale}/summerevent21/weapon_trident.{image} items/images{scale}/summerevent21/weapon_summer21_sword.{image} items/images{scale}/summerevent21/ranged_ancient_chakram.{image} items/images{scale}/summerevent21/helm_summer21_santa.{image} items/images{scale}/summerevent21/armor_summer21_santa.{image} items/images{scale}/summerevent21/armor_kimono.{image} items/images{scale}/ranged8/img_ranged_shuriken_w145.{image} items/images{scale}/ranged8/img_ranged_needles_w128.{image} items/images{scale}/ranged8/img_ranged_mine.{image} items/images{scale}/ranged8/img_ranged_chakram_w126.{image} items/images{scale}/ranged6/img_ranged_super_boomerang.{image} items/images{scale}/ranged6/img_ranged_im_kunai.{image} items/images{scale}/ranged6/img_ranged_im_hooks.{image} items/images{scale}/ranged6/img_ranged_im_axes.{image} items/images{scale}/ranged5/img_ranged_super_daggers.{image} items/images{scale}/ranged5/img_ranged_kunai_of_wind.{image} items/images{scale}/ranged5/img_ranged_dragons_wings.{image} items/images{scale}/ranged5/img_ranged_chakram_of_master.{image} items/images{scale}/ranged5/img_ranged_beast_axes.{image} items/images{scale}/ranged4/img_ranged_super_kunai.{image} items/images{scale}/ranged4/img_ranged_shuriken_of_darkness.{image} items/images{scale}/ranged4/img_ranged_ghost_kunai.{image} items/images{scale}/ranged4/img_ranged_assassins_dagger.{image} items/images{scale}/ranged4/img_ranged_ancient_chakram.{image} items/images{scale}/ranged3/img_ranged_throwing_spikes.{image} items/images{scale}/ranged3/img_ranged_super_axes.{image} items/images{scale}/ranged3/img_ranged_needle.{image} items/images{scale}/ranged3/img_ranged_heavy_shurikens.{image} items/images{scale}/ranged3/img_ranged_chakram.{image} items/images{scale}/ranged2/img_ranged_super_shuriken.{image} items/images{scale}/ranged2/img_ranged_silver_shurikens.{image} items/images{scale}/ranged2/img_ranged_hunting_kunai.{image} items/images{scale}/ranged2/img_ranged_hunters_knives.{image} items/images{scale}/ranged2/img_ranged_assassin_kunai.{image} items/images{scale}/ranged12/img_ranged_xmas16_cookie.{image} items/images{scale}/ranged12/img_ranged_xmas15_snowballs.{image} items/images{scale}/ranged12/img_ranged_super_chakram_jewels.{image} items/images{scale}/ranged12/img_ranged_hw15_skull.{image} items/images{scale}/ranged11/img_ranged_xmas14_snowballs.{image} items/images{scale}/ranged11/img_ranged_val17_axe.{image} items/images{scale}/ranged11/img_ranged_hw16_bat.{image} items/images{scale}/ranged11/img_ranged_circular_saw.{image} items/images{scale}/ranged11/img_ranged_blaster.{image} items/images{scale}/ranged10/img_ranged_c2_z5_dragon_boomerang.{image} items/images{scale}/ranged10/img_ranged_c2_z3_sentinel_shuriken.{image} items/images{scale}/ranged10/img_ranged_c2_z2_monk_shuriken.{image} items/images{scale}/ranged10/img_ranged_c1_z4_steel_axe.{image} items/images{scale}/ranged10/img_ranged_anniversary_10th.{image} items/images{scale}/ranged1/img_ranged_throwing_daggers.{image} items/images{scale}/ranged1/img_ranged_super_chakram_blades.{image} items/images{scale}/ranged1/img_ranged_shurikens.{image} items/images{scale}/ranged1/img_ranged_kunai.{image} items/images{scale}/raidclanpack/weapon_cyber_dragon_kusarigama.{image} items/images{scale}/raidclanpack/weapon_10thanniversary.{image} items/images{scale}/raidclanpack/ranged_shuriken.{image} items/images{scale}/raidclanpack/magic_cyber_dragon_ray.{image} items/images{scale}/raidclanpack/img_weapon_starter_pack_raid_swords.{image} items/images{scale}/raidclanpack/img_weapon_ny23_paid_offer.{image} items/images{scale}/raidclanpack/img_ranged_water_shuriken.{image} items/images{scale}/raidclanpack/helm_cyber_dragon_head.{image} items/images{scale}/payment3/img_chest_gems_zone7.{image} items/images{scale}/payment3/img_casket_gems_zone7.{image} items/images{scale}/payment3/img_bag_gems_zone7.{image} items/images{scale}/payment2/img_pile_coins.{image} items/images{scale}/payment2/img_perk_reset.{image} items/images{scale}/payment2/img_chest_coins.{image} items/images{scale}/payment2/img_bag_coins.{image} items/images{scale}/payment1/img_pile_gems.{image} items/images{scale}/payment1/img_chest_gems.{image} items/images{scale}/payment1/img_casket_gems.{image} items/images{scale}/payment1/img_bag_gems.{image} items/images{scale}/offersshinebg.{image} items/images{scale}/ny20_3/weapon_xmas19_glaive.{image} items/images{scale}/ny20_3/weapon_xmas19_candy.{image} items/images{scale}/ny20_3/weapon_ny19_mace.{image} items/images{scale}/ny20_3/weapon_ny19_axes.{image} items/images{scale}/ny20_3/weapon_cny20_citrus.{image} items/images{scale}/ny20_3/img_armor_xmas16_santa.{image} items/images{scale}/newyear2021/weapon_icefruit_knuckles.{image} items/images{scale}/newyear2021/ranged_snowfall_shurikens.{image} items/images{scale}/newyear2021/magic_snow_globe.{image} items/images{scale}/newyear2021/helm_ny21_ice.{image} items/images{scale}/newyear2021/helm_ny21_bread.{image} items/images{scale}/newyear2021/armor_ny21_cuirass.{image} items/images{scale}/magic9/img_magic_c2_z5_dragon_earthquake.{image} items/images{scale}/magic9/img_magic_c2_z2_monk_root_stun.{image} items/images{scale}/magic9/img_magic_c1_z4_power_kick.{image} items/images{scale}/magic9/img_magic_anniversary_10th.{image} items/images{scale}/magic7/img_magic_sawmill.{image} items/images{scale}/magic7/img_magic_fire_aura.{image} items/images{scale}/magic6/img_magic_xmas16_iceball.{image} items/images{scale}/magic6/img_magic_ice_pins.{image} items/images{scale}/magic6/img_magic_ice_ball.{image} items/images{scale}/magic6/img_magic_acid_cloud.{image} items/images{scale}/magic4/img_magic_water_ball.{image} items/images{scale}/magic4/img_magic_asteroid.{image} items/images{scale}/magic3/img_magic_lightning_arrow.{image} items/images{scale}/magic3/img_magic_fire_pillar.{image} items/images{scale}/magic3/img_magic_earth_strike.{image} items/images{scale}/magic3/img_magic_death_ray.{image} items/images{scale}/magic2/img_magic_wave.{image} items/images{scale}/magic2/img_magic_mass_bomb.{image} items/images{scale}/magic2/img_magic_fire_splash.{image} items/images{scale}/magic2/img_magic_bomb.{image} items/images{scale}/magic1/img_magic_fire_ball.{image} items/images{scale}/magic1/img_magic_energy_ball.{image} items/images{scale}/indianitems21/img_weapon_keris.{image} items/images{scale}/indianitems21/img_weapon_glaivebow.{image} items/images{scale}/indianitems21/img_ranged_kunai.{image} items/images{scale}/indianitems21/img_helm_turban.{image} items/images{scale}/indianitems21/img_helm_blood.{image} items/images{scale}/indianitems21/img_armor_twilight.{image} items/images{scale}/indianitems21/img_armor_hoodie.{image} items/images{scale}/independenceday/weapon_ae21_spear.{image} items/images{scale}/independenceday/ranged_ae21_tomahawk.{image} items/images{scale}/independenceday/magic_ae21_pillar.{image} items/images{scale}/independenceday/helm_ae21_roach.{image} items/images{scale}/independenceday/armor_ae21_warrior.{image} items/images{scale}/img_video.{image} items/images{scale}/img_unlimited_energy.{image} items/images{scale}/img_pile_coins_zone7.{image} items/images{scale}/img_pile_coins_platinum.{image} items/images{scale}/img_chest_jewels_zone7.{image} items/images{scale}/img_chest_coins_zone7.{image} items/images{scale}/img_casket_jewels_zone7.{image} items/images{scale}/img_bag_jewels_zone7.{image} items/images{scale}/img_bag_coins_zone7.{image} items/images{scale}/img_bag_coins_platinum.{image} items/images{scale}/helm9/img_helm_moon.{image} items/images{scale}/helm9/img_helm_legioner.{image} items/images{scale}/helm9/img_helm_horned.{image} items/images{scale}/helm8/img_helm_super_joker.{image} items/images{scale}/helm8/img_helm_general.{image} items/images{scale}/helm8/img_helm_crescent.{image} items/images{scale}/helm7/img_helm_steel.{image} items/images{scale}/helm7/img_helm_spike.{image} items/images{scale}/helm7/img_helm_mantis.{image} items/images{scale}/helm6/img_helm_super_strips.{image} items/images{scale}/helm6/img_helm_hardened.{image} items/images{scale}/helm6/img_helm_bronze.{image} items/images{scale}/helm5/img_helm_tail.{image} items/images{scale}/helm5/img_helm_smart_gabled.{image} items/images{scale}/helm5/img_helm_kabuto.{image} items/images{scale}/helm4/img_helm_viking.{image} items/images{scale}/helm4/img_helm_lobster.{image} items/images{scale}/helm4/img_helm_blood.{image} items/images{scale}/helm38/img_helm_xmas14_horns.{image} items/images{scale}/helm36/img_helm_xmas16_horns.{image} items/images{scale}/helm36/img_helm_xmas15_santa.{image} items/images{scale}/helm36/img_helm_xmas15_horns.{image} items/images{scale}/helm35/img_helm_xmas14_santa.{image} items/images{scale}/helm35/img_helm_xmas14_horns.{image} items/images{scale}/helm35/img_helm_val17_wings.{image} items/images{scale}/helm33/img_helm_super_predator.{image} items/images{scale}/helm33/img_helm_quasar.{image} items/images{scale}/helm33/img_helm_inferno.{image} items/images{scale}/helm33/img_helm_anger.{image} items/images{scale}/helm32/img_helm_hw16_pumpkin.{image} items/images{scale}/helm32/img_helm_hw15_witch.{image} items/images{scale}/helm32/img_helm_hw15_pumpkin.{image} items/images{scale}/helm30/img_helm_c2_z5_dragon.{image} items/images{scale}/helm30/img_helm_c2_z3_sentinel.{image} items/images{scale}/helm30/img_helm_c1_z4_steel.{image} items/images{scale}/helm30/img_helm_anniversary_10th.{image} items/images{scale}/helm3/img_helm_super_mask.{image} items/images{scale}/helm3/img_helm_closed.{image} items/images{scale}/helm29/img_helm_hw16_witch.{image} items/images{scale}/helm29/img_helm_advanced_conical.{image} items/images{scale}/helm27/img_helm_xmas16_santa.{image} items/images{scale}/helm27/img_helm_val18_panda.{image} items/images{scale}/helm27/img_helm_ny18_hat.{image} items/images{scale}/helm27/img_helm_hw17_cylinder.{image} items/images{scale}/helm27/img_helm_chny18_traditional.{image} items/images{scale}/helm26/img_helm_z6_final.{image} items/images{scale}/helm26/img_helm_navigators_breath_mask.{image} items/images{scale}/helm25/img_helm_h85.{image} items/images{scale}/helm25/img_helm_h83.{image} items/images{scale}/helm25/img_helm_faceless_mask.{image} items/images{scale}/helm24/img_helm_super_laser.{image} items/images{scale}/helm24/img_helm_cyber_samurai.{image} items/images{scale}/helm24/img_helm_cyber_mask.{image} items/images{scale}/helm23/img_helm_tubes.{image} items/images{scale}/helm23/img_helm_crystalline.{image} items/images{scale}/helm22/img_helm_im_9.{image} items/images{scale}/helm22/img_helm_im_8.{image} items/images{scale}/helm22/img_helm_im_7.{image} items/images{scale}/helm20/img_helm_super_winged.{image} items/images{scale}/helm20/img_helm_im_5.{image} items/images{scale}/helm20/img_helm_im_4.{image} items/images{scale}/helm20/img_helm_im_3.{image} items/images{scale}/helm20/img_helm_im_2.{image} items/images{scale}/helm20/img_helm_im_1.{image} items/images{scale}/helm2/img_helm_soldier_kabuto.{image} items/images{scale}/helm2/img_helm_green_mask.{image} items/images{scale}/helm2/img_helm_gabled.{image} items/images{scale}/helm18/img_helm_super_samurai.{image} items/images{scale}/helm18/img_helm_super_plumed.{image} items/images{scale}/helm18/img_helm_spartian.{image} items/images{scale}/helm18/img_helm_demon.{image} items/images{scale}/helm16/img_helm_ritual.{image} items/images{scale}/helm16/img_helm_knightly.{image} items/images{scale}/helm16/img_helm_ifrit.{image} items/images{scale}/helm16/img_helm_icarus.{image} items/images{scale}/helm16/img_helm_golden.{image} items/images{scale}/helm16/img_helm_celestial.{image} items/images{scale}/helm15/img_helm_triton.{image} items/images{scale}/helm15/img_helm_super_horned.{image} items/images{scale}/helm15/img_helm_snow.{image} items/images{scale}/helm15/img_helm_dark_legioner.{image} items/images{scale}/helm15/img_helm_darkness.{image} items/images{scale}/helm15/img_helm_beast.{image} items/images{scale}/helm14/img_helm_two_face.{image} items/images{scale}/helm14/img_helm_samurais.{image} items/images{scale}/helm14/img_helm_dark.{image} items/images{scale}/helm11/img_helm_super_scarab.{image} items/images{scale}/helm11/img_helm_sun.{image} items/images{scale}/helm11/img_helm_silver.{image} items/images{scale}/helm11/img_helm_emerald.{image} items/images{scale}/helm11/img_helm_crown_of_night.{image} items/images{scale}/helm11/img_helm_crimson.{image} items/images{scale}/helm10/img_helm_iron.{image} items/images{scale}/helm10/img_helm_dawn.{image} items/images{scale}/helm10/img_helm_assassin.{image} items/images{scale}/helm1/img_helm_light.{image} items/images{scale}/helm1/img_helm_kendo_mask.{image} items/images{scale}/helm1/img_helm_conical_hat.{image} items/images{scale}/halloween20/ranged_hw20_skull.{image} items/images{scale}/halloween20/img_weapon_hw14_scythe.{image} items/images{scale}/halloween20/helm_woodoo_hw20.{image} items/images{scale}/halloween20/armor_woodoo_hw20.{image} items/images{scale}/cny21_22/mdl_ranged_weighed_kunai.{image} items/images{scale}/cny21_22/jian_weapon.{image} items/images{scale}/cny21_22/img_weapon_guandao.{image} items/images{scale}/cny21_22/img_magic_waterball.{image} items/images{scale}/cny21_22/golden_bull_armor.{image} items/images{scale}/cny21_22/chny_fans.{image} items/images{scale}/cny21_22/bull_helm.{image} items/images{scale}/armor9/img_armor_super_feathered.{image} items/images{scale}/armor9/img_armor_legioner.{image} items/images{scale}/armor9/img_armor_gilded_centurion.{image} items/images{scale}/armor8/img_armor_spike.{image} items/images{scale}/armor8/img_armor_mantis.{image} items/images{scale}/armor8/img_armor_grand_chain.{image} items/images{scale}/armor7/img_armor_strong_barbarian.{image} items/images{scale}/armor7/img_armor_imhotep.{image} items/images{scale}/armor7/img_armor_centurion.{image} items/images{scale}/armor6/img_armor_guard.{image} items/images{scale}/armor6/img_armor_chain.{image} items/images{scale}/armor6/img_armor_blood_master.{image} items/images{scale}/armor5/img_armor_super_crow.{image} items/images{scale}/armor5/img_armor_sensei_kendo.{image} items/images{scale}/armor5/img_armor_ronin.{image} items/images{scale}/armor4/img_armor_chain_robe.{image} items/images{scale}/armor4/img_armor_bronze.{image} items/images{scale}/armor4/img_armor_barbarian.{image} items/images{scale}/armor33/img_armor_xmas14_santa.{image} items/images{scale}/armor33/img_armor_val17_mantle.{image} items/images{scale}/armor33/img_armor_hw16_mantle.{image} items/images{scale}/armor32/img_armor_super_fusion.{image} items/images{scale}/armor32/img_armor_redshift.{image} items/images{scale}/armor32/img_armor_alloy.{image} items/images{scale}/armor31/img_armor_old_legioner.{image} items/images{scale}/armor31/img_armor_luminosity.{image} items/images{scale}/armor31/img_armor_inferno.{image} items/images{scale}/armor3/img_armor_super_spiked.{image} items/images{scale}/armor3/img_armor_leather.{image} items/images{scale}/armor29/img_armor_c2_z5_dragon.{image} items/images{scale}/armor29/img_armor_c1_z4_steel.{image} items/images{scale}/armor29/img_armor_anniversary_10th.{image} items/images{scale}/armor27/img_armor_val18_hoodie.{image} items/images{scale}/armor27/img_armor_ny18_mantle.{image} items/images{scale}/armor27/img_armor_hw17_cloak.{image} items/images{scale}/armor27/img_armor_chny18_traditional.{image} items/images{scale}/armor26/img_armor_z6_final.{image} items/images{scale}/armor26/img_armor_navigators_coat.{image} items/images{scale}/armor26/img_armor_membrane_cuirass.{image} items/images{scale}/armor25/img_armor_outworld_vest.{image} items/images{scale}/armor25/img_armor_half_life.{image} items/images{scale}/armor25/img_armor_faceless_tunic.{image} items/images{scale}/armor24/img_armor_tech_9.{image} items/images{scale}/armor24/img_armor_tech_8.{image} items/images{scale}/armor23/img_armor_tech_7.{image} items/images{scale}/armor23/img_armor_tech_6.{image} items/images{scale}/armor23/img_armor_tech_10.{image} items/images{scale}/armor22/img_armor_super_glossy.{image} items/images{scale}/armor22/img_armor_im_9.{image} items/images{scale}/armor22/img_armor_im_3.{image} items/images{scale}/armor21/img_armor_im_8.{image} items/images{scale}/armor21/img_armor_im_7.{image} items/images{scale}/armor21/img_armor_im_2.{image} items/images{scale}/armor20/img_armor_im_5.{image} items/images{scale}/armor20/img_armor_im_4.{image} items/images{scale}/armor20/img_armor_im_1.{image} items/images{scale}/armor2/img_armor_quilted.{image} items/images{scale}/armor2/img_armor_green.{image} items/images{scale}/armor2/img_armor_foreign.{image} items/images{scale}/armor19/img_armor_super_banshee.{image} items/images{scale}/armor18/img_armor_necromancer.{image} items/images{scale}/armor18/img_armor_harbinger_cuirass.{image} items/images{scale}/armor18/img_armor_celestial.{image} items/images{scale}/armor17/img_armor_super_samurai.{image} items/images{scale}/armor17/img_armor_shaman.{image} items/images{scale}/armor17/img_armor_dragon_jaws.{image} items/images{scale}/armor16/img_armor_shadow_master.{image} items/images{scale}/armor16/img_armor_royal_breastplate.{image} items/images{scale}/armor16/img_armor_black_buffalo.{image} items/images{scale}/armor15/img_armor_super_halo.{image} items/images{scale}/armor15/img_armor_dragon_blood.{image} items/images{scale}/armor15/img_armor_dark.{image} items/images{scale}/armor14/img_armor_storm_cuirass.{image} items/images{scale}/armor14/img_armor_red_lotus.{image} items/images{scale}/armor14/img_armor_gilded.{image} items/images{scale}/armor13/img_armor_twilight.{image} items/images{scale}/armor13/img_armor_hawk.{image} items/images{scale}/armor13/img_armor_beast_shell.{image} items/images{scale}/armor12/img_armor_super_cloak.{image} items/images{scale}/armor12/img_armor_mantle_of_night.{image} items/images{scale}/armor12/img_armor_dragon.{image} items/images{scale}/armor11/img_armor_shadow.{image} items/images{scale}/armor11/img_armor_red_steel.{image} items/images{scale}/armor11/img_armor_moon.{image} items/images{scale}/armor10/img_armor_raven.{image} items/images{scale}/armor10/img_armor_emerald_breastplate.{image} items/images{scale}/armor10/img_armor_assassin.{image} items/images{scale}/armor1/img_armor_robe.{image} items/images{scale}/armor1/img_armor_old_leather.{image} items/images{scale}/armor1/img_armor_kendo.{image} internal_settings.xml forge.xml fight/ui.png fight/ui.json fight/rules.{image} fight/rules.json fight/round.png fight/round.fnt fight/ringout.{image} fight/ringout.json fight/pause.{image} fight/pause.json fight/particles.png fight/particles.json fight/fx.{image} fight/fx.json fight/digits.png fight/digits.fnt fight/callouts.{image} fight/callouts.json credits.xml config_cdn.xml computer_settings.xml character_progress.xml audio/sounds_b.{audio} audio/sounds_a.{audio} audio/menu_music.{audio} audio/fight9_master_skills_music.{audio} audio/fight8_final_boss_music.{audio} audio/fight7_fat_boss_music.{audio} audio/fight6_sparring_music.{audio} audio/fight5_ninja_in_the_night_music.{audio} audio/fight4_forest_of_death_music.{audio} audio/fight3_vengeance_music.{audio} audio/fight38_sakura_forest_music.{audio} audio/fight37_titan_epic_fight_music.{audio} audio/fight36_stardocks_music.{audio} audio/fight34_halls_of_the_dead_heroes_music.{audio} audio/fight33_stone_forest_music.{audio} audio/fight32_starship_music.{audio} audio/fight31_graveyard_ships_music.{audio} audio/fight30_gates_of_shadows_music.{audio} audio/fight2_blade_dance_music.{audio} audio/fight28_flying_rocks_music.{audio} audio/fight27_factory_music.{audio} audio/fight25_hive_music.{audio} audio/fight24_ruins_village_music.{audio} audio/fight23_burning_town_music.{audio} audio/fight22_heavenly_clouds_music.{audio} audio/fight21_lesson_in_the_dark_room_music.{audio} audio/fight1_samurai_spirit_music.{audio} audio/fight19_volcano_music.{audio} audio/fight18_fuji_music.{audio} audio/fight17_cave_music.{audio} audio/fight16_the_battlefield_flowers_music.{audio} audio/fight15_shadow_lady_music.{audio} audio/fight14_ship_battle_music.{audio} audio/fight13_old_sensei_music.{audio} audio/fight12_deadly_smoke_music.{audio} audio/fight11_ronin_music.{audio} audio/fight10_black_warrior_music.{audio} audio/act_music.{audio} animations_dojo.dat animations.dat achievements.xml".split(
      " ",
    );
  G.xVa = [822, 10, 314, 821];
  G.ZUa =
    "xml2.577aacc7.dat xml.ddb3aa55.dat vs/sprites.551dc7f8.avif vs/sprites.526f405f.webp vs/sprites.c8e3f851.json vs/bg.f25e2e73.jpg video/shadow_gate.36ac4c71.mp4 video/shadow_fight_ending.a715848c.mp4 video/play.7a6f9b6f.png video/mute.a76e93ad.png video/intro.f6d49fb8.mp4 users_default.b7da2019.xml users/proxy.23a4245f.dds users/proxy.36907038.ktx users/proxy.b39d776f.json users/notifications.0d60a2c1.webp users/notifications.faa71352.avif users/notifications.c60f240e.json users/images/woman_z7_tournament_scythes.a2942647.webp users/images/woman_z7_tournament_scythes.71c63449.avif users/images/starter_pack_zone6.4ccc8f32.avif users/images/starter_pack_zone6.665933c2.webp users/images/starter_pack_zone5.81dce62d.avif users/images/starter_pack_zone5.3350203c.webp users/images/starter_pack_zone4.b03a8cf5.webp users/images/starter_pack_zone4.a1ea516d.avif users/images/starter_pack_zone3.1147719f.webp users/images/starter_pack_zone3.2c9526ab.avif users/images/starter_pack2.dbaf687e.avif users/images/starter_pack2.3d61a566.webp users/images/scavenger_4.67178a68.webp users/images/scavenger_4.69f99795.avif users/images/scavenger_3.c2ec9198.avif users/images/scavenger_3.c1d51d29.webp users/images/scavenger_2.542c2877.avif users/images/scavenger_2.e68182ac.webp users/images/scavenger_1.5362c8d4.avif users/images/scavenger_1.d4095d0c.webp users/images/premium_pack_zone1.27ed5001.avif users/images/premium_pack_zone1.08656a6b.webp users/images/pile_coins_platinum.05649f72.webp users/images/pile_coins_platinum.a087f331.avif users/images/ninja_man_yari.f6fb49d5.avif users/images/ninja_man_yari.7efa5672.webp users/images/ninja_man_two_handed_mace.e733349f.webp users/images/ninja_man_two_handed_mace.bf02d408.avif users/images/ninja_man_tonfa.e457ebcf.avif users/images/ninja_man_tonfa.e0584e76.webp users/images/ninja_man_swords.a0079044.avif users/images/ninja_man_swords.57fbd140.webp users/images/ninja_man_staff.5afc2660.avif users/images/ninja_man_staff.dbbcd6d6.webp users/images/ninja_man_spear.5e543260.webp users/images/ninja_man_spear.5e575901.avif users/images/ninja_man_shuang_gou.a5767aea.avif users/images/ninja_man_shuang_gou.3103158d.webp users/images/ninja_man_sai.0b60183a.webp users/images/ninja_man_sai.f33023e7.avif users/images/ninja_man_nunchaku.ebd238d3.webp users/images/ninja_man_nunchaku.7fcac7fe.avif users/images/ninja_man_ninja_sword.2f34e0b3.avif users/images/ninja_man_ninja_sword.b3c3c632.webp users/images/ninja_man_magari_yari.4eb9d397.avif users/images/ninja_man_magari_yari.3d3d4ae4.webp users/images/ninja_man_machete.57ff5a65.avif users/images/ninja_man_machete.1df1de39.webp users/images/ninja_man_maces.00d1b822.webp users/images/ninja_man_maces.28e2fd02.avif users/images/ninja_man_labrys_axes.823dbffc.avif users/images/ninja_man_labrys_axes.def7c806.webp users/images/ninja_man_kusarigama.73c9d1df.avif users/images/ninja_man_kusarigama.200b4260.webp users/images/ninja_man_kungfu.65c424e3.webp users/images/ninja_man_kungfu.d75cbda2.avif users/images/ninja_man_kunai.4c97a3df.avif users/images/ninja_man_kunai.f88cecf3.webp users/images/ninja_man_knuckles.4f8fac90.avif users/images/ninja_man_knuckles.520455fb.webp users/images/ninja_man_knives_2.077265c9.avif users/images/ninja_man_knives_2.baa67425.webp users/images/ninja_man_knives.539728ef.webp users/images/ninja_man_knives.4ec501f7.avif users/images/ninja_man_keris.695057d8.avif users/images/ninja_man_keris.d74726b9.webp users/images/ninja_man_heavy_staff.c9ce3236.avif users/images/ninja_man_heavy_staff.fe7e353f.webp users/images/ninja_man_hammers.34aa0025.avif users/images/ninja_man_hammers.8bf42b99.webp users/images/ninja_man_glaive.2de36c3e.avif users/images/ninja_man_glaive.5de3cc48.webp users/images/ninja_man_dadao.37098a2d.webp users/images/ninja_man_dadao.1472fe7c.avif users/images/ninja_man_crescent_knives.0dc858f1.webp users/images/ninja_man_crescent_knives.e62a2ef6.avif users/images/ninja_man_claws.2ca49207.webp users/images/ninja_man_claws.5e2bb02a.avif users/images/ninja_man_chinese_sabers.ad9e07eb.avif users/images/ninja_man_chinese_sabers.bd1152b0.webp users/images/ninja_man_butterfly_swords.07d2baab.avif users/images/ninja_man_butterfly_swords.e336226c.webp users/images/ninja_man_big_mace.a16e1bc9.webp users/images/ninja_man_big_mace.86495c22.avif users/images/ninja_man_big_hammer.117ae048.avif users/images/ninja_man_big_hammer.480361a4.webp users/images/ninja_man_batons.a8c3ee9e.webp users/images/ninja_man_batons.f68ff65a.avif users/images/ninja_man_axes.ff8f0b81.avif users/images/ninja_man_axes.b42896b9.webp users/images/ninja_girl_swords.958f9abf.webp users/images/ninja_girl_swords.ca6b2214.avif users/images/ninja_girl_stilettos.a1ce691b.webp users/images/ninja_girl_stilettos.b0c8338c.avif users/images/ninja_girl_sickles.71288197.avif users/images/ninja_girl_sickles.db8459d2.webp users/images/ninja_girl_sharp_tonfa.84fd6c09.avif users/images/ninja_girl_sharp_tonfa.ee93071b.webp users/images/ninja_girl_sai.e8535a75.webp users/images/ninja_girl_sai.2babff0e.avif users/images/ninja_girl_nunchaku.438fa010.webp users/images/ninja_girl_nunchaku.4e6be40f.avif users/images/ninja_girl_moon_sabers.5b81db83.avif users/images/ninja_girl_moon_sabers.621bf05e.webp users/images/ninja_girl_katar.63942598.avif users/images/ninja_girl_katar.231131af.webp users/images/ninja_girl_golden_katana.e8324a37.avif users/images/ninja_girl_golden_katana.583cc034.webp users/images/man_z7_tournament_swords.24c1a542.avif users/images/man_z7_tournament_swords.534dc0cc.webp users/images/man_z7_tournament_sword.ea724d61.avif users/images/man_z7_tournament_sword.8a1692b1.webp users/images/man_z7_tournament_staff.78e49519.webp users/images/man_z7_tournament_staff.a6ae06c0.avif users/images/man_z7_tournament_scythes.f7eba9fb.avif users/images/man_z7_tournament_scythes.69246469.webp users/images/man_z7_tournament_knobsticks.fcde743d.avif users/images/man_z7_tournament_knobsticks.ac46bbdd.webp users/images/man_z7_tournament_firebatons.52ce90d5.webp users/images/man_z7_tournament_firebatons.0c20e7f1.avif users/images/man_z7_tournament_daggers.cd19ee3b.avif users/images/man_z7_tournament_daggers.fd55c16d.webp users/images/man_yari.c5c56137.webp users/images/man_yari.c95ad6ea.avif users/images/man_wakidzashi_2.84554a90.webp users/images/man_wakidzashi_2.65bcd419.avif users/images/man_wakidzashi.b24e8847.avif users/images/man_wakidzashi.f6689783.webp users/images/man_two_handed_mace.436a5916.webp users/images/man_two_handed_mace.87e88b79.avif users/images/man_trident_1.f7cd4abe.avif users/images/man_trident_1.94f78e53.webp users/images/man_trident.6ab6be55.avif users/images/man_trident.eef70326.webp users/images/man_tonfa_4.b52e56f9.webp users/images/man_tonfa_4.f534f730.avif users/images/man_tonfa_3.96dd6ac4.webp users/images/man_tonfa_3.e78ae006.avif users/images/man_tonfa_2.65c0e8f5.webp users/images/man_tonfa_2.74768d78.avif users/images/man_tonfa.68aa18fb.avif users/images/man_tonfa.5b270a35.webp users/images/man_titans_army_4.6a2f31bf.webp users/images/man_titans_army_4.b871a7ca.avif users/images/man_titans_army_3.ebe58a62.avif users/images/man_titans_army_3.42160168.webp users/images/man_titans_army_2.b1ce89a7.webp users/images/man_titans_army_2.fe6d4800.avif users/images/man_titans_army_1.6704ec40.avif users/images/man_titans_army_1.f126fbf4.webp users/images/man_tatoo.42aac834.webp users/images/man_tatoo.14c929d4.avif users/images/man_swords_2.c30269d0.webp users/images/man_swords_2.894517f7.avif users/images/man_swords.00acb04b.webp users/images/man_swords.21b353dd.avif users/images/man_stilettos.6186d28c.webp users/images/man_stilettos.cc14e4a8.avif users/images/man_steel_claws.1f1015b5.avif users/images/man_steel_claws.06e03f96.webp users/images/man_staff_3.7574f7af.webp users/images/man_staff_3.0d6ab0c1.avif users/images/man_staff.a8f654c9.webp users/images/man_staff.e7d32f28.avif users/images/man_spear.e02696b6.webp users/images/man_spear.7307df0f.avif users/images/man_sickle.5ae175cb.avif users/images/man_sickle.4c1c5868.webp users/images/man_scythe.66569829.webp users/images/man_scythe.f92700f5.avif users/images/man_sai_2.91766201.avif users/images/man_sai_2.4596566f.webp users/images/man_nunchaku_2.94fde673.avif users/images/man_nunchaku_2.0fbc17e4.webp users/images/man_nunchaku.5ade71d9.avif users/images/man_nunchaku.f48c3955.webp users/images/man_ninja_naginata.b53562db.avif users/images/man_ninja_naginata.e26e54e4.webp users/images/man_night.6b0b7321.avif users/images/man_night.56e515ad.webp users/images/man_naginata.7d83ce92.webp users/images/man_naginata.59017c6c.avif users/images/man_moon_sabers.4f26f843.avif users/images/man_moon_sabers.7f4314ca.webp users/images/man_magari_yari.721d9415.avif users/images/man_magari_yari.1e8864e1.webp users/images/man_machete.d09187e9.webp users/images/man_machete.99cf571b.avif users/images/man_maces.00eb27cd.avif users/images/man_maces.9dbb4239.webp users/images/man_long_katana.66930fa6.avif users/images/man_long_katana.d13b2556.webp users/images/man_labrys_axes.6bf03d22.webp users/images/man_labrys_axes.024bc2b3.avif users/images/man_kungfu.8e7fa542.webp users/images/man_kungfu.f6818998.avif users/images/man_kunai.d09055c5.avif users/images/man_kunai.fede069f.webp users/images/man_knives_2.efb4d806.avif users/images/man_knives_2.40e483d1.webp users/images/man_knives.13e894da.webp users/images/man_knives.be8e0657.avif users/images/man_keris.60e0d7c4.webp users/images/man_keris.4b051b91.avif users/images/man_katar.7b1307c1.avif users/images/man_katar.438b4252.webp users/images/man_invisible.d5472ab6.webp users/images/man_invisible.52d464e7.avif users/images/man_hero_power_fists.ce7fee32.avif users/images/man_hero_power_fists.24186e68.webp users/images/man_hero_composite_sword.733018d3.webp users/images/man_hero_composite_sword.be2d60de.avif users/images/man_hero_composite_spear.f59e5b40.webp users/images/man_hero_composite_spear.2af29c8c.avif users/images/man_heronkungfu.79ac1a75.webp users/images/man_heronkungfu.7f98b571.avif users/images/man_heavy_staff.c156d769.avif users/images/man_heavy_staff.5cc9f858.webp users/images/man_heavy_kusarigama.77e54833.webp users/images/man_heavy_kusarigama.ed699cc7.avif users/images/man_heavy_hammer.cd26e72f.webp users/images/man_heavy_hammer.b4698dfa.avif users/images/man_glaive_3.8f8a5f0b.avif users/images/man_glaive_3.03af8cbc.webp users/images/man_glaive_2.a3482a7e.webp users/images/man_glaive_2.586b14c7.avif users/images/man_glaive.b2a74546.avif users/images/man_glaive.0bae6f2e.webp users/images/man_fists.4b3aa5db.webp users/images/man_fists.97eb0c79.avif users/images/man_fist.7b86e353.avif users/images/man_fist.7f26358e.webp users/images/man_deerhorn.5017021b.avif users/images/man_deerhorn.75bf2cf8.webp users/images/man_daggers.64e29a0c.avif users/images/man_daggers.499b3b80.webp users/images/man_dadao_janissary.b6e8871a.webp users/images/man_dadao_janissary.81a47df0.avif users/images/man_dadao.376de6d8.avif users/images/man_dadao.f5824869.webp users/images/man_crescent_knives.be4d7569.webp users/images/man_crescent_knives.e64e7550.avif users/images/man_crescent.dce8c24c.avif users/images/man_crescent.a808da82.webp users/images/man_cool_staff.bcd5f6ed.webp users/images/man_cool_staff.9eb5798e.avif users/images/man_clutches.620caafc.webp users/images/man_clutches.ed6fa64b.avif users/images/man_claws.23369887.webp users/images/man_claws.19d28207.avif users/images/man_chinese_sabre_2.22a48c46.webp users/images/man_chinese_sabre_2.fbfac9c8.avif users/images/man_chinese_sabre.a71e4314.avif users/images/man_chinese_sabre.c75b3989.webp users/images/man_big_swords.86db40ba.webp users/images/man_big_swords.5dd6fd47.avif users/images/man_big_sword.4ece52ed.avif users/images/man_big_sword.3ce87f01.webp users/images/man_big_mace_2.754f9898.webp users/images/man_big_mace_2.0e7c0113.avif users/images/man_big_hammer.f1e319ad.avif users/images/man_big_hammer.381b9a52.webp users/images/man_batons_4.0b8d4d75.avif users/images/man_batons_4.03e1e3b9.webp users/images/man_batons_3.9622094d.avif users/images/man_batons_3.a1733a74.webp users/images/man_batons_2.d3f15d0e.webp users/images/man_batons_2.a16750da.avif users/images/man_batons.89f011be.webp users/images/man_batons.59505ce5.avif users/images/man_axes_3.4e406c26.webp users/images/man_axes_3.5c744602.avif users/images/man_axe.44be9168.webp users/images/man_axe.433dd004.avif users/images/looter_man_staff.ec81cdbf.webp users/images/looter_man_staff.3664935f.avif users/images/looter_man_section_scythe.5ca29bae.avif users/images/looter_man_section_scythe.4781317d.webp users/images/looter_man_knives.b2163e89.webp users/images/looter_man_knives.1819d662.avif users/images/looter_man_glaive.f0c1f098.webp users/images/looter_man_glaive.31d82bc6.avif users/images/looter_girl_staff.b28344e4.avif users/images/looter_girl_staff.2fc22893.webp users/images/looter_girl_scythe.8e8a902c.avif users/images/looter_girl_scythe.8fb1dafa.webp users/images/img_unlimited_energy.6fee0530.avif users/images/img_unlimited_energy.3b77697a.webp users/images/img_starter_pack_dark_chest.59e09d7e.avif users/images/img_starter_pack_dark_chest.d0611c66.webp users/images/img_drop_titan_sphere.c0162ba8.webp users/images/img_drop_titan_sphere.b5ca6b26.avif users/images/img_drop_red_seal.ebb3e01a.avif users/images/img_drop_red_seal.7927c34f.webp users/images/img_drop_purple_seal.fff1c02e.webp users/images/img_drop_purple_seal.53aa89e3.avif users/images/img_drop_orange_seal.d1724b7a.avif users/images/img_drop_orange_seal.67dee85a.webp users/images/img_drop_jade_seal.2c0bc389.webp users/images/img_drop_jade_seal.ba5d78d3.avif users/images/img_drop_im_knuckles.f86447be.avif users/images/img_drop_im_knuckles.a7f75dab.webp users/images/img_drop_green_seal.cc05f3d6.avif users/images/img_drop_green_seal.e4e5ce6a.webp users/images/img_drop_blue_seal.7a9400b1.webp users/images/img_drop_blue_seal.61da7133.avif users/images/girl_z7_tournament_glaive.28bdefcc.webp users/images/girl_z7_tournament_glaive.e1a49678.avif users/images/girl_swords_2.bfaccdc3.avif users/images/girl_swords_2.0d9a71ea.webp users/images/girl_spear.312aa8bb.webp users/images/girl_spear.642de8cf.avif users/images/girl_shuang_gou.acdc7ccc.avif users/images/girl_shuang_gou.feb39b2f.webp users/images/girl_sai_2.1a8e3f75.avif users/images/girl_sai_2.460b2c51.webp users/images/girl_sai.17a3f0b2.avif users/images/girl_sai.b0bde947.webp users/images/girl_nunchaku.7fd4275e.webp users/images/girl_nunchaku.2f4c78cf.avif users/images/girl_magari_yari.2f22b58f.webp users/images/girl_magari_yari.f5976b59.avif users/images/girl_kusarigama_2.502f7583.avif users/images/girl_kusarigama_2.72f033aa.webp users/images/girl_kusarigama_1.21e422b1.avif users/images/girl_kusarigama_1.30f2af3c.webp users/images/girl_kusarigama.5a64c291.avif users/images/girl_kusarigama.f41f17ac.webp users/images/girl_knives_2.aa60c957.webp users/images/girl_knives_2.44cf9dd1.avif users/images/girl_knives.7213002f.avif users/images/girl_knives.d644bdfc.webp users/images/girl_keris.db0533d8.avif users/images/girl_keris.5f72ec0d.webp users/images/girl_katana.8859cca0.avif users/images/girl_katana.3d0d1128.webp users/images/girl_im_knuckles.48803578.webp users/images/girl_im_knuckles.1982afac.avif users/images/girl_hero_shocker_claws.613c4118.avif users/images/girl_hero_shocker_claws.7f08479a.webp users/images/girl_hammers.d0ba5dd6.webp users/images/girl_hammers.62b6e2fd.avif users/images/girl_golden_katana.e8fe103f.avif users/images/girl_golden_katana.8f4c8d00.webp users/images/girl_dirk.abd181b5.avif users/images/girl_dirk.2a183da2.webp users/images/girl_butterfly_swords.647b878f.avif users/images/girl_butterfly_swords.47113666.webp users/images/character_thief_small.85437174.avif users/images/character_thief_small.1c4b8921.webp users/images/character_thief_3.99afd31c.avif users/images/character_thief_3.fd19ad0a.webp users/images/character_thief_2.f795b9d7.webp users/images/character_thief_2.7be074af.avif users/images/character_thief.49fc43ad.webp users/images/character_thief.a6590261.avif users/images/character_sister.6c109432.webp users/images/character_sister.75a4e201.avif users/images/character_shroud.bf89d3eb.avif users/images/character_shroud.a4e8b50b.webp users/images/character_sensei_young.7b37e847.avif users/images/character_sensei_young.2aa2e67a.webp users/images/character_sensei_small.2045b126.avif users/images/character_sensei_small.afa88293.webp users/images/character_sensei.1e05d2f6.avif users/images/character_sensei.7f2b509e.webp users/images/character_savage.49dc8e08.avif users/images/character_savage.8c6603f3.webp users/images/character_sadist.7c9a7fdc.avif users/images/character_sadist.d55db169.webp users/images/character_ronin.763fd005.avif users/images/character_ronin.d119c5d4.webp users/images/character_prince_evil.0adc7ca0.avif users/images/character_prince_evil.e1a0920a.webp users/images/character_prince.d6a9b036.avif users/images/character_prince.ea092a13.webp users/images/character_pirate.94fa8c78.avif users/images/character_pirate.e1babe8f.webp users/images/character_philosopher.e9221d27.avif users/images/character_philosopher.11e18017.webp users/images/character_may_sad.213ae1d5.avif users/images/character_may_sad.30149ba0.webp users/images/character_may_6.4ff6ed10.avif users/images/character_may_6.2df24b0a.webp users/images/character_may_5.15f14953.avif users/images/character_may_5.c1e5957d.webp users/images/character_may_4.d2cc81c2.avif users/images/character_may_4.510698c9.webp users/images/character_may_3.72281757.avif users/images/character_may_3.ed3d5821.webp users/images/character_may_2.902f3253.avif users/images/character_may_2.ebde23e5.webp users/images/character_may_1_small.3598acea.avif users/images/character_may_1_small.51f0a27e.webp users/images/character_may_1.54af1d2e.avif users/images/character_may_1.5026fa4d.webp users/images/character_master.51179cb7.avif users/images/character_master.ff183cf6.webp users/images/character_kali_small.e03e6ef5.avif users/images/character_kali_small.73e9ad36.webp users/images/character_kali.3f9e3aa3.avif users/images/character_kali.9e2dc149.webp users/images/character_justice_2.a74a5525.avif users/images/character_justice_2.94330993.webp users/images/character_justice.ee520bc9.avif users/images/character_justice.3e9ea141.webp users/images/character_indean.9de5a9f4.avif users/images/character_indean.e3a6de06.webp users/images/character_hyperion.94fb3f70.avif users/images/character_hyperion.15eb5330.webp users/images/character_guru.7e8955f5.avif users/images/character_guru.bd6b9c59.webp users/images/character_fanatic.9f9de785.avif users/images/character_fanatic.8044bea7.webp users/images/character_emperor.b6ab096f.webp users/images/character_emperor.e9fd94e6.avif users/images/character_disciple.7b9f78c2.avif users/images/character_disciple.ac1b3562.webp users/images/character_cypher.77028d9b.webp users/images/character_cypher.0281220a.avif users/images/character_corsair.f29bd646.webp users/images/character_corsair.350d63ef.avif users/images/character_blind.4568a69c.avif users/images/character_blind.b132f1ed.webp users/images/character_assasin.b443a2c1.webp users/images/character_assasin.a1e0f1c9.avif users/images/character_asian.ff6a0098.avif users/images/character_asian.1c33f41d.webp users/images/character_ancient.4577a438.avif users/images/character_ancient.4f8f266d.webp users/images/boss_widow_young.a7e03a39.avif users/images/boss_widow_young.4eccdf81.webp users/images/boss_wasp_young.1c34eef3.avif users/images/boss_wasp_young.ed37f7e1.webp users/images/boss_wasp.e64e0583.avif users/images/boss_wasp.17686576.webp users/images/boss_titan.d7907e16.avif users/images/boss_titan.780d08ad.webp users/images/boss_shogun_young.cff97a86.avif users/images/boss_shogun_young.9054f7c4.webp users/images/boss_shogun.968be1c4.avif users/images/boss_shogun.724df79f.webp users/images/boss_lynx_young.efc8225c.avif users/images/boss_lynx_young.8db443d4.webp users/images/boss_lynx.3faba235.avif users/images/boss_lynx.d9362263.webp users/images/boss_huntress.7f0757c2.avif users/images/boss_huntress.ce4baa76.webp users/images/boss_hermit_young.5672cc8e.avif users/images/boss_hermit_young.6ab1bd64.webp users/images/boss_hermit.fb2f11cd.avif users/images/boss_hermit.9bf066ba.webp users/images/boss_butcher_young.0d82f96f.avif users/images/boss_butcher_young.0144ba06.webp users/images/boss_butcher.3924f5fe.avif users/images/boss_butcher.be5a6d9d.webp users/images/avatar_masked.f07c44fb.avif users/images/avatar_masked.43016b34.webp users/images/avatar_human.0e5c6060.avif users/images/avatar_human.65d79a9f.webp users/images/avatar_hero.7271ed7f.avif users/images/avatar_hero.3057a100.webp ui/sliced.81557021.dds ui/sliced.6ad2c517.ktx ui/sliced.8bebd03e.json ui/skills.334aff5a.dds ui/skills.27e00373.ktx ui/skills.fc1af549.json ui/shop.c66f33e5.dds ui/shop.636e0a49.ktx ui/shop.062a5e03.json ui/settings_icons.2b7b8392.avif ui/settings_icons.1010a998.webp ui/settings_icons.306f02f8.json ui/settings_font.8fc133f5.png ui/settings_font.e56a2a57.dat ui/scroll.75004b11.avif ui/scroll.112a005a.webp ui/scroll.47a3f513.json ui/sale.56664baa.dds ui/sale.6bfb2ff1.ktx ui/sale.ec3c7b28.json ui/profile.bf033c0a.dds ui/profile.359cb7c4.ktx ui/profile.ff77c0ff.json ui/misc.21c7aa86.dds ui/misc.7edb04a2.ktx ui/misc.499258ab.json ui/menu.6ee998f5.dds ui/menu.b4e55ab9.ktx ui/menu.aaef83fb.json ui/font-de.b1f1baec.png ui/font-es.895273c3.png ui/font-fr.361ee61b.png ui/font-it.fdc6c48b.png ui/font-ja.0684bb3d.png ui/font-en.2dfae7e9.png ui/font-ko.3f0d0641.png ui/font-pt.8d0e9464.png ui/font-ru.3338e715.png ui/font-tr.b4d2582e.png ui/font-it.390d6688.fnt ui/font-de.905d4f46.fnt ui/font-es.e4831863.fnt ui/font-ja.b6b02394.fnt ui/font-ko.1de141ba.fnt ui/font-ru.32eaddc0.fnt ui/font-tr.6e12fd6c.fnt ui/font-en.7043b83b.fnt ui/font-fr.e5816aab.fnt ui/font-pt.e54f48e7.fnt ui/enchantments.efab8ccb.dds ui/enchantments.07ff1cf0.ktx ui/enchantments.fc0f136b.json ui/controller.6eb77c83.ktx ui/controller.a36783da.dds ui/controller.3b1a11f0.json ui/achievements.1e79f21d.dds ui/achievements.b37489c7.ktx ui/achievements.31cebdce.json tactic_settings.46cf310f.xml stages.40f2d5b2.xml splash/scroll.6b3c84aa.avif splash/scroll.68b2b2c8.webp splash/logo.29c0db83.png splash/loading-it.9b1fd134.png splash/loading-es.de726927.png splash/loading-de.196544f5.png splash/loading-ja.c9bf6f1f.png splash/loading-ko.c4864d39.png splash/loading-ru.b77684ee.png splash/loading-tr.022f56ee.png splash/loading-fr.5f06e6e9.png splash/loading-en.1ba73b78.png splash/loading-pt.3f8a0be8.png splash/loading-en.d2d197b4.fnt splash/loading-fr.d1dee442.fnt splash/loading-es.718f253f.fnt splash/loading-ja.43d3587c.fnt splash/loading-ko.78c532de.fnt splash/loading-pt.68e2a18f.fnt splash/loading-ru.cabf81ba.fnt splash/loading-tr.c72ec3af.fnt splash/loading-de.974462b0.fnt splash/loading-it.ab395d11.fnt splash/cast.464abd41.avif splash/cast.ddca1438.webp splash/bg.df0d0023.jpg quest_extensions/zone_7/story.3c0e6cf8.xml quest_extensions/zone_6/story.812f8b81.xml quest_extensions/zone_5/story.355543df.xml quest_extensions/zone_4/story.9ddde332.xml quest_extensions/zone_3/story.eb67befa.xml quest_extensions/zone_2/story.3d566e4e.xml quest_extensions/zone_2/core.92675e14.xml quest_extensions/zone_1/story.8fc20803.xml quest_extensions/zone_1/core.4a2624af.xml quest_extensions/utils.1a9e7575.xml quest_extensions/update_quests_start.8ba50139.xml quest_extensions/update_quests.95ab3e10.xml quest_extensions/tutorial_quests.dcc4a509.xml quest_extensions/test_quests.881114c2.xml quest_extensions/starter_packs.a85c3b94.xml quest_extensions/sensei_arc.75009ff8.xml quest_extensions/promotions_from_first_session.3e11c53f.xml quest_extensions/premium_packs.a8d39072.xml quest_extensions/packs.60f593ce.xml quest_extensions/offers.43cc65c2.xml quest_extensions/login_notify.213a9221.xml quest_extensions/item_restore_quests.3ab4175c.xml quest_extensions/intermission/story.92d8bf6a.xml quest_extensions/hardmode.b4bc06f9.xml quest_extensions/gdpr.7440d0af.xml quest_extensions/facebook.44936408.xml quest_extensions/energy.c586fbbc.xml quest_extensions/battles.d10be6ea.xml quest_extensions/advertising.35756a74.xml quests.c29bbbe1.xml perks.9fd0174f.xml packs.65977344.xml nekki_famobi.1c5370ca.png moves.97f61623.xml models_dojo.e57366a0.dat models.473fd74f.dat map/preview_pvp.e48eb0a4.dds map/preview_pvp.b52b3acb.ktx map/preview_pvp.9e1d46f2.json map/preview_main_i.88e1d180.ktx map/preview_main_i.fee6b108.dds map/preview_main_i.4450cc3e.json map/preview_main.41eadd62.ktx map/preview_main.9e04bc4d.dds map/preview_main.66b4a448.json map/preview_bosses.d1387a07.dds map/preview_bosses.e91ba687.ktx map/preview_bosses.a3ed86d9.json map/part6.c26e5963.dds map/part6.71eb2da7.ktx map/part6.660c01a8.json map/part5.2af0ae7b.ktx map/part5.66773b0e.dds map/part5.66487373.json map/part4.ca5aa146.ktx map/part4.3edcb8bc.dds map/part4.9b297bac.json map/part3.7d85eb6b.dds map/part3.0141f6d7.ktx map/part3.a9c953e1.json map/part2.05f49861.dds map/part2.849845c5.ktx map/part2.a29b2e07.json map/part1.e074287e.ktx map/part1.8a7e4899.dds map/part1.90163fe2.json map/part0.35a8cfe5.ktx map/part0.f6749bfb.dds map/part0.9000c962.json map/offers.a7126627.dds map/offers.3b2e92a7.ktx map/offers.d3fc3605.json map/images/waterfall.4455ac27.ktx map/images/waterfall.a49ef620.dds map/images/wasp.b1951d2b.dds map/images/wasp.941b9e44.ktx map/images/volcano.f13be122.dds map/images/volcano.f1a97c90.ktx map/images/village.c56f7dd4.dds map/images/village.251e41ca.ktx map/images/titan.4bc97bef.ktx map/images/titan.b81c84d6.dds map/images/swamp.13a0fb50.ktx map/images/swamp.0cc966fa.dds map/images/stone_forest.7159f5c1.ktx map/images/stone_forest.f5a0e151.dds map/images/stone_dragon.5c0779e5.ktx map/images/stone_dragon.c456da30.dds map/images/statue.c85dac98.ktx map/images/statue.2378eb99.dds map/images/spaceship.c9286271.ktx map/images/spaceship.5062c276.dds map/images/snowy_peak.b2a69458.dds map/images/snowy_peak.ecdfd735.ktx map/images/skyport.f6e14b30.dds map/images/skyport.2a57ab34.ktx map/images/ships.f8c163fa.ktx map/images/ships.ab547fa7.dds map/images/shadow_gate.1904b04f.dds map/images/shadow_gate.bfbbcd83.ktx map/images/samurai.fee1ec67.dds map/images/samurai.1dcfdbee.ktx map/images/sakura.b58ba90e.ktx map/images/sakura.4f432a72.dds map/images/ruins_village.19679739.ktx map/images/ruins_village.d40fddd2.dds map/images/road.39b53030.ktx map/images/road.9a4d7ccd.dds map/images/random_location.6ff4ae27.ktx map/images/random_location.c6f0fa72.dds map/images/pink_lake.23b29d7a.ktx map/images/pink_lake.96cfad1a.dds map/images/night_bridge.32065c79.ktx map/images/night_bridge.a182190b.dds map/images/neural_network.eab72183.ktx map/images/neural_network.d954af1c.dds map/images/mountain.7b50aa61.dds map/images/mountain.efc870ac.ktx map/images/moon.8cbfc6b8.ktx map/images/moon.ba7aef4f.dds map/images/magic_rocks.3c089ac6.ktx map/images/magic_rocks.59ffa4c6.dds map/images/lynx.46edc681.ktx map/images/lynx.0074453c.dds map/images/lamps_on_water.775d8e7f.dds map/images/lamps_on_water.b021de7c.ktx map/images/ice_cave.a748b21e.dds map/images/ice_cave.aa32cd54.ktx map/images/huntress.19e19f44.dds map/images/huntress.e7b58a46.ktx map/images/hermit.53d7fb1c.dds map/images/hermit.8f6895f9.ktx map/images/heaven.85d3e478.dds map/images/heaven.684256c4.ktx map/images/graveyard_ships.530da850.ktx map/images/graveyard_ships.5fae32a4.dds map/images/flying_rocks.5f01901f.dds map/images/flying_rocks.9d99d71d.ktx map/images/flowers_field.983c741d.ktx map/images/flowers_field.8e8d2a6e.dds map/images/flooded_village.8cb5d24d.ktx map/images/flooded_village.ba9d26cc.dds map/images/factory.d8902309.dds map/images/factory.95b2261f.ktx map/images/emerald_forest.21bafb0a.ktx map/images/emerald_forest.ecadf25c.dds map/images/eggs.f8c1c38e.dds map/images/eggs.3a5886d9.ktx map/images/dark_room.82c1d778.ktx map/images/dark_room.dd03bd14.dds map/images/chess_yard.2b8c2129.ktx map/images/chess_yard.abcf5680.dds map/images/cave.231a3547.dds map/images/cave.c946cd53.ktx map/images/castle_and_bridge.505b8f1a.ktx map/images/castle_and_bridge.2b5c67fc.dds map/images/capsules.1ebd2189.ktx map/images/capsules.69f23289.dds map/images/butcher.98978100.dds map/images/butcher.cb17f4b0.ktx map/images/burning_town.566e8c35.dds map/images/burning_town.7040455a.ktx map/images/bridge.66401612.ktx map/images/bridge.f2a15c88.dds map/images/battlefield.d598cc85.dds map/images/battlefield.26cef43d.ktx map/images/bamboo_grove.5fee8f09.dds map/images/bamboo_grove.d808ce49.ktx map/images/autumn.61eea7dc.ktx map/images/autumn.239a738c.dds map/images/arena.e9e2ca3c.ktx map/images/arena.4ea40e28.dds map/buttons.e49c2747.dds map/buttons.3000994a.ktx map/buttons.439bb5de.json magic_ktx.72456186.dat magic_dds.7db679de.dat magic/mgc_widow_teleportation_start.95e1cea3.dds magic/mgc_widow_teleportation_start.3ac6982a.ktx magic/mgc_widow_teleportation_start.aab050ab.json magic/mgc_widow_teleportation_end.704d980a.ktx magic/mgc_widow_teleportation_end.77a261e1.dds magic/mgc_widow_teleportation_end.36e28cb4.json magic/mgc_wasp_speed_split_wings_start_2.f80abcbc.ktx magic/mgc_wasp_speed_split_wings_start_2.0d221465.dds magic/mgc_wasp_speed_split_wings_start_2.42866f4e.json magic/mgc_wasp_speed_split_wings_start.f5f2615b.ktx magic/mgc_wasp_speed_split_wings_start.43bb2c5a.dds magic/mgc_wasp_speed_split_wings_start.337724cf.json magic/mgc_wasp_speed_split_wings_end.03b51de6.dds magic/mgc_wasp_speed_split_wings_end.f01c1de3.ktx magic/mgc_wasp_speed_split_wings_end.efb4ee5e.json magic/mgc_tonfa_guns_start.749b53f8.dds magic/mgc_tonfa_guns_start.58a37229.ktx magic/mgc_tonfa_guns_start.78fa302d.json magic/mgc_tonfa_guns_middle.3e6d408c.dds magic/mgc_tonfa_guns_middle.d288e77d.ktx magic/mgc_tonfa_guns_middle.3dee0788.json magic/mgc_tonfa_guns_end.9ee91433.ktx magic/mgc_tonfa_guns_end.0e3f1642.dds magic/mgc_tonfa_guns_end.fae6333a.json magic/mgc_magic_wave_start.cc48ff22.dds magic/mgc_magic_wave_start.ae92d88d.ktx magic/mgc_magic_wave_start.4d109097.json magic/mgc_magic_wave_middle.566aed9e.ktx magic/mgc_magic_wave_middle.ac7044b6.dds magic/mgc_magic_wave_middle.49d2424c.json magic/mgc_magic_wave_end.a6badea6.ktx magic/mgc_magic_wave_end.b3e0fe27.dds magic/mgc_magic_wave_end.a94a93bf.json magic/mgc_magic_water_ball_start.f3f13bba.ktx magic/mgc_magic_water_ball_start.d7262fde.dds magic/mgc_magic_water_ball_start.2df092ce.json magic/mgc_magic_water_ball_middle.5795469e.dds magic/mgc_magic_water_ball_middle.82b396f9.ktx magic/mgc_magic_water_ball_middle.11aceccf.json magic/mgc_magic_water_ball_end.97469c03.dds magic/mgc_magic_water_ball_end.84213e33.ktx magic/mgc_magic_water_ball_end.664142c9.json magic/mgc_magic_tiger_ball_start.d52826dc.dds magic/mgc_magic_tiger_ball_start.35a379c8.ktx magic/mgc_magic_tiger_ball_start.abe4305f.json magic/mgc_magic_tiger_ball_middle.25c27fcb.ktx magic/mgc_magic_tiger_ball_middle.fc8651e6.dds magic/mgc_magic_tiger_ball_middle.93f83faa.json magic/mgc_magic_tiger_ball_end.6f2860b3.dds magic/mgc_magic_tiger_ball_end.ceca0efc.ktx magic/mgc_magic_tiger_ball_end.2ee06b5c.json magic/mgc_magic_spirit_pillar_start.de7d745e.ktx magic/mgc_magic_spirit_pillar_start.a56c22ff.dds magic/mgc_magic_spirit_pillar_start.dd8b4e6b.json magic/mgc_magic_spirit_pillar_end.525e7ec8.dds magic/mgc_magic_spirit_pillar_end.58ea9a45.ktx magic/mgc_magic_spirit_pillar_end.6fa6e7d6.json magic/mgc_magic_small_sphere_start.95ad3933.ktx magic/mgc_magic_small_sphere_start.1a45d904.dds magic/mgc_magic_small_sphere_start.ad2faa48.json magic/mgc_magic_small_sphere_middle.f1cbbcbf.dds magic/mgc_magic_small_sphere_middle.1ade61f4.ktx magic/mgc_magic_small_sphere_middle.f2174088.json magic/mgc_magic_small_sphere_end.720711e0.ktx magic/mgc_magic_small_sphere_end.1cbfbeda.dds magic/mgc_magic_small_sphere_end.dbed406f.json magic/mgc_magic_mind_throw_start.391866e4.ktx magic/mgc_magic_mind_throw_start.68f05b79.dds magic/mgc_magic_mind_throw_start.cccf578a.json magic/mgc_magic_mind_throw_middle.d3ed1bbb.ktx magic/mgc_magic_mind_throw_middle.be435f13.dds magic/mgc_magic_mind_throw_middle.a8df57d5.json magic/mgc_magic_mind_throw_end.a2f626f4.dds magic/mgc_magic_mind_throw_end.60530b66.ktx magic/mgc_magic_mind_throw_end.182a8e41.json magic/mgc_magic_mass_bomb_start.06b23a3f.ktx magic/mgc_magic_mass_bomb_start.1634eddc.dds magic/mgc_magic_mass_bomb_start.bcd4b535.json magic/mgc_magic_mass_bomb_middle.7b398bc0.dds magic/mgc_magic_mass_bomb_middle.68cdba7c.ktx magic/mgc_magic_mass_bomb_middle.4c73c430.json magic/mgc_magic_mass_bomb_end.49313942.ktx magic/mgc_magic_mass_bomb_end.17f23282.dds magic/mgc_magic_mass_bomb_end.84dd791d.json magic/mgc_magic_lightning_arrow_start.a468ec7d.dds magic/mgc_magic_lightning_arrow_start.4661f2c7.ktx magic/mgc_magic_lightning_arrow_start.c705d8b7.json magic/mgc_magic_lightning_arrow_middle.1f00b461.ktx magic/mgc_magic_lightning_arrow_middle.0c09e13a.dds magic/mgc_magic_lightning_arrow_middle.e60875ce.json magic/mgc_magic_lightning_arrow_end.2adf6220.dds magic/mgc_magic_lightning_arrow_end.2d692e7a.ktx magic/mgc_magic_lightning_arrow_end.d24aeadb.json magic/mgc_magic_invisible_start.8372a790.ktx magic/mgc_magic_invisible_start.e308e663.dds magic/mgc_magic_invisible_start.9e709d2d.json magic/mgc_magic_invisible_end.c89005d6.dds magic/mgc_magic_invisible_end.95cf7baf.ktx magic/mgc_magic_invisible_end.374b89d1.json magic/mgc_magic_ice_pins_start.d66587fd.dds magic/mgc_magic_ice_pins_start.b50deb1f.ktx magic/mgc_magic_ice_pins_start.30e1cccc.json magic/mgc_magic_ice_pins_middle_2.13ab0727.ktx magic/mgc_magic_ice_pins_middle_2.3dfc195f.dds magic/mgc_magic_ice_pins_middle_2.06f07334.json magic/mgc_magic_ice_pins_middle_1.1c2007fb.ktx magic/mgc_magic_ice_pins_middle_1.cc7d21b8.dds magic/mgc_magic_ice_pins_middle_1.76b59800.json magic/mgc_magic_ice_pins_end.b4114440.dds magic/mgc_magic_ice_pins_end.7d4fc628.ktx magic/mgc_magic_ice_pins_end.3775d055.json magic/mgc_magic_ice_ball_start.292ef127.dds magic/mgc_magic_ice_ball_start.361ea72c.ktx magic/mgc_magic_ice_ball_start.d26186eb.json magic/mgc_magic_ice_ball_middle.dacb2be5.dds magic/mgc_magic_ice_ball_middle.a405819b.ktx magic/mgc_magic_ice_ball_middle.ce18ce25.json magic/mgc_magic_ice_ball_end.b90fbe70.ktx magic/mgc_magic_ice_ball_end.d87827b4.dds magic/mgc_magic_ice_ball_end.705df93c.json magic/mgc_magic_fire_splash_start.3118317a.dds magic/mgc_magic_fire_splash_start.59c0508c.ktx magic/mgc_magic_fire_splash_start.8b3ee9aa.json magic/mgc_magic_fire_splash_middle.ee1bc776.ktx magic/mgc_magic_fire_splash_middle.4eab7875.dds magic/mgc_magic_fire_splash_middle.24c7db93.json magic/mgc_magic_fire_splash_end.bdf9f63d.dds magic/mgc_magic_fire_splash_end.5551f85a.ktx magic/mgc_magic_fire_splash_end.d2764fbe.json magic/mgc_magic_fire_pillar_start.389c8263.ktx magic/mgc_magic_fire_pillar_start.145c76db.dds magic/mgc_magic_fire_pillar_start.f2cc242f.json magic/mgc_magic_fire_pillar_end.2582fcec.ktx magic/mgc_magic_fire_pillar_end.32e3055a.dds magic/mgc_magic_fire_pillar_end.d6662e45.json magic/mgc_magic_fireball_start.6802937a.ktx magic/mgc_magic_fireball_start.9b0efce2.dds magic/mgc_magic_fireball_start.4f0cd73e.json magic/mgc_magic_fireball_middle.aa2d5293.dds magic/mgc_magic_fireball_middle.e91b47db.ktx magic/mgc_magic_fireball_middle.b4ff921e.json magic/mgc_magic_fireball_end.0e9c427d.dds magic/mgc_magic_fireball_end.5d9d8f7b.ktx magic/mgc_magic_fireball_end.469a47b1.json magic/mgc_magic_energy_ball_start.15c594a3.dds magic/mgc_magic_energy_ball_start.fa84ff46.ktx magic/mgc_magic_energy_ball_start.df17697f.json magic/mgc_magic_energy_ball_middle.7982d945.ktx magic/mgc_magic_energy_ball_middle.e3235362.dds magic/mgc_magic_energy_ball_middle.60cc369d.json magic/mgc_magic_energy_ball2_end.1fd17eaf.ktx magic/mgc_magic_energy_ball2_end.dbbaa639.dds magic/mgc_magic_energy_ball2_end.4aed76dd.json magic/mgc_magic_energy_ball1_end.88d11d74.ktx magic/mgc_magic_energy_ball1_end.5934bae0.dds magic/mgc_magic_energy_ball1_end.6a41794c.json magic/mgc_magic_earth_quake_end.3aab5d7f.ktx magic/mgc_magic_earth_quake_end.5be51eef.dds magic/mgc_magic_earth_quake_end.85514141.json magic/mgc_magic_death_ray.da1cf3eb.dds magic/mgc_magic_death_ray.9a0ff0ed.ktx magic/mgc_magic_death_ray.c66930c1.json magic/mgc_magic_bomb_start.a99047dc.ktx magic/mgc_magic_bomb_start.d5e47a0e.dds magic/mgc_magic_bomb_start.6e814308.json magic/mgc_magic_bomb_middle.e94f86f4.dds magic/mgc_magic_bomb_middle.bfcdb5a5.ktx magic/mgc_magic_bomb_middle.8e7c9547.json magic/mgc_magic_bomb_end.838e39c1.dds magic/mgc_magic_bomb_end.e1f5397a.ktx magic/mgc_magic_bomb_end.86e709ef.json magic/mgc_magic_asteroid_middle.ba477ac3.ktx magic/mgc_magic_asteroid_middle.67fcf3bc.dds magic/mgc_magic_asteroid_middle.72dcff18.json magic/mgc_magic_asteroid_end_2.20ec7428.dds magic/mgc_magic_asteroid_end_2.9a822849.ktx magic/mgc_magic_asteroid_end_2.6fcf6e92.json magic/mgc_magic_asteroid_end_1.35c0d79f.ktx magic/mgc_magic_asteroid_end_1.6f1899e9.dds magic/mgc_magic_asteroid_end_1.527eb5e6.json magic/mgc_magic_acid_cloud.5bc95c1c.dds magic/mgc_magic_acid_cloud.9ec7c642.ktx magic/mgc_magic_acid_cloud.a561a338.json magic/mgc_effect_time_bomb.8610baa4.dds magic/mgc_effect_time_bomb.ffaa8d5a.ktx magic/mgc_effect_time_bomb.85c77ade.json magic/mgc_effect_shocker.3e5b4de0.dds magic/mgc_effect_shocker.c798a7a9.ktx magic/mgc_effect_shocker.a4d966aa.json magic/mgc_effect_shield_hex.349fc48d.ktx magic/mgc_effect_shield_hex.b601a60a.dds magic/mgc_effect_shield_hex.04773ab2.json magic/mgc_effect_round_knife_big.d12bfc5b.dds magic/mgc_effect_round_knife_big.df81c981.ktx magic/mgc_effect_round_knife_big.f097a5f3.json magic/mgc_effect_round_knife.11d7c24a.ktx magic/mgc_effect_round_knife.d82ef07b.dds magic/mgc_effect_round_knife.ca5fa054.json magic/mgc_effect_mine_player.9b0a2bd6.dds magic/mgc_effect_mine_player.b08b0cba.ktx magic/mgc_effect_mine_player.9f41748f.json magic/mgc_effect_mine.3b2a5679.ktx magic/mgc_effect_mine.67055c0d.dds magic/mgc_effect_mine.ab7c74ad.json magic/mgc_effect_lightning_end.049bbf96.dds magic/mgc_effect_lightning_end.f368c986.ktx magic/mgc_effect_lightning_end.95cf8fd0.json magic/mgc_effect_levitation_middle.2489a1d3.dds magic/mgc_effect_levitation_middle.c127ae14.ktx magic/mgc_effect_levitation_middle.dde347a3.json magic/mgc_effect_hammer.60d962cc.ktx magic/mgc_effect_hammer.0a2920aa.dds magic/mgc_effect_hammer.2a793309.json magic/mgc_effect_fire_tonfa_shoot_1.95b43c5c.ktx magic/mgc_effect_fire_tonfa_shoot_1.fcd7f544.dds magic/mgc_effect_fire_tonfa_shoot_1.e815cdbc.json magic/mgc_effect_fire_tonfa_flamethrower.a93e9708.dds magic/mgc_effect_fire_tonfa_flamethrower.b15eaa39.ktx magic/mgc_effect_fire_tonfa_flamethrower.cd7c701b.json magic/mgc_effect_fire_tonfa_blow_2.03f022f1.dds magic/mgc_effect_fire_tonfa_blow_2.18f80629.ktx magic/mgc_effect_fire_tonfa_blow_2.c338f485.json magic/mgc_effect_fire_tonfa_blow_1.13f933c2.ktx magic/mgc_effect_fire_tonfa_blow_1.84c6b325.dds magic/mgc_effect_fire_tonfa_blow_1.3ee096ec.json magic/mgc_effect_fire_aura.ab7ccacc.ktx magic/mgc_effect_fire_aura.0a5e1c0e.dds magic/mgc_effect_fire_aura.b561b144.json magic/mgc_effect_fall.37e9943a.ktx magic/mgc_effect_fall.888f582e.dds magic/mgc_effect_fall.0d8d0c97.json magic/mgc_effect_energy_pillar_start.752f44c2.ktx magic/mgc_effect_energy_pillar_start.179b09c2.dds magic/mgc_effect_energy_pillar_start.1fa7bec3.json magic/mgc_effect_energy_pillar_end.ebbc23f1.dds magic/mgc_effect_energy_pillar_end.2b4f180c.ktx magic/mgc_effect_energy_pillar_end.f91ed45c.json locations/waterfall/waterfall_params.56194d0f.xml locations/waterfall/waterfall.ce6cc46f.avif locations/waterfall/waterfall.95146424.webp locations/waterfall/waterfall.023ab7f3.ktx locations/waterfall/waterfall.bba4f764.json locations/waterfall/waterfall-2.ccac7577.webp locations/waterfall/waterfall-2.dafcd349.ktx locations/waterfall/waterfall-2.a9d72225.avif locations/waterfall/waterfall-2.d571c831.json locations/volcano/volcano_params.7ccf040f.xml locations/volcano/volcano.d7f8c773.avif locations/volcano/volcano.95e984ee.webp locations/volcano/volcano.2c2a89ea.ktx locations/volcano/volcano.4416128b.json locations/volcano/volcano-2.6adee7b0.ktx locations/volcano/volcano-2.203f4fa0.webp locations/volcano/volcano-2.7c59ed9b.avif locations/volcano/volcano-2.1f909ce2.json locations/village/village_params.c20a0b94.xml locations/village/village.b748ab0d.ktx locations/village/village.ddf50e18.avif locations/village/village.5ca50cd3.webp locations/village/village.7f6ddcbb.json locations/village/village-2.f8c7aaa2.ktx locations/village/village-2.bfb450be.avif locations/village/village-2.c1eb0ddb.webp locations/village/village-2.49be18c6.json locations/swamp/swamp_params.f505d6d0.xml locations/swamp/swamp.eddc6a60.webp locations/swamp/swamp.c98b5822.avif locations/swamp/swamp.e8ff8058.ktx locations/swamp/swamp.f3711eb5.json locations/swamp/swamp-3.fd017471.avif locations/swamp/swamp-3.f7e8e9a6.webp locations/swamp/swamp-3.0bc0eb53.ktx locations/swamp/swamp-3.4e90eb07.json locations/swamp/swamp-2.3e091d1b.webp locations/swamp/swamp-2.06dc803e.avif locations/swamp/swamp-2.54a33ec7.ktx locations/swamp/swamp-2.479fcf95.json locations/stone_forest_thorny/stone_forest_thorny_params.45b27449.xml locations/stone_forest_thorny/stone_forest_thorny.249706d8.avif locations/stone_forest_thorny/stone_forest_thorny.d0079fab.webp locations/stone_forest_thorny/stone_forest_thorny.f80164a5.ktx locations/stone_forest_thorny/stone_forest_thorny.c4b0ee6a.json locations/stone_forest_thorny/stone_forest_thorny-2.e8039684.avif locations/stone_forest_thorny/stone_forest_thorny-2.bd2a3806.ktx locations/stone_forest_thorny/stone_forest_thorny-2.f8dc19f2.webp locations/stone_forest_thorny/stone_forest_thorny-2.c8dd7412.json locations/stone_forest/stone_forest_params.23ece840.xml locations/stone_forest/stone_forest.d4533591.avif locations/stone_forest/stone_forest.d410df7d.ktx locations/stone_forest/stone_forest.9dd732f5.webp locations/stone_forest/stone_forest.69e6bd80.json locations/stone_forest/stone_forest-2.c33fc424.avif locations/stone_forest/stone_forest-2.ea8589a7.webp locations/stone_forest/stone_forest-2.09d3f11a.ktx locations/stone_forest/stone_forest-2.adc80e92.json locations/stone_dragon/stone_dragon_params.ac096233.xml locations/stone_dragon/stone_dragon.1be335d9.ktx locations/stone_dragon/stone_dragon.64b090a3.webp locations/stone_dragon/stone_dragon.c8f00c11.avif locations/stone_dragon/stone_dragon.080f0457.json locations/stone_dragon/stone_dragon-2.36967eb2.avif locations/stone_dragon/stone_dragon-2.1f8e36dd.webp locations/stone_dragon/stone_dragon-2.65e93bfe.ktx locations/stone_dragon/stone_dragon-2.3f2d5b24.json locations/statue/statue_params.c092e27d.xml locations/statue/statue.0ac32fa5.webp locations/statue/statue.24ae8eb9.ktx locations/statue/statue.4f9a8fc8.avif locations/statue/statue.d555ef5f.json locations/statue/statue-2.552a58ae.webp locations/statue/statue-2.a4d5a481.ktx locations/statue/statue-2.e5de9d1b.avif locations/statue/statue-2.05a151cc.json locations/spaceship_thorny/spaceship_thorny_params.1653fbaf.xml locations/spaceship_thorny/spaceship_thorny.5caa0ae8.webp locations/spaceship_thorny/spaceship_thorny.3072e435.avif locations/spaceship_thorny/spaceship_thorny.f4d3ee42.ktx locations/spaceship_thorny/spaceship_thorny.4505f07f.json locations/spaceship_thorny/spaceship_thorny-2.2bd95f60.avif locations/spaceship_thorny/spaceship_thorny-2.f1faf114.webp locations/spaceship_thorny/spaceship_thorny-2.f8aefee1.ktx locations/spaceship_thorny/spaceship_thorny-2.51401e2c.json locations/spaceship/spaceship_params.8b7830fe.xml locations/spaceship/spaceship.25ff2017.webp locations/spaceship/spaceship.3a454703.avif locations/spaceship/spaceship.5d71bbca.ktx locations/spaceship/spaceship.f0736fd2.json locations/spaceship/spaceship-2.2bd95f60.avif locations/spaceship/spaceship-2.f1faf114.webp locations/spaceship/spaceship-2.f8aefee1.ktx locations/spaceship/spaceship-2.51401e2c.json locations/snowy_peak/snowy_peak_params.1c9156dd.xml locations/snowy_peak/snowy_peak.76939f0d.ktx locations/snowy_peak/snowy_peak.f65ea679.avif locations/snowy_peak/snowy_peak.008d3c86.webp locations/snowy_peak/snowy_peak.3dd5c243.json locations/snowy_peak/snowy_peak-2.1dc0d2cd.ktx locations/snowy_peak/snowy_peak-2.b8ccc2c7.avif locations/snowy_peak/snowy_peak-2.41b58548.webp locations/snowy_peak/snowy_peak-2.f7176efe.json locations/skyport/skyport_params.2ee8ed94.xml locations/skyport/skyport.3013856e.ktx locations/skyport/skyport.3c162dcc.webp locations/skyport/skyport.a8a01c24.avif locations/skyport/skyport.1d77a8ac.json locations/skyport/skyport-2.73fee97e.ktx locations/skyport/skyport-2.0d11ed31.webp locations/skyport/skyport-2.9fd1c33a.avif locations/skyport/skyport-2.30ecf4cb.json locations/ships/ships_params.3628beac.xml locations/ships/ships.88ec9cc2.avif locations/ships/ships.99a318a4.webp locations/ships/ships.89397939.ktx locations/ships/ships.e9ee8262.json locations/ships/ships-2.681fcf35.avif locations/ships/ships-2.082fffdb.webp locations/ships/ships-2.17376a46.ktx locations/ships/ships-2.fda4e3d7.json locations/shadow_gate/shadow_gate_params.8dbfc593.xml locations/shadow_gate/shadow_gate.5fb14b97.ktx locations/shadow_gate/shadow_gate.9677c24b.avif locations/shadow_gate/shadow_gate.a1d79058.webp locations/shadow_gate/shadow_gate.e463b335.json locations/shadow_gate/shadow_gate-3.77863045.avif locations/shadow_gate/shadow_gate-3.b28ba9b7.ktx locations/shadow_gate/shadow_gate-3.cebe98ea.webp locations/shadow_gate/shadow_gate-3.42bd8b2d.json locations/shadow_gate/shadow_gate-2.e0b08168.avif locations/shadow_gate/shadow_gate-2.fc121514.ktx locations/shadow_gate/shadow_gate-2.710345cf.webp locations/shadow_gate/shadow_gate-2.d3d94c3e.json locations/sakura/sakura_params.9c9c206d.xml locations/sakura/sakura.2087bfd6.avif locations/sakura/sakura.f038888a.ktx locations/sakura/sakura.7580304b.webp locations/sakura/sakura.7304dd62.json locations/sakura/sakura-4.291e21f1.avif locations/sakura/sakura-4.c1d87c9d.ktx locations/sakura/sakura-4.413496e7.webp locations/sakura/sakura-4.e44e5d1e.json locations/sakura/sakura-3.2e2f12d2.avif locations/sakura/sakura-3.af5f4951.ktx locations/sakura/sakura-3.af3d8c25.webp locations/sakura/sakura-3.d82a6cb7.json locations/sakura/sakura-2.15afdea5.avif locations/sakura/sakura-2.93505df2.ktx locations/sakura/sakura-2.2bcfaca3.webp locations/sakura/sakura-2.9bf926e8.json locations/ruins_village_small/ruins_village_small_params.44f6478f.xml locations/ruins_village_small/ruins_village_small.2a3e9c39.avif locations/ruins_village_small/ruins_village_small.90400091.ktx locations/ruins_village_small/ruins_village_small.93f0e745.webp locations/ruins_village_small/ruins_village_small.0b62ce0f.json locations/ruins_village/ruins_village_params.460608f7.xml locations/ruins_village/ruins_village.4a9fe238.avif locations/ruins_village/ruins_village.04bb087a.ktx locations/ruins_village/ruins_village.c81896dd.webp locations/ruins_village/ruins_village.3df763f2.json locations/ruins_village/ruins_village-4.efe7f661.avif locations/ruins_village/ruins_village-4.459c7193.ktx locations/ruins_village/ruins_village-4.b1e832b2.webp locations/ruins_village/ruins_village-4.ed3b7459.json locations/ruins_village/ruins_village-3.50dfe6b8.avif locations/ruins_village/ruins_village-3.4a0380f3.ktx locations/ruins_village/ruins_village-3.39d31fa6.webp locations/ruins_village/ruins_village-3.c46b115f.json locations/ruins_village/ruins_village-2.a5ff4afb.avif locations/ruins_village/ruins_village-2.357389ed.ktx locations/ruins_village/ruins_village-2.4117fbeb.webp locations/ruins_village/ruins_village-2.b0805bd3.json locations/pink_lake/pink_lake_params.e0c0b7a1.xml locations/pink_lake/pink_lake.4429e691.avif locations/pink_lake/pink_lake.8a09c1ac.ktx locations/pink_lake/pink_lake.741ca43e.webp locations/pink_lake/pink_lake.9bd5cbc6.json locations/pink_lake/pink_lake-4.92e2a1a7.avif locations/pink_lake/pink_lake-4.3eab61a3.ktx locations/pink_lake/pink_lake-4.4ea0d73a.webp locations/pink_lake/pink_lake-4.29a3bea9.json locations/pink_lake/pink_lake-3.943df51a.avif locations/pink_lake/pink_lake-3.5c81084e.ktx locations/pink_lake/pink_lake-3.41aa5fe7.webp locations/pink_lake/pink_lake-3.23ff0549.json locations/pink_lake/pink_lake-2.f3d9e30e.avif locations/pink_lake/pink_lake-2.5b48b8f2.ktx locations/pink_lake/pink_lake-2.003b14a3.webp locations/pink_lake/pink_lake-2.18928351.json locations/night_bridge/night_bridge_params.970ac6b2.xml locations/night_bridge/night_bridge.4644360a.avif locations/night_bridge/night_bridge.0cf30bf2.ktx locations/night_bridge/night_bridge.bac8e96a.webp locations/night_bridge/night_bridge.ec5a6fb3.json locations/night_bridge/night_bridge-2.ae5de5c5.avif locations/night_bridge/night_bridge-2.70993da4.ktx locations/night_bridge/night_bridge-2.0ef2f9bc.webp locations/night_bridge/night_bridge-2.7a42b217.json locations/neural_network/neural_network_params.119e1239.xml locations/neural_network/neural_network.c595b008.avif locations/neural_network/neural_network.d5d8baf9.ktx locations/neural_network/neural_network.b2add720.webp locations/neural_network/neural_network.93fd748c.json locations/neural_network/neural_network-2.2c98a96c.avif locations/neural_network/neural_network-2.89f7ed05.ktx locations/neural_network/neural_network-2.62974156.webp locations/neural_network/neural_network-2.2a54daa2.json locations/mountain/mountain_params.3ba5f07d.xml locations/mountain/mountain.638c108d.avif locations/mountain/mountain.45eeee72.ktx locations/mountain/mountain.8a73174c.webp locations/mountain/mountain.a5293962.json locations/mountain/mountain-4.1210569d.avif locations/mountain/mountain-4.3d62323e.ktx locations/mountain/mountain-4.035974eb.webp locations/mountain/mountain-4.c160ee96.json locations/mountain/mountain-3.fbff8bdc.avif locations/mountain/mountain-3.af4782ce.ktx locations/mountain/mountain-3.787ce374.webp locations/mountain/mountain-3.628eed1c.json locations/mountain/mountain-2.0a85dcb7.avif locations/mountain/mountain-2.65e0efb4.ktx locations/mountain/mountain-2.de3fff88.webp locations/mountain/mountain-2.add788c5.json locations/moon/moon_params.7821588d.xml locations/moon/moon.c6bfeb61.avif locations/moon/moon.174ce67d.ktx locations/moon/moon.8b99a657.webp locations/moon/moon.b0acd201.json locations/moon/moon-2.e995a8e4.avif locations/moon/moon-2.1cd238d9.ktx locations/moon/moon-2.44cb227f.webp locations/moon/moon-2.d5c5519d.json locations/magic_rocks/magic_rocks_params.f61fe411.xml locations/magic_rocks/magic_rocks.944a481c.avif locations/magic_rocks/magic_rocks.d69a4777.ktx locations/magic_rocks/magic_rocks.04a0b3e3.webp locations/magic_rocks/magic_rocks.dde4475f.json locations/magic_rocks/magic_rocks-2.b6cf97f7.avif locations/magic_rocks/magic_rocks-2.01dab869.ktx locations/magic_rocks/magic_rocks-2.b9135dfa.webp locations/magic_rocks/magic_rocks-2.baa3b3e0.json locations/lamps_on_water/lamps_on_water_params.3e2c3f1f.xml locations/lamps_on_water/lamps_on_water.3ea915f3.avif locations/lamps_on_water/lamps_on_water.f8711c8a.ktx locations/lamps_on_water/lamps_on_water.b43c13da.webp locations/lamps_on_water/lamps_on_water.0a7f7786.json locations/lamps_on_water/lamps_on_water-4.4fa8df3e.avif locations/lamps_on_water/lamps_on_water-4.d77df2c0.ktx locations/lamps_on_water/lamps_on_water-4.d6fd190c.webp locations/lamps_on_water/lamps_on_water-4.a0e6469c.json locations/lamps_on_water/lamps_on_water-3.858db215.avif locations/lamps_on_water/lamps_on_water-3.ff40ad37.ktx locations/lamps_on_water/lamps_on_water-3.6609a907.webp locations/lamps_on_water/lamps_on_water-3.0ba8bc53.json locations/lamps_on_water/lamps_on_water-2.e37540ce.avif locations/lamps_on_water/lamps_on_water-2.a1ab8801.ktx locations/lamps_on_water/lamps_on_water-2.471c08bc.webp locations/lamps_on_water/lamps_on_water-2.79fe91db.json locations/ice_cave/ice_cave_params.c0341ebf.xml locations/ice_cave/ice_cave.c71f5a32.avif locations/ice_cave/ice_cave.d57b28fe.ktx locations/ice_cave/ice_cave.9c7d8b63.webp locations/ice_cave/ice_cave.810eb99e.json locations/ice_cave/ice_cave-2.a07f3f34.avif locations/ice_cave/ice_cave-2.99cf4edf.ktx locations/ice_cave/ice_cave-2.53f27958.webp locations/ice_cave/ice_cave-2.3d0ce9de.json locations/heaven/heaven_params.8749d483.xml locations/heaven/heaven.a82acfe8.avif locations/heaven/heaven.518c36c1.ktx locations/heaven/heaven.5a4c8080.webp locations/heaven/heaven.463f29ca.json locations/heaven/heaven-2.c0c2211d.avif locations/heaven/heaven-2.8451f4ab.ktx locations/heaven/heaven-2.fe7b6f95.webp locations/heaven/heaven-2.c9237bfb.json locations/graveyard_ships/graveyard_ships_params.1b9d320b.xml locations/graveyard_ships/graveyard_ships.f587af8c.avif locations/graveyard_ships/graveyard_ships.7a5a5ef0.ktx locations/graveyard_ships/graveyard_ships.854b61a2.webp locations/graveyard_ships/graveyard_ships.7c0b35ee.json locations/graveyard_ships/graveyard_ships-2.e7e439fb.avif locations/graveyard_ships/graveyard_ships-2.068ff37a.ktx locations/graveyard_ships/graveyard_ships-2.4ca4fae6.webp locations/graveyard_ships/graveyard_ships-2.3c6968cd.json locations/fuji/fuji_params.e994622c.xml locations/fuji/fuji.6ca74f06.avif locations/fuji/fuji.8df166a5.ktx locations/fuji/fuji.b914dd28.webp locations/fuji/fuji.fcdeccd4.json locations/fuji/fuji-2.dbbb6102.avif locations/fuji/fuji-2.c322f2dc.ktx locations/fuji/fuji-2.0ded0a90.webp locations/fuji/fuji-2.7963c4fd.json locations/flying_rocks_small/flying_rocks_small_params.bdc303a1.xml locations/flying_rocks_small/flying_rocks_small.17f76f07.avif locations/flying_rocks_small/flying_rocks_small.d04c063f.ktx locations/flying_rocks_small/flying_rocks_small.73ef0c8c.webp locations/flying_rocks_small/flying_rocks_small.6c2d2b14.json locations/flying_rocks_small/flying_rocks_small-2.15e5a268.avif locations/flying_rocks_small/flying_rocks_small-2.43352f67.ktx locations/flying_rocks_small/flying_rocks_small-2.d64dc48e.webp locations/flying_rocks_small/flying_rocks_small-2.ac898367.json locations/flying_rocks/flying_rocks_params.1426c95a.xml locations/flying_rocks/flying_rocks.17f76f07.avif locations/flying_rocks/flying_rocks.d04c063f.ktx locations/flying_rocks/flying_rocks.73ef0c8c.webp locations/flying_rocks/flying_rocks.6c2d2b14.json locations/flying_rocks/flying_rocks-2.15e5a268.avif locations/flying_rocks/flying_rocks-2.43352f67.ktx locations/flying_rocks/flying_rocks-2.d64dc48e.webp locations/flying_rocks/flying_rocks-2.ac898367.json locations/flowers_field/flowers_field_params.b451bb6b.xml locations/flowers_field/flowers_field.0ee17bc6.avif locations/flowers_field/flowers_field.09e6df11.ktx locations/flowers_field/flowers_field.02e4ccec.webp locations/flowers_field/flowers_field.d218804e.json locations/flowers_field/flowers_field-3.dbff61bd.avif locations/flowers_field/flowers_field-3.e1f417f8.ktx locations/flowers_field/flowers_field-3.b61844f3.webp locations/flowers_field/flowers_field-3.a040bf51.json locations/flowers_field/flowers_field-2.cd953f45.avif locations/flowers_field/flowers_field-2.1b0b3b37.ktx locations/flowers_field/flowers_field-2.2d5d5e49.webp locations/flowers_field/flowers_field-2.a8f4239c.json locations/flooded_village/flooded_village_params.9e00754e.xml locations/flooded_village/flooded_village.e1dc6943.avif locations/flooded_village/flooded_village.9e776179.ktx locations/flooded_village/flooded_village.d8d96a90.webp locations/flooded_village/flooded_village.93ebd664.json locations/flooded_village/flooded_village-2.21b1d751.avif locations/flooded_village/flooded_village-2.e5ccad14.ktx locations/flooded_village/flooded_village-2.d50907bd.webp locations/flooded_village/flooded_village-2.c42a93a4.json locations/factory/factory_params.cdb051e0.xml locations/factory/factory.baf6c782.avif locations/factory/factory.bd875c4b.ktx locations/factory/factory.50ab47b5.webp locations/factory/factory.4f726188.json locations/factory/factory-2.492d1b99.avif locations/factory/factory-2.8528aab4.ktx locations/factory/factory-2.1171d160.webp locations/factory/factory-2.3fe760f2.json locations/emerald_forest/emerald_forest_params.984a60de.xml locations/emerald_forest/emerald_forest.c6a4f7d5.avif locations/emerald_forest/emerald_forest.3362b388.ktx locations/emerald_forest/emerald_forest.b8b95d43.webp locations/emerald_forest/emerald_forest.3dafa10d.json locations/emerald_forest/emerald_forest-4.86a3e8de.avif locations/emerald_forest/emerald_forest-4.3e5216c8.ktx locations/emerald_forest/emerald_forest-4.3459961b.webp locations/emerald_forest/emerald_forest-4.85c39b88.json locations/emerald_forest/emerald_forest-3.aea7ec7d.avif locations/emerald_forest/emerald_forest-3.7b13e1ea.ktx locations/emerald_forest/emerald_forest-3.ea619862.webp locations/emerald_forest/emerald_forest-3.b7d9ae64.json locations/emerald_forest/emerald_forest-2.a4bec56c.avif locations/emerald_forest/emerald_forest-2.90b86ed5.ktx locations/emerald_forest/emerald_forest-2.19b625e4.webp locations/emerald_forest/emerald_forest-2.87250622.json locations/eggs/eggs_params.1af30c17.xml locations/eggs/eggs.f0811d9b.avif locations/eggs/eggs.f5a50410.ktx locations/eggs/eggs.b45bd8e7.webp locations/eggs/eggs.ad54fa93.json locations/eggs/eggs-2.44b82c20.avif locations/eggs/eggs-2.e21bc959.ktx locations/eggs/eggs-2.e1163962.webp locations/eggs/eggs-2.46c1ac6e.json locations/dojo_shop/bg.a2830646.dds locations/dojo_shop/bg.aadaca67.ktx locations/dojo/dojo_params.b78df4b4.xml locations/dojo/dojo.781f2ea9.avif locations/dojo/dojo.adaf9a18.ktx locations/dojo/dojo.b920e18e.webp locations/dojo/dojo.d31b1e71.json locations/dark_room/dark_room_params.91ffb407.xml locations/dark_room/dark_room.6713f7d5.avif locations/dark_room/dark_room.468cb678.ktx locations/dark_room/dark_room.1c60caae.webp locations/dark_room/dark_room.fac8a036.json locations/dark_room/dark_room-2.ae807d12.avif locations/dark_room/dark_room-2.334d41a2.ktx locations/dark_room/dark_room-2.7a8fb759.webp locations/dark_room/dark_room-2.d0d7cfc2.json locations/chess_yard/chess_yard_params.ab99bc55.xml locations/chess_yard/chess_yard.ff9e7c59.avif locations/chess_yard/chess_yard.01d2480b.ktx locations/chess_yard/chess_yard.072980c2.webp locations/chess_yard/chess_yard.3bcbece2.json locations/chess_yard/chess_yard-5.1191b9be.avif locations/chess_yard/chess_yard-5.51304162.ktx locations/chess_yard/chess_yard-5.db6211e4.webp locations/chess_yard/chess_yard-5.6683e79a.json locations/chess_yard/chess_yard-4.774e6f07.avif locations/chess_yard/chess_yard-4.96d0768c.ktx locations/chess_yard/chess_yard-4.65c7a374.webp locations/chess_yard/chess_yard-4.51d41396.json locations/chess_yard/chess_yard-3.1d194c14.avif locations/chess_yard/chess_yard-3.28be2f47.ktx locations/chess_yard/chess_yard-3.c30f73d3.webp locations/chess_yard/chess_yard-3.0c66e648.json locations/chess_yard/chess_yard-2.9ca8f8cb.avif locations/chess_yard/chess_yard-2.e7c2d7bd.ktx locations/chess_yard/chess_yard-2.15043f25.webp locations/chess_yard/chess_yard-2.3de6db9b.json locations/cave/cave_params.12a69868.xml locations/cave/cave.8d6df603.avif locations/cave/cave.40acb83e.ktx locations/cave/cave.f630abe9.webp locations/cave/cave.cc12408f.json locations/cave/cave-2.b8a841f2.avif locations/cave/cave-2.01195c5e.ktx locations/cave/cave-2.4a0ff311.webp locations/cave/cave-2.750cdc11.json locations/castle_and_bridge/castle_and_bridge_params.b754b6f4.xml locations/castle_and_bridge/castle_and_bridge.3b5d11fb.avif locations/castle_and_bridge/castle_and_bridge.167269fd.ktx locations/castle_and_bridge/castle_and_bridge.bf492637.webp locations/castle_and_bridge/castle_and_bridge.b011f5de.json locations/castle_and_bridge/castle_and_bridge-3.3c975296.avif locations/castle_and_bridge/castle_and_bridge-3.51a15821.ktx locations/castle_and_bridge/castle_and_bridge-3.5e42add1.webp locations/castle_and_bridge/castle_and_bridge-3.023a538b.json locations/castle_and_bridge/castle_and_bridge-2.b881d4aa.avif locations/castle_and_bridge/castle_and_bridge-2.dcdd2448.ktx locations/castle_and_bridge/castle_and_bridge-2.e7278de4.webp locations/castle_and_bridge/castle_and_bridge-2.547f674f.json locations/capsules/capsules_params.35b1ec85.xml locations/capsules/capsules.2debfc86.avif locations/capsules/capsules.4569ce1b.ktx locations/capsules/capsules.cc94f44a.webp locations/capsules/capsules.f0f93d3f.json locations/capsules/capsules-2.6795f560.avif locations/capsules/capsules-2.79175abf.ktx locations/capsules/capsules-2.86500398.webp locations/capsules/capsules-2.e626ff39.json locations/burning_town/burning_town_params.a70a187f.xml locations/burning_town/burning_town.412d2c3c.avif locations/burning_town/burning_town.dc4da1de.ktx locations/burning_town/burning_town.819cd330.webp locations/burning_town/burning_town.320344f6.json locations/burning_town/burning_town-3.2bb6c717.avif locations/burning_town/burning_town-3.d865053e.ktx locations/burning_town/burning_town-3.6c2e35ec.webp locations/burning_town/burning_town-3.e0d8b171.json locations/burning_town/burning_town-2.77eb5835.avif locations/burning_town/burning_town-2.041fe657.ktx locations/burning_town/burning_town-2.f6725159.webp locations/burning_town/burning_town-2.c1d2aa4c.json locations/battlefield/battlefield_params.a422da97.xml locations/battlefield/battlefield.b6b10710.avif locations/battlefield/battlefield.c508b018.ktx locations/battlefield/battlefield.277fe671.webp locations/battlefield/battlefield.f3feb286.json locations/battlefield/battlefield-2.e2fd4abe.avif locations/battlefield/battlefield-2.aa996a4d.ktx locations/battlefield/battlefield-2.f41bbee0.webp locations/battlefield/battlefield-2.b1a71766.json locations/bamboo_grove/bamboo_grove_params.1e707f46.xml locations/bamboo_grove/bamboo_grove.2b3b37b8.avif locations/bamboo_grove/bamboo_grove.19183952.ktx locations/bamboo_grove/bamboo_grove.80836b4c.webp locations/bamboo_grove/bamboo_grove.de386f85.json locations/bamboo_grove/bamboo_grove-2.4c083e7c.avif locations/bamboo_grove/bamboo_grove-2.068fc230.ktx locations/bamboo_grove/bamboo_grove-2.bfc019e3.webp locations/bamboo_grove/bamboo_grove-2.0d0fbea0.json locations/autumn/autumn_params.36708eb8.xml locations/autumn/autumn.a6322b08.avif locations/autumn/autumn.2f681ec0.ktx locations/autumn/autumn.5317a89d.webp locations/autumn/autumn.88320403.json locations/autumn/autumn-2.b3217505.avif locations/autumn/autumn-2.5ffe1199.ktx locations/autumn/autumn-2.43ac6446.webp locations/autumn/autumn-2.87c85226.json locations/arena/arena_params.16ca56d9.xml locations/arena/arena.02086eed.avif locations/arena/arena.d6105efa.ktx locations/arena/arena.7995a5ab.webp locations/arena/arena.ca2949ef.json locations/arena/arena-2.9b20abca.avif locations/arena/arena-2.96073001.ktx locations/arena/arena-2.ef3e4c52.webp locations/arena/arena-2.586e4f15.json loader/logo.59aab4ea.png loader/bg.cd251308.jpg list.de3ed11b.xml lang/tr.aa266951.xml lang/ru.f799f0ce.xml lang/pt.7e3a5246.xml lang/ko.54bb7a43.xml lang/ja.3e2d14d7.xml lang/it.c4b231b7.xml lang/fr.eb58d46b.xml lang/es.b10cc8bd.xml lang/en.cb65c72d.xml lang/de.a1ebd391.xml items/proxy.a8608659.dds items/proxy.011589cf.ktx items/proxy.1c1df98c.json items/images-1x/weapon9/img_weapon_super_sai.d492b5c3.ktx items/images-1x/weapon9/img_weapon_super_sai.9d9abe21.dds items/images-2x/weapon9/img_weapon_super_sai.3571128a.dds items/images-2x/weapon9/img_weapon_super_sai.d21598f2.ktx items/images-1x/weapon9/img_weapon_dadao.11fe95d2.dds items/images-1x/weapon9/img_weapon_dadao.bd22d6bb.ktx items/images-2x/weapon9/img_weapon_dadao.11b3cbfd.dds items/images-2x/weapon9/img_weapon_dadao.592cfee0.ktx items/images-1x/weapon9/img_weapon_composite_scythe.2714c792.ktx items/images-1x/weapon9/img_weapon_composite_scythe.d3fb7537.dds items/images-2x/weapon9/img_weapon_composite_scythe.6e72930b.dds items/images-2x/weapon9/img_weapon_composite_scythe.24aa8164.ktx items/images-1x/weapon9/img_weapon_ceremonial_shuang_gou.ec5f5c33.dds items/images-1x/weapon9/img_weapon_ceremonial_shuang_gou.44872b9b.ktx items/images-2x/weapon9/img_weapon_ceremonial_shuang_gou.ebfc6c3e.dds items/images-2x/weapon9/img_weapon_ceremonial_shuang_gou.0ba73856.ktx items/images-1x/weapon9/img_weapon_battle_hammers.6db377f6.dds items/images-1x/weapon9/img_weapon_battle_hammers.403121cf.ktx items/images-2x/weapon9/img_weapon_battle_hammers.f332f52b.dds items/images-2x/weapon9/img_weapon_battle_hammers.966643b3.ktx items/images-1x/weapon8/img_weapon_two_handed_mace.3a5ab073.dds items/images-1x/weapon8/img_weapon_two_handed_mace.140a2592.ktx items/images-2x/weapon8/img_weapon_two_handed_mace.f543cb02.dds items/images-2x/weapon8/img_weapon_two_handed_mace.af58c4bf.ktx items/images-1x/weapon8/img_weapon_super_staff.fb5e7007.ktx items/images-1x/weapon8/img_weapon_super_staff.4bdf5659.dds items/images-2x/weapon8/img_weapon_super_staff.a388774f.dds items/images-2x/weapon8/img_weapon_super_staff.b0795099.ktx items/images-1x/weapon8/img_weapon_silver_glaive.7f519e68.dds items/images-1x/weapon8/img_weapon_silver_glaive.595add2a.ktx items/images-2x/weapon8/img_weapon_silver_glaive.1e44736e.dds items/images-2x/weapon8/img_weapon_silver_glaive.5f012af2.ktx items/images-1x/weapon8/img_weapon_sickles.ae4f5e57.ktx items/images-1x/weapon8/img_weapon_sickles.826bb2f3.dds items/images-2x/weapon8/img_weapon_sickles.33fb3109.dds items/images-2x/weapon8/img_weapon_sickles.4636bae7.ktx items/images-1x/weapon8/img_weapon_moon_sabers.13c05f1f.dds items/images-1x/weapon8/img_weapon_moon_sabers.c0cadf76.ktx items/images-2x/weapon8/img_weapon_moon_sabers.cc72d8dc.dds items/images-2x/weapon8/img_weapon_moon_sabers.73f5396a.ktx items/images-1x/weapon8/img_weapon_magari_yari.29675860.dds items/images-1x/weapon8/img_weapon_magari_yari.63c0ccd5.ktx items/images-2x/weapon8/img_weapon_magari_yari.b0e0023e.dds items/images-2x/weapon8/img_weapon_magari_yari.5ab8b54b.ktx items/images-1x/weapon6/img_weapon_two_handed_cudgel.11e1a2d9.ktx items/images-1x/weapon6/img_weapon_two_handed_cudgel.7ac1922a.dds items/images-2x/weapon6/img_weapon_two_handed_cudgel.5808ffa7.dds items/images-2x/weapon6/img_weapon_two_handed_cudgel.3b1ccc25.ktx items/images-1x/weapon6/img_weapon_super_knuckles.a42dc86c.ktx items/images-1x/weapon6/img_weapon_super_knuckles.fd8c102f.dds items/images-2x/weapon6/img_weapon_super_knuckles.8f748c7d.dds items/images-2x/weapon6/img_weapon_super_knuckles.6351806e.ktx items/images-1x/weapon6/img_weapon_super_khopesh.38756269.dds items/images-1x/weapon6/img_weapon_super_khopesh.8db31f82.ktx items/images-2x/weapon6/img_weapon_super_khopesh.97732fed.dds items/images-2x/weapon6/img_weapon_super_khopesh.9f2d2a6b.ktx items/images-1x/weapon6/img_weapon_maces.ab7bd1fd.ktx items/images-1x/weapon6/img_weapon_maces.30cdf50c.dds items/images-2x/weapon6/img_weapon_maces.a7192c91.dds items/images-2x/weapon6/img_weapon_maces.21a973f6.ktx items/images-1x/weapon6/img_weapon_labrys_axes.732a76d7.dds items/images-1x/weapon6/img_weapon_labrys_axes.df66b7d3.ktx items/images-2x/weapon6/img_weapon_labrys_axes.1f750ade.dds items/images-2x/weapon6/img_weapon_labrys_axes.e2cb5ef4.ktx items/images-1x/weapon6/img_weapon_kusarigama.f719e694.ktx items/images-1x/weapon6/img_weapon_kusarigama.dafa5018.dds items/images-2x/weapon6/img_weapon_kusarigama.eae6eb63.dds items/images-2x/weapon6/img_weapon_kusarigama.d82f25a6.ktx items/images-1x/weapon6/img_weapon_golden_katana.82a5d332.dds items/images-1x/weapon6/img_weapon_golden_katana.256abf24.ktx items/images-2x/weapon6/img_weapon_golden_katana.ef719161.dds items/images-2x/weapon6/img_weapon_golden_katana.5769a39f.ktx items/images-1x/weapon6/img_weapon_glaive.0ab68ee1.ktx items/images-1x/weapon6/img_weapon_glaive.e7a801bf.dds items/images-2x/weapon6/img_weapon_glaive.9e26ddfa.dds items/images-2x/weapon6/img_weapon_glaive.8d898c40.ktx items/images-1x/weapon6/img_weapon_butterfly_swords.71b8e028.dds items/images-1x/weapon6/img_weapon_butterfly_swords.56aa8155.ktx items/images-2x/weapon6/img_weapon_butterfly_swords.2b0923e4.dds items/images-2x/weapon6/img_weapon_butterfly_swords.35832f1b.ktx items/images-1x/weapon5/img_weapon_yari.5198e6b4.dds items/images-1x/weapon5/img_weapon_yari.e4d53c1b.ktx items/images-2x/weapon5/img_weapon_yari.9e3949cb.dds items/images-2x/weapon5/img_weapon_yari.f76d4c52.ktx items/images-1x/weapon5/img_weapon_super_glaive.5a477939.dds items/images-1x/weapon5/img_weapon_super_glaive.ead01cf8.ktx items/images-2x/weapon5/img_weapon_super_glaive.85fb2937.dds items/images-2x/weapon5/img_weapon_super_glaive.0151a070.ktx items/images-1x/weapon5/img_weapon_chinese_sabers.16c89736.dds items/images-1x/weapon5/img_weapon_chinese_sabers.1cfb591f.ktx items/images-2x/weapon5/img_weapon_chinese_sabers.35c4596b.dds items/images-2x/weapon5/img_weapon_chinese_sabers.5e699be6.ktx items/images-1x/weapon4/img_weapon_super_dadao.9ed4c484.dds items/images-1x/weapon4/img_weapon_super_dadao.d7c91322.ktx items/images-2x/weapon4/img_weapon_super_dadao.f8f70fd1.dds items/images-2x/weapon4/img_weapon_super_dadao.c58bbff9.ktx items/images-1x/weapon4/img_weapon_stilettos.64e03e80.ktx items/images-1x/weapon4/img_weapon_stilettos.4f163c5c.dds items/images-2x/weapon4/img_weapon_stilettos.a784da43.dds items/images-2x/weapon4/img_weapon_stilettos.f0c1ae6c.ktx items/images-1x/weapon4/img_weapon_steel_claws.13ce02d3.dds items/images-1x/weapon4/img_weapon_steel_claws.0f1abc23.ktx items/images-2x/weapon4/img_weapon_steel_claws.391dd599.dds items/images-2x/weapon4/img_weapon_steel_claws.a98d07ed.ktx items/images-1x/weapon4/img_weapon_heavy_staff.09084cad.ktx items/images-1x/weapon4/img_weapon_heavy_staff.a47f65a3.dds items/images-2x/weapon4/img_weapon_heavy_staff.9ccf4c8c.dds items/images-2x/weapon4/img_weapon_heavy_staff.b2104ce6.ktx items/images-1x/weapon4/img_weapon_big_swords.0b215d83.dds items/images-1x/weapon4/img_weapon_big_swords.583e4374.ktx items/images-2x/weapon4/img_weapon_big_swords.1e4b3505.dds items/images-2x/weapon4/img_weapon_big_swords.bc230a74.ktx items/images-1x/weapon4/img_weapon_axes.f639f8d6.ktx items/images-1x/weapon4/img_weapon_axes.12a1244c.dds items/images-2x/weapon4/img_weapon_axes.cd71d69b.dds items/images-2x/weapon4/img_weapon_axes.ec649737.ktx items/images-1x/weapon3/img_weapon_swords.99e8dad8.dds items/images-1x/weapon3/img_weapon_swords.68f42e05.ktx items/images-2x/weapon3/img_weapon_swords.5a147de3.dds items/images-2x/weapon3/img_weapon_swords.f25a6cbf.ktx items/images-1x/weapon3/img_weapon_super_spear.78373998.dds items/images-1x/weapon3/img_weapon_super_spear.1ea0af4e.ktx items/images-2x/weapon3/img_weapon_super_spear.f12d9350.dds items/images-2x/weapon3/img_weapon_super_spear.5733791d.ktx items/images-1x/weapon3/img_weapon_steel_nunchaku.28f974ed.dds items/images-1x/weapon3/img_weapon_steel_nunchaku.a74452b1.ktx items/images-2x/weapon3/img_weapon_steel_nunchaku.4a0fb454.dds items/images-2x/weapon3/img_weapon_steel_nunchaku.c3a9d929.ktx items/images-1x/weapon3/img_weapon_shuang_gou.bfe0d909.ktx items/images-1x/weapon3/img_weapon_shuang_gou.b742dfb0.dds items/images-2x/weapon3/img_weapon_shuang_gou.34dd24ef.dds items/images-2x/weapon3/img_weapon_shuang_gou.e61ae090.ktx items/images-1x/weapon25/img_weapon_sectional_scythe.b0928656.dds items/images-1x/weapon25/img_weapon_sectional_scythe.9cbc22b4.ktx items/images-2x/weapon25/img_weapon_sectional_scythe.0db61fd2.dds items/images-2x/weapon25/img_weapon_sectional_scythe.452eddfe.ktx items/images-1x/weapon25/img_weapon_nunchaku.e4ebdb4a.ktx items/images-1x/weapon25/img_weapon_nunchaku.4e301ca3.dds items/images-2x/weapon25/img_weapon_nunchaku.dbfa0226.dds items/images-2x/weapon25/img_weapon_nunchaku.d7b3104d.ktx items/images-1x/weapon25/img_weapon_naginata.9d651595.dds items/images-1x/weapon25/img_weapon_naginata.0f565ab7.ktx items/images-2x/weapon25/img_weapon_naginata.d42fe3ac.dds items/images-2x/weapon25/img_weapon_naginata.0f406c03.ktx items/images-1x/weapon24/img_weapon_wanderer_staff.a70b89e6.ktx items/images-1x/weapon24/img_weapon_wanderer_staff.faabf47f.dds items/images-2x/weapon24/img_weapon_wanderer_staff.d5837c9b.dds items/images-2x/weapon24/img_weapon_wanderer_staff.f6368bbe.ktx items/images-1x/weapon24/img_weapon_val17_trident.70f592de.dds items/images-1x/weapon24/img_weapon_val17_trident.02a87dd9.ktx items/images-2x/weapon24/img_weapon_val17_trident.405c90aa.dds items/images-2x/weapon24/img_weapon_val17_trident.a4f1d6d1.ktx items/images-1x/weapon24/img_weapon_val17_sai.da54c79e.ktx items/images-1x/weapon24/img_weapon_val17_sai.ef676ce4.dds items/images-2x/weapon24/img_weapon_val17_sai.6c908ea7.dds items/images-2x/weapon24/img_weapon_val17_sai.963ec4df.ktx items/images-1x/weapon24/img_weapon_val17_fans.1c5bbeea.dds items/images-1x/weapon24/img_weapon_val17_fans.0c9cc175.ktx items/images-2x/weapon24/img_weapon_val17_fans.b505f8d8.dds items/images-2x/weapon24/img_weapon_val17_fans.14445b4c.ktx items/images-1x/weapon24/img_weapon_tonfa_guns.174148eb.dds items/images-1x/weapon24/img_weapon_tonfa_guns.ab32a2b8.ktx items/images-2x/weapon24/img_weapon_tonfa_guns.c8d9da13.dds items/images-2x/weapon24/img_weapon_tonfa_guns.a8e024a4.ktx items/images-1x/weapon24/img_weapon_hermit_swords.ecd858d9.dds items/images-1x/weapon24/img_weapon_hermit_swords.5f98b29a.ktx items/images-2x/weapon24/img_weapon_hermit_swords.1643f1d9.dds items/images-2x/weapon24/img_weapon_hermit_swords.b1654059.ktx items/images-1x/weapon24/img_weapon_boss_naginata.d40e61b2.ktx items/images-1x/weapon24/img_weapon_boss_naginata.dad092ef.dds items/images-2x/weapon24/img_weapon_boss_naginata.6ed4fa31.dds items/images-2x/weapon24/img_weapon_boss_naginata.37c1865b.ktx items/images-1x/weapon23/img_weapon_tec_knives.401b54a7.dds items/images-1x/weapon23/img_weapon_tec_knives.4932ae89.ktx items/images-2x/weapon23/img_weapon_tec_knives.dfcdc983.dds items/images-2x/weapon23/img_weapon_tec_knives.f6bd764f.ktx items/images-1x/weapon23/img_weapon_tec_glaive.2041ecb4.dds items/images-1x/weapon23/img_weapon_tec_glaive.045f83bf.ktx items/images-2x/weapon23/img_weapon_tec_glaive.12ce6400.dds items/images-2x/weapon23/img_weapon_tec_glaive.995e0bc6.ktx items/images-1x/weapon23/img_weapon_super_sabers.1fc585c1.dds items/images-1x/weapon23/img_weapon_super_sabers.dc5a8f2a.ktx items/images-2x/weapon23/img_weapon_super_sabers.a041aec7.dds items/images-2x/weapon23/img_weapon_super_sabers.17ee1e93.ktx items/images-1x/weapon23/img_weapon_super_poleaxe.76797185.ktx items/images-1x/weapon23/img_weapon_super_poleaxe.8e1e6693.dds items/images-2x/weapon23/img_weapon_super_poleaxe.cf5e08e0.dds items/images-2x/weapon23/img_weapon_super_poleaxe.50fcc950.ktx items/images-1x/weapon23/img_weapon_super_knives.5f3cc4f4.dds items/images-1x/weapon23/img_weapon_super_knives.c39dc824.ktx items/images-2x/weapon23/img_weapon_super_knives.6fbfba3f.dds items/images-2x/weapon23/img_weapon_super_knives.7d146f6f.ktx items/images-1x/weapon23/img_weapon_super_katana_set.c021822c.ktx items/images-1x/weapon23/img_weapon_super_katana_set.ca9d7647.dds items/images-2x/weapon23/img_weapon_super_katana_set.a6d273c8.dds items/images-2x/weapon23/img_weapon_super_katana_set.065607dd.ktx items/images-1x/weapon22/img_weapon_starter_pack_tonfa.8f1dc0b0.dds items/images-1x/weapon22/img_weapon_starter_pack_tonfa.f3dae7bd.ktx items/images-2x/weapon22/img_weapon_starter_pack_tonfa.bfab82fe.dds items/images-2x/weapon22/img_weapon_starter_pack_tonfa.2e52c237.ktx items/images-1x/weapon21/img_weapon_katana.ac5685c3.ktx items/images-1x/weapon21/img_weapon_katana.842c2474.dds items/images-2x/weapon21/img_weapon_katana.2846918c.dds items/images-2x/weapon21/img_weapon_katana.406137d7.ktx items/images-1x/weapon21/img_weapon_im_knuckles.d9f3228b.dds items/images-1x/weapon21/img_weapon_im_knuckles.2c4d1d25.ktx items/images-2x/weapon21/img_weapon_im_knuckles.dd8489bf.dds items/images-2x/weapon21/img_weapon_im_knuckles.4396ffbc.ktx items/images-1x/weapon21/img_weapon_hw16_sickles.a6ec50e2.ktx items/images-1x/weapon21/img_weapon_hw16_sickles.2745903f.dds items/images-2x/weapon21/img_weapon_hw16_sickles.64b7136a.dds items/images-2x/weapon21/img_weapon_hw16_sickles.d9fc2447.ktx items/images-1x/weapon21/img_weapon_hw16_scythe.a99014c2.dds items/images-1x/weapon21/img_weapon_hw16_scythe.d3832f1d.ktx items/images-2x/weapon21/img_weapon_hw16_scythe.5a5de14e.dds items/images-2x/weapon21/img_weapon_hw16_scythe.1315451a.ktx items/images-1x/weapon21/img_weapon_hw15_broom.a7d700fb.ktx items/images-1x/weapon21/img_weapon_hw15_broom.cc7fa93e.dds items/images-2x/weapon21/img_weapon_hw15_broom.8be12686.dds items/images-2x/weapon21/img_weapon_hw15_broom.71e89e5c.ktx items/images-1x/weapon21/img_weapon_heavy_kusarigama.98f968ed.dds items/images-1x/weapon21/img_weapon_heavy_kusarigama.b8c895b2.ktx items/images-2x/weapon21/img_weapon_heavy_kusarigama.18298c5c.dds items/images-2x/weapon21/img_weapon_heavy_kusarigama.4343289c.ktx items/images-1x/weapon21/img_weapon_dadao_janissary.90ac3003.dds items/images-1x/weapon21/img_weapon_dadao_janissary.159e3226.ktx items/images-2x/weapon21/img_weapon_dadao_janissary.d253c184.dds items/images-2x/weapon21/img_weapon_dadao_janissary.e3e2e4a9.ktx items/images-1x/weapon20/img_weapon_hw15_scythe.47517d64.dds items/images-1x/weapon20/img_weapon_hw15_scythe.0d88c784.ktx items/images-2x/weapon20/img_weapon_hw15_scythe.322a6d77.dds items/images-2x/weapon20/img_weapon_hw15_scythe.d743e794.ktx items/images-1x/weapon20/img_weapon_hw14_broom.12565611.dds items/images-1x/weapon20/img_weapon_hw14_broom.231e2df3.ktx items/images-2x/weapon20/img_weapon_hw14_broom.fb9a8de8.dds items/images-2x/weapon20/img_weapon_hw14_broom.95d49d30.ktx items/images-1x/weapon20/img_weapon_giant_sword.fce82437.dds items/images-1x/weapon20/img_weapon_giant_sword.f0e86cb0.ktx items/images-2x/weapon20/img_weapon_giant_sword.2ff0bbf8.dds items/images-2x/weapon20/img_weapon_giant_sword.c38ab2c4.ktx items/images-1x/weapon20/img_weapon_fan.c87a9a61.ktx items/images-1x/weapon20/img_weapon_fan.a5a533cf.dds items/images-2x/weapon20/img_weapon_fan.c433e40b.dds items/images-2x/weapon20/img_weapon_fan.6918b8b4.ktx items/images-1x/weapon20/img_weapon_crusher.f794741f.dds items/images-1x/weapon20/img_weapon_crusher.3e52d969.ktx items/images-2x/weapon20/img_weapon_crusher.27c871c0.dds items/images-2x/weapon20/img_weapon_crusher.9cf65e42.ktx items/images-1x/weapon2/img_weapon_tonfa.74ffc32a.ktx items/images-1x/weapon2/img_weapon_tonfa.7f9d9043.dds items/images-2x/weapon2/img_weapon_tonfa.8c944946.dds items/images-2x/weapon2/img_weapon_tonfa.97897ef4.ktx items/images-1x/weapon2/img_weapon_super_hammers.12b4f67e.dds items/images-1x/weapon2/img_weapon_super_hammers.5402bb89.ktx items/images-2x/weapon2/img_weapon_super_hammers.8d9e8744.dds items/images-2x/weapon2/img_weapon_super_hammers.70b71079.ktx items/images-1x/weapon2/img_weapon_super_axes.67828b1c.ktx items/images-1x/weapon2/img_weapon_super_axes.9e327854.dds items/images-2x/weapon2/img_weapon_super_axes.aeb8da5d.dds items/images-2x/weapon2/img_weapon_super_axes.79f8613e.ktx items/images-1x/weapon2/img_weapon_staff.639fa3e0.dds items/images-1x/weapon2/img_weapon_staff.d3685ef2.ktx items/images-2x/weapon2/img_weapon_staff.11af0d40.dds items/images-2x/weapon2/img_weapon_staff.6fcfb05a.ktx items/images-1x/weapon2/img_weapon_keris.11f52d47.ktx items/images-1x/weapon2/img_weapon_keris.b534d593.dds items/images-2x/weapon2/img_weapon_keris.f9a1eccf.dds items/images-2x/weapon2/img_weapon_keris.15c21d7b.ktx items/images-1x/weapon2/img_weapon_crescent_knives.0e6840d0.dds items/images-1x/weapon2/img_weapon_crescent_knives.a693a484.ktx items/images-2x/weapon2/img_weapon_crescent_knives.f36b6fd3.dds items/images-2x/weapon2/img_weapon_crescent_knives.72292569.ktx items/images-1x/weapon19/img_weapon_claws.1252af13.dds items/images-1x/weapon19/img_weapon_claws.bd2db3c0.ktx items/images-2x/weapon19/img_weapon_claws.bcd307e9.dds items/images-2x/weapon19/img_weapon_claws.0c119d02.ktx items/images-1x/weapon19/img_weapon_chinese_swords.44764d56.dds items/images-1x/weapon19/img_weapon_chinese_swords.db7fbee8.ktx items/images-2x/weapon19/img_weapon_chinese_swords.beb7e311.dds items/images-2x/weapon19/img_weapon_chinese_swords.12bfc7fe.ktx items/images-1x/weapon19/img_weapon_c2_z5_dragon_knives.c0159868.ktx items/images-1x/weapon19/img_weapon_c2_z5_dragon_knives.6275b886.dds items/images-2x/weapon19/img_weapon_c2_z5_dragon_knives.8aca0db2.dds items/images-2x/weapon19/img_weapon_c2_z5_dragon_knives.f17126cd.ktx items/images-1x/weapon19/img_weapon_c2_z3_sentinel_spear.0778fea2.dds items/images-1x/weapon19/img_weapon_c2_z3_sentinel_spear.c3c08ddc.ktx items/images-2x/weapon19/img_weapon_c2_z3_sentinel_spear.c2777490.dds items/images-2x/weapon19/img_weapon_c2_z3_sentinel_spear.2eff9744.ktx items/images-1x/weapon19/img_weapon_c2_z2_monk_katar.05956757.dds items/images-1x/weapon19/img_weapon_c2_z2_monk_katar.3aa89af3.ktx items/images-2x/weapon19/img_weapon_c2_z2_monk_katar.33054cb3.dds items/images-2x/weapon19/img_weapon_c2_z2_monk_katar.3e71f85e.ktx items/images-1x/weapon19/img_weapon_c1_z4_sword.2310e1f3.dds items/images-1x/weapon19/img_weapon_c1_z4_sword.a61f3731.ktx items/images-2x/weapon19/img_weapon_c1_z4_sword.ac1382b3.dds items/images-2x/weapon19/img_weapon_c1_z4_sword.778f13ca.ktx items/images-1x/weapon19/img_weapon_anniversary_10th.50aae634.ktx items/images-1x/weapon19/img_weapon_anniversary_10th.d56329e1.dds items/images-2x/weapon19/img_weapon_anniversary_10th.eec26de1.dds items/images-2x/weapon19/img_weapon_anniversary_10th.812f5ca7.ktx items/images-1x/weapon18/img_weapon_claws.1252af13.dds items/images-1x/weapon18/img_weapon_claws.bd2db3c0.ktx items/images-2x/weapon18/img_weapon_claws.bcd307e9.dds items/images-2x/weapon18/img_weapon_claws.0c119d02.ktx items/images-1x/weapon18/img_weapon_butcher_knives.85d51254.dds items/images-1x/weapon18/img_weapon_butcher_knives.c7771c5f.ktx items/images-2x/weapon18/img_weapon_butcher_knives.56e2a274.dds items/images-2x/weapon18/img_weapon_butcher_knives.941d0631.ktx items/images-1x/weapon18/img_weapon_boss_swords.967380a0.dds items/images-1x/weapon18/img_weapon_boss_swords.8f56235a.ktx items/images-2x/weapon18/img_weapon_boss_swords.bf2e9374.dds items/images-2x/weapon18/img_weapon_boss_swords.02277d77.ktx items/images-1x/weapon18/img_weapon_boss_claws.3871626b.ktx items/images-1x/weapon18/img_weapon_boss_claws.8c55fd49.dds items/images-2x/weapon18/img_weapon_boss_claws.908a4845.dds items/images-2x/weapon18/img_weapon_boss_claws.98430915.ktx items/images-1x/weapon17/img_weapon_boss_hatchets.726d42d7.dds items/images-1x/weapon17/img_weapon_boss_hatchets.19e32507.ktx items/images-2x/weapon17/img_weapon_boss_hatchets.70fc4751.dds items/images-2x/weapon17/img_weapon_boss_hatchets.e358809a.ktx items/images-1x/weapon17/img_weapon_boss_giant_sword.548204ee.ktx items/images-1x/weapon17/img_weapon_boss_giant_sword.26abb405.dds items/images-2x/weapon17/img_weapon_boss_giant_sword.570736f4.dds items/images-2x/weapon17/img_weapon_boss_giant_sword.3420f506.ktx items/images-1x/weapon17/img_weapon_boss_fans.ea7151c0.dds items/images-1x/weapon17/img_weapon_boss_fans.c046aab2.ktx items/images-2x/weapon17/img_weapon_boss_fans.f15cb571.dds items/images-2x/weapon17/img_weapon_boss_fans.a80a697c.ktx items/images-1x/weapon17/img_weapon_boss_daisho.49c9365f.ktx items/images-1x/weapon17/img_weapon_boss_daisho.f8efff0e.dds items/images-2x/weapon17/img_weapon_boss_daisho.61478c70.dds items/images-2x/weapon17/img_weapon_boss_daisho.271d7c96.ktx items/images-1x/weapon17/img_weapon_batons.e7d93c0a.dds items/images-1x/weapon17/img_weapon_batons.bd81454b.ktx items/images-2x/weapon17/img_weapon_batons.0f22b7f7.dds items/images-2x/weapon17/img_weapon_batons.7de59653.ktx items/images-1x/weapon16/img_weapon_val18_panda.b722e98f.dds items/images-1x/weapon16/img_weapon_val18_panda.1611471d.ktx items/images-2x/weapon16/img_weapon_val18_panda.630506d6.dds items/images-2x/weapon16/img_weapon_val18_panda.bdb6b00c.ktx items/images-1x/weapon16/img_weapon_ny18_mace.7d058848.dds items/images-1x/weapon16/img_weapon_ny18_mace.1de6629d.ktx items/images-2x/weapon16/img_weapon_ny18_mace.fc5a1c9b.dds items/images-2x/weapon16/img_weapon_ny18_mace.a0701371.ktx items/images-1x/weapon16/img_weapon_ny18_axes.40805002.ktx items/images-1x/weapon16/img_weapon_ny18_axes.fe2ff381.dds items/images-2x/weapon16/img_weapon_ny18_axes.7c2bcae7.dds items/images-2x/weapon16/img_weapon_ny18_axes.c9823686.ktx items/images-1x/weapon16/img_weapon_hw17_staff.d645f279.dds items/images-1x/weapon16/img_weapon_hw17_staff.55729e87.ktx items/images-2x/weapon16/img_weapon_hw17_staff.11cac851.dds items/images-2x/weapon16/img_weapon_hw17_staff.1cd5bfc6.ktx items/images-1x/weapon16/img_weapon_hw17_daggers.4cf4acbc.ktx items/images-1x/weapon16/img_weapon_hw17_daggers.7b41574a.dds items/images-2x/weapon16/img_weapon_hw17_daggers.92a0d3b3.dds items/images-2x/weapon16/img_weapon_hw17_daggers.7da7077e.ktx items/images-1x/weapon16/img_weapon_chny18_staff.d275c83b.dds items/images-1x/weapon16/img_weapon_chny18_staff.42af36da.ktx items/images-2x/weapon16/img_weapon_chny18_staff.9d60e1ba.dds items/images-2x/weapon16/img_weapon_chny18_staff.02be8df1.ktx items/images-1x/weapon15/img_weapon_rifle.9f6fd922.ktx items/images-1x/weapon15/img_weapon_rifle.399dedbe.dds items/images-2x/weapon15/img_weapon_rifle.324f2881.dds items/images-2x/weapon15/img_weapon_rifle.d332508d.ktx items/images-1x/weapon15/img_weapon_knobsticks.e8fcec47.dds items/images-1x/weapon15/img_weapon_knobsticks.2401b383.ktx items/images-2x/weapon15/img_weapon_knobsticks.cdc5005c.dds items/images-2x/weapon15/img_weapon_knobsticks.81757005.ktx items/images-1x/weapon15/img_weapon_glaivebow.9120de5c.dds items/images-1x/weapon15/img_weapon_glaivebow.ca4abe18.ktx items/images-2x/weapon15/img_weapon_glaivebow.1d3bff57.dds items/images-2x/weapon15/img_weapon_glaivebow.bd49edda.ktx items/images-1x/weapon15/img_weapon_fire_batons.fbcbaca3.dds items/images-1x/weapon15/img_weapon_fire_batons.df19e562.ktx items/images-2x/weapon15/img_weapon_fire_batons.9f18bd77.dds items/images-2x/weapon15/img_weapon_fire_batons.9666f436.ktx items/images-1x/weapon15/img_weapon_electro_hammers.ea5d4edc.dds items/images-1x/weapon15/img_weapon_electro_hammers.2cb7ad71.ktx items/images-2x/weapon15/img_weapon_electro_hammers.426de451.dds items/images-2x/weapon15/img_weapon_electro_hammers.43d001d2.ktx items/images-1x/weapon14/img_weapon_super_composite_sword.f347f58b.dds items/images-1x/weapon14/img_weapon_super_composite_sword.2555190b.ktx items/images-2x/weapon14/img_weapon_super_composite_sword.c15f1f71.dds items/images-2x/weapon14/img_weapon_super_composite_sword.934a64bf.ktx items/images-1x/weapon14/img_weapon_shocker_claws.3a443b45.ktx items/images-1x/weapon14/img_weapon_shocker_claws.fd636cf9.dds items/images-2x/weapon14/img_weapon_shocker_claws.4e3d0002.dds items/images-2x/weapon14/img_weapon_shocker_claws.08b9daef.ktx items/images-1x/weapon14/img_weapon_power_fists.39cd2c5a.dds items/images-1x/weapon14/img_weapon_power_fists.0d79d417.ktx items/images-2x/weapon14/img_weapon_power_fists.4d1b63c7.dds items/images-2x/weapon14/img_weapon_power_fists.8761cc6e.ktx items/images-1x/weapon14/img_weapon_composite_staff.deda3146.dds items/images-1x/weapon14/img_weapon_composite_staff.2a2a6a4e.ktx items/images-2x/weapon14/img_weapon_composite_staff.87ea5366.dds items/images-2x/weapon14/img_weapon_composite_staff.adce7e5f.ktx items/images-1x/weapon14/img_weapon_composite_spear.a14df1c6.dds items/images-1x/weapon14/img_weapon_composite_spear.7f3e03dd.ktx items/images-2x/weapon14/img_weapon_composite_spear.fa7f8cbd.dds items/images-2x/weapon14/img_weapon_composite_spear.5105bb02.ktx items/images-1x/weapon13/img_weapon_super_fans.c180103f.ktx items/images-1x/weapon13/img_weapon_super_fans.ea98c752.dds items/images-2x/weapon13/img_weapon_super_fans.666f221a.dds items/images-2x/weapon13/img_weapon_super_fans.2c6a0096.ktx items/images-1x/weapon13/img_weapon_im_sai.3f5fdf93.ktx items/images-1x/weapon13/img_weapon_im_sai.62a8eadf.dds items/images-2x/weapon13/img_weapon_im_sai.24bfb8ac.dds items/images-2x/weapon13/img_weapon_im_sai.4017804f.ktx items/images-1x/weapon13/img_weapon_im_katana.5ef20092.ktx items/images-1x/weapon13/img_weapon_im_katana.5b71c641.dds items/images-2x/weapon13/img_weapon_im_katana.7b5b0595.dds items/images-2x/weapon13/img_weapon_im_katana.d2528518.ktx items/images-1x/weapon13/img_weapon_im_claws.22538377.dds items/images-1x/weapon13/img_weapon_im_claws.7a834a65.ktx items/images-2x/weapon13/img_weapon_im_claws.f5823363.dds items/images-2x/weapon13/img_weapon_im_claws.e04f4fc3.ktx items/images-1x/weapon12/img_weapon_super_tonfa.e142db15.dds items/images-1x/weapon12/img_weapon_super_tonfa.004a7140.ktx items/images-2x/weapon12/img_weapon_super_tonfa.c9efb844.dds items/images-2x/weapon12/img_weapon_super_tonfa.4d05f7f6.ktx items/images-1x/weapon12/img_weapon_super_machete.00e3e816.dds items/images-1x/weapon12/img_weapon_super_machete.1cec9ba6.ktx items/images-2x/weapon12/img_weapon_super_machete.a3219eb7.dds items/images-2x/weapon12/img_weapon_super_machete.f18e1b24.ktx items/images-1x/weapon12/img_weapon_im_swords.92a6dea6.ktx items/images-1x/weapon12/img_weapon_im_swords.180251ff.dds items/images-2x/weapon12/img_weapon_im_swords.0a5176ed.dds items/images-2x/weapon12/img_weapon_im_swords.41c58c08.ktx items/images-1x/weapon12/img_weapon_im_staff.880e83bf.dds items/images-1x/weapon12/img_weapon_im_staff.23735109.ktx items/images-2x/weapon12/img_weapon_im_staff.d8b7aed5.dds items/images-2x/weapon12/img_weapon_im_staff.26d7f40b.ktx items/images-1x/weapon12/img_weapon_im_morningstars.fbfe43cc.ktx items/images-1x/weapon12/img_weapon_im_morningstars.8bb0a5b9.dds items/images-2x/weapon12/img_weapon_im_morningstars.ce6841df.dds items/images-2x/weapon12/img_weapon_im_morningstars.1d0ca3c8.ktx items/images-1x/weapon12/img_weapon_im_glaive.561f2f59.dds items/images-1x/weapon12/img_weapon_im_glaive.1946e30e.ktx items/images-2x/weapon12/img_weapon_im_glaive.d469dafd.dds items/images-2x/weapon12/img_weapon_im_glaive.1b13a820.ktx items/images-1x/weapon11/img_weapon_xmas16_glaive.2028d006.ktx items/images-1x/weapon11/img_weapon_xmas16_glaive.50d17828.dds items/images-2x/weapon11/img_weapon_xmas16_glaive.03c6425a.dds items/images-2x/weapon11/img_weapon_xmas16_glaive.62e456ba.ktx items/images-1x/weapon11/img_weapon_xmas16_candy.c32c7041.dds items/images-1x/weapon11/img_weapon_xmas16_candy.3ccd8eb5.ktx items/images-2x/weapon11/img_weapon_xmas16_candy.d9bf9d70.dds items/images-2x/weapon11/img_weapon_xmas16_candy.ea8e8fa5.ktx items/images-1x/weapon11/img_weapon_xmas15_canes.bda25b2d.dds items/images-1x/weapon11/img_weapon_xmas15_canes.9474924e.ktx items/images-2x/weapon11/img_weapon_xmas15_canes.319d2fe3.dds items/images-2x/weapon11/img_weapon_xmas15_canes.cc3121ac.ktx items/images-1x/weapon11/img_weapon_xmas14_canes.0e1e3791.dds items/images-1x/weapon11/img_weapon_xmas14_canes.b3be3ee6.ktx items/images-2x/weapon11/img_weapon_xmas14_canes.571bb2a3.dds items/images-2x/weapon11/img_weapon_xmas14_canes.792e3d8c.ktx items/images-1x/weapon11/img_weapon_sharp_tonfa.58b03696.ktx items/images-1x/weapon11/img_weapon_sharp_tonfa.3b6b9650.dds items/images-2x/weapon11/img_weapon_sharp_tonfa.61c64928.dds items/images-2x/weapon11/img_weapon_sharp_tonfa.86a7b084.ktx items/images-1x/weapon10/img_weapon_z6_nunchaku.8bfc739f.dds items/images-1x/weapon10/img_weapon_z6_nunchaku.4149d003.ktx items/images-2x/weapon10/img_weapon_z6_nunchaku.59a72860.dds items/images-2x/weapon10/img_weapon_z6_nunchaku.e313da6f.ktx items/images-1x/weapon10/img_weapon_z6_knives.3765b9bc.ktx items/images-1x/weapon10/img_weapon_z6_knives.db305e16.dds items/images-2x/weapon10/img_weapon_z6_knives.86d680ec.dds items/images-2x/weapon10/img_weapon_z6_knives.6a0bd3f7.ktx items/images-1x/weapon10/img_weapon_trident.e69addf1.dds items/images-1x/weapon10/img_weapon_trident.c5622ca6.ktx items/images-2x/weapon10/img_weapon_trident.606210bb.dds items/images-2x/weapon10/img_weapon_trident.b69a03aa.ktx items/images-1x/weapon10/img_weapon_silver_spear.4b8891d4.ktx items/images-1x/weapon10/img_weapon_silver_spear.ce1e95fb.dds items/images-2x/weapon10/img_weapon_silver_spear.8ac3b55a.dds items/images-2x/weapon10/img_weapon_silver_spear.8a4b6d35.ktx items/images-1x/weapon10/img_weapon_northern_hammer.aa2c3626.dds items/images-1x/weapon10/img_weapon_northern_hammer.1fb01c24.ktx items/images-2x/weapon10/img_weapon_northern_hammer.2079e5b8.dds items/images-2x/weapon10/img_weapon_northern_hammer.7ae22ad8.ktx items/images-1x/weapon10/img_weapon_indian_katar.72ec9a4b.ktx items/images-1x/weapon10/img_weapon_indian_katar.b95ad8b4.dds items/images-2x/weapon10/img_weapon_indian_katar.50d4e876.dds items/images-2x/weapon10/img_weapon_indian_katar.d5864799.ktx items/images-1x/weapon1/img_weapon_super_kusarigama.831e037c.dds items/images-1x/weapon1/img_weapon_super_kusarigama.84b08e7b.ktx items/images-2x/weapon1/img_weapon_super_kusarigama.36e2d9df.dds items/images-2x/weapon1/img_weapon_super_kusarigama.02de0a67.ktx items/images-1x/weapon1/img_weapon_steel_batons.c542786b.ktx items/images-1x/weapon1/img_weapon_steel_batons.d25f1021.dds items/images-2x/weapon1/img_weapon_steel_batons.be23c3fd.dds items/images-2x/weapon1/img_weapon_steel_batons.473b3235.ktx items/images-1x/weapon1/img_weapon_sai.43aa10a0.dds items/images-1x/weapon1/img_weapon_sai.6d075869.ktx items/images-2x/weapon1/img_weapon_sai.8d6005e8.dds items/images-2x/weapon1/img_weapon_sai.6371f6c9.ktx items/images-1x/weapon1/img_weapon_ninja_sword.feda610c.ktx items/images-1x/weapon1/img_weapon_ninja_sword.22b98a8b.dds items/images-2x/weapon1/img_weapon_ninja_sword.41adaae9.dds items/images-2x/weapon1/img_weapon_ninja_sword.4f97cd43.ktx items/images-1x/weapon1/img_weapon_machete.4132f209.dds items/images-1x/weapon1/img_weapon_machete.016f2bfb.ktx items/images-2x/weapon1/img_weapon_machete.98f532ca.dds items/images-2x/weapon1/img_weapon_machete.9e20c536.ktx items/images-1x/weapon1/img_weapon_knuckles.1ed4fe9e.dds items/images-1x/weapon1/img_weapon_knuckles.9a395f55.ktx items/images-2x/weapon1/img_weapon_knuckles.b1f9683c.dds items/images-2x/weapon1/img_weapon_knuckles.ff0000d0.ktx items/images-1x/weapon1/img_weapon_knives.fe1471ba.dds items/images-1x/weapon1/img_weapon_knives.fbe17c99.ktx items/images-2x/weapon1/img_weapon_knives.6a6b3042.dds items/images-2x/weapon1/img_weapon_knives.4845cece.ktx items/images-1x/weapon1/img_weapon_daggers.dfdfe6fd.dds items/images-1x/weapon1/img_weapon_daggers.a7118f04.ktx items/images-2x/weapon1/img_weapon_daggers.d99b9354.dds items/images-2x/weapon1/img_weapon_daggers.3db46864.ktx items/images-1x/unknownitems/img_weapon_unknown.e0f9c4e5.dds items/images-1x/unknownitems/img_weapon_unknown.c4afeb38.ktx items/images-2x/unknownitems/img_weapon_unknown.eb6164d0.dds items/images-2x/unknownitems/img_weapon_unknown.5b5676fc.ktx items/images-1x/unknownitems/img_ranged_unknown.d4357267.dds items/images-1x/unknownitems/img_ranged_unknown.376486a1.ktx items/images-2x/unknownitems/img_ranged_unknown.b3889c10.dds items/images-2x/unknownitems/img_ranged_unknown.68ab5886.ktx items/images-1x/unknownitems/img_magic_unknown.05907e11.dds items/images-1x/unknownitems/img_magic_unknown.ec186a68.ktx items/images-2x/unknownitems/img_magic_unknown.ffd48fc1.dds items/images-2x/unknownitems/img_magic_unknown.cf8013fc.ktx items/images-1x/unknownitems/img_helm_unknown.31b37bab.ktx items/images-1x/unknownitems/img_helm_unknown.4ab00454.dds items/images-2x/unknownitems/img_helm_unknown.44459ed2.dds items/images-2x/unknownitems/img_helm_unknown.4aadd809.ktx items/images-1x/unknownitems/img_armor_unknown.4a1c0224.dds items/images-1x/unknownitems/img_armor_unknown.4d5cd086.ktx items/images-2x/unknownitems/img_armor_unknown.2904adf8.dds items/images-2x/unknownitems/img_armor_unknown.a4ca8254.ktx items/images-1x/summerevent21/weapon_trident.c37300e4.ktx items/images-1x/summerevent21/weapon_trident.6c28d492.dds items/images-2x/summerevent21/weapon_trident.dd80750f.dds items/images-2x/summerevent21/weapon_trident.03b78068.ktx items/images-1x/summerevent21/weapon_summer21_sword.74ae2feb.dds items/images-1x/summerevent21/weapon_summer21_sword.d51ec165.ktx items/images-2x/summerevent21/weapon_summer21_sword.189e7501.dds items/images-2x/summerevent21/weapon_summer21_sword.56550ebf.ktx items/images-1x/summerevent21/ranged_ancient_chakram.cfa11006.ktx items/images-1x/summerevent21/ranged_ancient_chakram.f9704172.dds items/images-2x/summerevent21/ranged_ancient_chakram.10f1e554.dds items/images-2x/summerevent21/ranged_ancient_chakram.cf5f4da5.ktx items/images-1x/summerevent21/helm_summer21_santa.1b10fb9f.ktx items/images-1x/summerevent21/helm_summer21_santa.1e5ab9c2.dds items/images-2x/summerevent21/helm_summer21_santa.7217bff0.dds items/images-2x/summerevent21/helm_summer21_santa.2ff01a86.ktx items/images-1x/summerevent21/armor_summer21_santa.e1d99827.dds items/images-1x/summerevent21/armor_summer21_santa.fe7ae9de.ktx items/images-2x/summerevent21/armor_summer21_santa.93cf4f4b.dds items/images-2x/summerevent21/armor_summer21_santa.1724da41.ktx items/images-1x/summerevent21/armor_kimono.f4350f14.dds items/images-1x/summerevent21/armor_kimono.8d31504c.ktx items/images-2x/summerevent21/armor_kimono.7a40b743.dds items/images-2x/summerevent21/armor_kimono.7d36fdb3.ktx items/images-1x/ranged8/img_ranged_shuriken_w145.6c5732ef.ktx items/images-1x/ranged8/img_ranged_shuriken_w145.9f085521.dds items/images-2x/ranged8/img_ranged_shuriken_w145.6310e039.dds items/images-2x/ranged8/img_ranged_shuriken_w145.9d084ca2.ktx items/images-1x/ranged8/img_ranged_needles_w128.f70c7179.dds items/images-1x/ranged8/img_ranged_needles_w128.a723dfc9.ktx items/images-2x/ranged8/img_ranged_needles_w128.36d23a68.dds items/images-2x/ranged8/img_ranged_needles_w128.29096aec.ktx items/images-1x/ranged8/img_ranged_mine.c004809f.ktx items/images-1x/ranged8/img_ranged_mine.9938e474.dds items/images-2x/ranged8/img_ranged_mine.bedb9f4c.dds items/images-2x/ranged8/img_ranged_mine.15b94cc9.ktx items/images-1x/ranged8/img_ranged_chakram_w126.463c463c.dds items/images-1x/ranged8/img_ranged_chakram_w126.d8ec9757.ktx items/images-2x/ranged8/img_ranged_chakram_w126.dbe0ce49.dds items/images-2x/ranged8/img_ranged_chakram_w126.f7c46558.ktx items/images-1x/ranged6/img_ranged_super_boomerang.7e7965cd.ktx items/images-1x/ranged6/img_ranged_super_boomerang.28cfc206.dds items/images-2x/ranged6/img_ranged_super_boomerang.72969c45.dds items/images-2x/ranged6/img_ranged_super_boomerang.4a36b85f.ktx items/images-1x/ranged6/img_ranged_im_kunai.fe04f2db.dds items/images-1x/ranged6/img_ranged_im_kunai.39d948a5.ktx items/images-2x/ranged6/img_ranged_im_kunai.45862168.dds items/images-2x/ranged6/img_ranged_im_kunai.7c707b10.ktx items/images-1x/ranged6/img_ranged_im_hooks.0961759f.ktx items/images-1x/ranged6/img_ranged_im_hooks.d88a6c2a.dds items/images-2x/ranged6/img_ranged_im_hooks.c1fc4d52.dds items/images-2x/ranged6/img_ranged_im_hooks.3059f85a.ktx items/images-1x/ranged6/img_ranged_im_axes.2bf85843.dds items/images-1x/ranged6/img_ranged_im_axes.1f807aed.ktx items/images-2x/ranged6/img_ranged_im_axes.a600be47.dds items/images-2x/ranged6/img_ranged_im_axes.43b5d84e.ktx items/images-1x/ranged5/img_ranged_super_daggers.a83bae47.dds items/images-1x/ranged5/img_ranged_super_daggers.f396382e.ktx items/images-2x/ranged5/img_ranged_super_daggers.00d3ba89.dds items/images-2x/ranged5/img_ranged_super_daggers.5945c96b.ktx items/images-1x/ranged5/img_ranged_kunai_of_wind.134b2fa9.dds items/images-1x/ranged5/img_ranged_kunai_of_wind.b3e08759.ktx items/images-2x/ranged5/img_ranged_kunai_of_wind.057342b3.dds items/images-2x/ranged5/img_ranged_kunai_of_wind.7e313f22.ktx items/images-1x/ranged5/img_ranged_dragons_wings.e87bc171.ktx items/images-1x/ranged5/img_ranged_dragons_wings.ae62d6fc.dds items/images-2x/ranged5/img_ranged_dragons_wings.8bcca469.dds items/images-2x/ranged5/img_ranged_dragons_wings.0a8ef5e2.ktx items/images-1x/ranged5/img_ranged_chakram_of_master.abe5d2dd.dds items/images-1x/ranged5/img_ranged_chakram_of_master.9a80c22b.ktx items/images-2x/ranged5/img_ranged_chakram_of_master.4ced2a95.dds items/images-2x/ranged5/img_ranged_chakram_of_master.8324f651.ktx items/images-1x/ranged5/img_ranged_beast_axes.d1e77dd5.dds items/images-1x/ranged5/img_ranged_beast_axes.452846d4.ktx items/images-2x/ranged5/img_ranged_beast_axes.e9595d8c.dds items/images-2x/ranged5/img_ranged_beast_axes.0b914e9a.ktx items/images-1x/ranged4/img_ranged_super_kunai.30265530.dds items/images-1x/ranged4/img_ranged_super_kunai.461eb7ad.ktx items/images-2x/ranged4/img_ranged_super_kunai.71e3754c.dds items/images-2x/ranged4/img_ranged_super_kunai.d62af978.ktx items/images-1x/ranged4/img_ranged_shuriken_of_darkness.b1d8bb1d.ktx items/images-1x/ranged4/img_ranged_shuriken_of_darkness.6dc3e624.dds items/images-2x/ranged4/img_ranged_shuriken_of_darkness.823bb2dc.dds items/images-2x/ranged4/img_ranged_shuriken_of_darkness.b4db15c3.ktx items/images-1x/ranged4/img_ranged_ghost_kunai.ac45d8d1.ktx items/images-1x/ranged4/img_ranged_ghost_kunai.a1489490.dds items/images-2x/ranged4/img_ranged_ghost_kunai.4b8b9979.dds items/images-2x/ranged4/img_ranged_ghost_kunai.1126780f.ktx items/images-1x/ranged4/img_ranged_assassins_dagger.38f5a025.ktx items/images-1x/ranged4/img_ranged_assassins_dagger.618b2626.dds items/images-2x/ranged4/img_ranged_assassins_dagger.a9954221.dds items/images-2x/ranged4/img_ranged_assassins_dagger.eb23748c.ktx items/images-1x/ranged4/img_ranged_ancient_chakram.385a158f.dds items/images-1x/ranged4/img_ranged_ancient_chakram.849215dc.ktx items/images-2x/ranged4/img_ranged_ancient_chakram.bd5dc03b.dds items/images-2x/ranged4/img_ranged_ancient_chakram.51d9459e.ktx items/images-1x/ranged3/img_ranged_throwing_spikes.e087a7b5.ktx items/images-1x/ranged3/img_ranged_throwing_spikes.d116495b.dds items/images-2x/ranged3/img_ranged_throwing_spikes.7b8dc268.dds items/images-2x/ranged3/img_ranged_throwing_spikes.d33dd8ab.ktx items/images-1x/ranged3/img_ranged_super_axes.d1bc97b1.dds items/images-1x/ranged3/img_ranged_super_axes.c6e549b1.ktx items/images-2x/ranged3/img_ranged_super_axes.b49b13fa.dds items/images-2x/ranged3/img_ranged_super_axes.ffeaf000.ktx items/images-1x/ranged3/img_ranged_needle.576dd1fc.ktx items/images-1x/ranged3/img_ranged_needle.001b5ea5.dds items/images-2x/ranged3/img_ranged_needle.71a5b71e.dds items/images-2x/ranged3/img_ranged_needle.d86e1c39.ktx items/images-1x/ranged3/img_ranged_heavy_shurikens.468a721f.dds items/images-1x/ranged3/img_ranged_heavy_shurikens.a8ca11d4.ktx items/images-2x/ranged3/img_ranged_heavy_shurikens.d802a155.dds items/images-2x/ranged3/img_ranged_heavy_shurikens.665c1e68.ktx items/images-1x/ranged3/img_ranged_chakram.1acfc693.ktx items/images-1x/ranged3/img_ranged_chakram.b2f466a3.dds items/images-2x/ranged3/img_ranged_chakram.29ec8e44.dds items/images-2x/ranged3/img_ranged_chakram.4846b908.ktx items/images-1x/ranged2/img_ranged_super_shuriken.eab9d076.dds items/images-1x/ranged2/img_ranged_super_shuriken.c8d70f5a.ktx items/images-2x/ranged2/img_ranged_super_shuriken.ceee700a.dds items/images-2x/ranged2/img_ranged_super_shuriken.d1ed26d5.ktx items/images-1x/ranged2/img_ranged_silver_shurikens.f12977a1.dds items/images-1x/ranged2/img_ranged_silver_shurikens.ad781413.ktx items/images-2x/ranged2/img_ranged_silver_shurikens.53fb0209.dds items/images-2x/ranged2/img_ranged_silver_shurikens.0d6948b4.ktx items/images-1x/ranged2/img_ranged_hunting_kunai.6d261bd8.dds items/images-1x/ranged2/img_ranged_hunting_kunai.3e0f8789.ktx items/images-2x/ranged2/img_ranged_hunting_kunai.fb4c61e7.dds items/images-2x/ranged2/img_ranged_hunting_kunai.d57cfa1b.ktx items/images-1x/ranged2/img_ranged_hunters_knives.3bfd774d.dds items/images-1x/ranged2/img_ranged_hunters_knives.b66cb5ab.ktx items/images-2x/ranged2/img_ranged_hunters_knives.e83b289c.dds items/images-2x/ranged2/img_ranged_hunters_knives.b7a02d21.ktx items/images-1x/ranged2/img_ranged_assassin_kunai.0abb4ea4.dds items/images-1x/ranged2/img_ranged_assassin_kunai.594189bd.ktx items/images-2x/ranged2/img_ranged_assassin_kunai.38c5b309.dds items/images-2x/ranged2/img_ranged_assassin_kunai.ba3a6f8b.ktx items/images-1x/ranged12/img_ranged_xmas16_cookie.d2c34d9e.ktx items/images-1x/ranged12/img_ranged_xmas16_cookie.88b3fd60.dds items/images-2x/ranged12/img_ranged_xmas16_cookie.19d11258.dds items/images-2x/ranged12/img_ranged_xmas16_cookie.34e94dfd.ktx items/images-1x/ranged12/img_ranged_xmas15_snowballs.fc5aea63.dds items/images-1x/ranged12/img_ranged_xmas15_snowballs.2cd3ecc0.ktx items/images-2x/ranged12/img_ranged_xmas15_snowballs.47d3900d.dds items/images-2x/ranged12/img_ranged_xmas15_snowballs.d90dfd46.ktx items/images-1x/ranged12/img_ranged_super_chakram_jewels.bbb39c71.ktx items/images-1x/ranged12/img_ranged_super_chakram_jewels.fb2da6f0.dds items/images-2x/ranged12/img_ranged_super_chakram_jewels.cac65501.dds items/images-2x/ranged12/img_ranged_super_chakram_jewels.67f424cc.ktx items/images-1x/ranged12/img_ranged_hw15_skull.f77b9588.dds items/images-1x/ranged12/img_ranged_hw15_skull.56d72c1e.ktx items/images-2x/ranged12/img_ranged_hw15_skull.6f1f0550.dds items/images-2x/ranged12/img_ranged_hw15_skull.e2a93a74.ktx items/images-1x/ranged11/img_ranged_xmas14_snowballs.57e36c7a.ktx items/images-1x/ranged11/img_ranged_xmas14_snowballs.c6f83055.dds items/images-2x/ranged11/img_ranged_xmas14_snowballs.722fcd49.dds items/images-2x/ranged11/img_ranged_xmas14_snowballs.f339f513.ktx items/images-1x/ranged11/img_ranged_val17_axe.20339e14.ktx items/images-1x/ranged11/img_ranged_val17_axe.0781d30d.dds items/images-2x/ranged11/img_ranged_val17_axe.ebbbb627.dds items/images-2x/ranged11/img_ranged_val17_axe.ec335af4.ktx items/images-1x/ranged11/img_ranged_hw16_bat.f2ffbe41.ktx items/images-1x/ranged11/img_ranged_hw16_bat.51b6e24a.dds items/images-2x/ranged11/img_ranged_hw16_bat.7bb83402.dds items/images-2x/ranged11/img_ranged_hw16_bat.82572c99.ktx items/images-1x/ranged11/img_ranged_circular_saw.83bf49cc.dds items/images-1x/ranged11/img_ranged_circular_saw.953aaffc.ktx items/images-2x/ranged11/img_ranged_circular_saw.ffd83318.dds items/images-2x/ranged11/img_ranged_circular_saw.8dd1cd55.ktx items/images-1x/ranged11/img_ranged_blaster.22a4ce32.dds items/images-1x/ranged11/img_ranged_blaster.a320548c.ktx items/images-2x/ranged11/img_ranged_blaster.e5654cad.dds items/images-2x/ranged11/img_ranged_blaster.b8ae6a5f.ktx items/images-1x/ranged10/img_ranged_c2_z5_dragon_boomerang.9451e252.dds items/images-1x/ranged10/img_ranged_c2_z5_dragon_boomerang.d7c3758e.ktx items/images-2x/ranged10/img_ranged_c2_z5_dragon_boomerang.95fa667b.dds items/images-2x/ranged10/img_ranged_c2_z5_dragon_boomerang.b7a20595.ktx items/images-1x/ranged10/img_ranged_c2_z3_sentinel_shuriken.9a3c0978.ktx items/images-1x/ranged10/img_ranged_c2_z3_sentinel_shuriken.e210eb0e.dds items/images-2x/ranged10/img_ranged_c2_z3_sentinel_shuriken.1ac23121.dds items/images-2x/ranged10/img_ranged_c2_z3_sentinel_shuriken.d0539acc.ktx items/images-1x/ranged10/img_ranged_c2_z2_monk_shuriken.744432e5.dds items/images-1x/ranged10/img_ranged_c2_z2_monk_shuriken.29babad4.ktx items/images-2x/ranged10/img_ranged_c2_z2_monk_shuriken.fa6515de.dds items/images-2x/ranged10/img_ranged_c2_z2_monk_shuriken.c919f389.ktx items/images-1x/ranged10/img_ranged_c1_z4_steel_axe.aadaf35d.ktx items/images-1x/ranged10/img_ranged_c1_z4_steel_axe.bca3afc6.dds items/images-2x/ranged10/img_ranged_c1_z4_steel_axe.7d00a6d1.dds items/images-2x/ranged10/img_ranged_c1_z4_steel_axe.05aa1c68.ktx items/images-1x/ranged10/img_ranged_anniversary_10th.12c0b116.dds items/images-1x/ranged10/img_ranged_anniversary_10th.c1799348.ktx items/images-2x/ranged10/img_ranged_anniversary_10th.fcdc8a1b.dds items/images-2x/ranged10/img_ranged_anniversary_10th.82d168b0.ktx items/images-1x/ranged1/img_ranged_throwing_daggers.67dbb7bd.ktx items/images-1x/ranged1/img_ranged_throwing_daggers.1cc2eaae.dds items/images-2x/ranged1/img_ranged_throwing_daggers.97fef81a.dds items/images-2x/ranged1/img_ranged_throwing_daggers.f551c8d6.ktx items/images-1x/ranged1/img_ranged_super_chakram_blades.1baacecf.dds items/images-1x/ranged1/img_ranged_super_chakram_blades.768c5409.ktx items/images-2x/ranged1/img_ranged_super_chakram_blades.7837564f.dds items/images-2x/ranged1/img_ranged_super_chakram_blades.5ca6da4c.ktx items/images-1x/ranged1/img_ranged_shurikens.c51f265e.dds items/images-1x/ranged1/img_ranged_shurikens.8c0fdc28.ktx items/images-2x/ranged1/img_ranged_shurikens.f7559347.dds items/images-2x/ranged1/img_ranged_shurikens.5dfa6111.ktx items/images-1x/ranged1/img_ranged_kunai.7554a839.dds items/images-1x/ranged1/img_ranged_kunai.0d248ebe.ktx items/images-2x/ranged1/img_ranged_kunai.b5aafb4b.dds items/images-2x/ranged1/img_ranged_kunai.87d203f0.ktx items/images-1x/raidclanpack/weapon_cyber_dragon_kusarigama.8678396e.ktx items/images-1x/raidclanpack/weapon_cyber_dragon_kusarigama.9721230d.dds items/images-2x/raidclanpack/weapon_cyber_dragon_kusarigama.8aeeb1fb.dds items/images-2x/raidclanpack/weapon_cyber_dragon_kusarigama.efc8dc7d.ktx items/images-1x/raidclanpack/weapon_10thanniversary.e7950b70.dds items/images-1x/raidclanpack/weapon_10thanniversary.622234a9.ktx items/images-2x/raidclanpack/weapon_10thanniversary.9a40573d.dds items/images-2x/raidclanpack/weapon_10thanniversary.50d6f848.ktx items/images-1x/raidclanpack/ranged_shuriken.14e168d5.ktx items/images-1x/raidclanpack/ranged_shuriken.6bb47bb3.dds items/images-2x/raidclanpack/ranged_shuriken.5eb4ca50.dds items/images-2x/raidclanpack/ranged_shuriken.1e13e834.ktx items/images-1x/raidclanpack/magic_cyber_dragon_ray.df82771a.dds items/images-1x/raidclanpack/magic_cyber_dragon_ray.57493d1e.ktx items/images-2x/raidclanpack/magic_cyber_dragon_ray.578bdee8.dds items/images-2x/raidclanpack/magic_cyber_dragon_ray.d88b7274.ktx items/images-1x/raidclanpack/img_weapon_starter_pack_raid_swords.d9a884e2.ktx items/images-1x/raidclanpack/img_weapon_starter_pack_raid_swords.20648c97.dds items/images-2x/raidclanpack/img_weapon_starter_pack_raid_swords.5ece6c5d.dds items/images-2x/raidclanpack/img_weapon_starter_pack_raid_swords.40ca3d89.ktx items/images-1x/raidclanpack/img_weapon_ny23_paid_offer.9ee4500c.dds items/images-1x/raidclanpack/img_weapon_ny23_paid_offer.595c6646.ktx items/images-2x/raidclanpack/img_weapon_ny23_paid_offer.b0dfb016.dds items/images-2x/raidclanpack/img_weapon_ny23_paid_offer.c8e0a0ee.ktx items/images-1x/raidclanpack/img_ranged_water_shuriken.42ea8929.dds items/images-1x/raidclanpack/img_ranged_water_shuriken.ce73882e.ktx items/images-2x/raidclanpack/img_ranged_water_shuriken.1ccb31ef.dds items/images-2x/raidclanpack/img_ranged_water_shuriken.17334b0c.ktx items/images-1x/raidclanpack/helm_cyber_dragon_head.0d19a03b.dds items/images-1x/raidclanpack/helm_cyber_dragon_head.516c1088.ktx items/images-2x/raidclanpack/helm_cyber_dragon_head.7b730896.dds items/images-2x/raidclanpack/helm_cyber_dragon_head.f3d0673e.ktx items/images-1x/payment3/img_chest_gems_zone7.b40538a6.ktx items/images-1x/payment3/img_chest_gems_zone7.b076213b.dds items/images-2x/payment3/img_chest_gems_zone7.396f87a1.dds items/images-2x/payment3/img_chest_gems_zone7.81b9e1f7.ktx items/images-1x/payment3/img_casket_gems_zone7.4e0e3da7.dds items/images-1x/payment3/img_casket_gems_zone7.c9838a2c.ktx items/images-2x/payment3/img_casket_gems_zone7.6b99c209.dds items/images-2x/payment3/img_casket_gems_zone7.827b9141.ktx items/images-1x/payment3/img_bag_gems_zone7.019e0700.ktx items/images-1x/payment3/img_bag_gems_zone7.609da7bb.dds items/images-2x/payment3/img_bag_gems_zone7.176fdfc4.dds items/images-2x/payment3/img_bag_gems_zone7.634c46f4.ktx items/images-1x/payment2/img_pile_coins.5361773f.dds items/images-1x/payment2/img_pile_coins.95e7fd98.ktx items/images-2x/payment2/img_pile_coins.6e415f98.dds items/images-2x/payment2/img_pile_coins.0ef949ad.ktx items/images-1x/payment2/img_perk_reset.2a85d648.ktx items/images-1x/payment2/img_perk_reset.39eb6453.dds items/images-2x/payment2/img_perk_reset.6905b4ca.dds items/images-2x/payment2/img_perk_reset.c16dd52d.ktx items/images-1x/payment2/img_chest_coins.d6673878.dds items/images-1x/payment2/img_chest_coins.9a4e33da.ktx items/images-2x/payment2/img_chest_coins.1fad56c8.dds items/images-2x/payment2/img_chest_coins.e3c49115.ktx items/images-1x/payment2/img_bag_coins.b94480ed.dds items/images-1x/payment2/img_bag_coins.96d6f60d.ktx items/images-2x/payment2/img_bag_coins.b670c246.dds items/images-2x/payment2/img_bag_coins.2222cc73.ktx items/images-1x/payment1/img_pile_gems.f12f526f.dds items/images-1x/payment1/img_pile_gems.fd268e2c.ktx items/images-2x/payment1/img_pile_gems.6efc7f5d.dds items/images-2x/payment1/img_pile_gems.fd626ac8.ktx items/images-1x/payment1/img_chest_gems.aafe0cd2.dds items/images-1x/payment1/img_chest_gems.06081f55.ktx items/images-2x/payment1/img_chest_gems.0aa0ffae.dds items/images-2x/payment1/img_chest_gems.2be4c6a8.ktx items/images-1x/payment1/img_casket_gems.bd940722.dds items/images-1x/payment1/img_casket_gems.c42eaddc.ktx items/images-2x/payment1/img_casket_gems.c04df588.dds items/images-2x/payment1/img_casket_gems.7994aed1.ktx items/images-1x/payment1/img_bag_gems.129c8df5.ktx items/images-1x/payment1/img_bag_gems.a0a29c9d.dds items/images-2x/payment1/img_bag_gems.b90d81b4.dds items/images-2x/payment1/img_bag_gems.d9407d94.ktx items/images-1x/offersshinebg.50edec9c.dds items/images-1x/offersshinebg.072cb4d0.ktx items/images-2x/offersshinebg.3568c074.dds items/images-2x/offersshinebg.bcf13b7a.ktx items/images-1x/ny20_3/weapon_xmas19_glaive.025f062f.dds items/images-1x/ny20_3/weapon_xmas19_glaive.fd791c5a.ktx items/images-2x/ny20_3/weapon_xmas19_glaive.ce91bc6e.dds items/images-2x/ny20_3/weapon_xmas19_glaive.2d7ee5cf.ktx items/images-1x/ny20_3/weapon_xmas19_candy.9f2235fc.dds items/images-1x/ny20_3/weapon_xmas19_candy.8490f42d.ktx items/images-2x/ny20_3/weapon_xmas19_candy.39273293.dds items/images-2x/ny20_3/weapon_xmas19_candy.0e194ef2.ktx items/images-1x/ny20_3/weapon_ny19_mace.a4585fec.ktx items/images-1x/ny20_3/weapon_ny19_mace.e2b06eeb.dds items/images-2x/ny20_3/weapon_ny19_mace.91f789f5.dds items/images-2x/ny20_3/weapon_ny19_mace.062032e3.ktx items/images-1x/ny20_3/weapon_ny19_axes.6fcfbee8.ktx items/images-1x/ny20_3/weapon_ny19_axes.7ada6388.dds items/images-2x/ny20_3/weapon_ny19_axes.e3fc15eb.dds items/images-2x/ny20_3/weapon_ny19_axes.6ebdaa5b.ktx items/images-1x/ny20_3/weapon_cny20_citrus.11005488.ktx items/images-1x/ny20_3/weapon_cny20_citrus.946149f8.dds items/images-2x/ny20_3/weapon_cny20_citrus.5b2910df.dds items/images-2x/ny20_3/weapon_cny20_citrus.298adfd1.ktx items/images-1x/ny20_3/img_armor_xmas16_santa.a1bf822d.dds items/images-1x/ny20_3/img_armor_xmas16_santa.d1d9c41b.ktx items/images-2x/ny20_3/img_armor_xmas16_santa.3a624aaa.dds items/images-2x/ny20_3/img_armor_xmas16_santa.eaa61bcb.ktx items/images-1x/newyear2021/weapon_icefruit_knuckles.35b3be13.dds items/images-1x/newyear2021/weapon_icefruit_knuckles.bee9d7be.ktx items/images-2x/newyear2021/weapon_icefruit_knuckles.a133c90b.dds items/images-2x/newyear2021/weapon_icefruit_knuckles.ef16039d.ktx items/images-1x/newyear2021/ranged_snowfall_shurikens.63c70c64.dds items/images-1x/newyear2021/ranged_snowfall_shurikens.16645f8d.ktx items/images-2x/newyear2021/ranged_snowfall_shurikens.1332497a.dds items/images-2x/newyear2021/ranged_snowfall_shurikens.047a3e99.ktx items/images-1x/newyear2021/magic_snow_globe.d027c876.ktx items/images-1x/newyear2021/magic_snow_globe.0d35e173.dds items/images-2x/newyear2021/magic_snow_globe.b3f735df.dds items/images-2x/newyear2021/magic_snow_globe.0be49aa6.ktx items/images-1x/newyear2021/helm_ny21_ice.88422044.dds items/images-1x/newyear2021/helm_ny21_ice.e18f30e4.ktx items/images-2x/newyear2021/helm_ny21_ice.7c343626.dds items/images-2x/newyear2021/helm_ny21_ice.252c8639.ktx items/images-1x/newyear2021/helm_ny21_bread.fbe3f4dc.ktx items/images-1x/newyear2021/helm_ny21_bread.a8b6d250.dds items/images-2x/newyear2021/helm_ny21_bread.11b5b78a.dds items/images-2x/newyear2021/helm_ny21_bread.1ff871a0.ktx items/images-1x/newyear2021/armor_ny21_cuirass.9a170da1.dds items/images-1x/newyear2021/armor_ny21_cuirass.c1648420.ktx items/images-2x/newyear2021/armor_ny21_cuirass.a3ede8d2.dds items/images-2x/newyear2021/armor_ny21_cuirass.b2153593.ktx items/images-1x/magic9/img_magic_c2_z5_dragon_earthquake.2e9737ff.ktx items/images-1x/magic9/img_magic_c2_z5_dragon_earthquake.0a3ea532.dds items/images-2x/magic9/img_magic_c2_z5_dragon_earthquake.c25b8f4a.dds items/images-2x/magic9/img_magic_c2_z5_dragon_earthquake.93d082f0.ktx items/images-1x/magic9/img_magic_c2_z2_monk_root_stun.5370d43c.dds items/images-1x/magic9/img_magic_c2_z2_monk_root_stun.bb849c95.ktx items/images-2x/magic9/img_magic_c2_z2_monk_root_stun.a348a154.dds items/images-2x/magic9/img_magic_c2_z2_monk_root_stun.04515bcd.ktx items/images-1x/magic9/img_magic_c1_z4_power_kick.7a292928.dds items/images-1x/magic9/img_magic_c1_z4_power_kick.a68a46ca.ktx items/images-2x/magic9/img_magic_c1_z4_power_kick.984e6937.dds items/images-2x/magic9/img_magic_c1_z4_power_kick.77942d37.ktx items/images-1x/magic9/img_magic_anniversary_10th.c6afc209.dds items/images-1x/magic9/img_magic_anniversary_10th.7e41e354.ktx items/images-2x/magic9/img_magic_anniversary_10th.88101432.dds items/images-2x/magic9/img_magic_anniversary_10th.dd8db084.ktx items/images-1x/magic7/img_magic_sawmill.5d4b3e02.ktx items/images-1x/magic7/img_magic_sawmill.afbcf67f.dds items/images-2x/magic7/img_magic_sawmill.efed439c.dds items/images-2x/magic7/img_magic_sawmill.72aebb1a.ktx items/images-1x/magic7/img_magic_fire_aura.00d6b83a.dds items/images-1x/magic7/img_magic_fire_aura.f685a627.ktx items/images-2x/magic7/img_magic_fire_aura.8492bcb3.dds items/images-2x/magic7/img_magic_fire_aura.6451522f.ktx items/images-1x/magic6/img_magic_xmas16_iceball.5ed8c417.ktx items/images-1x/magic6/img_magic_xmas16_iceball.1190814d.dds items/images-2x/magic6/img_magic_xmas16_iceball.fc8120f7.dds items/images-2x/magic6/img_magic_xmas16_iceball.f3138185.ktx items/images-1x/magic6/img_magic_ice_pins.265192ca.dds items/images-1x/magic6/img_magic_ice_pins.74fa6076.ktx items/images-2x/magic6/img_magic_ice_pins.3f7be171.dds items/images-2x/magic6/img_magic_ice_pins.52c12331.ktx items/images-1x/magic6/img_magic_ice_ball.373e30e7.ktx items/images-1x/magic6/img_magic_ice_ball.0b5c1a12.dds items/images-2x/magic6/img_magic_ice_ball.8639f726.dds items/images-2x/magic6/img_magic_ice_ball.21253d4c.ktx items/images-1x/magic6/img_magic_acid_cloud.38ee63ce.ktx items/images-1x/magic6/img_magic_acid_cloud.040f542d.dds items/images-2x/magic6/img_magic_acid_cloud.a2e37adb.dds items/images-2x/magic6/img_magic_acid_cloud.9a91fffb.ktx items/images-1x/magic4/img_magic_water_ball.01752026.ktx items/images-1x/magic4/img_magic_water_ball.0a58276d.dds items/images-2x/magic4/img_magic_water_ball.13df91f7.dds items/images-2x/magic4/img_magic_water_ball.d716522e.ktx items/images-1x/magic4/img_magic_asteroid.41ac8e33.dds items/images-1x/magic4/img_magic_asteroid.8f97e86f.ktx items/images-2x/magic4/img_magic_asteroid.a3c46dc3.dds items/images-2x/magic4/img_magic_asteroid.d6d88c1b.ktx items/images-1x/magic3/img_magic_lightning_arrow.f15a10ac.ktx items/images-1x/magic3/img_magic_lightning_arrow.05004a68.dds items/images-2x/magic3/img_magic_lightning_arrow.50c1e60e.dds items/images-2x/magic3/img_magic_lightning_arrow.a7f8baca.ktx items/images-1x/magic3/img_magic_fire_pillar.19ccacc3.dds items/images-1x/magic3/img_magic_fire_pillar.e552a08f.ktx items/images-2x/magic3/img_magic_fire_pillar.9853ea70.dds items/images-2x/magic3/img_magic_fire_pillar.ec32bfc6.ktx items/images-1x/magic3/img_magic_earth_strike.a5d4a527.ktx items/images-1x/magic3/img_magic_earth_strike.7f697886.dds items/images-2x/magic3/img_magic_earth_strike.257886e4.dds items/images-2x/magic3/img_magic_earth_strike.cd448be3.ktx items/images-1x/magic3/img_magic_death_ray.4eef8f39.dds items/images-1x/magic3/img_magic_death_ray.0ed4c953.ktx items/images-2x/magic3/img_magic_death_ray.9fa44c01.dds items/images-2x/magic3/img_magic_death_ray.0102decc.ktx items/images-1x/magic2/img_magic_wave.d61aaa39.ktx items/images-1x/magic2/img_magic_wave.50f8f6ef.dds items/images-2x/magic2/img_magic_wave.0bf186f3.dds items/images-2x/magic2/img_magic_wave.b76f66e3.ktx items/images-1x/magic2/img_magic_mass_bomb.53cdbe63.dds items/images-1x/magic2/img_magic_mass_bomb.5b7d31ac.ktx items/images-2x/magic2/img_magic_mass_bomb.00405ac8.dds items/images-2x/magic2/img_magic_mass_bomb.5f5eb49b.ktx items/images-1x/magic2/img_magic_fire_splash.fa60555b.dds items/images-1x/magic2/img_magic_fire_splash.bb1091b3.ktx items/images-2x/magic2/img_magic_fire_splash.040055e5.dds items/images-2x/magic2/img_magic_fire_splash.68d26ad2.ktx items/images-1x/magic2/img_magic_bomb.d73b6f0d.dds items/images-1x/magic2/img_magic_bomb.35642a66.ktx items/images-2x/magic2/img_magic_bomb.c1c6e0bf.dds items/images-2x/magic2/img_magic_bomb.fdf06137.ktx items/images-1x/magic1/img_magic_fire_ball.da64339e.dds items/images-1x/magic1/img_magic_fire_ball.8b122152.ktx items/images-2x/magic1/img_magic_fire_ball.d3b9365a.dds items/images-2x/magic1/img_magic_fire_ball.f40818de.ktx items/images-1x/magic1/img_magic_energy_ball.3f8c97c2.dds items/images-1x/magic1/img_magic_energy_ball.ef496e98.ktx items/images-2x/magic1/img_magic_energy_ball.829d738d.dds items/images-2x/magic1/img_magic_energy_ball.2ba4812b.ktx items/images-1x/indianitems21/img_weapon_keris.5499dda5.ktx items/images-1x/indianitems21/img_weapon_keris.b911748d.dds items/images-2x/indianitems21/img_weapon_keris.68e26520.dds items/images-2x/indianitems21/img_weapon_keris.8ddeaae1.ktx items/images-1x/indianitems21/img_weapon_glaivebow.bff5ded6.dds items/images-1x/indianitems21/img_weapon_glaivebow.38a87fda.ktx items/images-2x/indianitems21/img_weapon_glaivebow.9ef9df33.dds items/images-2x/indianitems21/img_weapon_glaivebow.a52b17e0.ktx items/images-1x/indianitems21/img_ranged_kunai.027b574c.ktx items/images-1x/indianitems21/img_ranged_kunai.75cfd4aa.dds items/images-2x/indianitems21/img_ranged_kunai.340d22e7.dds items/images-2x/indianitems21/img_ranged_kunai.ff769c00.ktx items/images-1x/indianitems21/img_helm_turban.8b198fc3.dds items/images-1x/indianitems21/img_helm_turban.77499a0d.ktx items/images-2x/indianitems21/img_helm_turban.6c46215b.dds items/images-2x/indianitems21/img_helm_turban.343211f2.ktx items/images-1x/indianitems21/img_helm_blood.b0ae4512.ktx items/images-1x/indianitems21/img_helm_blood.224e0a34.dds items/images-2x/indianitems21/img_helm_blood.8fe6e5f1.dds items/images-2x/indianitems21/img_helm_blood.c88b8129.ktx items/images-1x/indianitems21/img_armor_twilight.fceb09c1.dds items/images-1x/indianitems21/img_armor_twilight.b8312b80.ktx items/images-2x/indianitems21/img_armor_twilight.0fa6e56b.dds items/images-2x/indianitems21/img_armor_twilight.2794a1c6.ktx items/images-1x/indianitems21/img_armor_hoodie.b2e58ecd.dds items/images-1x/indianitems21/img_armor_hoodie.03364aba.ktx items/images-2x/indianitems21/img_armor_hoodie.f7ff19e4.dds items/images-2x/indianitems21/img_armor_hoodie.9ed3c218.ktx items/images-1x/independenceday/weapon_ae21_spear.0c885c12.dds items/images-1x/independenceday/weapon_ae21_spear.3c3cc4ce.ktx items/images-2x/independenceday/weapon_ae21_spear.04420e88.dds items/images-2x/independenceday/weapon_ae21_spear.2b728832.ktx items/images-1x/independenceday/ranged_ae21_tomahawk.acb76284.ktx items/images-1x/independenceday/ranged_ae21_tomahawk.7aad5c87.dds items/images-2x/independenceday/ranged_ae21_tomahawk.9a2e5325.dds items/images-2x/independenceday/ranged_ae21_tomahawk.38aeadf1.ktx items/images-1x/independenceday/magic_ae21_pillar.4de94662.dds items/images-1x/independenceday/magic_ae21_pillar.8044d665.ktx items/images-2x/independenceday/magic_ae21_pillar.d49271d6.dds items/images-2x/independenceday/magic_ae21_pillar.2d50199d.ktx items/images-1x/independenceday/helm_ae21_roach.7532688d.ktx items/images-1x/independenceday/helm_ae21_roach.ec367716.dds items/images-2x/independenceday/helm_ae21_roach.4bb12088.dds items/images-2x/independenceday/helm_ae21_roach.f8860132.ktx items/images-1x/independenceday/armor_ae21_warrior.d42b5c4f.dds items/images-1x/independenceday/armor_ae21_warrior.ca43f790.ktx items/images-2x/independenceday/armor_ae21_warrior.a88fbe21.dds items/images-2x/independenceday/armor_ae21_warrior.420963df.ktx items/images-1x/img_video.30b4aac5.ktx items/images-1x/img_video.4029b93c.dds items/images-2x/img_video.3386f31e.dds items/images-2x/img_video.4c8d9fdd.ktx items/images-1x/img_unlimited_energy.dd9213e4.dds items/images-1x/img_unlimited_energy.7f96c56e.ktx items/images-2x/img_unlimited_energy.ac0bfe75.dds items/images-2x/img_unlimited_energy.c6cc9979.ktx items/images-1x/img_pile_coins_zone7.e7c4a9b7.ktx items/images-1x/img_pile_coins_zone7.0285b8e8.dds items/images-2x/img_pile_coins_zone7.4027193b.dds items/images-2x/img_pile_coins_zone7.098371ff.ktx items/images-1x/img_pile_coins_platinum.af7ec9ca.dds items/images-1x/img_pile_coins_platinum.7c4f9ab6.ktx items/images-2x/img_pile_coins_platinum.51c1c067.dds items/images-2x/img_pile_coins_platinum.074b4a3c.ktx items/images-1x/img_chest_jewels_zone7.5eab0cc5.dds items/images-1x/img_chest_jewels_zone7.71beb8e9.ktx items/images-2x/img_chest_jewels_zone7.396f87a1.dds items/images-2x/img_chest_jewels_zone7.81b9e1f7.ktx items/images-1x/img_chest_coins_zone7.a5a8e569.dds items/images-1x/img_chest_coins_zone7.2cfeddd2.ktx items/images-2x/img_chest_coins_zone7.b33d4fe0.dds items/images-2x/img_chest_coins_zone7.a6b3333c.ktx items/images-1x/img_casket_jewels_zone7.7e3493a0.ktx items/images-1x/img_casket_jewels_zone7.36e46df0.dds items/images-2x/img_casket_jewels_zone7.6b99c209.dds items/images-2x/img_casket_jewels_zone7.827b9141.ktx items/images-1x/img_bag_jewels_zone7.6d045ab3.dds items/images-1x/img_bag_jewels_zone7.7fc094a7.ktx items/images-2x/img_bag_jewels_zone7.176fdfc4.dds items/images-2x/img_bag_jewels_zone7.634c46f4.ktx items/images-1x/img_bag_coins_zone7.0d0f0f29.dds items/images-1x/img_bag_coins_zone7.90bb0273.ktx items/images-2x/img_bag_coins_zone7.7d369451.dds items/images-2x/img_bag_coins_zone7.54b83d86.ktx items/images-1x/img_bag_coins_platinum.0d1beef1.dds items/images-1x/img_bag_coins_platinum.72202ba6.ktx items/images-2x/img_bag_coins_platinum.f1b09a53.dds items/images-2x/img_bag_coins_platinum.c4fed359.ktx items/images-1x/helm9/img_helm_moon.8e0f3e9e.ktx items/images-1x/helm9/img_helm_moon.46ea5183.dds items/images-2x/helm9/img_helm_moon.d47dcba1.dds items/images-2x/helm9/img_helm_moon.9fa23936.ktx items/images-1x/helm9/img_helm_legioner.be1ad10a.dds items/images-1x/helm9/img_helm_legioner.00e0586d.ktx items/images-2x/helm9/img_helm_legioner.8eafc105.dds items/images-2x/helm9/img_helm_legioner.93e8833a.ktx items/images-1x/helm9/img_helm_horned.56f05bcd.ktx items/images-1x/helm9/img_helm_horned.8df121c0.dds items/images-2x/helm9/img_helm_horned.67b36dc3.dds items/images-2x/helm9/img_helm_horned.a31246eb.ktx items/images-1x/helm8/img_helm_super_joker.23c74a29.dds items/images-1x/helm8/img_helm_super_joker.395d47eb.ktx items/images-2x/helm8/img_helm_super_joker.56ba5da8.dds items/images-2x/helm8/img_helm_super_joker.38da55d8.ktx items/images-1x/helm8/img_helm_general.cc42d733.ktx items/images-1x/helm8/img_helm_general.16b12eab.dds items/images-2x/helm8/img_helm_general.a0d28cf3.dds items/images-2x/helm8/img_helm_general.fea61fea.ktx items/images-1x/helm8/img_helm_crescent.789c5ad3.dds items/images-1x/helm8/img_helm_crescent.5cd542e1.ktx items/images-2x/helm8/img_helm_crescent.3835edc6.dds items/images-2x/helm8/img_helm_crescent.8a295d0e.ktx items/images-1x/helm7/img_helm_steel.0ba22fe8.ktx items/images-1x/helm7/img_helm_steel.67f86c85.dds items/images-2x/helm7/img_helm_steel.dabee6dd.dds items/images-2x/helm7/img_helm_steel.44c2a7ab.ktx items/images-1x/helm7/img_helm_spike.fd4370bd.dds items/images-1x/helm7/img_helm_spike.c1d58746.ktx items/images-2x/helm7/img_helm_spike.038c78ad.dds items/images-2x/helm7/img_helm_spike.f2f9a1c2.ktx items/images-1x/helm7/img_helm_mantis.1530c647.ktx items/images-1x/helm7/img_helm_mantis.7959ca81.dds items/images-2x/helm7/img_helm_mantis.0f049aad.dds items/images-2x/helm7/img_helm_mantis.ef03b654.ktx items/images-1x/helm6/img_helm_super_strips.fbcbb24f.dds items/images-1x/helm6/img_helm_super_strips.0658b944.ktx items/images-2x/helm6/img_helm_super_strips.00ed81ea.dds items/images-2x/helm6/img_helm_super_strips.ec6b1e60.ktx items/images-1x/helm6/img_helm_hardened.8e4ebdc3.ktx items/images-1x/helm6/img_helm_hardened.30af3d93.dds items/images-2x/helm6/img_helm_hardened.0ca87b96.dds items/images-2x/helm6/img_helm_hardened.941f3385.ktx items/images-1x/helm6/img_helm_bronze.cb97832d.dds items/images-1x/helm6/img_helm_bronze.7324997e.ktx items/images-2x/helm6/img_helm_bronze.19a4576e.dds items/images-2x/helm6/img_helm_bronze.756cdb43.ktx items/images-1x/helm5/img_helm_tail.d9597820.dds items/images-1x/helm5/img_helm_tail.332e932f.ktx items/images-2x/helm5/img_helm_tail.2eec8cf6.dds items/images-2x/helm5/img_helm_tail.aab3b5aa.ktx items/images-1x/helm5/img_helm_smart_gabled.985749cf.dds items/images-1x/helm5/img_helm_smart_gabled.933fbe8e.ktx items/images-2x/helm5/img_helm_smart_gabled.8d903c12.dds items/images-2x/helm5/img_helm_smart_gabled.40071332.ktx items/images-1x/helm5/img_helm_kabuto.2e05a048.ktx items/images-1x/helm5/img_helm_kabuto.2f8fa65b.dds items/images-2x/helm5/img_helm_kabuto.31e8ea08.dds items/images-2x/helm5/img_helm_kabuto.e9dc4ea4.ktx items/images-1x/helm4/img_helm_viking.f95c467d.dds items/images-1x/helm4/img_helm_viking.eac81f9e.ktx items/images-2x/helm4/img_helm_viking.08225176.dds items/images-2x/helm4/img_helm_viking.d32b9b2d.ktx items/images-1x/helm4/img_helm_lobster.c9f7736e.ktx items/images-1x/helm4/img_helm_lobster.92c28060.dds items/images-2x/helm4/img_helm_lobster.85d6bf6a.dds items/images-2x/helm4/img_helm_lobster.deb7f423.ktx items/images-1x/helm4/img_helm_blood.340a3a36.dds items/images-1x/helm4/img_helm_blood.d04987cd.ktx items/images-2x/helm4/img_helm_blood.485c534d.dds items/images-2x/helm4/img_helm_blood.dd95efd8.ktx items/images-1x/helm38/img_helm_xmas14_horns.9825625a.ktx items/images-1x/helm38/img_helm_xmas14_horns.6a003c2c.dds items/images-2x/helm38/img_helm_xmas14_horns.8474e2a9.dds items/images-2x/helm38/img_helm_xmas14_horns.1b6d44de.ktx items/images-1x/helm36/img_helm_xmas16_horns.1f9a94fd.ktx items/images-1x/helm36/img_helm_xmas16_horns.babf6d4b.dds items/images-2x/helm36/img_helm_xmas16_horns.1a899943.dds items/images-2x/helm36/img_helm_xmas16_horns.85d50410.ktx items/images-1x/helm36/img_helm_xmas15_santa.8d67ceed.ktx items/images-1x/helm36/img_helm_xmas15_santa.2d88e8da.dds items/images-2x/helm36/img_helm_xmas15_santa.20e5ab53.dds items/images-2x/helm36/img_helm_xmas15_santa.9c57421e.ktx items/images-1x/helm36/img_helm_xmas15_horns.60017777.dds items/images-1x/helm36/img_helm_xmas15_horns.c38c9718.ktx items/images-2x/helm36/img_helm_xmas15_horns.a35023a1.dds items/images-2x/helm36/img_helm_xmas15_horns.c827cdd9.ktx items/images-1x/helm35/img_helm_xmas14_santa.dfe9f413.dds items/images-1x/helm35/img_helm_xmas14_santa.836926d2.ktx items/images-2x/helm35/img_helm_xmas14_santa.82d6b0d9.dds items/images-2x/helm35/img_helm_xmas14_santa.8a1ef085.ktx items/images-1x/helm35/img_helm_xmas14_horns.6a003c2c.dds items/images-1x/helm35/img_helm_xmas14_horns.9825625a.ktx items/images-2x/helm35/img_helm_xmas14_horns.8474e2a9.dds items/images-2x/helm35/img_helm_xmas14_horns.1b6d44de.ktx items/images-1x/helm35/img_helm_val17_wings.60452fbb.ktx items/images-1x/helm35/img_helm_val17_wings.aefdbbbd.dds items/images-2x/helm35/img_helm_val17_wings.aae8e611.dds items/images-2x/helm35/img_helm_val17_wings.4f36f3e7.ktx items/images-1x/helm33/img_helm_super_predator.2767c1f8.dds items/images-1x/helm33/img_helm_super_predator.572103b7.ktx items/images-2x/helm33/img_helm_super_predator.c62f20b0.dds items/images-2x/helm33/img_helm_super_predator.cd2e75fe.ktx items/images-1x/helm33/img_helm_quasar.dd1cbf07.ktx items/images-1x/helm33/img_helm_quasar.ef41ccd7.dds items/images-2x/helm33/img_helm_quasar.0c0aad81.dds items/images-2x/helm33/img_helm_quasar.f1cee35c.ktx items/images-1x/helm33/img_helm_inferno.d0963430.dds items/images-1x/helm33/img_helm_inferno.b7140b6d.ktx items/images-2x/helm33/img_helm_inferno.2f65c429.dds items/images-2x/helm33/img_helm_inferno.dd0e4c28.ktx items/images-1x/helm33/img_helm_anger.11b42c73.ktx items/images-1x/helm33/img_helm_anger.864d3fd1.dds items/images-2x/helm33/img_helm_anger.abee9ac4.dds items/images-2x/helm33/img_helm_anger.a5c21cec.ktx items/images-1x/helm32/img_helm_hw16_pumpkin.4a7c4a56.dds items/images-1x/helm32/img_helm_hw16_pumpkin.f6d8a816.ktx items/images-2x/helm32/img_helm_hw16_pumpkin.96274566.dds items/images-2x/helm32/img_helm_hw16_pumpkin.1bf509ca.ktx items/images-1x/helm32/img_helm_hw15_witch.05d241c7.dds items/images-1x/helm32/img_helm_hw15_witch.081ce30c.ktx items/images-2x/helm32/img_helm_hw15_witch.2f966177.dds items/images-2x/helm32/img_helm_hw15_witch.ed7f3da7.ktx items/images-1x/helm32/img_helm_hw15_pumpkin.dc788612.dds items/images-1x/helm32/img_helm_hw15_pumpkin.a205114f.ktx items/images-2x/helm32/img_helm_hw15_pumpkin.509cc21c.dds items/images-2x/helm32/img_helm_hw15_pumpkin.f7eb736c.ktx items/images-1x/helm30/img_helm_c2_z5_dragon.7f5ecc07.ktx items/images-1x/helm30/img_helm_c2_z5_dragon.b15f8f25.dds items/images-2x/helm30/img_helm_c2_z5_dragon.f9ca7511.dds items/images-2x/helm30/img_helm_c2_z5_dragon.ead94894.ktx items/images-1x/helm30/img_helm_c2_z3_sentinel.1b5f5cfe.dds items/images-1x/helm30/img_helm_c2_z3_sentinel.7be291d0.ktx items/images-2x/helm30/img_helm_c2_z3_sentinel.a0a633c4.dds items/images-2x/helm30/img_helm_c2_z3_sentinel.b6253a95.ktx items/images-1x/helm30/img_helm_c1_z4_steel.dac979c5.ktx items/images-1x/helm30/img_helm_c1_z4_steel.285ad305.dds items/images-2x/helm30/img_helm_c1_z4_steel.4bfc5789.dds items/images-2x/helm30/img_helm_c1_z4_steel.562270ce.ktx items/images-1x/helm30/img_helm_anniversary_10th.51146069.dds items/images-1x/helm30/img_helm_anniversary_10th.ae8aee32.ktx items/images-2x/helm30/img_helm_anniversary_10th.f04f4824.dds items/images-2x/helm30/img_helm_anniversary_10th.04e23c4f.ktx items/images-1x/helm3/img_helm_super_mask.7726be18.ktx items/images-1x/helm3/img_helm_super_mask.5dc79a45.dds items/images-2x/helm3/img_helm_super_mask.d1579cf4.dds items/images-2x/helm3/img_helm_super_mask.b45e4c1e.ktx items/images-1x/helm3/img_helm_closed.5931458a.ktx items/images-1x/helm3/img_helm_closed.d1e777d5.dds items/images-2x/helm3/img_helm_closed.3a7f50c4.dds items/images-2x/helm3/img_helm_closed.b97cd23a.ktx items/images-1x/helm29/img_helm_hw16_witch.4b6d2288.dds items/images-1x/helm29/img_helm_hw16_witch.6492639d.ktx items/images-2x/helm29/img_helm_hw16_witch.0be6d245.dds items/images-2x/helm29/img_helm_hw16_witch.acbaeeb8.ktx items/images-1x/helm29/img_helm_advanced_conical.6cd02140.dds items/images-1x/helm29/img_helm_advanced_conical.dae6bf5c.ktx items/images-2x/helm29/img_helm_advanced_conical.ee3567e7.dds items/images-2x/helm29/img_helm_advanced_conical.6f9bad4b.ktx items/images-1x/helm27/img_helm_xmas16_santa.47cc64f4.ktx items/images-1x/helm27/img_helm_xmas16_santa.1f526560.dds items/images-2x/helm27/img_helm_xmas16_santa.572581ec.dds items/images-2x/helm27/img_helm_xmas16_santa.c0297d05.ktx items/images-1x/helm27/img_helm_val18_panda.c1189c9b.dds items/images-1x/helm27/img_helm_val18_panda.7f8600b4.ktx items/images-2x/helm27/img_helm_val18_panda.c9d28e19.dds items/images-2x/helm27/img_helm_val18_panda.18d86b7d.ktx items/images-1x/helm27/img_helm_ny18_hat.c7695851.ktx items/images-1x/helm27/img_helm_ny18_hat.093b902e.dds items/images-2x/helm27/img_helm_ny18_hat.bcb0fbfe.dds items/images-2x/helm27/img_helm_ny18_hat.cc0d3d0e.ktx items/images-1x/helm27/img_helm_hw17_cylinder.20f3349e.dds items/images-1x/helm27/img_helm_hw17_cylinder.b2816959.ktx items/images-2x/helm27/img_helm_hw17_cylinder.39d71318.dds items/images-2x/helm27/img_helm_hw17_cylinder.6f60ddea.ktx items/images-1x/helm27/img_helm_chny18_traditional.81c3afcd.ktx items/images-1x/helm27/img_helm_chny18_traditional.187a9fc9.dds items/images-2x/helm27/img_helm_chny18_traditional.78e8ed0e.dds items/images-2x/helm27/img_helm_chny18_traditional.bd7ebfb7.ktx items/images-1x/helm26/img_helm_z6_final.98787392.dds items/images-1x/helm26/img_helm_z6_final.3d53a2fa.ktx items/images-2x/helm26/img_helm_z6_final.cd9e12cc.dds items/images-2x/helm26/img_helm_z6_final.2f7e8caa.ktx items/images-1x/helm26/img_helm_navigators_breath_mask.911a384f.dds items/images-1x/helm26/img_helm_navigators_breath_mask.02e23d56.ktx items/images-2x/helm26/img_helm_navigators_breath_mask.6730f277.dds items/images-2x/helm26/img_helm_navigators_breath_mask.a45a4dc8.ktx items/images-1x/helm25/img_helm_h85.72e0dd17.dds items/images-1x/helm25/img_helm_h85.d9e2b696.ktx items/images-2x/helm25/img_helm_h85.b5e36da4.dds items/images-2x/helm25/img_helm_h85.30910e83.ktx items/images-1x/helm25/img_helm_h83.6668c9cf.dds items/images-1x/helm25/img_helm_h83.e216f8c9.ktx items/images-2x/helm25/img_helm_h83.d085d6be.dds items/images-2x/helm25/img_helm_h83.45243ceb.ktx items/images-1x/helm25/img_helm_faceless_mask.cbc0f115.dds items/images-1x/helm25/img_helm_faceless_mask.950c40de.ktx items/images-2x/helm25/img_helm_faceless_mask.ac395d64.dds items/images-2x/helm25/img_helm_faceless_mask.6bdbe85d.ktx items/images-1x/helm24/img_helm_super_laser.d347808f.ktx items/images-1x/helm24/img_helm_super_laser.b0769b28.dds items/images-2x/helm24/img_helm_super_laser.7c93cc69.dds items/images-2x/helm24/img_helm_super_laser.f69f208f.ktx items/images-1x/helm24/img_helm_cyber_samurai.dce25476.dds items/images-1x/helm24/img_helm_cyber_samurai.3d314d87.ktx items/images-2x/helm24/img_helm_cyber_samurai.275d2e71.dds items/images-2x/helm24/img_helm_cyber_samurai.e2fbf91f.ktx items/images-1x/helm24/img_helm_cyber_mask.18e6d127.dds items/images-1x/helm24/img_helm_cyber_mask.465f333f.ktx items/images-2x/helm24/img_helm_cyber_mask.d9ca7221.dds items/images-2x/helm24/img_helm_cyber_mask.52ad9f27.ktx items/images-1x/helm23/img_helm_tubes.7a721215.dds items/images-1x/helm23/img_helm_tubes.47365e58.ktx items/images-2x/helm23/img_helm_tubes.23105c96.dds items/images-2x/helm23/img_helm_tubes.756c33cb.ktx items/images-1x/helm23/img_helm_crystalline.b58291ab.ktx items/images-1x/helm23/img_helm_crystalline.1b02a486.dds items/images-2x/helm23/img_helm_crystalline.a61be007.dds items/images-2x/helm23/img_helm_crystalline.571bcd71.ktx items/images-1x/helm22/img_helm_im_9.c49a5c39.ktx items/images-1x/helm22/img_helm_im_9.b8b0b9d1.dds items/images-2x/helm22/img_helm_im_9.490b1da4.dds items/images-2x/helm22/img_helm_im_9.500c0da5.ktx items/images-1x/helm22/img_helm_im_8.3fc9b15f.ktx items/images-1x/helm22/img_helm_im_8.87da23c8.dds items/images-2x/helm22/img_helm_im_8.35f65ab9.dds items/images-2x/helm22/img_helm_im_8.c79b3f40.ktx items/images-1x/helm22/img_helm_im_7.b922f4c4.dds items/images-1x/helm22/img_helm_im_7.02d37c99.ktx items/images-2x/helm22/img_helm_im_7.38328681.dds items/images-2x/helm22/img_helm_im_7.b8e0627b.ktx items/images-1x/helm20/img_helm_super_winged.75e99fd5.dds items/images-1x/helm20/img_helm_super_winged.7e0d896e.ktx items/images-2x/helm20/img_helm_super_winged.6fe1898a.dds items/images-2x/helm20/img_helm_super_winged.226efff9.ktx items/images-1x/helm20/img_helm_im_5.3dcc992d.dds items/images-1x/helm20/img_helm_im_5.ab73a318.ktx items/images-2x/helm20/img_helm_im_5.f80983a0.dds items/images-2x/helm20/img_helm_im_5.9c54a915.ktx items/images-1x/helm20/img_helm_im_4.f457b564.ktx items/images-1x/helm20/img_helm_im_4.a9cdef72.dds items/images-2x/helm20/img_helm_im_4.dbb5b116.dds items/images-2x/helm20/img_helm_im_4.03df239c.ktx items/images-1x/helm20/img_helm_im_3.c63649bd.ktx items/images-1x/helm20/img_helm_im_3.9b8378a0.dds items/images-2x/helm20/img_helm_im_3.ab09593a.dds items/images-2x/helm20/img_helm_im_3.affe9d6b.ktx items/images-1x/helm20/img_helm_im_2.23aa5632.ktx items/images-1x/helm20/img_helm_im_2.6dac950b.dds items/images-2x/helm20/img_helm_im_2.9ce3daae.dds items/images-2x/helm20/img_helm_im_2.bd35a244.ktx items/images-1x/helm20/img_helm_im_1.442e9d24.dds items/images-1x/helm20/img_helm_im_1.f7d2350f.ktx items/images-2x/helm20/img_helm_im_1.0bb6a9f8.dds items/images-2x/helm20/img_helm_im_1.3cd89985.ktx items/images-1x/helm2/img_helm_soldier_kabuto.2b036dd8.ktx items/images-1x/helm2/img_helm_soldier_kabuto.111cf6a9.dds items/images-2x/helm2/img_helm_soldier_kabuto.348ce393.dds items/images-2x/helm2/img_helm_soldier_kabuto.22a7259e.ktx items/images-1x/helm2/img_helm_green_mask.c462ab6f.dds items/images-1x/helm2/img_helm_green_mask.ccad1271.ktx items/images-2x/helm2/img_helm_green_mask.bd67c138.dds items/images-2x/helm2/img_helm_green_mask.9895bd72.ktx items/images-1x/helm2/img_helm_gabled.b2edfd78.dds items/images-1x/helm2/img_helm_gabled.b9dd27c4.ktx items/images-2x/helm2/img_helm_gabled.8bc74c01.dds items/images-2x/helm2/img_helm_gabled.26e8223e.ktx items/images-1x/helm18/img_helm_super_samurai.fd84d104.dds items/images-1x/helm18/img_helm_super_samurai.7ae1096a.ktx items/images-2x/helm18/img_helm_super_samurai.e6a5ccfc.dds items/images-2x/helm18/img_helm_super_samurai.eee348c7.ktx items/images-1x/helm18/img_helm_super_plumed.bf9a2b62.ktx items/images-1x/helm18/img_helm_super_plumed.1a57c0ef.dds items/images-2x/helm18/img_helm_super_plumed.67406a22.dds items/images-2x/helm18/img_helm_super_plumed.d6fa779e.ktx items/images-1x/helm18/img_helm_spartian.d392147f.dds items/images-1x/helm18/img_helm_spartian.d266c170.ktx items/images-2x/helm18/img_helm_spartian.15cef8c4.dds items/images-2x/helm18/img_helm_spartian.afcea2cf.ktx items/images-1x/helm18/img_helm_demon.5aa535df.ktx items/images-1x/helm18/img_helm_demon.eeb7c5af.dds items/images-2x/helm18/img_helm_demon.786d7627.dds items/images-2x/helm18/img_helm_demon.35d3bba3.ktx items/images-1x/helm16/img_helm_ritual.6c155f04.dds items/images-1x/helm16/img_helm_ritual.1736208f.ktx items/images-2x/helm16/img_helm_ritual.8964105f.dds items/images-2x/helm16/img_helm_ritual.fc91120e.ktx items/images-1x/helm16/img_helm_knightly.f2616365.ktx items/images-1x/helm16/img_helm_knightly.bafac13b.dds items/images-2x/helm16/img_helm_knightly.fb467d01.dds items/images-2x/helm16/img_helm_knightly.b1f256b4.ktx items/images-1x/helm16/img_helm_ifrit.51f8f6a2.ktx items/images-1x/helm16/img_helm_ifrit.a6bb27a7.dds items/images-2x/helm16/img_helm_ifrit.6e684e36.dds items/images-2x/helm16/img_helm_ifrit.cff202bd.ktx items/images-1x/helm16/img_helm_icarus.1e86f6cd.ktx items/images-1x/helm16/img_helm_icarus.e9584fab.dds items/images-2x/helm16/img_helm_icarus.72e68842.dds items/images-2x/helm16/img_helm_icarus.b2efd832.ktx items/images-1x/helm16/img_helm_golden.d30196b6.dds items/images-1x/helm16/img_helm_golden.24ddd5cd.ktx items/images-2x/helm16/img_helm_golden.f417ed23.dds items/images-2x/helm16/img_helm_golden.36eded7e.ktx items/images-1x/helm16/img_helm_celestial.e6d29ac7.ktx items/images-1x/helm16/img_helm_celestial.3c902995.dds items/images-2x/helm16/img_helm_celestial.017901d5.dds items/images-2x/helm16/img_helm_celestial.74907f15.ktx items/images-1x/helm15/img_helm_triton.aae03856.dds items/images-1x/helm15/img_helm_triton.19b2d512.ktx items/images-2x/helm15/img_helm_triton.ec1684f5.dds items/images-2x/helm15/img_helm_triton.12476592.ktx items/images-1x/helm15/img_helm_super_horned.6d750ea2.ktx items/images-1x/helm15/img_helm_super_horned.fa0690ec.dds items/images-2x/helm15/img_helm_super_horned.39e3fc05.dds items/images-2x/helm15/img_helm_super_horned.0639e32d.ktx items/images-1x/helm15/img_helm_snow.f0f3b4e6.dds items/images-1x/helm15/img_helm_snow.d64cfbdf.ktx items/images-2x/helm15/img_helm_snow.c249f103.dds items/images-2x/helm15/img_helm_snow.e1e4e09b.ktx items/images-1x/helm15/img_helm_dark_legioner.d4e4c4a2.ktx items/images-1x/helm15/img_helm_dark_legioner.a225a6b6.dds items/images-2x/helm15/img_helm_dark_legioner.da37426e.dds items/images-2x/helm15/img_helm_dark_legioner.cf1a4a52.ktx items/images-1x/helm15/img_helm_darkness.49689840.dds items/images-1x/helm15/img_helm_darkness.99c25029.ktx items/images-2x/helm15/img_helm_darkness.5c3fdb6d.dds items/images-2x/helm15/img_helm_darkness.069ba606.ktx items/images-1x/helm15/img_helm_beast.d96ce2a1.dds items/images-1x/helm15/img_helm_beast.97e9b331.ktx items/images-2x/helm15/img_helm_beast.3284b2a7.dds items/images-2x/helm15/img_helm_beast.afa6e7e6.ktx items/images-1x/helm14/img_helm_two_face.5d38356c.dds items/images-1x/helm14/img_helm_two_face.1a2ca9b0.ktx items/images-2x/helm14/img_helm_two_face.da0d9e80.dds items/images-2x/helm14/img_helm_two_face.0bdb43b7.ktx items/images-1x/helm14/img_helm_samurais.5c381d33.dds items/images-1x/helm14/img_helm_samurais.7b12b382.ktx items/images-2x/helm14/img_helm_samurais.5999edc1.dds items/images-2x/helm14/img_helm_samurais.aff681d4.ktx items/images-1x/helm14/img_helm_dark.2d6e0f1b.dds items/images-1x/helm14/img_helm_dark.2cbe11ac.ktx items/images-2x/helm14/img_helm_dark.b4cabf59.dds items/images-2x/helm14/img_helm_dark.97933713.ktx items/images-1x/helm11/img_helm_super_scarab.d9a3dead.ktx items/images-1x/helm11/img_helm_super_scarab.948a36db.dds items/images-2x/helm11/img_helm_super_scarab.682b9103.dds items/images-2x/helm11/img_helm_super_scarab.41eb9670.ktx items/images-1x/helm11/img_helm_sun.42f66b67.dds items/images-1x/helm11/img_helm_sun.0d05c10c.ktx items/images-2x/helm11/img_helm_sun.91fb7711.dds items/images-2x/helm11/img_helm_sun.12a4480d.ktx items/images-1x/helm11/img_helm_silver.ebfb5224.ktx items/images-1x/helm11/img_helm_silver.5de79929.dds items/images-2x/helm11/img_helm_silver.8455d15b.dds items/images-2x/helm11/img_helm_silver.8ac3c275.ktx items/images-1x/helm11/img_helm_emerald.e0e705f2.dds items/images-1x/helm11/img_helm_emerald.cb75cc60.ktx items/images-2x/helm11/img_helm_emerald.54d4a2a2.dds items/images-2x/helm11/img_helm_emerald.f59cac72.ktx items/images-1x/helm11/img_helm_crown_of_night.21c0d8c7.ktx items/images-1x/helm11/img_helm_crown_of_night.b9873a41.dds items/images-2x/helm11/img_helm_crown_of_night.b882262d.dds items/images-2x/helm11/img_helm_crown_of_night.42257aaa.ktx items/images-1x/helm11/img_helm_crimson.853b05cc.dds items/images-1x/helm11/img_helm_crimson.4e5e64e7.ktx items/images-2x/helm11/img_helm_crimson.50bbeee6.dds items/images-2x/helm11/img_helm_crimson.0950f334.ktx items/images-1x/helm10/img_helm_iron.376adde4.dds items/images-1x/helm10/img_helm_iron.f487b835.ktx items/images-2x/helm10/img_helm_iron.b1d1ac5a.dds items/images-2x/helm10/img_helm_iron.011e6f42.ktx items/images-1x/helm10/img_helm_dawn.8d4755b9.dds items/images-1x/helm10/img_helm_dawn.a71a3cd1.ktx items/images-2x/helm10/img_helm_dawn.dbe37b9b.dds items/images-2x/helm10/img_helm_dawn.22e075e0.ktx items/images-1x/helm10/img_helm_assassin.fdbbd7aa.ktx items/images-1x/helm10/img_helm_assassin.00d3c738.dds items/images-2x/helm10/img_helm_assassin.e0c8afe8.dds items/images-2x/helm10/img_helm_assassin.83a8025e.ktx items/images-1x/helm1/img_helm_light.a51f0c64.dds items/images-1x/helm1/img_helm_light.b44ee0f9.ktx items/images-2x/helm1/img_helm_light.4230697d.dds items/images-2x/helm1/img_helm_light.997015a0.ktx items/images-1x/helm1/img_helm_kendo_mask.63ebd597.ktx items/images-1x/helm1/img_helm_kendo_mask.3bca1782.dds items/images-2x/helm1/img_helm_kendo_mask.337a4c98.dds items/images-2x/helm1/img_helm_kendo_mask.aa3cf595.ktx items/images-1x/helm1/img_helm_conical_hat.67e5db1a.dds items/images-1x/helm1/img_helm_conical_hat.7f393576.ktx items/images-2x/helm1/img_helm_conical_hat.c9fee676.dds items/images-2x/helm1/img_helm_conical_hat.01668f5b.ktx items/images-1x/halloween20/ranged_hw20_skull.64d51eed.ktx items/images-1x/halloween20/ranged_hw20_skull.6d80853f.dds items/images-2x/halloween20/ranged_hw20_skull.76cb70c5.dds items/images-2x/halloween20/ranged_hw20_skull.eda68272.ktx items/images-1x/halloween20/img_weapon_hw14_scythe.9af4f451.dds items/images-1x/halloween20/img_weapon_hw14_scythe.12ed897f.ktx items/images-2x/halloween20/img_weapon_hw14_scythe.c0a2a529.dds items/images-2x/halloween20/img_weapon_hw14_scythe.2e84fb3b.ktx items/images-1x/halloween20/helm_woodoo_hw20.fcd329aa.ktx items/images-1x/halloween20/helm_woodoo_hw20.1356b070.dds items/images-2x/halloween20/helm_woodoo_hw20.0b4404d6.dds items/images-2x/halloween20/helm_woodoo_hw20.a727a393.ktx items/images-1x/halloween20/armor_woodoo_hw20.00c591e9.dds items/images-1x/halloween20/armor_woodoo_hw20.93b33461.ktx items/images-2x/halloween20/armor_woodoo_hw20.bf9e42d3.dds items/images-2x/halloween20/armor_woodoo_hw20.502bea2c.ktx items/images-1x/cny21_22/mdl_ranged_weighed_kunai.e3e476c1.dds items/images-1x/cny21_22/mdl_ranged_weighed_kunai.16c13581.ktx items/images-2x/cny21_22/mdl_ranged_weighed_kunai.0770380f.dds items/images-2x/cny21_22/mdl_ranged_weighed_kunai.e1fdc286.ktx items/images-1x/cny21_22/jian_weapon.3e426d3d.dds items/images-1x/cny21_22/jian_weapon.0bcfc005.ktx items/images-2x/cny21_22/jian_weapon.ae5658c1.dds items/images-2x/cny21_22/jian_weapon.914a04cf.ktx items/images-1x/cny21_22/img_weapon_guandao.e63e7603.ktx items/images-1x/cny21_22/img_weapon_guandao.53da29bc.dds items/images-2x/cny21_22/img_weapon_guandao.159be351.dds items/images-2x/cny21_22/img_weapon_guandao.0328b4cb.ktx items/images-1x/cny21_22/img_magic_waterball.dbfab3d3.dds items/images-1x/cny21_22/img_magic_waterball.2d306eb2.ktx items/images-2x/cny21_22/img_magic_waterball.f2ee6771.dds items/images-2x/cny21_22/img_magic_waterball.b9a890de.ktx items/images-1x/cny21_22/golden_bull_armor.01ad3e72.dds items/images-1x/cny21_22/golden_bull_armor.7b85d7d8.ktx items/images-2x/cny21_22/golden_bull_armor.745e80ca.dds items/images-2x/cny21_22/golden_bull_armor.8fa0abfb.ktx items/images-1x/cny21_22/chny_fans.6d0e931b.dds items/images-1x/cny21_22/chny_fans.90248bd7.ktx items/images-2x/cny21_22/chny_fans.38674a03.dds items/images-2x/cny21_22/chny_fans.01a5f947.ktx items/images-1x/cny21_22/bull_helm.d7a51168.ktx items/images-1x/cny21_22/bull_helm.cfcf1595.dds items/images-2x/cny21_22/bull_helm.e20dfc66.dds items/images-2x/cny21_22/bull_helm.81292af3.ktx items/images-1x/armor9/img_armor_super_feathered.03869707.dds items/images-1x/armor9/img_armor_super_feathered.37a07e28.ktx items/images-2x/armor9/img_armor_super_feathered.e54cd096.dds items/images-2x/armor9/img_armor_super_feathered.8ef54f19.ktx items/images-1x/armor9/img_armor_legioner.9d941dec.ktx items/images-1x/armor9/img_armor_legioner.e73e4020.dds items/images-2x/armor9/img_armor_legioner.844d0d01.dds items/images-2x/armor9/img_armor_legioner.0e8dfa38.ktx items/images-1x/armor9/img_armor_gilded_centurion.93127544.dds items/images-1x/armor9/img_armor_gilded_centurion.1df6e11f.ktx items/images-2x/armor9/img_armor_gilded_centurion.874c710b.dds items/images-2x/armor9/img_armor_gilded_centurion.a5aa276b.ktx items/images-1x/armor8/img_armor_spike.98264aea.ktx items/images-1x/armor8/img_armor_spike.46b4e797.dds items/images-2x/armor8/img_armor_spike.6c3bebfe.dds items/images-2x/armor8/img_armor_spike.04affab0.ktx items/images-1x/armor8/img_armor_mantis.5f497a08.dds items/images-1x/armor8/img_armor_mantis.1ccd1068.ktx items/images-2x/armor8/img_armor_mantis.38788b72.dds items/images-2x/armor8/img_armor_mantis.56a15220.ktx items/images-1x/armor8/img_armor_grand_chain.632e6c34.ktx items/images-1x/armor8/img_armor_grand_chain.e28bda36.dds items/images-2x/armor8/img_armor_grand_chain.a8bc9c31.dds items/images-2x/armor8/img_armor_grand_chain.0095f57b.ktx items/images-1x/armor7/img_armor_strong_barbarian.c0209301.ktx items/images-1x/armor7/img_armor_strong_barbarian.42f8f36f.dds items/images-2x/armor7/img_armor_strong_barbarian.9ed6cc6d.dds items/images-2x/armor7/img_armor_strong_barbarian.6ff2754a.ktx items/images-1x/armor7/img_armor_imhotep.085fd57d.ktx items/images-1x/armor7/img_armor_imhotep.ce6e1bee.dds items/images-2x/armor7/img_armor_imhotep.45178589.dds items/images-2x/armor7/img_armor_imhotep.864c9efa.ktx items/images-1x/armor7/img_armor_centurion.a5310e53.dds items/images-1x/armor7/img_armor_centurion.491d0c8e.ktx items/images-2x/armor7/img_armor_centurion.feb9f42d.dds items/images-2x/armor7/img_armor_centurion.8853192a.ktx items/images-1x/armor6/img_armor_guard.e4abcc2e.ktx items/images-1x/armor6/img_armor_guard.d1a62957.dds items/images-2x/armor6/img_armor_guard.a19855ca.dds items/images-2x/armor6/img_armor_guard.957551fd.ktx items/images-1x/armor6/img_armor_chain.b1c5f4ca.dds items/images-1x/armor6/img_armor_chain.e0454bcc.ktx items/images-2x/armor6/img_armor_chain.4c9e6c46.dds items/images-2x/armor6/img_armor_chain.dcba81e4.ktx items/images-1x/armor6/img_armor_blood_master.bce5aacd.dds items/images-1x/armor6/img_armor_blood_master.bef91ea2.ktx items/images-2x/armor6/img_armor_blood_master.5fc546cb.dds items/images-2x/armor6/img_armor_blood_master.3eb833f1.ktx items/images-1x/armor5/img_armor_super_crow.376dfdf1.dds items/images-1x/armor5/img_armor_super_crow.452235db.ktx items/images-2x/armor5/img_armor_super_crow.7205d117.dds items/images-2x/armor5/img_armor_super_crow.54a0fcb3.ktx items/images-1x/armor5/img_armor_sensei_kendo.611b3946.ktx items/images-1x/armor5/img_armor_sensei_kendo.49dd7b54.dds items/images-2x/armor5/img_armor_sensei_kendo.0de6f0ed.dds items/images-2x/armor5/img_armor_sensei_kendo.28596802.ktx items/images-1x/armor5/img_armor_ronin.ef6f850f.dds items/images-1x/armor5/img_armor_ronin.9b12254f.ktx items/images-2x/armor5/img_armor_ronin.10232f88.dds items/images-2x/armor5/img_armor_ronin.de1c2c43.ktx items/images-1x/armor4/img_armor_chain_robe.3fe08ed8.ktx items/images-1x/armor4/img_armor_chain_robe.ed7e6e6b.dds items/images-2x/armor4/img_armor_chain_robe.8a546094.dds items/images-2x/armor4/img_armor_chain_robe.b91e5855.ktx items/images-1x/armor4/img_armor_bronze.52112afc.dds items/images-1x/armor4/img_armor_bronze.02830677.ktx items/images-2x/armor4/img_armor_bronze.1c1a0a65.dds items/images-2x/armor4/img_armor_bronze.ac01f215.ktx items/images-1x/armor4/img_armor_barbarian.aa638a73.ktx items/images-1x/armor4/img_armor_barbarian.8a01e4ad.dds items/images-2x/armor4/img_armor_barbarian.209faa2a.dds items/images-2x/armor4/img_armor_barbarian.186ff4a9.ktx items/images-1x/armor33/img_armor_xmas14_santa.4705bf6c.ktx items/images-1x/armor33/img_armor_xmas14_santa.fbf0dff6.dds items/images-2x/armor33/img_armor_xmas14_santa.b2891d24.dds items/images-2x/armor33/img_armor_xmas14_santa.cb085fd0.ktx items/images-1x/armor33/img_armor_val17_mantle.93755d76.ktx items/images-1x/armor33/img_armor_val17_mantle.e241acbf.dds items/images-2x/armor33/img_armor_val17_mantle.911081ed.dds items/images-2x/armor33/img_armor_val17_mantle.d354b4eb.ktx items/images-1x/armor33/img_armor_hw16_mantle.9062aa0e.dds items/images-1x/armor33/img_armor_hw16_mantle.0842312a.ktx items/images-2x/armor33/img_armor_hw16_mantle.a6dbb730.dds items/images-2x/armor33/img_armor_hw16_mantle.46df9347.ktx items/images-1x/armor32/img_armor_super_fusion.62f4eb4a.ktx items/images-1x/armor32/img_armor_super_fusion.c2dc0f4c.dds items/images-2x/armor32/img_armor_super_fusion.91cbb5ea.dds items/images-2x/armor32/img_armor_super_fusion.757aebf3.ktx items/images-1x/armor32/img_armor_redshift.ba9d2328.dds items/images-1x/armor32/img_armor_redshift.63ff7864.ktx items/images-2x/armor32/img_armor_redshift.f4ec0910.dds items/images-2x/armor32/img_armor_redshift.e377e678.ktx items/images-1x/armor32/img_armor_alloy.c95adc10.ktx items/images-1x/armor32/img_armor_alloy.e7c7e19f.dds items/images-2x/armor32/img_armor_alloy.33a271a3.dds items/images-2x/armor32/img_armor_alloy.80bc55bf.ktx items/images-1x/armor31/img_armor_old_legioner.a297da9f.dds items/images-1x/armor31/img_armor_old_legioner.e954ad44.ktx items/images-2x/armor31/img_armor_old_legioner.ff398d23.dds items/images-2x/armor31/img_armor_old_legioner.63ba9eef.ktx items/images-1x/armor31/img_armor_luminosity.36502920.ktx items/images-1x/armor31/img_armor_luminosity.e8f92b88.dds items/images-2x/armor31/img_armor_luminosity.036a9b3a.dds items/images-2x/armor31/img_armor_luminosity.2635dcfa.ktx items/images-1x/armor31/img_armor_inferno.eb4c9d81.dds items/images-1x/armor31/img_armor_inferno.918995c4.ktx items/images-2x/armor31/img_armor_inferno.1020824c.dds items/images-2x/armor31/img_armor_inferno.2304a1da.ktx items/images-1x/armor3/img_armor_super_spiked.7050d311.ktx items/images-1x/armor3/img_armor_super_spiked.e179d92e.dds items/images-2x/armor3/img_armor_super_spiked.54a47840.dds items/images-2x/armor3/img_armor_super_spiked.0cf14e29.ktx items/images-1x/armor3/img_armor_leather.c8424fd8.dds items/images-1x/armor3/img_armor_leather.5faf2285.ktx items/images-2x/armor3/img_armor_leather.ed7540e2.dds items/images-2x/armor3/img_armor_leather.913cb86b.ktx items/images-1x/armor29/img_armor_c2_z5_dragon.5c8259a3.dds items/images-1x/armor29/img_armor_c2_z5_dragon.ec36ebba.ktx items/images-2x/armor29/img_armor_c2_z5_dragon.7fed91e5.dds items/images-2x/armor29/img_armor_c2_z5_dragon.3046265a.ktx items/images-1x/armor29/img_armor_c1_z4_steel.81b9f4d2.dds items/images-2x/armor29/img_armor_c1_z4_steel.13f30030.dds items/images-2x/armor29/img_armor_c1_z4_steel.537f64f8.ktx items/images-1x/armor29/img_armor_c1_z4_steel.31204810.ktx items/images-1x/armor29/img_armor_anniversary_10th.6c561811.ktx items/images-1x/armor29/img_armor_anniversary_10th.510b2943.dds items/images-2x/armor29/img_armor_anniversary_10th.9048f831.dds items/images-2x/armor29/img_armor_anniversary_10th.3cb23ab0.ktx items/images-1x/armor27/img_armor_val18_hoodie.11906d13.dds items/images-1x/armor27/img_armor_val18_hoodie.38ef22d4.ktx items/images-2x/armor27/img_armor_val18_hoodie.b114f857.dds items/images-2x/armor27/img_armor_val18_hoodie.a78f253b.ktx items/images-1x/armor27/img_armor_ny18_mantle.78692dfb.ktx items/images-1x/armor27/img_armor_ny18_mantle.691c8cbf.dds items/images-2x/armor27/img_armor_ny18_mantle.c7ac1fbb.dds items/images-2x/armor27/img_armor_ny18_mantle.49ec2d4c.ktx items/images-1x/armor27/img_armor_hw17_cloak.c32d40fe.dds items/images-1x/armor27/img_armor_hw17_cloak.991f7cca.ktx items/images-2x/armor27/img_armor_hw17_cloak.06447537.dds items/images-2x/armor27/img_armor_hw17_cloak.fd0ac099.ktx items/images-1x/armor27/img_armor_chny18_traditional.549efb84.ktx items/images-1x/armor27/img_armor_chny18_traditional.4e201d9a.dds items/images-2x/armor27/img_armor_chny18_traditional.e099ec97.dds items/images-2x/armor27/img_armor_chny18_traditional.709c7def.ktx items/images-1x/armor26/img_armor_z6_final.8fcd2687.dds items/images-1x/armor26/img_armor_z6_final.3a4e3b04.ktx items/images-2x/armor26/img_armor_z6_final.28680dd6.dds items/images-2x/armor26/img_armor_z6_final.bb8b17c3.ktx items/images-1x/armor26/img_armor_navigators_coat.e18f70b3.dds items/images-1x/armor26/img_armor_navigators_coat.1476db09.ktx items/images-2x/armor26/img_armor_navigators_coat.2f4d1036.dds items/images-2x/armor26/img_armor_navigators_coat.4fe08275.ktx items/images-1x/armor26/img_armor_membrane_cuirass.263d06c1.dds items/images-1x/armor26/img_armor_membrane_cuirass.bc267fbd.ktx items/images-2x/armor26/img_armor_membrane_cuirass.c9166eca.dds items/images-2x/armor26/img_armor_membrane_cuirass.08992453.ktx items/images-1x/armor25/img_armor_outworld_vest.c283c309.ktx items/images-1x/armor25/img_armor_outworld_vest.e9a1f59f.dds items/images-2x/armor25/img_armor_outworld_vest.20363fb8.dds items/images-2x/armor25/img_armor_outworld_vest.85453012.ktx items/images-1x/armor25/img_armor_half_life.32d23084.dds items/images-1x/armor25/img_armor_half_life.35bdb1ee.ktx items/images-2x/armor25/img_armor_half_life.7f108ac5.dds items/images-2x/armor25/img_armor_half_life.e0d17708.ktx items/images-1x/armor25/img_armor_faceless_tunic.cbb7b4f5.ktx items/images-1x/armor25/img_armor_faceless_tunic.ca1ca9c0.dds items/images-2x/armor25/img_armor_faceless_tunic.68de04fd.dds items/images-2x/armor25/img_armor_faceless_tunic.78200e00.ktx items/images-1x/armor24/img_armor_tech_9.5179d6d5.ktx items/images-1x/armor24/img_armor_tech_9.cd86a8b6.dds items/images-2x/armor24/img_armor_tech_9.b37881bc.dds items/images-2x/armor24/img_armor_tech_9.4a5d8ad4.ktx items/images-1x/armor24/img_armor_tech_8.56e84d06.ktx items/images-1x/armor24/img_armor_tech_8.de83d3d1.dds items/images-2x/armor24/img_armor_tech_8.21f64d63.dds items/images-2x/armor24/img_armor_tech_8.7c0b5af7.ktx items/images-1x/armor23/img_armor_tech_7.af266400.ktx items/images-1x/armor23/img_armor_tech_7.c4e28213.dds items/images-2x/armor23/img_armor_tech_7.912d8a80.dds items/images-2x/armor23/img_armor_tech_7.19fe816b.ktx items/images-1x/armor23/img_armor_tech_6.9f99c270.ktx items/images-2x/armor23/img_armor_tech_6.767218f7.dds items/images-2x/armor23/img_armor_tech_6.3fca41c9.ktx items/images-1x/armor23/img_armor_tech_6.180e02b9.dds items/images-1x/armor23/img_armor_tech_10.ebcb66c2.ktx items/images-1x/armor23/img_armor_tech_10.7beb9d60.dds items/images-2x/armor23/img_armor_tech_10.0dced234.dds items/images-2x/armor23/img_armor_tech_10.aeb37a1f.ktx items/images-1x/armor22/img_armor_super_glossy.24f27d1a.dds items/images-1x/armor22/img_armor_super_glossy.966d7ee9.ktx items/images-2x/armor22/img_armor_super_glossy.c35b86ea.dds items/images-2x/armor22/img_armor_super_glossy.a4da30e0.ktx items/images-1x/armor22/img_armor_im_9.b12cff1b.dds items/images-2x/armor22/img_armor_im_9.b707c095.dds items/images-2x/armor22/img_armor_im_9.26c854e2.ktx items/images-1x/armor22/img_armor_im_9.ff080b83.ktx items/images-1x/armor22/img_armor_im_3.21be9de7.ktx items/images-2x/armor22/img_armor_im_3.f39e8cba.dds items/images-2x/armor22/img_armor_im_3.293344bd.ktx items/images-1x/armor22/img_armor_im_3.b04a7657.dds items/images-1x/armor21/img_armor_im_8.f0a58018.ktx items/images-1x/armor21/img_armor_im_8.d181ea80.dds items/images-2x/armor21/img_armor_im_8.2601bf96.dds items/images-2x/armor21/img_armor_im_8.0dac5cb2.ktx items/images-1x/armor21/img_armor_im_7.86bb8923.dds items/images-1x/armor21/img_armor_im_7.8adb660d.ktx items/images-2x/armor21/img_armor_im_7.579eebb0.dds items/images-2x/armor21/img_armor_im_7.5464fced.ktx items/images-1x/armor21/img_armor_im_2.01699eee.ktx items/images-1x/armor21/img_armor_im_2.05eee479.dds items/images-2x/armor21/img_armor_im_2.f9886af6.dds items/images-2x/armor21/img_armor_im_2.6d2d3bfc.ktx items/images-1x/armor20/img_armor_im_5.359abaaa.ktx items/images-1x/armor20/img_armor_im_5.e365f190.dds items/images-2x/armor20/img_armor_im_5.f721f6fa.dds items/images-2x/armor20/img_armor_im_5.e5bf51e9.ktx items/images-1x/armor20/img_armor_im_4.0aaef577.dds items/images-2x/armor20/img_armor_im_4.9542c07c.dds items/images-2x/armor20/img_armor_im_4.8a18376b.ktx items/images-1x/armor20/img_armor_im_4.42e40346.ktx items/images-1x/armor20/img_armor_im_1.20780193.ktx items/images-1x/armor20/img_armor_im_1.50a24b6b.dds items/images-2x/armor20/img_armor_im_1.1e8fb88e.dds items/images-2x/armor20/img_armor_im_1.5c57d0de.ktx items/images-1x/armor2/img_armor_quilted.4e8b057d.dds items/images-1x/armor2/img_armor_quilted.1579ef9c.ktx items/images-2x/armor2/img_armor_quilted.1a3875b1.dds items/images-2x/armor2/img_armor_quilted.d419566c.ktx items/images-1x/armor2/img_armor_green.79db892a.ktx items/images-2x/armor2/img_armor_green.2c3a5e07.dds items/images-2x/armor2/img_armor_green.1946ee2d.ktx items/images-1x/armor2/img_armor_green.3056430b.dds items/images-1x/armor2/img_armor_foreign.f4eb29ed.ktx items/images-1x/armor2/img_armor_foreign.e5431a1a.dds items/images-2x/armor2/img_armor_foreign.af67950b.dds items/images-2x/armor2/img_armor_foreign.9511d8c5.ktx items/images-1x/armor19/img_armor_super_banshee.8c9a9298.ktx items/images-2x/armor19/img_armor_super_banshee.96121444.dds items/images-2x/armor19/img_armor_super_banshee.3c499c6a.ktx items/images-1x/armor19/img_armor_super_banshee.f2510db5.dds items/images-1x/armor18/img_armor_necromancer.d259a42b.ktx items/images-1x/armor18/img_armor_necromancer.748428de.dds items/images-2x/armor18/img_armor_necromancer.167f4708.dds items/images-2x/armor18/img_armor_necromancer.95ed3449.ktx items/images-1x/armor18/img_armor_harbinger_cuirass.cb8539f0.ktx items/images-1x/armor18/img_armor_harbinger_cuirass.095ba6ce.dds items/images-2x/armor18/img_armor_harbinger_cuirass.955e02d6.dds items/images-2x/armor18/img_armor_harbinger_cuirass.c18e996c.ktx items/images-1x/armor18/img_armor_celestial.53ea2c08.ktx items/images-1x/armor18/img_armor_celestial.bd36ec61.dds items/images-2x/armor18/img_armor_celestial.cbb698ae.dds items/images-2x/armor18/img_armor_celestial.2a503036.ktx items/images-1x/armor17/img_armor_super_samurai.6d8cdeda.dds items/images-1x/armor17/img_armor_super_samurai.aadfde9f.ktx items/images-2x/armor17/img_armor_super_samurai.207f40c0.dds items/images-2x/armor17/img_armor_super_samurai.93922190.ktx items/images-1x/armor17/img_armor_shaman.535fb9c4.dds items/images-1x/armor17/img_armor_shaman.e36ff5aa.ktx items/images-2x/armor17/img_armor_shaman.bd933c35.dds items/images-2x/armor17/img_armor_shaman.ba853d2c.ktx items/images-1x/armor17/img_armor_dragon_jaws.32589720.dds items/images-1x/armor17/img_armor_dragon_jaws.01d16b2e.ktx items/images-2x/armor17/img_armor_dragon_jaws.e0037b26.dds items/images-2x/armor17/img_armor_dragon_jaws.75874912.ktx items/images-1x/armor16/img_armor_shadow_master.dff09266.dds items/images-2x/armor16/img_armor_shadow_master.41cedb70.dds items/images-2x/armor16/img_armor_shadow_master.d77637f9.ktx items/images-1x/armor16/img_armor_shadow_master.82fc29f5.ktx items/images-2x/armor16/img_armor_royal_breastplate.6e5188c9.dds items/images-2x/armor16/img_armor_royal_breastplate.46583371.ktx items/images-1x/armor16/img_armor_royal_breastplate.0c470dc5.dds items/images-1x/armor16/img_armor_royal_breastplate.6a2c3517.ktx items/images-1x/armor16/img_armor_black_buffalo.9c89a732.dds items/images-2x/armor16/img_armor_black_buffalo.a60704aa.dds items/images-2x/armor16/img_armor_black_buffalo.61cd883e.ktx items/images-1x/armor16/img_armor_black_buffalo.e47842fa.ktx items/images-2x/armor15/img_armor_super_halo.b155690b.dds items/images-2x/armor15/img_armor_super_halo.44daf15d.ktx items/images-1x/armor15/img_armor_super_halo.67ceac70.dds items/images-1x/armor15/img_armor_super_halo.19b197aa.ktx items/images-1x/armor15/img_armor_dragon_blood.12aba536.dds items/images-2x/armor15/img_armor_dragon_blood.03b186e4.dds items/images-2x/armor15/img_armor_dragon_blood.029301d3.ktx items/images-1x/armor15/img_armor_dragon_blood.be207636.ktx items/images-1x/armor15/img_armor_dark.16899e47.dds items/images-2x/armor15/img_armor_dark.8db13d55.dds items/images-2x/armor15/img_armor_dark.f34aca22.ktx items/images-1x/armor15/img_armor_dark.42fe2ccb.ktx items/images-1x/armor14/img_armor_storm_cuirass.148d7903.dds items/images-2x/armor14/img_armor_storm_cuirass.8d781923.dds items/images-2x/armor14/img_armor_storm_cuirass.4a6139a1.ktx items/images-1x/armor14/img_armor_storm_cuirass.4f0c717b.ktx items/images-2x/armor14/img_armor_red_lotus.084d3ba0.dds items/images-2x/armor14/img_armor_red_lotus.89663a89.ktx items/images-1x/armor14/img_armor_red_lotus.d400f9cf.dds items/images-1x/armor14/img_armor_red_lotus.749fe14b.ktx items/images-2x/armor14/img_armor_gilded.f8b7c0fb.dds items/images-2x/armor14/img_armor_gilded.a0fe2aaa.ktx items/images-1x/armor14/img_armor_gilded.ab0d3bd4.dds items/images-1x/armor14/img_armor_gilded.e4ac68cb.ktx items/images-1x/armor13/img_armor_twilight.7f151f79.ktx items/images-2x/armor13/img_armor_twilight.b6e59686.dds items/images-2x/armor13/img_armor_twilight.cb3a5b62.ktx items/images-1x/armor13/img_armor_twilight.55f90cf8.dds items/images-1x/armor13/img_armor_hawk.5b581228.dds items/images-2x/armor13/img_armor_hawk.376056b3.dds items/images-2x/armor13/img_armor_hawk.8abff914.ktx items/images-1x/armor13/img_armor_hawk.b2351b68.ktx items/images-2x/armor13/img_armor_beast_shell.75f87d9d.dds items/images-2x/armor13/img_armor_beast_shell.efbdaba5.ktx items/images-1x/armor13/img_armor_beast_shell.afd08161.dds items/images-1x/armor13/img_armor_beast_shell.09e853ad.ktx items/images-2x/armor12/img_armor_super_cloak.5e1bbb7f.dds items/images-2x/armor12/img_armor_super_cloak.ea32e0d9.ktx items/images-1x/armor12/img_armor_super_cloak.25d533ba.dds items/images-1x/armor12/img_armor_super_cloak.b94a582a.ktx items/images-2x/armor12/img_armor_mantle_of_night.c02996bd.dds items/images-2x/armor12/img_armor_mantle_of_night.268478d2.ktx items/images-1x/armor12/img_armor_mantle_of_night.e91aff2c.dds items/images-1x/armor12/img_armor_mantle_of_night.f9171b94.ktx items/images-1x/armor12/img_armor_dragon.d5459ae9.dds items/images-2x/armor12/img_armor_dragon.d7ba54be.dds items/images-2x/armor12/img_armor_dragon.1c19b969.ktx items/images-1x/armor12/img_armor_dragon.d9000354.ktx items/images-2x/armor11/img_armor_shadow.c785a0f5.dds items/images-2x/armor11/img_armor_shadow.13b942f7.ktx items/images-1x/armor11/img_armor_shadow.635428d6.dds items/images-1x/armor11/img_armor_shadow.3584ab62.ktx items/images-2x/armor11/img_armor_red_steel.20f92e90.dds items/images-2x/armor11/img_armor_red_steel.e24fb7bd.ktx items/images-1x/armor11/img_armor_red_steel.5f0f7fae.dds items/images-1x/armor11/img_armor_red_steel.5513835e.ktx items/images-2x/armor11/img_armor_moon.0edaa361.dds items/images-2x/armor11/img_armor_moon.5f77191d.ktx items/images-1x/armor11/img_armor_moon.3a20d81b.dds items/images-1x/armor11/img_armor_moon.9cfaaccc.ktx items/images-2x/armor10/img_armor_raven.f68f2ea0.dds items/images-2x/armor10/img_armor_raven.ce514d3b.ktx items/images-1x/armor10/img_armor_raven.c60d6fac.dds items/images-1x/armor10/img_armor_raven.0a27c1f7.ktx items/images-2x/armor10/img_armor_emerald_breastplate.27c63f10.dds items/images-2x/armor10/img_armor_emerald_breastplate.92eb55c5.ktx items/images-1x/armor10/img_armor_emerald_breastplate.e0f036fb.dds items/images-1x/armor10/img_armor_emerald_breastplate.20aa0130.ktx items/images-2x/armor10/img_armor_assassin.2ed5245c.dds items/images-2x/armor10/img_armor_assassin.525daa33.ktx items/images-1x/armor10/img_armor_assassin.31cd55ff.dds items/images-1x/armor10/img_armor_assassin.c50c7d2c.ktx items/images-2x/armor1/img_armor_robe.598b9c39.dds items/images-2x/armor1/img_armor_robe.1098f381.ktx items/images-1x/armor1/img_armor_robe.7293b7fd.dds items/images-1x/armor1/img_armor_robe.31d78ba4.ktx items/images-2x/armor1/img_armor_old_leather.4b00155c.dds items/images-2x/armor1/img_armor_old_leather.58eb38ce.ktx items/images-1x/armor1/img_armor_old_leather.539c4818.dds items/images-1x/armor1/img_armor_old_leather.1a389534.ktx items/images-2x/armor1/img_armor_kendo.5895818c.dds items/images-2x/armor1/img_armor_kendo.c1ddaaa3.ktx items/images-1x/armor1/img_armor_kendo.b3a7e032.dds items/images-1x/armor1/img_armor_kendo.bbd390c3.ktx internal_settings.e9a9d549.xml forge.75b7e1f1.xml fight/ui.62bee150.png fight/ui.4c9e126b.json fight/rules.5a0ab55c.dds fight/rules.005d1411.ktx fight/rules.7edae777.json fight/round.c9bacdb4.png fight/round.e85f44ab.fnt fight/ringout.830671d1.dds fight/ringout.43a01fd2.ktx fight/ringout.80bc6e99.json fight/pause.35fdd1a5.dds fight/pause.7903aa46.ktx fight/pause.4764d210.json fight/particles.62064f2e.png fight/particles.a129f127.json fight/fx.81178786.dds fight/fx.4e5dee0b.ktx fight/fx.925b16c7.json fight/digits.86d1056c.png fight/digits.c9e1eb7a.fnt fight/callouts.062432c2.dds fight/callouts.138625b2.ktx fight/callouts.fcaad38f.json credits.0fef80c6.xml config_cdn.2a7a7dca.xml computer_settings.93ae8499.xml character_progress.c65fbb17.xml audio/sounds_b.e7aafa5f.m4a audio/sounds_b.c074357f.ogg audio/sounds_a.d8f88faf.m4a audio/sounds_a.a3bfbbf0.ogg audio/menu_music.a8d8d29d.m4a audio/menu_music.b30026cd.ogg audio/fight9_master_skills_music.3512686e.m4a audio/fight9_master_skills_music.c50f76bd.ogg audio/fight8_final_boss_music.a67edef0.m4a audio/fight8_final_boss_music.517ca3ba.ogg audio/fight7_fat_boss_music.38522782.m4a audio/fight7_fat_boss_music.6c07b180.ogg audio/fight6_sparring_music.db3224e8.m4a audio/fight6_sparring_music.c6b69730.ogg audio/fight5_ninja_in_the_night_music.2b56cea3.m4a audio/fight5_ninja_in_the_night_music.c9e02f50.ogg audio/fight4_forest_of_death_music.2095cdff.m4a audio/fight4_forest_of_death_music.263c0d37.ogg audio/fight3_vengeance_music.174bd710.m4a audio/fight3_vengeance_music.a78d0f99.ogg audio/fight38_sakura_forest_music.2127ecc6.m4a audio/fight38_sakura_forest_music.d748e6d3.ogg audio/fight37_titan_epic_fight_music.7988b300.m4a audio/fight37_titan_epic_fight_music.3d72ae29.ogg audio/fight36_stardocks_music.b18fb8b8.m4a audio/fight36_stardocks_music.1128c150.ogg audio/fight34_halls_of_the_dead_heroes_music.bd43f159.m4a audio/fight34_halls_of_the_dead_heroes_music.e93f2dda.ogg audio/fight33_stone_forest_music.ef125ebf.m4a audio/fight33_stone_forest_music.21dca0bd.ogg audio/fight32_starship_music.63b427a4.m4a audio/fight32_starship_music.fcbe693b.ogg audio/fight31_graveyard_ships_music.26bbb844.m4a audio/fight31_graveyard_ships_music.bf130e74.ogg audio/fight30_gates_of_shadows_music.f78053b3.m4a audio/fight30_gates_of_shadows_music.b8be3fe9.ogg audio/fight2_blade_dance_music.1a928c61.m4a audio/fight2_blade_dance_music.81a7562b.ogg audio/fight28_flying_rocks_music.bce67b8a.m4a audio/fight28_flying_rocks_music.3f92487c.ogg audio/fight27_factory_music.8f76217b.m4a audio/fight27_factory_music.a6e8da3f.ogg audio/fight25_hive_music.ea21d27b.m4a audio/fight25_hive_music.7a7e8b09.ogg audio/fight24_ruins_village_music.c0b8a4f1.m4a audio/fight24_ruins_village_music.3ed30e81.ogg audio/fight23_burning_town_music.ce38848f.m4a audio/fight23_burning_town_music.35037f56.ogg audio/fight22_heavenly_clouds_music.b09d1b46.m4a audio/fight22_heavenly_clouds_music.f3466500.ogg audio/fight21_lesson_in_the_dark_room_music.917c32b8.m4a audio/fight21_lesson_in_the_dark_room_music.32f2b7e0.ogg audio/fight1_samurai_spirit_music.63b62902.m4a audio/fight1_samurai_spirit_music.88624abb.ogg audio/fight19_volcano_music.59f91a35.m4a audio/fight19_volcano_music.b2a8b6ff.ogg audio/fight18_fuji_music.c01d1644.m4a audio/fight18_fuji_music.eea56ac9.ogg audio/fight17_cave_music.978b2ee3.m4a audio/fight17_cave_music.1c5a1b36.ogg audio/fight16_the_battlefield_flowers_music.7a4a36e4.m4a audio/fight16_the_battlefield_flowers_music.811a852d.ogg audio/fight15_shadow_lady_music.a782f606.m4a audio/fight15_shadow_lady_music.6f89c206.ogg audio/fight14_ship_battle_music.129bdd5e.m4a audio/fight14_ship_battle_music.264c51ed.ogg audio/fight13_old_sensei_music.ff7b2c8c.m4a audio/fight13_old_sensei_music.7041c051.ogg audio/fight12_deadly_smoke_music.492eca6a.m4a audio/fight12_deadly_smoke_music.ebb5ce95.ogg audio/fight11_ronin_music.47806cd7.m4a audio/fight11_ronin_music.7602298a.ogg audio/fight10_black_warrior_music.1d910e18.m4a audio/fight10_black_warrior_music.5902a61f.ogg audio/act_music.6c72be88.m4a audio/act_music.d92f4661.ogg animations_dojo.3314a7de.dat animations.b22c72ff.dat achievements.022fc8e6.xml tactics/axes.016da2f6.dat tactics/axes_axes.9fc757ef.dat tactics/axes_batons.f1e189a1.dat tactics/axes_battlehammers.18979f64.dat tactics/axes_bigswords.a49d8a06.dat tactics/axes_butcherknives.77d07b64.dat tactics/axes_chinesesabers.9b6784f7.dat tactics/axes_claws.3c431b30.dat tactics/axes_compositescythe.25831b7c.dat tactics/axes_compositespear.54d3f75e.dat tactics/axes_compositestaff.64dcc688.dat tactics/axes_compositesword.d3212707.dat tactics/axes_crescentknives.b9ee5db7.dat tactics/axes_cudgel.48449599.dat tactics/axes_daggers.fe86007c.dat tactics/axes_doublescythe.b104e45f.dat tactics/axes_electrohammers.0a8e7209.dat tactics/axes_fans.4ef365da.dat tactics/axes_firebatons.8a669f8a.dat tactics/axes_fists.6633876d.dat tactics/axes_glaive.1b8ce901.dat tactics/axes_glaivebow.7ed70c1e.dat tactics/axes_hermitswords.c477c819.dat tactics/axes_katana.8a6fbf92.dat tactics/axes_katars.baf9befd.dat tactics/axes_keris.479484a2.dat tactics/axes_knives.490a23b7.dat tactics/axes_knobsticks.6ec0b85b.dat tactics/axes_knuckles.41111f53.dat tactics/axes_kusarigama.21211f96.dat tactics/axes_machete.5739f4fd.dat tactics/axes_magariyari.2b5dee14.dat tactics/axes_monkkatars.57cee4fd.dat tactics/axes_naginata.dd1dfde5.dat tactics/axes_ninjasword.a35f00b3.dat tactics/axes_nunchaku.39dfb4ad.dat tactics/axes_onehandedsword.2f733c4c.dat tactics/axes_powerfists.a72ad25e.dat tactics/axes_rifle.f02320ce.dat tactics/axes_sai.cfe74a28.dat tactics/axes_scythe.e33f86b9.dat tactics/axes_shockerclaws.c54516ce.dat tactics/axes_shogunkatana.08b57637.dat tactics/axes_shuanggou.c5231cce.dat tactics/axes_sickles.e452d8ae.dat tactics/axes_silverglaive.93e22b28.dat tactics/axes_spear.ddfbe86a.dat tactics/axes_staff.9fb60d3f.dat tactics/axes_steelclaws.4686045e.dat tactics/axes_swords.42660e83.dat tactics/axes_titangiantsword.cf459bd0.dat tactics/axes_tonfa.109f861e.dat tactics/axes_tonfaguns.b6fa02a4.dat tactics/axes_trident.07881383.dat tactics/axes_twohanded.730df027.dat tactics/axes_wakidzashi.43e29692.dat tactics/axes_wandererstaff.1fb7f96a.dat tactics/batons.bff9d74c.dat tactics/batons_batons.989a90a5.dat tactics/batons_battlehammers.c751bc28.dat tactics/batons_bigswords.ea1760c4.dat tactics/batons_butcherknives.f25b7688.dat tactics/batons_chinesesabers.e615159f.dat tactics/batons_claws.583459e8.dat tactics/batons_compositescythe.b07c9f83.dat tactics/batons_compositespear.92de852a.dat tactics/batons_compositestaff.d970550d.dat tactics/batons_compositesword.0b1344c0.dat tactics/batons_crescentknives.8e1277d5.dat tactics/batons_cudgel.53463dec.dat tactics/batons_daggers.14159d5f.dat tactics/batons_doublescythe.1de8ae9d.dat tactics/batons_electrohammers.de4c7397.dat tactics/batons_fans.4b60b598.dat tactics/batons_firebatons.9c10deae.dat tactics/batons_fists.17ca013f.dat tactics/batons_glaive.67b11fbb.dat tactics/batons_glaivebow.2f029279.dat tactics/batons_hermitswords.53bd9191.dat tactics/batons_katana.caf45438.dat tactics/batons_katars.88c648b3.dat tactics/batons_keris.bea77e4b.dat tactics/batons_knives.d526098a.dat tactics/batons_knobsticks.92d6fdd8.dat tactics/batons_knuckles.57376759.dat tactics/batons_kusarigama.d80add82.dat tactics/batons_machete.c0ea9fc7.dat tactics/batons_magariyari.dc82f092.dat tactics/batons_monkkatars.eb1ca95e.dat tactics/batons_naginata.4896305a.dat tactics/batons_ninjasword.139da4f2.dat tactics/batons_nunchaku.cac69552.dat tactics/batons_onehandedsword.7ca31419.dat tactics/batons_powerfists.08c1b378.dat tactics/batons_rifle.aacaf8ca.dat tactics/batons_sai.f5c36ab7.dat tactics/batons_scythe.aed4d7e2.dat tactics/batons_shockerclaws.820fc208.dat tactics/batons_shogunkatana.a0b0d30a.dat tactics/batons_shuanggou.bc8505e1.dat tactics/batons_sickles.105e2c8c.dat tactics/batons_silverglaive.8c6e8ed3.dat tactics/batons_spear.b36b7b5a.dat tactics/batons_staff.6647fe99.dat tactics/batons_steelclaws.7f2db639.dat tactics/batons_swords.5de26906.dat tactics/batons_titangiantsword.f33f5e7b.dat tactics/batons_tonfa.4b82757d.dat tactics/batons_tonfaguns.0df5cdcc.dat tactics/batons_trident.8e3c0368.dat tactics/batons_twohanded.24137536.dat tactics/batons_wakidzashi.bf88c31b.dat tactics/batons_wandererstaff.7cc3fd7c.dat tactics/battlehammers.db9a3757.dat tactics/battlehammers_battlehammers.f2d3e162.dat tactics/battlehammers_bigswords.c504c5d9.dat tactics/battlehammers_butcherknives.88f7f1da.dat tactics/battlehammers_chinesesabers.a4427807.dat tactics/battlehammers_claws.aaad44a5.dat tactics/battlehammers_compositescythe.e3acebd9.dat tactics/battlehammers_compositespear.20d1e8c6.dat tactics/battlehammers_compositestaff.0e6b2d35.dat tactics/battlehammers_compositesword.102b0298.dat tactics/battlehammers_crescentknives.8fdfe4af.dat tactics/battlehammers_cudgel.01059883.dat tactics/battlehammers_daggers.803d42c3.dat tactics/battlehammers_doublescythe.177c4523.dat tactics/battlehammers_electrohammers.a4d44806.dat tactics/battlehammers_fans.7bb8da2a.dat tactics/battlehammers_firebatons.e5d75f25.dat tactics/battlehammers_fists.e02b8593.dat tactics/battlehammers_glaive.4abf5c17.dat tactics/battlehammers_glaivebow.9ecb78b4.dat tactics/battlehammers_hermitswords.541d1886.dat tactics/battlehammers_katana.13af967d.dat tactics/battlehammers_katars.a0311097.dat tactics/battlehammers_keris.e0fa25d2.dat tactics/battlehammers_knives.a2da8f3e.dat tactics/battlehammers_knobsticks.8f675d2b.dat tactics/battlehammers_knuckles.b02c16e5.dat tactics/battlehammers_kusarigama.a517dbc5.dat tactics/battlehammers_machete.853c8324.dat tactics/battlehammers_magariyari.31070af3.dat tactics/battlehammers_monkkatars.4769e17a.dat tactics/battlehammers_naginata.d92c6f4e.dat tactics/battlehammers_ninjasword.11c6b00f.dat tactics/battlehammers_nunchaku.28ca4867.dat tactics/battlehammers_onehandedsword.5a99c5d7.dat tactics/battlehammers_powerfists.c0e77d27.dat tactics/battlehammers_rifle.8798eba5.dat tactics/battlehammers_sai.aa20bbb9.dat tactics/battlehammers_scythe.927d6bff.dat tactics/battlehammers_shockerclaws.12ad4a6f.dat tactics/battlehammers_shogunkatana.cbfd6a0c.dat tactics/battlehammers_shuanggou.37c2e669.dat tactics/battlehammers_sickles.77f493b8.dat tactics/battlehammers_silverglaive.82e61aa5.dat tactics/battlehammers_spear.375897db.dat tactics/battlehammers_staff.7007e859.dat tactics/battlehammers_steelclaws.ee2a7f4a.dat tactics/battlehammers_swords.9ac1ec6b.dat tactics/battlehammers_titangiantsword.a2efffe6.dat tactics/battlehammers_tonfa.181da695.dat tactics/battlehammers_tonfaguns.e167c579.dat tactics/battlehammers_trident.53bc4ddf.dat tactics/battlehammers_twohanded.27a452b5.dat tactics/battlehammers_wakidzashi.bb025ec4.dat tactics/battlehammers_wandererstaff.a9f3ba8d.dat tactics/bigswords.50d3b821.dat tactics/bigswords_bigswords.593a533c.dat tactics/bigswords_butcherknives.02f0c5e7.dat tactics/bigswords_chinesesabers.f28c1036.dat tactics/bigswords_claws.82fb1d0b.dat tactics/bigswords_compositescythe.74b7516b.dat tactics/bigswords_compositespear.818300b6.dat tactics/bigswords_compositestaff.e8b75388.dat tactics/bigswords_compositesword.27d78e27.dat tactics/bigswords_crescentknives.40eed7a4.dat tactics/bigswords_cudgel.3f5bea4e.dat tactics/bigswords_daggers.c4723266.dat tactics/bigswords_doublescythe.8f47c665.dat tactics/bigswords_electrohammers.a1c718e6.dat tactics/bigswords_fans.f2d4be4c.dat tactics/bigswords_firebatons.0ddea8ba.dat tactics/bigswords_fists.0884cbfd.dat tactics/bigswords_glaive.d5695aa9.dat tactics/bigswords_glaivebow.ea70f0a5.dat tactics/bigswords_hermitswords.b08ee316.dat tactics/bigswords_katana.639e5bcf.dat tactics/bigswords_katars.0a3cb066.dat tactics/bigswords_keris.ef09b7c1.dat tactics/bigswords_knives.d595fbf2.dat tactics/bigswords_knobsticks.af930a9c.dat tactics/bigswords_knuckles.9541f46f.dat tactics/bigswords_kusarigama.7f17f025.dat tactics/bigswords_machete.8270ac4f.dat tactics/bigswords_magariyari.bda2b50d.dat tactics/bigswords_monkkatars.ae533d40.dat tactics/bigswords_naginata.b15372f1.dat tactics/bigswords_ninjasword.4b61891b.dat tactics/bigswords_nunchaku.3b4e9a5c.dat tactics/bigswords_onehandedsword.6e91ec67.dat tactics/bigswords_powerfists.f6631e58.dat tactics/bigswords_rifle.2a672b41.dat tactics/bigswords_sai.a3915f20.dat tactics/bigswords_scythe.9554516b.dat tactics/bigswords_shockerclaws.db96ef85.dat tactics/bigswords_shogunkatana.95752294.dat tactics/bigswords_shuanggou.b19b9887.dat tactics/bigswords_sickles.8bf18f91.dat tactics/bigswords_silverglaive.1c5f0664.dat tactics/bigswords_spear.49317121.dat tactics/bigswords_staff.321793a2.dat tactics/bigswords_steelclaws.c0847e38.dat tactics/bigswords_swords.3a1ac5a4.dat tactics/bigswords_titangiantsword.de44390d.dat tactics/bigswords_tonfa.626c2d72.dat tactics/bigswords_tonfaguns.8f3d9a74.dat tactics/bigswords_trident.c0445c05.dat tactics/bigswords_twohanded.978d9c05.dat tactics/bigswords_wakidzashi.0622610e.dat tactics/bigswords_wandererstaff.e42f2414.dat tactics/butcherknives.e49a580c.dat tactics/butcherknives_butcherknives.5ccc8d49.dat tactics/butcherknives_chinesesabers.8380773d.dat tactics/butcherknives_claws.7520ebba.dat tactics/butcherknives_compositescythe.9027eb92.dat tactics/butcherknives_compositespear.4dc8dd3e.dat tactics/butcherknives_compositestaff.718d54af.dat tactics/butcherknives_compositesword.dd6673b7.dat tactics/butcherknives_crescentknives.a3cf68c6.dat tactics/butcherknives_cudgel.86538ef6.dat tactics/butcherknives_daggers.bb6ed574.dat tactics/butcherknives_doublescythe.5c1ac257.dat tactics/butcherknives_electrohammers.7e8d8b41.dat tactics/butcherknives_fans.e078bc64.dat tactics/butcherknives_firebatons.7cbc3186.dat tactics/butcherknives_fists.a5ce2843.dat tactics/butcherknives_glaive.d79ce4bb.dat tactics/butcherknives_glaivebow.c235c17e.dat tactics/butcherknives_hermitswords.2419cc83.dat tactics/butcherknives_katana.460eba67.dat tactics/butcherknives_katars.1074caaa.dat tactics/butcherknives_keris.edf88466.dat tactics/butcherknives_knives.f400d9d7.dat tactics/butcherknives_knobsticks.25620e84.dat tactics/butcherknives_knuckles.f5c02d6e.dat tactics/butcherknives_kusarigama.d85614ef.dat tactics/butcherknives_machete.ee5431b4.dat tactics/butcherknives_magariyari.9c51d75f.dat tactics/butcherknives_monkkatars.b5134766.dat tactics/butcherknives_naginata.df854c56.dat tactics/butcherknives_ninjasword.79ba76a3.dat tactics/butcherknives_nunchaku.56ca6e22.dat tactics/butcherknives_onehandedsword.8608fabc.dat tactics/butcherknives_powerfists.dc3a2e2b.dat tactics/butcherknives_rifle.5297adb8.dat tactics/butcherknives_sai.4ecabaf5.dat tactics/butcherknives_scythe.8d852eb0.dat tactics/butcherknives_shockerclaws.9ad367c0.dat tactics/butcherknives_shogunkatana.58bcdd51.dat tactics/butcherknives_shuanggou.619d9dce.dat tactics/butcherknives_sickles.37ed8d8b.dat tactics/butcherknives_silverglaive.6df6b5b5.dat tactics/butcherknives_spear.cac6f497.dat tactics/butcherknives_staff.722f5aeb.dat tactics/butcherknives_steelclaws.0e939140.dat tactics/butcherknives_swords.7ae66adc.dat tactics/butcherknives_titangiantsword.f9ec3511.dat tactics/butcherknives_tonfa.ce242340.dat tactics/butcherknives_tonfaguns.c2c4f43c.dat tactics/butcherknives_trident.255360b1.dat tactics/butcherknives_twohanded.ee5163db.dat tactics/butcherknives_wakidzashi.2675be3c.dat tactics/butcherknives_wandererstaff.01bcea68.dat tactics/chinesesabers.f1949136.dat tactics/chinesesabers_chinesesabers.7d45b89a.dat tactics/chinesesabers_claws.04fd83d4.dat tactics/chinesesabers_compositescythe.ced89a8d.dat tactics/chinesesabers_compositespear.eed0f3fc.dat tactics/chinesesabers_compositestaff.02c3985c.dat tactics/chinesesabers_compositesword.68bb321f.dat tactics/chinesesabers_crescentknives.a5eb7f70.dat tactics/chinesesabers_cudgel.c47928ad.dat tactics/chinesesabers_daggers.8fcd2575.dat tactics/chinesesabers_doublescythe.30611a55.dat tactics/chinesesabers_electrohammers.39f14f3c.dat tactics/chinesesabers_fans.d804a237.dat tactics/chinesesabers_firebatons.6985d00d.dat tactics/chinesesabers_fists.207b7af2.dat tactics/chinesesabers_glaive.184ece40.dat tactics/chinesesabers_glaivebow.925f6d8f.dat tactics/chinesesabers_hermitswords.a3f9c18e.dat tactics/chinesesabers_katana.ac7191bb.dat tactics/chinesesabers_katars.8ee16b40.dat tactics/chinesesabers_keris.f287895b.dat tactics/chinesesabers_knives.ad2f8d02.dat tactics/chinesesabers_knobsticks.9915d9da.dat tactics/chinesesabers_knuckles.358f7939.dat tactics/chinesesabers_kusarigama.14d39e4a.dat tactics/chinesesabers_machete.6f41decf.dat tactics/chinesesabers_magariyari.f5d0dbe4.dat tactics/chinesesabers_monkkatars.93ee6ac4.dat tactics/chinesesabers_naginata.b8c13bca.dat tactics/chinesesabers_ninjasword.766e7e18.dat tactics/chinesesabers_nunchaku.094b0723.dat tactics/chinesesabers_onehandedsword.4e314462.dat tactics/chinesesabers_powerfists.64b5ddba.dat tactics/chinesesabers_rifle.9e38ef43.dat tactics/chinesesabers_sai.517d31d3.dat tactics/chinesesabers_scythe.209babf0.dat tactics/chinesesabers_shockerclaws.f48eb046.dat tactics/chinesesabers_shogunkatana.b8e7007f.dat tactics/chinesesabers_shuanggou.cfb230b0.dat tactics/chinesesabers_sickles.bef66393.dat tactics/chinesesabers_silverglaive.2f32b64f.dat tactics/chinesesabers_spear.23a4c26b.dat tactics/chinesesabers_staff.3f08a4a9.dat tactics/chinesesabers_steelclaws.ccf5b82e.dat tactics/chinesesabers_swords.13e13b73.dat tactics/chinesesabers_titangiantsword.548b47f2.dat tactics/chinesesabers_tonfa.af801607.dat tactics/chinesesabers_tonfaguns.0732a72f.dat tactics/chinesesabers_trident.fb6da0f8.dat tactics/chinesesabers_twohanded.a744d001.dat tactics/chinesesabers_wakidzashi.7a9f8bba.dat tactics/chinesesabers_wandererstaff.e4170c7c.dat tactics/claws.634ea8e3.dat tactics/claws_claws.ef6bc322.dat tactics/claws_compositescythe.0702fe41.dat tactics/claws_compositespear.f4eec325.dat tactics/claws_compositestaff.fb869692.dat tactics/claws_compositesword.29577fcc.dat tactics/claws_crescentknives.5cb9e8a6.dat tactics/claws_cudgel.340a2da2.dat tactics/claws_daggers.798d422f.dat tactics/claws_doublescythe.e250a596.dat tactics/claws_electrohammers.92af661f.dat tactics/claws_fans.71786552.dat tactics/claws_firebatons.be3d4206.dat tactics/claws_fists.f8d01d60.dat tactics/claws_glaive.5289813e.dat tactics/claws_glaivebow.c863d639.dat tactics/claws_hermitswords.925b70fa.dat tactics/claws_katana.f27a9952.dat tactics/claws_katars.24423c54.dat tactics/claws_keris.3304f683.dat tactics/claws_knives.b79f133f.dat tactics/claws_knobsticks.b4ee39bf.dat tactics/claws_knuckles.3caa3684.dat tactics/claws_kusarigama.91a3bb4c.dat tactics/claws_machete.79afa268.dat tactics/claws_magariyari.9f7bc6ae.dat tactics/claws_monkkatars.87c41678.dat tactics/claws_naginata.eb2e550d.dat tactics/claws_ninjasword.e471bc0d.dat tactics/claws_nunchaku.943b75d0.dat tactics/claws_onehandedsword.0e8a066a.dat tactics/claws_powerfists.23848d21.dat tactics/claws_rifle.1a610da7.dat tactics/claws_sai.5d33c701.dat tactics/claws_scythe.edd5abe8.dat tactics/claws_shockerclaws.9673d97f.dat tactics/claws_shogunkatana.1d9d1309.dat tactics/claws_shuanggou.fd79e74c.dat tactics/claws_sickles.ae22f332.dat tactics/claws_silverglaive.8f506766.dat tactics/claws_spear.4471e817.dat tactics/claws_staff.11c0ef33.dat tactics/claws_steelclaws.dcdfeb01.dat tactics/claws_swords.caf61972.dat tactics/claws_titangiantsword.875c2562.dat tactics/claws_tonfa.184cb660.dat tactics/claws_tonfaguns.b53c463c.dat tactics/claws_trident.769fe357.dat tactics/claws_twohanded.c44c78ce.dat tactics/claws_wakidzashi.3ee730fa.dat tactics/claws_wandererstaff.159d9df6.dat tactics/compositescythe.8d0f7e6d.dat tactics/compositescythe_compositescythe.7c1c015c.dat tactics/compositescythe_compositespear.93dbbe01.dat tactics/compositescythe_compositestaff.620a1c91.dat tactics/compositescythe_compositesword.9d4bb199.dat tactics/compositescythe_crescentknives.b7d5cf35.dat tactics/compositescythe_cudgel.f31554dc.dat tactics/compositescythe_daggers.1a504df8.dat tactics/compositescythe_doublescythe.00ece6dd.dat tactics/compositescythe_electrohammers.2a256805.dat tactics/compositescythe_fans.082aab63.dat tactics/compositescythe_firebatons.30f98d02.dat tactics/compositescythe_fists.3cf27d5d.dat tactics/compositescythe_glaive.0f7fff41.dat tactics/compositescythe_glaivebow.0ef48679.dat tactics/compositescythe_hermitswords.99064a19.dat tactics/compositescythe_katana.fe55fda1.dat tactics/compositescythe_katars.86c9dc11.dat tactics/compositescythe_keris.fdf5028a.dat tactics/compositescythe_knives.ea0baa98.dat tactics/compositescythe_knobsticks.46a88da0.dat tactics/compositescythe_knuckles.1ef7fcc8.dat tactics/compositescythe_kusarigama.5f4c3026.dat tactics/compositescythe_machete.966775e9.dat tactics/compositescythe_magariyari.15693d9b.dat tactics/compositescythe_monkkatars.041704d1.dat tactics/compositescythe_naginata.29dc39f9.dat tactics/compositescythe_ninjasword.1aaa72f0.dat tactics/compositescythe_nunchaku.0e515638.dat tactics/compositescythe_onehandedsword.5c7a110f.dat tactics/compositescythe_powerfists.efa00c80.dat tactics/compositescythe_rifle.7bfff568.dat tactics/compositescythe_sai.fd3fb7eb.dat tactics/compositescythe_scythe.270eaec5.dat tactics/compositescythe_shockerclaws.ec4a4e11.dat tactics/compositescythe_shogunkatana.e22536a1.dat tactics/compositescythe_shuanggou.8128c706.dat tactics/compositescythe_sickles.3777dfcf.dat tactics/compositescythe_silverglaive.84a84f97.dat tactics/compositescythe_spear.a256d716.dat tactics/compositescythe_staff.5ccd7535.dat tactics/compositescythe_steelclaws.a035c294.dat tactics/compositescythe_swords.06198146.dat tactics/compositescythe_titangiantsword.863f2ab4.dat tactics/compositescythe_tonfa.33e7ce35.dat tactics/compositescythe_tonfaguns.301de41f.dat tactics/compositescythe_trident.bf06515d.dat tactics/compositescythe_twohanded.de49e98f.dat tactics/compositescythe_wakidzashi.7d4e1768.dat tactics/compositescythe_wandererstaff.d496261d.dat tactics/compositespear.e5d44f1c.dat tactics/compositespear_compositespear.9dbfe7ad.dat tactics/compositespear_compositestaff.4bfe3036.dat tactics/compositespear_compositesword.60aefa73.dat tactics/compositespear_crescentknives.e7199927.dat tactics/compositespear_cudgel.20c8c9c4.dat tactics/compositespear_daggers.2e75d3e8.dat tactics/compositespear_doublescythe.f35e9191.dat tactics/compositespear_electrohammers.0cf98c0d.dat tactics/compositespear_fans.d03ad167.dat tactics/compositespear_firebatons.6fcd5d63.dat tactics/compositespear_fists.19b9a50a.dat tactics/compositespear_glaive.ef367186.dat tactics/compositespear_glaivebow.280e8bdb.dat tactics/compositespear_hermitswords.c345e542.dat tactics/compositespear_katana.ef0e3dd8.dat tactics/compositespear_katars.89024d5a.dat tactics/compositespear_keris.727f44ea.dat tactics/compositespear_knives.1642c88c.dat tactics/compositespear_knobsticks.cdde2415.dat tactics/compositespear_knuckles.26e5d6b7.dat tactics/compositespear_kusarigama.47b62b3a.dat tactics/compositespear_machete.905de37c.dat tactics/compositespear_magariyari.886e519d.dat tactics/compositespear_monkkatars.6a35d4eb.dat tactics/compositespear_naginata.2dd076e0.dat tactics/compositespear_ninjasword.4934c7ae.dat tactics/compositespear_nunchaku.e4563a78.dat tactics/compositespear_onehandedsword.e9061b35.dat tactics/compositespear_powerfists.98e367d2.dat tactics/compositespear_rifle.e72d60fe.dat tactics/compositespear_sai.dda74748.dat tactics/compositespear_scythe.34a7b9b8.dat tactics/compositespear_shockerclaws.130bc532.dat tactics/compositespear_shogunkatana.b6e833fd.dat tactics/compositespear_shuanggou.86de6609.dat tactics/compositespear_sickles.f92b2699.dat tactics/compositespear_silverglaive.eeac2111.dat tactics/compositespear_spear.53948683.dat tactics/compositespear_staff.5e3bd9b2.dat tactics/compositespear_steelclaws.3d053a55.dat tactics/compositespear_swords.2c6c19c6.dat tactics/compositespear_titangiantsword.9dd4105a.dat tactics/compositespear_tonfa.ad559ebe.dat tactics/compositespear_tonfaguns.86aee008.dat tactics/compositespear_trident.20a71882.dat tactics/compositespear_twohanded.8d76b88e.dat tactics/compositespear_wakidzashi.47c2ff8a.dat tactics/compositespear_wandererstaff.07d74549.dat tactics/compositestaff.703b78d0.dat tactics/compositestaff_compositestaff.28427e77.dat tactics/compositestaff_compositesword.05f3e9f1.dat tactics/compositestaff_crescentknives.42ea50b8.dat tactics/compositestaff_cudgel.11e58926.dat tactics/compositestaff_daggers.6d7f4f3f.dat tactics/compositestaff_doublescythe.da7d3f7d.dat tactics/compositestaff_electrohammers.cfbf17af.dat tactics/compositestaff_fans.79bdb68e.dat tactics/compositestaff_firebatons.c53990e5.dat tactics/compositestaff_fists.a2c56c99.dat tactics/compositestaff_glaive.49d9cf83.dat tactics/compositestaff_glaivebow.c13727b6.dat tactics/compositestaff_hermitswords.d9ea38f6.dat tactics/compositestaff_katana.653894fb.dat tactics/compositestaff_katars.ec85730e.dat tactics/compositestaff_keris.6b4c9275.dat tactics/compositestaff_knives.ce948ec8.dat tactics/compositestaff_knobsticks.a903be64.dat tactics/compositestaff_knuckles.b72fe6e7.dat tactics/compositestaff_kusarigama.843e955e.dat tactics/compositestaff_machete.6fe57707.dat tactics/compositestaff_magariyari.94c76e44.dat tactics/compositestaff_monkkatars.82150d57.dat tactics/compositestaff_naginata.bb013489.dat tactics/compositestaff_ninjasword.fc589c29.dat tactics/compositestaff_nunchaku.795da642.dat tactics/compositestaff_onehandedsword.44f8ec77.dat tactics/compositestaff_powerfists.a07f9f2d.dat tactics/compositestaff_rifle.9daa7f02.dat tactics/compositestaff_sai.d24cd7fd.dat tactics/compositestaff_scythe.07e79d7f.dat tactics/compositestaff_shockerclaws.bc56752d.dat tactics/compositestaff_shogunkatana.6e27826c.dat tactics/compositestaff_shuanggou.1c0ab999.dat tactics/compositestaff_sickles.acb9c0bc.dat tactics/compositestaff_silverglaive.bd519751.dat tactics/compositestaff_spear.2d7b3fce.dat tactics/compositestaff_staff.8c29552e.dat tactics/compositestaff_steelclaws.6dc842cf.dat tactics/compositestaff_swords.4e7e86db.dat tactics/compositestaff_titangiantsword.c9335e49.dat tactics/compositestaff_tonfa.bda1855f.dat tactics/compositestaff_tonfaguns.b146d478.dat tactics/compositestaff_trident.0a8bc029.dat tactics/compositestaff_twohanded.2408d0e6.dat tactics/compositestaff_wakidzashi.c72a5efe.dat tactics/compositestaff_wandererstaff.b4c02f57.dat tactics/compositesword.ec69e4e9.dat tactics/compositesword_compositesword.820a6165.dat tactics/compositesword_crescentknives.63d20483.dat tactics/compositesword_cudgel.f3bc3a93.dat tactics/compositesword_daggers.583615ba.dat tactics/compositesword_doublescythe.98088101.dat tactics/compositesword_electrohammers.226e8e96.dat tactics/compositesword_fans.614e0039.dat tactics/compositesword_firebatons.3c00d537.dat tactics/compositesword_fists.b4e311f8.dat tactics/compositesword_glaive.977426c0.dat tactics/compositesword_glaivebow.14c7805d.dat tactics/compositesword_hermitswords.f3814378.dat tactics/compositesword_katana.5a260272.dat tactics/compositesword_katars.a016981f.dat tactics/compositesword_keris.cb6d2f8d.dat tactics/compositesword_knives.9d4a6587.dat tactics/compositesword_knobsticks.bca8c5c7.dat tactics/compositesword_knuckles.fd34a1e4.dat tactics/compositesword_kusarigama.b3950e57.dat tactics/compositesword_machete.69e7d34b.dat tactics/compositesword_magariyari.03a806cc.dat tactics/compositesword_monkkatars.73d70c95.dat tactics/compositesword_naginata.559ae685.dat tactics/compositesword_ninjasword.b4535486.dat tactics/compositesword_nunchaku.3fc4d453.dat tactics/compositesword_onehandedsword.4e55cf0f.dat tactics/compositesword_powerfists.b1b38e41.dat tactics/compositesword_rifle.a10a6d49.dat tactics/compositesword_sai.3e2da5be.dat tactics/compositesword_scythe.51e0fdc6.dat tactics/compositesword_shockerclaws.020dc785.dat tactics/compositesword_shogunkatana.d515395e.dat tactics/compositesword_shuanggou.a19d76f1.dat tactics/compositesword_sickles.08cbed9d.dat tactics/compositesword_silverglaive.0fe8fb52.dat tactics/compositesword_spear.21a00eda.dat tactics/compositesword_staff.917325a9.dat tactics/compositesword_steelclaws.b03b166c.dat tactics/compositesword_swords.678e9328.dat tactics/compositesword_titangiantsword.8e0aa4f9.dat tactics/compositesword_tonfa.44e89e26.dat tactics/compositesword_tonfaguns.926c6295.dat tactics/compositesword_trident.a02ad0da.dat tactics/compositesword_twohanded.64eae830.dat tactics/compositesword_wakidzashi.67408ba1.dat tactics/compositesword_wandererstaff.9ea2c8ca.dat tactics/crescentknives.1e456e23.dat tactics/crescentknives_crescentknives.9833850d.dat tactics/crescentknives_cudgel.e0e6bd44.dat tactics/crescentknives_daggers.72d29538.dat tactics/crescentknives_doublescythe.d4c5da44.dat tactics/crescentknives_electrohammers.27605d8c.dat tactics/crescentknives_fans.13fbd8cb.dat tactics/crescentknives_firebatons.ceb714de.dat tactics/crescentknives_fists.8b5d69db.dat tactics/crescentknives_glaive.735f390a.dat tactics/crescentknives_glaivebow.fa780c07.dat tactics/crescentknives_hermitswords.7ba9e04e.dat tactics/crescentknives_katana.7517cef7.dat tactics/crescentknives_katars.0c2de86e.dat tactics/crescentknives_keris.fb08ecbc.dat tactics/crescentknives_knives.f90f201c.dat tactics/crescentknives_knobsticks.1fbaaaa6.dat tactics/crescentknives_knuckles.cc0fed9f.dat tactics/crescentknives_kusarigama.760980c3.dat tactics/crescentknives_machete.ec574e17.dat tactics/crescentknives_magariyari.6ddd6999.dat tactics/crescentknives_monkkatars.4e0bbbfa.dat tactics/crescentknives_naginata.0b570a46.dat tactics/crescentknives_ninjasword.163179a6.dat tactics/crescentknives_nunchaku.d660d1c4.dat tactics/crescentknives_onehandedsword.6645338f.dat tactics/crescentknives_powerfists.60de5641.dat tactics/crescentknives_rifle.a676f22d.dat tactics/crescentknives_sai.8c46e89a.dat tactics/crescentknives_scythe.57ecbedc.dat tactics/crescentknives_shockerclaws.2421c7f1.dat tactics/crescentknives_shogunkatana.8ff6008d.dat tactics/crescentknives_shuanggou.63f4f183.dat tactics/crescentknives_sickles.2771a49a.dat tactics/crescentknives_silverglaive.b439de08.dat tactics/crescentknives_spear.6eb40e8b.dat tactics/crescentknives_staff.7f7bfb94.dat tactics/crescentknives_steelclaws.0eef3594.dat tactics/crescentknives_swords.8f961e03.dat tactics/crescentknives_titangiantsword.7e09164c.dat tactics/crescentknives_tonfa.cb86339c.dat tactics/crescentknives_tonfaguns.9545a1a8.dat tactics/crescentknives_trident.edc8ed08.dat tactics/crescentknives_twohanded.51a6e60e.dat tactics/crescentknives_wakidzashi.6e90c6e6.dat tactics/crescentknives_wandererstaff.16b1b118.dat tactics/cudgel.e6c9c4bf.dat tactics/cudgel_cudgel.043b4a87.dat tactics/cudgel_daggers.d5135524.dat tactics/cudgel_doublescythe.101e2bef.dat tactics/cudgel_electrohammers.4e204c9f.dat tactics/cudgel_fans.f2b84835.dat tactics/cudgel_firebatons.985dca96.dat tactics/cudgel_fists.46353a38.dat tactics/cudgel_glaive.d73ec631.dat tactics/cudgel_glaivebow.4372444b.dat tactics/cudgel_hermitswords.211a9e46.dat tactics/cudgel_katana.1848b122.dat tactics/cudgel_katars.58d07d54.dat tactics/cudgel_keris.5625d9d5.dat tactics/cudgel_knives.34ecaaca.dat tactics/cudgel_knobsticks.a518aa44.dat tactics/cudgel_knuckles.32f98134.dat tactics/cudgel_kusarigama.eb69d909.dat tactics/cudgel_machete.9f47fbd7.dat tactics/cudgel_magariyari.56a131d8.dat tactics/cudgel_monkkatars.baa61e13.dat tactics/cudgel_naginata.0dd0ef52.dat tactics/cudgel_ninjasword.c68c0600.dat tactics/cudgel_nunchaku.bc3def81.dat tactics/cudgel_onehandedsword.fa57102c.dat tactics/cudgel_powerfists.c0e39d92.dat tactics/cudgel_rifle.7ae11d3e.dat tactics/cudgel_sai.e29ea035.dat tactics/cudgel_scythe.aa38dc74.dat tactics/cudgel_shockerclaws.6c2a53f6.dat tactics/cudgel_shogunkatana.1d896f85.dat tactics/cudgel_shuanggou.76b3eedc.dat tactics/cudgel_sickles.e414a832.dat tactics/cudgel_silverglaive.fa9e9e96.dat tactics/cudgel_spear.98e5f9db.dat tactics/cudgel_staff.0d1e9e5a.dat tactics/cudgel_steelclaws.4b716cb0.dat tactics/cudgel_swords.770d5b9c.dat tactics/cudgel_titangiantsword.81d935bb.dat tactics/cudgel_tonfa.2d250940.dat tactics/cudgel_tonfaguns.cc536c48.dat tactics/cudgel_trident.a7f15a75.dat tactics/cudgel_twohanded.4a63afbb.dat tactics/cudgel_wakidzashi.61bb617b.dat tactics/cudgel_wandererstaff.0eb0eab1.dat tactics/daggers.e8d60734.dat tactics/daggers_daggers.36faba02.dat tactics/daggers_doublescythe.f852dda4.dat tactics/daggers_electrohammers.87eb2b18.dat tactics/daggers_fans.9c66b03c.dat tactics/daggers_firebatons.07f03937.dat tactics/daggers_fists.7e574223.dat tactics/daggers_glaive.136f2bad.dat tactics/daggers_glaivebow.db89246d.dat tactics/daggers_hermitswords.18eec954.dat tactics/daggers_katana.acbe548d.dat tactics/daggers_katars.9f790c18.dat tactics/daggers_keris.867e8adc.dat tactics/daggers_knives.f3d54dd7.dat tactics/daggers_knobsticks.577bf49b.dat tactics/daggers_knuckles.2b39c0b4.dat tactics/daggers_kusarigama.abda91d7.dat tactics/daggers_machete.daa1c9c6.dat tactics/daggers_magariyari.4a74e6de.dat tactics/daggers_monkkatars.0c7ec5b2.dat tactics/daggers_naginata.3eddab42.dat tactics/daggers_ninjasword.e3c630a3.dat tactics/daggers_nunchaku.9522b46d.dat tactics/daggers_onehandedsword.c1c70289.dat tactics/daggers_powerfists.95474a5f.dat tactics/daggers_rifle.11262223.dat tactics/daggers_sai.2c1d38be.dat tactics/daggers_scythe.56d66a45.dat tactics/daggers_shockerclaws.1184ee40.dat tactics/daggers_shogunkatana.f16fdfa1.dat tactics/daggers_shuanggou.fb0e27d7.dat tactics/daggers_sickles.8db46d12.dat tactics/daggers_silverglaive.58c1d872.dat tactics/daggers_spear.e6042e6e.dat tactics/daggers_staff.f8b7c659.dat tactics/daggers_steelclaws.c35c0ac6.dat tactics/daggers_swords.5188f680.dat tactics/daggers_titangiantsword.95517e6e.dat tactics/daggers_tonfa.4f454fd0.dat tactics/daggers_tonfaguns.555e25fe.dat tactics/daggers_trident.313f858f.dat tactics/daggers_twohanded.1da4a1bd.dat tactics/daggers_wakidzashi.3c821255.dat tactics/daggers_wandererstaff.680b2160.dat tactics/default.16f2bd91.dat tactics/doublescythe.aed34cff.dat tactics/doublescythe_doublescythe.87f8a5bf.dat tactics/doublescythe_electrohammers.771bd7de.dat tactics/doublescythe_fans.44fc13a0.dat tactics/doublescythe_firebatons.ff28e5a1.dat tactics/doublescythe_fists.849d05fc.dat tactics/doublescythe_glaive.eb944f5d.dat tactics/doublescythe_glaivebow.14af546b.dat tactics/doublescythe_hermitswords.7f1e7970.dat tactics/doublescythe_katana.fc73b4cb.dat tactics/doublescythe_katars.ad76b43e.dat tactics/doublescythe_keris.e9c50cc8.dat tactics/doublescythe_knives.20f5d27b.dat tactics/doublescythe_knobsticks.a6774e4b.dat tactics/doublescythe_knuckles.16ce407f.dat tactics/doublescythe_kusarigama.0c2fbbd2.dat tactics/doublescythe_machete.a3145237.dat tactics/doublescythe_magariyari.97b1626e.dat tactics/doublescythe_monkkatars.c949a3b2.dat tactics/doublescythe_naginata.09224045.dat tactics/doublescythe_ninjasword.1e83095d.dat tactics/doublescythe_nunchaku.9e922d71.dat tactics/doublescythe_onehandedsword.1101fa09.dat tactics/doublescythe_powerfists.211a83db.dat tactics/doublescythe_rifle.4c494358.dat tactics/doublescythe_sai.25ef3136.dat tactics/doublescythe_scythe.1fc30b59.dat tactics/doublescythe_shockerclaws.29405ce5.dat tactics/doublescythe_shogunkatana.500ce999.dat tactics/doublescythe_shuanggou.d2a17764.dat tactics/doublescythe_sickles.4542ba0d.dat tactics/doublescythe_silverglaive.b26e51a9.dat tactics/doublescythe_spear.5a26d57e.dat tactics/doublescythe_staff.8acb14f7.dat tactics/doublescythe_steelclaws.12258c22.dat tactics/doublescythe_swords.8344c0f4.dat tactics/doublescythe_titangiantsword.c52692b1.dat tactics/doublescythe_tonfa.86f06d39.dat tactics/doublescythe_tonfaguns.bd54edb4.dat tactics/doublescythe_trident.9dba8a04.dat tactics/doublescythe_twohanded.60735f7d.dat tactics/doublescythe_wakidzashi.823675f7.dat tactics/doublescythe_wandererstaff.762f27a6.dat tactics/electrohammers.19add3a4.dat tactics/electrohammers_electrohammers.6b6c1ae3.dat tactics/electrohammers_fans.615f2387.dat tactics/electrohammers_firebatons.1cb5a8b1.dat tactics/electrohammers_fists.5fedfbc1.dat tactics/electrohammers_glaive.899a7b64.dat tactics/electrohammers_glaivebow.27e51dcf.dat tactics/electrohammers_hermitswords.8be378ce.dat tactics/electrohammers_katana.5ca707f7.dat tactics/electrohammers_katars.5cb0c138.dat tactics/electrohammers_keris.c670d102.dat tactics/electrohammers_knives.49dff795.dat tactics/electrohammers_knobsticks.267b2351.dat tactics/electrohammers_knuckles.ceb78671.dat tactics/electrohammers_kusarigama.4fe921dc.dat tactics/electrohammers_machete.48bc668b.dat tactics/electrohammers_magariyari.e3ec48de.dat tactics/electrohammers_monkkatars.14e1a774.dat tactics/electrohammers_naginata.36bdbbb6.dat tactics/electrohammers_ninjasword.9607bbbb.dat tactics/electrohammers_nunchaku.4c2ef57d.dat tactics/electrohammers_onehandedsword.219e586a.dat tactics/electrohammers_powerfists.5f2a7a88.dat tactics/electrohammers_rifle.8ee60e92.dat tactics/electrohammers_sai.23ce6070.dat tactics/electrohammers_scythe.849c224d.dat tactics/electrohammers_shockerclaws.b2978b17.dat tactics/electrohammers_shogunkatana.c5dba6ac.dat tactics/electrohammers_shuanggou.eae8870b.dat tactics/electrohammers_sickles.5e464c8d.dat tactics/electrohammers_silverglaive.3152164c.dat tactics/electrohammers_spear.6b86efc3.dat tactics/electrohammers_staff.8eef9c2b.dat tactics/electrohammers_steelclaws.378621a8.dat tactics/electrohammers_swords.1de21f11.dat tactics/electrohammers_titangiantsword.bcb52b02.dat tactics/electrohammers_tonfa.d50018cf.dat tactics/electrohammers_tonfaguns.db5988b9.dat tactics/electrohammers_trident.c77cade0.dat tactics/electrohammers_twohanded.3948537b.dat tactics/electrohammers_wakidzashi.57d89222.dat tactics/electrohammers_wandererstaff.b2d5f349.dat tactics/fans.a24b99d0.dat tactics/fans_fans.7e5ed9b1.dat tactics/fans_firebatons.fc5e20d3.dat tactics/fans_fists.db769c9a.dat tactics/fans_glaive.08e6d503.dat tactics/fans_glaivebow.3978dd35.dat tactics/fans_hermitswords.7064722c.dat tactics/fans_katana.3b0f5b58.dat tactics/fans_katars.8f00253f.dat tactics/fans_keris.7a939c09.dat tactics/fans_knives.3ba41397.dat tactics/fans_knobsticks.ab4db2a1.dat tactics/fans_knuckles.df9b7aa5.dat tactics/fans_kusarigama.6c2bc9eb.dat tactics/fans_machete.2ca83af8.dat tactics/fans_magariyari.85a7445a.dat tactics/fans_monkkatars.8557d835.dat tactics/fans_naginata.0000e9db.dat tactics/fans_ninjasword.4d8d02cc.dat tactics/fans_nunchaku.fa70e26a.dat tactics/fans_onehandedsword.24067b9f.dat tactics/fans_powerfists.bad2a12a.dat tactics/fans_rifle.dc72af10.dat tactics/fans_sai.39666043.dat tactics/fans_scythe.d8e7757d.dat tactics/fans_shockerclaws.dbea833a.dat tactics/fans_shogunkatana.39879391.dat tactics/fans_shuanggou.8d8ed2ef.dat tactics/fans_sickles.00be1079.dat tactics/fans_silverglaive.5bd55a43.dat tactics/fans_spear.541f6b30.dat tactics/fans_staff.b8d1de89.dat tactics/fans_steelclaws.adb2b158.dat tactics/fans_swords.c6d6afa8.dat tactics/fans_titangiantsword.82bcdd45.dat tactics/fans_tonfa.c0cc7947.dat tactics/fans_tonfaguns.33bc77fd.dat tactics/fans_trident.54972e6c.dat tactics/fans_twohanded.de367792.dat tactics/fans_wakidzashi.8bf92b06.dat tactics/fans_wandererstaff.bd812af8.dat tactics/firebatons.a6a06013.dat tactics/firebatons_firebatons.d0bee61c.dat tactics/firebatons_fists.5fed0a20.dat tactics/firebatons_glaive.0693d48f.dat tactics/firebatons_glaivebow.9e9e07dc.dat tactics/firebatons_hermitswords.60f1008e.dat tactics/firebatons_katana.82282efa.dat tactics/firebatons_katars.da0bfddf.dat tactics/firebatons_keris.072e30c6.dat tactics/firebatons_knives.299d300e.dat tactics/firebatons_knobsticks.12faaeb3.dat tactics/firebatons_knuckles.e1ebf82b.dat tactics/firebatons_kusarigama.b3eb6c83.dat tactics/firebatons_machete.6c63d25e.dat tactics/firebatons_magariyari.0278314b.dat tactics/firebatons_monkkatars.9014a63a.dat tactics/firebatons_naginata.a482e41e.dat tactics/firebatons_ninjasword.720fdf6b.dat tactics/firebatons_nunchaku.efeb9d68.dat tactics/firebatons_onehandedsword.f07bcf8a.dat tactics/firebatons_powerfists.4a7c6c4f.dat tactics/firebatons_rifle.a4d69c8a.dat tactics/firebatons_sai.9f18e7b5.dat tactics/firebatons_scythe.43e27b9c.dat tactics/firebatons_shockerclaws.5a0da5d5.dat tactics/firebatons_shogunkatana.760de93f.dat tactics/firebatons_shuanggou.f0612038.dat tactics/firebatons_sickles.e04eda8c.dat tactics/firebatons_silverglaive.ebbf3375.dat tactics/firebatons_spear.e0796219.dat tactics/firebatons_staff.c251d04b.dat tactics/firebatons_steelclaws.3c9de58b.dat tactics/firebatons_swords.21ce6bd7.dat tactics/firebatons_titangiantsword.d0c04662.dat tactics/firebatons_tonfa.7240de6b.dat tactics/firebatons_tonfaguns.e3b5d8eb.dat tactics/firebatons_trident.17d17e89.dat tactics/firebatons_twohanded.fbb3786d.dat tactics/firebatons_wakidzashi.9b2cf1eb.dat tactics/firebatons_wandererstaff.cfabfd2f.dat tactics/fists.fccd8560.dat tactics/fists_fists.0c5a246d.dat tactics/fists_glaive.befc9220.dat tactics/fists_glaivebow.b724cd9d.dat tactics/fists_hermitswords.e1839213.dat tactics/fists_katana.7fd50b40.dat tactics/fists_katars.9834a39a.dat tactics/fists_keris.651c57d3.dat tactics/fists_knives.97b8726a.dat tactics/fists_knobsticks.3ea48400.dat tactics/fists_knuckles.eccac967.dat tactics/fists_kusarigama.83dc2c4b.dat tactics/fists_machete.d685f2a2.dat tactics/fists_magariyari.9d20ea00.dat tactics/fists_monkkatars.49d33a08.dat tactics/fists_naginata.ad98b465.dat tactics/fists_ninjasword.464e710d.dat tactics/fists_nunchaku.ff635988.dat tactics/fists_onehandedsword.8126a31c.dat tactics/fists_powerfists.3c3979c2.dat tactics/fists_rifle.4f1bb8cc.dat tactics/fists_sai.2aea3b78.dat tactics/fists_scythe.aa482077.dat tactics/fists_shockerclaws.a5ecdf0e.dat tactics/fists_shogunkatana.652f66ba.dat tactics/fists_shuanggou.b9162d22.dat tactics/fists_sickles.cbed19a4.dat tactics/fists_silverglaive.94a37ee0.dat tactics/fists_spear.8ca8394e.dat tactics/fists_staff.75a4e1d5.dat tactics/fists_steelclaws.064078b1.dat tactics/fists_swords.bc62f354.dat tactics/fists_titangiantsword.95ad35d8.dat tactics/fists_tonfa.4796dab4.dat tactics/fists_tonfaguns.d38392d8.dat tactics/fists_trident.69855f13.dat tactics/fists_twohanded.1e3803ca.dat tactics/fists_wakidzashi.2d3360dd.dat tactics/fists_wandererstaff.88eb8857.dat tactics/glaive.b4ec0f9a.dat tactics/glaivebow.7c7a7aeb.dat tactics/glaivebow_glaivebow.8d2c019b.dat tactics/glaivebow_hermitswords.e129c003.dat tactics/glaivebow_katana.8c559341.dat tactics/glaivebow_katars.59d3734c.dat tactics/glaivebow_keris.508fb702.dat tactics/glaivebow_knives.8f61514c.dat tactics/glaivebow_knobsticks.69698ae8.dat tactics/glaivebow_knuckles.39f128f1.dat tactics/glaivebow_kusarigama.b0b301f4.dat tactics/glaivebow_machete.f61c5690.dat tactics/glaivebow_magariyari.17a060e0.dat tactics/glaivebow_monkkatars.67f6cd3c.dat tactics/glaivebow_naginata.826ce944.dat tactics/glaivebow_ninjasword.6a1ffbde.dat tactics/glaivebow_nunchaku.f82ded26.dat tactics/glaivebow_onehandedsword.a066ddad.dat tactics/glaivebow_powerfists.1f8596f8.dat tactics/glaivebow_rifle.ad4d4db5.dat tactics/glaivebow_sai.37a996c5.dat tactics/glaivebow_scythe.799f4a1b.dat tactics/glaivebow_shockerclaws.3946a9a0.dat tactics/glaivebow_shogunkatana.a4f16210.dat tactics/glaivebow_shuanggou.8efb1d28.dat tactics/glaivebow_sickles.8fb0071a.dat tactics/glaivebow_silverglaive.85001ff2.dat tactics/glaivebow_spear.3716e67e.dat tactics/glaivebow_staff.107d8667.dat tactics/glaivebow_steelclaws.fc542ddb.dat tactics/glaivebow_swords.67874b7b.dat tactics/glaivebow_titangiantsword.f594500a.dat tactics/glaivebow_tonfa.53d50333.dat tactics/glaivebow_tonfaguns.a3c77fb6.dat tactics/glaivebow_trident.bf14a8e2.dat tactics/glaivebow_twohanded.64f1ce68.dat tactics/glaivebow_wakidzashi.4d935fac.dat tactics/glaivebow_wandererstaff.dd62b976.dat tactics/glaive_glaive.e94d9646.dat tactics/glaive_glaivebow.2fe13476.dat tactics/glaive_hermitswords.0e1045ee.dat tactics/glaive_katana.3bd3b6c2.dat tactics/glaive_katars.147f43e2.dat tactics/glaive_keris.d1e8d8e4.dat tactics/glaive_knives.5b8886fa.dat tactics/glaive_knobsticks.53d82820.dat tactics/glaive_knuckles.738cb4f3.dat tactics/glaive_kusarigama.9ea61124.dat tactics/glaive_machete.91d63c4b.dat tactics/glaive_magariyari.10c6ec6a.dat tactics/glaive_monkkatars.9a512719.dat tactics/glaive_naginata.02d7c050.dat tactics/glaive_ninjasword.4b06b940.dat tactics/glaive_nunchaku.009ce1e2.dat tactics/glaive_onehandedsword.8641a778.dat tactics/glaive_powerfists.82f348c9.dat tactics/glaive_rifle.38dbf274.dat tactics/glaive_sai.616e9703.dat tactics/glaive_scythe.403acca2.dat tactics/glaive_shockerclaws.f4e77e52.dat tactics/glaive_shogunkatana.60ea29ec.dat tactics/glaive_shuanggou.1b699fb4.dat tactics/glaive_sickles.edcaf296.dat tactics/glaive_silverglaive.5e922f70.dat tactics/glaive_spear.690d5f15.dat tactics/glaive_staff.73333a9b.dat tactics/glaive_steelclaws.cae0d203.dat tactics/glaive_swords.62b39ad2.dat tactics/glaive_titangiantsword.e5111a5c.dat tactics/glaive_tonfa.62d37660.dat tactics/glaive_tonfaguns.88ec3082.dat tactics/glaive_trident.3f43117a.dat tactics/glaive_twohanded.316b85e5.dat tactics/glaive_wakidzashi.c4c96e48.dat tactics/glaive_wandererstaff.8ae0bc61.dat tactics/hermitswords.a8ee01b3.dat tactics/hermitswords_hermitswords.e8f5e34a.dat tactics/hermitswords_katana.e65f8114.dat tactics/hermitswords_katars.48b54b57.dat tactics/hermitswords_keris.dfdb04e4.dat tactics/hermitswords_knives.c2eeae7f.dat tactics/hermitswords_knobsticks.8c68e970.dat tactics/hermitswords_knuckles.fa9723a3.dat tactics/hermitswords_kusarigama.0d13afcc.dat tactics/hermitswords_machete.ef03a1e9.dat tactics/hermitswords_magariyari.e8b23813.dat tactics/hermitswords_monkkatars.a8091825.dat tactics/hermitswords_naginata.d32eef72.dat tactics/hermitswords_ninjasword.1f89d78d.dat tactics/hermitswords_nunchaku.8aee855b.dat tactics/hermitswords_onehandedsword.f5624afe.dat tactics/hermitswords_powerfists.6fe96e98.dat tactics/hermitswords_rifle.2e7340c1.dat tactics/hermitswords_sai.d802f99c.dat tactics/hermitswords_scythe.df3cbc47.dat tactics/hermitswords_shockerclaws.45d36840.dat tactics/hermitswords_shogunkatana.1481863e.dat tactics/hermitswords_shuanggou.ae2a1e77.dat tactics/hermitswords_sickles.4100417d.dat tactics/hermitswords_silverglaive.d3420787.dat tactics/hermitswords_spear.113b78e0.dat tactics/hermitswords_staff.d6ae8617.dat tactics/hermitswords_steelclaws.793426e3.dat tactics/hermitswords_swords.28134644.dat tactics/hermitswords_titangiantsword.4fab7268.dat tactics/hermitswords_tonfa.71df2cd2.dat tactics/hermitswords_tonfaguns.0628583d.dat tactics/hermitswords_trident.579a374e.dat tactics/hermitswords_twohanded.0980bcb8.dat tactics/hermitswords_wakidzashi.9816c707.dat tactics/hermitswords_wandererstaff.f840aaa0.dat tactics/katana.aef7b11a.dat tactics/katana_katana.8617c151.dat tactics/katana_katars.69c17e77.dat tactics/katana_keris.5a66e6de.dat tactics/katana_knives.292eb535.dat tactics/katana_knobsticks.cca0fc33.dat tactics/katana_knuckles.a917fe29.dat tactics/katana_kusarigama.698f8179.dat tactics/katana_machete.b0e72f79.dat tactics/katana_magariyari.7d3c4801.dat tactics/katana_monkkatars.2cf43a4b.dat tactics/katana_naginata.85e184e9.dat tactics/katana_ninjasword.7a3ab23a.dat tactics/katana_nunchaku.85931eea.dat tactics/katana_onehandedsword.ae6f7b7b.dat tactics/katana_powerfists.2d9f2e9f.dat tactics/katana_rifle.713f582d.dat tactics/katana_sai.87c89fd5.dat tactics/katana_scythe.16823a52.dat tactics/katana_shockerclaws.24787180.dat tactics/katana_shogunkatana.c4642bc9.dat tactics/katana_shuanggou.d02fe9d7.dat tactics/katana_sickles.18dd138e.dat tactics/katana_silverglaive.21f2a1e9.dat tactics/katana_spear.a7c2524a.dat tactics/katana_staff.9e32c48a.dat tactics/katana_steelclaws.19d31021.dat tactics/katana_swords.17f7aa9b.dat tactics/katana_titangiantsword.db558d80.dat tactics/katana_tonfa.582c7b6f.dat tactics/katana_tonfaguns.bc2d29f5.dat tactics/katana_trident.58e9ecc1.dat tactics/katana_twohanded.e0d7690d.dat tactics/katana_wakidzashi.1d3579d8.dat tactics/katana_wandererstaff.00981a56.dat tactics/katars.98d73a16.dat tactics/katars_katars.bf4a6088.dat tactics/katars_keris.b57765f2.dat tactics/katars_knives.51f8b653.dat tactics/katars_knobsticks.ecbf173b.dat tactics/katars_knuckles.f39b0fc9.dat tactics/katars_kusarigama.6cde12aa.dat tactics/katars_machete.6c157b84.dat tactics/katars_magariyari.8f58367b.dat tactics/katars_monkkatars.5d8d0656.dat tactics/katars_naginata.bf1af588.dat tactics/katars_ninjasword.329e1658.dat tactics/katars_nunchaku.a8104885.dat tactics/katars_onehandedsword.15d7578b.dat tactics/katars_powerfists.0127918d.dat tactics/katars_rifle.0ff9d746.dat tactics/katars_sai.f6009cbe.dat tactics/katars_scythe.1d9732aa.dat tactics/katars_shockerclaws.552da9c2.dat tactics/katars_shogunkatana.dcf496e8.dat tactics/katars_shuanggou.3a69e320.dat tactics/katars_sickles.2f6486b9.dat tactics/katars_silverglaive.a3b38f30.dat tactics/katars_spear.4652e2aa.dat tactics/katars_staff.50a6ca50.dat tactics/katars_steelclaws.a1056af5.dat tactics/katars_swords.983755ed.dat tactics/katars_titangiantsword.c2fbb999.dat tactics/katars_tonfa.fd316796.dat tactics/katars_tonfaguns.af40ec6a.dat tactics/katars_trident.4817111f.dat tactics/katars_twohanded.6f1d0b57.dat tactics/katars_wakidzashi.f5b7f59f.dat tactics/katars_wandererstaff.2c21ed55.dat tactics/keris.fa3ced33.dat tactics/keris_keris.bf00c7f8.dat tactics/keris_knives.8f331507.dat tactics/keris_knobsticks.f26b0db0.dat tactics/keris_knuckles.2ca64395.dat tactics/keris_kusarigama.90354e41.dat tactics/keris_machete.3bc1e1e2.dat tactics/keris_magariyari.4cda69ef.dat tactics/keris_monkkatars.2c23c740.dat tactics/keris_naginata.a1cd5a84.dat tactics/keris_ninjasword.64bbe119.dat tactics/keris_nunchaku.5c7ada91.dat tactics/keris_onehandedsword.e35ca7ed.dat tactics/keris_powerfists.9057e886.dat tactics/keris_rifle.a699016a.dat tactics/keris_sai.624a73d4.dat tactics/keris_scythe.a0d19056.dat tactics/keris_shockerclaws.320364ed.dat tactics/keris_shogunkatana.b25ecd2a.dat tactics/keris_shuanggou.44811bb5.dat tactics/keris_sickles.6ecfe052.dat tactics/keris_silverglaive.5983a5c7.dat tactics/keris_spear.1060360d.dat tactics/keris_staff.1d671743.dat tactics/keris_steelclaws.3c0d9240.dat tactics/keris_swords.c47cba36.dat tactics/keris_titangiantsword.a83320d9.dat tactics/keris_tonfa.10a8b95f.dat tactics/keris_tonfaguns.7192bef0.dat tactics/keris_trident.b523b8cc.dat tactics/keris_twohanded.3becee91.dat tactics/keris_wakidzashi.ac1b1c6c.dat tactics/keris_wandererstaff.058bcd29.dat tactics/knives.2486d88d.dat tactics/knives_knives.69d7982f.dat tactics/knives_knobsticks.014a06d0.dat tactics/knives_knuckles.6ed017f5.dat tactics/knives_kusarigama.0d85841d.dat tactics/knives_machete.b1434136.dat tactics/knives_magariyari.b2ad8d8c.dat tactics/knives_monkkatars.56ecef5f.dat tactics/knives_naginata.c4238c52.dat tactics/knives_ninjasword.0f33a5ae.dat tactics/knives_nunchaku.47c4f2fa.dat tactics/knives_onehandedsword.15a6967d.dat tactics/knives_powerfists.2edcaf1d.dat tactics/knives_rifle.92b700e5.dat tactics/knives_sai.06edb13b.dat tactics/knives_scythe.81c4fe23.dat tactics/knives_shockerclaws.f81fba35.dat tactics/knives_shogunkatana.8bc8f4fc.dat tactics/knives_shuanggou.db60735f.dat tactics/knives_sickles.e26b1f9c.dat tactics/knives_silverglaive.7e5b6b2f.dat tactics/knives_spear.aaf7626d.dat tactics/knives_staff.bc23b350.dat tactics/knives_steelclaws.128c409d.dat tactics/knives_swords.2063d8e1.dat tactics/knives_titangiantsword.45b243d5.dat tactics/knives_tonfa.2ca387fe.dat tactics/knives_tonfaguns.67dce31f.dat tactics/knives_trident.27e15082.dat tactics/knives_twohanded.c6f6e286.dat tactics/knives_wakidzashi.c76b2c0e.dat tactics/knives_wandererstaff.bc0c76c8.dat tactics/knobsticks.73a12d2e.dat tactics/knobsticks_knobsticks.9e08188b.dat tactics/knobsticks_knuckles.38c400db.dat tactics/knobsticks_kusarigama.91e8c228.dat tactics/knobsticks_machete.d449fbfa.dat tactics/knobsticks_magariyari.61c6b641.dat tactics/knobsticks_monkkatars.f3cff797.dat tactics/knobsticks_naginata.24817ae5.dat tactics/knobsticks_ninjasword.c74bf86a.dat tactics/knobsticks_nunchaku.2a9f8ef2.dat tactics/knobsticks_onehandedsword.3bd1cf1d.dat tactics/knobsticks_powerfists.505d89f7.dat tactics/knobsticks_rifle.1a1f825d.dat tactics/knobsticks_sai.76fc51a5.dat tactics/knobsticks_scythe.5757b5fe.dat tactics/knobsticks_shockerclaws.a846e89a.dat tactics/knobsticks_shogunkatana.f56acb89.dat tactics/knobsticks_shuanggou.c7bab4f0.dat tactics/knobsticks_sickles.29be9941.dat tactics/knobsticks_silverglaive.92622357.dat tactics/knobsticks_spear.13c5f73e.dat tactics/knobsticks_staff.1320cefa.dat tactics/knobsticks_steelclaws.f812828a.dat tactics/knobsticks_swords.a3d6b1be.dat tactics/knobsticks_titangiantsword.eaa4eddf.dat tactics/knobsticks_tonfa.d4189cb5.dat tactics/knobsticks_tonfaguns.5c6bab52.dat tactics/knobsticks_trident.ba4f71b5.dat tactics/knobsticks_twohanded.f6925756.dat tactics/knobsticks_wakidzashi.2a48d17a.dat tactics/knobsticks_wandererstaff.66824a23.dat tactics/knuckles.19df8ae2.dat tactics/knuckles_knuckles.3b4e588b.dat tactics/knuckles_kusarigama.810a5796.dat tactics/knuckles_machete.e74a24ed.dat tactics/knuckles_magariyari.6030dee5.dat tactics/knuckles_monkkatars.b921736e.dat tactics/knuckles_naginata.1e5acce9.dat tactics/knuckles_ninjasword.22dc177a.dat tactics/knuckles_nunchaku.9d3d6189.dat tactics/knuckles_onehandedsword.693367d3.dat tactics/knuckles_powerfists.645e4c62.dat tactics/knuckles_rifle.b04facd4.dat tactics/knuckles_sai.b654f7a2.dat tactics/knuckles_scythe.12dcebef.dat tactics/knuckles_shockerclaws.c26f89fe.dat tactics/knuckles_shogunkatana.af8c5834.dat tactics/knuckles_shuanggou.119e23b6.dat tactics/knuckles_sickles.ec0770ef.dat tactics/knuckles_silverglaive.ff630fb7.dat tactics/knuckles_spear.90215cf0.dat tactics/knuckles_staff.2be27580.dat tactics/knuckles_steelclaws.be4727de.dat tactics/knuckles_swords.7ac28ada.dat tactics/knuckles_titangiantsword.0efdc708.dat tactics/knuckles_tonfa.c7496bd7.dat tactics/knuckles_tonfaguns.8c58ba08.dat tactics/knuckles_trident.9297cba5.dat tactics/knuckles_twohanded.d4f7643e.dat tactics/knuckles_wakidzashi.6fbc404f.dat tactics/knuckles_wandererstaff.82d20d16.dat tactics/kusarigama.3e9c9d45.dat tactics/kusarigama_kusarigama.411d5525.dat tactics/kusarigama_machete.62970a35.dat tactics/kusarigama_magariyari.406bb074.dat tactics/kusarigama_monkkatars.12b5aa68.dat tactics/kusarigama_naginata.c06324b6.dat tactics/kusarigama_ninjasword.94577858.dat tactics/kusarigama_nunchaku.707cf080.dat tactics/kusarigama_onehandedsword.4e0c6e74.dat tactics/kusarigama_powerfists.537d2791.dat tactics/kusarigama_rifle.c92fbc22.dat tactics/kusarigama_sai.93f44f82.dat tactics/kusarigama_scythe.e9e85ad2.dat tactics/kusarigama_shockerclaws.e2827958.dat tactics/kusarigama_shogunkatana.c9773ffe.dat tactics/kusarigama_shuanggou.1b69cdc5.dat tactics/kusarigama_sickles.d7d3e93d.dat tactics/kusarigama_silverglaive.abfda5fb.dat tactics/kusarigama_spear.310fb2e1.dat tactics/kusarigama_staff.59a01e05.dat tactics/kusarigama_steelclaws.0ea28e67.dat tactics/kusarigama_swords.0c457bb9.dat tactics/kusarigama_titangiantsword.d399af91.dat tactics/kusarigama_tonfa.72e33ed5.dat tactics/kusarigama_tonfaguns.6b6a5991.dat tactics/kusarigama_trident.4b2f3cf8.dat tactics/kusarigama_twohanded.3f7c7a6a.dat tactics/kusarigama_wakidzashi.b529db09.dat tactics/kusarigama_wandererstaff.8ad6c049.dat tactics/machete.656ddbba.dat tactics/machete_machete.2659ad78.dat tactics/machete_magariyari.78ca3d68.dat tactics/machete_monkkatars.45e2e5e1.dat tactics/machete_naginata.d67a6743.dat tactics/machete_ninjasword.54faac96.dat tactics/machete_nunchaku.83a96843.dat tactics/machete_onehandedsword.d8ddc670.dat tactics/machete_powerfists.2b5fe331.dat tactics/machete_rifle.0f789c4b.dat tactics/machete_sai.103aee6e.dat tactics/machete_scythe.fb8693b4.dat tactics/machete_shockerclaws.94ad848c.dat tactics/machete_shogunkatana.40644e52.dat tactics/machete_shuanggou.83c3c92a.dat tactics/machete_sickles.561a066a.dat tactics/machete_silverglaive.5b6b4d4b.dat tactics/machete_spear.8af619c6.dat tactics/machete_staff.c0a01b49.dat tactics/machete_steelclaws.5bda9559.dat tactics/machete_swords.c7a22820.dat tactics/machete_titangiantsword.91b00360.dat tactics/machete_tonfa.ec76ed9d.dat tactics/machete_tonfaguns.94d7188f.dat tactics/machete_trident.c2cb516f.dat tactics/machete_twohanded.7a983427.dat tactics/machete_wakidzashi.3676a6d6.dat tactics/machete_wandererstaff.0607605f.dat tactics/magariyari.ea1da8c8.dat tactics/magariyari_magariyari.df246c40.dat tactics/magariyari_monkkatars.b13bf842.dat tactics/magariyari_naginata.bac2b585.dat tactics/magariyari_ninjasword.49c4add3.dat tactics/magariyari_nunchaku.8f6a6fec.dat tactics/magariyari_onehandedsword.03c289c0.dat tactics/magariyari_powerfists.97f0dcfd.dat tactics/magariyari_rifle.13a2d0f7.dat tactics/magariyari_sai.166946e6.dat tactics/magariyari_scythe.1f30cf2f.dat tactics/magariyari_shockerclaws.8fd7bb2f.dat tactics/magariyari_shogunkatana.350007cf.dat tactics/magariyari_shuanggou.78586d2b.dat tactics/magariyari_sickles.03a7d274.dat tactics/magariyari_silverglaive.eea66a1a.dat tactics/magariyari_spear.608b4333.dat tactics/magariyari_staff.c4675d06.dat tactics/magariyari_steelclaws.2f2eba90.dat tactics/magariyari_swords.bd1a8a6f.dat tactics/magariyari_titangiantsword.e4c9bb33.dat tactics/magariyari_tonfa.e38071a6.dat tactics/magariyari_tonfaguns.6574f952.dat tactics/magariyari_trident.a73a0cb7.dat tactics/magariyari_twohanded.e79b9bc3.dat tactics/magariyari_wakidzashi.8e265c01.dat tactics/magariyari_wandererstaff.70f96a21.dat tactics/monkkatars.1db843b6.dat tactics/monkkatars_monkkatars.4ed0bc6c.dat tactics/monkkatars_naginata.8d548b46.dat tactics/monkkatars_ninjasword.158db956.dat tactics/monkkatars_nunchaku.0fda5a88.dat tactics/monkkatars_onehandedsword.cdeaf592.dat tactics/monkkatars_powerfists.ecd93286.dat tactics/monkkatars_rifle.7ecfdcff.dat tactics/monkkatars_sai.09aa1b5b.dat tactics/monkkatars_scythe.97a37b1c.dat tactics/monkkatars_shockerclaws.745270c6.dat tactics/monkkatars_shogunkatana.b923ad49.dat tactics/monkkatars_shuanggou.73f64a98.dat tactics/monkkatars_sickles.d12122c2.dat tactics/monkkatars_silverglaive.2ae71b12.dat tactics/monkkatars_spear.05b04fbc.dat tactics/monkkatars_staff.6148ddb9.dat tactics/monkkatars_steelclaws.63eddcc5.dat tactics/monkkatars_swords.a62f1474.dat tactics/monkkatars_titangiantsword.1a8a962b.dat tactics/monkkatars_tonfa.621c380e.dat tactics/monkkatars_tonfaguns.d0372286.dat tactics/monkkatars_trident.01776f81.dat tactics/monkkatars_twohanded.0143addb.dat tactics/monkkatars_wakidzashi.b25bb974.dat tactics/monkkatars_wandererstaff.5ad255dc.dat tactics/naginata.c4fdf522.dat tactics/naginata_naginata.fa9b0739.dat tactics/naginata_ninjasword.a23b8ba8.dat tactics/naginata_nunchaku.1c202d81.dat tactics/naginata_onehandedsword.8c06fe87.dat tactics/naginata_powerfists.d8d72788.dat tactics/naginata_rifle.dfd44c07.dat tactics/naginata_sai.4aa43ac5.dat tactics/naginata_scythe.43583467.dat tactics/naginata_shockerclaws.666feb49.dat tactics/naginata_shogunkatana.0a60400e.dat tactics/naginata_shuanggou.e4e6a6ce.dat tactics/naginata_sickles.db0e4155.dat tactics/naginata_silverglaive.2967f7e9.dat tactics/naginata_spear.e4576f68.dat tactics/naginata_staff.dea6afea.dat tactics/naginata_steelclaws.4fd33bab.dat tactics/naginata_swords.d4b5fbd0.dat tactics/naginata_titangiantsword.9f6adedb.dat tactics/naginata_tonfa.824d0e94.dat tactics/naginata_tonfaguns.8ea109fd.dat tactics/naginata_trident.523c3d35.dat tactics/naginata_twohanded.9f26c7d8.dat tactics/naginata_wakidzashi.aa404003.dat tactics/naginata_wandererstaff.c6738942.dat tactics/ninjasword.9ded796c.dat tactics/ninjasword_ninjasword.68de04a1.dat tactics/ninjasword_nunchaku.ce4a7784.dat tactics/ninjasword_onehandedsword.96d04079.dat tactics/ninjasword_powerfists.ea537b20.dat tactics/ninjasword_rifle.15048594.dat tactics/ninjasword_sai.bde27394.dat tactics/ninjasword_scythe.ac6ef2f4.dat tactics/ninjasword_shockerclaws.d9fdb6b8.dat tactics/ninjasword_shogunkatana.46f8d279.dat tactics/ninjasword_shuanggou.0b353956.dat tactics/ninjasword_sickles.7da2b85c.dat tactics/ninjasword_silverglaive.93449961.dat tactics/ninjasword_spear.4fa58ea8.dat tactics/ninjasword_staff.f7166096.dat tactics/ninjasword_steelclaws.7f395a3e.dat tactics/ninjasword_swords.cc8b67ec.dat tactics/ninjasword_titangiantsword.4fd5d670.dat tactics/ninjasword_tonfa.751ad42c.dat tactics/ninjasword_tonfaguns.07e52f62.dat tactics/ninjasword_trident.a02740c1.dat tactics/ninjasword_twohanded.5dd45a4a.dat tactics/ninjasword_wakidzashi.e7821c8d.dat tactics/ninjasword_wandererstaff.d4b7a86a.dat tactics/nunchaku.c055aa25.dat tactics/nunchaku_nunchaku.b2bd39bf.dat tactics/nunchaku_onehandedsword.ccba25cf.dat tactics/nunchaku_powerfists.6c6254a4.dat tactics/nunchaku_rifle.80cdbf13.dat tactics/nunchaku_sai.d7948b0d.dat tactics/nunchaku_scythe.485f9444.dat tactics/nunchaku_shockerclaws.45254798.dat tactics/nunchaku_shogunkatana.b2d30c10.dat tactics/nunchaku_shuanggou.84208772.dat tactics/nunchaku_sickles.d2d9c857.dat tactics/nunchaku_silverglaive.6ead1474.dat tactics/nunchaku_spear.7a3dece0.dat tactics/nunchaku_staff.3b08ea2d.dat tactics/nunchaku_steelclaws.d37bafcf.dat tactics/nunchaku_swords.01b33135.dat tactics/nunchaku_titangiantsword.e3843ca3.dat tactics/nunchaku_tonfa.a65aa1c7.dat tactics/nunchaku_tonfaguns.867b52c0.dat tactics/nunchaku_trident.89eca6ad.dat tactics/nunchaku_twohanded.845a636d.dat tactics/nunchaku_wakidzashi.0a109886.dat tactics/nunchaku_wandererstaff.e27a91bc.dat tactics/onehandedsword.1b02df7c.dat tactics/onehandedsword_onehandedsword.a2ef7665.dat tactics/onehandedsword_powerfists.6a326c5e.dat tactics/onehandedsword_rifle.5c86e880.dat tactics/onehandedsword_sai.0726ba4c.dat tactics/onehandedsword_scythe.fddb36d0.dat tactics/onehandedsword_shockerclaws.66fb318b.dat tactics/onehandedsword_shogunkatana.48e4db48.dat tactics/onehandedsword_shuanggou.9e1b513d.dat tactics/onehandedsword_sickles.26cfdcd2.dat tactics/onehandedsword_silverglaive.62ab9953.dat tactics/onehandedsword_spear.9a4082e7.dat tactics/onehandedsword_staff.fb391634.dat tactics/onehandedsword_steelclaws.bfc30125.dat tactics/onehandedsword_swords.37236dfd.dat tactics/onehandedsword_titangiantsword.a8a4f66a.dat tactics/onehandedsword_tonfa.0e1518ad.dat tactics/onehandedsword_tonfaguns.2505c979.dat tactics/onehandedsword_trident.3d9f4779.dat tactics/onehandedsword_twohanded.d542110f.dat tactics/onehandedsword_wakidzashi.bf89d76b.dat tactics/onehandedsword_wandererstaff.e196da74.dat tactics/powerfists.cf1e560a.dat tactics/powerfists_powerfists.e25f7429.dat tactics/powerfists_rifle.e9f66508.dat tactics/powerfists_sai.23989841.dat tactics/powerfists_scythe.24c23a68.dat tactics/powerfists_shockerclaws.daa51bb3.dat tactics/powerfists_shogunkatana.0ac22447.dat tactics/powerfists_shuanggou.12ad9735.dat tactics/powerfists_sickles.09f7c79e.dat tactics/powerfists_silverglaive.14e5e954.dat tactics/powerfists_spear.0dcaf165.dat tactics/powerfists_staff.e9cbe232.dat tactics/powerfists_steelclaws.f4ec42a5.dat tactics/powerfists_swords.c8f7ba55.dat tactics/powerfists_titangiantsword.403c5b7c.dat tactics/powerfists_tonfa.731afb7d.dat tactics/powerfists_tonfaguns.5507a4c4.dat tactics/powerfists_trident.b8d5268e.dat tactics/powerfists_twohanded.bbfb705b.dat tactics/powerfists_wakidzashi.8319581d.dat tactics/powerfists_wandererstaff.98e5a689.dat tactics/rifle.ffbdd5ef.dat tactics/rifle_rifle.4ed6b4ee.dat tactics/rifle_sai.2fe7a521.dat tactics/rifle_scythe.28003450.dat tactics/rifle_shockerclaws.13fa1745.dat tactics/rifle_shogunkatana.2b959a76.dat tactics/rifle_shuanggou.ca2906eb.dat tactics/rifle_sickles.3bb23203.dat tactics/rifle_silverglaive.b1ea0b99.dat tactics/rifle_spear.69349c4a.dat tactics/rifle_staff.10239c37.dat tactics/rifle_steelclaws.f3440a78.dat tactics/rifle_swords.e4c3fefc.dat tactics/rifle_titangiantsword.b9002058.dat tactics/rifle_tonfa.72152eb2.dat tactics/rifle_tonfaguns.558d86aa.dat tactics/rifle_trident.fba92696.dat tactics/rifle_twohanded.c911d4a8.dat tactics/rifle_wakidzashi.341172eb.dat tactics/rifle_wandererstaff.a9ffef08.dat tactics/sai.1eb7a899.dat tactics/sai_sai.aa84ff91.dat tactics/sai_scythe.e26054e7.dat tactics/sai_shockerclaws.b0b6166f.dat tactics/sai_shogunkatana.cb7faaab.dat tactics/sai_shuanggou.6becac38.dat tactics/sai_sickles.3ecc5ad4.dat tactics/sai_silverglaive.5828513e.dat tactics/sai_spear.f2959de9.dat tactics/sai_staff.31542b84.dat tactics/sai_steelclaws.b023b997.dat tactics/sai_swords.2d0a960b.dat tactics/sai_titangiantsword.58afdbd4.dat tactics/sai_tonfa.999f5aa2.dat tactics/sai_tonfaguns.4194520b.dat tactics/sai_trident.70106719.dat tactics/sai_twohanded.a40cae73.dat tactics/sai_wakidzashi.000532cd.dat tactics/sai_wandererstaff.aab180fe.dat tactics/scythe.af797b4e.dat tactics/scythe_scythe.23dd4390.dat tactics/scythe_shockerclaws.b4ee0ab8.dat tactics/scythe_shogunkatana.fe3d6c0e.dat tactics/scythe_shuanggou.ba1a97d9.dat tactics/scythe_sickles.fbaa0809.dat tactics/scythe_silverglaive.c34477f3.dat tactics/scythe_spear.746c41a5.dat tactics/scythe_staff.48eac299.dat tactics/scythe_steelclaws.0684cba9.dat tactics/scythe_swords.22c3e891.dat tactics/scythe_titangiantsword.18b1093f.dat tactics/scythe_tonfa.fad0af2d.dat tactics/scythe_tonfaguns.3eace52d.dat tactics/scythe_trident.7b536457.dat tactics/scythe_twohanded.36d3b3ff.dat tactics/scythe_wakidzashi.926c8caf.dat tactics/scythe_wandererstaff.4bc42a5b.dat tactics/shockerclaws.870fb2ba.dat tactics/shockerclaws_shockerclaws.36ea82e4.dat tactics/shockerclaws_shogunkatana.16d4e374.dat tactics/shockerclaws_shuanggou.b10deecf.dat tactics/shockerclaws_sickles.d1651619.dat tactics/shockerclaws_silverglaive.acbd2ae3.dat tactics/shockerclaws_spear.52097d2c.dat tactics/shockerclaws_staff.d11d52c6.dat tactics/shockerclaws_steelclaws.9f026cb5.dat tactics/shockerclaws_swords.02197a6b.dat tactics/shockerclaws_titangiantsword.56463c69.dat tactics/shockerclaws_tonfa.6dc15961.dat tactics/shockerclaws_tonfaguns.afb22ec6.dat tactics/shockerclaws_trident.c53709b0.dat tactics/shockerclaws_twohanded.fc1c6522.dat tactics/shockerclaws_wakidzashi.b22cb096.dat tactics/shockerclaws_wandererstaff.c5801479.dat tactics/shogunkatana.6138ec83.dat tactics/shogunkatana_shogunkatana.dd202bb1.dat tactics/shogunkatana_shuanggou.88a54398.dat tactics/shogunkatana_sickles.bb6e6aa4.dat tactics/shogunkatana_silverglaive.cdde6348.dat tactics/shogunkatana_spear.75e44a5d.dat tactics/shogunkatana_staff.0eed1dbf.dat tactics/shogunkatana_steelclaws.19c0316d.dat tactics/shogunkatana_swords.c14975a3.dat tactics/shogunkatana_titangiantsword.2399136a.dat tactics/shogunkatana_tonfa.3cb680db.dat tactics/shogunkatana_tonfaguns.3387821d.dat tactics/shogunkatana_trident.8665000b.dat tactics/shogunkatana_twohanded.82d17dfd.dat tactics/shogunkatana_wakidzashi.c140af59.dat tactics/shogunkatana_wandererstaff.6bcc2bf8.dat tactics/shuanggou.bf03efc5.dat tactics/shuanggou_shuanggou.58003848.dat tactics/shuanggou_sickles.980b3791.dat tactics/shuanggou_silverglaive.a9fe8d11.dat tactics/shuanggou_spear.4b376e3e.dat tactics/shuanggou_staff.97023ee5.dat tactics/shuanggou_steelclaws.1f50e049.dat tactics/shuanggou_swords.862dc376.dat tactics/shuanggou_titangiantsword.bc801e1e.dat tactics/shuanggou_tonfa.316ed9dc.dat tactics/shuanggou_tonfaguns.718e41d0.dat tactics/shuanggou_trident.f99db005.dat tactics/shuanggou_twohanded.1f12b0c9.dat tactics/shuanggou_wakidzashi.0dd2a16b.dat tactics/shuanggou_wandererstaff.4286f344.dat tactics/sickles.a3d7dd5a.dat tactics/sickles_sickles.d48c298e.dat tactics/sickles_silverglaive.34fb3304.dat tactics/sickles_spear.48307034.dat tactics/sickles_staff.c6444af1.dat tactics/sickles_steelclaws.b357092b.dat tactics/sickles_swords.7f0e9e28.dat tactics/sickles_titangiantsword.499680d2.dat tactics/sickles_tonfa.3755b67f.dat tactics/sickles_tonfaguns.bf890b58.dat tactics/sickles_trident.94e8822f.dat tactics/sickles_twohanded.41149cb1.dat tactics/sickles_wakidzashi.0e185ac4.dat tactics/sickles_wandererstaff.cddc520f.dat tactics/silverglaive.3042a743.dat tactics/silverglaive_silverglaive.a1a4b69e.dat tactics/silverglaive_spear.948bca58.dat tactics/silverglaive_staff.aadad95f.dat tactics/silverglaive_steelclaws.28c729a2.dat tactics/silverglaive_swords.0ec505f2.dat tactics/silverglaive_titangiantsword.cdf90900.dat tactics/silverglaive_tonfa.7997b991.dat tactics/silverglaive_tonfaguns.19ab55fb.dat tactics/silverglaive_trident.5ea31b95.dat tactics/silverglaive_twohanded.561d91a7.dat tactics/silverglaive_wakidzashi.97f575a5.dat tactics/silverglaive_wandererstaff.8298842f.dat tactics/spear.49c2247e.dat tactics/spear_spear.effc7bd9.dat tactics/spear_staff.0bec0e90.dat tactics/spear_steelclaws.1dc4c3a2.dat tactics/spear_swords.5975562c.dat tactics/spear_titangiantsword.1d66784e.dat tactics/spear_tonfa.c44f679b.dat tactics/spear_tonfaguns.fff5a6c9.dat tactics/spear_trident.c5778e57.dat tactics/spear_twohanded.9f30fdce.dat tactics/spear_wakidzashi.2da7a5e2.dat tactics/spear_wandererstaff.504b9814.dat tactics/staff.c5838094.dat tactics/staff_staff.538e89c4.dat tactics/staff_steelclaws.757ea64a.dat tactics/staff_swords.b1464cb9.dat tactics/staff_titangiantsword.9aea20fa.dat tactics/staff_tonfa.a7d79519.dat tactics/staff_tonfaguns.542bff5e.dat tactics/staff_trident.12084e86.dat tactics/staff_twohanded.b4077b1f.dat tactics/staff_wakidzashi.1b766021.dat tactics/staff_wandererstaff.928181c4.dat tactics/steelclaws.a6b25c98.dat tactics/steelclaws_steelclaws.bfd82c83.dat tactics/steelclaws_swords.cb0f5aa8.dat tactics/steelclaws_titangiantsword.256db6a4.dat tactics/steelclaws_tonfa.0497b187.dat tactics/steelclaws_tonfaguns.1999dca9.dat tactics/steelclaws_trident.f9dd5445.dat tactics/steelclaws_twohanded.813accce.dat tactics/steelclaws_wakidzashi.4fd70283.dat tactics/steelclaws_wandererstaff.d1b31108.dat tactics/swords.2f95c9cc.dat tactics/swords_swords.d1017cc4.dat tactics/swords_titangiantsword.ac3adf31.dat tactics/swords_tonfa.4587e1b2.dat tactics/swords_tonfaguns.94febdf8.dat tactics/swords_trident.37de85bf.dat tactics/swords_twohanded.aa39ae1c.dat tactics/swords_wakidzashi.57746c81.dat tactics/swords_wandererstaff.f2307986.dat tactics/titangiantsword.5813f7ae.dat tactics/titangiantsword_titangiantsword.817e18d0.dat tactics/titangiantsword_tonfa.7b75904a.dat tactics/titangiantsword_tonfaguns.af9b22b1.dat tactics/titangiantsword_trident.08bda998.dat tactics/titangiantsword_twohanded.477df3a7.dat tactics/titangiantsword_wakidzashi.c00d489e.dat tactics/titangiantsword_wandererstaff.2487cf06.dat tactics/tonfa.edeaf293.dat tactics/tonfaguns.4cb4df6d.dat tactics/tonfaguns_tonfaguns.b80deccf.dat tactics/tonfaguns_trident.5d320d63.dat tactics/tonfaguns_twohanded.2cf4a22c.dat tactics/tonfaguns_wakidzashi.8e8a3d79.dat tactics/tonfaguns_wandererstaff.73e9755c.dat tactics/tonfa_tonfa.30eea562.dat tactics/tonfa_tonfaguns.549cfaf3.dat tactics/tonfa_trident.1c24dffa.dat tactics/tonfa_twohanded.32f57e58.dat tactics/tonfa_wakidzashi.38e2ab25.dat tactics/tonfa_wandererstaff.02c0d876.dat tactics/trident.75af0f0b.dat tactics/trident_trident.9b034025.dat tactics/trident_twohanded.e7d31382.dat tactics/trident_wakidzashi.df9d5e6d.dat tactics/trident_wandererstaff.c85efb62.dat tactics/twohanded.4dc4dd3f.dat tactics/twohanded_twohanded.d7a78064.dat tactics/twohanded_wakidzashi.4a645773.dat tactics/twohanded_wandererstaff.00e60590.dat tactics/wakidzashi.cbc3925e.dat tactics/wakidzashi_wakidzashi.14bc8560.dat tactics/wakidzashi_wandererstaff.56474bff.dat tactics/wandererstaff.4308665f.dat tactics/wandererstaff_wandererstaff.1373848a.dat tactics/_.2ae51655.dat tactics/_axes.eb3c97fd.dat tactics/_batons.fb86132b.dat tactics/_battlehammers.e12fb068.dat tactics/_bigswords.0f301c91.dat tactics/_butcherknives.8c1170d4.dat tactics/_chinesesabers.a6aa22c8.dat tactics/_claws.fa686010.dat tactics/_compositescythe.cbe1824e.dat tactics/_compositespear.cfc2bc43.dat tactics/_compositestaff.4d33f1fd.dat tactics/_compositesword.f847891b.dat tactics/_crescentknives.ffa32d3f.dat tactics/_cudgel.a0a7ba04.dat tactics/_daggers.37f8754e.dat tactics/_doublescythe.a82b0c86.dat tactics/_electrohammers.c6184d60.dat tactics/_fans.33dca789.dat tactics/_firebatons.ab79974f.dat tactics/_fists.fd52228c.dat tactics/_glaive.95d4b6bf.dat tactics/_glaivebow.726f80ba.dat tactics/_hermitswords.17017d03.dat tactics/_katana.38e79930.dat tactics/_katars.dcb1550a.dat tactics/_keris.bddac9b3.dat tactics/_knives.736d9991.dat tactics/_knobsticks.0382ebb6.dat tactics/_knuckles.cfe0100b.dat tactics/_kusarigama.e39742d1.dat tactics/_machete.4516590d.dat tactics/_magariyari.b966de69.dat tactics/_monkkatars.41a49cfd.dat tactics/_naginata.2e29e877.dat tactics/_ninjasword.152ad64b.dat tactics/_nunchaku.55a619a5.dat tactics/_onehandedsword.9e092a8b.dat tactics/_powerfists.6f68d024.dat tactics/_rifle.748f7ced.dat tactics/_sai.8d3a0cf5.dat tactics/_scythe.e60203e8.dat tactics/_shockerclaws.cf675cd6.dat tactics/_shogunkatana.a67dd893.dat tactics/_shuanggou.89b18377.dat tactics/_sickles.ad580f47.dat tactics/_silverglaive.2d7523c7.dat tactics/_spear.9065468b.dat tactics/_staff.a05e293b.dat tactics/_steelclaws.a180f291.dat tactics/_swords.36f4f05d.dat tactics/_titangiantsword.d8b04ac4.dat tactics/_tonfa.22edee32.dat tactics/_tonfaguns.140cb802.dat tactics/_trident.85d4b8ab.dat tactics/_twohanded.9c29e38e.dat tactics/_wakidzashi.191afa06.dat tactics/_wandererstaff.386b9654.dat".split(
      " ",
    );
  G.H7 = ["ogg", "m4a"];
  G.ora = "webp avif jpg png ktx dds".split(" ");
  G.F9 = "tr ru pt ko ja it fr es en de".split(" ");
  G.UUa = [
    null,
    null,
    "avif|webp",
    null,
    "jpg",
    null,
    null,
    "png",
    "png",
    null,
    null,
    "dds|ktx",
    null,
    "webp|avif",
    null,
    "webp|avif",
    "avif|webp",
    "avif|webp",
    "webp|avif",
    "webp|avif",
    "avif|webp",
    "webp|avif",
    "avif|webp",
    "avif|webp",
    "avif|webp",
    "avif|webp",
    "webp|avif",
    "avif|webp",
    "webp|avif",
    "avif|webp",
    "avif|webp",
    "avif|webp",
    "webp|avif",
    "avif|webp",
    "webp|avif",
    "webp|avif",
    "avif|webp",
    "avif|webp",
    "avif|webp",
    "webp|avif",
    "avif|webp",
    "avif|webp",
    "webp|avif",
    "avif|webp",
    "avif|webp",
    "avif|webp",
    "webp|avif",
    "avif|webp",
    "avif|webp",
    "avif|webp",
    "avif|webp",
    "webp|avif",
    "webp|avif",
    "webp|avif",
    "avif|webp",
    "avif|webp",
    "webp|avif",
    "avif|webp",
    "webp|avif",
    "avif|webp",
    "webp|avif",
    "webp|avif",
    "avif|webp",
    "avif|webp",
    "webp|avif",
    "webp|avif",
    "avif|webp",
    "avif|webp",
    "avif|webp",
    "avif|webp",
    "avif|webp",
    "webp|avif",
    "avif|webp",
    "avif|webp",
    "webp|avif",
    "avif|webp",
    "webp|avif",
    "webp|avif",
    "avif|webp",
    "webp|avif",
    "avif|webp",
    "avif|webp",
    "webp|avif",
    "webp|avif",
    "webp|avif",
    "avif|webp",
    "webp|avif",
    "avif|webp",
    "webp|avif",
    "avif|webp",
    "webp|avif",
    "webp|avif",
    "webp|avif",
    "webp|avif",
    "avif|webp",
    "webp|avif",
    "webp|avif",
    "webp|avif",
    "avif|webp",
    "webp|avif",
    "avif|webp",
    "avif|webp",
    "avif|webp",
    "avif|webp",
    "avif|webp",
    "webp|avif",
    "avif|webp",
    "avif|webp",
    "webp|avif",
    "avif|webp",
    "avif|webp",
    "webp|avif",
    "webp|avif",
    "avif|webp",
    "avif|webp",
    "webp|avif",
    "webp|avif",
    "avif|webp",
    "webp|avif",
    "avif|webp",
    "webp|avif",
    "webp|avif",
    "webp|avif",
    "avif|webp",
    "webp|avif",
    "webp|avif",
    "avif|webp",
    "webp|avif",
    "avif|webp",
    "webp|avif",
    "avif|webp",
    "avif|webp",
    "avif|webp",
    "webp|avif",
    "avif|webp",
    "webp|avif",
    "avif|webp",
    "webp|avif",
    "webp|avif",
    "webp|avif",
    "webp|avif",
    "avif|webp",
    "webp|avif",
    "avif|webp",
    "webp|avif",
    "avif|webp",
    "avif|webp",
    "avif|webp",
    "webp|avif",
    "webp|avif",
    "webp|avif",
    "webp|avif",
    "webp|avif",
    "avif|webp",
    "webp|avif",
    "webp|avif",
    "avif|webp",
    "avif|webp",
    "avif|webp",
    "avif|webp",
    "webp|avif",
    "avif|webp",
    "webp|avif",
    "avif|webp",
    "webp|avif",
    "avif|webp",
    "avif|webp",
    "webp|avif",
    "webp|avif",
    "avif|webp",
    "webp|avif",
    "avif|webp",
    "avif|webp",
    "avif|webp",
    "webp|avif",
    "webp|avif",
    "avif|webp",
    "avif|webp",
    "avif|webp",
    "webp|avif",
    "avif|webp",
    "avif|webp",
    "avif|webp",
    "webp|avif",
    "avif|webp",
    "webp|avif",
    "avif|webp",
    "avif|webp",
    "avif|webp",
    "avif|webp",
    "avif|webp",
    "webp|avif",
    "webp|avif",
    "webp|avif",
    "avif|webp",
    "avif|webp",
    "avif|webp",
    "avif|webp",
    "avif|webp",
    "avif|webp",
    "avif|webp",
    "avif|webp",
    "avif|webp",
    "avif|webp",
    "avif|webp",
    "avif|webp",
    "avif|webp",
    "avif|webp",
    "avif|webp",
    "avif|webp",
    "avif|webp",
    "avif|webp",
    "avif|webp",
    "avif|webp",
    "avif|webp",
    "avif|webp",
    "avif|webp",
    "avif|webp",
    "avif|webp",
    "avif|webp",
    "avif|webp",
    "avif|webp",
    "webp|avif",
    "avif|webp",
    "webp|avif",
    "webp|avif",
    "avif|webp",
    "webp|avif",
    "avif|webp",
    "avif|webp",
    "avif|webp",
    "avif|webp",
    "avif|webp",
    "avif|webp",
    "avif|webp",
    "avif|webp",
    "avif|webp",
    "avif|webp",
    "avif|webp",
    "avif|webp",
    "avif|webp",
    "avif|webp",
    "avif|webp",
    "avif|webp",
    "avif|webp",
    "avif|webp",
    "dds|ktx",
    null,
    "dds|ktx",
    null,
    "dds|ktx",
    null,
    "avif|webp",
    null,
    "png",
    null,
    "avif|webp",
    null,
    "dds|ktx",
    null,
    "dds|ktx",
    null,
    "dds|ktx",
    null,
    "dds|ktx",
    null,
    "png|png|png|png|png|png|png|png|png|png",
    null,
    "dds|ktx",
    null,
    "ktx|dds",
    null,
    "dds|ktx",
    null,
    null,
    null,
    "avif|webp",
    "png",
    "png|png|png|png|png|png|png|png|png|png",
    null,
    "avif|webp",
    "jpg",
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    "png",
    null,
    null,
    null,
    "dds|ktx",
    null,
    "ktx|dds",
    null,
    "ktx|dds",
    null,
    "dds|ktx",
    null,
    "dds|ktx",
    null,
    "ktx|dds",
    null,
    "ktx|dds",
    null,
    "dds|ktx",
    null,
    "dds|ktx",
    null,
    "ktx|dds",
    null,
    "ktx|dds",
    null,
    "dds|ktx",
    null,
    "ktx|dds",
    "dds|ktx",
    "dds|ktx",
    "dds|ktx",
    "ktx|dds",
    "ktx|dds",
    "ktx|dds",
    "ktx|dds",
    "ktx|dds",
    "ktx|dds",
    "dds|ktx",
    "dds|ktx",
    "ktx|dds",
    "dds|ktx",
    "dds|ktx",
    "ktx|dds",
    "ktx|dds",
    "ktx|dds",
    "ktx|dds",
    "ktx|dds",
    "ktx|dds",
    "ktx|dds",
    "dds|ktx",
    "ktx|dds",
    "ktx|dds",
    "ktx|dds",
    "dds|ktx",
    "dds|ktx",
    "dds|ktx",
    "dds|ktx",
    "dds|ktx",
    "ktx|dds",
    "dds|ktx",
    "ktx|dds",
    "ktx|dds",
    "dds|ktx",
    "ktx|dds",
    "dds|ktx",
    "ktx|dds",
    "ktx|dds",
    "dds|ktx",
    "ktx|dds",
    "ktx|dds",
    "dds|ktx",
    "dds|ktx",
    "ktx|dds",
    "dds|ktx",
    "dds|ktx",
    "ktx|dds",
    "ktx|dds",
    "dds|ktx",
    null,
    null,
    null,
    "dds|ktx",
    null,
    "ktx|dds",
    null,
    "ktx|dds",
    null,
    "ktx|dds",
    null,
    "dds|ktx",
    null,
    "dds|ktx",
    null,
    "dds|ktx",
    null,
    "ktx|dds",
    null,
    "dds|ktx",
    null,
    "ktx|dds",
    null,
    "ktx|dds",
    null,
    "ktx|dds",
    null,
    "dds|ktx",
    null,
    "dds|ktx",
    null,
    "dds|ktx",
    null,
    "ktx|dds",
    null,
    "dds|ktx",
    null,
    "ktx|dds",
    null,
    "dds|ktx",
    null,
    "ktx|dds",
    null,
    "dds|ktx",
    null,
    "ktx|dds",
    null,
    "ktx|dds",
    null,
    "ktx|dds",
    null,
    "dds|ktx",
    null,
    "ktx|dds",
    null,
    "dds|ktx",
    null,
    "ktx|dds",
    null,
    "dds|ktx",
    null,
    "ktx|dds",
    null,
    "dds|ktx",
    null,
    "ktx|dds",
    null,
    "dds|ktx",
    null,
    "dds|ktx",
    null,
    "ktx|dds",
    null,
    "ktx|dds",
    null,
    "dds|ktx",
    null,
    "dds|ktx",
    null,
    "dds|ktx",
    null,
    "ktx|dds",
    null,
    "dds|ktx",
    null,
    "ktx|dds",
    null,
    "dds|ktx",
    null,
    "ktx|dds",
    null,
    "ktx|dds",
    null,
    "ktx|dds",
    null,
    "dds|ktx",
    null,
    "dds|ktx",
    null,
    "dds|ktx",
    null,
    "ktx|dds",
    null,
    "ktx|dds",
    null,
    "ktx|dds",
    null,
    "ktx|dds",
    null,
    "dds|ktx",
    null,
    "ktx|dds",
    null,
    "dds|ktx",
    null,
    "dds|ktx",
    null,
    "ktx|dds",
    null,
    "dds|ktx",
    null,
    "ktx|dds",
    null,
    "dds|ktx",
    null,
    "dds|ktx",
    null,
    "dds|ktx",
    null,
    "ktx|dds",
    null,
    "dds|ktx",
    null,
    "ktx|dds",
    null,
    "dds|ktx",
    null,
    "ktx|dds",
    null,
    "dds|ktx",
    null,
    "dds|ktx",
    null,
    "ktx|dds",
    null,
    "ktx|dds",
    null,
    "dds|ktx",
    null,
    "dds|ktx",
    null,
    "ktx|dds",
    null,
    "ktx|dds",
    null,
    "ktx|dds",
    null,
    "ktx|dds",
    null,
    "dds|ktx",
    null,
    null,
    "avif|webp|ktx",
    null,
    "webp|ktx|avif",
    null,
    null,
    "avif|webp|ktx",
    null,
    "ktx|webp|avif",
    null,
    null,
    "ktx|avif|webp",
    null,
    "ktx|avif|webp",
    null,
    null,
    "webp|avif|ktx",
    null,
    "avif|webp|ktx",
    null,
    "webp|avif|ktx",
    null,
    null,
    "avif|webp|ktx",
    null,
    "avif|ktx|webp",
    null,
    null,
    "avif|ktx|webp",
    null,
    "avif|webp|ktx",
    null,
    null,
    "ktx|webp|avif",
    null,
    "avif|webp|ktx",
    null,
    null,
    "webp|ktx|avif",
    null,
    "webp|ktx|avif",
    null,
    null,
    "webp|avif|ktx",
    null,
    "avif|webp|ktx",
    null,
    null,
    "webp|avif|ktx",
    null,
    "avif|webp|ktx",
    null,
    null,
    "ktx|avif|webp",
    null,
    "ktx|avif|webp",
    null,
    null,
    "ktx|webp|avif",
    null,
    "ktx|webp|avif",
    null,
    null,
    "avif|webp|ktx",
    null,
    "avif|webp|ktx",
    null,
    null,
    "ktx|avif|webp",
    null,
    "avif|ktx|webp",
    null,
    "avif|ktx|webp",
    null,
    null,
    "avif|ktx|webp",
    null,
    "avif|ktx|webp",
    null,
    "avif|ktx|webp",
    null,
    "avif|ktx|webp",
    null,
    null,
    "avif|ktx|webp",
    null,
    null,
    "avif|ktx|webp",
    null,
    "avif|ktx|webp",
    null,
    "avif|ktx|webp",
    null,
    "avif|ktx|webp",
    null,
    null,
    "avif|ktx|webp",
    null,
    "avif|ktx|webp",
    null,
    "avif|ktx|webp",
    null,
    "avif|ktx|webp",
    null,
    null,
    "avif|ktx|webp",
    null,
    "avif|ktx|webp",
    null,
    null,
    "avif|ktx|webp",
    null,
    "avif|ktx|webp",
    null,
    null,
    "avif|ktx|webp",
    null,
    "avif|ktx|webp",
    null,
    "avif|ktx|webp",
    null,
    "avif|ktx|webp",
    null,
    null,
    "avif|ktx|webp",
    null,
    "avif|ktx|webp",
    null,
    null,
    "avif|ktx|webp",
    null,
    "avif|ktx|webp",
    null,
    null,
    "avif|ktx|webp",
    null,
    "avif|ktx|webp",
    null,
    "avif|ktx|webp",
    null,
    "avif|ktx|webp",
    null,
    null,
    "avif|ktx|webp",
    null,
    "avif|ktx|webp",
    null,
    null,
    "avif|ktx|webp",
    null,
    "avif|ktx|webp",
    null,
    null,
    "avif|ktx|webp",
    null,
    "avif|ktx|webp",
    null,
    null,
    "avif|ktx|webp",
    null,
    "avif|ktx|webp",
    null,
    null,
    "avif|ktx|webp",
    null,
    "avif|ktx|webp",
    null,
    null,
    "avif|ktx|webp",
    null,
    "avif|ktx|webp",
    null,
    null,
    "avif|ktx|webp",
    null,
    "avif|ktx|webp",
    null,
    "avif|ktx|webp",
    null,
    null,
    "avif|ktx|webp",
    null,
    "avif|ktx|webp",
    null,
    null,
    "avif|ktx|webp",
    null,
    "avif|ktx|webp",
    null,
    null,
    "avif|ktx|webp",
    null,
    "avif|ktx|webp",
    null,
    "avif|ktx|webp",
    null,
    "avif|ktx|webp",
    null,
    null,
    "avif|ktx|webp",
    null,
    "avif|ktx|webp",
    null,
    "dds|ktx",
    null,
    "avif|ktx|webp",
    null,
    null,
    "avif|ktx|webp",
    null,
    "avif|ktx|webp",
    null,
    null,
    "avif|ktx|webp",
    null,
    "avif|ktx|webp",
    null,
    "avif|ktx|webp",
    null,
    "avif|ktx|webp",
    null,
    "avif|ktx|webp",
    null,
    null,
    "avif|ktx|webp",
    null,
    "avif|ktx|webp",
    null,
    null,
    "avif|ktx|webp",
    null,
    "avif|ktx|webp",
    null,
    "avif|ktx|webp",
    null,
    null,
    "avif|ktx|webp",
    null,
    "avif|ktx|webp",
    null,
    null,
    "avif|ktx|webp",
    null,
    "avif|ktx|webp",
    null,
    "avif|ktx|webp",
    null,
    null,
    "avif|ktx|webp",
    null,
    "avif|ktx|webp",
    null,
    null,
    "avif|ktx|webp",
    null,
    "avif|ktx|webp",
    null,
    null,
    "avif|ktx|webp",
    null,
    "avif|ktx|webp",
    null,
    null,
    "avif|ktx|webp",
    null,
    "avif|ktx|webp",
    null,
    "png",
    "jpg",
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    "dds|ktx",
    null,
    "ktx|dds|dds|ktx",
    "dds|ktx|dds|ktx",
    "ktx|dds|dds|ktx",
    "dds|ktx|dds|ktx",
    "dds|ktx|dds|ktx",
    "dds|ktx|dds|ktx",
    "ktx|dds|dds|ktx",
    "dds|ktx|dds|ktx",
    "ktx|dds|dds|ktx",
    "dds|ktx|dds|ktx",
    "dds|ktx|dds|ktx",
    "ktx|dds|dds|ktx",
    "ktx|dds|dds|ktx",
    "dds|ktx|dds|ktx",
    "ktx|dds|dds|ktx",
    "dds|ktx|dds|ktx",
    "ktx|dds|dds|ktx",
    "dds|ktx|dds|ktx",
    "ktx|dds|dds|ktx",
    "dds|ktx|dds|ktx",
    "dds|ktx|dds|ktx",
    "dds|ktx|dds|ktx",
    "dds|ktx|dds|ktx",
    "dds|ktx|dds|ktx",
    "ktx|dds|dds|ktx",
    "dds|ktx|dds|ktx",
    "ktx|dds|dds|ktx",
    "dds|ktx|dds|ktx",
    "ktx|dds|dds|ktx",
    "dds|ktx|dds|ktx",
    "dds|ktx|dds|ktx",
    "dds|ktx|dds|ktx",
    "ktx|dds|dds|ktx",
    "dds|ktx|dds|ktx",
    "ktx|dds|dds|ktx",
    "dds|ktx|dds|ktx",
    "ktx|dds|dds|ktx",
    "dds|ktx|dds|ktx",
    "ktx|dds|dds|ktx",
    "dds|ktx|dds|ktx",
    "dds|ktx|dds|ktx",
    "dds|ktx|dds|ktx",
    "ktx|dds|dds|ktx",
    "dds|ktx|dds|ktx",
    "dds|ktx|dds|ktx",
    "dds|ktx|dds|ktx",
    "ktx|dds|dds|ktx",
    "dds|ktx|dds|ktx",
    "ktx|dds|dds|ktx",
    "dds|ktx|dds|ktx",
    "ktx|dds|dds|ktx",
    "dds|ktx|dds|ktx",
    "ktx|dds|dds|ktx",
    "dds|ktx|dds|ktx",
    "ktx|dds|dds|ktx",
    "dds|ktx|dds|ktx",
    "dds|ktx|dds|ktx",
    "dds|ktx|dds|ktx",
    "dds|ktx|dds|ktx",
    "dds|ktx|dds|ktx",
    "ktx|dds|dds|ktx",
    "dds|ktx|dds|ktx",
    "ktx|dds|dds|ktx",
    "dds|ktx|dds|ktx",
    "ktx|dds|dds|ktx",
    "dds|ktx|dds|ktx",
    "ktx|dds|dds|ktx",
    "dds|ktx|dds|ktx",
    "dds|ktx|dds|ktx",
    "dds|ktx|dds|ktx",
    "ktx|dds|dds|ktx",
    "dds|ktx|dds|ktx",
    "dds|ktx|dds|ktx",
    "dds|ktx|dds|ktx",
    "ktx|dds|dds|ktx",
    "dds|ktx|dds|ktx",
    "dds|ktx|dds|ktx",
    "dds|ktx|dds|ktx",
    "ktx|dds|dds|ktx",
    "dds|ktx|dds|ktx",
    "ktx|dds|dds|ktx",
    "dds|ktx|dds|ktx",
    "ktx|dds|dds|ktx",
    "dds|ktx|dds|ktx",
    "dds|ktx|dds|ktx",
    "dds|ktx|dds|ktx",
    "ktx|dds|dds|ktx",
    "dds|ktx|dds|ktx",
    "ktx|dds|dds|ktx",
    "dds|ktx|dds|ktx",
    "ktx|dds|dds|ktx",
    "dds|ktx|dds|ktx",
    "dds|ktx|dds|ktx",
    "dds|ktx|dds|ktx",
    "dds|ktx|dds|ktx",
    "dds|ktx|dds|ktx",
    "ktx|dds|dds|ktx",
    "dds|ktx|dds|ktx",
    "dds|ktx|dds|ktx",
    "dds|ktx|dds|ktx",
    "ktx|dds|dds|ktx",
    "ktx|dds|dds|ktx",
    "ktx|dds|dds|ktx",
    "dds|ktx|dds|ktx",
    "dds|ktx|dds|ktx",
    "dds|ktx|dds|ktx",
    "ktx|dds|dds|ktx",
    "dds|ktx|dds|ktx",
    "ktx|dds|dds|ktx",
    "dds|ktx|dds|ktx",
    "ktx|dds|dds|ktx",
    "dds|ktx|dds|ktx",
    "dds|ktx|dds|ktx",
    "dds|ktx|dds|ktx",
    "ktx|dds|dds|ktx",
    "dds|ktx|dds|ktx",
    "ktx|dds|dds|ktx",
    "dds|ktx|dds|ktx",
    "ktx|dds|dds|ktx",
    "dds|ktx|dds|ktx",
    "ktx|dds|dds|ktx",
    "dds|ktx|dds|ktx",
    "ktx|dds|dds|ktx",
    "dds|ktx|dds|ktx",
    "ktx|dds|dds|ktx",
    "dds|ktx|dds|ktx",
    "dds|ktx|dds|ktx",
    "dds|ktx|dds|ktx",
    "dds|ktx|dds|ktx",
    "dds|ktx|dds|ktx",
    "dds|ktx|dds|ktx",
    "dds|ktx|dds|ktx",
    "ktx|dds|dds|ktx",
    "dds|ktx|dds|ktx",
    "ktx|dds|dds|ktx",
    "dds|ktx|dds|ktx",
    "ktx|dds|dds|ktx",
    "ktx|dds|dds|ktx",
    "dds|ktx|dds|ktx",
    "dds|ktx|dds|ktx",
    "ktx|dds|dds|ktx",
    "dds|ktx|dds|ktx",
    "ktx|dds|dds|ktx",
    "dds|ktx|dds|ktx",
    "ktx|dds|dds|ktx",
    "dds|ktx|dds|ktx",
    "ktx|dds|dds|ktx",
    "dds|ktx|dds|ktx",
    "dds|ktx|dds|ktx",
    "dds|ktx|dds|ktx",
    "ktx|dds|dds|ktx",
    "dds|ktx|dds|ktx",
    "dds|ktx|dds|ktx",
    "dds|ktx|dds|ktx",
    "ktx|dds|dds|ktx",
    "ktx|dds|dds|ktx",
    "ktx|dds|dds|ktx",
    "dds|ktx|dds|ktx",
    "ktx|dds|dds|ktx",
    "dds|ktx|dds|ktx",
    "ktx|dds|dds|ktx",
    "dds|ktx|dds|ktx",
    "ktx|dds|dds|ktx",
    "dds|ktx|dds|ktx",
    "dds|ktx|dds|ktx",
    "dds|ktx|dds|ktx",
    "dds|ktx|dds|ktx",
    "dds|ktx|dds|ktx",
    "ktx|dds|dds|ktx",
    "dds|ktx|dds|ktx",
    "ktx|dds|dds|ktx",
    "dds|ktx|dds|ktx",
    "ktx|dds|dds|ktx",
    "ktx|dds|dds|ktx",
    "ktx|dds|dds|ktx",
    "dds|ktx|dds|ktx",
    "dds|ktx|dds|ktx",
    "dds|ktx|dds|ktx",
    "ktx|dds|dds|ktx",
    "dds|ktx|dds|ktx",
    "ktx|dds|dds|ktx",
    "dds|ktx|dds|ktx",
    "ktx|dds|dds|ktx",
    "dds|ktx|dds|ktx",
    "dds|ktx|dds|ktx",
    "dds|ktx|dds|ktx",
    "ktx|dds|dds|ktx",
    "dds|ktx|dds|ktx",
    "ktx|dds|dds|ktx",
    "dds|ktx|dds|ktx",
    "ktx|dds|dds|ktx",
    "dds|ktx|dds|ktx",
    "dds|ktx|dds|ktx",
    "dds|ktx|dds|ktx",
    "ktx|dds|dds|ktx",
    "dds|ktx|dds|ktx",
    "ktx|dds|dds|ktx",
    "dds|ktx|dds|ktx",
    "ktx|dds|dds|ktx",
    "dds|ktx|dds|ktx",
    "dds|ktx|dds|ktx",
    "dds|ktx|dds|ktx",
    "dds|ktx|dds|ktx",
    "dds|ktx|dds|ktx",
    "ktx|dds|dds|ktx",
    "dds|ktx|dds|ktx",
    "dds|ktx|dds|ktx",
    "dds|ktx|dds|ktx",
    "ktx|dds|dds|ktx",
    "ktx|dds|dds|ktx",
    "ktx|dds|dds|ktx",
    "dds|ktx|dds|ktx",
    "dds|ktx|dds|ktx",
    "dds|ktx|dds|ktx",
    "ktx|dds|dds|ktx",
    "dds|ktx|dds|ktx",
    "ktx|dds|dds|ktx",
    "dds|ktx|dds|ktx",
    "ktx|dds|dds|ktx",
    "dds|ktx|dds|ktx",
    "dds|ktx|dds|ktx",
    "dds|ktx|dds|ktx",
    "ktx|dds|dds|ktx",
    "dds|ktx|dds|ktx",
    "ktx|dds|dds|ktx",
    "dds|ktx|dds|ktx",
    "ktx|dds|dds|ktx",
    "ktx|dds|dds|ktx",
    "ktx|dds|dds|ktx",
    "dds|ktx|dds|ktx",
    "ktx|dds|dds|ktx",
    "dds|ktx|dds|ktx",
    "ktx|dds|dds|ktx",
    "dds|ktx|dds|ktx",
    "ktx|dds|dds|ktx",
    "dds|ktx|dds|ktx",
    "dds|ktx|dds|ktx",
    "dds|ktx|dds|ktx",
    "dds|ktx|dds|ktx",
    "dds|ktx|dds|ktx",
    "ktx|dds|dds|ktx",
    "dds|ktx|dds|ktx",
    "ktx|dds|dds|ktx",
    "dds|ktx|dds|ktx",
    "ktx|dds|dds|ktx",
    "dds|ktx|dds|ktx",
    "dds|ktx|dds|ktx",
    "dds|ktx|dds|ktx",
    "ktx|dds|dds|ktx",
    "dds|ktx|dds|ktx",
    "ktx|dds|dds|ktx",
    "dds|ktx|dds|ktx",
    "ktx|dds|dds|ktx",
    "dds|ktx|dds|ktx",
    "ktx|dds|dds|ktx",
    "dds|ktx|dds|ktx",
    "dds|ktx|dds|ktx",
    "dds|ktx|dds|ktx",
    "ktx|dds|dds|ktx",
    "dds|ktx|dds|ktx",
    "dds|ktx|dds|ktx",
    "dds|ktx|dds|ktx",
    "ktx|dds|dds|ktx",
    "dds|ktx|dds|ktx",
    "ktx|dds|dds|ktx",
    "dds|ktx|dds|ktx",
    "ktx|dds|dds|ktx",
    "dds|ktx|dds|ktx",
    "ktx|dds|dds|ktx",
    "dds|ktx|dds|ktx",
    "ktx|dds|dds|ktx",
    "dds|ktx|dds|ktx",
    "ktx|dds|dds|ktx",
    "dds|ktx|dds|ktx",
    "dds|ktx|dds|ktx",
    "dds|ktx|dds|ktx",
    "ktx|dds|dds|ktx",
    "dds|ktx|dds|ktx",
    "ktx|dds|dds|ktx",
    "dds|ktx|dds|ktx",
    "ktx|dds|dds|ktx",
    "ktx|dds|dds|ktx",
    "ktx|dds|dds|ktx",
    "dds|ktx|dds|ktx",
    "dds|ktx|dds|ktx",
    "dds|ktx|dds|ktx",
    "ktx|dds|dds|ktx",
    "dds|ktx|dds|ktx",
    "ktx|dds|dds|ktx",
    "dds|ktx|dds|ktx",
    "ktx|dds|dds|ktx",
    "dds|ktx|dds|ktx",
    "dds|ktx|dds|ktx",
    "dds|ktx|dds|ktx",
    "ktx|dds|dds|ktx",
    "dds|ktx|dds|ktx",
    "ktx|dds|dds|ktx",
    "dds|ktx|dds|ktx",
    "ktx|dds|dds|ktx",
    "ktx|dds|dds|ktx",
    "dds|ktx|dds|ktx",
    "dds|ktx|dds|ktx",
    "ktx|dds|dds|ktx",
    "dds|ktx|dds|ktx",
    "ktx|dds|dds|ktx",
    "dds|ktx|dds|ktx",
    "ktx|dds|dds|ktx",
    "dds|ktx|dds|ktx",
    "dds|ktx|dds|ktx",
    "dds|ktx|dds|ktx",
    "dds|ktx|dds|ktx",
    "dds|ktx|dds|ktx",
    "ktx|dds|dds|ktx",
    "dds|ktx|dds|ktx",
    "dds|ktx|dds|ktx",
    "dds|ktx|dds|ktx",
    "ktx|dds|dds|ktx",
    "ktx|dds|dds|ktx",
    "ktx|dds|dds|ktx",
    "dds|ktx|dds|ktx",
    "dds|ktx|dds|ktx",
    "dds|ktx|dds|ktx",
    "ktx|dds|dds|ktx",
    "ktx|dds|dds|ktx",
    "ktx|dds|dds|ktx",
    "dds|ktx|dds|ktx",
    "ktx|dds|dds|ktx",
    "dds|ktx|dds|ktx",
    "dds|ktx|dds|ktx",
    "dds|ktx|dds|ktx",
    "ktx|dds|dds|ktx",
    "dds|ktx|dds|ktx",
    "ktx|dds|dds|ktx",
    "dds|ktx|dds|ktx",
    "ktx|dds|dds|ktx",
    "ktx|dds|dds|ktx",
    "ktx|dds|dds|ktx",
    "dds|ktx|dds|ktx",
    "ktx|dds|dds|ktx",
    "dds|ktx|dds|ktx",
    "ktx|dds|dds|ktx",
    "dds|ktx|dds|ktx",
    "ktx|dds|dds|ktx",
    "dds|ktx|dds|ktx",
    "dds|ktx|dds|ktx",
    "dds|ktx|dds|ktx",
    "dds|ktx|dds|ktx",
    "dds|ktx|dds|ktx",
    "ktx|dds|dds|ktx",
    "dds|ktx|dds|ktx",
    "ktx|dds|dds|ktx",
    "dds|ktx|dds|ktx",
    "ktx|dds|dds|ktx",
    "dds|ktx|dds|ktx",
    "dds|ktx|dds|ktx",
    "dds|ktx|dds|ktx",
    "ktx|dds|dds|ktx",
    "dds|ktx|dds|ktx",
    "ktx|dds|dds|ktx",
    "dds|ktx|dds|ktx",
    "ktx|dds|dds|ktx",
    "dds|ktx|dds|ktx",
    "ktx|dds|dds|ktx",
    "dds|ktx|dds|ktx",
    "dds|ktx|dds|ktx",
    "dds|ktx|dds|ktx",
    "ktx|dds|dds|ktx",
    "dds|ktx|dds|ktx",
    "dds|ktx|dds|ktx",
    "dds|ktx|dds|ktx",
    "ktx|dds|dds|ktx",
    "dds|ktx|dds|ktx",
    "ktx|dds|dds|ktx",
    "dds|ktx|dds|ktx",
    "ktx|dds|dds|ktx",
    "dds|ktx|dds|ktx",
    "ktx|dds|dds|ktx",
    "ktx|dds|dds|ktx",
    "ktx|dds|dds|ktx",
    "dds|ktx|dds|ktx",
    "ktx|dds|dds|ktx",
    "dds|ktx|dds|ktx",
    "dds|ktx|dds|ktx",
    "dds|ktx|dds|ktx",
    "ktx|dds|dds|ktx",
    "dds|ktx|dds|ktx",
    "ktx|dds|dds|ktx",
    "dds|ktx|dds|ktx",
    "ktx|dds|dds|ktx",
    "ktx|dds|dds|ktx",
    "ktx|dds|dds|ktx",
    "dds|ktx|dds|ktx",
    "ktx|dds|dds|ktx",
    "dds|ktx|dds|ktx",
    "ktx|dds|dds|ktx",
    "dds|ktx|dds|ktx",
    "ktx|dds|dds|ktx",
    "dds|ktx|dds|ktx",
    "ktx|dds|dds|ktx",
    "dds|ktx|dds|ktx",
    "dds|ktx|dds|ktx",
    "dds|dds|ktx|ktx",
    "ktx|dds|dds|ktx",
    "dds|ktx|dds|ktx",
    "ktx|dds|dds|ktx",
    "dds|ktx|dds|ktx",
    "ktx|dds|dds|ktx",
    "dds|ktx|dds|ktx",
    "dds|ktx|dds|ktx",
    "dds|ktx|dds|ktx",
    "ktx|dds|dds|ktx",
    "dds|ktx|dds|ktx",
    "ktx|dds|dds|ktx",
    "ktx|dds|dds|ktx",
    "ktx|dds|dds|ktx",
    "ktx|dds|dds|ktx",
    "ktx|dds|ktx|dds",
    "ktx|dds|dds|ktx",
    "dds|ktx|dds|ktx",
    "dds|dds|ktx|ktx",
    "ktx|dds|ktx|dds",
    "ktx|dds|dds|ktx",
    "dds|ktx|dds|ktx",
    "ktx|dds|dds|ktx",
    "ktx|dds|dds|ktx",
    "dds|dds|ktx|ktx",
    "ktx|dds|dds|ktx",
    "dds|ktx|dds|ktx",
    "ktx|dds|ktx|dds",
    "ktx|dds|dds|ktx",
    "ktx|dds|ktx|dds",
    "ktx|dds|dds|ktx",
    "ktx|dds|dds|ktx",
    "ktx|dds|dds|ktx",
    "dds|ktx|dds|ktx",
    "dds|ktx|dds|ktx",
    "dds|ktx|dds|ktx",
    "dds|dds|ktx|ktx",
    "dds|ktx|dds|ktx",
    "dds|dds|ktx|ktx",
    "dds|ktx|dds|ktx",
    "dds|dds|ktx|ktx",
    "dds|dds|ktx|ktx",
    "dds|dds|ktx|ktx",
    "dds|ktx|dds|ktx",
    "dds|ktx|dds|ktx",
    "ktx|dds|ktx|dds",
    "dds|dds|ktx|ktx",
    "dds|ktx|dds|ktx",
    "dds|ktx|dds|ktx",
    "dds|ktx|dds|ktx",
    "dds|dds|ktx|ktx",
    "dds|ktx|dds|ktx",
    "dds|ktx|dds|ktx",
    "dds|ktx|dds|ktx",
    "dds|ktx|dds|ktx",
    "dds|ktx|dds|ktx",
    "dds|ktx|dds|ktx",
    "dds|ktx|dds|ktx",
    "dds|ktx|dds|ktx",
    "dds|ktx|dds|ktx",
    null,
    null,
    "png",
    null,
    "dds|ktx",
    null,
    "png",
    null,
    "dds|ktx",
    null,
    "dds|ktx",
    null,
    "png",
    null,
    "dds|ktx",
    null,
    "png",
    null,
    "dds|ktx",
  ];
  G.qVa = [
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
    2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
    2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
    2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
    2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
    2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
    2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
    2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
    2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
    2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
    2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
    2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
    2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
    2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
    2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
    2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
    2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
    2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
    2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  ];
  G.rVa = [1322, 1321];
  G.gHa = 0;
  G.init();
  G.pka = [];
  Tc.aGa = !1;
  La.wgb = new fb();
  La.w3 = new fb();
  La.ygb = new fb();
  La.xgb = new fb();
  nc.Hp = new fb();
  rf.Y6 = 0.5;

  var Qs = null;
  se.hq = -32768;
  lf.maxTouchPoints = va.navigator.maxTouchPoints;
  mf.hq = -32768;
  ki.lQ = (function () {
    let a = new ac();
    a.v.lt = "<";
    a.v.gt = ">";
    a.v.amp = "&";
    a.v.quot = '"';
    a.v.apos = "'";
    return a;
  })(this);
