function _0x5e0c(_0x4fd724, _0x3bdf37) {
  const _0x2c1dc9 = _0x2c1d();
  return (
    (_0x5e0c = function (_0x5e0c25, _0x24f4e5) {
      _0x5e0c25 = _0x5e0c25 - 0x196;
      let _0x4ca2c4 = _0x2c1dc9[_0x5e0c25];
      return _0x4ca2c4;
    }),
    _0x5e0c(_0x4fd724, _0x3bdf37)
  );
}
function _0x2c1d() {
  const _0x33ed77 = [
    "submit",
    "2617056xJKLnt",
    "text-red-600",
    "DOMContentLoaded",
    "status",
    "add",
    "FAILED...",
    "value",
    "1351416LeVfXW",
    "send",
    "text-green-600",
    "4JW5-iQmneNc7OUGB",
    "1309548JsWLaF",
    "8227303OUXPIa",
    "Failed\x20to\x20send\x20message.\x20Please\x20try\x20again\x20later.",
    "mt-4\x20text-center",
    "<i\x20class=\x22fas\x20fa-spinner\x20fa-spin\x20mr-2\x22></i>\x20Sending...",
    "then",
    "Your\x20message\x20has\x20been\x20sent\x20successfully!",
    "service_9ag5d3g",
    "61942UIJdQy",
    "preventDefault",
    "template_wcsh828",
    "className",
    "querySelector",
    "reset",
    "catch",
    "form-message",
    "createElement",
    "success",
    "error",
    "textContent",
    "621990ZJvzKW",
    "1368320xcavav",
    "23HJTPrh",
    "disabled",
    "div",
    "Please\x20fill\x20in\x20all\x20fields",
    "init",
    "text",
    "subject",
    "addEventListener",
    "SUCCESS!",
    "10JXpOVw",
    "log",
    "getElementById",
    "bagusalmahenzar@gmail.com",
    "insertBefore",
    "contact-form",
    "classList",
    "innerHTML",
  ];
  _0x2c1d = function () {
    return _0x33ed77;
  };
  return _0x2c1d();
}
const _0x37de22 = _0x5e0c;
(function (_0x4c1347, _0xeffd1a) {
  const _0x4e9a36 = _0x5e0c,
    _0x236c49 = _0x4c1347();
  while (!![]) {
    try {
      const _0x498050 =
        (parseInt(_0x4e9a36(0x19e)) / 0x1) *
          (parseInt(_0x4e9a36(0x1c3)) / 0x2) +
        parseInt(_0x4e9a36(0x1b0)) / 0x3 +
        -parseInt(_0x4e9a36(0x19d)) / 0x4 +
        (parseInt(_0x4e9a36(0x1a7)) / 0x5) *
          (parseInt(_0x4e9a36(0x1bb)) / 0x6) +
        -parseInt(_0x4e9a36(0x1bc)) / 0x7 +
        parseInt(_0x4e9a36(0x1b7)) / 0x8 +
        parseInt(_0x4e9a36(0x19c)) / 0x9;
      if (_0x498050 === _0xeffd1a) break;
      else _0x236c49["push"](_0x236c49["shift"]());
    } catch (_0x4d9169) {
      _0x236c49["push"](_0x236c49["shift"]());
    }
  }
})(_0x2c1d, 0xb51c5),
  document[_0x37de22(0x1a5)](_0x37de22(0x1b2), function () {
    const _0x3df124 = _0x37de22;
    emailjs[_0x3df124(0x1a2)](_0x3df124(0x1ba));
    const _0x49b41d = document[_0x3df124(0x1a9)](_0x3df124(0x1ac)),
      _0x49c98a = document[_0x3df124(0x1c7)](
        "#contact-form\x20button[type=\x22submit\x22]"
      );
    _0x49b41d &&
      _0x49b41d[_0x3df124(0x1a5)](_0x3df124(0x1af), function (_0x397471) {
        const _0x640bb9 = _0x3df124;
        _0x397471[_0x640bb9(0x1c4)]();
        const _0x25473e = document[_0x640bb9(0x1a9)]("name")[_0x640bb9(0x1b6)],
          _0x379868 = document[_0x640bb9(0x1a9)]("email")["value"],
          _0x1b21e6 = document[_0x640bb9(0x1a9)](_0x640bb9(0x1a4))["value"],
          _0x414436 = document["getElementById"]("message")[_0x640bb9(0x1b6)];
        if (!_0x25473e || !_0x379868 || !_0x1b21e6 || !_0x414436) {
          _0x30bc1(_0x640bb9(0x1a1), "error");
          return;
        }
        if (!_0xc99c8(_0x379868)) {
          _0x30bc1(
            "Please\x20enter\x20a\x20valid\x20email\x20address",
            _0x640bb9(0x19a)
          );
          return;
        }
        (_0x49c98a[_0x640bb9(0x19f)] = !![]),
          (_0x49c98a[_0x640bb9(0x1ae)] = _0x640bb9(0x1bf));
        const _0x17380b = {
          name: _0x25473e,
          email: _0x379868,
          subject: _0x1b21e6,
          message: _0x414436,
          to_email: _0x640bb9(0x1aa),
        };
        emailjs[_0x640bb9(0x1b8)](_0x640bb9(0x1c2), _0x640bb9(0x1c5), _0x17380b)
          [_0x640bb9(0x1c0)](function (_0x98762f) {
            const _0x42ad4e = _0x640bb9;
            console["log"](
              _0x42ad4e(0x1a6),
              _0x98762f[_0x42ad4e(0x1b3)],
              _0x98762f[_0x42ad4e(0x1a3)]
            ),
              _0x30bc1(_0x42ad4e(0x1c1), _0x42ad4e(0x199)),
              _0x49b41d[_0x42ad4e(0x1c8)]();
          })
          [_0x640bb9(0x196)](function (_0x43db8e) {
            const _0x5be35e = _0x640bb9;
            console[_0x5be35e(0x1a8)](_0x5be35e(0x1b5), _0x43db8e),
              _0x30bc1(_0x5be35e(0x1bd), _0x5be35e(0x19a));
          })
          ["finally"](function () {
            const _0xf8aaff = _0x640bb9;
            (_0x49c98a[_0xf8aaff(0x19f)] = ![]),
              (_0x49c98a[_0xf8aaff(0x1ae)] = "Send\x20Message");
          });
      });
    function _0xc99c8(_0x67f3d3) {
      const _0x2d2afa = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return _0x2d2afa["test"](_0x67f3d3);
    }
    function _0x30bc1(_0x45aaa6, _0x92978c) {
      const _0x15adcc = _0x3df124,
        _0x4eac7f = document["getElementById"](_0x15adcc(0x197));
      if (_0x4eac7f) {
        (_0x4eac7f[_0x15adcc(0x19b)] = _0x45aaa6),
          (_0x4eac7f[_0x15adcc(0x1c6)] = "mt-4\x20text-center");
        if (_0x92978c === _0x15adcc(0x19a))
          _0x4eac7f[_0x15adcc(0x1ad)][_0x15adcc(0x1b4)](_0x15adcc(0x1b1));
        else
          _0x92978c === _0x15adcc(0x199) &&
            _0x4eac7f[_0x15adcc(0x1ad)][_0x15adcc(0x1b4)](_0x15adcc(0x1b9));
        setTimeout(() => {
          const _0x4692aa = _0x15adcc;
          (_0x4eac7f[_0x4692aa(0x19b)] = ""),
            (_0x4eac7f[_0x4692aa(0x1c6)] = _0x4692aa(0x1be));
        }, 0x1388);
      } else {
        const _0x2e8077 = document[_0x15adcc(0x198)](_0x15adcc(0x1a0));
        (_0x2e8077["id"] = _0x15adcc(0x197)),
          (_0x2e8077[_0x15adcc(0x1c6)] = "mt-4\x20text-center"),
          (_0x2e8077[_0x15adcc(0x19b)] = _0x45aaa6);
        if (_0x92978c === _0x15adcc(0x19a))
          _0x2e8077[_0x15adcc(0x1ad)][_0x15adcc(0x1b4)](_0x15adcc(0x1b1));
        else
          _0x92978c === _0x15adcc(0x199) &&
            _0x2e8077[_0x15adcc(0x1ad)]["add"](_0x15adcc(0x1b9));
        _0x49b41d["parentNode"][_0x15adcc(0x1ab)](
          _0x2e8077,
          _0x49b41d["nextSibling"]
        ),
          setTimeout(() => {
            const _0x15f000 = _0x15adcc;
            (_0x2e8077[_0x15f000(0x19b)] = ""),
              (_0x2e8077[_0x15f000(0x1c6)] = _0x15f000(0x1be));
          }, 0x1388);
      }
    }
  });
