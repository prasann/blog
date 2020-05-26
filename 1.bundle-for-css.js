webpackJsonp([1],{

/***/ 498:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _InfoBox = __webpack_require__(499);

	Object.defineProperty(exports, "default", {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_InfoBox).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = exports["default"];

/***/ }),

/***/ 499:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(147);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _reactJss = __webpack_require__(259);

	var _reactJss2 = _interopRequireDefault(_reactJss);

	var _reactRedux = __webpack_require__(157);

	var _SocialIcons = __webpack_require__(500);

	var _SocialIcons2 = _interopRequireDefault(_SocialIcons);

	var _InfoMenu = __webpack_require__(504);

	var _InfoMenu2 = _interopRequireDefault(_InfoMenu);

	var _InfoHeader = __webpack_require__(505);

	var _InfoHeader2 = _interopRequireDefault(_InfoHeader);

	var _InfoText = __webpack_require__(507);

	var _InfoText2 = _interopRequireDefault(_InfoText);

	var _StackIcons = __webpack_require__(508);

	var _StackIcons2 = _interopRequireDefault(_StackIcons);

	var _shared = __webpack_require__(399);

	var _store = __webpack_require__(186);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	__webpack_require__(514);

	var styles = function styles(theme) {
	  var _infoBox;

	  return {
	    infoBox: (_infoBox = {
	      display: "none"
	    }, _infoBox["@media (min-width: " + theme.mediaQueryTresholds.L + "px)"] = {
	      display: "block",
	      color: theme.info.colors.text,
	      background: theme.info.colors.background,
	      position: "absolute",
	      left: 0,
	      top: 0,
	      width: theme.info.sizes.width + "px",
	      height: "100%",
	      padding: "20px 40px",
	      "&::after": {
	        content: "\"\"",
	        position: "absolute",
	        right: 0,
	        top: "20px",
	        bottom: "20px",
	        width: "1px",
	        borderRight: "1px solid " + theme.base.colors.lines
	      }
	    }, _infoBox),
	    wrapper: {
	      position: "absolute",
	      top: theme.info.sizes.headerHeight + "px",
	      bottom: 0,
	      left: 0,
	      width: "100%",
	      padding: "0 40px 0",
	      willChange: "opacity, bottom",
	      transition: "bottom .5s 0s",
	      opacity: 1,
	      transitionTimingFunction: "ease",
	      ".is-aside.closed &": {
	        bottom: theme.navigator.sizes.closedHeight + "px"
	      },
	      ".moving-featured &": {
	        bottom: 0
	      }
	    }
	  };
	};

	var InfoBox = function (_React$Component) {
	  _inherits(InfoBox, _React$Component);

	  function InfoBox() {
	    var _temp, _this, _ret;

	    _classCallCheck(this, InfoBox);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.avatarOnClick = _shared.featureNavigator.bind(_this), _this.menulinkOnClick = _shared.moveNavigatorAside.bind(_this), _this.expandOnClick = function (e) {
	      _this.props.setNavigatorShape("closed");
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  InfoBox.prototype.render = function render() {
	    var _props = this.props,
	        classes = _props.classes,
	        parts = _props.parts,
	        pages = _props.pages,
	        navigatorPosition = _props.navigatorPosition,
	        navigatorShape = _props.navigatorShape;

	    var info = parts.find(function (el) {
	      return el.node.frontmatter.title === "info";
	    });

	    return _react2.default.createElement(
	      "aside",
	      {
	        className: classes.infoBox + " " + (navigatorPosition ? navigatorPosition : "") + "\n        " + (navigatorShape ? navigatorShape : "")
	      },
	      info && _react2.default.createElement(_InfoHeader2.default, {
	        info: info,
	        avatarOnClick: this.avatarOnClick,
	        expandOnClick: this.expandOnClick
	      }),
	      _react2.default.createElement(
	        "div",
	        { className: classes.wrapper },
	        info && _react2.default.createElement(_InfoText2.default, { info: info }),
	        _react2.default.createElement(_SocialIcons2.default, null),
	        pages && _react2.default.createElement(_InfoMenu2.default, { pages: pages, linkOnClick: this.menulinkOnClick })
	      )
	    );
	  };

	  return InfoBox;
	}(_react2.default.Component);

	InfoBox.propTypes = {
	  classes: _propTypes2.default.object.isRequired,
	  parts: _propTypes2.default.array.isRequired,
	  pages: _propTypes2.default.array.isRequired,
	  navigatorPosition: _propTypes2.default.string.isRequired,
	  navigatorShape: _propTypes2.default.string.isRequired,
	  isWideScreen: _propTypes2.default.bool.isRequired,
	  setNavigatorShape: _propTypes2.default.func.isRequired
	};

	var mapStateToProps = function mapStateToProps(state, ownProps) {
	  return {
	    navigatorPosition: state.navigatorPosition,
	    navigatorShape: state.navigatorShape,
	    isWideScreen: state.isWideScreen
	  };
	};

	var mapDispatchToProps = {
	  setNavigatorPosition: _store.setNavigatorPosition,
	  setNavigatorShape: _store.setNavigatorShape
	};

	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)((0, _reactJss2.default)(styles)(InfoBox));
	module.exports = exports["default"];

/***/ }),

/***/ 500:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(147);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _reactJss = __webpack_require__(259);

	var _reactJss2 = _interopRequireDefault(_reactJss);

	var _config = __webpack_require__(491);

	var _config2 = _interopRequireDefault(_config);

	var _github = __webpack_require__(501);

	var _github2 = _interopRequireDefault(_github);

	var _facebook = __webpack_require__(502);

	var _facebook2 = _interopRequireDefault(_facebook);

	var _twitter = __webpack_require__(503);

	var _twitter2 = _interopRequireDefault(_twitter);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var styles = function styles(theme) {
	  return {
	    social: {
	      display: "flex",
	      justifyContent: "center",
	      flexWrap: "wrap"
	    },
	    link: {
	      display: "inline-block",
	      padding: "5px",
	      "&:hover": {
	        "& svg": {
	          fill: theme.info.colors.socialIconsHover
	        }
	      }
	    },
	    svg: {
	      width: "40px",
	      height: "40px",
	      fill: theme.info.colors.socialIcons,
	      transition: "all .5s"
	    }
	  };
	};

	var Socialcons = function Socialcons(props) {
	  var classes = props.classes;

	  var items = _config2.default.authorSocialLinks;
	  var icons = {
	    twitter: _twitter2.default,
	    facebook: _facebook2.default,
	    github: _github2.default
	  };

	  return _react2.default.createElement(
	    "div",
	    { className: classes.social },
	    items.map(function (item) {
	      var Icon = icons[item.name];
	      return _react2.default.createElement(
	        "a",
	        {
	          href: item.url,
	          key: item.name,
	          className: classes.link,
	          target: "_blank",
	          rel: "noopener noreferrer",
	          title: item.name
	        },
	        _react2.default.createElement(Icon, { className: classes.svg })
	      );
	    })
	  );
	};

	Socialcons.propTypes = {
	  classes: _propTypes2.default.object.isRequired
	};

	exports.default = (0, _reactJss2.default)(styles)(Socialcons);
	module.exports = exports["default"];

/***/ }),

/***/ 501:
/***/ (function(module, exports, __webpack_require__) {

	var React = __webpack_require__(1);

	function GithubIcon (props) {
	    return React.createElement("svg",props,React.createElement("path",{"d":"M256 70.7c-102.6 0-185.9 83.2-185.9 185.9 0 82.1 53.3 151.8 127.1 176.4 9.3 1.7 12.3-4 12.3-8.9V389.4c-51.7 11.3-62.5-21.9-62.5-21.9 -8.4-21.5-20.6-27.2-20.6-27.2 -16.9-11.5 1.3-11.3 1.3-11.3 18.7 1.3 28.5 19.2 28.5 19.2 16.6 28.4 43.5 20.2 54.1 15.4 1.7-12 6.5-20.2 11.8-24.9 -41.3-4.7-84.7-20.6-84.7-91.9 0-20.3 7.3-36.9 19.2-49.9 -1.9-4.7-8.3-23.6 1.8-49.2 0 0 15.6-5 51.1 19.1 14.8-4.1 30.7-6.2 46.5-6.3 15.8 0.1 31.7 2.1 46.6 6.3 35.5-24 51.1-19.1 51.1-19.1 10.1 25.6 3.8 44.5 1.8 49.2 11.9 13 19.1 29.6 19.1 49.9 0 71.4-43.5 87.1-84.9 91.7 6.7 5.8 12.8 17.1 12.8 34.4 0 24.9 0 44.9 0 51 0 4.9 3 10.7 12.4 8.9 73.8-24.6 127-94.3 127-176.4C441.9 153.9 358.6 70.7 256 70.7z"}));
	}

	GithubIcon.defaultProps = {"viewBox":"0 0 512 512"};

	module.exports = GithubIcon;

	GithubIcon.default = GithubIcon;


/***/ }),

/***/ 502:
/***/ (function(module, exports, __webpack_require__) {

	var React = __webpack_require__(1);

	function FacebookIcon (props) {
	    return React.createElement("svg",props,React.createElement("path",{"d":"M211.9 197.4h-36.7v59.9h36.7V433.1h70.5V256.5h49.2l5.2-59.1h-54.4c0 0 0-22.1 0-33.7 0-13.9 2.8-19.5 16.3-19.5 10.9 0 38.2 0 38.2 0V82.9c0 0-40.2 0-48.8 0 -52.5 0-76.1 23.1-76.1 67.3C211.9 188.8 211.9 197.4 211.9 197.4z"}));
	}

	FacebookIcon.defaultProps = {"viewBox":"0 0 512 512"};

	module.exports = FacebookIcon;

	FacebookIcon.default = FacebookIcon;


/***/ }),

/***/ 503:
/***/ (function(module, exports, __webpack_require__) {

	var React = __webpack_require__(1);

	function TwitterIcon (props) {
	    return React.createElement("svg",props,React.createElement("path",{"d":"M419.6 168.6c-11.7 5.2-24.2 8.7-37.4 10.2 13.4-8.1 23.8-20.8 28.6-36 -12.6 7.5-26.5 12.9-41.3 15.8 -11.9-12.6-28.8-20.6-47.5-20.6 -42 0-72.9 39.2-63.4 79.9 -54.1-2.7-102.1-28.6-134.2-68 -17 29.2-8.8 67.5 20.1 86.9 -10.7-0.3-20.7-3.3-29.5-8.1 -0.7 30.2 20.9 58.4 52.2 64.6 -9.2 2.5-19.2 3.1-29.4 1.1 8.3 25.9 32.3 44.7 60.8 45.2 -27.4 21.4-61.8 31-96.4 27 28.8 18.5 63 29.2 99.8 29.2 120.8 0 189.1-102.1 185-193.6C399.9 193.1 410.9 181.7 419.6 168.6z"}));
	}

	TwitterIcon.defaultProps = {"viewBox":"0 0 512 512"};

	module.exports = TwitterIcon;

	TwitterIcon.default = TwitterIcon;


/***/ }),

/***/ 504:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(147);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _reactJss = __webpack_require__(259);

	var _reactJss2 = _interopRequireDefault(_reactJss);

	var _gatsbyLink = __webpack_require__(17);

	var _gatsbyLink2 = _interopRequireDefault(_gatsbyLink);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var styles = function styles(theme) {
	  return {
	    infoMenu: {
	      display: "flex",
	      flexDirection: "column",
	      alignItems: "center",
	      listStyle: "none",
	      margin: 0,
	      width: "100%"
	    },
	    link: {
	      padding: ".5em",
	      fontWeight: 300,
	      textTransform: "lowercase",
	      color: theme.info.colors.menuLink,
	      "&:hover": {
	        color: theme.info.colors.menuLinkHover
	      }
	    }
	  };
	};

	var InfoMenu = function InfoMenu(props) {
	  var classes = props.classes,
	      pages = props.pages,
	      linkOnClick = props.linkOnClick;


	  return _react2.default.createElement(
	    "nav",
	    { className: classes.infoMenu },
	    pages.map(function (page, i) {
	      var _page$node = page.node,
	          fields = _page$node.fields,
	          frontmatter = _page$node.frontmatter;

	      return _react2.default.createElement(
	        _gatsbyLink2.default,
	        {
	          key: fields.slug,
	          to: fields.slug,
	          onClick: linkOnClick,
	          className: classes.link,
	          "data-shape": "closed"
	        },
	        frontmatter.menuTitle ? frontmatter.menuTitle : frontmatter.title
	      );
	    }),
	    _react2.default.createElement(
	      _gatsbyLink2.default,
	      { to: "/contact/", onClick: linkOnClick, className: classes.link, "data-shape": "closed" },
	      "Contact"
	    )
	  );
	};

	InfoMenu.propTypes = {
	  pages: _propTypes2.default.array.isRequired,
	  classes: _propTypes2.default.object.isRequired,
	  linkOnClick: _propTypes2.default.func.isRequired
	};

	exports.default = (0, _reactJss2.default)(styles)(InfoMenu);
	module.exports = exports["default"];

/***/ }),

/***/ 505:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(147);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _reactJss = __webpack_require__(259);

	var _reactJss2 = _interopRequireDefault(_reactJss);

	var _gatsbyLink = __webpack_require__(17);

	var _gatsbyLink2 = _interopRequireDefault(_gatsbyLink);

	var _IconButton = __webpack_require__(402);

	var _IconButton2 = _interopRequireDefault(_IconButton);

	var _ExpandMore = __webpack_require__(506);

	var _ExpandMore2 = _interopRequireDefault(_ExpandMore);

	var _avatar2 = __webpack_require__(492);

	var _avatar3 = _interopRequireDefault(_avatar2);

	var _config = __webpack_require__(491);

	var _config2 = _interopRequireDefault(_config);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var styles = function styles(theme) {
	  var _avatarLink, _avatar, _title;

	  return {
	    header: {
	      lineHeight: 1,
	      position: "relative"
	    },
	    avatarLink: (_avatarLink = {
	      willChange: "left, top",
	      float: "left",
	      display: "block",
	      position: "relative",
	      margin: "0 12px 0 0"
	    }, _avatarLink["@media (min-width: " + theme.mediaQueryTresholds.M + "px)"] = {
	      margin: "0 20px 0 0"
	    }, _avatarLink["@media (min-width: " + theme.mediaQueryTresholds.L + "px)"] = {
	      position: "absolute",
	      top: "10px",
	      left: "50%",
	      marginLeft: "-30px",
	      transition: "all .5s",
	      transitionTimingFunction: "ease",
	      ".navigator-in-transition-from.navigator-is-opened &": {
	        left: "50%"
	      },
	      ".is-aside.open &": {
	        left: "8%",
	        top: "0"
	      }
	    }, _avatarLink),
	    avatar: (_avatar = {
	      width: "36px",
	      height: "36px",
	      borderRadius: "65% 75%",
	      border: "1px solid #ddd",
	      transition: "all .3s",
	      transitionTimingFunction: "ease",
	      display: "inline-block",
	      overflow: "hidden",
	      "& img": {
	        maxWidth: "100%"
	      }
	    }, _avatar["@media (min-width: " + theme.mediaQueryTresholds.M + "px)"] = {
	      width: "44px",
	      height: "44px"
	    }, _avatar["@media (min-width: " + theme.mediaQueryTresholds.L + "px)"] = {
	      width: "60px",
	      height: "60px"
	    }, _avatar["@media (hover: hover)"] = {
	      "&:hover": {
	        borderRadius: "75% 65%"
	      }
	    }, _avatar),
	    title: (_title = {
	      willChange: "transform, left, top",
	      fontSize: theme.info.fonts.boxTitleSize + "em",
	      margin: 0,
	      float: "left",
	      transitionTimingFunction: "ease",
	      "& small": {
	        display: "block",
	        fontSize: ".6em",
	        marginTop: ".3em"
	      }
	    }, _title["@media (min-width: " + theme.mediaQueryTresholds.M + "px)"] = {
	      fontSize: theme.info.fonts.boxTitleSizeM + "em"
	    }, _title["@media (min-width: " + theme.mediaQueryTresholds.L + "px)"] = {
	      fontSize: theme.info.fonts.boxTitleSizeL + "em",
	      position: "absolute",
	      top: "85px",
	      textAlign: "center",
	      left: "50%",
	      transform: "translate(-50%)",
	      transition: "all .5s",
	      ".is-aside.open &": {
	        left: "60%",
	        top: 1.9 - theme.info.fonts.boxTitleSizeL + "em",
	        textAlign: "left"
	      }
	    }, _title),
	    expand: {
	      position: "absolute",
	      top: "30px",
	      right: "-25px",
	      display: "none",
	      color: theme.info.colors.text,
	      ".is-aside.open &": {
	        display: "block"
	      }
	    }
	  };
	};

	var InfoHeader = function InfoHeader(props) {
	  var classes = props.classes,
	      avatarOnClick = props.avatarOnClick,
	      expandOnClick = props.expandOnClick;


	  return _react2.default.createElement(
	    "header",
	    { className: classes.header },
	    _react2.default.createElement(
	      _gatsbyLink2.default,
	      { className: classes.avatarLink, onClick: avatarOnClick, to: "/", title: "back to Home page" },
	      _react2.default.createElement(
	        "div",
	        { className: classes.avatar },
	        _react2.default.createElement("img", { src: _avatar3.default, alt: "" })
	      )
	    ),
	    _react2.default.createElement(
	      "h1",
	      { className: classes.title },
	      _config2.default.infoTitle.replace(/ /g, "\xA0"),
	      _react2.default.createElement(
	        "small",
	        null,
	        _config2.default.infoTitleNote
	      )
	    ),
	    _react2.default.createElement(
	      _IconButton2.default,
	      {
	        "aria-label": "Expand the box",
	        className: classes.expand,
	        onClick: expandOnClick,
	        title: "Expand the box"
	      },
	      _react2.default.createElement(_ExpandMore2.default, null)
	    )
	  );
	};

	InfoHeader.propTypes = {
	  classes: _propTypes2.default.object.isRequired,
	  avatarOnClick: _propTypes2.default.func.isRequired,
	  expandOnClick: _propTypes2.default.func.isRequired
	};

	exports.default = (0, _reactJss2.default)(styles)(InfoHeader);
	module.exports = exports["default"];

/***/ }),

/***/ 506:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	var _interopRequireDefault = __webpack_require__(422);

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = void 0;

	var _react = _interopRequireDefault(__webpack_require__(1));

	var _createSvgIcon = _interopRequireDefault(__webpack_require__(423));

	var _default = (0, _createSvgIcon.default)(_react.default.createElement("g", null, _react.default.createElement("path", {
	  d: "M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"
	})), 'ExpandMore');

	exports.default = _default;

/***/ }),

/***/ 507:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(147);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _reactJss = __webpack_require__(259);

	var _reactJss2 = _interopRequireDefault(_reactJss);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var styles = function styles(theme) {
	  return {
	    text: {
	      display: "block",
	      fontWeight: 300,
	      lineHeight: 1.5,
	      fontSize: ".95em",
	      textAlign: "left",
	      marginBottom: ".8em",
	      "& p:first-child": {
	        marginTop: 0
	      },
	      "& p:last-child": {
	        marginBottom: 0
	      }
	    }
	  };
	};

	var InfoText = function InfoText(props) {
	  var classes = props.classes,
	      info = props.info;

	  var text = info.node.html;

	  return _react2.default.createElement("div", { className: classes.text, dangerouslySetInnerHTML: { __html: text } });
	};

	InfoText.propTypes = {
	  classes: _propTypes2.default.object.isRequired,
	  info: _propTypes2.default.object.isRequired
	};

	exports.default = (0, _reactJss2.default)(styles)(InfoText);
	module.exports = exports["default"];

/***/ }),

/***/ 508:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(147);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _reactJss = __webpack_require__(259);

	var _reactJss2 = _interopRequireDefault(_reactJss);

	var _react3 = __webpack_require__(509);

	var _react4 = _interopRequireDefault(_react3);

	var _jss = __webpack_require__(510);

	var _jss2 = _interopRequireDefault(_jss);

	var _redux = __webpack_require__(511);

	var _redux2 = _interopRequireDefault(_redux);

	var _webpack = __webpack_require__(512);

	var _webpack2 = _interopRequireDefault(_webpack);

	var _babel = __webpack_require__(513);

	var _babel2 = _interopRequireDefault(_babel);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var styles = function styles(theme) {
	  var _stack;

	  return {
	    stack: (_stack = {
	      display: "none"
	    }, _stack["@media (min-width: " + theme.mediaQueryTresholds.L + "px)"] = {
	      display: "block",
	      position: "absolute",
	      left: 0,
	      bottom: 0,
	      width: "100%",
	      padding: "1em 2em"
	    }, _stack),
	    box: {
	      display: "flex",
	      justifyContent: "center",
	      flexWrap: "wrap"
	    },
	    link: {
	      display: "inline-block",
	      padding: "8px"
	    },
	    svg: {
	      width: "22px",
	      height: "22px"
	    },
	    header: {
	      textAlign: "center",
	      fontSize: ".85em",
	      letterSpacing: ".3em",
	      width: "100%",
	      margin: "0 0 .8em 0",
	      fontWeight: 300
	    }
	  };
	};

	var StackIcons = function StackIcons(props) {
	  var classes = props.classes;


	  var items = [{ name: "react", url: "https://reactjs.org/", comp: _react4.default }, { name: "jss", url: "http://cssinjs.org/", comp: _jss2.default }, { name: "redux", url: "https://redux.js.org/", comp: _redux2.default }, { name: "webpack", url: "https://webpack.js.org/", comp: _webpack2.default }, { name: "babel", url: "https://babeljs.io/", comp: _babel2.default }];

	  return _react2.default.createElement(
	    "div",
	    { className: classes.stack },
	    _react2.default.createElement(
	      "h5",
	      { className: classes.header },
	      "familiar with:"
	    ),
	    _react2.default.createElement(
	      "div",
	      { className: classes.box },
	      items.map(function (item) {
	        var Icon = item.comp;
	        return _react2.default.createElement(
	          "a",
	          {
	            href: item.url,
	            key: item.name,
	            className: classes.link,
	            target: "_blank",
	            rel: "noopener noreferrer",
	            title: item.name
	          },
	          _react2.default.createElement(Icon, { className: classes.svg })
	        );
	      })
	    )
	  );
	};

	StackIcons.propTypes = {
	  classes: _propTypes2.default.object.isRequired
	};

	exports.default = (0, _reactJss2.default)(styles)(StackIcons);
	module.exports = exports["default"];

/***/ }),

/***/ 509:
/***/ (function(module, exports, __webpack_require__) {

	var React = __webpack_require__(1);

	function ReactIcon (props) {
	    return React.createElement("svg",props,[React.createElement("path",{"d":"M.754 114.75c0 19.215 18.763 37.152 48.343 47.263-5.907 29.737-1.058 53.706 15.136 63.045 16.645 9.6 41.443 2.955 64.98-17.62 22.943 19.744 46.13 27.514 62.31 18.148 16.63-9.627 21.687-35.221 15.617-65.887 30.81-10.186 48.044-25.481 48.044-44.949 0-18.769-18.797-35.006-47.979-45.052 6.535-31.933.998-55.32-15.867-65.045-16.259-9.376-39.716-1.204-62.996 19.056C104.122 2.205 80.897-4.36 64.05 5.392 47.806 14.795 43.171 39.2 49.097 69.487 20.515 79.452.754 96.057.754 114.75z","fill":"#FFF","key":0}),React.createElement("path",{"d":"M201.025 79.674a151.364 151.364 0 0 0-7.274-2.292 137.5 137.5 0 0 0 1.124-4.961c5.506-26.728 1.906-48.26-10.388-55.348-11.787-6.798-31.065.29-50.535 17.233a151.136 151.136 0 0 0-5.626 5.163 137.573 137.573 0 0 0-3.744-3.458c-20.405-18.118-40.858-25.752-53.139-18.643-11.776 6.817-15.264 27.06-10.307 52.39a150.91 150.91 0 0 0 1.67 7.484c-2.894.822-5.689 1.698-8.363 2.63-23.922 8.34-39.2 21.412-39.2 34.97 0 14.004 16.4 28.05 41.318 36.566a128.44 128.44 0 0 0 6.11 1.91 147.813 147.813 0 0 0-1.775 8.067c-4.726 24.89-1.035 44.653 10.71 51.428 12.131 6.995 32.491-.195 52.317-17.525 1.567-1.37 3.14-2.823 4.715-4.346a148.34 148.34 0 0 0 6.108 5.573c19.204 16.525 38.17 23.198 49.905 16.405 12.12-7.016 16.058-28.247 10.944-54.078-.39-1.973-.845-3.988-1.355-6.04 1.43-.422 2.833-.858 4.202-1.312 25.904-8.582 42.757-22.457 42.757-36.648 0-13.607-15.77-26.767-40.174-35.168z","fill":"#53C1DE","key":1}),React.createElement("path",{"d":"M195.406 142.328c-1.235.409-2.503.804-3.795 1.187-2.86-9.053-6.72-18.68-11.442-28.625 4.507-9.71 8.217-19.213 10.997-28.208 2.311.67 4.555 1.375 6.717 2.12 20.91 7.197 33.664 17.84 33.664 26.04 0 8.735-13.775 20.075-36.14 27.486zm-9.28 18.389c2.261 11.422 2.584 21.749 1.086 29.822-1.346 7.254-4.052 12.09-7.398 14.027-7.121 4.122-22.35-1.236-38.772-15.368-1.883-1.62-3.78-3.35-5.682-5.18 6.367-6.964 12.73-15.06 18.94-24.05 10.924-.969 21.244-2.554 30.603-4.717.46 1.86.87 3.683 1.223 5.466zm-93.85 43.137c-6.957 2.457-12.498 2.527-15.847.596-7.128-4.11-10.09-19.98-6.049-41.265a138.507 138.507 0 0 1 1.65-7.502c9.255 2.047 19.5 3.52 30.45 4.408 6.251 8.797 12.798 16.883 19.396 23.964a118.863 118.863 0 0 1-4.305 3.964c-8.767 7.664-17.552 13.1-25.294 15.835zm-32.593-61.58c-11.018-3.766-20.117-8.66-26.354-14-5.604-4.8-8.434-9.565-8.434-13.432 0-8.227 12.267-18.722 32.726-25.855a139.276 139.276 0 0 1 7.777-2.447c2.828 9.197 6.537 18.813 11.013 28.537-4.534 9.869-8.296 19.638-11.15 28.943a118.908 118.908 0 0 1-5.578-1.746zm10.926-74.37c-4.247-21.703-1.427-38.074 5.67-42.182 7.56-4.376 24.275 1.864 41.893 17.507 1.126 1 2.257 2.047 3.39 3.13-6.564 7.049-13.051 15.074-19.248 23.82-10.627.985-20.8 2.567-30.152 4.686a141.525 141.525 0 0 1-1.553-6.962zm97.467 24.067a306.982 306.982 0 0 0-6.871-11.3c7.21.91 14.117 2.12 20.603 3.601-1.947 6.241-4.374 12.767-7.232 19.457a336.42 336.42 0 0 0-6.5-11.758zm-39.747-38.714c4.452 4.823 8.911 10.209 13.297 16.052a284.245 284.245 0 0 0-26.706-.006c4.39-5.789 8.887-11.167 13.409-16.046zm-40.002 38.78a285.24 285.24 0 0 0-6.378 11.685c-2.811-6.667-5.216-13.222-7.18-19.552 6.447-1.443 13.322-2.622 20.485-3.517a283.79 283.79 0 0 0-6.927 11.384zm7.133 57.683c-7.4-.826-14.379-1.945-20.824-3.348 1.995-6.442 4.453-13.138 7.324-19.948a283.494 283.494 0 0 0 6.406 11.692 285.27 285.27 0 0 0 7.094 11.604zm33.136 27.389c-4.575-4.937-9.138-10.397-13.595-16.27 4.326.17 8.737.256 13.22.256 4.606 0 9.159-.103 13.64-.303-4.4 5.98-8.843 11.448-13.265 16.317zm46.072-51.032c3.02 6.884 5.566 13.544 7.588 19.877-6.552 1.495-13.625 2.699-21.078 3.593a337.537 337.537 0 0 0 6.937-11.498 306.632 306.632 0 0 0 6.553-11.972zm-14.915 7.15a316.478 316.478 0 0 1-10.84 17.49c-6.704.479-13.632.726-20.692.726-7.031 0-13.871-.219-20.458-.646A273.798 273.798 0 0 1 96.72 133.28a271.334 271.334 0 0 1-9.64-18.206 273.864 273.864 0 0 1 9.611-18.216v.002a271.252 271.252 0 0 1 10.956-17.442c6.72-.508 13.61-.774 20.575-.774 6.996 0 13.895.268 20.613.78a290.704 290.704 0 0 1 10.887 17.383 316.418 316.418 0 0 1 9.741 18.13 290.806 290.806 0 0 1-9.709 18.29zm19.913-107.792c7.566 4.364 10.509 21.961 5.755 45.038a127.525 127.525 0 0 1-1.016 4.492c-9.374-2.163-19.554-3.773-30.212-4.773-6.209-8.841-12.642-16.88-19.1-23.838a141.92 141.92 0 0 1 5.196-4.766c16.682-14.518 32.273-20.25 39.377-16.153z","fill":"#FFF","key":2}),React.createElement("path",{"d":"M128.221 94.665c11.144 0 20.177 9.034 20.177 20.177 0 11.144-9.033 20.178-20.177 20.178-11.143 0-20.177-9.034-20.177-20.178 0-11.143 9.034-20.177 20.177-20.177","fill":"#53C1DE","key":3})]);
	}

	ReactIcon.defaultProps = {"viewBox":"0 0 256 230"};

	module.exports = ReactIcon;

	ReactIcon.default = ReactIcon;


/***/ }),

/***/ 510:
/***/ (function(module, exports, __webpack_require__) {

	var React = __webpack_require__(1);

	function JssIcon (props) {
	    return React.createElement("svg",props,[React.createElement("path",{"fill":"yellow","d":"M0 13h95v94H0z","key":0}),React.createElement("path",{"fill":"#666","d":"M96,107.5H0v-95h96V107.5z M1.803,105.705h92.393v-91.41H1.803C1.803,14.295,1.803,105.705,1.803,105.705z","key":1}),React.createElement("path",{"fill":"#333","d":"M64.294 86.574c1.903 3.108 4.379 5.392 8.759 5.392 3.679 0 6.029-1.839 6.029-4.379 0-3.044-2.414-4.123-6.464-5.894l-2.219-.952c-6.407-2.729-10.663-6.149-10.663-13.378 0-6.659 5.073-11.728 13.003-11.728 5.645 0 9.704 1.965 12.628 7.109l-6.914 4.439c-1.522-2.73-3.164-3.805-5.714-3.805-2.601 0-4.249 1.65-4.249 3.805 0 2.663 1.65 3.742 5.459 5.392l2.22.951c7.544 3.235 11.803 6.533 11.803 13.948 0 7.993-6.279 12.373-14.713 12.373-8.246 0-13.573-3.929-16.18-9.079 0-.002 7.215-4.194 7.215-4.194zm32.029 0c1.903 3.108 4.379 5.392 8.759 5.392 3.679 0 6.029-1.839 6.029-4.379 0-3.044-2.414-4.123-6.464-5.894l-2.219-.952c-6.407-2.729-10.663-6.149-10.663-13.378 0-6.659 5.073-11.728 13.003-11.728 5.645 0 9.704 1.965 12.628 7.109l-6.914 4.439c-1.522-2.73-3.164-3.805-5.714-3.805-2.601 0-4.249 1.65-4.249 3.805 0 2.663 1.65 3.742 5.459 5.392l2.22.951C115.741 76.76 120 80.058 120 87.473c0 7.993-6.279 12.373-14.713 12.373-8.246 0-13.573-3.929-16.18-9.079l7.216-4.193zm-63.393.77c1.395 2.475 2.664 4.567 5.714 4.567 2.917 0 4.757-1.141 4.757-5.579V56.141h8.878v30.31c0 9.193-5.39 13.378-13.258 13.378-7.109 0-11.226-3.679-13.32-8.11l7.229-4.375c0-.001 0 0 0 0z","key":2})]);
	}

	JssIcon.defaultProps = {"viewBox":"0 0 120 120"};

	module.exports = JssIcon;

	JssIcon.default = JssIcon;


/***/ }),

/***/ 511:
/***/ (function(module, exports, __webpack_require__) {

	var React = __webpack_require__(1);

	function ReduxIcon (props) {
	    return React.createElement("svg",props,React.createElement("g",{"fill":"#764ABC"},[React.createElement("path",{"d":"M65.6 65.4c2.9-.3 5.1-2.8 5-5.8-.1-3-2.6-5.4-5.6-5.4h-.2c-3.1.1-5.5 2.7-5.4 5.8.1 1.5.7 2.8 1.6 3.7-3.4 6.7-8.6 11.6-16.4 15.7-5.3 2.8-10.8 3.8-16.3 3.1-4.5-.6-8-2.6-10.2-5.9-3.2-4.9-3.5-10.2-.8-15.5 1.9-3.8 4.9-6.6 6.8-8-.4-1.3-1-3.5-1.3-5.1-14.5 10.5-13 24.7-8.6 31.4 3.3 5 10 8.1 17.4 8.1 2 0 4-.2 6-.7 12.8-2.5 22.5-10.1 28-21.4z","key":0}),React.createElement("path",{"d":"M83.2 53c-7.6-8.9-18.8-13.8-31.6-13.8H50c-.9-1.8-2.8-3-4.9-3h-.2c-3.1.1-5.5 2.7-5.4 5.8.1 3 2.6 5.4 5.6 5.4h.2c2.2-.1 4.1-1.5 4.9-3.4H52c7.6 0 14.8 2.2 21.3 6.5 5 3.3 8.6 7.6 10.6 12.8 1.7 4.2 1.6 8.3-.2 11.8-2.8 5.3-7.5 8.2-13.7 8.2-4 0-7.8-1.2-9.8-2.1-1.1 1-3.1 2.6-4.5 3.6 4.3 2 8.7 3.1 12.9 3.1 9.6 0 16.7-5.3 19.4-10.6 2.9-5.8 2.7-15.8-4.8-24.3z","key":1}),React.createElement("path",{"d":"M32.4 67.1c.1 3 2.6 5.4 5.6 5.4h.2c3.1-.1 5.5-2.7 5.4-5.8-.1-3-2.6-5.4-5.6-5.4h-.2c-.2 0-.5 0-.7.1-4.1-6.8-5.8-14.2-5.2-22.2.4-6 2.4-11.2 5.9-15.5 2.9-3.7 8.5-5.5 12.3-5.6 10.6-.2 15.1 13 15.4 18.3 1.3.3 3.5 1 5 1.5-1.2-16.2-11.2-24.6-20.8-24.6-9 0-17.3 6.5-20.6 16.1-4.6 12.8-1.6 25.1 4 34.8-.5.7-.8 1.8-.7 2.9z","key":2})]));
	}

	ReduxIcon.defaultProps = {"viewBox":"0 0 100 100"};

	module.exports = ReduxIcon;

	ReduxIcon.default = ReduxIcon;


/***/ }),

/***/ 512:
/***/ (function(module, exports, __webpack_require__) {

	var React = __webpack_require__(1);

	function WebpackIcon (props) {
	    return React.createElement("svg",props,[React.createElement("path",{"fill":"#FFF","d":"M600 0l530.3 300v600L600 1200 69.7 900V300z","key":0}),React.createElement("path",{"fill":"#8ED6FB","className":"st1","d":"M1035.6 879.3l-418.1 236.5V931.6L878 788.3l157.6 91zm28.6-25.9V358.8l-153 88.3V765l153 88.4zm-901.5 25.9l418.1 236.5V931.6L320.3 788.3l-157.6 91zm-28.6-25.9V358.8l153 88.3V765l-153 88.4zM152 326.8L580.8 84.2v178.1L306.1 413.4l-2.1 1.2-152-87.8zm894.3 0L617.5 84.2v178.1l274.7 151.1 2.1 1.2 152-87.8z","key":1}),React.createElement("path",{"fill":"#1C78C0","d":"M580.8 889.7l-257-141.3v-280l257 148.4v272.9zm36.7 0l257-141.3v-280l-257 148.4v272.9zm-18.3-283.6zM341.2 436l258-141.9 258 141.9-258 149-258-149z","key":2})]);
	}

	WebpackIcon.defaultProps = {"viewBox":"0 0 1200 1200"};

	module.exports = WebpackIcon;

	WebpackIcon.default = WebpackIcon;


/***/ }),

/***/ 513:
/***/ (function(module, exports, __webpack_require__) {

	var React = __webpack_require__(1);

	function BabelIcon (props) {
	    return React.createElement("svg",props,[React.createElement("path",{"d":"M351 136v-1h-2v1h2zm12 28v1h1l1-2v-1l-2 2zm-47 37l-9-12c0-2 2-4 6-6l13-11c3-4 5-10 5-18v-1c-1-6-5-11-12-14-5-3-13-5-25-5-10 1-22 4-38 10l-15 10v1l2-1 1 1 1-1v1l-10 8 1 1h-1l-1-1-1 1 1 2-2-1-5 3 1-3 5-26v-1l-5-4v-2a705 705 0 0 1-63 76h-4l-1 2h2l-3 1-6 2h-2l-4 1h-4v1-1h-3l-13-15c0-2 3-5 9-8l16-14c4-5 6-13 7-23v-3c-1-7-6-13-17-18-6-4-16-6-32-6-13 1-29 5-50 13l-19 13v1l2-1 1 1h1l1-1v1l-14 11 1 1h-1l-1-1-2 1v1l2 1h-2c-3 0-6 2-9 6l1 2 4-4v2l-2 1 2 2a51 51 0 0 1 10-8l2 1h2c10-7 19-12 29-15v1l-4 4 1 2A882 882 0 0 1 2 301c4 0 6-1 7-2h1v1h4v1l-2 6-5 10h1c6-6 10-12 13-18 16-4 28-9 36-13 9-1 15-3 19-7v-1l-3 1h-1c7-1 11-3 13-4 12-10 21-16 28-20 12-10 21-19 24-27a79 79 0 0 0 2-1h3l1-1h3l5-1s-1 0 0 0h1-1 2v1l-21 35-5 6-2 8v-1l2-1v4l1 1-1 1h1c2-1 2-2 2-3h3l-1 3c8-8 28-38 43-58 0-2 8-5 24-9h1l-4 19-3 10-4 13-6 19-8 32h1l1-1h1l-1-1h3l2-3 1-4 3-10 4-10c2-8 4-12 5-13v1l-2 5-8 29v4h1c7-15 17-45 30-90 1-4 3-7 6-9l-1-1 3-2-4-2 7-28 2-2v2h-1l1 2 8-6 2 1h1c7-6 15-9 22-12v1l-3 3 1 2-10 25a680 680 0 0 1-38 81l5-2h1v1h1l1-1 1 1v1l-2 4-3 7v1h1c4-5 7-9 9-14 12-3 21-7 28-10 6-1 11-3 14-5v-1l-2 1h-1v-1c5 0 8-1 10-3l21-15c14-10 21-21 20-30zm-2 0v4l-1 2-1-7 2 1zM28 170l-1 1v-2h2l1 1h-2zM15 298l-4-1v-2l1-1 1 2 4-4h1c0 4-1 6-3 6zm136-142l-4-6v-2c1 0 3 2 4 6v2zm-2-15v2l-19-8c13 0 19 3 19 6zm-78 67l-2 1-1-1 3-1v1zm-2-40h1v2l-3 3v-2c2-1 2-2 2-3zm-5 13v3h-1v-3h1zm-3 5h1c0 2-1 3-2 3l1-3zm-2 6v1l-1 2h-1v-1l2-2zm-3 6v3h-1v-3h1zm-21 60l-2 7-1-1 3-6zm-4 9l-1 2v-1l1-1zm-1 17h2v1h-2l-1 1 1-2zm56-17c-11 5-17 9-19 11-12 4-18 7-18 8l-21 9-4-1c0-2 1-4 3-5l6 1 10-4v-1h-4l11-5h2l-5 3c0 1 0 2 1 1l4-2c5-1 18-8 40-21v1l-6 5zm-33 11c3 0 6-2 8-4l1 1-8 4h-1v-1zm54-41l-17 13-20 12c-20 11-32 17-37 17h-1l27-54c7-1 19-4 35-10l4-1c8-1 14 1 18 5l1 2c-3 9-7 14-10 16zm-33-19h3v1h-3v-1zm38-6h2l3 2v1c-2 0-4-1-5-3zm5-31c-2 3-6 6-14 11-3 0-12 4-29 11a5 5 0 0 0-3 0v-1l3-9c2-7 3-11 5-12l14-31c-1-2 2-3 8-4l2-1v2l12-1c11-1 16 1 17 6h1v-3h1c3 2 5 4 5 6l-3 7-1-2h-1l-1 4c-5 8-9 12-12 13l-4 4zm9 22l-3-1v-2h1l3 2-1 1zm8 11l2 1h-1v1l-1-2zm1 5v-1h2l-2 1zm4 4l5-1v1l-5 1v-1zm6 2l-6 1 4-2h3v1h-1zm5-1h-2l2-1 1 1h-1zm13-15l3-1v1h-3zm15 91v-1l1-1 1 1v1h-2zm11-87h-1l-5 2h-1l-1-1 7-2 2-1 1 1-2 1zm5-1v-1l1-1 5-1v1l-6 2zm1-10h-4l11-4h1l1 1-9 3zm13-15c-1 6-3 10-6 11l-1-1-3 1-1 1h-2l-1-2 15-20 1 1c0 1 0 5-2 9zm23-20v-1h2v1h-2zm-9 97l-3-1v-2l2 1 2-3 1 1-2 4zm103-108l-3-5v-1l3 5v1zm-1-11l-1 1-14-6c10 1 14 2 15 5zm-60 51h-2v-1h2v1zm-1-31v2l-1 2v-1l1-3zm-4 10v2h-1v-2h1zm-3 4h1l-1 2v-2zm-1 5l-1 2h-1v-1l2-1zm-2 4v2l-1 1v-3h1zm-16 46l-2 5v-1l2-4zm-3 6v1l-1 1v-1l1-1zm-1 14h2l-2 1h-1l1-1zm43-13c-9 4-14 6-15 8l-14 6-15 7-3-1 2-4 4 1 8-3v-1l-3 1 9-5h1v1l-4 2 1 1 3-2 30-16v1l-4 4zm-26 8c3 0 5-1 7-3l1 1-7 3h-1v-1zm41-32l-12 11-16 9-28 13 20-41c6-1 15-3 27-8l3-1c6 0 11 1 14 4v2c-2 6-5 10-8 11zm-24-14h2v1h-2v-1zm28-4h2l2 1v1l-4-2zm4-23l-11 8-21 8h-2v-1c-1-2 0-4 2-7l3-9 11-23c0-2 2-3 6-4h2v2l8-2c9 0 13 1 13 5h1v-2h1c3 1 4 3 4 5l-2 5-1-2h-1v3c-5 7-8 10-10 10l-3 4zm5 15l-1-1h1l3 1-1 1-2-1zm-176 92h-1l-1 1 1 1 1-1v-1zm-4-7l1-1-1 1zm26-64h2l-1-1h-1v1zm344 29l-16 3h3l13-2v-1zm-62 8v1-1zm-7-25h-1l-2 4 3-4zm71 17v1h2v-1h-2zm-78 10l-3-1v2l15-2-12 1zm-7-34h-2l1 1 1-1zm92 17h1v-2c-3 0-4 0-6 2v-1h-3l-1-1h-1l-4 1-1-1-1 1h-6l1 1h5l-10 2h-2v-1h3l3-1v-1l-11 1v-1l9-2v1a2 2 0 0 1 2-1c4 0 5 1 11-1h2l2-2v-1c-11 3-14 2-17 3h-4l-1 1-1-1-10 2v-1c-5 1-4 2-10 2l-2 1v-1l-4 1h-4l-4 1v-1l-1 1h-4l-8 1h-3l-5-1 3-5v1l2-2v-1l-1 1v-3l2-4v1h1v-1l-1-1 2-1h-1v-2l4-10h1l1-1h-1a4 4 0 0 1 0-2c2-2 3-3 2-5h1l3-6 10-25c8-23 8-25 9-30h-1v2l-2-1 3-7 1 3h1l1-4-2-1v1-5h-1l-1-2h-6v-1l3-2 2 1 1-1h2v-1h-6l-1 1v-1l-43 4h-8l-3 1h-7a734 734 0 0 0-2 2h-1l-17 2h-3l-5 1-8 4 1 1 1-1h3v3c-3 1-5 3-5 5l-6 4v1l2-1 1 2v2l-21 45c-12 28-19 43-19 46-5 1-7 3-8 5l4 1v1l-1 2v2c0 2 3 2 9 3l1-1-1 8h1l3-7h1l2 2-8 18v1h1l10-23 38-4h3l1-1 1 1 14-1c3-1 5-2 5-4l6-1h2l6-1c1-2 1-4 3-4l-1-1-4 1h-7l-9 1h-4l-3-1-1 1h-2c12-2 18-3 18-5l1 1 3-1v-1l-29 1h-4l-2 1-2-1-8 2h-18a149 149 0 0 1 18-39h2l4-1h3l14-3h3l3-1 11-1 15-3-1-1-3-1c0-1-1-2-4-2v-1l3-1h8l-1-1h-4v-2h3l1-1-6-1a252 252 0 0 1-44 2v-1l12-24-1 3v1l2-1c3-7 5-10 7-10 9-1-1-2 17-5l2 1 31-5v-1l-7 1v-1l2-1v1l1-1h3l6-1h4l2-2v-1h-4l1-1 8-1 4-1v1l2-1-1 4h-1l-1-1-24 61c-1 5-3 8-4 9l1 1c0 2 0 5-2 7-4 13-7 19-8 20l1 6-1 1h-1l-2-2c-2 2-3 4-3 7h1c1-1 2-2 1-3h3l-1 3 1 1-2 3 1 1 3 1 3-1h13l4-2h10l1-1v1h8v1h-3v1l2-1 1 1-3 1-1-1-2 1h-2l1 1h1l9-1 3-1v1l2-1h3l7-1v-1 1l9-2h4l-1-1h-6l-7 1v-1h4l1-1h1c5 0 7 1 33-4l2-4a2 2 0 0 1-2 0l-7 1-1-1h4l4-1zm-186 3h-2l3-8h1l-2 8zm2-9l1-1-1 1zm24 19h-3 3zm-4-1c0 1-1 2-3 2h-4l-1-1 8-1zm24-110l-2 1v-1l1-1h2l-1 1zm27-5h1v1h-2l1-1zm-7 2h-2l6-2 2 1v1h-6zm4 10l4-1v1h-4zm4-4h2-2zm1-7h-1l1-1 5-1v1l-5 1zm2 11v-2h2l2 1-4 1zm13-18l-3 1h-5l8-1zm-3 12v1h-3l-1-1h4zm6 3l-2-1-4 1h-2l-2-1 4 1 7-2h4v1l-5 1zm39-10h1l4-3c-1 6-3 11-6 13l-2-1 3-9zm-7 11h1l-2 2v-1l1-1zm-4 10l3-7v1c0 4-1 6-2 6v2l-1 3h-1v-3l1-2zm-1 6l-2 4v-2l2-2zm-31 88h1v1l-1-1zm44 1h-3l6-1v1h-3zm-3-1zm0-7l-3 1v-1h3l2-1 1 1 4-1 1 1h-8zm11-1h-3 3s1 0 0 0zm1 0v-1h1v1h-1zm3 0v-1h1c1-1 1 0 2 1h-3zm5-1l2-1v1h-2zm2 0l1-1 1 1v-1 1h-2zm-28 12v-1h-1v1h1zm66-17v-1 1l-1 1h2v-1h-1zm3 2v1h2l-2-1zm-3-2z","key":0}),React.createElement("path",{"d":"M361 161v1h2v-3l-2 2zm-12-28v-1h-1v1h1zm-34 65l-10-12c0-2 2-4 7-6l12-11c3-4 5-10 5-18v-2c0-5-4-10-12-13-5-3-13-5-25-5-9 1-22 4-38 10l-14 10v1l1-1 1 1 1-1h1v1l-11 8 1 1h-1l-1-1-1 1 1 2-2-1-4 3v-3c3-10 4-19 5-26v-1l-5-4v-2a706 706 0 0 1-63 76h-4v2h1l-3 1-6 2h-3 1l-4 1h-4v1-1h-3l-13-15c0-2 3-5 9-8l16-14c4-5 6-13 7-23v-3c-1-7-6-13-16-18-6-4-17-6-32-6-13 1-30 5-51 13l-19 13v1l2-1 1 1 2-1v1l-13 11v1l-2-1-2 1v1l2 1h-2c-3 0-6 2-9 6l1 1 4-3v2l-1 1 1 2a51 51 0 0 1 10-8l3 1h1c10-7 19-12 29-15v1l-3 4v2c1 2-4 13-13 33A882 882 0 0 1 1 299l6-3h1v1h1l2-1 1 1v1l-2 6-5 10h2l12-18c16-4 28-9 37-13 8-1 14-3 19-7v-1l-3 1h-1c6-1 10-3 13-5l27-19c13-10 21-19 25-27l2-1h3v-1h3l5-1h2l1 1-22 35-5 6-2 8v-1l3-1-1 4 1 1-1 1h2c1-1 2-2 1-3h4c-1 1-2 1-2 3h1c8-9 27-38 42-58 0-2 8-5 25-9 1 3-1 9-4 19l-3 10c-2 8-4 12-3 13l-6 19c-4 10-7 21-9 32h2v-1h1v-1h2c1 0 2-1 2-3 0-3 1-4 2-4l3-10 3-10c2-8 4-12 5-13v1l-2 5c-2 12-5 22-8 29l1 4a903 903 0 0 0 36-99l-1-1 4-2-4-2 6-28 3-2v2h-2l2 2 7-6 2 1h1c8-6 15-9 22-12v1l-3 3 1 2-10 25a679 679 0 0 1-37 81l4-2h1v1h1l1-1 1 1v1l-2 4-3 7v1h1l9-14 28-10c7-1 11-3 15-5v-1l-3 1v-1c4 0 8-1 9-3l21-15c15-10 22-21 21-30zm-3 0l1 4-2 2v-7l1 1zM26 167h-1v-1h3v1h-2zM13 295l-4-1v-2l1-1c1 0 2 0 2 2l3-4h2c-1 4-2 6-4 6zm136-143c0 1-2-1-3-5l-1-2c2 0 3 2 4 6v1zm-1-14l-1 2-18-8c12 0 18 2 19 6zm-79 67l-2 1v-2h2v1zm-2-40h1v2l-2 3v-2l1-3zm-5 13v3h-1v-3h1zm-3 5h1l-1 3h-1l1-3zm-2 6h1v1l-2 2h-1v-1l2-2zm-2 6l-1 3-1-3h2zm-21 60l-3 7v-1c0-2 0-4 3-6zm-4 9l-1 2-1-1 2-1zm-2 17h2l1 1h-2l-2 1 1-2zm56-17c-11 5-17 9-19 11-12 4-18 7-18 8l-21 9-3-1c0-2 1-4 3-5l5 1 10-4v-1h-4l12-5h2l-6 3c0 1 0 2 1 1l4-2c5-1 18-8 40-21v1l-6 5zm-33 11c3 0 6-2 8-4l2 1-9 4h-1v-1zm54-41l-17 13-20 12c-20 11-32 17-37 17l26-54c8-1 19-4 35-10l4-1c8-1 15 1 19 5v2c-3 9-7 14-10 16zm-33-19h3v1h-3v-1zm38-6h2c2 0 3 1 3 2v1c-2 0-4-1-5-3zm5-31c-1 3-6 6-14 11-3 0-12 4-29 11a5 5 0 0 0-2 0v-1c-1-3 0-6 3-9 1-7 2-11 4-12l14-31c0-2 3-3 9-4l2-1v2l11-1c11-1 17 1 17 6h1v-3h1c4 2 5 4 6 6l-3 7-2-2h-1v4c-6 8-10 12-12 13l-5 4zm9 22l-3-1v-2h1l3 2-1 1zm9 11l2 1h-1l-1 1v-2zm0 5v-1h2l-2 1zm4 4l6-1-6 2v-1zm6 2l-6 1 5-2h2v1h-1zm5-1l-1-1h1l1 1h-1zm14-15l2-1v1h-2zm15 91v-2l1 1v1h-1zm10-87h-1l-4 1-1 1-2-1 7-2 3-1v1l-2 1zm5-1v-1l1-1 5-1v1l-6 2zm1-10h-3c-1-1 3-2 11-4h1v1l-9 3zm13-15c0 6-2 10-6 11v-1l-4 1-1 1h-2v-2l14-20 1 1c1 1 0 5-2 9zm24-20h-1v-1h2v1h-1zm-10 97l-3-1v-1l1-1 1 1 3-3 1 1-3 4zm103-108l-3-5v-1l3 5v1zm-1-11v1l-14-6c9 1 14 2 14 5zm-59 51h-2v-1h2v1zm-2-31h1v2l-2 2v-1l1-3zm-4 10v2l-1-2h1zm-2 4h1l-2 2 1-2zm-2 5h1l-1 2h-1v-1l1-1zm-1 4l-1 2v1-3h1zm-17 46c0 3-1 5-2 5v-1l2-4zm-3 6v2l-1-1 1-1zm0 14l1-1v1l-1 1h-1l1-1zm42-14l-15 9c-9 3-13 5-13 6-8 3-14 5-16 7l-3-1 2-4 5 1 7-3v-1l-3 1 9-5h1v1l-4 2 1 1 3-2c4-1 14-6 30-16v1l-4 3zm-25 9l6-3 1 1-7 3v-1zm41-32l-13 11-15 9-28 13h-1l20-41c6-1 15-3 27-8l3-1c6 0 11 1 14 4v2c-2 6-5 10-7 11zm-25-14h2v1h-2v-1zm29-4l1-1 2 2v1l-3-2zm3-23l-10 8-22 8h-2v-1c0-2 0-4 2-7l3-9 11-23c0-2 2-3 7-4h1v2l9-2c8 0 12 1 13 5h1l-1-2h1c3 1 4 3 4 5 0 1 0 3-2 5l-1-2h-1v3c-4 7-7 10-9 10l-4 4zm5 15v-1h1l2 1-1 1-2-1zm-176 92h-1l-1 1 1 1 1-1v-1zm-4-7l1-1-1 1zm27-51h1-1zm0-13h1v-1h-1v1zm267 39l-3-1v2l15-2v-1l-12 2zm14-2v1-1zm64-8v1h2v-1h-2zm-2 0c-12 3-13 2-15 2v1h2l13-2v-1zm-69-17h-1l-1 4 2-4zm-14-7h-1v1l1-1zm30 31v-1 1zm62-14h1l1-1-1-1-6 2v-1h-3l-1-1h-1l-4 1v-1l-2 1h-5v1h5l-10 2-1-1v1l-1-1 2-1 2 1 2-1v-1l-11 1v-1l9-2 1 1a2 2 0 0 1 1-1h1c3 0 4 1 11-1h2l1-2v-1c-11 3-14 2-17 3h-4l-1 1v-1h-1l-9 2-1-1c-5 1-3 2-10 2l-1 1-1-1-4 1h-3l-4 1v-1l-1 1h-5l-7 1h-3l-5-1c0-3 1-5 2-5v1h1l1-2v-1l-1 1v-3l2-4v1h1v-2l2-1h-2v-2l4-10h1l1-1h-1a4 4 0 0 1 1-2l2-5 3-6c3-4 6-13 10-25 9-23 8-25 9-30h-1v2l-2-1 3-7 1 3h1l1-4-1-1-1 1v-5h-1l-1-2h-5l-1-1 4-2h5v-1h-6l-1 1v-1l-44 4h-7l-4 1h-6a733 733 0 0 0-2 2h-1l-18 2h-3l-4 1-9 4 1 1 2-1h3l-1 3c-3 1-4 3-5 5l-6 4v1h1l1-1 1 2v2l-21 45-19 46c-4 1-7 3-7 5l3 1v1l-1 2 1 2 9 3v-1l-1 8h1l3-7h1l2 2-8 18 1 1 11-23 38-4 1-1v1h2l1-1v1l14-1c4-1 5-2 5-4l6-1h2l7-1 2-4v-1l-4 1h-8l-9 1h-4l-3-1-1 1h-2c12-2 18-3 18-5l1 1 4-1v-1l-30 1h-4l-2 1-1-1-8 2h-18a149 149 0 0 1 17-39h2l5-1h2l14-3h3l4-1 10-1 15-3v-1l-3-1c0-1-2-2-5-2v-1l3-1h8v-1h-5v-2h3l1-1-6-1a252 252 0 0 1-43 2l-1-1c7-16 11-24 13-24l-1 3v1l1-1c3-7 5-10 7-10 9-1-1-2 18-5l1 1 31-5v-1l-7 1v-1l2-1v1l2-1h2l6-1h5l1-2v-1h-4l1-1 8-1 4-1v1l2-1h1l-2 4h-1l-1-1c-10 27-14 40-23 61l-5 9 1 1c1 2 0 5-2 7l-8 20 1 6-1 1h-1l-2-2-3 7h1l2-3h3l-1 3v1l-1 3v1l4 1 3-1h12l4-2h11v-1 1h8v1h-2v1l2-1v1l-3 1-1-1-2 1h-2l1 1h2l8-1 3-1 1 1 1-1h3l7-1v-1 1l10-2h3v-1h-7l-7 1v-1h4l2-1c6 0 8 1 33-4l2-4a2 2 0 0 1-1 0l-7 1-1-1h4l4-1h-1zm-186 3h-1c-1-1 0-3 2-8h2l-3 8zm2-9l2-1-2 1zm24 19h-3 3zm-3-1c0 1-1 2-3 2h-5v-1l8-1zm23-110l-1 1v-1l1-1h2l-2 1zm27-5h1v1h-2l1-1zm-6 2h-3l7-2 1 1v1h-5zm3 10l4-1v1h-4zm5-4h2-2zm0-7v-1l5-1v1l-5 1zm3 10v-1h2l1 1h-3zm12-17l-2 1h-6l8-1zm-2 12v1h-4v-1h4zm6 3l-3-1-3 1h-3l-1-1h3l8-1h3v1l-4 1zm38-10h1l5-3c-2 6-4 10-7 13l-2-1 3-9zm-6 11l-2 2v-1l2-1zm-5 10l3-7v1c0 4-1 6-2 6v2l-1 3h-1v-3l1-2zm-1 6l-1 4h-1v-2l2-2zm-31 88h1v1l-1-1zm44 1h-3l6-1v1h-3zm-3-1zm0-7l-3 1v-1h3l3-1v1l4-1 1 1h-8zm12-1h-4l3-1v1h1zm0 0v-1h1l1 1h-2zm3 0v-1h2l1 1h-3zm5-1v-1h2v1h-2zm3 0v-1l1 1v-1l1 1h-2zm37-5zm1 0l-1-1v1l-1 1h2v-1zm2 2v1h2l-2-1z","fill":"#F9DC3E","key":1})]);
	}

	BabelIcon.defaultProps = {"viewBox":"0 0 512 460","preserveAspectRatio":"xMinYMin meet"};

	module.exports = BabelIcon;

	BabelIcon.default = BabelIcon;


/***/ })

});