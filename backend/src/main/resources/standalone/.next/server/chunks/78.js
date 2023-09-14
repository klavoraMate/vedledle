exports.id = 78;
exports.ids = [78];
exports.modules = {

/***/ 15827:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 31232, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 52987, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 50831, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 56926, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 44282, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 16505, 23))

/***/ }),

/***/ 46930:
/***/ (() => {



/***/ }),

/***/ 72175:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(79536);
/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(43872);
/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(74147);
/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(48060);
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(33987);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_material_Menu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(71829);
/* harmony import */ var _mui_material_Menu__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Menu__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(85055);
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(39966);
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Container__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_Avatar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(95843);
/* harmony import */ var _mui_material_Avatar__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Avatar__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(16614);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Button__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(11666);
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(88707);
/* harmony import */ var _mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57114);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);















const pages = [
    "Gallery",
    "Calendar"
];
const settings = [
    "Profile",
    "Login",
    "Logout"
];
function ResponsiveAppBar() {
    const [anchorElNav, setAnchorElNav] = react__WEBPACK_IMPORTED_MODULE_1__.useState(null);
    const [anchorElUser, setAnchorElUser] = react__WEBPACK_IMPORTED_MODULE_1__.useState(null);
    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const handleOpenNavMenu = (event)=>{
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event)=>{
        setAnchorElUser(event.currentTarget);
    };
    const handleCloseNavMenu = ()=>{
        setAnchorElNav(null);
    };
    const handleCloseUserMenu = (setting)=>{
        setAnchorElUser(null);
        router.push("/" + setting.toLowerCase());
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_3___default()), {
        position: "static",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Container__WEBPACK_IMPORTED_MODULE_4___default()), {
            maxWidth: "xl",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_5___default()), {
                disableGutters: true,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Avatar__WEBPACK_IMPORTED_MODULE_6___default()), {
                        sx: {
                            display: {
                                xs: "none",
                                md: "flex"
                            }
                        },
                        src: "/logo.png",
                        alt: "German Sheppard Logo"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_7___default()), {
                        variant: "h6",
                        noWrap: true,
                        component: "a",
                        href: "/",
                        sx: {
                            mr: 2,
                            display: {
                                xs: "none",
                                md: "flex"
                            },
                            fontFamily: "monospace",
                            fontWeight: 700,
                            letterSpacing: ".3rem",
                            color: "inherit",
                            textDecoration: "none"
                        },
                        children: "VEDLEDLE"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_8__["default"], {
                        sx: {
                            flexGrow: 1,
                            display: {
                                xs: "flex",
                                md: "none"
                            }
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_9___default()), {
                                size: "large",
                                "aria-label": "account of current user",
                                "aria-controls": "menu-appbar",
                                "aria-haspopup": "true",
                                onClick: handleOpenNavMenu,
                                color: "inherit",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {})
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Menu__WEBPACK_IMPORTED_MODULE_11___default()), {
                                id: "menu-appbar",
                                anchorEl: anchorElNav,
                                anchorOrigin: {
                                    vertical: "bottom",
                                    horizontal: "left"
                                },
                                keepMounted: true,
                                transformOrigin: {
                                    vertical: "top",
                                    horizontal: "left"
                                },
                                open: Boolean(anchorElNav),
                                onClose: handleCloseNavMenu,
                                sx: {
                                    display: {
                                        xs: "block",
                                        md: "none"
                                    }
                                },
                                children: pages.map((page)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_12___default()), {
                                        onClick: handleCloseNavMenu,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_7___default()), {
                                            textAlign: "center",
                                            children: page
                                        })
                                    }, page))
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Avatar__WEBPACK_IMPORTED_MODULE_6___default()), {
                        sx: {
                            display: {
                                xs: "flex",
                                md: "none"
                            }
                        },
                        src: "/logo.png",
                        alt: "German Sheppard Logo"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_7___default()), {
                        variant: "h5",
                        noWrap: true,
                        component: "a",
                        href: "/",
                        sx: {
                            mr: 2,
                            display: {
                                xs: "flex",
                                md: "none"
                            },
                            flexGrow: 1,
                            fontFamily: "monospace",
                            fontWeight: 700,
                            letterSpacing: ".3rem",
                            color: "inherit",
                            textDecoration: "none"
                        },
                        children: "VEDLEDLE"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_Box__WEBPACK_IMPORTED_MODULE_8__["default"], {
                        sx: {
                            flexGrow: 1,
                            display: {
                                xs: "none",
                                md: "flex"
                            }
                        },
                        children: pages.map((page)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Button__WEBPACK_IMPORTED_MODULE_13___default()), {
                                onClick: handleCloseNavMenu,
                                sx: {
                                    my: 2,
                                    color: "white",
                                    display: "block"
                                },
                                children: page
                            }, page))
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_8__["default"], {
                        sx: {
                            flexGrow: 0
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_14___default()), {
                                title: "Open settings",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_9___default()), {
                                    onClick: handleOpenUserMenu,
                                    sx: {
                                        p: 0
                                    },
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Avatar__WEBPACK_IMPORTED_MODULE_6___default()), {
                                        alt: "Remy Sharp",
                                        src: "/static/images/avatar/2.jpg"
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Menu__WEBPACK_IMPORTED_MODULE_11___default()), {
                                sx: {
                                    mt: "45px"
                                },
                                id: "menu-appbar",
                                anchorEl: anchorElUser,
                                anchorOrigin: {
                                    vertical: "top",
                                    horizontal: "right"
                                },
                                keepMounted: true,
                                transformOrigin: {
                                    vertical: "top",
                                    horizontal: "right"
                                },
                                open: Boolean(anchorElUser),
                                onClose: handleCloseUserMenu,
                                children: settings.map((setting)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_12___default()), {
                                        onClick: ()=>handleCloseUserMenu(setting),
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_7___default()), {
                                            textAlign: "center",
                                            children: setting
                                        })
                                    }, setting))
                            })
                        ]
                    })
                ]
            })
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ResponsiveAppBar);


/***/ }),

/***/ 74053:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RootLayout),
/* harmony export */   metadata: () => (/* binding */ metadata)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_font_google_target_css_path_src_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25856);
/* harmony import */ var next_font_google_target_css_path_src_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_font_google_target_css_path_src_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5023);
/* harmony import */ var _globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_globals_css__WEBPACK_IMPORTED_MODULE_1__);



const metadata = {
    title: "Vedledle",
    description: "Hobby pet grooming site"
};
function RootLayout({ children }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("html", {
        lang: "en",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("body", {
            className: (next_font_google_target_css_path_src_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_2___default().className),
            children: children
        })
    });
}


/***/ }),

/***/ 73881:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80085);
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__);
  

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((props) => {
    const imageData = {"type":"image/x-icon","sizes":"16x16"}
    const imageUrl = (0,next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__.fillMetadataSegment)(".", props.params, "favicon.ico")

    return [{
      ...imageData,
      url: imageUrl + "",
    }]
  });

/***/ }),

/***/ 5023:
/***/ (() => {



/***/ })

};
;