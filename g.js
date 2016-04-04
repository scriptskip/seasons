var g = {
	a: {
		set l (l) { for (var id in l) { var a = new Audio (l[id]); g.a[id] = a; }; },
		p: function (a, b, c) { if (typeof (a) == 'string') a = new Audio (a); a.loop = (c); a.volume = b || 0.5; a.play (); return a; }
	},

	c: function () {
		var c = g.w.d.createElement ('canvas');
			c.c = c.getContext ('2d');
			c.d = true;
			c.ff = 'Arial';
			c.z = 0;

			c.a = function () { c.h (g.w.h); c.w (g.w.w); g.c.d = true; };
			c.b = function (c) { g.c.style.background = c; };
			c.bg = function (i) { g.c.style.background = 'transparent'; g.w.d.b.style.background = 'url(' + i.src + ')'; };
			c.fs = function (o) {
				var fs = o.h || c.H * 0.5;
				g.c.c.font = fs + 'px ' + c.ff;

				var w = g.c.c.measureText (o.t).width;
				var W = o.w * c.W;
				while (Math.abs (w - W) > 5) {
					fs = (w < W) ? fs * 1.6 : fs * 0.8;
					g.c.c.font = fs + 'px ' + c.ff;
					w = g.c.c.measureText (o.t).width;
				};
				return fs;
			};
			c.h = function (h) { c.H = h; c.height = c.H; };
			c.hk = function (o) { return (o.hk) ? (o.hk * o.w * g.c.W) / g.c.H : o.h };
			c.hwxy = function (o, x, y) {
				var r = {}; x = x || 0.5; y = y || 0.5;
				o.h = g.c.hk (o);
				o.w = g.c.wk (o);
				r.x = o.x - x * o.w;
				r.y = o.y - y * o.h;
				r.h = o.h;
				r.w = o.w;
				return r;
			};
			c.w = function (w) { c.W = w; c.width = c.W; };
			c.wk = function (o) { return (o.wk) ? (o.wk * o.h * g.c.H) / g.c.W : o.w };
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
			g.c.c.clearRect (0, 0, g.c.W, g.c.H);
			for (var z = 0; z <= g.c.z; z++) {
				for (var id = g.s.length; id--;) {
					var c = g.s[id];
					if (c.z == z) {
						var a = c.a * g.c.W >> 0;
						var b = c.b * g.c.H>> 0;
						var cos = c.cos || 2 * Math.PI;
						var h = c.h * g.c.H >> 0;
						var r = c.r * Math.min (g.c.H, g.c.W) >> 0;
						var sin = c.sin || 0;
						var w = c.w * g.c.W >> 0;
						var x = c.x * g.c.W >> 0;
						var y = c.y * g.c.H >> 0;

						if (c.f) g.c.c.fillStyle = c.f;
						if (c.lw) g.c.c.lineWidth = Math.floor (c.lw * Math.min (g.c.H, g.c.W));
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
			if (g.op.fps) g.w.l = 'draw: ' + g.s.length;
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
		set area (a) {
			a.id = a.id || 'area' + g.o.length;

			a.hk = 1.4; a.w = 0.1;
			a.i = g.i.soil;
			a.x = 0.5; a.y = 0.5;

			a.s = function () {
				g.g.b = { a: a.a, h: a.h, hk: a.hk, i: a.i, id: a.id, in: a.in, out: a.out, w: a.w, wk: a.wk, x: a.x, y: a.y, z: a.z };
			};

			a.u = function () { switch (g.e.type) {
				case 'resize': a.s ();
			};};
			a.s ();
			g.o.push (a);
		},

		set b (b) {
			b.id = b.id || 'button' + g.o.length;

			b.a = b.a || function () { g.w.l = b.id; b.wipe (); };
			b.c = b.c; if (b.c) {
				b.c.b = b.c.b || '#000'; b.c.ba = b.c.ba || b.c.b; b.c.bd = b.c.b;
				b.c.t = b.c.t || '#fff'; b.c.ta = b.c.ta || b.c.t; b.c.td = b.c.t;
			};
			b.cursor = true;
			b.in = b.in || function () {};
			b.out = b.out || function () {};
			b.over = false;
			b.wp = b.wp || 0.6;
			b.z = b.z || 0;

			b.action = function () { if (b.detect ()) { b.a (); } else { if (!b.cursor) { b.cursor = true; g.c.style.cursor = 'default'; }; }; };

			b.active = function () {
				if (b.detect ()) {
					if (!b.over) {
						b.over = true; b.in ();
						if (b.c) {
							if (b.c.ba) b.c.b = b.c.ba;
							if (b.c.ta) b.c.t = b.c.ta;
						};
						b.s ();
						if (b.cursor) g.c.style.cursor = 'pointer';
					};
				}
				else {
					if (b.over) {
						b.over = false; b.out ();
						if (b.c) {
							if (b.c.ba) b.c.b = b.c.bd;
							if (b.c.ta) b.c.t = b.c.td;
						};
						b.s ();
						if (b.cursor) g.c.style.cursor = 'default';
					};
				}};

			b.detect = function () {
				var x = g.e.x || g.e.clientX; var y = g.e.y || g.e.clientY;
					x = x / g.c.W + 0.5 * b.w; y = y / g.c.H + 0.5 * b.h;
				return ((x >= b.x) && (x <= b.x + b.w) && (y >= b.y) && (y <= b.y + b.h));
			};

			b.s = function () {
				g.c.wipe ({ id: b.id });
				var o = g.c.hwxy (b);
				if (b.t) g.d ({ f: b.c.t, h: o.h, id: b.id, t: b.t, ta: 'center', tb: 'middle', w: o.w * b.wp, x: b.x, y: b.y, z: b.z });
				if (b.i) g.d ({ h: o.h, i: b.i, id: b.id, w: o.w, x: o.x, y: o.y, z: b.z });
				if (b.c) g.d ({ f: b.c.b, h: o.h, id: b.id, w: o.w, x: o.x, y: o.y, z: b.z });
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
		},

		set build (b) {
			b.id = b.id || 'build' + g.o.length;

			b.a0 = b.a0 || g.a.tock; b.a1 = b.a1 || g.a.tock2;
			b.drag = 0; b.drago = 1;
			b.hk = b.hk || 1.8; b.w = b.w || 0.04;
			b.i = b.i || g.i.home; b.i0 = b.i; b.i1 = b.i1 || b.i;
			b.x = b.x || 0.35; b.y = b.y || 0.87; b.yin = b.y - 0.02;
			b.z = b.z || 1;

			b.a = function () {
				g.w.wipe ({ id: this.id });
				g.c.wipe ({ id: this.id });
				b.drag = 1;
			};
			b.docked = function () {
				return ((Math.abs (g.op.dock.y - b.y) < 0.5 * g.op.dock.h) && (Math.abs (g.op.dock.x - b.x) < 0.5 * g.op.dock.w));
			};
			b.drop = function () {
				if (b.drag > 2) {
					b.drag = 0;
					g.c.wipe ({ id: this.id });
					b.b ();
					if (!b.docked()) g.a.p (b.a1);
				};
			};
			b.move = function () {
				if (b.drag > 0) { b.drag++;
					b.x = g.e.x / g.c.W; b.y = g.e.y / g.c.H;
					var opt = 1000 / (g.w.t / b.drago) >> 0;
					if (opt < 995) { b.drag = 3; b.drago = g.w.t; b.s (); };
				};
			};
			b.in = function () {
				if (b.docked ()) {
					this.i = b.i1; this.y -= 0.01;
				};
			};
			b.out = function () {
				if (b.docked ()) {
					this.i = b.i0; this.y += 0.01; g.a.p (b.a0);
				};
			};

			b.b = function () {
				g.g.b = { a: b.a, h: b.h, hk: b.hk, i: b.i, id: 'button' + b.id, in: b.in, out: b.out, w: b.w, wk: b.wk, x: b.x, y: b.y, z: b.z };
			};

			b.s = function () {
				g.c.wipe ({ id: b.id });
				var o = g.c.hwxy (b);
				g.d ({ h: o.h, i: b.i1, id: b.id, w: o.w, x: o.x, y: o.y, z: b.z + 1 });
				g.c.d = true;
			};
			b.u = function () { switch (g.e.type) {
				case 'click': b.drop (); break;
				case 'mousemove': b.move (); break;
			};};
			b.b ();
			g.o.push (b);
		},

		set d (d) {
			d.id = 'dock';

			d.ahy = 0.7 * g.c.H;
			d.hide = true;
			d.hk = 0.1; d.w = d.w || g.op.dock.w;
			d.i = g.i.dock;
			d.x = d.x || 0.5; d.y = d.y || g.op.dock.y;
			d.z = d.z || 0;

			d.ah = function () {
				if (g.op.dock.auto) {
					if (g.e.y > d.ahy) { if (d.hide) { d.hide = false; d.s (); };
					} else { if (!d.hide) { d.hide = true; g.c.wipe ({id: d.id}); g.c.d = true; };};
				 };
			};

			d.s = function () {
				g.c.wipe ({id: d.id});
				var o = g.c.hwxy (d);
				g.op.dock.h = o.h;
				g.d ({ h: o.h, i: d.i, id: d.id, w: o.w, x: o.x, y: o.y, z: d.z });
				g.c.d = true;
			};

			d.u = function () { switch (g.e.type) {
				case 'mousemove': d.ah (); break;
				case 'resize': d.s (); break;
			};};
			g.g.home = {};
			d.s ();
			g.o.push (d);
		}
	},

	i: { set l (l) { for (var id in l) { var i = new Image (); i.src = l[id]; g.i[id] = i; };}},

	set run (l) { window.onload = function () { g.w (); g.c (); g.e (); l ();}; },

	lvl: {},
	o: [],

	op: {
		dock: { auto: false, w: 0.55, x: 0.5, y: 0.9 },
		fps: true
	},

	r: function (a, b, c) {
		var r = Math.random ();
		if (a) {
			if (b) {
				if (typeof (b) == 'number') {
					r = (c != true) ? Math.random () * (b - a) + a : (Math.random () * (b - a + 1) + a) >> 0;
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

g.a.l = {
	begin: 'data/begin.ogg',
	tk: 'data/tk.ogg',
	tock: 'data/tock.ogg', tock2: 'data/tock2.ogg'
};

g.i.l = {
	dock: 'data/dock.svg',
	hammer: 'data/hammer.svg', hammer_cursor: 'data/hammer_cursor.png', hammer_up: 'data/hammer_up.svg',
	home: 'data/home.svg',
	grass: 'data/grass.png', grass_fall: 'data/grass_fall.png', grass_spring: 'data/grass_spring.png',
	snow: 'data/snow.png',
	soil: 'data/soil.svg'
};

g.run = function () {
	g.lvl.start ();
};

g.lvl.begin = function () {
	g.wipe ();
	g.c.bg (g.i.grass);
	g.w.t = 0;
	g.g.d = {};
	g.g.build = { a1: g.a.tock, hk: 0.9, id: 'hammer', i: g.i.hammer, i1: g.i.hammer_up, w: 0.05, x: 0.3, y: 0.9 };
	g.g.build = { a1: g.a.tock2, hk: 1.8, id: 'home', i: g.i.home, i1: g.i.home, w: 0.05, x: 0.4, y: 0.85 };
	g.a.p (g.a.begin, 1);
};

g.lvl.option = function () {

};

g.lvl.start = function () {
	g.wipe ();
	g.c.b ('#000');
	g.g.b = { a: g.lvl.begin, c: { b: 'transparent', ba: 'transparent', t: '#777', ta: '#fff' }, h: 0.5, t: 'START', w: 0.3, wp: 1, x: 0.5, y: 0.5, z: 1 };
};