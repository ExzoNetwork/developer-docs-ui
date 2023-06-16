(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 9721:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EK": () => (/* binding */ Code),
/* harmony export */   "P3": () => (/* binding */ CodeGroup),
/* harmony export */   "SU": () => (/* binding */ Pre)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1185);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6912);
/* harmony import */ var _components_Tag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4740);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_headlessui_react__WEBPACK_IMPORTED_MODULE_2__, zustand__WEBPACK_IMPORTED_MODULE_4__]);
([_headlessui_react__WEBPACK_IMPORTED_MODULE_2__, zustand__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const languageNames = {
    js: "JavaScript",
    ts: "TypeScript",
    javascript: "JavaScript",
    typescript: "TypeScript",
    php: "PHP",
    python: "Python",
    ruby: "Ruby",
    go: "Go"
};
function getPanelTitle({ title , language  }) {
    return title ?? languageNames[language] ?? "Code";
}
function ClipboardIcon(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        viewBox: "0 0 20 20",
        "aria-hidden": "true",
        ...props,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                strokeWidth: "0",
                d: "M5.5 13.5v-5a2 2 0 0 1 2-2l.447-.894A2 2 0 0 1 9.737 4.5h.527a2 2 0 0 1 1.789 1.106l.447.894a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2Z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                fill: "none",
                strokeLinejoin: "round",
                d: "M12.5 6.5a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2m5 0-.447-.894a2 2 0 0 0-1.79-1.106h-.527a2 2 0 0 0-1.789 1.106L7.5 6.5m5 0-1 1h-3l-1-1"
            })
        ]
    });
}
function CopyButton({ code  }) {
    let [copyCount, setCopyCount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    let copied = copyCount > 0;
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (copyCount > 0) {
            let timeout = setTimeout(()=>setCopyCount(0), 1000);
            return ()=>{
                clearTimeout(timeout);
            };
        }
    }, [
        copyCount
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
        type: "button",
        className: clsx__WEBPACK_IMPORTED_MODULE_3___default()("group/button absolute right-4 top-3.5 overflow-hidden rounded-full py-1 pl-2 pr-3 text-2xs font-medium opacity-0 backdrop-blur transition focus:opacity-100 group-hover:opacity-100", copied ? "bg-emerald-400/10 ring-1 ring-inset ring-emerald-400/20" : "bg-white/5 hover:bg-white/7.5 dark:bg-white/2.5 dark:hover:bg-white/5"),
        onClick: ()=>{
            window.navigator.clipboard.writeText(code).then(()=>{
                setCopyCount((count)=>count + 1);
            });
        },
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                "aria-hidden": copied,
                className: clsx__WEBPACK_IMPORTED_MODULE_3___default()("pointer-events-none flex items-center gap-0.5 text-zinc-400 transition duration-300", copied && "-translate-y-1.5 opacity-0"),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ClipboardIcon, {
                        className: "h-5 w-5 fill-zinc-500/20 stroke-zinc-500 transition-colors group-hover/button:stroke-zinc-400"
                    }),
                    "Copy"
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                "aria-hidden": !copied,
                className: clsx__WEBPACK_IMPORTED_MODULE_3___default()("pointer-events-none absolute inset-0 flex items-center justify-center text-emerald-400 transition duration-300", !copied && "translate-y-1.5 opacity-0"),
                children: "Copied!"
            })
        ]
    });
}
function CodePanelHeader({ tag , label  }) {
    if (!tag && !label) {
        return null;
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex h-9 items-center gap-2 border-y border-b-white/7.5 border-t-transparent bg-white/2.5 bg-zinc-900 px-4 dark:border-b-white/5 dark:bg-white/1",
        children: [
            tag && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "dark flex",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Tag__WEBPACK_IMPORTED_MODULE_5__/* .Tag */ .V, {
                    variant: "small",
                    children: tag
                })
            }),
            tag && label && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: "h-0.5 w-0.5 rounded-full bg-zinc-500"
            }),
            label && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: "font-mono text-xs text-zinc-400",
                children: label
            })
        ]
    });
}
function CodePanel({ tag , label , code , children  }) {
    let child = react__WEBPACK_IMPORTED_MODULE_1__.Children.only(children);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "group dark:bg-white/2.5",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CodePanelHeader, {
                tag: child.props.tag ?? tag,
                label: child.props.label ?? label
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "relative",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("pre", {
                        className: "overflow-x-auto p-4 text-xs text-white",
                        children: children
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CopyButton, {
                        code: child.props.code ?? code
                    })
                ]
            })
        ]
    });
}
function CodeGroupHeader({ title , children , selectedIndex  }) {
    let hasTabs = react__WEBPACK_IMPORTED_MODULE_1__.Children.count(children) > 1;
    if (!title && !hasTabs) {
        return null;
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex min-h-[calc(theme(spacing.12)+1px)] flex-wrap items-start gap-x-4 border-b border-zinc-700 bg-zinc-800 px-4 dark:border-zinc-800 dark:bg-transparent",
        children: [
            title && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                className: "mr-auto pt-3 text-xs font-semibold text-white",
                children: title
            }),
            hasTabs && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Tab.List, {
                className: "-mb-px flex gap-4 text-xs font-medium",
                children: react__WEBPACK_IMPORTED_MODULE_1__.Children.map(children, (child, childIndex)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Tab, {
                        className: clsx__WEBPACK_IMPORTED_MODULE_3___default()("border-b py-3 transition focus:[&:not(:focus-visible)]:outline-none", childIndex === selectedIndex ? "border-emerald-500 text-emerald-400" : "border-transparent text-zinc-400 hover:text-zinc-300"),
                        children: getPanelTitle(child.props)
                    }))
            })
        ]
    });
}
function CodeGroupPanels({ children , ...props }) {
    let hasTabs = react__WEBPACK_IMPORTED_MODULE_1__.Children.count(children) > 1;
    if (hasTabs) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Tab.Panels, {
            children: react__WEBPACK_IMPORTED_MODULE_1__.Children.map(children, (child)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Tab.Panel, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CodePanel, {
                        ...props,
                        children: child
                    })
                }))
        });
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CodePanel, {
        ...props,
        children: children
    });
}
function usePreventLayoutShift() {
    let positionRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    let rafRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        return ()=>{
            window.cancelAnimationFrame(rafRef.current);
        };
    }, []);
    return {
        positionRef,
        preventLayoutShift (callback) {
            let initialTop = positionRef.current.getBoundingClientRect().top;
            callback();
            rafRef.current = window.requestAnimationFrame(()=>{
                let newTop = positionRef.current.getBoundingClientRect().top;
                window.scrollBy(0, newTop - initialTop);
            });
        }
    };
}
const usePreferredLanguageStore = (0,zustand__WEBPACK_IMPORTED_MODULE_4__.create)((set)=>({
        preferredLanguages: [],
        addPreferredLanguage: (language)=>set((state)=>({
                    preferredLanguages: [
                        ...state.preferredLanguages.filter((preferredLanguage)=>preferredLanguage !== language),
                        language
                    ]
                }))
    }));
function useTabGroupProps(availableLanguages) {
    let { preferredLanguages , addPreferredLanguage  } = usePreferredLanguageStore();
    let [selectedIndex, setSelectedIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    let activeLanguage = [
        ...availableLanguages
    ].sort((a, z)=>preferredLanguages.indexOf(z) - preferredLanguages.indexOf(a))[0];
    let languageIndex = availableLanguages.indexOf(activeLanguage);
    let newSelectedIndex = languageIndex === -1 ? selectedIndex : languageIndex;
    if (newSelectedIndex !== selectedIndex) {
        setSelectedIndex(newSelectedIndex);
    }
    let { positionRef , preventLayoutShift  } = usePreventLayoutShift();
    return {
        as: "div",
        ref: positionRef,
        selectedIndex,
        onChange: (newSelectedIndex)=>{
            preventLayoutShift(()=>addPreferredLanguage(availableLanguages[newSelectedIndex]));
        }
    };
}
const CodeGroupContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(false);
function CodeGroup({ children , title , ...props }) {
    let languages = react__WEBPACK_IMPORTED_MODULE_1__.Children.map(children, (child)=>getPanelTitle(child.props));
    let tabGroupProps = useTabGroupProps(languages);
    let hasTabs = react__WEBPACK_IMPORTED_MODULE_1__.Children.count(children) > 1;
    let Container = hasTabs ? _headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Tab.Group : "div";
    let containerProps = hasTabs ? tabGroupProps : {};
    let headerProps = hasTabs ? {
        selectedIndex: tabGroupProps.selectedIndex
    } : {};
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CodeGroupContext.Provider, {
        value: true,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Container, {
            ...containerProps,
            className: "not-prose my-6 overflow-hidden rounded-2xl bg-zinc-900 shadow-md dark:ring-1 dark:ring-white/10",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CodeGroupHeader, {
                    title: title,
                    ...headerProps,
                    children: children
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CodeGroupPanels, {
                    ...props,
                    children: children
                })
            ]
        })
    });
}
function Code({ children , ...props }) {
    let isGrouped = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(CodeGroupContext);
    if (isGrouped) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("code", {
            ...props,
            dangerouslySetInnerHTML: {
                __html: children
            }
        });
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("code", {
        ...props,
        children: children
    });
}
function Pre({ children , ...props }) {
    let isGrouped = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(CodeGroupContext);
    if (isGrouped) {
        return children;
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CodeGroup, {
        ...props,
        children: children
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7623:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ Footer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1185);
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5825);
/* harmony import */ var _components_Navigation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3188);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_headlessui_react__WEBPACK_IMPORTED_MODULE_4__, _components_Navigation__WEBPACK_IMPORTED_MODULE_6__]);
([_headlessui_react__WEBPACK_IMPORTED_MODULE_4__, _components_Navigation__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







function CheckIcon(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        viewBox: "0 0 20 20",
        "aria-hidden": "true",
        ...props,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                cx: "10",
                cy: "10",
                r: "10",
                strokeWidth: "0"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                fill: "none",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "1.5",
                d: "m6.75 10.813 2.438 2.437c1.218-4.469 4.062-6.5 4.062-6.5"
            })
        ]
    });
}
function FeedbackButton(props) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        type: "submit",
        className: "px-3 text-sm font-medium text-zinc-600 transition hover:bg-zinc-900/2.5 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-white/5 dark:hover:text-white",
        ...props
    });
}
const FeedbackForm = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(function FeedbackForm({ onSubmit  }, ref) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
        ref: ref,
        onSubmit: onSubmit,
        className: "absolute inset-0 flex items-center justify-center gap-6 md:justify-start",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "text-sm text-zinc-600 dark:text-zinc-400",
                children: "Was this page helpful?"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "group grid h-8 grid-cols-[1fr,1px,1fr] overflow-hidden rounded-full border border-zinc-900/10 dark:border-white/10",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FeedbackButton, {
                        "data-response": "yes",
                        children: "Yes"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "bg-zinc-900/10 dark:bg-white/10"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FeedbackButton, {
                        "data-response": "no",
                        children: "No"
                    })
                ]
            })
        ]
    });
});
const FeedbackThanks = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(function FeedbackThanks(_props, ref) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        ref: ref,
        className: "absolute inset-0 flex justify-center md:justify-start",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "flex items-center gap-3 rounded-full bg-emerald-50/50 py-1 pl-1.5 pr-3 text-sm text-emerald-900 ring-1 ring-inset ring-emerald-500/20 dark:bg-emerald-500/5 dark:text-emerald-200 dark:ring-emerald-500/30",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CheckIcon, {
                    className: "h-5 w-5 flex-none fill-emerald-500 stroke-white dark:fill-emerald-200/20 dark:stroke-emerald-200"
                }),
                "Thanks for your feedback!"
            ]
        })
    });
});
function Feedback() {
    let [submitted, setSubmitted] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    function onSubmit(event) {
        event.preventDefault();
        // event.nativeEvent.submitter.dataset.response
        // => "yes" or "no"
        setSubmitted(true);
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "relative h-8",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.Transition, {
                show: !submitted,
                as: react__WEBPACK_IMPORTED_MODULE_1__.Fragment,
                leaveFrom: "opacity-100",
                leaveTo: "opacity-0",
                leave: "pointer-events-none duration-300",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FeedbackForm, {
                    onSubmit: onSubmit
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.Transition, {
                show: submitted,
                as: react__WEBPACK_IMPORTED_MODULE_1__.Fragment,
                enterFrom: "opacity-0",
                enterTo: "opacity-100",
                enter: "delay-150 duration-300",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FeedbackThanks, {})
            })
        ]
    });
}
function PageLink({ label , page , previous =false  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Button__WEBPACK_IMPORTED_MODULE_5__/* .Button */ .z, {
                href: page.href,
                "aria-label": `${label}: ${page.title}`,
                variant: "secondary",
                arrow: previous ? "left" : "right",
                children: label
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                href: page.href,
                tabIndex: -1,
                "aria-hidden": "true",
                className: "text-base font-semibold text-zinc-900 transition hover:text-zinc-600 dark:text-white dark:hover:text-zinc-300",
                children: page.title
            })
        ]
    });
}
function PageNavigation() {
    let router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    let allPages = _components_Navigation__WEBPACK_IMPORTED_MODULE_6__/* .navigation.flatMap */ .G.flatMap((group)=>group.links);
    let currentPageIndex = allPages.findIndex((page)=>page.href === router.pathname);
    if (currentPageIndex === -1) {
        return null;
    }
    let previousPage = allPages[currentPageIndex - 1];
    let nextPage = allPages[currentPageIndex + 1];
    if (!previousPage && !nextPage) {
        return null;
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex",
        children: [
            previousPage && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex flex-col items-start gap-3",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(PageLink, {
                    label: "Previous",
                    page: previousPage,
                    previous: true
                })
            }),
            nextPage && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "ml-auto flex flex-col items-end gap-3",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(PageLink, {
                    label: "Next",
                    page: nextPage
                })
            })
        ]
    });
}
function TwitterIcon(props) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        viewBox: "0 0 20 20",
        "aria-hidden": "true",
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "M16.712 6.652c.01.146.01.29.01.436 0 4.449-3.267 9.579-9.242 9.579v-.003a8.963 8.963 0 0 1-4.98-1.509 6.379 6.379 0 0 0 4.807-1.396c-1.39-.027-2.608-.966-3.035-2.337.487.097.99.077 1.467-.059-1.514-.316-2.606-1.696-2.606-3.3v-.041c.45.26.956.404 1.475.42C3.18 7.454 2.74 5.486 3.602 3.947c1.65 2.104 4.083 3.382 6.695 3.517a3.446 3.446 0 0 1 .94-3.217 3.172 3.172 0 0 1 4.596.148 6.38 6.38 0 0 0 2.063-.817 3.357 3.357 0 0 1-1.428 1.861 6.283 6.283 0 0 0 1.865-.53 6.735 6.735 0 0 1-1.62 1.744Z"
        })
    });
}
function GitHubIcon(props) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        viewBox: "0 0 20 20",
        "aria-hidden": "true",
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M10 1.667c-4.605 0-8.334 3.823-8.334 8.544 0 3.78 2.385 6.974 5.698 8.106.417.075.573-.182.573-.406 0-.203-.011-.875-.011-1.592-2.093.397-2.635-.522-2.802-1.002-.094-.246-.5-1.005-.854-1.207-.291-.16-.708-.556-.01-.567.656-.01 1.124.62 1.281.876.75 1.292 1.948.93 2.427.705.073-.555.291-.93.531-1.143-1.854-.213-3.791-.95-3.791-4.218 0-.929.322-1.698.854-2.296-.083-.214-.375-1.09.083-2.265 0 0 .698-.224 2.292.876a7.576 7.576 0 0 1 2.083-.288c.709 0 1.417.096 2.084.288 1.593-1.11 2.291-.875 2.291-.875.459 1.174.167 2.05.084 2.263.53.599.854 1.357.854 2.297 0 3.278-1.948 4.005-3.802 4.219.302.266.563.78.563 1.58 0 1.143-.011 2.061-.011 2.35 0 .224.156.491.573.405a8.365 8.365 0 0 0 4.11-3.116 8.707 8.707 0 0 0 1.567-4.99c0-4.721-3.73-8.545-8.334-8.545Z"
        })
    });
}
function DiscordIcon(props) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        viewBox: "0 0 20 20",
        "aria-hidden": "true",
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "M16.238 4.515a14.842 14.842 0 0 0-3.664-1.136.055.055 0 0 0-.059.027 10.35 10.35 0 0 0-.456.938 13.702 13.702 0 0 0-4.115 0 9.479 9.479 0 0 0-.464-.938.058.058 0 0 0-.058-.027c-1.266.218-2.497.6-3.664 1.136a.052.052 0 0 0-.024.02C1.4 8.023.76 11.424 1.074 14.782a.062.062 0 0 0 .024.042 14.923 14.923 0 0 0 4.494 2.272.058.058 0 0 0 .064-.02c.346-.473.654-.972.92-1.496a.057.057 0 0 0-.032-.08 9.83 9.83 0 0 1-1.404-.669.058.058 0 0 1-.029-.046.058.058 0 0 1 .023-.05c.094-.07.189-.144.279-.218a.056.056 0 0 1 .058-.008c2.946 1.345 6.135 1.345 9.046 0a.056.056 0 0 1 .059.007c.09.074.184.149.28.22a.058.058 0 0 1 .023.049.059.059 0 0 1-.028.046 9.224 9.224 0 0 1-1.405.669.058.058 0 0 0-.033.033.056.056 0 0 0 .002.047c.27.523.58 1.022.92 1.495a.056.056 0 0 0 .062.021 14.878 14.878 0 0 0 4.502-2.272.055.055 0 0 0 .016-.018.056.056 0 0 0 .008-.023c.375-3.883-.63-7.256-2.662-10.246a.046.046 0 0 0-.023-.021Zm-9.223 8.221c-.887 0-1.618-.814-1.618-1.814s.717-1.814 1.618-1.814c.908 0 1.632.821 1.618 1.814 0 1-.717 1.814-1.618 1.814Zm5.981 0c-.887 0-1.618-.814-1.618-1.814s.717-1.814 1.618-1.814c.908 0 1.632.821 1.618 1.814 0 1-.71 1.814-1.618 1.814Z"
        })
    });
}
function SocialLink({ href , icon: Icon , children  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
        href: href,
        className: "group",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: "sr-only",
                children: children
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Icon, {
                className: "h-5 w-5 fill-zinc-700 transition group-hover:fill-zinc-900 dark:group-hover:fill-zinc-500"
            })
        ]
    });
}
function SmallPrint() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex flex-col items-center justify-between gap-5 border-t border-zinc-900/5 pt-8 dark:border-white/5 sm:flex-row",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                className: "text-xs text-zinc-600 dark:text-zinc-400",
                children: [
                    "\xa9 Copyright ",
                    new Date().getFullYear(),
                    ". All rights reserved."
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex gap-4",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SocialLink, {
                        href: "#",
                        icon: TwitterIcon,
                        children: "Follow us on Twitter"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SocialLink, {
                        href: "#",
                        icon: GitHubIcon,
                        children: "Follow us on GitHub"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SocialLink, {
                        href: "#",
                        icon: DiscordIcon,
                        children: "Join our Discord server"
                    })
                ]
            })
        ]
    });
}
function Footer() {
    let router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("footer", {
        className: "mx-auto max-w-2xl space-y-10 pb-16 lg:max-w-5xl",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Feedback, {}, router.pathname),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(PageNavigation, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SmallPrint, {})
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1572:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* binding */ Header)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6197);
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5825);
/* harmony import */ var _components_Logo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3208);
/* harmony import */ var _components_MobileNavigation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5387);
/* harmony import */ var _components_ModeToggle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6082);
/* harmony import */ var _components_Search__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8915);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_4__, _components_MobileNavigation__WEBPACK_IMPORTED_MODULE_7__, _components_Search__WEBPACK_IMPORTED_MODULE_9__]);
([framer_motion__WEBPACK_IMPORTED_MODULE_4__, _components_MobileNavigation__WEBPACK_IMPORTED_MODULE_7__, _components_Search__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











function TopLevelNavItem({ href , children  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
            href: href,
            className: "text-sm leading-5 text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white",
            children: children
        })
    });
}
const Header = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(function Header({ className  }, ref) {
    let { isOpen: mobileNavIsOpen  } = (0,_components_MobileNavigation__WEBPACK_IMPORTED_MODULE_7__/* .useMobileNavigationStore */ .fX)();
    let isInsideMobileNavigation = (0,_components_MobileNavigation__WEBPACK_IMPORTED_MODULE_7__/* .useIsInsideMobileNavigation */ .Fi)();
    let { scrollY  } = (0,framer_motion__WEBPACK_IMPORTED_MODULE_4__.useScroll)();
    let bgOpacityLight = (0,framer_motion__WEBPACK_IMPORTED_MODULE_4__.useTransform)(scrollY, [
        0,
        72
    ], [
        0.5,
        0.9
    ]);
    let bgOpacityDark = (0,framer_motion__WEBPACK_IMPORTED_MODULE_4__.useTransform)(scrollY, [
        0,
        72
    ], [
        0.2,
        0.8
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {
        ref: ref,
        className: clsx__WEBPACK_IMPORTED_MODULE_3___default()(className, "fixed inset-x-0 top-0 z-50 flex h-14 items-center justify-between gap-12 px-4 transition sm:px-6 lg:left-72 lg:z-30 lg:px-8 xl:left-80", !isInsideMobileNavigation && "backdrop-blur-sm dark:backdrop-blur lg:left-72 xl:left-80", isInsideMobileNavigation ? "bg-white dark:bg-zinc-900" : "bg-white/[var(--bg-opacity-light)] dark:bg-zinc-900/[var(--bg-opacity-dark)]"),
        style: {
            "--bg-opacity-light": bgOpacityLight,
            "--bg-opacity-dark": bgOpacityDark
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: clsx__WEBPACK_IMPORTED_MODULE_3___default()("absolute inset-x-0 top-full h-px transition", (isInsideMobileNavigation || !mobileNavIsOpen) && "bg-zinc-900/7.5 dark:bg-white/7.5")
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Search__WEBPACK_IMPORTED_MODULE_9__/* .Search */ .o, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex items-center gap-5 lg:hidden",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_MobileNavigation__WEBPACK_IMPORTED_MODULE_7__/* .MobileNavigation */ .$o, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                        href: "/",
                        "aria-label": "Home",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Logo__WEBPACK_IMPORTED_MODULE_6__/* .Logo */ .T, {
                            className: "h-6"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex items-center gap-5",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
                        className: "hidden md:block",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                            role: "list",
                            className: "flex items-center gap-8",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TopLevelNavItem, {
                                    href: "/",
                                    children: "API"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TopLevelNavItem, {
                                    href: "#",
                                    children: "Documentation"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TopLevelNavItem, {
                                    href: "#",
                                    children: "Support"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "hidden md:block md:h-5 md:w-px md:bg-zinc-900/10 md:dark:bg-white/15"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex gap-4",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Search__WEBPACK_IMPORTED_MODULE_9__/* .MobileSearch */ ._, {}),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ModeToggle__WEBPACK_IMPORTED_MODULE_8__/* .ModeToggle */ .l, {})
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "hidden min-[416px]:contents",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Button__WEBPACK_IMPORTED_MODULE_5__/* .Button */ .z, {
                            href: "#",
                            children: "Sign in"
                        })
                    })
                ]
            })
        ]
    });
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 547:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ Layout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6197);
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7623);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1572);
/* harmony import */ var _components_Logo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3208);
/* harmony import */ var _components_Navigation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3188);
/* harmony import */ var _components_Prose__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3621);
/* harmony import */ var _components_SectionProvider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8052);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_2__, _components_Footer__WEBPACK_IMPORTED_MODULE_3__, _components_Header__WEBPACK_IMPORTED_MODULE_4__, _components_Navigation__WEBPACK_IMPORTED_MODULE_6__, _components_SectionProvider__WEBPACK_IMPORTED_MODULE_8__]);
([framer_motion__WEBPACK_IMPORTED_MODULE_2__, _components_Footer__WEBPACK_IMPORTED_MODULE_3__, _components_Header__WEBPACK_IMPORTED_MODULE_4__, _components_Navigation__WEBPACK_IMPORTED_MODULE_6__, _components_SectionProvider__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









function Layout({ children , sections =[]  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_SectionProvider__WEBPACK_IMPORTED_MODULE_8__/* .SectionProvider */ .s, {
        sections: sections,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "lg:ml-72 xl:ml-80",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.header, {
                    layoutScroll: true,
                    className: "contents lg:pointer-events-none lg:fixed lg:inset-0 lg:z-40 lg:flex",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "contents lg:pointer-events-auto lg:block lg:w-72 lg:overflow-y-auto lg:border-r lg:border-zinc-900/10 lg:px-6 lg:pb-8 lg:pt-4 lg:dark:border-white/10 xl:w-80",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "hidden lg:flex",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                    href: "/",
                                    "aria-label": "Home",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Logo__WEBPACK_IMPORTED_MODULE_5__/* .Logo */ .T, {
                                        className: "h-6"
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Header__WEBPACK_IMPORTED_MODULE_4__/* .Header */ .h, {}),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Navigation__WEBPACK_IMPORTED_MODULE_6__/* .Navigation */ .W, {
                                className: "hidden lg:mt-10 lg:block"
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "relative px-4 pt-14 sm:px-6 lg:px-8",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("main", {
                            className: "py-16",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Prose__WEBPACK_IMPORTED_MODULE_7__/* .Prose */ .M, {
                                as: "article",
                                children: children
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_3__/* .Footer */ .$, {})
                    ]
                })
            ]
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3208:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T": () => (/* binding */ Logo)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);

function Logo(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        width: "171",
        height: "18",
        viewBox: "0 0 171 18",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
                clipPath: "url(#clip0_9_291)",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        d: "M28.02 9.53994L29.2411 8.31075H25.7099V9.53994H28.02ZM30.0656 4.49799H23.4697V13.4936H30.0656V12.1549H24.9087V5.83679H30.0656V4.49799Z",
                        fill: "#11141A",
                        className: "dark:fill-white"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        d: "M101.751 9.53994L102.972 8.31075H99.4411V9.53994H101.751ZM103.797 4.49799H97.2012V13.4936H103.797V12.1549H98.64V5.83679H103.797V4.49799Z",
                        fill: "#11141A",
                        className: "dark:fill-white"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        d: "M34.4763 4.17484H36.0273L36.1565 4.23987L38.5476 7.36208L40.9386 4.23987L41.0678 4.17484H42.6189L42.6832 4.23987L39.3876 8.46788L43.0709 13.2162L43.0067 13.2813H41.4557L41.3263 13.2162L38.5476 9.57367L35.7687 13.2162L35.6395 13.2813H34.0886L34.0239 13.2162L37.7074 8.46788L34.4117 4.23987L34.4763 4.17484Z",
                        fill: "#11141A",
                        className: "dark:fill-white"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        d: "M47.137 4.17484H54.181L54.2457 4.23987L49.1404 11.9804H54.2457L54.3099 12.0584V13.2162L54.2457 13.2813H46.7493L46.6846 13.2162L51.7898 5.47577H47.137L47.0723 5.4107V4.23987L47.137 4.17484Z",
                        fill: "#11141A",
                        className: "dark:fill-white"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        d: "M63.686 3.97971C66.3227 3.97971 68.4683 6.11319 68.4683 8.72805C68.4683 11.3429 66.3227 13.4764 63.686 13.4764C61.0493 13.4764 58.9038 11.3429 58.9038 8.72805C58.9038 6.11319 61.0493 3.97971 63.686 3.97971ZM63.686 5.34567C61.8635 5.34567 60.3901 6.85472 60.3901 8.72805C60.3901 10.6014 61.8635 12.1105 63.686 12.1105C65.5085 12.1105 66.9816 10.6014 66.9816 8.72805C66.9816 6.85472 65.5085 5.34567 63.686 5.34567Z",
                        fill: "#11141A",
                        className: "dark:fill-white"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        d: "M141.886 3.97971C144.522 3.97971 146.668 6.11319 146.668 8.72805C146.668 11.3429 144.522 13.4764 141.886 13.4764C139.249 13.4764 137.104 11.3429 137.104 8.72805C137.104 6.11319 139.249 3.97971 141.886 3.97971ZM141.886 5.34567C140.063 5.34567 138.59 6.85472 138.59 8.72805C138.59 10.6014 140.063 12.1105 141.886 12.1105C143.708 12.1105 145.181 10.6014 145.181 8.72805C145.181 6.85472 143.708 5.34567 141.886 5.34567Z",
                        fill: "#11141A",
                        className: "dark:fill-white"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        d: "M163.667 4.17484H164.83L164.895 4.23987V7.36208L168.578 4.23987L168.707 4.17484H170.388L170.452 4.23987L165.864 8.0776L170.969 13.2162L170.904 13.2813H169.224L169.095 13.2162L164.895 8.92319V13.2162L164.83 13.2813H163.667L163.602 13.2162V4.23987L163.667 4.17484Z",
                        fill: "#11141A",
                        className: "dark:fill-white"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        d: "M108.823 4.17484H115.931L115.996 4.23987V5.4107L115.931 5.47577H113.023V13.2162L112.959 13.2813H111.796L111.731 13.2162V5.47577H108.823L108.758 5.4107V4.23987L108.823 4.17484Z",
                        fill: "#11141A",
                        className: "dark:fill-white"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        d: "M120.48 4.17484H121.773L121.837 4.23987L123.905 11.1348L125.909 4.36997L125.973 4.30494H127.266L127.331 4.36997L129.333 11.1348L131.402 4.23987L131.466 4.17484H132.759L132.823 4.23987L130.045 13.2162L129.98 13.2813H128.752L128.687 13.2162L126.619 6.51649L124.552 13.2162L124.487 13.2813H123.259L123.194 13.2162L120.416 4.23987L120.48 4.17484Z",
                        fill: "#11141A",
                        className: "dark:fill-white"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        d: "M89.4004 11.8059L83.6375 4.49792H82.3037V13.4936H83.6375V6.19345L89.4004 13.4936H90.7264V4.49792H89.4004V11.8059Z",
                        fill: "#11141A",
                        className: "dark:fill-white"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        d: "M157.746 9.38414C157.858 9.2953 157.955 9.19841 158.035 9.10953C158.476 8.60881 158.717 7.9385 158.717 7.23583C158.717 5.8709 157.778 4.49792 155.973 4.49792H150.822V13.7615H152.193V5.64478H155.973C157.08 5.64478 157.569 6.44433 157.569 7.22774C157.569 7.64772 157.425 8.05156 157.176 8.33421C156.912 8.63303 156.543 8.80266 156.077 8.81879H154.649H152.587V9.96565H155.331L157.586 13.7454H159.014L156.711 9.87681C157.16 9.7718 157.497 9.57799 157.746 9.368V9.38414Z",
                        fill: "#11141A",
                        className: "dark:fill-white"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        opacity: "0.1",
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M7.1855 13.6256C6.42963 13.6256 5.69833 13.5223 5.00391 13.3279C5.08574 14.1893 5.24949 15.0437 5.49507 15.8802C8.03275 15.2642 10.3426 13.9233 12.1395 12.0105L12.1012 11.9705C10.7314 13.0096 9.03007 13.6256 7.18414 13.6256H7.1855Z",
                        fill: "black",
                        className: "dark:fill-white"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M11.5687 2.24908L7.71304 0C6.58745 1.3726 5.74155 2.93676 5.20264 4.59875C8.16872 5.22444 10.7896 6.7996 12.7379 8.99772C13.8936 10.3014 14.8118 11.8228 15.4257 13.4931V4.49818H15.4244L11.5701 2.24908H11.5687Z",
                        fill: "url(#paint0_linear_9_291)",
                        className: "dark:fill-white"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        opacity: "0.3",
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M6.54053 1.66239C6.54861 1.64855 6.55797 1.63472 6.56601 1.62088L6.54053 1.66239Z",
                        fill: "#A4A4A4",
                        className: "dark:fill-white"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M5.19819 13.3899C3.50365 13.7496 1.73955 13.7923 0 13.4933L3.85702 15.7423L7.71404 17.9914L11.5697 15.7423L15.4267 13.4933C14.8128 11.8216 13.8946 10.3002 12.739 8.99783C10.7197 11.28 8.05785 12.7849 5.20091 13.3899H5.19819Z",
                        fill: "url(#paint1_linear_9_291)",
                        className: "dark:fill-white"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M0 4.49891V13.4952C1.73955 13.7942 3.50366 13.7502 5.19819 13.3919C4.25131 10.484 4.29226 7.40396 5.20091 4.60089C5.74119 2.93887 6.58572 1.37471 7.71132 0.00210571L3.85429 2.25119L0 4.49891Z",
                        fill: "url(#paint2_linear_9_291)",
                        className: "dark:fill-white"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        opacity: "0.3",
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M2.12738 7.83319C1.62257 9.7336 1.51069 11.736 1.80539 13.6819C2.94872 13.7246 4.08795 13.6254 5.19852 13.3898C4.25168 10.4819 4.29259 7.40186 5.20128 4.59875C5.74156 2.93676 6.5861 1.3726 7.71169 0C4.87383 1.85081 2.96509 4.6773 2.12738 7.83319Z",
                        fill: "url(#paint3_linear_9_291)",
                        className: "dark:fill-white"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("defs", {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("linearGradient", {
                        id: "paint0_linear_9_291",
                        x1: "17.0861",
                        y1: "12.1081",
                        x2: "6.04798",
                        y2: "0.0316813",
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                                stopColor: "#11171F"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                                offset: "1",
                                stopColor: "#47484A"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("linearGradient", {
                        id: "paint1_linear_9_291",
                        x1: "16.4923",
                        y1: "11.3779",
                        x2: "-0.355658",
                        y2: "16.9553",
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                                stopColor: "#11171F"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                                offset: "1",
                                stopColor: "#47484A"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("linearGradient", {
                        id: "paint2_linear_9_291",
                        x1: "0.34791",
                        y1: "15.2537",
                        x2: "6.01552",
                        y2: "-0.315784",
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                                stopColor: "#11171F"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                                offset: "1",
                                stopColor: "#47484A"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("linearGradient", {
                        id: "paint3_linear_9_291",
                        x1: "4.67811",
                        y1: "0",
                        x2: "4.67811",
                        y2: "13.6916",
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                                stopColor: "#11171F"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                                offset: "1",
                                stopColor: "#47484A",
                                stopOpacity: "0.49"
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("clipPath", {
                        id: "clip0_9_291",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                            width: "171",
                            height: "18",
                            fill: "white"
                        })
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 5387:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$o": () => (/* binding */ MobileNavigation),
/* harmony export */   "Fi": () => (/* binding */ useIsInsideMobileNavigation),
/* harmony export */   "fX": () => (/* binding */ useMobileNavigationStore)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1185);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6197);
/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6912);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1572);
/* harmony import */ var _components_Navigation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3188);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_headlessui_react__WEBPACK_IMPORTED_MODULE_2__, framer_motion__WEBPACK_IMPORTED_MODULE_3__, zustand__WEBPACK_IMPORTED_MODULE_4__, _components_Header__WEBPACK_IMPORTED_MODULE_5__, _components_Navigation__WEBPACK_IMPORTED_MODULE_6__]);
([_headlessui_react__WEBPACK_IMPORTED_MODULE_2__, framer_motion__WEBPACK_IMPORTED_MODULE_3__, zustand__WEBPACK_IMPORTED_MODULE_4__, _components_Header__WEBPACK_IMPORTED_MODULE_5__, _components_Navigation__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







function MenuIcon(props) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        viewBox: "0 0 10 9",
        fill: "none",
        strokeLinecap: "round",
        "aria-hidden": "true",
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "M.5 1h9M.5 8h9M.5 4.5h9"
        })
    });
}
function XIcon(props) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        viewBox: "0 0 10 9",
        fill: "none",
        strokeLinecap: "round",
        "aria-hidden": "true",
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "m1.5 1 7 7M8.5 1l-7 7"
        })
    });
}
const IsInsideMobileNavigationContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(false);
function useIsInsideMobileNavigation() {
    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(IsInsideMobileNavigationContext);
}
const useMobileNavigationStore = (0,zustand__WEBPACK_IMPORTED_MODULE_4__.create)((set)=>({
        isOpen: false,
        open: ()=>set({
                isOpen: true
            }),
        close: ()=>set({
                isOpen: false
            }),
        toggle: ()=>set((state)=>({
                    isOpen: !state.isOpen
                }))
    }));
function MobileNavigation() {
    let isInsideMobileNavigation = useIsInsideMobileNavigation();
    let { isOpen , toggle , close  } = useMobileNavigationStore();
    let ToggleIcon = isOpen ? XIcon : MenuIcon;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(IsInsideMobileNavigationContext.Provider, {
        value: true,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                type: "button",
                className: "flex h-6 w-6 items-center justify-center rounded-md transition hover:bg-zinc-900/5 dark:hover:bg-white/5",
                "aria-label": "Toggle navigation",
                onClick: toggle,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ToggleIcon, {
                    className: "w-2.5 stroke-zinc-900 dark:stroke-white"
                })
            }),
            !isInsideMobileNavigation && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Transition.Root, {
                show: isOpen,
                as: react__WEBPACK_IMPORTED_MODULE_1__.Fragment,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Dialog, {
                    onClose: close,
                    className: "fixed inset-0 z-50 lg:hidden",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Transition.Child, {
                            as: react__WEBPACK_IMPORTED_MODULE_1__.Fragment,
                            enter: "duration-300 ease-out",
                            enterFrom: "opacity-0",
                            enterTo: "opacity-100",
                            leave: "duration-200 ease-in",
                            leaveFrom: "opacity-100",
                            leaveTo: "opacity-0",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "fixed inset-0 top-14 bg-zinc-400/20 backdrop-blur-sm dark:bg-black/40"
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Dialog.Panel, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Transition.Child, {
                                    as: react__WEBPACK_IMPORTED_MODULE_1__.Fragment,
                                    enter: "duration-300 ease-out",
                                    enterFrom: "opacity-0",
                                    enterTo: "opacity-100",
                                    leave: "duration-200 ease-in",
                                    leaveFrom: "opacity-100",
                                    leaveTo: "opacity-0",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Header__WEBPACK_IMPORTED_MODULE_5__/* .Header */ .h, {})
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Transition.Child, {
                                    as: react__WEBPACK_IMPORTED_MODULE_1__.Fragment,
                                    enter: "duration-500 ease-in-out",
                                    enterFrom: "-translate-x-full",
                                    enterTo: "translate-x-0",
                                    leave: "duration-500 ease-in-out",
                                    leaveFrom: "translate-x-0",
                                    leaveTo: "-translate-x-full",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {
                                        layoutScroll: true,
                                        className: "fixed bottom-0 left-0 top-14 w-full overflow-y-auto bg-white px-4 pb-4 pt-6 shadow-lg shadow-zinc-900/10 ring-1 ring-zinc-900/7.5 dark:bg-zinc-900 dark:ring-zinc-800 min-[416px]:max-w-sm sm:px-6 sm:pb-10",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Navigation__WEBPACK_IMPORTED_MODULE_6__/* .Navigation */ .W, {})
                                    })
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6082:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "l": () => (/* binding */ ModeToggle)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);

function SunIcon(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        viewBox: "0 0 20 20",
        fill: "none",
        "aria-hidden": "true",
        ...props,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M12.5 10a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                strokeLinecap: "round",
                d: "M10 5.5v-1M13.182 6.818l.707-.707M14.5 10h1M13.182 13.182l.707.707M10 15.5v-1M6.11 13.889l.708-.707M4.5 10h1M6.11 6.111l.708.707"
            })
        ]
    });
}
function MoonIcon(props) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        viewBox: "0 0 20 20",
        fill: "none",
        "aria-hidden": "true",
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "M15.224 11.724a5.5 5.5 0 0 1-6.949-6.949 5.5 5.5 0 1 0 6.949 6.949Z"
        })
    });
}
function ModeToggle() {
    function disableTransitionsTemporarily() {
        document.documentElement.classList.add("[&_*]:!transition-none");
        window.setTimeout(()=>{
            document.documentElement.classList.remove("[&_*]:!transition-none");
        }, 0);
    }
    function toggleMode() {
        disableTransitionsTemporarily();
        let darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
        let isSystemDarkMode = darkModeMediaQuery.matches;
        let isDarkMode = document.documentElement.classList.toggle("dark");
        if (isDarkMode === isSystemDarkMode) {
            delete window.localStorage.isDarkMode;
        } else {
            window.localStorage.isDarkMode = isDarkMode;
        }
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
        type: "button",
        className: "flex h-6 w-6 items-center justify-center rounded-md transition hover:bg-zinc-900/5 dark:hover:bg-white/5",
        "aria-label": "Toggle dark mode",
        onClick: toggleMode,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SunIcon, {
                className: "h-5 w-5 stroke-zinc-900 dark:hidden"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MoonIcon, {
                className: "hidden h-5 w-5 stroke-white dark:block"
            })
        ]
    });
}


/***/ }),

/***/ 3188:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "G": () => (/* binding */ navigation),
/* harmony export */   "W": () => (/* binding */ Navigation)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6197);
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5825);
/* harmony import */ var _components_MobileNavigation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5387);
/* harmony import */ var _components_SectionProvider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8052);
/* harmony import */ var _components_Tag__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4740);
/* harmony import */ var _lib_remToPx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8672);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_5__, _components_MobileNavigation__WEBPACK_IMPORTED_MODULE_7__, _components_SectionProvider__WEBPACK_IMPORTED_MODULE_8__]);
([framer_motion__WEBPACK_IMPORTED_MODULE_5__, _components_MobileNavigation__WEBPACK_IMPORTED_MODULE_7__, _components_SectionProvider__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











function useInitialValue(value, condition = true) {
    let initialValue = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(value).current;
    return condition ? initialValue : value;
}
function TopLevelNavItem({ href , children  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
        className: "md:hidden",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
            href: href,
            className: "block py-1 text-sm text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white",
            children: children
        })
    });
}
function NavLink({ href , tag , active , isAnchorLink =false , children  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
        href: href,
        "aria-current": active ? "page" : undefined,
        className: clsx__WEBPACK_IMPORTED_MODULE_4___default()("flex justify-between gap-2 py-1 pr-3 text-sm transition", isAnchorLink ? "pl-7" : "pl-4", active ? "text-zinc-900 dark:text-white" : "text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: "truncate",
                children: children
            }),
            tag && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Tag__WEBPACK_IMPORTED_MODULE_9__/* .Tag */ .V, {
                variant: "small",
                color: "zinc",
                children: tag
            })
        ]
    });
}
function VisibleSectionHighlight({ group , pathname  }) {
    let [sections, visibleSections] = useInitialValue([
        (0,_components_SectionProvider__WEBPACK_IMPORTED_MODULE_8__/* .useSectionStore */ .S)((s)=>s.sections),
        (0,_components_SectionProvider__WEBPACK_IMPORTED_MODULE_8__/* .useSectionStore */ .S)((s)=>s.visibleSections)
    ], (0,_components_MobileNavigation__WEBPACK_IMPORTED_MODULE_7__/* .useIsInsideMobileNavigation */ .Fi)());
    let isPresent = (0,framer_motion__WEBPACK_IMPORTED_MODULE_5__.useIsPresent)();
    let firstVisibleSectionIndex = Math.max(0, [
        {
            id: "_top"
        },
        ...sections
    ].findIndex((section)=>section.id === visibleSections[0]));
    let itemHeight = (0,_lib_remToPx__WEBPACK_IMPORTED_MODULE_10__/* .remToPx */ .c)(2);
    let height = isPresent ? Math.max(1, visibleSections.length) * itemHeight : itemHeight;
    let top = group.links.findIndex((link)=>link.href === pathname) * itemHeight + firstVisibleSectionIndex * itemHeight;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {
        layout: true,
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1,
            transition: {
                delay: 0.2
            }
        },
        exit: {
            opacity: 0
        },
        className: "absolute inset-x-0 top-0 bg-zinc-800/2.5 will-change-transform dark:bg-white/2.5",
        style: {
            borderRadius: 8,
            height,
            top
        }
    });
}
function ActivePageMarker({ group , pathname  }) {
    let itemHeight = (0,_lib_remToPx__WEBPACK_IMPORTED_MODULE_10__/* .remToPx */ .c)(2);
    let offset = (0,_lib_remToPx__WEBPACK_IMPORTED_MODULE_10__/* .remToPx */ .c)(0.25);
    let activePageIndex = group.links.findIndex((link)=>link.href === pathname);
    let top = offset + activePageIndex * itemHeight;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {
        layout: true,
        className: "absolute left-2 h-6 w-px bg-emerald-500",
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1,
            transition: {
                delay: 0.2
            }
        },
        exit: {
            opacity: 0
        },
        style: {
            top
        }
    });
}
function NavigationGroup({ group , className  }) {
    // If this is the mobile navigation then we always render the initial
    // state, so that the state does not change during the close animation.
    // The state will still update when we re-open (re-render) the navigation.
    let isInsideMobileNavigation = (0,_components_MobileNavigation__WEBPACK_IMPORTED_MODULE_7__/* .useIsInsideMobileNavigation */ .Fi)();
    let [router, sections] = useInitialValue([
        (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)(),
        (0,_components_SectionProvider__WEBPACK_IMPORTED_MODULE_8__/* .useSectionStore */ .S)((s)=>s.sections)
    ], isInsideMobileNavigation);
    let isActiveGroup = group.links.findIndex((link)=>link.href === router.pathname) !== -1;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
        className: clsx__WEBPACK_IMPORTED_MODULE_4___default()("relative mt-6", className),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.h2, {
                layout: "position",
                className: "text-xs font-semibold text-zinc-900 dark:text-white",
                children: group.title
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "relative mt-3 pl-2",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__.AnimatePresence, {
                        initial: !isInsideMobileNavigation,
                        children: isActiveGroup && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(VisibleSectionHighlight, {
                            group: group,
                            pathname: router.pathname
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {
                        layout: true,
                        className: "absolute inset-y-0 left-2 w-px bg-zinc-900/10 dark:bg-white/5"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__.AnimatePresence, {
                        initial: false,
                        children: isActiveGroup && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ActivePageMarker, {
                            group: group,
                            pathname: router.pathname
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                        role: "list",
                        className: "border-l border-transparent",
                        children: group.links.map((link)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.li, {
                                layout: "position",
                                className: "relative",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(NavLink, {
                                        href: link.href,
                                        active: link.href === router.pathname,
                                        children: link.title
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__.AnimatePresence, {
                                        mode: "popLayout",
                                        initial: false,
                                        children: link.href === router.pathname && sections.length > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.ul, {
                                            role: "list",
                                            initial: {
                                                opacity: 0
                                            },
                                            animate: {
                                                opacity: 1,
                                                transition: {
                                                    delay: 0.1
                                                }
                                            },
                                            exit: {
                                                opacity: 0,
                                                transition: {
                                                    duration: 0.15
                                                }
                                            },
                                            children: sections.map((section)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(NavLink, {
                                                        href: `${link.href}#${section.id}`,
                                                        tag: section.tag,
                                                        isAnchorLink: true,
                                                        children: section.title
                                                    })
                                                }, section.id))
                                        })
                                    })
                                ]
                            }, link.href))
                    })
                ]
            })
        ]
    });
}
const navigation = [
    {
        title: "GUIDES",
        links: [
            {
                title: "Introduction",
                href: "/"
            },
            {
                title: "Industry use cases",
                href: "/industry_use_cases"
            },
            {
                title: "Wallets",
                href: "/wallets"
            },
            {
                title: "Staking",
                href: "/staking"
            },
            {
                title: "Grants",
                href: "/grants"
            },
            {
                title: "Command Line",
                href: "/command_line"
            },
            {
                title: "Developing on native Exzo",
                href: "/developing_native_exzo"
            },
            {
                title: "Integrating",
                href: "/integrating"
            },
            {
                title: "Validating",
                href: "/validating"
            },
            {
                title: "Clusters",
                href: "/clusters"
            },
            {
                title: "Architecture",
                href: "/architecture"
            },
            {
                title: "Software",
                href: "/software"
            },
            {
                title: "Writing Programs",
                href: "/writing_programs"
            },
            {
                title: "Performance Reports",
                href: "/performance_reports"
            }
        ]
    },
    {
        title: "TUTORIALS",
        links: [
            {
                title: "NFT Tutorials",
                href: "/nft_tutorials"
            },
            {
                title: "Solidity Tutorials",
                href: "/solidity_tutorials"
            },
            {
                title: "Set up MetaMask (Mainnet)",
                href: "/setup_metamask_mainnet"
            },
            {
                title: "Set up MetaMask (Testnet)",
                href: "/setup_metamask_testnet"
            },
            {
                title: "Import a Wallet into MetaMask",
                href: "/wallet_metamask"
            },
            {
                title: "Create new MetaMask Wallet",
                href: "/create_metamask_wallet"
            }
        ]
    },
    {
        title: "LINKS",
        links: [
            {
                title: "Smart Contract Audits",
                href: "/smart_contract_audits"
            },
            {
                title: "Links",
                href: "/links"
            }
        ]
    },
    {
        title: "POLICIES AND DIACLAIMERS",
        links: [
            {
                title: "Disclaimer",
                href: "/disclaimer"
            }
        ]
    }
];
function Navigation(props) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
        ...props,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
            role: "list",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TopLevelNavItem, {
                    href: "/",
                    children: "API"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TopLevelNavItem, {
                    href: "#",
                    children: "Documentation"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TopLevelNavItem, {
                    href: "#",
                    children: "Support"
                }),
                navigation.map((group, groupIndex)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(NavigationGroup, {
                        group: group,
                        className: groupIndex === 0 && "md:mt-0"
                    }, group.title)),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                    className: "sticky bottom-0 z-10 mt-6 min-[416px]:hidden",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Button__WEBPACK_IMPORTED_MODULE_6__/* .Button */ .z, {
                        href: "#",
                        variant: "filled",
                        className: "w-full",
                        children: "Sign in"
                    })
                })
            ]
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3621:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "M": () => (/* binding */ Prose)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);


function Prose({ as: Component = "div" , className , ...props }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
        className: clsx__WEBPACK_IMPORTED_MODULE_1___default()(className, "prose dark:prose-invert"),
        ...props
    });
}


/***/ }),

/***/ 8915:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_": () => (/* binding */ MobileSearch),
/* harmony export */   "o": () => (/* binding */ Search)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _algolia_autocomplete_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2204);
/* harmony import */ var _algolia_autocomplete_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_algolia_autocomplete_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1185);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Navigation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3188);
/* harmony import */ var react_highlight_words__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1848);
/* harmony import */ var react_highlight_words__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_highlight_words__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_headlessui_react__WEBPACK_IMPORTED_MODULE_4__, _components_Navigation__WEBPACK_IMPORTED_MODULE_6__]);
([_headlessui_react__WEBPACK_IMPORTED_MODULE_4__, _components_Navigation__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








function useAutocomplete() {
    let id = (0,react__WEBPACK_IMPORTED_MODULE_1__.useId)();
    let router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    let [autocompleteState, setAutocompleteState] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    let [autocomplete] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(()=>(0,_algolia_autocomplete_core__WEBPACK_IMPORTED_MODULE_3__.createAutocomplete)({
            id,
            placeholder: "Find something...",
            defaultActiveItemId: 0,
            onStateChange ({ state  }) {
                setAutocompleteState(state);
            },
            shouldPanelOpen ({ state  }) {
                return state.query !== "";
            },
            getSources ({ query  }) {
                return __webpack_require__.e(/* import() */ 716).then(__webpack_require__.bind(__webpack_require__, 4716)).then(({ search  })=>{
                    return [
                        {
                            sourceId: "documentation",
                            getItems () {
                                return search(query, {
                                    limit: 5
                                });
                            },
                            getItemUrl ({ item  }) {
                                return item.url;
                            },
                            onSelect ({ itemUrl  }) {
                                router.push(itemUrl);
                            }
                        }
                    ];
                });
            }
        }));
    return {
        autocomplete,
        autocompleteState
    };
}
function SearchIcon(props) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        viewBox: "0 0 20 20",
        fill: "none",
        "aria-hidden": "true",
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M12.01 12a4.25 4.25 0 1 0-6.02-6 4.25 4.25 0 0 0 6.02 6Zm0 0 3.24 3.25"
        })
    });
}
function NoResultsIcon(props) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        viewBox: "0 0 20 20",
        fill: "none",
        "aria-hidden": "true",
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M12.01 12a4.237 4.237 0 0 0 1.24-3c0-.62-.132-1.207-.37-1.738M12.01 12A4.237 4.237 0 0 1 9 13.25c-.635 0-1.237-.14-1.777-.388M12.01 12l3.24 3.25m-3.715-9.661a4.25 4.25 0 0 0-5.975 5.908M4.5 15.5l11-11"
        })
    });
}
function LoadingIcon(props) {
    let id = (0,react__WEBPACK_IMPORTED_MODULE_1__.useId)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        viewBox: "0 0 20 20",
        fill: "none",
        "aria-hidden": "true",
        ...props,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                cx: "10",
                cy: "10",
                r: "5.5",
                strokeLinejoin: "round"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                stroke: `url(#${id})`,
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M15.5 10a5.5 5.5 0 1 0-5.5 5.5"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("defs", {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("linearGradient", {
                    id: id,
                    x1: "13",
                    x2: "9.5",
                    y1: "9",
                    y2: "15",
                    gradientUnits: "userSpaceOnUse",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                            stopColor: "currentColor"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                            offset: "1",
                            stopColor: "currentColor",
                            stopOpacity: "0"
                        })
                    ]
                })
            })
        ]
    });
}
function HighlightQuery({ text , query  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_highlight_words__WEBPACK_IMPORTED_MODULE_7___default()), {
        highlightClassName: "underline bg-transparent text-emerald-500",
        searchWords: [
            query
        ],
        autoEscape: true,
        textToHighlight: text
    });
}
function SearchResult({ result , resultIndex , autocomplete , collection , query  }) {
    let id = (0,react__WEBPACK_IMPORTED_MODULE_1__.useId)();
    let sectionTitle = _components_Navigation__WEBPACK_IMPORTED_MODULE_6__/* .navigation.find */ .G.find((section)=>section.links.find((link)=>link.href === result.url.split("#")[0]))?.title;
    let hierarchy = [
        sectionTitle,
        result.pageTitle
    ].filter(Boolean);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
        className: clsx__WEBPACK_IMPORTED_MODULE_5___default()("group block cursor-default px-4 py-3 aria-selected:bg-zinc-50 dark:aria-selected:bg-zinc-800/50", resultIndex > 0 && "border-t border-zinc-100 dark:border-zinc-800"),
        "aria-labelledby": `${id}-hierarchy ${id}-title`,
        ...autocomplete.getItemProps({
            item: result,
            source: collection.source
        }),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                id: `${id}-title`,
                "aria-hidden": "true",
                className: "text-sm font-medium text-zinc-900 group-aria-selected:text-emerald-500 dark:text-white",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(HighlightQuery, {
                    text: result.title,
                    query: query
                })
            }),
            hierarchy.length > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                id: `${id}-hierarchy`,
                "aria-hidden": "true",
                className: "mt-1 truncate whitespace-nowrap text-2xs text-zinc-500",
                children: hierarchy.map((item, itemIndex, items)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(HighlightQuery, {
                                text: item,
                                query: query
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: itemIndex === items.length - 1 ? "sr-only" : "mx-2 text-zinc-300 dark:text-zinc-700",
                                children: "/"
                            })
                        ]
                    }, itemIndex))
            })
        ]
    });
}
function SearchResults({ autocomplete , query , collection  }) {
    if (collection.items.length === 0) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "p-6 text-center",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(NoResultsIcon, {
                    className: "mx-auto h-5 w-5 stroke-zinc-900 dark:stroke-zinc-600"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                    className: "mt-2 text-xs text-zinc-700 dark:text-zinc-400",
                    children: [
                        "Nothing found for",
                        " ",
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("strong", {
                            className: "break-words font-semibold text-zinc-900 dark:text-white",
                            children: [
                                "‘",
                                query,
                                "’"
                            ]
                        }),
                        ". Please try again."
                    ]
                })
            ]
        });
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
        role: "list",
        ...autocomplete.getListProps(),
        children: collection.items.map((result, resultIndex)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SearchResult, {
                result: result,
                resultIndex: resultIndex,
                autocomplete: autocomplete,
                collection: collection,
                query: query
            }, result.url))
    });
}
const SearchInput = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(function SearchInput({ autocomplete , autocompleteState , onClose  }, inputRef) {
    let inputProps = autocomplete.getInputProps({});
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "group relative flex h-12",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SearchIcon, {
                className: "pointer-events-none absolute left-3 top-0 h-full w-5 stroke-zinc-500"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                ref: inputRef,
                className: clsx__WEBPACK_IMPORTED_MODULE_5___default()("flex-auto appearance-none bg-transparent pl-10 text-zinc-900 outline-none placeholder:text-zinc-500 focus:w-full focus:flex-none dark:text-white sm:text-sm [&::-webkit-search-cancel-button]:hidden [&::-webkit-search-decoration]:hidden [&::-webkit-search-results-button]:hidden [&::-webkit-search-results-decoration]:hidden", autocompleteState.status === "stalled" ? "pr-11" : "pr-4"),
                ...inputProps,
                onKeyDown: (event)=>{
                    if (event.key === "Escape" && !autocompleteState.isOpen && autocompleteState.query === "") {
                        // In Safari, closing the dialog with the escape key can sometimes cause the scroll position to jump to the
                        // bottom of the page. This is a workaround for that until we can figure out a proper fix in Headless UI.
                        document.activeElement?.blur();
                        onClose();
                    } else {
                        inputProps.onKeyDown(event);
                    }
                }
            }),
            autocompleteState.status === "stalled" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "absolute inset-y-0 right-3 flex items-center",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(LoadingIcon, {
                    className: "h-5 w-5 animate-spin stroke-zinc-200 text-zinc-900 dark:stroke-zinc-800 dark:text-emerald-400"
                })
            })
        ]
    });
});
function SearchButton(props) {
    let [modifierKey, setModifierKey] = useState();
    useEffect(()=>{
        setModifierKey(/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform) ? "⌘" : "Ctrl ");
    }, []);
    return /*#__PURE__*/ _jsxs(_Fragment, {
        children: [
            /*#__PURE__*/ _jsxs("button", {
                type: "button",
                className: "hidden h-8 w-full items-center gap-2 rounded-full bg-white pl-2 pr-3 text-sm text-zinc-500 ring-1 ring-zinc-900/10 transition hover:ring-zinc-900/20 dark:bg-white/5 dark:text-zinc-400 dark:ring-inset dark:ring-white/10 dark:hover:ring-white/20 lg:flex focus:[&:not(:focus-visible)]:outline-none",
                ...props,
                children: [
                    /*#__PURE__*/ _jsx(SearchIcon, {
                        className: "h-5 w-5 stroke-current"
                    }),
                    "Find something...",
                    /*#__PURE__*/ _jsxs("kbd", {
                        className: "ml-auto text-2xs text-zinc-400 dark:text-zinc-500",
                        children: [
                            /*#__PURE__*/ _jsx("kbd", {
                                className: "font-sans",
                                children: modifierKey
                            }),
                            /*#__PURE__*/ _jsx("kbd", {
                                className: "font-sans",
                                children: "K"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ _jsx("button", {
                type: "button",
                className: "flex h-6 w-6 items-center justify-center rounded-md transition hover:bg-zinc-900/5 dark:hover:bg-white/5 lg:hidden focus:[&:not(:focus-visible)]:outline-none",
                "aria-label": "Find something...",
                ...props,
                children: /*#__PURE__*/ _jsx(SearchIcon, {
                    className: "h-5 w-5 stroke-zinc-900 dark:stroke-white"
                })
            })
        ]
    });
}
function SearchDialog({ open , setOpen , className  }) {
    let router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    let formRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    let panelRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    let inputRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    let { autocomplete , autocompleteState  } = useAutocomplete();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!open) {
            return;
        }
        function onRouteChange() {
            setOpen(false);
        }
        router.events.on("routeChangeStart", onRouteChange);
        router.events.on("hashChangeStart", onRouteChange);
        return ()=>{
            router.events.off("routeChangeStart", onRouteChange);
            router.events.off("hashChangeStart", onRouteChange);
        };
    }, [
        open,
        setOpen,
        router
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (open) {
            return;
        }
        function onKeyDown(event) {
            if (event.key === "k" && (event.metaKey || event.ctrlKey)) {
                event.preventDefault();
                setOpen(true);
            }
        }
        window.addEventListener("keydown", onKeyDown);
        return ()=>{
            window.removeEventListener("keydown", onKeyDown);
        };
    }, [
        open,
        setOpen
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.Transition.Root, {
        show: open,
        as: react__WEBPACK_IMPORTED_MODULE_1__.Fragment,
        afterLeave: ()=>autocomplete.setQuery(""),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.Dialog, {
            onClose: setOpen,
            className: clsx__WEBPACK_IMPORTED_MODULE_5___default()("fixed inset-0 z-50", className),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.Transition.Child, {
                    as: react__WEBPACK_IMPORTED_MODULE_1__.Fragment,
                    enter: "ease-out duration-300",
                    enterFrom: "opacity-0",
                    enterTo: "opacity-100",
                    leave: "ease-in duration-200",
                    leaveFrom: "opacity-100",
                    leaveTo: "opacity-0",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "fixed inset-0 bg-zinc-400/25 backdrop-blur-sm dark:bg-black/40"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "fixed inset-0 overflow-y-auto px-4 py-4 sm:px-6 sm:py-20 md:py-32 lg:px-8 lg:py-[15vh]",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.Transition.Child, {
                        as: react__WEBPACK_IMPORTED_MODULE_1__.Fragment,
                        enter: "ease-out duration-300",
                        enterFrom: "opacity-0 scale-95",
                        enterTo: "opacity-100 scale-100",
                        leave: "ease-in duration-200",
                        leaveFrom: "opacity-100 scale-100",
                        leaveTo: "opacity-0 scale-95",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.Dialog.Panel, {
                            className: "mx-auto overflow-hidden rounded-lg bg-zinc-50 shadow-xl ring-1 ring-zinc-900/7.5 dark:bg-zinc-900 dark:ring-zinc-800 sm:max-w-xl",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                ...autocomplete.getRootProps({}),
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                                    ref: formRef,
                                    ...autocomplete.getFormProps({
                                        inputElement: inputRef.current
                                    }),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SearchInput, {
                                            ref: inputRef,
                                            autocomplete: autocomplete,
                                            autocompleteState: autocompleteState,
                                            onClose: ()=>setOpen(false)
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            ref: panelRef,
                                            className: "border-t border-zinc-200 bg-white empty:hidden dark:border-zinc-100/5 dark:bg-white/2.5",
                                            ...autocomplete.getPanelProps({}),
                                            children: autocompleteState.isOpen && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SearchResults, {
                                                autocomplete: autocomplete,
                                                query: autocompleteState.query,
                                                collection: autocompleteState.collections[0]
                                            })
                                        })
                                    ]
                                })
                            })
                        })
                    })
                })
            ]
        })
    });
}
function useSearchProps() {
    let buttonRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    let [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    return {
        buttonProps: {
            ref: buttonRef,
            onClick () {
                setOpen(true);
            }
        },
        dialogProps: {
            open,
            setOpen (open) {
                let { width , height  } = buttonRef.current.getBoundingClientRect();
                if (!open || width !== 0 && height !== 0) {
                    setOpen(open);
                }
            }
        }
    };
}
function Search() {
    let [modifierKey, setModifierKey] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    let { buttonProps , dialogProps  } = useSearchProps();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setModifierKey(/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform) ? "⌘" : "Ctrl ");
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "hidden lg:block lg:max-w-md lg:flex-auto",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                type: "button",
                className: "hidden h-8 w-full items-center gap-2 rounded-full bg-white pl-2 pr-3 text-sm text-zinc-500 ring-1 ring-zinc-900/10 transition hover:ring-zinc-900/20 dark:bg-white/5 dark:text-zinc-400 dark:ring-inset dark:ring-white/10 dark:hover:ring-white/20 lg:flex focus:[&:not(:focus-visible)]:outline-none",
                ...buttonProps,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SearchIcon, {
                        className: "h-5 w-5 stroke-current"
                    }),
                    "Find something...",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("kbd", {
                        className: "ml-auto text-2xs text-zinc-400 dark:text-zinc-500",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("kbd", {
                                className: "font-sans",
                                children: modifierKey
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("kbd", {
                                className: "font-sans",
                                children: "K"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SearchDialog, {
                className: "hidden lg:block",
                ...dialogProps
            })
        ]
    });
}
function MobileSearch() {
    let { buttonProps , dialogProps  } = useSearchProps();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "contents lg:hidden",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                type: "button",
                className: "flex h-6 w-6 items-center justify-center rounded-md transition hover:bg-zinc-900/5 dark:hover:bg-white/5 lg:hidden focus:[&:not(:focus-visible)]:outline-none",
                "aria-label": "Find something...",
                ...buttonProps,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SearchIcon, {
                    className: "h-5 w-5 stroke-zinc-900 dark:stroke-white"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SearchDialog, {
                className: "lg:hidden",
                ...dialogProps
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3077:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Button": () => (/* reexport safe */ _components_Button__WEBPACK_IMPORTED_MODULE_4__.z),
/* harmony export */   "CodeGroup": () => (/* reexport safe */ _components_Code__WEBPACK_IMPORTED_MODULE_5__.P3),
/* harmony export */   "Col": () => (/* binding */ Col),
/* harmony export */   "Note": () => (/* binding */ Note),
/* harmony export */   "Properties": () => (/* binding */ Properties),
/* harmony export */   "Property": () => (/* binding */ Property),
/* harmony export */   "Row": () => (/* binding */ Row),
/* harmony export */   "a": () => (/* binding */ a),
/* harmony export */   "code": () => (/* reexport safe */ _components_Code__WEBPACK_IMPORTED_MODULE_5__.EK),
/* harmony export */   "h2": () => (/* binding */ h2),
/* harmony export */   "pre": () => (/* reexport safe */ _components_Code__WEBPACK_IMPORTED_MODULE_5__.SU)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Heading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3047);
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5825);
/* harmony import */ var _components_Code__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9721);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Heading__WEBPACK_IMPORTED_MODULE_3__, _components_Code__WEBPACK_IMPORTED_MODULE_5__]);
([_components_Heading__WEBPACK_IMPORTED_MODULE_3__, _components_Code__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const a = (next_link__WEBPACK_IMPORTED_MODULE_1___default());


const h2 = function H2(props) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Heading__WEBPACK_IMPORTED_MODULE_3__/* .Heading */ .X, {
        level: 2,
        ...props
    });
};
function InfoIcon(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        viewBox: "0 0 16 16",
        "aria-hidden": "true",
        ...props,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                cx: "8",
                cy: "8",
                r: "8",
                strokeWidth: "0"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                fill: "none",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "1.5",
                d: "M6.75 7.75h1.5v3.5"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                cx: "8",
                cy: "4",
                r: ".5",
                fill: "none"
            })
        ]
    });
}
function Note({ children  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "my-6 flex gap-2.5 rounded-2xl border border-emerald-500/20 bg-emerald-50/50 p-4 leading-6 text-emerald-900 dark:border-emerald-500/30 dark:bg-emerald-500/5 dark:text-emerald-200 dark:[--tw-prose-links-hover:theme(colors.emerald.300)] dark:[--tw-prose-links:theme(colors.white)]",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(InfoIcon, {
                className: "mt-1 h-4 w-4 flex-none fill-emerald-500 stroke-white dark:fill-emerald-200/20 dark:stroke-emerald-200"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "[&>:first-child]:mt-0 [&>:last-child]:mb-0",
                children: children
            })
        ]
    });
}
function Row({ children  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "grid grid-cols-1 items-start gap-x-16 gap-y-10 xl:max-w-none xl:grid-cols-2",
        children: children
    });
}
function Col({ children , sticky =false  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: clsx__WEBPACK_IMPORTED_MODULE_2___default()("[&>:first-child]:mt-0 [&>:last-child]:mb-0", sticky && "xl:sticky xl:top-24"),
        children: children
    });
}
function Properties({ children  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "my-6",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
            role: "list",
            className: "m-0 max-w-[calc(theme(maxWidth.lg)-theme(spacing.8))] list-none divide-y divide-zinc-900/5 p-0 dark:divide-white/5",
            children: children
        })
    });
}
function Property({ name , type , children  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
        className: "m-0 px-0 py-4 first:pt-0 last:pb-0",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("dl", {
            className: "m-0 flex flex-wrap items-center gap-x-3 gap-y-2",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("dt", {
                    className: "sr-only",
                    children: "Name"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("dd", {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("code", {
                        children: name
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("dt", {
                    className: "sr-only",
                    children: "Type"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("dd", {
                    className: "font-mono text-xs text-zinc-400 dark:text-zinc-500",
                    children: type
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("dt", {
                    className: "sr-only",
                    children: "Description"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("dd", {
                    className: "w-full flex-none [&>:first-child]:mt-0 [&>:last-child]:mb-0",
                    children: children
                })
            ]
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5857:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7834);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(547);
/* harmony import */ var _components_mdx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3077);
/* harmony import */ var _components_MobileNavigation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5387);
/* harmony import */ var _styles_tailwind_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6788);
/* harmony import */ var _styles_tailwind_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_tailwind_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var focus_visible__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2235);
/* harmony import */ var focus_visible__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(focus_visible__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__, _components_Layout__WEBPACK_IMPORTED_MODULE_4__, _components_mdx__WEBPACK_IMPORTED_MODULE_5__, _components_MobileNavigation__WEBPACK_IMPORTED_MODULE_6__]);
([_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__, _components_Layout__WEBPACK_IMPORTED_MODULE_4__, _components_mdx__WEBPACK_IMPORTED_MODULE_5__, _components_MobileNavigation__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









function onRouteChange() {
    _components_MobileNavigation__WEBPACK_IMPORTED_MODULE_6__/* .useMobileNavigationStore.getState */ .fX.getState().close();
}
next_router__WEBPACK_IMPORTED_MODULE_2__.Router.events.on("routeChangeStart", onRouteChange);
next_router__WEBPACK_IMPORTED_MODULE_2__.Router.events.on("hashChangeStart", onRouteChange);
function App({ Component , pageProps  }) {
    let router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
                children: [
                    router.pathname === "/" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: "EXZO NETWORK"
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: `${pageProps.title} - EXZO NETWORK`
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "description",
                        content: pageProps.description
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "icon",
                        href: "/favicon.svg",
                        sizes: "any"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__.MDXProvider, {
                components: _components_mdx__WEBPACK_IMPORTED_MODULE_5__,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_4__/* .Layout */ .A, {
                    ...pageProps,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                        ...pageProps
                    })
                })
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6788:
/***/ (() => {



/***/ }),

/***/ 2204:
/***/ ((module) => {

"use strict";
module.exports = require("@algolia/autocomplete-core");

/***/ }),

/***/ 8103:
/***/ ((module) => {

"use strict";
module.exports = require("clsx");

/***/ }),

/***/ 8395:
/***/ ((module) => {

"use strict";
module.exports = require("flexsearch");

/***/ }),

/***/ 2235:
/***/ ((module) => {

"use strict";
module.exports = require("focus-visible");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 1848:
/***/ ((module) => {

"use strict";
module.exports = require("react-highlight-words");

/***/ }),

/***/ 1185:
/***/ ((module) => {

"use strict";
module.exports = import("@headlessui/react");;

/***/ }),

/***/ 7834:
/***/ ((module) => {

"use strict";
module.exports = import("@mdx-js/react");;

/***/ }),

/***/ 6197:
/***/ ((module) => {

"use strict";
module.exports = import("framer-motion");;

/***/ }),

/***/ 6912:
/***/ ((module) => {

"use strict";
module.exports = import("zustand");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [893,664,47,825], () => (__webpack_exec__(5857)));
module.exports = __webpack_exports__;

})();