// 040-quest-engine.js
// Domain: combat-perks  |  10 class(es)  |  tree root(s): S, Fe, Oz, Yb, tg, Wo, Cj, rv, ce
// Edit here. Run `npm run build` to reassemble the full bundle.
  class S {
    constructor() {
      this.MR = 0;
      this.ta = this.dma = null;
      this.Paa = 0;
      this.eF = this.R_ = null;
      this.index = 0;
      this.Tc = new V();
      this.y3 = new V();
      this.z4 = null;
    }
    initialize(a, b, c) {
      this.eF = a;
      this.z4 = b;
      this.parse(c);
    }
    sa() {
      this.MR != 0 && xa.F().z5(!1);
      ha.F().r2a = "";
      this.Tc.$(this.ta);
    }
    parse(a) {
      this.MR = S.M7a(a.attributes.get("Lock"));
      a = a.attributes.get("Sound");
      this.dma = a != null ? a : "";
    }
    S(a) {
      this.MR != 0 && xa.F().z5(!0, this.MR == 2);
      let b = this.dma;
      b != null && b != "" && ua.bk(this.dma);
      this.ta = a;
      ob.Vq(this).u == null && this.sa();
    }
    Ie() {}
    Yl(a, b, c) {
      if (a != null) {
        a = a.children;
        let d = 0;
        for (; d < a.length; ) {
          let e = a[d++];
          b.Yl(Fe.Jj(e.name, this.eF, this.z4, e));
        }
      }
      b.Tc.addListener(c);
    }
    Ss(a, b, c) {
      this.Yl(a, b, c);
      b.kIa.addListener(w(this, this.Ahb));
    }
    Ahb() {
      this.MR != 0 && xa.F().z5(!1);
    }
    i6a(a, b) {
      a = rg.RQ(a);
      return a == null ? null : ob.CM(a.parent, b) ? a.parent : null;
    }
    qJ() {
      return ca.Ka() != null ? ca.Ka().Ra.length >= 1 : !1;
    }
    static M7a(a) {
      switch (a) {
        case "Silent":
          return 1;
        case "Visible":
          return 2;
        default:
          return 0;
      }
    }
  }
  S.g = "1C0";
  Object.assign(S.prototype, { j: S });
  class Fe {
    static Jj(a, b, c, d) {
      a = Fe.ql(a);
      return a == null
        ? ((a = Fe.jya()), a.initialize(b, c, d), a)
        : Fe.Zs(a, b, c, d);
    }
    static Zs(a, b, c, d) {
      a = Fe.l1a(a);
      a = a != null ? a : Fe.jya();
      a.initialize(b, c, d);
      return a;
    }
    static ql(a) {
      return Oz.ji(a);
    }
    static l1a(a) {
      switch (a) {
        case "EActScreen":
          a = new Dn();
          break;
        case "EActivate":
          a = new Ge();
          break;
        case "EActivateTimer":
          a = new zj();
          break;
        case "EApplicationRestart":
          a = new En();
          break;
        case "EAttachQuestFile":
          a = new Fn();
          break;
        case "EBlockTouches":
          a = new Gn();
          break;
        case "EBuyItem":
          a = new rh();
          break;
        case "EBuyOffer":
          a = new Hn();
          break;
        case "EChangeOfferState":
          a = new In();
          break;
        case "EChangePlayerAvatar":
          a = new Jn();
          break;
        case "EChangeScene":
          a = new Kn();
          break;
        case "EChangeTab":
          a = new Ln();
          break;
        case "ECheckItemsFromPurchasedOffers":
          a = new Mn();
          break;
        case "ECheckOffersStart":
          a = new Nn();
          break;
        case "ECheckPremiumPack":
          a = new On();
          break;
        case "ECheckpoint":
          a = new Pn();
          break;
        case "EClearQuestQueue":
          a = new Qn();
          break;
        case "EClickButton":
          a = new Rn();
          break;
        case "EDeliver":
          a = new Hf();
          break;
        case "EDenomination":
          a = new Sn();
          break;
        case "EDialog":
          a = new He();
          break;
        case "EDiscount":
          a = new Tn();
          break;
        case "EDownloadPack":
          a = new Un();
          break;
        case "EEndTimer":
          a = new Vn();
          break;
        case "EFight":
          a = new Wn();
          break;
        case "EFightEnd":
          a = new Xn();
          break;
        case "EFightRestartRound":
          a = new Yn();
          break;
        case "EFixPaidZeroAspects":
          a = new Zn();
          break;
        case "EForceExecution":
          a = new $n();
          break;
        case "EForeach":
          a = new Aj();
          break;
        case "EGiveCurrency":
          a = new ao();
          break;
        case "EGiveItem":
          a = new bo();
          break;
        case "EGiveItemPerk":
          a = new co();
          break;
        case "EGivePerk":
          a = new eo();
          break;
        case "EHelpshift":
          a = new fo();
          break;
        case "EHideBattle":
          a = new Bj(!1);
          break;
        case "EHideMapButton":
          a = new go();
          break;
        case "EIf":
          a = new ho();
          break;
        case "EMenuBtnFlashing":
          a = new io();
          break;
        case "EOpenRateUrl":
          a = new jo();
          break;
        case "EOpenShop":
          a = new ko();
          break;
        case "EOpenUrl":
          a = new sh();
          break;
        case "EResetDuelTimer":
          a = new lo();
          break;
        case "ERestoreOfferItemsPerks":
          a = new mo();
          break;
        case "EResumeQuests":
          a = new no();
          break;
        case "ERun":
          a = new oo();
          break;
        case "ERunCallback":
          a = new po();
          break;
        case "ESendStrangerStats":
          a = new qo();
          break;
        case "ESetBattleVisibility":
          a = new ro();
          break;
        case "ESetCurrentZone":
          a = new so();
          break;
        case "ESetDataVersion":
          a = new to();
          break;
        case "ESetMapFocus":
          a = new uo();
          break;
        case "ESetSessionSettings":
          a = new vo();
          break;
        case "ESetStoryTutorialStep":
          a = new wo();
          break;
        case "ESetVariable":
          a = new xo();
          break;
        case "EShowAd":
          a = new yo();
          break;
        case "EShowBattle":
          a = new Bj(!0);
          break;
        case "EShowCredits":
          a = new zo();
          break;
        case "EShowMapButton":
          a = new Ao();
          break;
        case "EShowNews":
          a = new Bo();
          break;
        case "EShowUpgrades":
          a = new Co();
          break;
        case "EShowVideo":
          a = new Do();
          break;
        case "EStoryTutorialBuyItem":
          a = new Eo();
          break;
        case "EStoryTutorialDoubleSweep":
          a = new Fo();
          break;
        case "EStoryTutorialLearnPerk":
          a = new Go();
          break;
        case "EStoryTutorialMove":
          a = new Ho();
          break;
        case "EStoryTutorialPunchbag":
          a = new Io();
          break;
        case "EStoryTutorialShowBlock":
          a = new Jo();
          break;
        case "ESwitch":
          a = new Ko();
          break;
        case "ETakeCurrency":
          a = new sg();
          break;
        case "ETimer":
          a = new zj();
          break;
        case "EToggleBattle":
          a = new Lo();
          break;
        case "EToggleItems":
          a = new Mo();
          break;
        case "EUnblockTouches":
          a = new No();
          break;
        case "EUnlockCharacter":
          a = new Oo();
          break;
        case "EUpdateEclipseBattles":
          a = new Po();
          break;
        case "EUpdatePacksData":
          a = new Qo();
          break;
        case "EUpdateScene":
          a = new Ro();
          break;
        case "EUpdateShop":
          a = new So();
          break;
        case "EUpdateShopItems":
          a = new To();
          break;
        case "EValidatePacks":
          a = new Uo();
          break;
        case "EWait":
          a = new Vo();
          break;
        default:
          a = null;
      }
      return a;
    }
    static jya() {
      return ra.Ya(S, []);
    }
  }
  Fe.g = "1C1";
  class Oz {
    static ji(a) {
      return new Ua(
        "(Dialog|Fight|ActScreen|ShowBattle|HideBattle|Checkpoint|SetVariable|OpenZone|Wait|DownloadPack|CheckPackCache|RemovePack|ShowUpgrades|ShowForge|OpenShop|OpenProfile|ShowNews|ToggleItems|Activate|Discount|ChangeScene|GiveItem|GiveItemPerk|ForceExecution|GiveCurrency|TakeCurrency|SetMapFocus|SetDataVersion|ClearQuestQueue|FacebookAPICall|SetFBIndicator|Deliver|AttachQuestFile|SetParameter|Foreach|Recount|ShowAd|SetEnergy|OpenUrl|OpenRateUrl|ResetPerks|UpgradesCleanup|SetSessionSettings|ResetDuelTimer|SendStrangerStats|SendDiscountStats|SetCurrentZone|SetLanguage|BuyItem|ShowStarterPackTimer|HideStarterPackTimer|ChangeTab|ShowVideo|UpdateScene|UpdateShop|UpdateShopItems|Denomination|TapjoyActionCall|Timer|ActivateTimer|EndTimer|ShowMapButton|HideMapButton|ToggleEclipseMode|ToggleGroup|ApplicationRestart|SetMapMask|ResumeQuests|ToggleBattle|SetBattleVisibility|SetLowGraphics|ResetEnchantments|GivePerk|GiveFreeRecipe|OpenForge|ChangePlayerAvatar|ShowCredits|GiveAchievement|MenuBtnFlashing|ShowArrow|HideArrow|ShowHint|HideHint|BlockTouches|UnblockTouches|ClickButton|ChangeButtonState|ActivateControl|DeactivateControl|SetStoryTutorialStep|ShowSetTutorial|StoryTutorialMove|StoryTutorialPunchbag|StoryTutorialBuyItem|StoryTutorialLearnPerk|StoryTutorialDoubleSweep|StoryTutorialShowBlock|ForgeTutorialRevealPropertiesPanel|ForgeTutorialOpenForge|ForgeTutorialGiveRequiredMaterials|ForgeTutorialEnchantItem|If|Switch|Run|DeleteSaveAction|UnlockCharacter|BlockDialogTouches|SetPerkAspect|ChangeDojoLocation|FightEnd|FightRestartRound|ShowDebugLine|CheckPremiumPack|SetDamageMod|ResetQualitySettings|FixPaidZeroAspects|OpenRaidZone|ShowLottery|DialogLottery|BuyPack|ShowRaidsGag|OpenLeagueDialog|SwitchToRaids|SwitchToRaidsMap|OpenChat|ConnectToRaids|GiveGift|SetClanTutStepComplete|SetRaidInfoTutorialStep|RaidIndicateRaidBtn|RaidShowLeaguesBtn|RaidFightEquipCharge|RaidFightFlashBuyBtn|RaidFightScrollToNextCharge|RaidFightOpenDialogGiveGems|RaidFightShowFightBtn|BatchLottery|ActivateLottery|RegenerateHashes|TestSales|ClickHint|SceneMenuScroll|SetFightWin|CheckOffersStart|BuyOffer|ChangeOfferState|CheckItemsFromPurchasedOffers|RestoreOfferItemsPerks|Helpshift|RunCallback|UpdatePacksData|ValidatePacks|JoinRaidBattle|ShowBattleForPeriod|UpdateEclipseBattles)",
        "",
      ).match(a)
        ? "E" + a
        : null;
    }
  }
  class Yb {
    constructor() {
      this.actions = m.l();
      this.aD = 0;
      this.Tc = new V();
      this.kIa = new V();
    }
    Yl(a) {
      this.actions.push(a);
    }
    S(a) {
      this.kIa.$();
      var b = this.actions.length;
      b > 0
        ? this.aD < b &&
          ((b = this.actions[this.aD]),
          b.Tc.addListener(w(this, this.hf)),
          b.S(a))
        : this.Tc.$();
    }
    hf(a) {
      this.actions[this.aD].Tc.removeListener(w(this, this.hf));
      this.aD++;
      this.aD < this.actions.length ? this.S(a) : this.Tc.$();
    }
    Vg() {
      let a = (this.aD = 0),
        b = this.actions;
      for (; a < b.length; ) b[a++].Ie();
    }
  }
  Yb.g = "1C2";
  Object.assign(Yb.prototype, { j: Yb });
  class tg {
    fc(a, b, c) {
      c == null && (c = !1);
      if (a != null && a != "")
        if (a.charAt(0) == "@") b.Rh = a.replace(RegExp("@", "g"), "");
        else
          try {
            let d = new Ia();
            X.wh(tg.ywa, a, d) || ((d.G = Qa.lGa(a)), tg.ywa.set(a, d.G));
            d.G.Yy = w(this, this.tAa);
            d.G.Us = w(this, this.uAa);
            d.G.target = this;
            b.Rh = d.G.Wb(c).result;
            b.Je = 0;
            !Cb(b.Rh, "$") &&
              li(b.Rh) &&
              ((b.Je = parseFloat(b.Rh)), (b.Rh = ""));
          } catch (d) {
            if (c) throw 32;
            b.Je = 0;
            b.Rh = a;
          }
    }
    tAa() {}
    uAa() {}
    FE(a, b, c) {
      switch (c) {
        case 1:
        case 2:
        case 3:
        case 4:
          let e = 0,
            f = 0,
            g = 0;
          for (a = a.Ab; g < a.length; ) {
            var d = bd(a[g++].body);
            d = d != null ? d : 0;
            if (e == 0) f = d;
            else
              switch (c) {
                case 1:
                  f += d;
                  break;
                case 2:
                  f -= d;
                  break;
                case 3:
                  f *= d;
                  break;
                case 4:
                  f /= d;
              }
            ++e;
          }
          b.result = f == null ? "null" : "" + f;
          break;
        case 5:
          a.Ab.length == 2 &&
            (b.result = K.T(
              K.parseInt(a.Ab[0].body) / K.parseInt(a.Ab[1].body),
            ));
          break;
        case 6:
          a.Ab.length == 2 &&
            (b.result = K.T(
              K.parseInt(a.Ab[0].body) % K.parseInt(a.Ab[1].body),
            ));
          break;
        case 7:
          a.Ab.length == 2 &&
            ((c = parseFloat(a.Ab[0].body) | 0),
            (b.result = K.T(
              c +
                (((((parseFloat(a.Ab[1].body) + 1) | 0) - c) * Da.rg.lf()) | 0),
            )));
      }
    }
    gOa(a, b, c) {
      let d = 0,
        e = new Fb(),
        f = m.l(),
        g = 0;
      for (a = a.Ab; g < a.length; ) {
        let h = aa.Zja(a[g++].body);
        f.push(h);
        d == 0 ? ((e.M = ""), (e.M += h)) : c == 1 && (e.M += h);
        ++d;
      }
      f.length >= 3 &&
        c == 2 &&
        ((c = this.ixb(f[0], K.parseInt(f[1]), K.parseInt(f[2]))),
        (e.M = ""),
        (e.M += c));
      b.result = e.M;
    }
    VC(a) {
      return Qa.VC(a);
    }
    ixb(a, b, c) {
      if (b > a.length || c < b || b < 0 || c < 0) return "";
      let d = 1 + c - b;
      1 + c > a.length && (d = a.length - b);
      return J.substr(a, b, d);
    }
  }
  tg.g = "1C3";
  Object.assign(tg.prototype, { j: tg });
  class yb extends tg {
    constructor() {
      super();
      this.SF = this.type = this.pca = 0;
      this.rna = this.nM = null;
      this.rb = m.l();
      this.Nwa = this.cb = !1;
      this.ta = null;
    }
    aFa() {
      return this.type != 8 && this.type != 9 ? this.type == 10 : !0;
    }
    parse(a) {
      this.cb = u.ka(a.attributes.get("Not"), !1);
      this.type = yb.yD(a.name);
      var b = a.attributes.get("Type");
      this.SF = yb.OAa(b != null ? b : "");
      this.pca = 0;
      b = a.attributes.get("CompareType");
      (b != null ? b : "") == "Versions" && (this.pca = 1);
      this.aFa() &&
        ((b = a.attributes.get("CaseSensitive")),
        (this.Nwa = (b != null ? b : "1") == "1"));
      this.SF == 0 && (this.SF = yb.OAa(a.name));
      this.type == 7
        ? a.attributes.get("Value") != null
          ? (this.nM = this.VC(a.attributes.get("Value")))
          : a.children.length == 1 &&
            a.xt().value != null &&
            (this.nM = this.VC(a.xt().value))
        : ((this.nM = this.VC(a.attributes.get("Value1"))),
          (this.rna = this.VC(a.attributes.get("Value2"))));
    }
    compare(a) {
      let b = !1;
      if (this.type != 6) b = this.Ega(a);
      else {
        let c = 0,
          d = this.rb;
        for (; c < d.length; ) {
          let e = d[c++].compare(a);
          if (this.SF == 2 && !e) return this.ir(!1);
          if (this.SF == 1 && e) return this.ir(!0);
        }
        if (this.SF == 2) return this.ir(!0);
        if (this.SF == 1) return this.ir(!1);
      }
      return this.ir(b);
    }
    kk(a) {
      this.ta = a;
    }
    uAa(a) {
      if (this.ta != null) {
        var b = "";
        try {
          switch (((b = a.data != null ? K.T(a.data) : ""), b)) {
            case "_$ActionID":
              let c = Ge.TZ;
              a.Fb.result = c != null ? c : "";
              break;
            case "_$ActualCoinPackItem":
              let d = p.items.Nua;
              a.Fb.result = d != null ? d.name : "";
              break;
            case "_$BestAcquiredArmorLevel":
            case "_$BestAcquiredHelmLevel":
            case "_$BestAcquiredMagicLevel":
            case "_$BestAcquiredRangedLevel":
            case "_$BestAcquiredWeaponLevel":
            case "_$BestArmor":
              let e = p.o,
                f = e != null ? e.wt(Rc(b, yb.$lb, yb.Zlb), 0) : null;
              a.Fb.result = f != null ? f.value : "0";
              break;
            case "_$ButtonName":
              a.Fb.result = this.ta.Fv;
              break;
            case "_$ButtonType":
              a.Fb.result = this.ta.RYa;
              break;
            case "_$ChosenLocale":
              a.Fb.result = this.ta.sxa != null ? this.ta.sxa : "";
              break;
            case "_$ClanTutStepToRun":
              a.Fb.result = this.ta.$_a;
              break;
            case "_$CurRaidFloor":
              a.Fb.result = K.T(this.ta.cmb);
              break;
            case "_$CurrentScene":
              a.Fb.result = this.ta.$o;
              break;
            case "_$Deliver":
              a.Fb.result = this.ta.item != null ? this.ta.item.name : "";
              break;
            case "_$Enchantment":
              a.Fb.result = this.R6a();
              break;
            case "_$EnergyChange":
              a.Fb.result = K.T(this.ta.qja);
              break;
            case "_$Fight":
              let g = this.ta.o0();
              a.Fb.result = g != null ? g.Nb.toString() : "";
              break;
            case "_$FightAvgFPS":
              a.Fb.result = K.T(this.ta.Q_);
              break;
            case "_$FightResult":
              a.Fb.result = this.ta.Vv;
              break;
            case "_$GameStarted":
              a.Fb.result = v.Y1 ? "1" : "0";
              break;
            case "_$GemsPrice":
              a.Fb.result = K.T(this.ta.dmb);
              break;
            case "_$InEclipseMode":
              a.Fb.result = p.o.$h ? "1" : "0";
              break;
            case "_$InLottery":
              a.Fb.result = this.ta.Zab ? "1" : "0";
              break;
            case "_$Iterator":
              a.Fb.result = this.ta.iterator;
              break;
            case "_$LevelUp":
              a.Fb.result = K.T(this.ta.D2);
              break;
            case "_$LotteryLastSpinNumber":
              a.Fb.result = K.T(this.ta.Beb);
              break;
            case "_$Offer":
              let h = this.ta.tHa,
                k = h != null ? h.ab() : "";
              a.Fb.result = k;
              break;
            case "_$PackName":
              a.Fb.result = this.ta.fmb;
              break;
            case "_$PacksCount":
              break;
            case "_$PacksSummarySize":
              a.Fb.result = Ty(this.ta.SE, 2);
              break;
            case "_$PerkName":
              a.Fb.result = this.ta.aja;
              break;
            case "_$Purchase":
              a.Fb.result = this.ta.item != null ? this.ta.item.name : "";
              break;
            case "_$PurchaseUnsuccessful":
              a.Fb.result = this.Q8a();
              break;
            case "_$Raid":
              break;
            case "_$RaidAvatar":
              break;
            case "_$RaidId":
              break;
            case "_$RaidMode":
              break;
            case "_$RaidPurchase":
              a.Fb.result = this.ta.gmb;
              break;
            case "_$RaidResult":
              break;
            case "_$SceneFrom":
              a.Fb.result = this.ta.ALa;
              break;
            case "_$SceneTo":
              a.Fb.result = this.ta.CLa;
              break;
            case "_$SetItem":
              a.Fb.result = this.ta.setItem;
              break;
            case "_$StoryTutorialStep":
              a.Fb.result = p.o.Bi.NH;
              break;
            case "_$TabFrom":
              a.Fb.result = this.ta.nOa;
              break;
            case "_$TabTo":
              a.Fb.result = this.ta.oOa;
              break;
            case "_$TimerName":
              let l = this.ta.rza;
              a.Fb.result = l != null ? l : "";
              break;
            default:
              let n = p.o.z5a(b);
              a.Fb.result = n != null ? n.value : "0";
          }
        } catch (c) {
          throw 33;
        }
      }
    }
    Ega(a) {
      this.ta = a;
      if (this.type == 7)
        return ((a = new oc()), this.fc(this.nM, a), a.iE() ? a.Je == 1 : !1);
      a = new oc();
      let b = new oc();
      this.fc(this.nM, a);
      this.fc(this.rna, b);
      return this.aFa() ? this.O0a(a, b) : this.P0a(a, b);
    }
    MNa(a) {
      a = a.Rh;
      a = Rc(a, "(", "");
      a = Rc(a, ")", "");
      return a.split(".");
    }
    Q0a(a, b) {
      a = this.MNa(a);
      b = this.MNa(b);
      if (a.length > b.length) {
        var c = a;
        a = b;
        b = c;
      }
      c = 0;
      let d = a.length;
      for (; c < d; ) {
        let e = c++;
        if (!this.jxb(a[e], b[e])) return !1;
      }
      return !0;
    }
    O0a(a, b) {
      debugger;
      a = a.toString();
      b = b.toString();
      if (this.Nwa)
        switch (this.type) {
          case 8:
            return Cb(a, b);
          case 9:
            return qd(a, b);
          case 10:
            return Zf(a, b);
          default:
            return !1;
        }
      else
        switch (this.type) {
          case 8:
            return Cb(a.toLowerCase(), b.toLowerCase());
          case 9:
            return qd(a.toLowerCase(), b.toLowerCase());
          case 10:
            return Zf(a.toLowerCase(), b.toLowerCase());
          default:
            return !1;
        }
    }
    P0a(a, b) {
      return this.pca == 1
        ? this.Q0a(a, b)
        : a.iE() || b.iE()
          ? a.iE() && b.iE()
            ? this.dia(a.Je | 0, b.Je | 0)
            : this.fOa(a.toString(), b.toString())
          : this.fOa(a.Rh, b.Rh);
    }
    fOa(a, b) {
      return a == b;
    }
    dia(a, b) {
      switch (this.type) {
        case 1:
          return a == b;
        case 2:
          return a > b;
        case 3:
          return a >= b;
        case 4:
          return a < b;
        case 5:
          return a <= b;
        default:
          return !1;
      }
    }
    jxb(a, b) {
      switch (this.type) {
        case 1:
          return a == b;
        case 2:
          return Ms(a, b) > 0;
        case 3:
          return Ms(a, b) >= 0;
        case 4:
          return Ms(a, b) < 0;
        case 5:
          return Ms(a, b) <= 0;
        default:
          return !1;
      }
    }
    ir(a) {
      return this.cb ? !a : a;
    }
    tAa(a) {
      let b = a.data;
      if (b != null)
        switch (((a = a.Fb), b.method)) {
          case "ABGroupExists":
            this.pWa(a);
            break;
          case "Achievements":
            this.qWa(b, a);
            break;
          case "AdAvailable":
            this.tWa(a);
            break;
          case "Battle":
            this.GYa(b, a);
            break;
          case "Concat":
            this.gOa(b, a, 1);
            break;
          case "DataVersion":
            this.Vzb(b, a);
            break;
          case "Deliver":
            this.xdb(b, a);
            break;
          case "Div":
            this.FE(b, a, 4);
            break;
          case "Enchantment":
            this.T3a(b, a);
            break;
          case "Fight":
            this.q4a(b, a);
            break;
          case "FightCurrencyCost":
            this.o4a(b, a);
            break;
          case "FightInfo":
            this.r4a(b, a);
            break;
          case "Item":
            this.ydb(b, a);
            break;
          case "ItemsOfType":
            this.Adb(b, a);
            break;
          case "Mod":
            this.FE(b, a, 6);
            break;
          case "Multi":
            this.FE(b, a, 3);
            break;
          case "NDiv":
            this.FE(b, a, 5);
            break;
          case "Offer":
            this.Sfb(b, a);
            break;
          case "Offers":
            this.Ufb(b, a);
            break;
          case "Pack":
            this.Vib(b, a);
            break;
          case "PerkInfo":
            this.flb(b, a);
            break;
          case "Player":
            this.xlb(b, a);
            break;
          case "Purchase":
            this.XJa(b, a);
            break;
          case "RaidLootInfo":
            this.emb(a);
            break;
          case "SessionSettings":
            this.Jqb(b, a);
            break;
          case "ShopAssert":
            this.gvb(b, a);
            break;
          case "ShopInfo":
            this.ivb(b, a);
            break;
          case "Slice":
            this.gOa(b, a, 2);
            break;
          case "Sub":
            this.FE(b, a, 2);
            break;
          case "Sum":
            this.FE(b, a, 1);
            break;
          case "SysInfo":
            this.vxb(b, a);
            break;
          case "Test":
            this.Ixb(b, a);
            break;
          case "Timer":
            this.Qxb(b, a);
            break;
          case "UniformIntRandom":
            this.FE(b, a, 7);
            break;
          case "VersionController":
            this.Zzb(b, a);
        }
    }
    emb(a) {
      debugger;
      a.result = "0";
    }
    flb(a, b) {
      debugger;
      let c = v.Sg.ln(a.$l());
      c != null && a.Sd == "Icon" && (b.result = c.image);
    }
    q4a(a, b) {
      var c = a.$l();
      c = p.F().Oea(c);
      if (c != null) {
        switch (a.Sd) {
          case "Armor":
            a = c.iJ("Armor");
            break;
          case "ArmorLevel":
            a = K.T(c.hJ("Armor"));
            break;
          case "Battle":
            a = c.Nb.Se;
            break;
          case "Bonus":
            debugger;
            a = K.T(c.r4);
            break;
          case "CheckCurrency":
            debugger;
            a = K.T(c.rEa());
            break;
          case "Description":
            a = c.MD();
            break;
          case "Difficulty":
            a = Wc.aBa(v.Lz(c));
            a = K.T(Wc.kD.indexOf(a));
            break;
          case "EnoughCurrency":
            debugger;
            a = K.T(v.b4a(c));
            break;
          case "Fight":
            a = c.Nb.Rq;
            break;
          case "Helm":
            a = c.iJ("Helm");
            break;
          case "HelmLevel":
            a = K.T(c.hJ("Helm"));
            break;
          case "Level":
            debugger;
            a = c.Yc != null ? K.T(c.Yc.bb()) : "0";
            break;
          case "LossCount":
            a = c.Yc != null ? K.T(c.Yc.MW) : "0";
            break;
          case "Magic":
            a = c.iJ("Magic");
            break;
          case "MagicLevel":
            a = K.T(c.hJ("Magic"));
            break;
          case "Money":
            debugger;
            a = K.T(c.s4);
            break;
          case "Name":
            a = c.Nb.toString();
            break;
          case "Power":
            debugger;
            a = c.n4 == null ? "null" : "" + c.n4;
            break;
          case "RaidCharge":
            a = c.iJ("RaidCharge");
            break;
          case "RaidChargeLevel":
            a = K.T(c.hJ("RaidCharge"));
            break;
          case "Ranged":
            a = c.iJ("Ranged");
            break;
          case "RangedLevel":
            a = K.T(c.hJ("Ranged"));
            break;
          case "TimeLeft":
            debugger;
            a = K.T(c.B9a());
            break;
          case "Timestamp":
            debugger;
            a = c.Yc != null ? K.T(c.Yc.Sz()) : "0";
            break;
          case "Type":
            a = p.F().FAa(c.type);
            break;
          case "Weapon":
            a = c.iJ("Weapon");
            break;
          case "WeaponLevel":
            a = K.T(c.hJ("Weapon"));
            break;
          case "WinCount":
            a = c.Yc != null ? K.T(c.Yc.qo) : "0";
            break;
          case "Zone":
            a = c.Nb.Ne;
            break;
          default:
            a = null;
        }
        b.result = a;
      }
    }
    r4a(a, b) {
      debugger;
      var c = a.$l();
      b.result = "0";
      if (p.o != null) {
        var d = new ib();
        d.mj(c);
        c = p.o.Xq(d);
        if (c == null) p.LD(d.Ne);
        else
          switch (a.Sd) {
            case "LossCount":
              b.result = K.T(c.MW);
              break;
            case "WinCount":
              b.result = K.T(c.qo);
          }
      }
    }
    xlb(a, b) {
      let c = p.o;
      if (c != null)
        switch (a.Sd) {
          case "Armor":
            a = c.Ca.Fd(I.Ci);
            a != null && (b.result = a.name);
            break;
          case "Bonus":
            b.result = K.T(c.gd);
            break;
          case "CanBuySomethingForGold":
            debugger;
            b.result = p.xZa(c.Ob) ? "1" : "0";
            break;
          case "CoinIcon":
            debugger;
            b.result = c.pf;
            break;
          case "GetAvatar":
            debugger;
            b.result = p.o.L5a();
            break;
          case "HasPayments":
            b.result = "0";
            break;
          case "HasPerk":
            debugger;
            let d = a.Ab.length > 0 ? a.Ab[0].body : "";
            b.result =
              m.find(v.hw().Yk(), function (e) {
                return e.name == d;
              }) != null
                ? "1"
                : "0";
            break;
          case "Helm":
            a = c.Ca.Fd(I.Di);
            a != null && (b.result = a.name);
            break;
          case "Language":
            switch (G.lp()) {
              case "de":
                a = "ger";
                break;
              case "en":
                a = "eng";
                break;
              case "es":
                a = "spa";
                break;
              case "fr":
                a = "fra";
                break;
              case "it":
                a = "ita";
                break;
              case "ja":
                a = "jpn";
                break;
              case "ko":
                a = "kor";
                break;
              case "pt":
                a = "por";
                break;
              case "ru":
                a = "rus";
                break;
              case "zh-CN":
                a = "chn";
                break;
              case "zh-TW":
                a = "chn_tr";
                break;
              default:
                throw 34;
            }
            b.result = a;
            break;
          case "Level":
            b.result = K.T(c.bb());
            break;
          case "Magic":
            a = c.Ca.Fd(I.Ff);
            a != null && (b.result = a.name);
            break;
          case "MapFocus":
            b.result = c.Ds.yCa();
            break;
          case "Money":
            b.result = K.T(c.Ob);
            break;
          case "Power":
            b.result = c.ek == null ? "null" : "" + c.ek;
            break;
          case "RaidCharge":
            debugger;
            a = c.Ca.Fd(I.Jm);
            a != null && (b.result = a.name);
            break;
          case "RaidMapFocus":
            debugger;
            break;
          case "Ranged":
            a = c.Ca.Fd(I.Xh);
            a != null && (b.result = a.name);
            break;
          case "Skeleton":
            debugger;
            a = c.Ca.Fd(I.Ux);
            a != null && (b.result = a.name);
            break;
          case "Weapon":
            a = c.Ca.Fd(I.xg);
            a != null && (b.result = a.name);
            break;
          default:
            debugger;
        }
    }
    ydb(a, b) {
      var c = p.items.$b(a.$l());
      if (c != null) {
        var d = p.o;
        switch (a.Sd) {
          case "Availability":
            b.result = c.$Ca() ? "1" : "0";
            break;
          case "BonusDeliveryPrice":
            b.result = K.T(c.Od);
            break;
          case "BonusPrice":
            b.result = K.T(c.pd);
            break;
          case "ConfigDiscountEnd":
            debugger;
            break;
          case "ConfigDiscountStart":
            debugger;
            break;
          case "Equipped":
            c = d.xa.te(c);
            if (c != null) {
              debugger;
              b.result = K.T(c.Wu);
            }
            break;
          case "Image":
            b.result = c.fileName;
            break;
          case "Level":
            b.result = c.Bf == null ? "null" : "" + c.Bf;
            break;
          case "MoneyDeliveryPrice":
            b.result = K.T(c.X2);
            break;
          case "Name":
            b.result = c.name;
            break;
          case "NextBonusUpgradePrice":
            b.result = K.T(this.tCa(this.C0(c), !1));
            break;
          case "NextMoneyUpgradePrice":
            b.result = K.T(this.tCa(this.C0(c), !0));
            break;
          case "NextUpgradeDeliveryPrice":
            b.result = K.T(this.I6a(this.C0(c)));
            break;
          case "NextUpgradeDeliveryTime":
            b.result = K.T(this.J6a(this.C0(c)));
            break;
          case "PackLabel":
            b.result = c.lock;
            break;
          case "PerkExists":
            debugger;
            break;
          case "Price":
            b.result = K.T(c.oi);
            break;
          case "Quantity":
            c = d.xa.te(c);
            b.result = c != null ? K.T(c.qd()) : "0";
            break;
          case "RealPrice":
            a = c.Cr;
            a != null && a != "" && Lg(c.Cr.charAt(0)) && (a = " " + a);
            c = new Ia();
            b.result = aa.Pla(a, c);
            b.Iq += c.G;
            break;
          case "ReceiveForgeMaterial1":
            b.result = K.T(c.gF);
            break;
          case "ReceiveForgeMaterial2":
            b.result = K.T(c.hF);
            break;
          case "ReceiveForgeMaterial3":
            b.result = K.T(c.iF);
            break;
          case "RecieveBonus":
            b.result = K.T(c.Pp);
            break;
          case "RecieveGold":
            b.result = K.T(c.On);
            break;
          case "SliderType":
            b.result = th.getName(c.iab());
            break;
          case "SubType":
            b.result = c.Yb;
            break;
          case "Type":
            b.result = c.type;
        }
      }
    }
    C0(a) {
      var b = null;
      let c = p.o.xa.te(a);
      c != null &&
        c.Dh > 0 &&
        c.jy > 0 &&
        ((b = c.$Aa()), (b = b != null ? b.clone() : null));
      b != null && (b = c != null ? c.Si.clone() : a.C9a());
      return b;
    }
    tCa(a, b) {
      debugger;
      let c = 2147483647;
      a != null && ((b && a.eDa()) || (!b && a.Rfa())) && (c = b ? a.oi : a.pd);
      return c;
    }
    I6a(a) {
      let b = 2147483647;
      a != null && (b = a.Od);
      return b;
    }
    J6a(a) {
      debugger;
      let b = 2147483647;
      a != null && (b = a.Ec);
      return b;
    }
    Vib(a, b) {
      var c = a.$l();
      switch (a.Sd) {
        case "IsAvailable":
          b.result = Mc.F().b2(c) ? "1" : "0";
          break;
        case "IsDownloaded":
          b.result = Mc.F().MEa(c) ? "1" : "0";
          break;
        case "IsExistsInConfig":
          b.result = Mc.F().NEa(c) ? "1" : "0";
          break;
        case "NeedReload":
          b.result = Mc.F().Xha ? "1" : "0";
          break;
        case "Size":
          ((a = hd.F().wm.NQ(c)),
            a != null
              ? ((c = a.size), (b.result = c == null || c == "" ? "0" : a.size))
              : (b.result = "error"));
      }
    }
    XJa(a, b) {
      var c = a.$l().split("|");
      if (c.length != 0) {
        var d = c[0];
        c = c.length > 1 ? c[1] : "";
        var e = p.vf(d);
        d = e != null ? e.ib : p.items.$b(d);
        switch (a.Sd) {
          case "Failure":
            b.result = c;
            break;
          case "Name":
            b.result = d != null ? d.name : "";
            break;
          case "PaidItem":
            b.result = d != null ? d.M3 : "";
            break;
          case "Timeout":
            a = e != null ? e.Dh : 0;
            d = v.m0();
            b.result = K.T(a > d ? a - d : 0);
            break;
          case "Type":
            b.result = d != null ? d.type : "";
            break;
          case "UpgradeLevel":
            b.result = e != null ? K.T(e.Ce) : "0";
        }
      }
    }
    Adb(a, b) {
      debugger;
      var c = p.o;
      c != null &&
        ((c = c.xa.mJ(a.$l())),
        a.Sd == "Quantity" && (b.result = K.T(c.length)));
    }
    GYa(a, b) {
      var c = a.$l();
      let d = new ib();
      d.mj(c);
      switch (a.Sd) {
        case "Available":
          p.Wk(d) != null
            ? (b.result = p.o.jEa(d) ? "1" : "0")
            : (b.result = "0");
          break;
        case "Hidden":
          debugger;
          a = p.Wk(d);
          b.result = a != null && a.ob != null ? (a.ob.ni() ? "1" : "0") : "-1";
          break;
        case "IsOpened":
          b.result = "0";
          a = p.Wk(d);
          a != null &&
            (a.ob != null && (b.result = a.ob.yt() || a.ob.ni() ? "0" : "1"),
            a.type == "FightRaid" && (b.result = "1"));
          break;
        case "Locked":
          a = p.Wk(d);
          c = !0;
          a != null && (c = a.ob == null || a.ob.yt());
          b.result = c ? "1" : "0";
          break;
        case "Name":
          a = p.Wk(d);
          b.result = a != null ? a.name : "";
          break;
        case "Type":
          debugger;
          a = p.Wk(d);
          c = "FightDummy";
          a != null && (c = a.type);
          b.result = p.F().FAa(c);
          break;
        case "Zone":
          debugger;
          a = p.Wk(d);
          a != null
            ? ((a = a.pl), (b.result = a != null ? a.name : ""))
            : (b.result = "");
      }
    }
    Vzb(a, b) {
      let c = ug.kz;
      switch (a.Sd) {
        case "DataVersion":
          a = c.kz == null ? "null" : "" + c.kz;
          break;
        case "Major":
          a = c.DE == null ? "null" : "" + c.DE;
          break;
        case "Minor":
          a = c.GE == null ? "null" : "" + c.GE;
          break;
        case "Production":
          a = c.bT == null ? "null" : "" + c.bT;
          break;
        case "Full":
        case "Version":
          a = c.toString();
          break;
        default:
          a = null;
      }
      b.result = a;
    }
    Zzb(a, b) {
      let c = ug.version;
      switch (a.Sd) {
        case "DataVersion":
          a = c.kz == null ? "null" : "" + c.kz;
          break;
        case "Major":
          a = c.DE == null ? "null" : "" + c.DE;
          break;
        case "Minor":
          a = c.GE == null ? "null" : "" + c.GE;
          break;
        case "Production":
          a = c.bT == null ? "null" : "" + c.bT;
          break;
        case "Full":
        case "Version":
          a = c.toString();
          break;
        default:
          a = null;
      }
      b.result = a;
    }
    vxb(a, b) {
      switch (a.Sd) {
        case "AdvertisingSupport":
          b.result = "0";
          break;
        case "AndroidAPILevel":
          b.result = "0";
          break;
        case "AnyF2P":
          b.result = "0";
          break;
        case "AnyPaid":
          b.result = "1";
          break;
        case "ChinaF2P":
          b.result = "0";
          break;
        case "Connection":
          debugger;
          break;
        case "CurrentPlatformName":
          debugger;
          b.result = "PAID";
          break;
        case "DailyOffersAvailable":
          for (var c = (a = 0), d = L.J.au; c < d.length; )
            Kb.Ve(d[c++], "sku").indexOf("DailyOffer") != -1 && ++a;
          b.result = a == 30 ? "1" : "0";
          break;
        case "DeviceTotalMem":
          b.result = K.T(
            Math.round(window.performance.memory.jsHeapSizeLimit / 1024),
          );
          break;
        case "DeviceType":
          b.result = L.J.wn ? "Mobile" : "Desktop";
          break;
        case "DisplayHeight":
          b.result = K.T(window.screen.height);
          break;
        case "DisplayWidth":
          b.result = K.T(window.screen.width);
          break;
        case "Editor":
          b.result = "0";
          break;
        case "F2P":
          b.result = "0";
          break;
        case "FacebookLoginSupport":
          b.result = "0";
          break;
        case "FramesCount":
          debugger;
          break;
        case "GMTOffset":
          debugger;
          break;
        case "GamingServiceHasAccount":
          b.result = "0";
          break;
        case "HuaweiF2P":
          b.result = "0";
          break;
        case "IsDebug":
          b.result = "0";
          break;
        case "IsbnF2P":
          b.result = "0";
          break;
        case "Language":
          debugger;
          b.result = va.navigator.language.split("-")[0];
          break;
        case "LowGraphicsSupport":
          b.result = "0";
          break;
        case "MyGamezF2P":
          b.result = "0";
          break;
        case "NBO":
          b.result = L.J.au == null || L.J.au.length == 0 ? "1" : "0";
          break;
        case "NewVersionAvailable":
          b.result = L.J.dHa ? "1" : "0";
          break;
        case "OsName":
          b.result = L.J.k8a();
          break;
        case "Paid":
          b.result = "1";
          break;
        case "QualityCondition":
          b.result = "HIGH";
          break;
        case "RaidsSupport":
          b.result = "0";
          break;
        case "RatingUrl":
          debugger;
          a = new Ia();
          b.result = aa.Pla(Ld.Wbb.kmb, a);
          b.Iq += a.G;
          break;
        case "SamsungF2P":
          b.result = "0";
          break;
        case "StarterPacksAvailable":
          c = a = 0;
          for (d = L.J.au; c < d.length; )
            switch (Kb.Ve(d[c++], "sku")) {
              case "Pack_Starter":
              case "Premium_Pack_Zone1":
              case "Premium_Pack_Zone2":
              case "Premium_Pack_Zone3":
              case "Premium_Pack_Zone4":
              case "Premium_Pack_Zone5":
              case "Premium_Pack_Zone6":
                ++a;
            }
          b.result = a == 7 ? "1" : "0";
          break;
        case "Steam":
        case "Switch":
          b.result = "0";
          break;
        case "Time":
          b.result = K.T(p.Dc);
          break;
        case "UseAbsoluteButtonsLayout":
          debugger;
          break;
        case "UseRelativeButtonsLayout":
          debugger;
          break;
        case "UserObserved":
          b.result = "0";
      }
    }
    xdb(a, b) {
      debugger;
      this.XJa(a, b);
    }
    Jqb(a, b) {
      debugger;
      let c = p.o;
      c.cha(a.Sd) &&
        ((a = c.tfa(a.Sd)),
        (b.result = a != null && a != "" ? K.T(hy(a)) : "0"));
    }
    Qxb(a, b) {
      let c = a.$l(),
        d = p.o;
      a.Sd == "Value" &&
        (c == "EnergyRefillTimer"
          ? (b.result = K.T(d.o4))
          : c == "DuelAccessibilityTimer"
            ? Gb.time > 0 && (b.result = K.T(Gb.Pn - Gb.time))
            : c == "StarterPackTimer"
              ? (b.result = K.T(v.eJ(d.QVa)))
              : ((a = d.Bl.lJ(c)),
                (b.result = a != null ? K.T(v.eJ(a.Sv)) : "")));
    }
    pWa(a) {
      debugger;
      a.result = "0";
    }
    T3a(a, b) {
      let c = a.$l().split("|");
      if (!(c.length < 2)) {
        var d = c[0],
          e = new oc(),
          f = new yb();
        f.kk(this.ta);
        f.fc(d, e);
        d = e.Rh;
        var g = c[1];
        f.fc(g, e);
        g = e.Rh;
        var h = 0;
        c.length == 3 && (f.fc(c[2], e), (h = Math.trunc(e.Je)));
        switch (a.Sd) {
          case "BonusDeliveryPrice":
            debugger;
            break;
          case "DeliveryTime":
            b.result = K.T(h);
            break;
          case "Item":
            b.result = d;
            break;
          case "Recipe":
            b.result = g;
            break;
          case "Timeout":
            debugger;
        }
      }
    }
    Q8a() {
      let a = new Fb();
      var b = this.ta.item;
      b != null &&
        ((a.M += b.name),
        (b = this.ta.P_),
        b != null && b != "" && ((a.M += "|"), (a.M += this.ta.P_)));
      return a.M;
    }
    R6a() {
      let a = new Fb();
      if (this.ta.Mf.pE != "") {
        let b = 0;
        this.ta.Mf.Ec > 0 && ((b = this.ta.Mf.Ec - p.Dc), b < 0 && (b = 0));
        a.M += this.ta.Mf.pE;
        a.M += "|";
        a.M += this.ta.Mf.Ija;
        a.M += "|";
        b > 0 && (a.M += K.T(b));
      }
      return a.M;
    }
    o4a(a, b) {
      debugger;
      var c = a.Ab.length > 0 ? a.Ab[0].result.result : "";
      a = a.Ab.length > 1 ? a.Ab[1].result.result : "";
      c = p.F().Oea(c);
      c != null && a != null && a != "" && (b.result = K.T(c.t6a(a)));
    }
    gvb(a, b) {
      debugger;
      let c = a.$l();
      a.Sd == "IsOpen" && (b.result = p.o.MJ(c) ? "1" : "0");
    }
    ivb(a, b) {
      debugger;
      let c = Ma.get();
      if (c != null)
        switch (a.Sd) {
          case "CurrentItem":
            b.result = c.Za.zt() != null ? c.Za.zt().name : "";
            break;
          case "CurrentRecipe":
            debugger;
        }
    }
    tWa(a) {
      debugger;
      a.result = "0";
    }
    Ixb(a, b) {
      let c = a.$l().split("|"),
        d = "-1";
      c.length != 0 && (d = c[0]);
      switch (a.Sd) {
        case "Random":
          b.result = "4";
          break;
        case "Test00":
          b.result = "0";
          break;
        case "Test01":
          b.result = "1";
          break;
        case "Test10":
          b.result = "10";
          break;
        case "TestValue":
          b.result = d;
      }
    }
    Sfb(a, b) {
      let c = a.$l();
      var d = m.gn(p.Hw.Mt, function (e) {
        return e.ab() == c;
      });
      if (a.Sd == "Exists") b.result = d != null ? "1" : "0";
      else if (d != null)
        switch (a.Sd) {
          case "AllItemsRecieved":
            b.result = d.rc.$H ? "1" : "0";
            break;
          case "Description":
            b.result = d.item.description;
            break;
          case "FocusOnBuy":
            b.result = d.item.V_;
            break;
          case "Image":
            b.result = d.item.fileName;
            break;
          case "ProfitImage":
            b.result = d.item.bu;
            break;
          case "RealPrice":
            a = d.item.Cr;
            a != null && a != "" && Lg(d.item.Cr.charAt(0)) && (a = " " + a);
            d = new Ia();
            b.result = aa.Pla(a, d);
            b.Iq += d.G;
            break;
          case "ShowLastChance":
            b.result = d.item.jU ? "1" : "0";
            break;
          case "State":
            b.result = K.T(d.rc.state);
            break;
          case "TimerActive":
            b.result = d.dFa() ? "1" : "0";
            break;
          case "TimerName":
            b.result = d.tJ();
            break;
          case "Title":
            b.result = d.item.text;
            break;
          case "Type":
            b.result = K.T(d.qp());
        }
    }
    Ufb(a, b) {
      let c = p.Hw.Mt;
      switch (a.Sd) {
        case "First":
          a = c[0];
          b.result = a != null ? a.ab() : null;
          break;
        case "FirstActive":
          a = m.gn(c, function (d) {
            return d.rc.state == "Active";
          });
          b.result = a != null ? a.ab() : null;
          break;
        case "FirstEnd":
          a = m.gn(c, function (d) {
            return d.rc.state == "End";
          });
          b.result = a != null ? a.ab() : null;
          break;
        case "FirstJustStarted":
          a = m.gn(c, function (d) {
            return d.rc.state == "JustStarted";
          });
          b.result = a != null ? a.ab() : null;
          break;
        case "FirstLastChance":
          a = m.gn(c, function (d) {
            return d.rc.state == "LastChance";
          });
          b.result = a != null ? a.ab() : null;
          break;
        case "FirstNotStarted":
          a = m.gn(c, function (d) {
            return d.rc.state == "NotStarted";
          });
          b.result = a != null ? a.ab() : null;
          break;
        case "FirstPurchased":
          ((a = m.gn(c, function (d) {
            return d.rc.state == "Purchased";
          })),
            (b.result = a != null ? a.ab() : null));
      }
    }
    qWa(a, b) {
      let c = a.$l();
      a.Sd == "Earned" && (b.result = p.o.Ai.aCa(c) != null ? "1" : "0");
    }
    static yD(a) {
      switch (a) {
        case "And":
          return 6;
        case "Condition":
          return 7;
        case "Conditions":
          return 7;
        case "Contains":
          return 8;
        case "Ends":
          return 10;
        case "Equal":
          return 1;
        case "Greater":
          return 2;
        case "GreaterEqual":
          return 3;
        case "Less":
          return 4;
        case "LessEqual":
          return 5;
        case "Operator":
          return 6;
        case "Or":
          return 6;
        case "Starts":
          return 9;
        default:
          return 0;
      }
    }
    static OAa(a) {
      switch (a) {
        case "And":
          return 2;
        case "Or":
          return 1;
        default:
          return 0;
      }
    }
  }
  yb.g = "1C4";
  yb.u = tg;
  Object.assign(yb.prototype, { j: yb });
  class Wo {
    constructor(a) {
      this.type = Wo.W6a(a.name);
    }
    static W6a(a) {
      switch (a) {
        case "Activate":
          return "QUEST_EVENT_ACTIVATE";
        case "ActivatePerk":
          return "QUEST_EVENT_ACTIVATE_PERK";
        case "AfterFightVideoMultiplier":
          return "QUEST_EVENT_AFTER_FIGHT_VIDEO_MULTIPLIER";
        case "ApplicationStart":
          return "QUEST_EVENT_START_APPLICATION";
        case "BattlePassInfo":
          return "QUEST_EVENT_BATTLE_PASS_INFO";
        case "BeforeQueue":
          return "QUEST_EVENT_BEFORE_QUEUE";
        case "BossShieldDestroyed":
          return "QUEST_EVENT_BOSS_SHIELD_DESTR";
        case "BuySpinGems":
          return "QUEST_EVENT_BUY_SPIN_GEMS";
        case "ChangeTab":
          return "QUEST_EVENT_CHANGE_TAB";
        case "CheckClanTutorialStep":
          return "QUEST_EVENT_CHECK_CLAN_TUTORIAL_STEP";
        case "CheckUserUpdate":
          return "QUEST_EVENT_CHECK_USER_UPDATE";
        case "ClanRaidInvite":
          return "QUEST_EVENT_CLAN_RAID_INVITE";
        case "CreateClan":
          return "QUEST_EVENT_CREATE_CLAN";
        case "DailyRefreshRewardedVideo":
          return "QUEST_EVENT_DAILY_REFRESH_REWARDED_VIDEO";
        case "DailyWindowOpen":
          return "QUEST_EVENT_DAILY_WINDOW_OPEN";
        case "DeactivatePerk":
          return "QUEST_EVENT_DEACTIVATE_PERK";
        case "DeleteSave":
          return "QUEST_EVENT_DELETE_SAVE";
        case "Delivery":
          return "QUEST_EVENT_DELIVERY";
        case "Dialog":
          return "QUEST_EVENT_DIALOG";
        case "DuelUnlocked":
          return "QUEST_EVENT_DUEL_UNLOCKED";
        case "Enchantment":
          return "QUEST_EVENT_ENCHANTMENT";
        case "EnchantmentUnsuccessful":
          return "QUEST_EVENT_ENCHANTMENT_UNSUCCESSFUL";
        case "EnergyBarPress":
          return "QUEST_EVENT_ENERGY_BAR_PRESS";
        case "EnergyChanged":
          return "QUEST_EVENT_ENERGY";
        case "FightEnd":
          return "QUEST_EVENT_FIGHT_END";
        case "FightEnter":
          return "QUEST_EVENT_FIGHT_ENTER";
        case "FightPreEnd":
          return "QUEST_EVENT_FIGHT_PRE_END";
        case "FirstLaunch":
          return "QUEST_EVENT_FIRST_LAUNCH";
        case "FreeSectionButton":
          return "QUEST_EVENT_FREE_SECTION_BUTTON";
        case "GamingServiceLoginEnd":
          return "QUEST_EVENT_GAMING_SERVICE_LOGIN_END";
        case "GamingServiceSignIn":
          return "QUEST_EVENT_GAMING_SERVICE_SIGN_IN";
        case "GamingServiceSignOut":
          return "QUEST_EVENT_GAMING_SERVICE_SIGN_OUT";
        case "GotItem":
          return "QUEST_EVENT_GOT_ITEM";
        case "ItemBought":
          return "QUEST_EVENT_ITEM_BOUGHT";
        case "LeaderBoardTap":
          return "QUEST_EVENT_LEADERBOARD_TAP";
        case "LevelUp":
          return "QUEST_EVENT_LEVEL_UP";
        case "LoginEnd":
          return "QUEST_EVENT_LOGIN_END";
        case "LoginFacebook":
          return "QUEST_EVENT_LOGIN_FB";
        case "LotterySpinRewardedVideo":
          return "QUEST_EVENT_LOTTERY_SPIN_REWARDED_VIDEO";
        case "MapButtonPress":
          return "QUEST_EVENT_MAP_BUTTON_PRESS";
        case "OfferItemRecieved":
          return "QUEST_EVENT_OFFER_ITEM_RECIEVED";
        case "OpenLottery":
          return "QUEST_EVENT_OPEN_LOTTERY";
        case "OpenRaidChat":
          return "QUEST_EVENT_OPEN_RAID_CHAT";
        case "OpenRaids":
          return "QUEST_EVENT_RAID_OPEN";
        case "PVPTutorial2":
          return "QUEST_EVENT_PVP_TUTORIAL2";
        case "PrePurchase":
          return "QUEST_EVENT_PREPURCHASE";
        case "Purchase":
          return "QUEST_EVENT_PURCHASE";
        case "PurchaseUnsuccessful":
          return "QUEST_EVENT_PURCHASE_UNSUCCESSFUL";
        case "RaidEnd":
          return "QUEST_EVENT_RAID_END";
        case "RaidEnter":
          return "QUEST_EVENT_RAID_ENTER";
        case "RaidFightEnd":
          return "QUEST_EVENT_RAID_FIGHT_END";
        case "RaidFightEnter":
          return "QUEST_EVENT_RAID_FIGHT_ENTER";
        case "RaidFightRewardedVideo":
          return "QUEST_EVENT_RAID_FIGHT_REWARDED_VIDEO";
        case "RaidFloorChanged":
          return "QUEST_EVENT_RAID_FLOOR_CHANGED";
        case "RaidLogin":
          return "QUEST_EVENT_RAID_LOGIN";
        case "RaidLootReceived":
          return "QUEST_EVENT_RAID_LOOT_RECEIVED";
        case "RaidMapButtonPress":
          return "QUEST_EVENT_RAID_MAP_BUTTON_PRESS";
        case "RaidMapEnter":
          return "QUEST_EVENT_RAID_MAP_ENTER";
        case "RaidProfileClosed":
          return "QUEST_EVENT_RAID_PROFILE_CLOSED";
        case "RaidProfileOpened":
          return "QUEST_EVENT_RAID_PROFILE_OPENED";
        case "RaidPurchase":
          return "QUEST_EVENT_RAID_PURCHASE";
        case "ReplayButtonPress":
          return "QUEST_EVENT_REPLAY_BUTTON_PRESS";
        case "RequestDownloadPacks":
          return "QUEST_EVENT_REQUEST_DOWNLOAD_PACKS";
        case "SceneLoaded":
          return "QUEST_EVENT_SCENE_LOADED";
        case "SeasonStartWithRestore":
          return "QUEST_EVENT_SEAS_START_WITH_REST";
        case "SeasonStartWithoutRestore":
          return "QUEST_EVENT_SEAS_START_WITHOUT_REST";
        case "ServerCurrencyMessage":
          return "QUEST_EVENT_SERVER_CURRENCY";
        case "SessionStart":
          return "QUEST_EVENT_SESSION";
        case "SetItemAcquired":
          return "QUEST_EVENT_SET_ITEM_ACQUIRED";
        case "ShopButtonPress":
          return "QUEST_EVENT_SHOP_BUTTON_PRESS";
        case "ShowGDPRConsent":
          return "QUEST_EVENT_SHOW_GDPR_CONSENT";
        case "ShowRewardedVideo":
          return "QUEST_EVENT_SHOW_REWARDED_VIDEO";
        case "SkipDeliveryRewardedVideo":
          return "QUEST_EVENT_SKIP_DELIVERY_REWARDED_VIDEO";
        case "StarterPackPress":
          return "QUEST_EVENT_STARTER_PACK_PRESS";
        case "TimerEnd":
          return "QUEST_EVENT_TIMER_END";
        case "VideoButtonPress":
          return "QUEST_EVENT_VIDEO_BUTTON_PRESS";
        case "WithdrawGDPRConsent":
          return "QUEST_EVENT_WITHDRAW_GDPR_CONSENT";
        case "RangChanged":
        case "rankchanged":
          return "QUEST_EVENT_RANK_CHANGED";
        default:
          return "QUEST_EVENT_NONE";
      }
    }
  }
  Wo.g = "1C5";
  Object.assign(Wo.prototype, { j: Wo });
  class Cj {
    constructor() {
      this.Hv = new Map();
      this.SE = 0;
      this.wm = null;
      this.Zab = !1;
      this.Q_ = 0;
      this.$_a = this.gmb = "";
      this.qja = this.D2 = this.dmb = this.Beb = this.cmb = 0;
      this.setItem = "";
      this.rza = this.aja = this.P_ = null;
      this.RYa = this.Fv = this.fmb = "";
      this.iterator = null;
      this.II = "";
      this.$o = "None";
      this.ALa = this.CLa = this.nOa = this.oOa = "";
      this.Vv = this.hT = null;
      this.Mf = new rv();
      this.item = this.tHa = this.Nb = this.sxa = null;
    }
    o0() {
      return p.bw(this.Nb);
    }
    FWa(a, b) {
      this.Hv.set(b, a);
    }
    nnb(a) {
      X.remove(this.Hv, a);
    }
    ppb(a, b) {
      let c = new Ia();
      X.wh(this.Hv, b, c) && (this.nnb(b), c.G(a));
    }
    i0a() {
      X.clear(this.Hv);
    }
    vzb(a, b) {
      this.wm = a;
      let c = (this.SE = 0);
      for (; c < a.length; ) {
        let d = b.wm.NQ(a[c++]);
        d != null && (this.SE += kc(d.size));
      }
    }
  }
  Cj.g = "1C6";
  Object.assign(Cj.prototype, { j: Cj });
  class rv {
    constructor() {
      this.Ec = 0;
      this.pE = this.Ija = this.Oza = "";
    }
  }
  rv.g = "1C7";
  Object.assign(rv.prototype, { j: rv });
  class ce {
    constructor(a, b) {
      this.v7 = 0;
      this.Dy = null;
      this.dV = new Yb();
      this.Z8 = m.l();
      this.kVa = m.l();
      this.zUa = m.l();
      this.gH = new Map();
      this.rb = m.l();
      this.Hc = m.l();
      this.sK = new V();
      this.Tc = new V();
      this.Qp = null;
      this.fileName = b;
      b = a.attributes.get("Name");
      this.name = b != null ? b : "";
      this.WC = 0;
      this.priority = u.I(a.attributes.get("Priority"));
      this.yyb = u.I(a.attributes.get("Unresumable"));
      this.jYa = u.ka(a.attributes.get("AllowDoubles"), !1);
      this.d0 = u.I(a.attributes.get("GameMode"), 1);
      this.Z8.push(this.name);
      b = a.attributes.get("Group");
      m.addRange(this.Z8, (b != null ? b : "").split("|"));
      this.Kjb(a.A("Events"));
      ce.MS(a.A("Conditions"), this.rb);
      this.bjb(a.A("Actions"));
      this.akb(a.A("Marks"));
    }
    Kjb(a) {
      if (a != null) {
        a = a.children;
        for (var b = 0; b < a.length; ) this.Hc.push(new Wo(a[b++]));
      }
    }
    akb(a) {
      if (a != null) {
        a = a.children;
        for (var b = 0; b < a.length; )
          this.kVa.push(a[b++].attributes.get("Name"));
      }
    }
    Nja(a, b) {
      X.Xa(this.gH, b) || this.gH.set(b, a);
    }
    x0(a) {
      return X.Xa(this.gH, a) ? this.gH.get(a) : null;
    }
    bjb(a) {
      if (a != null) {
        var b = a.attributes.get("Place");
        this.v7 = ce.sfa(b != null ? b : "Map");
        b = 0;
        a = a.children;
        for (var c = 0; c < a.length; ) {
          let d = a[c++];
          b == 0 &&
            ((this.Dy = Fe.Zs("ECheckpoint", this.name, this, d)),
            (this.Dy.R_ = this.fileName),
            (this.Dy.index = 0),
            (this.Dy.Paa = this.v7),
            this.Dy.y3.addListener(w(this, this.y3)),
            this.zUa.push(this.Dy));
          this.Raa(d.name, d, this.dV, b);
          ++b;
        }
        this.Qp = p.o.VBa(this.name);
        this.dV.Tc.addListener(w(this, this.Sxa));
      }
    }
    y3(a) {
      this.Qp = a != null ? a : this.Qp;
    }
    Raa(a, b, c, d) {
      a = Fe.Jj(a, this.name, this, b);
      a.R_ = this.fileName;
      a.index = d;
      a.Paa = this.v7;
      c.Yl(a);
    }
    Sxa() {
      this.Jxa() && this.Tc.$(this);
      this.sK.$(this);
    }
    V6a() {
      let a = 0,
        b = this.Hc;
      for (; a < b.length; ) {
        let c = b[a];
        ++a;
        if (c.type == "QUEST_EVENT_ACTIVATE") return c;
      }
      return null;
    }
    zcb() {
      return this.V6a() != null;
    }
    Hcb(a) {
      let b = 0;
      for (; b < a.length; ) {
        let c = a[b++],
          d = 0,
          e = this.Z8;
        for (; d < e.length; ) if (c == e[d++]) return !0;
      }
      return !1;
    }
    compare(a) {
      let b = 0,
        c = this.rb;
      for (; b < c.length; ) if (!c[b++].compare(a)) return !1;
      return !0;
    }
    yLa(a) {
      this.Dy != null && this.Dy.xLa(a);
    }
    rF(a, b) {
      ha.F().phb(this);
      X.clear(this.gH);
      this.WC = 1;
      this.dV.aD = b && this.Qp != null ? this.Qp.$5a() : 0;
      this.dV.S(a);
    }
    Jxa() {
      ha.F().ohb(this);
      X.clear(this.gH);
      this.WC = 2;
      return this.Qp != null ? (this.Qp.clearParameters(), p.o.save(), !0) : !1;
    }
    eFa() {
      return this.yyb > 0;
    }
    zca(a) {
      let b = new Cj();
      if (a != null) {
        let c = p.F().Oea(a.RV);
        b.Nb = c != null ? c.Nb : ib.empty();
        b.Vv = a.Ji;
        b.hT = a.uX;
        b.D2 = a.IW;
        b.qja = a.xH;
      }
      return b;
    }
    az(a) {
      return this.WC == 1 && a.WC != 1
        ? 1
        : this.WC != 1 && a.WC == 1
          ? -1
          : qb(a.priority, this.priority);
    }
    hcb() {
      return p.Gcb(this.d0);
    }
    static MS(a, b) {
      if (a != null)
        if (a.children.length == 1 && a.xt().value != null) {
          debugger;
          var c = new yb();
          c.parse(a);
          b.push(c);
        } else
          for (a = a.children, c = 0; c < a.length; ) {
            let d = a[c++],
              e = new yb();
            e.parse(d);
            e.type == 6 && ce.MS(d, e.rb);
            b.push(e);
          }
    }
    static sfa(a) {
      return a == "Fight" ? 6 : a == "Dojo" ? 3 : a == "Map" ? 5 : -1;
    }
    static equals(a, b) {
      return a == b
        ? !0
        : a == null || b == null
          ? !1
          : a.name == b.name
            ? a.fileName == b.fileName
            : !1;
    }
  }
  ce.g = "1C8";
  ce.Rb = [al];
  Object.assign(ce.prototype, { j: ce });
