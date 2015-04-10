
var sox = "screenOriginX";

var soy = "screenOriginY";

var ssx = "screenSizeX";

var ssy = "screenSizeY";

S.configAll({
   "gridRoundedCornerSize" : 2,
   "gridCellRoundedCornerSize" : 2,
   "windowHintsFontSize" : 72,
   "windowHintsFontColor" : "200;200;200;1.0",
   "nudgePercentOf" : 'screenSize',
   "resizePercentOf" : 'screenSize',
   "windowHintsIgnoreHiddenWindows" : false,
   "windowHintsShowIcons" : true,
   "windowHintsSpread" : true
});


var nudge_amt = "3%";

var resize_amt = "3%";

var gap = "10";

var pos = {
   origin_x: sox + "+" + gap,
   origin_y: soy + "+" + gap,
   middle_x: sox + "+" + ssx + "/2+" + gap + "/2",
   middle_y: soy + "+" + ssy + "/2+" + gap + "/2"
};

var size = {
   full_width: ssx + "-" + gap + "*2",
   full_height: ssy + "-" + gap + "*2",
   half_width: ssx + "/2-" + gap + "-" + gap + "/2",
   half_height: ssy + "/2-" + gap + "-" + gap + "/2"
};

var presets = {
   fullscreen: {
      x: pos.origin_x,
      y: pos.origin_y,
      width: size.full_width,
      height: size.full_height
   },
   top_half: {
      x: pos.origin_x,
      y: pos.origin_y,
      width: size.full_width,
      height: size.half_height
   },
   bottom_half: {
      x: pos.origin_x,
      y: pos.middle_y,
      width: size.full_width,
      height: size.half_height
   },
   left_half: {
      x: pos.origin_x,
      y: pos.origin_y,
      width: size.half_width,
      height: size.full_height
   },
   right_half: {
      x: pos.middle_x,
      y: pos.origin_y,
      width: size.half_width,
      height: size.full_height
   },
   top_left_quarter: {
      x: pos.origin_x,
      y: pos.origin_y,
      width: size.half_width,
      height: size.half_height
   },
   top_right_quarter: {
      x: pos.middle_x,
      y: pos.origin_y,
      width: size.half_width,
      height: size.half_height
   },
   bottom_left_quarter: {
      x: pos.origin_x,
      y: pos.middle_y,
      width: size.half_width,
      height: size.half_height
   },
   bottom_right_quarter: {
      x: pos.middle_x,
      y: pos.middle_y,
      width: size.half_width,
      height: size.half_height
   }
};

var nudge = {
   left: S.op("nudge", {
      x: "-" + nudge_amt,
      y: "+0"
   }),
   right: S.op("nudge", {
      x: "+" + nudge_amt,
      y: "+0"
   }),
   up: S.op("nudge", {
      x: "+0",
      y: "-" + nudge_amt
   }),
   down: S.op("nudge", {
      x: "+0",
      y: "+" + nudge_amt
   })
};

var resize = {
   left: S.op("resize", {
      width: "-" + resize_amt,
      height: "+0"
   }),
   right: S.op("resize", {
      width: "+" + resize_amt,
      height: "+0"
   }),
   up: S.op("resize", {
      width: "+0",
      height: "-" + resize_amt
   }),
   down: S.op("resize", {
      width: "+0",
      height: "+" + resize_amt
   })
};

var focus = {
   right: S.op("focus", {
      "direction": "right"
   }),
   left: S.op("focus", {
      "direction": "left"
   }),
   up: S.op("focus", {
      "direction": "up"
   }),
   down: S.op("focus", {
      "direction": "down"
   })
};

var mod1 = function(k) {
   return k + ":ctrl,shift";
};

var mod2 = function(k) {
   return k + ":ctrl,alt";
};

var mod3 = function(k) {
   return k + ":ctrl,cmd";
};

var mod4 = function(k) {
   return k + ":cmd";
};

S.bind(mod2("/"), S.op("hint", {
   characters: "ASDFGHJKLQWERTYUIOP"
}));

S.bind(mod2("o"), S.op("move", presets.fullscreen));

S.bind(mod2("h"), S.op("move", presets.left_half));

S.bind(mod2("j"), S.op("move", presets.bottom_half));

S.bind(mod2("k"), S.op("move", presets.top_half));

S.bind(mod2("l"), S.op("move", presets.right_half));

S.bind(mod2("u"), S.op("move", presets.top_left_quarter));

S.bind(mod2("i"), S.op("move", presets.top_right_quarter));

S.bind(mod2("n"), S.op("move", presets.bottom_left_quarter));

S.bind(mod2("m"), S.op("move", presets.bottom_right_quarter));

S.bind(mod1("left"), nudge.left);

S.bind(mod1("right"), nudge.right);

S.bind(mod1("up"), nudge.up);

S.bind(mod1("down"), nudge.down);

S.bind(mod2("left"), resize.left);

S.bind(mod2("right"), resize.right);

S.bind(mod2("up"), resize.up);

S.bind(mod2("down"), resize.down);

S.bind(mod4("left"), focus.left);

S.bind(mod4("right"), focus.right);

S.bind(mod4("up"), focus.up);

S.bind(mod4("down"), focus.down);

S.bind(mod3("left"), S.op("throw", {
   screen: "0"
}));

S.bind(mod3("right"), S.op("throw", {
   screen: "1"
}));
