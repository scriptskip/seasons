var g = {
	a: function (a) {
		var a = new Audio (a.src);
			a.loop = a.loop || false;
			a.volume = a.volume || 1;
		a.play ();
		return a;
	},

	c: function () {
		var c = g.w.d.createElement ('canvas');
			c.c = c.getContext ('2d');
			c.d = true;
			c.ff = 'Arial';
			c.z = 0;

			c.a = function () { c.h (g.w.h); c.w (g.w.w); g.c.d = true; };
			c.b = function (c) { g.c.style.background = c; };
			c.fs = function (o) {
				var fs = o.h || c.h () * 0.5;
				g.c.c.font = fs + 'px ' + c.ff;

				var w = g.c.c.measureText (o.t).width;
				var W = o.w * c.w ();
				while (Math.abs (w - W) > 5) {
					fs = (w < W) ? fs * 1.6 : fs * 0.8;
					g.c.c.font = fs + 'px ' + c.ff;
					w = g.c.c.measureText (o.t).width;
				};
				return fs;
			};
			c.h = function (h) { if (h) c.height = h; else return c.height; };
			c.w = function (w) { if (w) c.width = w; else return c.width; };
			c.wipe = function (o) {
				var s = [];
				for (var i = g.s.length; i--;) {
					for (var k in o) {
						if (o[k] != g.s[i][k]) s.push (g.s[i]);
					};
				};
				g.s = s;
			};

		c.u = function () { switch (g.e.type) {
			case 'resize': c.a (); break;
		};};
		c.a ();
		g.w.d.b.appendChild (c);
		delete g.c;
		g.c = c;
	},

	d: function (d) {
		if (d) {
			d.type = 'box';
			d.type = (d.a != undefined) ? 'line' : d.type;
			d.type = (d.i != undefined) ? 'image' : d.type;
			d.type = (d.path != undefined) ? 'path' : d.type;
			d.type = (d.r) ? 'ring' : d.type;
			d.type = (d.t) ? 'text' : d.type;
			d.z = d.z || 0; g.c.z = (d.z > g.c.z) ? d.z : g.c.z;

			g.c.d = d.d || false;
			g.s.push (d);
		};

		if (g.c.d) {
			g.c.c.clearRect (0, 0, g.c.w (), g.c.h ());
			for (var z = 0; z <= g.c.z; z++) {
				for (var id = 0; id < g.s.length; id++) {
					var c = g.s[id];
					if (c.z == z) {
						var a = Math.floor (c.a * g.c.w ());
						var b = Math.floor (c.b * g.c.h ());
						var cos = c.cos || 2 * Math.PI;
						var h = Math.floor (c.h * g.c.h ());
						var r = Math.floor (c.r * Math.min (g.c.h (), g.c.w ()));
						var sin = c.sin || 0;
						var w = Math.floor (c.w * g.c.w ());
						var x = Math.floor (c.x * g.c.w ());
						var y = Math.floor (c.y * g.c.h ());

						if (c.f) g.c.c.fillStyle = c.f;
						if (c.lw) g.c.c.lineWidth = Math.floor (c.lw * Math.min (g.c.h (), g.c.w ()));
						if (c.s) g.c.c.strokeStyle = c.s;

						switch (c.type) {
							case 'box':
								if (c.f) g.c.c.fillRect (x, y, w, h);
								if (c.s) g.c.c.strokeRect (x, y, w, h);
							break;

							case 'image':
								if (w) g.c.c.drawImage (c.i, x, y, w, h); else g.c.c.drawImage (c.i, x, y);
							break;

							case 'line':
								g.c.c.beginPath (); g.c.c.moveTo (a, b); g.c.c.lineTo (x, y);
								if (c.f) g.c.c.fill (); if (c.s) g.c.c.stroke ();
							break;

							case 'path':
								if (c.path == 'begin') {
									g.c.c.beginPath ();
									g.c.c.moveTo (a, b); g.c.c.lineTo (x, y);
								};
								if (c.path == true) {
									g.c.c.lineTo (a, b); g.c.c.lineTo (x, y);
								};
								if (c.path == 'end') {
									g.c.c.lineTo (a, b); g.c.c.lineTo (x, y);
									g.c.c.closePath ();
								 	if (c.f) g.c.c.fill (); if (c.s) g.c.c.stroke ();
								};
							break;

							case 'ring':
								g.c.c.beginPath (); g.c.c.arc (x, y, r, sin, cos);
								if (c.f) g.c.c.fill (); if (c.s) g.c.c.stroke ();
							break;

							case 'text':
								if (h || w) { var fs = (w) ? g.c.fs (c) : h; g.c.c.font = fs + 'px ' + g.c.ff; };
								if (c.ta) g.c.c.textAlign = c.ta;
								if (c.tb) g.c.c.textBaseline = c.tb;
								if (c.f) g.c.c.fillText (c.t, x, y);
								if (c.s) g.c.c.strokeText (c.t, x, y);
							break;
						};
					};
				};
			};
			g.c.d = false;
		};
	},

	e: function () {
		var e = {};
			e._ = function () { return false; };
			e.$ = function (event) { g.e = event; g.u (); g.d (); };

		g.w.onclick = e.$;
		g.w.oncontextmenu = e._;
		g.w.onmousedown = e.$;
		g.w.onmousemove = e.$;
		g.w.onmouseup = e.$;
		g.w.onresize = e.$;
		g.w.ontick = e.$;

		delete g.e;
		g.e = e;
	},

	g: {
		set b (b) {
			b.id = b.id || 'button' + g.o.length;

			b.a = b.a || function () { g.w.l = b.id; b.wipe (); };
			b.c = b.c || {};
			b.c.b = b.c.b || '#000'; b.c.ba = b.c.ba || b.c.b; b.c.bd = b.c.b;
			b.c.t = b.c.t || '#fff'; b.c.ta = b.c.ta || b.c.t; b.c.td = b.c.t;
			b.in = b.in || function () {};
			b.out = b.out || function () {};
			b.over = false;
			b.wp = b.wp || 0.6;
			b.z = b.z || 0;

			b.action = function () { if (b.detect ()) { b.a (); }; };

			b.active = function () {
				if (b.detect ()) {
					if (!b.over) {
						b.over = true;
						if (b.c.ba) b.c.b = b.c.ba;
						if (b.c.ta) b.c.t = b.c.ta;
						if (b.c.ba || b.c.ta) b.s ();
						g.c.style.cursor = 'pointer'; b.in ();
					};
				}
				else {
					if (b.over) {
						b.over = false;
						if (b.c.ba) b.c.b = b.c.bd;
						if (b.c.ta) b.c.t = b.c.td;
						if (b.c.ba || b.c.ta) b.s ();
						g.c.style.cursor = 'default'; b.out ();
					};
				}};

			b.detect = function () {
				var x = g.e.x || g.e.clientX; var y = g.e.y || g.e.clientY;
					x = x / g.c.w () + 0.5 * b.w; y = y / g.c.h () + 0.5 * b.h;
				return ((x >= b.x) && (x <= b.x + b.w) && (y >= b.y) && (y <= b.y + b.h));
			};

			b.s = function () {
				g.c.wipe ({ id: b.id });
				b.h = (b.hk) ? (b.hk * b.w * g.c.w ()) / g.c.h () : b.h;
				b.w = (b.wk) ? (b.wk * b.h * g.c.h ()) / g.c.w () : b.w;
				g.d ({ f: b.c.b, h: b.h, id: b.id, w: b.w, x: b.x - 0.5 * b.w, y: b.y - 0.5 * b.h, z: b.z });
				g.d ({ f: b.c.t, h: b.h, id: b.id, t: b.t, ta: 'center', tb: 'middle', w: b.w * b.wp, x: b.x, y: b.y, z: b.z + 1 });
				g.c.d = true;
			};

			b.wipe = function () {
				g.c.style.cursor = 'default';
				g.w.wipe ({ id: b.id });
				g.c.wipe ({ id: b.id }, true);
			};

			b.u = function () { switch (g.e.type) {
				case 'mousedown': b.action (); break;
				case 'mousemove': b.active ();  break;
				case 'resize': b.s (); break;
			};};
			b.s ();
			g.o.push (b);
		}
	},

	i: {
		set l (l) {
			for (var id in l) {
				var i = new Image ();
					i.src = l[id];
				g.i[id] = i;
			};
		}
	},

	set l (l) { window.onload = function () { g.w (); g.c (); g.e (); l ();}; },

	lvl: {},
	o: [],

	r: function (a, b, c) {
		var r = Math.random ();
		if (a) {
			if (b) {
				if (typeof (b) == 'number') {
					r = (c != true) ? Math.random () * (b - a) + a : Math.floor (Math.random () * (b - a + 1)) + a;
				};
			};
		};
		return r;
	},

	s: [],

	w: function () {
		var w = window; w.d = w.document; w.d.b = w.d.body;
			w.h = w.innerHeight; w.w = w.innerWidth;
			w.i = 50; w.t = 0;

		Object.defineProperties (w, {
			'l': { set: function (l) { w.console.log (l); }},
			'ontick': { set: function (f) { w.c = w.setInterval (function () { f ({i: w.i, t: w.t, type: 'tick' }); w.t += w.i; }, w.i); }},
		});

		w.wipe = function (o) {
			var s = [];
			for (var i = g.o.length; i--;) {
				for (var k in o) {
					if (o[k] != g.o[i][k]) s.push (g.o[i]);
				};
			};
			g.o = s;
		};

		w.u = function () { switch (g.e.type) { case 'resize': w.h = w.innerHeight; w.w = w.innerWidth; break; };};
		delete g.w;
		g.w = w;
	},

	wipe: function (o) { g.o = []; g.s = []; g.c.d = true; g.c.style.cursor = 'default'; },

	u: function () { g.w.u (); g.c.u (); for (var i = g.o.length; i--;) if (g.o[i]) g.o[i].u (); }
};

g.i.l = {
};

g.l = function () {
	g.lvl.start ();
};

g.lvl.begin = function () {
	g.wipe ();
	g.w.t = 0;
};

g.lvl.start = function () {
	g.wipe ();
	g.c.b ('#0bc');
	g.g.b = { a: g.lvl.begin, c: { b: 'transparent', ba: 'transparent', t: '#0ab', ta: '#fff' }, h: 0.5, t: 'START', w: 0.5, wp: 1, x: 0.5, y: 0.5, z: 1 };
};