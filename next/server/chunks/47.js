"use strict";
exports.id = 47;
exports.ids = [47];
exports.modules = {

/***/ 3047:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "X": () => (/* binding */ Heading)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6197);
/* harmony import */ var _components_SectionProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8052);
/* harmony import */ var _components_Tag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4740);
/* harmony import */ var _lib_remToPx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8672);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_3__, _components_SectionProvider__WEBPACK_IMPORTED_MODULE_4__]);
([framer_motion__WEBPACK_IMPORTED_MODULE_3__, _components_SectionProvider__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







function AnchorIcon(props) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        viewBox: "0 0 20 20",
        fill: "none",
        strokeLinecap: "round",
        "aria-hidden": "true",
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "m6.5 11.5-.964-.964a3.535 3.535 0 1 1 5-5l.964.964m2 2 .964.964a3.536 3.536 0 0 1-5 5L8.5 13.5m0-5 3 3"
        })
    });
}
function Eyebrow({ tag , label  }) {
    if (!tag && !label) {
        return null;
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex items-center gap-x-3",
        children: [
            tag && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Tag__WEBPACK_IMPORTED_MODULE_5__/* .Tag */ .V, {
                children: tag
            }),
            tag && label && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: "h-0.5 w-0.5 rounded-full bg-zinc-300 dark:bg-zinc-600"
            }),
            label && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: "font-mono text-xs text-zinc-400",
                children: label
            })
        ]
    });
}
function Anchor({ id , inView , children  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
        href: `#${id}`,
        className: "group text-inherit no-underline hover:text-inherit",
        children: [
            inView && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "absolute ml-[calc(-1*var(--width))] mt-1 hidden w-[var(--width)] opacity-0 transition [--width:calc(2.625rem+0.5px+50%-min(50%,calc(theme(maxWidth.lg)+theme(spacing.8))))] group-hover:opacity-100 group-focus:opacity-100 md:block lg:z-50 2xl:[--width:theme(spacing.10)]",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "group/anchor block h-5 w-5 rounded-lg bg-zinc-50 ring-1 ring-inset ring-zinc-300 transition hover:ring-zinc-500 dark:bg-zinc-800 dark:ring-zinc-700 dark:hover:bg-zinc-700 dark:hover:ring-zinc-600",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AnchorIcon, {
                        className: "h-5 w-5 stroke-zinc-500 transition dark:stroke-zinc-400 dark:group-hover/anchor:stroke-white"
                    })
                })
            }),
            children
        ]
    });
}
function Heading({ level =2 , children , id , tag , label , anchor =true , ...props }) {
    let Component = `h${level}`;
    let ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    let registerHeading = (0,_components_SectionProvider__WEBPACK_IMPORTED_MODULE_4__/* .useSectionStore */ .S)((s)=>s.registerHeading);
    let inView = (0,framer_motion__WEBPACK_IMPORTED_MODULE_3__.useInView)(ref, {
        margin: `${(0,_lib_remToPx__WEBPACK_IMPORTED_MODULE_6__/* .remToPx */ .c)(-3.5)}px 0px 0px 0px`,
        amount: "all"
    });
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (level === 2) {
            registerHeading({
                id,
                ref,
                offsetRem: tag || label ? 8 : 6
            });
        }
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Eyebrow, {
                tag: tag,
                label: label
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                ref: ref,
                id: anchor ? id : undefined,
                className: tag || label ? "mt-2 scroll-mt-32" : "scroll-mt-24",
                ...props,
                children: anchor ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Anchor, {
                    id: id,
                    inView: inView,
                    children: children
                }) : children
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8052:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ useSectionStore),
/* harmony export */   "s": () => (/* binding */ SectionProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6912);
/* harmony import */ var _lib_remToPx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8672);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([zustand__WEBPACK_IMPORTED_MODULE_2__]);
zustand__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




function createSectionStore(sections) {
    return (0,zustand__WEBPACK_IMPORTED_MODULE_2__.createStore)((set)=>({
            sections,
            visibleSections: [],
            setVisibleSections: (visibleSections)=>set((state)=>state.visibleSections.join() === visibleSections.join() ? {} : {
                        visibleSections
                    }),
            registerHeading: ({ id , ref , offsetRem  })=>set((state)=>{
                    return {
                        sections: state.sections.map((section)=>{
                            if (section.id === id) {
                                return {
                                    ...section,
                                    headingRef: ref,
                                    offsetRem
                                };
                            }
                            return section;
                        })
                    };
                })
        }));
}
function useVisibleSections(sectionStore) {
    let setVisibleSections = (0,zustand__WEBPACK_IMPORTED_MODULE_2__.useStore)(sectionStore, (s)=>s.setVisibleSections);
    let sections = (0,zustand__WEBPACK_IMPORTED_MODULE_2__.useStore)(sectionStore, (s)=>s.sections);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        function checkVisibleSections() {
            let { innerHeight , scrollY  } = window;
            let newVisibleSections = [];
            for(let sectionIndex = 0; sectionIndex < sections.length; sectionIndex++){
                let { id , headingRef , offsetRem  } = sections[sectionIndex];
                let offset = (0,_lib_remToPx__WEBPACK_IMPORTED_MODULE_3__/* .remToPx */ .c)(offsetRem);
                let top = headingRef.current.getBoundingClientRect().top + scrollY;
                if (sectionIndex === 0 && top - offset > scrollY) {
                    newVisibleSections.push("_top");
                }
                let nextSection = sections[sectionIndex + 1];
                let bottom = (nextSection?.headingRef.current.getBoundingClientRect().top ?? Infinity) + scrollY - (0,_lib_remToPx__WEBPACK_IMPORTED_MODULE_3__/* .remToPx */ .c)(nextSection?.offsetRem ?? 0);
                if (top > scrollY && top < scrollY + innerHeight || bottom > scrollY && bottom < scrollY + innerHeight || top <= scrollY && bottom >= scrollY + innerHeight) {
                    newVisibleSections.push(id);
                }
            }
            setVisibleSections(newVisibleSections);
        }
        let raf = window.requestAnimationFrame(()=>checkVisibleSections());
        window.addEventListener("scroll", checkVisibleSections, {
            passive: true
        });
        window.addEventListener("resize", checkVisibleSections);
        return ()=>{
            window.cancelAnimationFrame(raf);
            window.removeEventListener("scroll", checkVisibleSections);
            window.removeEventListener("resize", checkVisibleSections);
        };
    }, [
        setVisibleSections,
        sections
    ]);
}
const SectionStoreContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();
const useIsomorphicLayoutEffect =  true ? react__WEBPACK_IMPORTED_MODULE_1__.useEffect : 0;
function SectionProvider({ sections , children  }) {
    let [sectionStore] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(()=>createSectionStore(sections));
    useVisibleSections(sectionStore);
    useIsomorphicLayoutEffect(()=>{
        sectionStore.setState({
            sections
        });
    }, [
        sectionStore,
        sections
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SectionStoreContext.Provider, {
        value: sectionStore,
        children: children
    });
}
function useSectionStore(selector) {
    let store = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(SectionStoreContext);
    return (0,zustand__WEBPACK_IMPORTED_MODULE_2__.useStore)(store, selector);
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4740:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V": () => (/* binding */ Tag)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);


const variantStyles = {
    medium: "rounded-lg px-1.5 ring-1 ring-inset"
};
const colorStyles = {
    emerald: {
        small: "text-emerald-500 dark:text-emerald-400",
        medium: "ring-emerald-300 dark:ring-emerald-400/30 bg-emerald-400/10 text-emerald-500 dark:text-emerald-400"
    },
    sky: {
        small: "text-sky-500",
        medium: "ring-sky-300 bg-sky-400/10 text-sky-500 dark:ring-sky-400/30 dark:bg-sky-400/10 dark:text-sky-400"
    },
    amber: {
        small: "text-amber-500",
        medium: "ring-amber-300 bg-amber-400/10 text-amber-500 dark:ring-amber-400/30 dark:bg-amber-400/10 dark:text-amber-400"
    },
    rose: {
        small: "text-red-500 dark:text-rose-500",
        medium: "ring-rose-200 bg-rose-50 text-red-500 dark:ring-rose-500/20 dark:bg-rose-400/10 dark:text-rose-400"
    },
    zinc: {
        small: "text-zinc-400 dark:text-zinc-500",
        medium: "ring-zinc-200 bg-zinc-50 text-zinc-500 dark:ring-zinc-500/20 dark:bg-zinc-400/10 dark:text-zinc-400"
    }
};
const valueColorMap = {
    get: "emerald",
    post: "sky",
    put: "amber",
    delete: "rose"
};
function Tag({ children , variant ="medium" , color =valueColorMap[children.toLowerCase()] ?? "emerald"  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
        className: clsx__WEBPACK_IMPORTED_MODULE_1___default()("font-mono text-[0.625rem] font-semibold leading-6", variantStyles[variant], colorStyles[color][variant]),
        children: children
    });
}


/***/ }),

/***/ 8672:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ remToPx)
/* harmony export */ });
function remToPx(remValue) {
    let rootFontSize =  true ? 16 : 0;
    return parseFloat(remValue) * rootFontSize;
}


/***/ })

};
;